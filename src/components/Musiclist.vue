<template>
  <ul class="song_ul">
    <slot></slot>
    <li
      class="song_li"
      v-for="(item,index) in musicList.song"
      :key="index"
      @click="playsong(item.id)"
    >
      <div class="ignore_rank" :class="{red: red(index)}" v-if="musicList.rank">{{rank(index+1)}}</div>
      <div class="content">
        <div class="left_part">
          <div class="song_title">
            <span v-html="newHtml(item.name)"></span>
            <span v-if="item.alias.length" class="alias">
              <span>(</span>
              <span v-html="newHtml(item.alias[0])"></span>
              <span>)</span>
            </span>
          </div>
          <div class="song_details">
            <i class="iconfont icon-sq" v-if="musicList.SQ"></i>
            <span v-html="newHtml(singers(item.ar))"></span> -
            <span v-html="newHtml(item.al.name)"></span>
          </div>
        </div>
        <div class="right_part">
          <i class="iconfont icon-bofang"></i>
        </div>
      </div>
    </li>
  </ul>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  props: {
    highlight: {   // 是否需要关键词高亮
      type: Boolean,
      default: true
    }
  },
  methods: {
    playsong(id) {
      this.$router.push({
        path: "/song",
        query: { id: id }
      });
    }
  },
  computed: {
    rank() {
      return function(index) {
        if(this.musicList.song.length>10) {
          return index < 10 ? `0${index}` : index;
        }
        return index;
      };
    },
    singers() {
      return function(ar) {
        if (!ar) {
          return "";
        }
        if (ar.length === 1) {
          return ar[0].name;
        } else {
          let temp = [];
          ar.forEach(item => {
            temp.push(item.name);
          });
          return temp.join(" / ");
        }
      };
    },
    red() {
      return function(index) {
        return index < 3 && this.musicList.red;
      };
    },
    newHtml() {
      return name => {
        if (!name) {
          return "";
        } else if (!this.highlight || this.keyword === "") {
          return name;
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
    ...mapGetters({
      musicList: "musicList",
      keyword: "keyword"
    })
  },
  destroyed() {
    this.$store.dispatch("playlist/setMusicList", {});
  }
};
</script>

<style lang="less" scoped>
.song_ul {
  .song_li {
    display: flex;
    .ignore_rank {
      width: 40px;
      display: flex;
      justify-content: center;
      align-items: center;
      margin-right: -10px;
      color: #999;
      &.red {
        color: #df3436;
      }
    }
    .content {
      flex: 1 1 auto;
      display: flex;
      position: relative;
      padding-left: 10px;
      &::after {
        position: absolute;
        content: "";
        bottom: 0;
        left: 0;
        pointer-events: none;
        box-sizing: border-box;
        width: 100%;
        border: 0 solid rgba(0, 0, 0, 0.1);
        border-bottom-width: 1px;
        transform: scaleY(0.2);
      }
      .left_part {
        padding: 6px 0;
        flex: 1 1 auto;
        width: 0;
        line-height: 21px;
        .song_title {
          font-size: 17px;
          .text_overflow;
          .alias {
            color: #888;
            font-size: 0;
            span {
              font-size: 17px;
            }
          }
        }
        .song_details {
          font-size: 12px;
          color: #888;
          .text_overflow;
          i {
            font-size: 12px;
            color: #ffa54a;
          }
        }
      }
      .right_part {
        display: flex;
        align-items: center;
        padding: 0 10px;
        i {
          font-size: 26px;
          color: #9f9f9f;
        }
      }
    }
  }
}
</style>

