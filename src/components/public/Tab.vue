<template>
  <div class="wrapper">
    <nav class="tab">
      <router-link
        v-for="(item,index) in routes"
        :key="index"
        :tag="item.tag"
        class="tab_item"
        :to="item.router"
      >
        <span class="title">{{item.title}}</span>
      </router-link>
    </nav>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag: "",
      routes: [
        { title: "推荐音乐", router: "/recommend", tag: "div" },
        { title: "热歌榜", router: "/hot", tag: "div" },
        { title: "搜索", router: "/search", tag: "div" }
      ]
    };
  },

  methods: {}
};
</script>

<style lang="less" scoped>
// @media screen and (-webkit-min-device-pixel-ratio: 3){
//   .tab::after{
//     width: 300%;
//     height: 300%;
//     transform: scale(.333333);
//   }
// }
.wrapper {
  padding-top: 40px;
  .tab {
    display: flex;
    width: 100%;
    height: 40px;
    position: fixed;
    top: 84px;
    background-color: #fff;
    z-index: 200;
    &::after {
      .small_line;
      @media screen and (-webkit-device-pixel-ratio: 3) {
        transform: scaleY(.2);
      }
      @media screen and (-webkit-device-pixel-ratio: 2) {
        transform: scaleY(.22);
      }
      @media screen and (-webkit-device-pixel-ratio: 1.5) {
        transform: scaleY(.21)
      }
    }
    .tab_item {
      flex: 1;
      text-align: center;
      font-size: 15px;
      height: 100%;
      line-height: 40px;
      &.router-link-active {
        .title {
          color: @red;
          &::after {
            content: "";
            position: absolute;
            left: 0;
            bottom: 4px;
            background-color: @color-theme;
            width: 100%;
            height: 4px;
            transform: scaleY(0.5);
          }
        }
      }
      .title {
        display: inline-block;
        position: relative;
        height: 45px;
        color: #000;
        padding: 0 5px;
      }
    }
  }
}
</style>
