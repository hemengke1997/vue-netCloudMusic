<template>
  <div class="mvbox">
    <section class="mvsec">
      <div class="cvr">
        <video
          :src="urlAndcover.url"
          class="video"
          controls
          :poster="urlAndcover.cover"
          preload="metadata"
          controlslist="nodownload"
          playsinline
          ref="video"
        ></video>
        <div class="videocover" @click="playMV" v-if="hideMV">
          <img :src="urlAndcover.cover" alt="cover" class="img" />
          <i class="iconfont icon-bofang"></i>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hideMV: true
    };
  },
  props: {
    urlAndcover: {
      type: Object,
      required: true
    }
  },
  methods: {
    playMV() {
      this.hideMV = false;
      this.$refs.video.play()
    }
  }
};
</script>

<style lang="less" scoped>
.mvbox {
  position: relative;
  width: 100%;
  padding-bottom: 56.25%;
  .mvsec {
    position: absolute;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    z-index: 3;
    padding: 0;
    .cvr {
      background: #000;
      width: 100%;
      height: 100%;
      position: relative;
      .video {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
      .videocover {
        position: absolute;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        z-index: 2;
        .img {
          width: 100%;
          height: 100%;
          display: block;
        }
        .icon-bofang {
          position: absolute;
          font-size: 50px;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          color: rgba(220, 238, 255, 0.6);
        }
      }
    }
  }
}
</style>