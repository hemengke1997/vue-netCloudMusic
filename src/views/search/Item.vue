<template>
  <router-link class="link_cover" to="xxx">
    <figure class="ignore_piccover" :class="{album:type!=1}">
      <img :src="coverSrc" />
    </figure>
    <article class="desc">
      <h4 class="maindes">
        {{maindes}}
        <p class="hcover">
          <span v-html="newHtml(data.name)"></span>
        </p>
      </h4>

      <p class="author" v-if="type!=1">
        <span v-html="newHtml(getArtists(data.artists))"></span>
      </p>
    </article>
    <i class="iconfont icon-pull_down"></i>
  </router-link>
</template>

<script>
import { mapGetters } from "vuex";
import { searchSinger, searchAlbum } from "@/api/search-api";
import { Promise } from "q";
export default {
  data() {
    return {
      highlight: true,
      titleHasKey: false,
      authorHasKey: false,
      data: {}
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
      if(this.type === 1) {
        return "歌手:"
      } else if (this.type === 2) {
        return "专辑:"
      } else if (this.type === 3) {
        return "MV："
      }
    },
    coverSrc() {
      if(this.type === 1) {
        return this.data.img1v1Url
      } else if (this.type === 2) {
        return this.data.picUrl
      } else if (this.type === 3) {
        return ;
      }
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
    ...mapGetters({
      keyword: "keyword"
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
      } else {
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
          console.log(res.data)
          let data = res.data.result.artists[0];
          this.data = data;
          this.$set(this.data, "name", this.getTitle(data));
        });
        resolve()
      });
    },
    _searchAlbum() {
      return new Promise(resolve => {
        searchAlbum(this.keyword).then(res => {
          if (res.data.result.albums && res.data.result.albums[0]) {
            this.$store.dispatch("searchcontent/hasAlbumOrNot", true);
            let data = res.data.result.albums[0];
            this.data = data;
            this.$set(this.data, "name", this.getTitle(data));
          } else {
            this.$store.dispatch("searchcontent/hasAlbumOrNot", false);
          }
          resolve();
        });
      });
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
    } else {
      this._searchAlbum().then(() => {
        this.$store.dispatch("searchcontent/setSearchLoading", false);
      });
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