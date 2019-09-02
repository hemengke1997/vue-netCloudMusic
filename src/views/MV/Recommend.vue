<template>
  <section class="related">
    <h3 class="title">相关推荐</h3>
    <ul class="list_mv">
      <li class="item" @click="gotoRelated(item)" v-for="(item,index) in related" :key="index">
        <figure class="ignore_cvr">
          <img :src="item.cover" alt="cover" class="img" />
          <p class="count">
            <span class="num">
              <i class="iconfont icon-shipin1"></i>
              {{playCount(item.playCount)}}
            </span>
          </p>
        </figure>
        <article class="content">
          <h4 class="cnt_title">
            <span class="ignore_icon_mv" v-if="item.type===0">MV</span>
            {{item.title}}
          </h4>
          <p class="singer">
            {{durations(item.durations)}}
            ，&nbsp;by&nbsp;
            {{item.creator.userName}}
          </p>
        </article>
      </li>
    </ul>
  </section>
</template>

<script>
export default {
  props: {
    related: {
      type: Array,
      required: true
    }
  },
  computed: {
    playCount() {
      return function(num) {
        if (num > 10000) {
          return Math.floor(num / 10000) + "万";
        } else {
          return num;
        }
      };
    },
    durations() {
      return time => {
        const minutes = parseInt((time % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = parseInt((time % (1000 * 60)) / 1000);
        return `${minutes}:${seconds}`
      };
    }
  },
  methods: {
    gotoRelated(item) {
      if (item.type === 0) {
        this.$router.push({
          path: '/mv',
          query: {id: item.vid}
        })
      } else if (item.type === 1) {
        this.$router.push({
          path: '/video',
          query: {id: item.vid}
        })
      }
    }
  }
};
</script>

<style lang="less" scoped>
.related {
  .title {
    .listTitle;
  }
  .list_mv {
    padding-left: 6px;
    padding-top: 3px;
    .item {
      position: relative;
      display: flex;
      -webkit-box-align: center;
      align-items: center;
      padding: 0;
      margin: 0;
      .ignore_cvr {
        width: 107px;
        height: 60px;
        position: relative;
        flex: none;
        margin: 3px 0;
        .img {
          width: 100%;
          height: 100%;
        }
        .count {
          position: absolute;
          top: 0;
          right: 0;
          width: 100%;
          height: 50%;
          background-image: linear-gradient(
            -180deg,
            rgba(0, 0, 0, 0.2) 1%,
            transparent
          );
          line-height: 13px;
          color: #fff;
          font-size: 11px;
          .num {
            position: absolute;
            top: 4px;
            right: 3px;
            padding-left: 16px;
            background-size: 12px 9px;
            background-position: 0 2px;
            background-repeat: no-repeat;
            text-shadow: 0 1px 0 rgba(0, 0, 0, 0.15);
            .icon-shipin1 {
              vertical-align: middle;
              margin-right: 1px;
            }
          }
        }
      }
      .content {
        flex: auto;
        display: flex;
        width: 1%;
        height: 60px;
        margin-left: 10px;
        flex-direction: column;
        justify-content: center;
        padding: 3px 15px 3px 0;
        &::after {
          .small_border;
          border-bottom-width: 1px;
        }
        .cnt_title {
          color: #333;
          font-size: 14px;
          line-height: 17px;
          .text_2;
          .break_2;
          .ignore_icon_mv {
            .ismv;
            width: 26px;
            height: 13px;
            margin-right: 6px;
            position: relative;
            &::after {
              .small_border;
              border-color: #d33a31;
              border-width: 1px;
              @media screen and (-webkit-min-device-pixel-ratio: 3) {
                border-width: 2px;
              }
            }
          }
        }
        .singer {
          margin-top: 2px;
          color: #888;
          font-size: 11px;
          line-height: 16px;
          .text_overflow;
        }
      }
    }
  }
}
</style>