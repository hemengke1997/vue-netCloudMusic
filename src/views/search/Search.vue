<template>
  <div class="search">
    <form action="#" method="get" class="search_form">
      <div class="inputcover">
        <i class="iconfont icon-sousuo"></i>
        <input type="search" name="search" class="input" placeholder autocomplete="off" value />
        <label class="holder">搜索歌手、歌曲、专辑</label>
        <figure class="ignore_close" v-show="flag">
          <i class="iconfont icon-guanbi-"></i>
        </figure>
      </div>
    </form>
    <div class="hot_search">
      <section class="hot_list">
        <h3 class="title">热门搜索</h3>
        <ul class="list">
          <li class="item">抢霉霉演唱会门票</li>
          <li class="item">抢霉霉演唱会门票</li>
          <li class="item">抢霉霉演唱会门票</li>
          <li class="item">抢霉霉演唱会门票</li>
          <li class="item">抢霉霉演唱会门票</li>
          <li class="item">抢霉霉演唱会门票</li>
          <li class="item">抢霉霉演唱会门票</li>
        </ul>
      </section>
      <section class="history_wrapper">
        <ul class="list">
          <li class="item">
            <i class="iconfont icon-jilu"></i>
            <div class="history">
              <span class="link">ceshiceshijsijf</span>
              <figure class="close">
                <i class="iconfont icon-guanbi"></i>
              </figure>
            </div>
          </li>
          <li class="item">
            <i class="iconfont icon-jilu"></i>
            <div class="history">
              <span class="link">ceshiceshijsijf</span>
              <figure class="close">
                <i class="iconfont icon-guanbi"></i>
              </figure>
            </div>
          </li>
        </ul>
      </section>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: false
    };
  }
};
</script>

<style lang="less" scoped>
.search {
  width: 100%;
  height: 100%;
  // overflow: hidden;
  .search_form {
    padding: 15px 10px;
    position: relative;
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
      }
      .holder {
        position: absolute;
        left: 30px;
        top: 8px;
        font-size: 14px;
        color: #c9c9c9;
        background: transparent;
        pointer-events: none;
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
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            pointer-events: none;
            box-sizing: border-box;
            width: 100%;
            height: 100%;
            border-color: #d3d4da;
            border-radius: 32px;
            border: 1px solid rgba(0, 0, 0, .1);
            transform-origin: left top;
            @media screen and (-webkit-device-pixel-ratio: 3){
              width: 300%;
              height: 300%;
              transform: scale(.333333);
              border-radius: 60px;
            }
            @media screen and (-webkit-device-pixel-ratio: 2){
              width: 200%;
              height: 200%;
              transform: scale(.5);
            }
            @media screen and (-webkit-device-pixel-ratio: 1){
              width: 150%;
              height: 150%;
              transform: scale(.666666);
            }
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
          
        }
      }
    }
  }

}
</style>
