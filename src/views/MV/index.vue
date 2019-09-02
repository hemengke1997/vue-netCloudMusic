<template>
  <div class="root">
    <div class="m-mv">
      <mv-video :urlAndcover="urlAndcover"></mv-video>
      <div class="scroll">
        <video-des :des="des"></video-des>
        <recommend :related="related"></recommend>
        <div>
          <h3 class="list_title">精彩评论</h3>
          <comment :type="1" :commentOBJ="commentOBJ"></comment>
          <h3 class="list_title">最新评论</h3>
          <comment :type="2" :commentOBJ="commentOBJ"></comment>
        </div>
      </div>
      <collect-sheet :text="text"></collect-sheet>
      <loading v-if="isLoading"></loading>
    </div>
  </div>
</template>

<script>
import MvVideo from "@/components/video/Video";
import VideoDes from "@/components/video/VideoDes";
import Recommend from "./Recommend";
import Comment from "@/components/comment/Comment";
import CollectSheet from "public/CollectSheet";
import Loading from "public/Loading";
import { getMvUrl, getRelated, getMvDes, getMvComments } from "@/api/mv-api";
import { Promise } from "q";

export default {
  data() {
    return {
      text: "打开APP看高清",
      isLoading: true,
      urlAndcover: {},
      des: {},
      related: [],
      commentOBJ: {}
    };
  },
  components: {
    MvVideo,
    VideoDes,
    Recommend,
    Comment,
    CollectSheet,
    Loading
  },
  computed: {
    id() {
      return this.$route.query.id;
    }
  },
  methods: {
    _getMvUrl() {
      return new Promise(resolve => {
        getMvUrl(this.id).then(res => {
          this.$set(this.urlAndcover, "url", res.data.data.url);
          resolve();
        });
      });
    },
    _getRelated() {
      return new Promise(resolve => {
        getRelated(this.id).then(res => {
          this.related = res.data.data.map(item => {
            return {
              type: item.type,
              cover: item.coverUrl,
              playCount: item.playTime,
              title: item.title,
              creator: item.creator[0],
              durations: item.durationms,
              vid: item.vid
            };
          });
          resolve();
        });
      });
    },
    _getMvDes() {
      return new Promise(resolve => {
        getMvDes(this.id).then(res => {
          this.$set(this.urlAndcover, "cover", res.data.data.cover);
          let item = res.data.data;
          this.des = {
            artists: item.artists,
            desc: item.desc,
            name: item.name,
            publishTime: item.publishTime,
            playCount: item.playCount
          };
          resolve();
        });
      });
    },
    _getMvComments() {
      getMvComments(this.id).then(res => {
        
      });
    },
    getAll() {
      Promise.all([
        this._getMvUrl(),
        this._getRelated(),
        this._getMvDes()
      ]).then(() => {
        this.isLoading = false;
      });
    }
  },
  created() {
    this.getAll();
  }
};
</script>

<style lang="less" scoped>
.root {
  position: relative;
  background-color: #fcfcfd;
  height: 100%;
  .m-mv {
    min-height: 100%;
    box-sizing: border-box;
    background-color: #fbfcfd;
    .scroll {
      position: absolute;
      top: 0;
      bottom: 55px;
      left: 0;
      right: 0;
      margin-top: 56.25%;
      overflow-y: auto;
      -webkit-overflow-scrolling: touch;
      .list_title {
        .listTitle;
      }
    }
  }
}
</style>