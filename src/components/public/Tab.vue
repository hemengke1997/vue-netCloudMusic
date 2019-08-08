<template>
  <div class="tab">
    <router-link
      v-for="(item,index) in routes"
      :key="index"
      :tag="item.tag"
      :to="item.router"
      class="tab_item"
    >
      <span :class="{active: flag === item.router.split('/')[1]}" class="title">{{item.title}}</span>
    </router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      flag : this.$route.path.split('/')[1],
      routes: [
        { title: "推荐音乐", router: "/recommend", tag: "div" },
        { title: "热歌榜", router: "/hot", tag: "div" },
        { title: "歌手", router: "/singer", tag: "div" }
      ],
    };
  },
  computed: {
  },
  methods: {
  
  },
  watch: {
    $route(to,from) {
      console.log(to,'to')
      this.flag = to.path.split('/')[1];
    }
  },
  mounted() {
     console.log(this, '~~~~~~~~~~~!!11111!')
    this.$nextTick(function() {
      console.log(this.$route, '5555')
    })
  }
};
</script>

<style lang="less" scoped>
.tab {
  display: flex;
  width: 100%;
  height: 45px;
  position: fixed;
  margin-top: 50px;
  // border-bottom: 1px solid rgb(211, 211, 211);
  &::after {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 1px;
    background-color: rgb(211, 211, 211);
    transform: scaleY(0.5);
  }
  .tab_item {
    flex: 1;
    text-align: center;
    font-size: 15px;
    height: 100%;
    line-height: 45px;
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
          bottom: 1px;
          background-color: @color-theme;
          width: 100%;
          height: 2px;
          border-radius: 10px;
        }
      }
    }
  }
}
</style>
