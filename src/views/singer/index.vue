<template>
  <div class="singer_root">
    <singer></singer>
    <detail-des ref="child" :type="1" v-if="playlist.description"></detail-des>
    <music-list :highlight="false">
      <h3 class="list_title" v-cloak>热门单曲{{amount}}首</h3>
    </music-list>
    <collect-sheet :text="text"></collect-sheet>
    <loading v-if="isLoading"></loading>
  </div>
</template>

<script>
import Singer from "./Singer";
import DetailDes from "@/components/playlist&album/DetailDes";
import CollectSheet from "public/CollectSheet";
import MusicList from '@/components/Musiclist'
import Loading from "public/Loading";
import { mapGetters } from "vuex";

export default {
  data() {
    return {
      isLoading: true,
      text: "下载热门歌曲",
      musicH: {
        // 歌手的热门单曲
        song: [],
        red: false,
        rank: true,
        SQ: false
      },
      tempSongs: []
    };
  },
  components: {
    Singer,
    DetailDes,
    MusicList,
    CollectSheet,
    Loading
  },
  computed: {
    songs() {
      return this.tempSongs.map(item => {
        return {
          id: item.id,
          name: item.name,
          alias: item.alia,
          ar: item.ar,
          al: {
            name: item.al.name
          }
        };
      });
    },
    amount() {
      return this.hotSongs.length
    },
    ...mapGetters({
      hotSongs: "hotSongs",
      playlist: "playlist"
    })
  },
  methods: {
    setHotSongs() {
      this.tempSongs = this.hotSongs;
      this.musicH.song = this.songs;
      this.$store.dispatch("playlist/setMusicList", this.musicH).then(()=>{
        this.isLoading = false
      });
    }
  },
  // 很不喜欢用watch方法 ，但是这里需要在得到了hotsong之后再渲染
  // 如果在声明钩子中获取hotsongs 得到的是一个vue观察者对象
  // 因为数据是从子组件传上来的 这里是父组件 暂时是得不到数据的
  watch: {
    hotSongs() {
      this.setHotSongs();
    }
  },
  updated() {
    this.$refs.child.updateHeight()
  }
};
</script>

<style lang="less" scoped>
[v-cloak] {
  display: none;
}
.singer_root {
  height: 100%;
  min-height: 100%;
  box-sizing: border-box;
  .list_title {
    .listTitle;
  }
}
</style>