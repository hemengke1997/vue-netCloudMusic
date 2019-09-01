<template>
  <div class="s_header" ref="test">
    <img :src="data.picUrl"/>
    <p class="s_name" v-cloak>{{name(data)}}</p>
  </div>
</template>

<script>
import { gotoSinger } from "@/api/search-api";

export default {
  data() {
    return {
      data: {}
    };
  },
  computed: {
    id() {
      return this.$route.query.id;
    },
    name() {
      return data => {
        if (data.alias && data.alias[0]) {
          return `${data.name} (${data.alias[0]})`
        } else if (data.trans) {
          return `${data.name} (${data.trans})`
        } else {
          return data.name
        }
      };
    }
  },
  methods: {
    _gotoSinger(id) {
      gotoSinger(id).then(res => {
        this.data = res.data.artist;
        this.$store.dispatch('searchcontent/setHotSongs',res.data.hotSongs)
        this.$store.dispatch('playlist/setPlaylist',{
          description: res.data.artist.briefDesc
        })
      });
    }
  },
  mounted() {
    this._gotoSinger(this.id);
  }
};
</script>



<style lang="less" scoped>
[v-cloak] {
  display: none;
}
.s_header {
  position: relative;
  padding-top: 68%;
  overflow: hidden;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 80px;
    z-index: 2;
    background: linear-gradient(0deg, rgba(0, 0, 0, 0.1), transparent);
  }
  img {
    position: absolute;
    left: 0;
    top: 0;
    z-index: 1;
    width: 100%;
    vertical-align: middle;
  }
  .s_name {
    position: absolute;
    left: 15px;
    right: 15px;
    bottom: 8px;
    z-index: 3;
    color: #fff;
    font-size: 17px;
    .text_overflow;
  }
}
</style>