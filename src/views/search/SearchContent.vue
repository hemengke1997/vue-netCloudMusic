<template>
  <div class="search_content">
    <section class="match_list">
      <h3 class="title">最佳匹配</h3>
      <ul>
        <li class="artist">
          <item :type="1" :data="singer"></item>
        </li>
        <li class="album" v-if="hasAlbum">
          <item :type="2" :data="album"></item>
        </li>
        <li class="MV" v-if="hasMV">
          <item :type="3" :data="mv"></item>
        </li>
      </ul>
    </section>
    <section class="song_list">
      <music-list></music-list>
    </section>
    <div class="dialog" v-if="!more">
      <div class="info_box">
        <span>没有更多歌曲了. T^T</span>
      </div>
    </div>
    <div class="loading" v-if="isLoading">
      <div class="info_box">
        <img src="../../assets/img/loading.gif" alt="loading" class="ignore_gif" />
        <span class="info">正在加载...</span>
      </div>
    </div>
  </div>
</template>

<script>
import Item from "./Item";
import MusicList from "@/components/Musiclist";
import { mapGetters } from "vuex";
import { setTimeout } from "timers";
import { Promise } from "q";
import {
  searchSinger,
  searchAlbum,
  searchMV,
  searchSong
} from "@/api/search-api";

export default {
  name: "SearchContent",
  data() {
    return {
      musicS: {
        //  传到store中的歌曲列表
        song: [],
        rank: false,
        red: false,
        SQ: false
      },
      type: "highlight",
      tempSongs: [],
      limit: 20,
      offset: 0,
      more: true,
      isLoading: false,
      singer: {}, // 查询到的歌手
      album: {}, // 查询到的专辑
      mv: {} // 查询到的MV
    };
  },
  components: {
    Item,
    MusicList
  },
  computed: {
    songs() {
      return this.tempSongs.map(item => {
        return {
          id: item.id,
          name: item.name,
          alias: item.alias,
          ar: item.artists,
          al: {
            name: item.album.name
          }
        };
      });
    },
    ...mapGetters({
      hasAlbum: "hasAlbum",
      hasMV: "hasMV",
      keyword: "keyword"
    })
  },
  methods: {
    _searchSong() {
      return new Promise(resolve => {
        searchSong(this.keyword, this.limit, this.offset).then(res => {
          if (res.data.result.songs.length < 20) {
            this.more = false;
          }
          this.tempSongs.push(...res.data.result.songs);
          // console.log(this.tempSongs);
          this.musicS.song = this.songs;
          this.$store.dispatch("playlist/setMusicList", this.musicS);
          this.offset++;
          resolve();
        });
      });
    },
    _searchSinger() {
      return new Promise(resolve => {
        searchSinger(this.keyword).then(res => {
          let data = res.data.result.artists[0];
          this.singer = data;
          this.$set(this.singer, "name", this.getTitle(data, 1));
        });
        resolve();
      });
    },
    _searchAlbum() {
      return new Promise(resolve => {
        searchAlbum(this.keyword).then(res => {
          if (res.data.result.albums && res.data.result.albums[0]) {
            this.$store.dispatch("searchcontent/hasAlbumOrNot", true);
            let data = res.data.result.albums[0];
            this.album = data;
            this.$set(this.album, "name", this.getTitle(data, 2));
          } else {
            this.$store.dispatch("searchcontent/hasAlbumOrNot", false);
          }
          resolve();
        });
      });
    },
    _searchMV() {
      return new Promise(resolve => {
        searchMV(this.keyword).then(res => {
          if (res.data.result.mvs && res.data.result.mvs[0]) {
            this.$store.dispatch("searchcontent/hasMVOrNot", true);
            let data = res.data.result.mvs[0];
            this.mv = data;
            this.$set(this.mv, "name", this.getTitle(data, 3));
          } else {
            this.$store.dispatch("searchcontent/hasMVOrNot", false);
          }
          resolve();
        });
      });
    },
    searchAll() {
      Promise.all([
        this._searchSong(),
        this._searchSinger(),
        this._searchAlbum(),
        this._searchMV()
      ]).then(() => {
        this.$emit("changeSearchLoading");
      });
    },
    getTitle(data, type) {
      if (type === 1) {
        if (data.transNames && data.transNames[0]) {
          return `${data.name} (${data.transNames[0]})`;
        } else if (data.alias && data.alias[0]) {
          return `${data.name} (${data.alias[0]})`;
        } else {
          return data.name.trim();
        }
      } else if (type === 2 || type === 3) {
        if (data.alias && data.alias[0]) {
          return `${data.name} (${data.alias[0]})`.trim();
        } else {
          return data.name.trim();
        }
      }
    },
    eventFn() {
      const clientHeight =
        document.documentElement.clientHeight || document.body.clientHeight;
      const scrollHeight =
        document.documentElement.scrollHeight || document.body.scrollHeight;
      let scrollTop =
        document.documentElement.scrollTop || document.body.scrollTop;
      if (scrollTop + clientHeight === scrollHeight) {
        // 异步请求歌曲
        if (this.more && !this.isLoading) {
          this.isLoading = true;
          new Promise(() => {
            setTimeout(() => {
              this._searchSong(this.keyword).then(() => {
                this.isLoading = false;
              });
            }, 300);
          });
        }
      }
    }
  },
  mounted() {
    this.searchAll();

    document.addEventListener("scroll", this.eventFn);
  },
  destroyed() {
    document.removeEventListener("scroll", this.eventFn);

    // 如果不把 hasMV 的值置为true 搜索了没有mv的结果 会导致以后的搜索都不显示MV
    // 渲染顺序是先从父组件开始的。父组件获取到的hasMV为false 就不再执行type=3的item了
    if (!this.hasMV) {
      this.$store.dispatch("searchcontent/hasMVOrNot", true);
    }
  }
};
</script>

<style lang="less" scoped>
.search_content {
  .match_list {
    padding: 8px 0 4px;
    .title {
      margin-left: 10px;
      font-size: 12px;
      line-height: 16px;
      color: #666;
    }
    .artist,
    .album .MV {
      position: relative;
      height: 66px;
    }
  }
  .dialog {
    padding: 6px 0px;
    .info_box {
      display: flex;
      align-items: center;
      justify-content: center;
      span {
        color: #666;
        font-size: 14px;
      }
    }
  }
  .loading {
    padding: 6px 0;
    .info_box {
      display: flex;
      align-items: center;
      justify-content: center;
      .ignore_gif {
        width: 14px;
        height: 14px;
        margin-right: 2px;
      }
      .info {
        font-size: 14px;
      }
    }
  }
}
</style>