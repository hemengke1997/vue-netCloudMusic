<template>
  <div class="download">
    <div class="download_bg">
      <div class="wrap">
        <div class="ignore_logo"></div>
        <a class="ignore_btn">立即下载</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.download {
  width: 100%;
  height: 100%;
  .download_bg {
    background: url("../../assets/img/download_bg.jpg") no-repeat 0 center;
    width: 100%;
    height: 100%;
    background-size: cover;
    .wrap {
      position: absolute;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      margin-top: -40px;
      .ignore_logo {
        margin: 0 auto;
        width: 108px;
        height: 108px;
        background: url("../../assets/img/download_logo.jpg") no-repeat 0 0;
        background-size: 100% auto;
      }
      .ignore_btn {
        margin-top: 40px;
        display: block;
        width: 188px;
        height: 46px;
        line-height: 46px;
        background: #311412;
        border: 1px solid #7c6a69;
        border-radius: 4px;
        color: #fff;
        font-size: 24px;
        text-align: center;
      }
    }
  }
}
</style>