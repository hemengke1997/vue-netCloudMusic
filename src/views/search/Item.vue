<template>
  <router-link class="link_cover" :to=to>
    <figure class="ignore_piccover" :class="{album:type===2,ignore_mv: type===3}">
      <img :src="coverSrc" :class="{hasMV:hasMV}" />
      <i class="iconfont icon-bofang" v-if="type===3"></i>
    </figure>
    <article class="desc">
      <h4 class="maindes">
        {{maindes}}
        <p class="hcover">
          <span v-html="newHtml(data.name)"></span>
        </p>
      </h4>

      <p class="author" v-if="type===2||type===3">
        <span v-html="newHtml(getArtists(data.artists))"></span>
      </p>
    </article>
    <i class="iconfont icon-pull_down"></i>
  </router-link>
</template>

<script>
import { searchSinger, searchAlbum, searchMV } from "@/api/search-api";
import { Promise } from "q";
import {mapGetters} from 'vuex'
export default {
  data() {
    return {
      highlight: true,
      titleHasKey: false,
      authorHasKey: false,
      data: {},
      hasMV: true
    };
  },
  props: {
    type: {
      type: Number,
      required: true
    }
  },
  computed: {
    maindes() {
      if (this.type === 1) {
        return "歌手:";
      } else if (this.type === 2) {
        return "专辑:";
      } else if (this.type === 3) {
        return "MV：";
      } return ''
    },
    coverSrc() {
      if (this.type === 1) {
        return this.data.img1v1Url;
      } else if (this.type === 2) {
        return this.data.picUrl;
      } else if (this.type === 3) {
        return this.data.cover
      } return ''
    },
    newHtml() {
      return name => {
        if (!name) {
          return "";
        }
        const index = name.indexOf(this.keyword);
        if (index != -1) {
          let reg = new RegExp(this.keyword, "g");
          return name.replace(
            reg,
            `<span class="highlight">${this.keyword}</span>`
          );
        } else {
          return name;
        }
      };
    },
    getArtists() {
      return ar => {
        if (!ar) {
          return "";
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
    to(){
      if(this.type === 1) {
        return `/singer?id=${this.data.id}`
      } else if (this.type === 2) {
        return `/album?id=${this.data.id}`
      } else if (this.type === 3) {
        return `/MV?id=${this.data.id}`
      } return '/'
    },
    ...mapGetters({
      keyword: 'keyword'
    })
  },
  methods: {
    getTitle(data) {
      // 歌手
      if (this.type === 1) {
        if (data.transNames && data.transNames[0]) {
          return `${data.name} (${data.transNames[0]})`;
        } else if (data.alias && data.alias[0]) {
          return `${data.name} (${data.alias[0]})`;
        } else {
          return data.name.trim();
        }
      } else if(this.type === 2 || this.type === 3){
        if (data.alias && data.alias[0]) {
          return `${data.name} (${data.alias[0]})`.trim();
        } else {
          return data.name.trim();
        }
      }
    },
    _searchSinger() {
      return new Promise(resolve => {
        searchSinger(this.keyword).then(res => {
          let data = res.data.result.artists[0];
          this.data = data;
          console.log(data,'歌手')
          this.$set(this.data, "name", this.getTitle(data));
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
            this.data = data;
            console.log(data,'专辑')
            this.$set(this.data, "name", this.getTitle(data));
          } else {
            this.$store.dispatch("searchcontent/hasAlbumOrNot", false);
          }
          resolve();
        });
      });
    },
    _searchMV() {
      return new Promise(resolve=>{
        searchMV(this.keyword).then(res=>{
          if(res.data.result.mvs && res.data.result.mvs[0]) {
            this.$store.dispatch("searchcontent/hasMVOrNot",true)
            let data = res.data.result.mvs[0]
            this.data = data
            console.log(data,'MV')
            this.$set(this.data,'name',this.getTitle(data))
          } else {
            this.$store.dispatch("searchcontent/hasMVOrNot",false)
          }
          resolve()
        })
      })
    },
    hasKeyword(k) {
      if (k.indexOf(this.keyword) != -1) {
        this.hasKey = true;
        return true;
      } else {
        this.hasKey = false;
        return false;
      }
    }
  },
  created() {
    if (this.type === 1) {
      this._searchSinger().then(() => {
        this.$store.dispatch("searchcontent/setSearchLoading", false);
      });
    } else if (this.type === 2) {
      this._searchAlbum().then(() => {
        this.$store.dispatch("searchcontent/setSearchLoading", false);
      });
    } else if (this.type === 3) {
      this._searchMV().then(()=>{
        this.$store.dispatch("searchcontent/setSearchLoading", false)
      })
    }
  }
};
</script>

<style lang="less" scoped>
.link_cover {
  display: flex;
  align-items: center;
  height: 66px;
  margin-left: 10px;
  padding: 8px 10px 8px 0;
  box-sizing: border-box;
  position: relative;
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
      background-image: url("../../assets/img/index_icon_2x.png");
      background-position: 0 -30px;
      @media screen and (-webkit-min-device-pixel-ratio: 3) {
        background-image: url("../../assets/img/index_icon_3x.png");
      }
    }
    &.ignore_mv {
      width: 89px;
      height: 50px;
      .hasMV {
        width: 100%;
        height: 100%;
      }
      .icon-bofang {
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%);
        font-size: 20px;
        color: rgba(255,255,255,.8);
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