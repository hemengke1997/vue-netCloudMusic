<template>
  <section class="pllist_intro">
    <div class="tags" v-if="tagslength">
      标签：
      <span
        class="tag ignore_tag_bottom"
        v-for="(item,index) in playlist.tags"
        :key="index"
      >{{item}}</span>
    </div>
    <div class="u_intro"  v-if="playlist.description">
      <div class="intro_3" :class="{three_line:overthree}" ref="intro" @click.prevent="showDes">
        <span>
          <i>简介：{{description_first}}</i>
          <br />
        </span>
        <span v-for="(item,index) in description_last" :key="index">
          <i>{{item}}</i>
          <br />
        </span>
      </div>
      <i class="iconfont icon-pull_down" v-if="arrow" :class="{arrow:!overthree}"></i>
    </div>
  </section>
</template>

<script>
import { mapGetters } from "vuex";
export default {
  data() {
    return {
      lineheight: 19, // 写死在样式里面的
      flag: false,
      overthree: false,
      arrow: false,
      init: true
    };
  },
  computed: {
    tagslength() {
      return this.playlist.tags && this.playlist.tags.length;
    },
    description_first() {
      if (this.description) {
        return this.description[0];
      }
      return "";
    },
    description_last() {
      if (this.description) {
        return this.description.slice(1);
      }
      return "";
    },
    description() {
      if (this.playlist.description) {
        return this.playlist.description.split(/\n/);
      }
      return "";
    },
    ...mapGetters({
      playlist: "playlist"
    })
  },
  methods: {
    showDes() {
      if (this.flag) {
        this.overthree = !this.overthree;
      }
    },
    updateHeight: async function() {
        await this.$nextTick()
        if (
          this.$refs.intro &&
          this.$refs.intro.offsetHeight / this.lineheight > 4
        ) {
          this.arrow = true;
          this.overthree = true;
          this.flag = true;
        }
    }
  },
  destroyed() {
    this.$store.dispatch("playlist/setPlaylist",{})
  },
  updated() {
    if(this.init) {
      this.init = false
      this.updateHeight()
    }
  }
}
</script>

<style lang="less" scoped>
.pllist_intro {
  position: relative;
  margin: 0 10px 0 15px;
  padding-top: 10px;
  line-height: 19px;
  color: #666;
  .tags {
    margin-bottom: 10px;
    margin-right: -10px;
    line-height: 20px;
    font-size: 14px;
    .tag {
      display: inline-block;
      margin-right: 10px;
      padding: 1px 8px;
      font-size: 12px;
      position: relative;
      &::after {
        .small_border;
      }
    }
    .ignore_tag_bottom {
      &::after {
        border-width: 1px;
        border-radius: 80px;
      }
    }
  }
  .u_intro {
    padding-bottom: 18px;
    position: relative;
    color: #666;
    line-height: 19px;
    .three_line {
      .text_2;
      -webkit-line-clamp: 3;
    }
    .intro_3 {
      .break_2;
      i {
        font-style: normal;
        font-size: 14px;
      }
    }
    .icon-pull_down {
      float: right;
    }
    .arrow {
      transform: rotate(-180deg);
    }
  }
}
</style>