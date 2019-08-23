<template>
  <div ref="wrapper">
    <slot></slot>
  </div>
</template>

<script>
import BScroll from "better-scroll";
import { setTimeout } from "timers";
export default {
  props: {
    // 类型：Number
    // 默认值：0
    // 可选值：1、2、3
    // 作用：有时候我们需要知道滚动的位置。当 probeType 为 1 的时候，会非实时（屏幕滑动超过一定时间后）派发scroll 事件；当 probeType 为 2 的时候，会在屏幕滑动的过程中实时的派发 scroll 事件；当 probeType 为 3 的时候，不仅在屏幕滑动的过程中，而且在 momentum 滚动动画运行过程中实时派发 scroll 事件。如果没有设置该值，其默认值为 0，即不派发 scroll 事件
    probeType: {
      type: Number,
      default: 0
    },
    //     类型：Boolean
    // 默认值：false
    // 作用：better-scroll 默认会阻止浏览器的原生 click 事件。当设置为 true，better-scroll 会派发一个 click 事件，我们会给派发的 event 参数加一个私有属性 _constructed，值为 true。
    click: {
      type: Boolean,
      default: true
    },
    data: {
      type: Array,
      default: null
    },
    listenScroll: {
      type: Boolean,
      default: false
    },
    pullUp: {
      type: Boolean,
      default: false
    },
    refreshDelay: {
      type: Number,
      default: 20
    },
  },
  methods: {
    _initScroll() {
      if (!this.$refs.wrapper) {
        return;
      }
      this.scroll = new BScroll(this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      });
      // 是否派发滚动事件
      if (this.listenScroll) {
        let _this = this;
        this.scroll.on("scroll", pos => {
          _this.$emit("scroll", pos);
        });
      }
      // 是否派发滚动到底部事件，用于上拉加载
      if (this.pullUp) {
        this.scroll.on("scrollEnd", () => {
          if (this.scroll.y <= this.scroll.maxScrollY + 50) {
            this.$emit("scrollEnd");
          }
        });
      }
    },

    // 代理better-scroll的enable方法
    enable() {
      this.scroll && this.scroll.enable();
    },
    // 代理better-scroll的disable方法
    disable() {
      this.scroll && this.scroll.disable();
    },
    // 代理better-scroll的refresh方法
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    // 滚动到指定的位置  代理
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    // 滚动到指定的目标元素。  代理
    // 使用方法见Playsong.vue
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
    }
  },
  watch: {
    data() {
      setTimeout(() => {
        this.refresh();
      }, this.refreshDelay);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this._initScroll();
    });
  }
};
</script>

<style>
</style>