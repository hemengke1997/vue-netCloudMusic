<template>
  <router-link class="link_cover" to="xxx">
    <figure class="ignore_piccover" :class="{album:type!=1}">
      <img :src="coverSrc" />
    </figure>
    <article class="desc">
      <h4 class="maindes">
        {{maindes}}
        <p class="hcover" v-if="hasKey">
          <span v-for="(item,index) in title" :key="index">
            <span :class="{highlight:0}">{{item}}</span>
          </span>
        </p>
        <p class="hcover" v-else>{{title}}</p>
      </h4>
      <p class="author" v-if="type!=1&&authorHasKey">
        <span v-for="(item,index) in author" :key="index">
          <span :class="{highlight:highlight}">{{item}}</span>
        </span>
      </p>
      <p class="author" v-if="type!=1&&!authorHasKey">{{singers(album.artists)}}</p>
    </article>
    <i class="iconfont icon-pull_down"></i>
  </router-link>
</template>

<script>
import { mapGetters } from "vuex";
import { searchSinger, searchAlbum } from "@/api/search-api";
export default {
  data() {
    return {
      highlight: true,
      hasKey: false,
      authorHasKey: false,
      title: "",
      singer: {},
      album: {
        alias: []
      }
    };
  },
  props: {
    type: {
      type: Number
    }
  },
  computed: {
    maindes() {
      return this.type === 1 ? "歌手:" : "专辑:";
    },
    coverSrc() {
      return this.type === 1 ? this.singer.img1v1Url : this.album.picUrl;
    },
    author() {
      return 0;
    },
    singers() {
      return function(ar) {
        if (!ar) {
          return;
        }
        if (ar.length === 1) {
          return ar[0].name;
        } else {
          let temp = [];
          ar.forEach(singer => {
            temp.push(singer.name);
          });
          return temp.join(" / ");
        }
      };
    },
    ...mapGetters({
      keyword: "keyword"
    })
  },
  methods: {
    getTitle() {
      // 歌手
      if (this.type === 1) {
        if (this.singer.alia) {
          this.title = `${this.singer.name} (${this.singer.alia[0]})`;
        } else if (this.singer.transNames) {
          this.title = `${this.singer.name} (${this.singer.transNames[0]})`;
        } else if (this.singer.name) {
          this.title = this.singer.name;
        }
        this.hasKeyword(this.title)
      } else {
        this.title = this.album.alias.length > 0 ? `${this.album.name} (${this.album.alias[0]})` : this.album.name
        this.hasKeyword(this.title)
      }
    },
    _searchSinger() {
      searchSinger(this.keyword).then(res => {
        this.singer = res.data.result.artists[0];
      });
    },
    _searchAlbum() {
      searchAlbum(this.keyword).then(res => {
        this.album = res.data.result.albums[0];
      });
    },
    hasKeyword(k) {
        if(k.indexOf(this.keyword) != -1) {
            this.hasKey = true
        } else {
            this.hasKey = false
        }
    }
  },
  created() {
    this._searchSinger();
    this._searchAlbum();
  },
  //   destroyed() {
  //     this.singer = {},
  //     this.album = {}
  //   }
  watch: {
    singer() {
      this.getTitle();
    },
    album() {
      this.getTitle();
    }
  }
};
</script>

<style lang="less" scoped>
.highlight {
  color: #507daf;
}
.link_cover {
  display: flex;
  align-items: center;
  height: 66px;
  margin-left: 10px;
  padding: 8px 10px 8px 0;
  box-sizing: border-box;
  &::after {
    .small_border;
    border-bottom-width: 1px;
  }
  .ignore_piccover {
    position: relative;
    width: 50px;
    height: 50px;
    margin-right: 15px;
    line-height: 0;
    flex: none;
    &.album::after {
      content: "";
      position: absolute;
      top: 2px;
      right: -10px;
      width: 10px;
      height: 46px;
      background-repeat: no-repeat;
      background-size: 166px 97px;
      background-image: url('../../assets/img/index_icon_2x.png');
      background-position: 0 -30px;
      @media screen and (-webkit-min-device-pixel-ratio: 3){
          background-image: url('../../assets/img/index_icon_3x.png');
      }
    }
    img {
      width: 100%;
      height: 100%;
    }
  }
  .desc {
    flex: 1;
    width: 1%;
    display: inline-block;
    .maindes {
      .text_overflow;
      font-size: 17px;
      line-height: 30px;
      color: #333;
      .hcover {
        display: inline-block;
      }
    }
  }
  .author {
    font-size: 12px;
    line-height: 15px;
    color: #999;
  }
  .icon-pull_down {
    transform: rotate(-90deg);
  }
}
</style>