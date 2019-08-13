<template>
  <div class="topsearch">
    <div class="top">
      <router-link to="/" class="sing">
        <i class="iconfont icon-caidan"></i>
      </router-link>
      <router-link to="/search" class="search" tag="div">
        <i class="iconfont icon-search"></i>
        <span>Search</span>
      </router-link>
      <router-link to="/player" class="player">
        <i class="iconfont icon-diantai"></i>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  computed:{
   
  },
  methods:{
    
  },
  mounted() {
    
  },
};
</script>

<style lang="less" scoped>
.topsearch {
  width: 100%;
  height: 50px;
  position: fixed;
  background-color: @color-theme;
  z-index: 999;
  .top {
      display: flex;
      align-items: center;
      height: 100%;
      margin: 0 8px;
      justify-content: space-between;
    .sing {
      color: @white;
      
      i {
          font-size: 22px;
      }
    }
    .search {
      display: flex;
      border-radius: 26px;
      width: 280px;
      height: 40px;
      align-items: center;
      justify-content: center;
      background-color: rgba( 202, 86, 74);
      i , span{
          color: #fff;
          opacity: 0.5;
      }
      span {
          margin-left: 5px;
          font-family: Arial;
          font-size: 14px;
      }
    }
    .player {
      color: @white;
      i {
          font-size: 20px;
      }
    }
  }
}
</style>
