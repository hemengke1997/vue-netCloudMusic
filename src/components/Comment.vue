<template>
  <ul class="comment_list">
    <li class="comment" v-for="(item,index) in comment" :key="index">
      <div class="cmt_head" @touchend="gotoUser(item.user.userId)">
        <img :src="item.user.avatarUrl" alt class="ignore_img" />
      </div>
      <div class="cmt_wrap">
        <div class="cmt_header">
          <div class="cmt_meta">
            <span class="cmt_username">
              <a class="nickname" @touchend="gotoUser(item.user.userId)">{{item.user.nickname}}</a>
              <i class="ignore_vip" v-if="item.user.vipRights"></i>
            </span>
            <div class="cmt_time">{{commentTime(item.time)}}</div>
          </div>
          <div class="ignore_cmt_like">
            <span class="cmt_likearea">
              <span class="cmt_count">{{item.likedCount}}</span>
              <i class="iconfont icon-zan1"></i>
            </span>
          </div>
        </div>
        <div class="cmt_content">
          <span v-if="item.beReplied.length" class="cmt_text">回复<a class="at" @touchend="gotoUser(item.beReplied[0].user.userId)">@{{item.beReplied[0].user.nickname}}</a>:</span>
          <span class="cmt_text">
            {{item.content}}
          </span>
          <div class="cmt_replied" v-if="item.beReplied.length">
            <span class="cmt_replied_uesr">@{{item.beReplied[0].user.nickname}}:</span>
          <span class="cmt_replied_cnt">
            <span class="cmt_text">{{item.beReplied[0].content}}</span>
          </span>
          </div>
        </div>
      </div>
    </li>
    <li class="cmt_more" v-if="judgement">
      <span class="box">
        查看全部{{total}}条评论
        <i class="iconfont icon-pull_down"></i>
      </span>
    </li>
  </ul>
</template>

<script>
import { getComments } from "@/api/comment-api";
import transDate from '@/utils/transDate';
import {OK} from 'js/config'
import {mapActions} from 'vuex'

export default {
  data() {
    return {
      comment: [],
      sum: 15,
      total: Number,
      comments: {
        hotComments:[]
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
  computed: {
    judgement() {
      return (this.comments.hotComments.length >= 15 && this.type === 1) || (this.comments.hotComments.length < 15 && this.type === 2)
    },
    commentTime() {
      return function(time) {
        const date = transDate(time)
        return `${date.year}年${date.month}月${date.day}日`
      }
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
          this.setComment(res.data)
          this.setHotCommentLength(res.data.hotComments.length)
          this.total = res.data.total
          this.comments = res.data
          if(type === 1) {
            this.comment = res.data.hotComments
            console.log(this.comment)
          } else if (type === 2 && res.data.hotComments.length < this.sum) {
            this.comment = res.data.comments.slice(0, this.sum - res.data.hotComments.length)
          }
        }
      });
    },
    gotoUser(id) {
      this.$router.push({
        path: '/user/playlist',
        query: {uid:id}
      })
    },
    ...mapActions([
      'setComment',
      'setHotCommentLength',
    ])
  },
  created() {
    this._getComment(this.id,this.type)
  }
};
</script>

<style lang="less" scoped>
.comment_list {
  display: flex;
  flex-direction: column;
  .comment {
    flex: auto;
    display: flex;
    padding-top: 10px;
    .cmt_head {
      height: 35px;
      margin: 0 10px;
      flex: none;
      .ignore_img {
        width: 30px;
        height: 30px;
        display: block;
        border-radius: 50%;
      }
    }
    .cmt_wrap {
      position: relative;
      flex: auto;
      padding-right: 2px;
      padding-bottom: 11px;
      &::after {
        .small_border;
        border-bottom-width: 1px;
      }
      .cmt_header {
        display: flex;
        .cmt_meta {
          flex: auto;
          font-size: 0;
          width: 0;
          .cmt_username {
            max-width: 100%;
            display: inline-flex;
            align-items: center;
            .nickname {
              font-size: 14px;
              color: #666;
              line-height: 20px;
              .text_overflow;
              flex: auto;
            }
            .ignore_vip {
              margin: 0 5px;
              flex: none;
              width: 21px;
              height: 11px;
              background: url('../assets/img/vip_ratiox2.png') no-repeat;
              background-size: contain !important;
              @media screen and (-webkit-device-pixel-ratio: 3){
                background: url('../assets/img/vip_radiox3.png') no-repeat;
              }
            }
          }
          .cmt_time {
            font-size: 9px;
            color: #999;
          }
        }
        .ignore_cmt_like {
          width: 65px;
          height: 22px;
          line-height: 22px;
          font-size: 11px;
          flex: none;
          color: #999;
          text-align: right;
          .cmt_likearea {
            display: inline-block;
            min-width: 30px;
            padding-left: 5px;
            .cmt_count {
              vertical-align: sub;
            }
            .icon-zan1 {
              font-size: 26px;
              cursor: pointer;
              vertical-align: middle;
            }
          }
        }
      }
      .cmt_content {
        position: relative;
        color: #333;
        font-size: 15px;
        line-height: 22px;
        margin-top: 5px;
        .at {
          color: #507daf;
          text-decoration: none;
        }
        .cmt_text {
          vertical-align: middle;
        }
        .cmt_replied {
          position: relative;
          margin: 5px 0;
          padding: 10px;
          color: #888;
          font-size: 14px;
          line-height: 21px;
          .cmt_replied_user {
            vertical-align: middle;
          }
        }
        .cmt_replied_cnt {
          &::after {
            .small_border;
            border-width: 1px;
          }
        }
      }
    }
  }
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