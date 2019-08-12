<template>
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
</template>

<script>
export default {
  data() {
    return {
      flag : '',
      routes: [
        { title: "推荐音乐", router: "/recommend", tag: "div" },
        { title: "热歌榜", router: "/hot", tag: "div" },
        { title: "歌手", router: "/singer", tag: "div" }
      ],
    };
  },
  
  methods:{
    
  }
};
</script>

<style lang="less" scoped>
.tab {
  display: flex;
  width: 100%;
  height: 40px;
  position: fixed;
  top: 84px;
  border-bottom: 1px solid #ccc;
  background-color: #fff;
  z-index: 200;
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    border: 0 solid rgba(0,0,0,.1);
    box-sizing: border-box;
    pointer-events: none;
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
          bottom: 3px;
          background-color: @color-theme;
          width: 100%;
          height: 4px;
          border-radius: 10px;
          transform: scaleY(.5);
        }
      }
    }
    .title {
      display: inline-block;
      position: relative;
      height: 45px;
      color: #000;
    }
  }
}
</style>
