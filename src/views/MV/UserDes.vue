<template>
  <section class="userinfo">
    <div class="ignore_avatar" @click="gotoUser(user.userId)">
      <img :src="user.avatarUrl" alt="header" />
    </div>
    <span class="username" @click="gotoUser(user.userId)">
      <em>{{user.nickname}}</em>
    </span>
    <div class="ignore_follow" @click="download">
      <i class="iconfont icon-guanzhu"></i>
      <em>关注</em>
    </div>
  </section>
</template>

<script>
export default {
  props: {
    user: {
      type: Object,
      required: true
    }
  },
  methods: {
    download() {
      this.$router.push({
        path: "/download"
      });
    },
    gotoUser(id) {
      this.$router.push({
        path: "/user/playlist",
        query: { uid: id }
      });
    }
  }
};
</script>

<style lang="less" scoped>
.userinfo {
  display: -webkit-box;
  -webkit-box-align: center;
  -webkit-align-items: center;
  display: flex;
  align-items: center;
  padding-top: 4px;
  .ignore_avatar {
    flex: none;
    width: 30px;
    height: 30px;
    margin: 10px;
    img {
      border-radius: 50%;
      width: 100%;
      vertical-align: middle;
    }
  }
  .username {
    flex: 1;
    width: 1%;
    color: #333;
    font-size: 14px;
    line-height: 21px;
    em {
      font-style: normal;
    }
  }
  .ignore_follow {
    flex: none;
    display: -webkit-box;
    -webkit-box-align: center;
    -webkit-box-pack: center;
    -webkit-box-flex: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 56px;
    height: 22px;
    margin-right: 10px;
    padding-top: 1px;
    box-sizing: border-box;
    color: #d33a31;
    font-size: 11px;
    line-height: 16px;
    position: relative;
    &::after {
      .small_border;
      border-width: 1px;
      border-radius: 100px;
      border-color: rgba(0, 0, 0, 0.15);
      @media screen and (-webkit-min-device-pixel-ratio: 3) {
        border-width: 2px;
      }
    }
    .icon-guanzhu {
      font-size: 9px;
    }
    em {
      font-style: normal;
      display: inline-block;
      vertical-align: middle;
      margin-left: 4px;
    }
  }
}
</style>