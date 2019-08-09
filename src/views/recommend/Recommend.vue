<template>
  <div class="recommend">
    <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
      <div class="songsheet">
        <h2 class="title">推荐歌单</h2>
        <ul class="sheet_ul">
          <li class="sheet_li" v-for="item in sheetList" :key="item.id" @click="selectList(item)">
            <div class="cover">
              <img v-lazy="item.picUrl" />
              <!-- <span class="play_count">
              <i class="iconfont iconfont-erji"></i>
              {{Math.floor(item.playCount / 10000) }}万
              </span>-->
            </div>

            <p class="desc">{{item.name}}</p>
          </li>
        </ul>
      </div>
    </van-pull-refresh>
  </div>
</template>

<script>
import { PullRefresh } from "vant";
import { setTimeout } from "timers";
import { getSheetList, getNewSong, getSheetDetails } from "@/api/recommend-api";
import { OK } from "@/assets/js/config";

export default {
  data() {
    return {
      isLoading: false,
      sheetList: [] // 推荐歌单
    };
  },
  components: {
    [PullRefresh.name]: PullRefresh
  },
  created() {
    this._getSheetList();
  },
  methods: {
    onRefresh() {
      setTimeout(() => {
        this.isLoading = false;
      }, 500);
    },
    selectList(item) {},
    _getSheetList() {
      getSheetList().then(res => {
        if (res.status === OK) {
          this.sheetList = res.data.result.splice(0, 6);
          console.log(this.sheetList, "sheetlist");
        } else {
          alter("获取推荐歌单失败");
        }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.recommend {
  width: 100%;
  .van-pull-refresh {
    margin-top: 105px;
    height: calc(100vh-95px);
    .songsheet {
      .title {
        margin-bottom: 14px;
        height: 20px;
        line-height: 20px;
        font-size: 17px;
        padding-left: 9px;
        position: relative;
        &::after {
          content: "";
          background-color: #d33a31;
          position: absolute;
          width: 2px;
          height: 16px;
          left: 0;
          top: 12%;
        }
      }

      .sheet_ul {
        display: flex;
        flex-wrap: wrap;
        .sheet_li {
          display: block;
          margin-bottom: 16px;
          width: 33.3%;
          padding-left: 1px;
          padding-right: 1px;
          box-sizing: border-box;
          .cover {
            position: relative;
            img {
              width: 100%;
            }
          }
          .desc {
            display: -webkit-box;
            -webkit-line-clamp: 2;
            -webkit-box-orient: vertical;
            overflow: hidden;
            padding: 6px 2px 0 6px;
            min-height: 30px;
            line-height: 1.2;
            font-size: 13px;
          }
        }
      }
    }
  }
}
</style>

