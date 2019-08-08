<template>
  <div class="tab">
    <router-link
      v-for="(item,index) in routes"
      :key="index"
      :tag="item.tag"
      :to="item.router"
      class="tab_item"
    >
      <span :class="{active: flag === item.router.split('/')[1]}" class="title" @click='test'>{{item.title}}</span>
    </router-link>
  </div>
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
  computed: {
    _route() {
      return this.$route
    }
  },
  methods: {
    test() {
      console.log(this._route)
    }
  },
  watch: {
    $route(to,from) {
      // console.log(to,'to')
      this.flag = to.path.split('/')[1];
    }
  },
  
};
</script>

<style lang="less" scoped>
.tab {
  display: flex;
  width: 100%;
  height: 40px;
  position: fixed;
  margin-top: 50px;
  border-bottom: 1px solid rgb(211, 211, 211);
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
    .title {
      display: inline-block;
      position: relative;
      height: 45px;
      &.active {
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
  }
}
</style>
