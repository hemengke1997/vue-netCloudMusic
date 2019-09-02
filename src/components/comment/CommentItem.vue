<template>
  <div class="comment_item">
    <div class="cmt_head" @click="gotoUser(item.user.userId)">
      <img :src="item.user.avatarUrl" alt class="ignore_img" />
    </div>
    <div class="cmt_wrap" :class="{cmt_wrap_black: black}">
      <div class="cmt_header">
        <div class="cmt_meta">
          <span class="cmt_username">
            <a
              class="nickname"
              @click="gotoUser(item.user.userId)"
              :class="{nickname_black: black}"
            >{{item.user.nickname}}</a>
            <i class="ignore_vip" v-if="item.user.vipRights"></i>
          </span>
          <div class="cmt_time" :class="{cmt_time_black: black}">{{commentTime(item.time)}}</div>
        </div>
        <div class="ignore_cmt_like">
          <span class="cmt_likearea">
            <span class="cmt_count">{{item.likedCount}}</span>
            <i class="iconfont icon-zan1" @click="download"></i>
          </span>
        </div>
      </div>
      <div class="cmt_content">
        <span v-if="item.beReplied.length" class="cmt_text" :class="{cmt_text_black:black}">
          回复
          <a
            class="at"
            @click="gotoUser(item.beReplied[0].user.userId)"
          >@{{item.beReplied[0].user.nickname}}</a>:
        </span>
        <span class="cmt_text" :class="{cmt_text_black: black}">{{item.content}}</span>
        <div class="cmt_replied" v-if="item.beReplied.length" :class="{cmt_replied_black: black}">
          <span class="cmt_replied_uesr">@{{item.beReplied[0].user.nickname}}:</span>
          <span class="cmt_replied_cnt" :class="{cmt_replied_cnt_black: black}">
            {{item.beReplied[0].content}}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import transDate from "@/utils/transDate";
export default {
  data() {
    return {};
  },
  props: {
    item: Object,
    type: String
  },
  computed: {
    commentTime() {
      return function(time) {
        const date = transDate(time);
        return `${date.year}年${date.month}月${date.day}日`;
      };
    },
    black() {
      return this.type === "song";
    }
  },
  methods: {
    gotoUser(id) {
      this.$router.push({
        path: "/user/playlist",
        query: { uid: id }
      });
    },
    download() {
      this.$router.push({
        path: "/download"
      });
    }
  }
};
</script>

<style lang="less" scoped>
.comment_item {
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
    padding-right: 10px;
    padding-bottom: 11px;
    width: 1%;
    &::after {
      .small_border;
      border-bottom-width: 1px;
    }
    &.cmt_wrap_black::after {
      border-color: hsla(0, 0%, 100%, 0.1);
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
            &.nickname_black {
              color: hsla(0, 0%, 100%, 0.7);
            }
          }
          .ignore_vip {
            margin: 0 5px;
            flex: none;
            width: 21px;
            height: 11px;
            background: url("../../assets/img/vip_ratiox2.png") no-repeat;
            background-size: contain !important;
            @media screen and (-webkit-device-pixel-ratio: 3) {
              background: url("../../assets/img/vip_radiox3.png") no-repeat;
            }
          }
        }
        .cmt_time {
          font-size: 9px;
          color: #999;
          &.cmt_time_black {
            color: hsla(0, 0%, 100%, 0.3);
          }
        }
      }
      .ignore_cmt_like {
        width: 80px;
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
          .icon-zan1 {
            font-size: 22px;
            cursor: pointer;
            vertical-align: sub;
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
        &.cmt_text_black {
          color: #fff;
        }
      }
      .cmt_replied {
        position: relative;
        margin: 5px 0;
        padding: 10px;
        color: #888;
        font-size: 14px;
        line-height: 21px;
        &.cmt_replied_black {
          color: hsla(0, 0%, 100%, 0.6);
          background-color: hsla(0, 0%, 100%, 0.05);
          &::after {
            .small_border;
            border-color: hsla(0,0%,100%,.1);
          }
        }
        .cmt_replied_user {
          vertical-align: middle;
        }
      }
      .cmt_replied_cnt {
        &::after {
          .small_border;
          border-width: 1px;
        }
        &.cmt_replied_cnt_black {
          color: hsla(0, 0%, 100%, 0.6);
        }
      }
      .cmt_replied_cnt.cmt_replied_cnt_black {
        &::after {
          border-color: hsla(0, 0%, 100%, 0.1);
        }
      }
    }
  }
}
</style>