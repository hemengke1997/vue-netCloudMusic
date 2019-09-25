<template>
  <div class="comment_list">
    <comment-item v-for="(item,index) in comment" :key="index" :item="item"></comment-item>
    <div class="cmt_more" v-if="judgement && commentOBJ.total > limit">
      <span class="box" @click="download" v-cloak>
        查看全部{{commentOBJ.total}}条评论
        <i class="iconfont icon-pull_down"></i>
      </span>
    </div>
  </div>
</template>

<script>
import CommentItem from "@/components/comment/CommentItem";
export default {
  data() {
    return {
      limit: 15
    };
  },
  props: {
    type: {
      // type:1 精彩评论  type:2 最新评论
      type: Number,
      required: true
    },
    commentOBJ: {
      type: Object,
      default: function () {
        return { hotComments: [] }
      }
    }
  },
  components: {
    CommentItem
  },
  computed: {
    judgement() {
      return (
        (this.hotCommentsLength >= 15 && this.type === 1) ||
        (this.hotCommentsLength < 15 && this.type === 2)
      );
    },
    comment() {
      if(this.type === 1) {
        return this.commentOBJ.hotComments
      } else if(this.type === 2 && this.hotCommentsLength < this.limit) {
        return this.commentOBJ.comments.slice(0,this.limit - this.hotCommentsLength)
      }
      return this.commentOBJ.comments
    },
    hotCommentsLength() {
      return this.commentOBJ.hotComments && this.commentOBJ.hotComments.length
    }
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
    download() {
      this.$router.push({
        path: "/download"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.comment_list {
  .cmt_more {
    margin-left: 50px;
    position: relative;
    [v-cloak] {
      display: none;
    }
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