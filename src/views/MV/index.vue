<template>
  <div class="root">
    <div class="m-mv">
      <mv-video :urlAndcover="urlAndcover"></mv-video>
      <div class="scroll">
        <user-des v-if="type===2" :user="user"></user-des>
        <mv-des :des="des"></mv-des>
        <recommend :related="related"></recommend>
        <div>
          <template v-if="hotComments.length">
            <h3 class="list_title">精彩评论</h3>
            <comment :type="1" :commentOBJ="commentOBJ"></comment>
          </template>
          <template v-if="hotComments.length < 15 && comments.length">
            <h3 class="list_title">最新评论({{commentOBJ.total}})</h3>
            <comment :type="2" :commentOBJ="commentOBJ"></comment>
          </template>
        </div>
      </div>
      <collect-sheet :text="text"></collect-sheet>
      <loading v-if="isLoading"></loading>
    </div>
  </div>
</template>

<script>
import MvVideo from "@/components/video/Video";
import MvDes from "@/components/video/MvDes";
import Recommend from "./Recommend";
import Comment from "@/components/comment/Comment";
import CollectSheet from "public/CollectSheet";
import Loading from "public/Loading";
import UserDes from './UserDes'

import {
  getMvUrl,
  getRelated,
  getMvDes,
  getMvComments,
  getVideoUrl,
  getVideoDes,
  getVideoComments
} from "@/api/mv-api";
import { Promise } from "q";

export default {
  data() {
    return {
      text: "打开APP看高清",
      isLoading: true,
      urlAndcover: {},
      des: {},
      related: [],
      commentOBJ: {},
      comments: [], // 最新评论
      hotComments: [], // 热门评论
      type: Number, // 类型： MV 或者 视频
      user: {}
    };
  },
  components: {
    MvVideo,
    MvDes,
    Recommend,
    Comment,
    CollectSheet,
    Loading,
    UserDes
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
            playCount: item.playCount,
            type: 'mv'
          };
          resolve();
        });
      });
    },
    _getMvComments() {
      getMvComments(this.id).then(res => {
        this.commentOBJ = res.data;
        this.hotComments = res.data.hotComments;
        this.comments = res.data.comments;
      });
    },
    _getVideoUrl() {
      return new Promise(resolve => {
        getVideoUrl(this.id).then(res => {
          this.$set(this.urlAndcover,'url',res.data.urls[0].url)
        });
        resolve();
      });
    },
    _getVideoDes() {
      return new Promise(resolve => {
        getVideoDes(this.id).then(res => {
          this.$set(this.urlAndcover,'cover',res.data.data.coverUrl)
          let item = res.data.data
          this.user = item.creator,
          this.des = {
            desc: item.description,
            name: item.title,
            publishTime: item.publishTime,
            playCount: item.playTime,
            type: 'video'
          }
        });
        resolve()
      });
    },
    _getVideoComments() {
      getVideoComments(this.id).then(res => {
        this.commentOBJ = res.data
        this.hotComments = this.commentOBJ.hotComments
        this.comments = this.commentOBJ.comments
      });
    },
    getMvAll() {
      Promise.all([
        this._getMvUrl(),
        this._getRelated(),
        this._getMvDes(),
        this._getMvComments()
      ]).then(() => {
        this.isLoading = false;
      });
    },
    getVideoAll() {
      Promise.all([this._getVideoUrl(), this._getVideoDes(),this._getRelated(),this._getVideoComments()]).then(() => {
        this.isLoading = false;
      }); 
    }
  },
  created() {
    if (this.$route.name === "mv") {
      this.type = 1;
      this.getMvAll();
    } else if (this.$route.name === "video") {
      this.type = 2;
      this.getVideoAll();
    }
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