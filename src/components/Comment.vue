<template>
  <div class="comment_list">
    <comment-item v-for="(item,index) in comment" :key="index" :item="item"></comment-item>
    <div class="cmt_more" v-if="judgement && total > sum">
      <span class="box" @click="download">
        查看全部{{total}}条评论
        <i class="iconfont icon-pull_down"></i>
      </span>
    </div>
  </div>
</template>

<script>
import { getComments } from "@/api/comment-api";
import {OK} from 'js/config'
import CommentItem from '@/components/CommentItem'
export default {
  data() {
    return {
      comment: [],
      sum: 15,
      total: 0,
      comments: {    // 总的comments对象
        hotComments:[],
      }
    };
  },
  props: {
    type: {
      type: Number,
      required: true
    },
    id: {
      required: true
    }
  },
  components: {
    CommentItem
  },
  computed: {
    judgement() {
      return (this.comments.hotComments.length >= 15 && this.type === 1) || (this.comments.hotComments.length < 15 && this.type === 2)
    },
    // 评论中艾特了别人的效果暂时没想到怎么做  想到了  用正则表达式匹配 @xxx  @[^\s]+\s?
    // at() {
    //   return function(content) {
    //     if(content.indexOf('@') != -1) {
    //       const point = content.indexOf('@')
    //       let temp = content.slice(point)
    //       let at = temp.trim().split(" ")[0]

    //     }
    //     else {
    //       return content
    //     }
    //   }
    // }
  },
  methods: {
    _getComment(id,type) {
      getComments(id).then(res => {
        if(res.status === OK) {
          this.$store.dispatch('comment/setHotcommentLength',res.data.hotComments.length)
          this.$store.dispatch('comment/setNewcommentLength',res.data.comments.length)
          this.total = res.data.total
          this.comments = res.data
          // console.log(this.comments)
          if(type === 1) {
            this.comment = res.data.hotComments
          } else if (type === 2 && res.data.hotComments.length < this.sum) {
            this.comment = res.data.comments.slice(0, this.sum - res.data.hotComments.length)
          }
        }
      });
    },
    download() {
      this.$router.push({
        path: '/download'
      })
    }
  },
  created() {
    this._getComment(this.id,this.type)
  }
};
</script>

<style lang="less" scoped>
.comment_list {
  .cmt_more {
    margin-left: 50px;
    position: relative;
    .box {
      display: block;
      margin-right: 50px;
      padding: 18px 0;
      font-size: 14px;
      color: #999;
      text-align: center;
      line-height: 1;
      .icon-pull_down {
        display: inline-block;
        transform: rotate(-90deg);
        vertical-align: text-top;
      }
    }
  }
}
</style>