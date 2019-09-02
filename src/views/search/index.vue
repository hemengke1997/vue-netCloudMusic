<template>
  <div class="search">
    <form action="#" method="get" class="search_form search_form_bottom">
      <div class="inputcover">
        <i class="iconfont icon-sousuo"></i>
        <input
          type="text"
          name="search"
          class="input"
          placeholder="搜索歌手、歌曲、专辑"
          autocomplete="off"
          v-model="inputVal"
          @input="inputsome($event)"
          ref="input"
          @keydown.enter.prevent="gotoItem(inputVal)"
        />
        <figure class="ignore_close" v-show="inputdata||inputVal">
          <i class="iconfont icon-guanbi-" @click="clear"></i>
        </figure>
      </div>
    </form>
    <div class="hot_search" v-show="!inputdata&&!inputVal">
      <section class="hot_list">
        <h3 class="title">热门搜索</h3>
        <ul class="list">
          <li
            class="item ignore_item_bottom"
            v-for="(item,index) in hotsearch"
            :key="index"
            @click="gotoItem(item.first)"
          >{{item.first}}</li>
        </ul>
      </section>
      <section class="history_wrapper" v-if="searchHistory.length">
        <ul class="list">
          <li class="item" v-for="(item,index) in searchHistory" :key="index">
            <i class="iconfont icon-jilu"></i>
            <div class="history history_1">
              <span class="link" @click="gotoItem(item.first)">{{item.first}}</span>
              <figure class="ignore_close" @click="removeLocalStorage(item.first)">
                <i class="iconfont icon-guanbi"></i>
              </figure>
            </div>
          </li>
        </ul>
      </section>
    </div>
    <section class="s_content" v-show="!showSearch&&inputVal">
      <h3 class="title t_bottom">搜索"{{inputVal}}"</h3>
      <ul>
        <li
          class="recomitem"
          v-for="(item,index) in searchresult"
          :key="index"
          @click.prevent="gotoItem(item.keyword)"
        >
          <i class="iconfont icon-sousuo"></i>
          <span class="link link_bottom">{{item.keyword}}</span>
        </li>
      </ul>
    </section>
    <div v-if="(isLoading&&inputVal) || searchLoading" class="loading">
      <img src="../../assets/img/loading.gif" alt="loading" />
    </div>
    <search-content v-if="showSearch" @changeSearchLoading="changeSearchLoading"></search-content>
  </div>
</template>

<script>
import { getHotSearch } from "@/api/hot-api";
import { clearTimeout, setTimeout } from "timers";
import { getSearchList } from "@/api/search-api";
import SearchContent from "./SearchContent";
import { Promise } from "q";
export default {
  name: "SearchIndex",
  data() {
    return {
      hotsearch: [],
      inputVal: "",
      inputdata: "",
      timeout: null,
      isLoading: false, // 在输入框中搜索时 isloading置为true
      searchresult: [],
      showSearch: false, // 显示搜索结果
      searchLoading: false, // 点击搜索时 searchLoading置为true
      searchHistory: [], // 搜索历史
      index: -1 // 搜索历史的index
    };
  },
  components: {
    SearchContent
  },
  mounted() {
    this.$refs.input.focus();
  },
  directives: {
    focus: {
      inserted: function(el) {
        el.focus();
      }
    }
  },
  methods: {
    _getHotSearch() {
      getHotSearch().then(res => {
        this.hotsearch = res.data.result.hots;
      });
    },
    clear() {
      this.inputVal = "";
      this.showSearch = false;
      this.inputdata = "";
    },
    inputsome(e) {
      this.inputdata = e.data;

      this.searchresult = [];
      if (this.inputVal) {
        this.isLoading = true;
        clearTimeout(this.timeout);
        new Promise(resolve => {
          this.timeout = setTimeout(() => {
            this._getSearchList(this.inputVal);
            resolve();
          }, 300);
        }).then(() => {
          this.isLoading = false;
        });
      } else {
        this.showSearch = false;
      }
    },
    _getSearchList(v) {
      getSearchList(v).then(res => {
        this.searchresult = res.data.result.allMatch;
      });
    },
    gotoItem(keyword) {
      this.inputVal = keyword;
      this.searchLoading = true;
      this.setLocalStorage(keyword);
      this.$store.dispatch("searchcontent/setKeyword", keyword).then(() => {
        this.showSearch = true;
      });
    },
    changeSearchLoading() {
      this.searchLoading = false;
    },
    setLocalStorage(k) {
      this.removeLocalStorage(k);
      this.searchHistory.unshift({
        first: k
      });
      localStorage.setItem(
        "search_history",
        JSON.stringify(this.searchHistory)
      );
    },
    getLocalStorage() {
      if (localStorage.getItem("search_history")) {
        this.searchHistory = JSON.parse(localStorage.getItem("search_history"));
      } else {
        localStorage.setItem(
          "search_history",
          JSON.stringify(this.searchHistory)
        );
        this.searchHistory = JSON.parse(localStorage.getItem("search_history"));
      }
    },
    removeLocalStorage(k) {
      this.getLocalStorage();
      if (this.searchHistory.length) {
        for (let i = 0; i < this.searchHistory.length; i++) {
          if (this.searchHistory[i].first === k) {
            this.index = i;
            break;
          } else {
            this.index = -1;
          }
        }
        if (this.index != -1) {
          this.searchHistory.splice(this.index, 1); // 删除index位置的元素
          localStorage.setItem(
            "search_history",
            JSON.stringify(this.searchHistory)
          );
        }
      }
    }
  },
  created() {
    this._getHotSearch();
    this.getLocalStorage();
  }
};
</script>

<style lang="less" scoped>
.search {
  width: 100%;
  height: 100%;
  .loading {
    position: absolute;
    left: 0;
    top: 185px;
    bottom: 0;
    right: 0;
    z-index: 3;
    background-color: #fff;
    img {
      position: absolute;
      left: 50%;
      top: 30%;
      transform: translate(-50%, -50%);
      height: 20px;
    }
  }
  .search_form {
    padding: 15px 10px;
    position: relative;
    &::after {
      .small_border;
    }
    .inputcover {
      position: relative;
      width: 100%;
      height: 30px;
      padding: 0 30px;
      box-sizing: border-box;
      background: #ebecec;
      border-radius: 30px;
      .icon-sousuo {
        position: absolute;
        left: 0;
        top: 9px;
        margin: 0 8px;
        vertical-align: middle;
        color: #c9c9c9;
        font-size: 13px;
      }
      .input {
        width: 100%;
        height: 30px;
        line-height: 18px;
        background: transparent;
        font-size: 14px;
        color: #333;
        &::-webkit-search-cancel-button {
          display: none;
        }
        &::-webkit-input-placeholder {
          font-size: 14px;
          color: #c9c9c9;
        }
      }
      .ignore_close {
        position: absolute;
        right: 0;
        top: 0;
        width: 30px;
        height: 30px;
        line-height: 30px;
        text-align: center;
        color: #b8b8b8;
        i {
          font-size: 14px;
        }
      }
    }
  }
  .search_form_bottom {
    &::after {
      border-bottom-width: 1px;
    }
  }
  .hot_search {
    .hot_list {
      padding: 15px 10px 0;
      .title {
        font-size: 12px;
        line-height: 12px;
        color: #666;
      }
      .list {
        margin: 10px 0 7px;
        display: flex;
        flex-wrap: wrap;
        .item {
          display: inline-block;
          height: 32px;
          margin-right: 8px;
          margin-bottom: 8px;
          padding: 0 14px;
          font-size: 14px;
          line-height: 32px;
          color: #333;
          position: relative;
          &::after {
            .small_border;
          }
        }
        .ignore_item_bottom {
          &::after {
            border-width: 1px;
            border-radius: 60px;
          }
        }
      }
    }
    .history_wrapper {
      .list {
        display: flex;
        flex-direction: column;
        .item {
          display: flex;
          height: 45px;
          align-items: center;
          .icon-jilu {
            margin: 0 10px;
            color: #c9c9c9;
            font-size: 26px;
          }
          .history {
            flex: 1;
            position: relative;
            display: flex;
            align-items: center;
            height: 45px;
            &::after {
              .small_border;
            }
            .link {
              margin-right: 10px;
              flex: 1;
              .text_overflow;
              font-size: 15px;
              color: #333;
            }
            .ignore_close {
              color: #c9c9c9;
              flex: none;
              width: 32px;
              height: 32px;
              line-height: 32px;
            }
          }
          .history_1 {
            &::after {
              border-bottom-width: 1px;
            }
          }
        }
      }
    }
  }
  .s_content {
    margin: 0 auto;
    .title {
      height: 50px;
      margin-left: 10px;
      padding-right: 10px;
      font-size: 15px;
      line-height: 50px;
      color: #507daf;
      &::after {
        .small_border;
      }
    }
    .t_bottom {
      &::after {
        border-bottom-width: 1px;
      }
    }
    .recomitem {
      display: flex;
      align-items: center;
      height: 45px;
      padding-left: 10px;
      .icon-sousuo {
        flex: none;
        margin-right: 7px;
        font-size: 15px;
        color: #c9c9c9;
      }
      .link {
        display: inline-block;
        flex: 1;
        padding-right: 10px;
        font-size: 15px;
        line-height: 45px;
        color: #333;
        .text_overflow;
        position: relative;
        &::after {
          .small_border;
        }
      }
      .link_bottom {
        &::after {
          border-bottom-width: 1px;
        }
      }
    }
  }
}
</style>
