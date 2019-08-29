<template>
  <div class="search_content">
    <section class="match_list">
      <h3 class="title">最佳匹配</h3>
      <ul>
        <li class="artist">
          <item :type="1"></item>
        </li>
        <li class="album">
          <item></item>
        </li>
      </ul>
    </section>
    <section class="song_list">
      <music-list></music-list>
    </section>
    <div class="dialog" v-if="!more">
      <div class="info_box">
        <span>已经滑到底啦~</span>
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
import { searchSong } from "@/api/search-api";
import { mapGetters } from "vuex";
import { setTimeout } from "timers";
import { Promise } from "q";
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
      isLoading: false
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
      keyword: "keyword"
    })
  },
  methods: {
    _searchSong(keyword) {
      searchSong(keyword, this.limit, this.offset).then(res => {
        if (res.data.result.songs.length < 20) {
          this.more = false;
        }
        this.tempSongs.push(...res.data.result.songs);
        this.musicS.song = this.songs;
        this.$store.dispatch("playlist/setMusicList", this.musicS);
        if (this.offset < res.data.result.songCount / this.limit) this.offset++;
      });
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
        if (this.more) {
          this.isLoading = true;
          new Promise(resolve => {
            setTimeout(() => {
              this._searchSong(this.keyword);
              resolve();
            }, 300);
          }).then(() => {
            this.isLoading = false;
          });
        }
      }
    }
  },
  mounted() {
    this._searchSong(this.keyword);

    document.addEventListener("scroll", this.eventFn);
  },
  destroyed() {
    this.$store.dispatch("searchcontent/setKeyword", "");
    this.$store.dispatch("playlist/setMusicList", {});
    document.removeEventListener("scroll", this.eventFn);
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
    .album {
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