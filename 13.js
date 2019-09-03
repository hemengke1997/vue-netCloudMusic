((typeof self !== 'undefined' ? self : this)["webpackJsonp"] = (typeof self !== 'undefined' ? self : this)["webpackJsonp"] || []).push([[13],{

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/public/Scroll.vue?vue&type=script&lang=js&":
/*!**********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/Scroll.vue?vue&type=script&lang=js& ***!
  \**********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var better_scroll__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! better-scroll */ "./node_modules/better-scroll/dist/bscroll.esm.js");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! timers */ "./node_modules/timers-browserify/main.js");
/* harmony import */ var timers__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(timers__WEBPACK_IMPORTED_MODULE_2__);

//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
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
    }
  },
  methods: {
    _initScroll: function _initScroll() {
      var _this2 = this;

      if (!this.$refs.wrapper) {
        return;
      }

      this.scroll = new better_scroll__WEBPACK_IMPORTED_MODULE_1__["default"](this.$refs.wrapper, {
        probeType: this.probeType,
        click: this.click
      }); // 是否派发滚动事件

      if (this.listenScroll) {
        var _this = this;

        this.scroll.on("scroll", function (pos) {
          _this.$emit("scroll", pos);
        });
      } // 是否派发滚动到底部事件，用于上拉加载


      if (this.pullUp) {
        this.scroll.on("scrollEnd", function () {
          if (_this2.scroll.y <= _this2.scroll.maxScrollY + 50) {
            _this2.$emit("scrollEnd");
          }
        });
      }
    },
    // 代理better-scroll的enable方法
    enable: function enable() {
      this.scroll && this.scroll.enable();
    },
    // 代理better-scroll的disable方法
    disable: function disable() {
      this.scroll && this.scroll.disable();
    },
    // 代理better-scroll的refresh方法
    refresh: function refresh() {
      this.scroll && this.scroll.refresh();
    },
    // 滚动到指定的位置  代理
    scrollTo: function scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    // 滚动到指定的目标元素。  代理
    // 使用方法见Playsong.vue
    scrollToElement: function scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    }
  },
  watch: {
    data: function data() {
      var _this3 = this;

      Object(timers__WEBPACK_IMPORTED_MODULE_2__["setTimeout"])(function () {
        _this3.refresh();
      }, this.refreshDelay);
    }
  },
  mounted: function mounted() {
    var _this4 = this;

    this.$nextTick(function () {
      _this4._initScroll();
    });
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/playsong/Playsong.vue?vue&type=script&lang=js&":
/*!*********************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js??ref--12-0!./node_modules/babel-loader/lib!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/playsong/Playsong.vue?vue&type=script&lang=js& ***!
  \*********************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! core-js/modules/es6.regexp.to-string */ "./node_modules/core-js/modules/es6.regexp.to-string.js");
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! core-js/modules/es6.regexp.replace */ "./node_modules/core-js/modules/es6.regexp.replace.js");
/* harmony import */ var core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_replace__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! core-js/modules/es6.regexp.split */ "./node_modules/core-js/modules/es6.regexp.split.js");
/* harmony import */ var core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_split__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! core-js/modules/es6.regexp.match */ "./node_modules/core-js/modules/es6.regexp.match.js");
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! core-js/modules/web.dom.iterable */ "./node_modules/core-js/modules/web.dom.iterable.js");
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! core-js/modules/es6.function.name */ "./node_modules/core-js/modules/es6.function.name.js");
/* harmony import */ var core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_name__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! core-js/modules/es6.number.constructor */ "./node_modules/core-js/modules/es6.number.constructor.js");
/* harmony import */ var core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_number_constructor__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_comment_CommentItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/components/comment/CommentItem */ "./src/components/comment/CommentItem.vue");
/* harmony import */ var _api_comment_api__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/api/comment-api */ "./src/api/comment-api.js");
/* harmony import */ var _api_song_api__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @/api/song-api */ "./src/api/song-api.js");
/* harmony import */ var js_config__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! js/config */ "./src/assets/js/config.js");
/* harmony import */ var public_Scroll__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! public/Scroll */ "./src/components/public/Scroll.vue");







//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//





/* harmony default export */ __webpack_exports__["default"] = ({
  data: function data() {
    return {
      newComments: [],
      hotComments: [],
      song: "song",
      scroll: Object,
      screenWidth: document.body.clientWidth,
      lrc_height: Number,
      noLrc: false,
      songs: {
        al: {
          picUrl: ""
        }
      },
      simiSongs: [],
      simiPlaylists: [],
      songUrl: "",
      playing: false,
      duration: 0,
      lyric: [],
      author: [],
      currentTime: [],
      lyc_time_index: 0,
      // 当前歌词跟时间戳的index
      lyc_translateY: 0,
      // 歌词上移的距离
      lycNeedScroll: 0 //  播放时间改变时 总会触发updateTime方法 为了避免每次触发方法时都去遍历时间戳，就立了这个flag

    };
  },
  components: {
    CommentItem: _components_comment_CommentItem__WEBPACK_IMPORTED_MODULE_7__["default"],
    Scroll: public_Scroll__WEBPACK_IMPORTED_MODULE_11__["default"]
  },
  computed: {
    id: function id() {
      return this.$route.query.id;
    },
    singers: function singers() {
      return function (ar) {
        if (ar) {
          if (ar.length === 1) {
            return ar[0].name;
          } else {
            var temp = [];
            ar.forEach(function (singer) {
              temp.push(singer.name);
            });
            return temp.join(" / ");
          }
        }
      };
    },
    count: function count() {
      return function (ct) {
        if (ct / 10000 >= 1) {
          return Math.floor(ct / 10000) + "万";
        } else if (ct / 10000 < 1) {
          return ct;
        }
      };
    },
    lycActive: function lycActive() {
      var _this2 = this;

      return function (index) {
        return index === _this2.lyc_time_index;
      };
    },
    lyc: function lyc() {
      var _this3 = this;

      return function (index) {
        return _this3.lyric[index] === "" ? "......" : _this3.lyric[index];
      };
    }
  },
  methods: {
    playsong: function playsong() {
      if (this.playing) {
        this.$refs.audio.pause();
        this.playing = !this.playing;
      } else {
        this.$refs.audio.play();
        this.playing = !this.playing;
      }
    },
    _getSongComments: function _getSongComments(id) {
      var _this4 = this;

      Object(_api_comment_api__WEBPACK_IMPORTED_MODULE_8__["getSongComments"])(id).then(function (res) {
        _this4.newComments = res.data.comments;
        _this4.hotComments = res.data.hotComments;
      });
    },
    download: function download() {
      this.$router.push({
        path: "/download"
      });
    },
    setLrcHeight: function setLrcHeight(h) {
      if (h >= 375) {
        this.lrc_height = 88;
      } else {
        this.lrc_height = 67;
      }
    },
    gotoNext: function gotoNext() {
      this.$refs.scrollContainer.scrollToElement(this.$refs.target, 500);
    },
    _getSong: function _getSong(id) {
      var _this5 = this;

      Object(_api_song_api__WEBPACK_IMPORTED_MODULE_9__["getSong"])(id).then(function (res) {
        _this5.songs = res.data.songs[0]; // console.log(this.songs)
      });
    },
    _getLyric: function _getLyric(id) {
      var _this6 = this;

      Object(_api_song_api__WEBPACK_IMPORTED_MODULE_9__["getLyric"])(id).then(function (res) {
        if (res.data.lrc.lyric) {
          _this6.noLrc = false;
          _this6.lyric = res.data.lrc.lyric;
          var pattern1 = /\[\d{2}:\d{2}\.\d{2,3}\]/g;
          _this6.currentTime = _this6.lyric.match(pattern1);
          _this6.currentTime = _this6.currentTime.map(function (item) {
            return _this6.myAdd(parseInt(item.slice(1, -2).split(":")[0] * 60), item.slice(2, -1).split(":")[1]);
          }); // other: 除开时间  剩下的

          var other = _this6.lyric.replace(pattern1, "");

          var pattern2 = /\[.*\]/g;
          _this6.author = other.match(pattern2);
          _this6.lyric = other.replace(pattern2, "").split(/[\n]/).slice(_this6.author && _this6.author.length || 0, -1); // console.log(this.currentTime)
          // console.log(other, "剩下的");
          // console.log(this.lyric, "歌词");
          // console.log(this.author, "作者");
        } else {
          _this6.noLrc = true;
        }
      });
    },
    _getSimiSongs: function _getSimiSongs(id) {
      var _this7 = this;

      Object(_api_song_api__WEBPACK_IMPORTED_MODULE_9__["getSimiSongs"])(id).then(function (res) {
        if (res.status === js_config__WEBPACK_IMPORTED_MODULE_10__["OK"]) {
          _this7.simiSongs = res.data.songs;
        }
      });
    },
    _getSimiPlaylist: function _getSimiPlaylist(id) {
      var _this8 = this;

      Object(_api_song_api__WEBPACK_IMPORTED_MODULE_9__["getSimiPlaylist"])(id).then(function (res) {
        if (res.status === js_config__WEBPACK_IMPORTED_MODULE_10__["OK"]) {
          _this8.simiPlaylists = res.data.playlists;
        }
      });
    },
    _getSongUrl: function _getSongUrl(id) {
      var _this9 = this;

      Object(_api_song_api__WEBPACK_IMPORTED_MODULE_9__["getSongUrl"])(id).then(function (res) {
        if (res.status === js_config__WEBPACK_IMPORTED_MODULE_10__["OK"]) {
          _this9.songUrl = res.data.data[0].url;
          _this9.$refs.audio.src = _this9.songUrl;
        }
      });
    },
    gotoSong: function gotoSong(id) {
      this.$router.push({
        path: "song",
        query: {
          id: id
        }
      });
    },
    gotoPlaylist: function gotoPlaylist(id) {
      this.$router.push({
        path: "/playlist/detail",
        query: {
          id: id
        }
      });
    },
    ended: function ended() {
      this.playing = false;
      this.lyc_time_index = 0;
      this.lyc_translateY = 0;
      this.lycNeedScroll = 0;
    },
    error: function error() {
      this.$router.replace(this.$route.fullPath);
    },
    updateTime: function updateTime(e) {
      // console.log(e)
      for (var i = this.lycNeedScroll; i < this.currentTime.length; i++) {
        if (e.target.currentTime >= this.currentTime[i]) {
          this.lycNeedScroll = i + 1;
          this.lyc_time_index = i;

          if (i > 1) {
            this.lyc_translateY -= this.$refs[i - 2][0].offsetHeight;
          }

          break;
        }
      }
    },
    // 处理JS float精度问题
    myAdd: function myAdd(n1, n2) {
      var len = n2.split(".")[1].length;
      var x = n1 * Math.pow(10, len);
      var y = parseInt(n2.toString().split(".")[0] + n2.toString().split(".")[1]);
      return (x + y) / Math.pow(10, len);
    }
  },
  created: function created() {
    this._getSongComments(this.id);

    this._getSong(this.id);

    this._getLyric(this.id);

    this._getSimiSongs(this.id);

    this._getSimiPlaylist(this.id);

    this._getSongUrl(this.id);
  },
  mounted: function mounted() {
    var _this = this;

    window.onresize = function () {
      return function () {
        _this.screenWidth = document.body.clientWidth;
      }();
    };

    this.setLrcHeight(this.screenWidth);
    this.$refs.audio.src = this.songUrl;
  },
  watch: {
    screenWidth: function screenWidth(h) {
      this.setLrcHeight(h);
    }
  }
});

/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"b3604394-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/public/Scroll.vue?vue&type=template&id=65440bf3&":
/*!******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3604394-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/components/public/Scroll.vue?vue&type=template&id=65440bf3& ***!
  \******************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { ref: "wrapper" }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"b3604394-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/playsong/Playsong.vue?vue&type=template&id=5cf17145&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/cache-loader/dist/cjs.js?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3604394-vue-loader-template"}!./node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/playsong/Playsong.vue?vue&type=template&id=5cf17145&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "render", function() { return render; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return staticRenderFns; });
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("transition", { attrs: { name: "fade-top", mode: "out-in" } }, [
    _c("div", { staticClass: "u-height" }, [
      _c("div", { staticClass: "root" }, [
        _c(
          "div",
          { staticClass: "song" },
          [
            _c("div", {
              staticClass: "song_bg",
              style: {
                backgroundImage: "url('" + _vm.songs.al.picUrl + "')",
                opacity: 1
              }
            }),
            _vm._v(" "),
            _c(
              "scroll",
              { ref: "scrollContainer", staticClass: "scroll_wrapper" },
              [
                _c("div", { staticClass: "scroll_content" }, [
                  _c("div", [
                    _c(
                      "div",
                      { staticClass: "m-song_newfst" },
                      [
                        _c("div", { staticClass: "top_logo" }, [
                          _c("i", {
                            staticClass: "iconfont icon-wangyiyunyinle1"
                          }),
                          _vm._v(" "),
                          _c("span", { staticClass: "logo_ch" }, [
                            _vm._v("minko音乐")
                          ])
                        ]),
                        _vm._v(" "),
                        _c("transition", { attrs: { name: "fade-disc" } }, [
                          _c("div", { staticClass: "m-song-wrap" }, [
                            _c(
                              "div",
                              {
                                staticClass: "ignore_disc",
                                class: { playing: _vm.playing }
                              },
                              [
                                _c("div", { staticClass: "m-song-turn" }, [
                                  _c(
                                    "div",
                                    { staticClass: "ignore_rollwrap" },
                                    [
                                      _c(
                                        "div",
                                        {
                                          staticClass: "song_img circling",
                                          class: {
                                            circling_paused: !_vm.playing
                                          }
                                        },
                                        [
                                          _c("img", {
                                            attrs: {
                                              src: _vm.songs.al.picUrl,
                                              alt: "songpic"
                                            }
                                          })
                                        ]
                                      )
                                    ]
                                  ),
                                  _vm._v(" "),
                                  _c(
                                    "div",
                                    {
                                      staticClass: "song_lgour circling",
                                      class: { circling_paused: !_vm.playing }
                                    },
                                    [_c("div", { staticClass: "song_light" })]
                                  )
                                ]),
                                _vm._v(" "),
                                _c("span", {
                                  directives: [
                                    {
                                      name: "show",
                                      rawName: "v-show",
                                      value: !_vm.playing,
                                      expression: "!playing"
                                    }
                                  ],
                                  staticClass: "ignore_plybtn"
                                })
                              ]
                            ),
                            _vm._v(" "),
                            _c("div", {
                              staticClass: "song_clickarea",
                              on: { click: _vm.playsong }
                            })
                          ])
                        ]),
                        _vm._v(" "),
                        _c("div", { staticClass: "song_info" }, [
                          _c("h2", { staticClass: "song_h2" }, [
                            _c("span", { staticClass: "song_title" }, [
                              _vm._v(_vm._s(_vm.songs.name))
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "song_gap" }, [
                              _vm._v("-")
                            ]),
                            _vm._v(" "),
                            _c("span", { staticClass: "song_autr" }, [
                              _vm._v(_vm._s(_vm.singers(_vm.songs.ar)))
                            ])
                          ]),
                          _vm._v(" "),
                          _c("div", { staticClass: "song_lrc" }, [
                            _vm.noLrc
                              ? _c("p", { staticClass: "song_pure song_top" }, [
                                  _vm._v(
                                    "\n                      暂无歌词，\n                      "
                                  ),
                                  _c("span", { staticClass: "helplrc" }, [
                                    _vm._v("求歌词")
                                  ])
                                ])
                              : _vm._e(),
                            _vm._v(" "),
                            !_vm.noLrc
                              ? _c(
                                  "div",
                                  {
                                    ref: "scrollLyr",
                                    staticClass: "songlrc_scroll",
                                    style: { height: _vm.lrc_height + "px" }
                                  },
                                  [
                                    _c(
                                      "div",
                                      {
                                        staticClass: "lrc_inner",
                                        style: {
                                          transform:
                                            "translateY(" +
                                            _vm.lyc_translateY +
                                            "px)"
                                        }
                                      },
                                      _vm._l(_vm.lyric, function(item, index) {
                                        return _c(
                                          "p",
                                          {
                                            key: index,
                                            ref: index,
                                            refInFor: true,
                                            staticClass: "lrc_item",
                                            class: {
                                              light: _vm.lycActive(index)
                                            }
                                          },
                                          [_vm._v(_vm._s(_vm.lyc(index)))]
                                        )
                                      }),
                                      0
                                    )
                                  ]
                                )
                              : _vm._e()
                          ])
                        ]),
                        _vm._v(" "),
                        !_vm.noLrc
                          ? _c("div", { staticClass: "link_download" }, [
                              _vm._v("查看完整歌词 >")
                            ])
                          : _vm._e(),
                        _vm._v(" "),
                        _c("div", { staticClass: "guide" }, [
                          _c("i", {
                            staticClass: "ignore_arr ani",
                            on: { click: _vm.gotoNext }
                          })
                        ])
                      ],
                      1
                    ),
                    _vm._v(" "),
                    _c("div", { ref: "target", staticClass: "m_morelist" }, [
                      _c("h3", { staticClass: "u_title" }, [
                        _vm._v("包含这首歌的歌单")
                      ]),
                      _vm._v(" "),
                      _c(
                        "ul",
                        _vm._l(_vm.simiPlaylists, function(item, index) {
                          return _c(
                            "li",
                            {
                              key: index,
                              on: {
                                click: function($event) {
                                  return _vm.gotoPlaylist(item.id)
                                }
                              }
                            },
                            [
                              _c("figure", { staticClass: "cover" }, [
                                _c("img", {
                                  directives: [
                                    {
                                      name: "lazy",
                                      rawName: "v-lazy",
                                      value: item.coverImgUrl,
                                      expression: "item.coverImgUrl"
                                    }
                                  ],
                                  attrs: { alt: "playlist" }
                                }),
                                _vm._v(" "),
                                _c("div", { staticClass: "play_count" }, [
                                  _c("i", {
                                    staticClass: "iconfont icon-erji"
                                  }),
                                  _vm._v(" "),
                                  _c("span", {}, [
                                    _vm._v(_vm._s(_vm.count(item.playCount)))
                                  ])
                                ])
                              ]),
                              _vm._v(" "),
                              _c("h3", { staticClass: "playlist_title" }, [
                                _vm._v(_vm._s(item.name))
                              ]),
                              _vm._v(" "),
                              _c("p", { staticClass: "sub" }, [
                                _c("span", { staticClass: "author" }, [
                                  _vm._v("by " + _vm._s(item.creator.nickname))
                                ])
                              ])
                            ]
                          )
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "m_moresongs" }, [
                      _c("h3", { staticClass: "u_title" }, [
                        _vm._v("喜欢这首歌的人也听")
                      ]),
                      _vm._v(" "),
                      _c(
                        "ul",
                        _vm._l(_vm.simiSongs, function(item, index) {
                          return _c(
                            "li",
                            {
                              key: index,
                              on: {
                                click: function($event) {
                                  return _vm.gotoSong(item.id)
                                }
                              }
                            },
                            [
                              _c("figure", { staticClass: "ignore_cover" }, [
                                _c("img", {
                                  attrs: { src: item.album.picUrl, alt: "song" }
                                })
                              ]),
                              _vm._v(" "),
                              _c("article", [
                                _c("h3", { staticClass: "song_title" }, [
                                  _vm._v(_vm._s(item.name))
                                ]),
                                _vm._v(" "),
                                _c("p", { staticClass: "song_des" }, [
                                  _vm._v(
                                    _vm._s(_vm.singers(item.artists)) +
                                      " - " +
                                      _vm._s(item.album.name)
                                  )
                                ])
                              ]),
                              _vm._v(" "),
                              _c("i", { staticClass: "iconfont icon-bofang" })
                            ]
                          )
                        }),
                        0
                      )
                    ]),
                    _vm._v(" "),
                    _c("div", { staticClass: "m_newcomm" }, [
                      _vm.hotComments.length || _vm.newComments.length
                        ? _c("div", { staticClass: "talk_song" }, [
                            _c("div", { staticClass: "m_comments" }, [
                              _vm.hotComments.length
                                ? _c("div", [
                                    _c("h3", { staticClass: "cmt_title" }, [
                                      _vm._v("精彩评论")
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "cmt_list" },
                                      _vm._l(_vm.hotComments, function(
                                        item,
                                        index
                                      ) {
                                        return _c("comment-item", {
                                          key: index,
                                          attrs: { item: item, type: _vm.song }
                                        })
                                      }),
                                      1
                                    )
                                  ])
                                : _vm._e(),
                              _vm._v(" "),
                              _vm.hotComments.length < 10
                                ? _c("div", [
                                    _c("h3", { staticClass: "cmt_title" }, [
                                      _vm._v(
                                        "最新评论" +
                                          _vm._s(_vm.newComments.length)
                                      )
                                    ]),
                                    _vm._v(" "),
                                    _c(
                                      "div",
                                      { staticClass: "cmt_list" },
                                      _vm._l(_vm.newComments, function(
                                        item,
                                        index
                                      ) {
                                        return _c("comment-item", {
                                          key: index,
                                          attrs: { item: item, type: _vm.song }
                                        })
                                      }),
                                      1
                                    )
                                  ])
                                : _vm._e()
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "cmt_more" }, [
                              _c(
                                "span",
                                {
                                  staticClass: "box",
                                  on: { click: _vm.download }
                                },
                                [_vm._v("打开云音乐查看更多精彩评论")]
                              )
                            ])
                          ])
                        : _vm._e(),
                      _vm._v(" "),
                      !_vm.hotComments.length && !_vm.newComments.length
                        ? _c("div", [
                            _c("h3", { staticClass: "cmt_title" }, [
                              _vm._v("最新评论")
                            ]),
                            _vm._v(" "),
                            _c("div", { staticClass: "song_cmemp" }, [
                              _c("p", { staticClass: "song_nocomment" }, [
                                _vm._v("暂无歌曲评论")
                              ])
                            ])
                          ])
                        : _vm._e()
                    ])
                  ])
                ])
              ]
            ),
            _vm._v(" "),
            _c("div", { staticClass: "footer" }, [
              _c("div", { staticClass: "footer_wrap" }, [
                _c(
                  "div",
                  { staticClass: "u_btn", on: { click: _vm.download } },
                  [_vm._v("打 开")]
                ),
                _vm._v(" "),
                _c(
                  "div",
                  { staticClass: "u_btn red", on: { click: _vm.download } },
                  [_vm._v("下 载")]
                )
              ])
            ])
          ],
          1
        )
      ]),
      _vm._v(" "),
      _c("audio", {
        ref: "audio",
        attrs: { id: "music-audio" },
        on: {
          ended: _vm.ended,
          error: _vm.error,
          timeupdate: function($event) {
            return _vm.updateTime($event)
          }
        }
      })
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true



/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/style-resources-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/playsong/Playsong.vue?vue&type=style&index=0&id=5cf17145&lang=less&scoped=true&":
/*!*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/style-resources-loader/lib??ref--10-oneOf-1-4!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/playsong/Playsong.vue?vue&type=style&index=0&id=5cf17145&lang=less&scoped=true& ***!
  \*****************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js")(false);
// Imports
var getUrl = __webpack_require__(/*! ../../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
var ___CSS_LOADER_URL___0___ = getUrl(__webpack_require__(/*! ../../assets/img/needle.png */ "./src/assets/img/needle.png"));
var ___CSS_LOADER_URL___1___ = getUrl(__webpack_require__(/*! ../../assets/img/needle-ip6.png */ "./src/assets/img/needle-ip6.png"));
var ___CSS_LOADER_URL___2___ = getUrl(__webpack_require__(/*! ../../assets/img/needle-plus.png */ "./src/assets/img/needle-plus.png"));
var ___CSS_LOADER_URL___3___ = getUrl(__webpack_require__(/*! ../../assets/img/disc_3x.png */ "./src/assets/img/disc_3x.png"));
var ___CSS_LOADER_URL___4___ = getUrl(__webpack_require__(/*! ../../assets/img/disc-ip6.png */ "./src/assets/img/disc-ip6.png"));
var ___CSS_LOADER_URL___5___ = getUrl(__webpack_require__(/*! ../../assets/img/disc-plus.png */ "./src/assets/img/disc-plus.png"));
var ___CSS_LOADER_URL___6___ = getUrl(__webpack_require__(/*! ../../assets/img/disc_default.png */ "./src/assets/img/disc_default.png"));
var ___CSS_LOADER_URL___7___ = getUrl(__webpack_require__(/*! ../../assets/img/disc_light.png */ "./src/assets/img/disc_light.png"));
var ___CSS_LOADER_URL___8___ = getUrl(__webpack_require__(/*! ../../assets/img/disc_light-ip6.png */ "./src/assets/img/disc_light-ip6.png"));
var ___CSS_LOADER_URL___9___ = getUrl(__webpack_require__(/*! ../../assets/img/disc_light-plus.png */ "./src/assets/img/disc_light-plus.png"));
var ___CSS_LOADER_URL___10___ = getUrl(__webpack_require__(/*! ../../assets/img/play_btn.png */ "./src/assets/img/play_btn.png"));
var ___CSS_LOADER_URL___11___ = getUrl(__webpack_require__(/*! ../../assets/img/play_btn_3x.png */ "./src/assets/img/play_btn_3x.png"));
var ___CSS_LOADER_URL___12___ = getUrl(__webpack_require__(/*! ../../assets/img/guide.png */ "./src/assets/img/guide.png"));
// Module
exports.push([module.i, ".highlight[data-v-5cf17145]{color:#507daf}[v-cloak][data-v-5cf17145]{display:none}.fade-top-enter-active[data-v-5cf17145],.fade-top-leave-active[data-v-5cf17145]{-webkit-transition:all .3s;transition:all .3s}.fade-top-enter[data-v-5cf17145]{opacity:0;-webkit-transform:translateY(-10.66667vw);transform:translateY(-10.66667vw);content:\"viewport-units-buggyfill; -webkit-transform: translateY(-10.66667vw); transform: translateY(-10.66667vw)\"}.fade-top-leave-to[data-v-5cf17145]{opacity:0;-webkit-transform:translateY(10.66667vw);transform:translateY(10.66667vw);content:\"viewport-units-buggyfill; -webkit-transform: translateY(10.66667vw); transform: translateY(10.66667vw)\"}.fade-disc-enter-active[data-v-5cf17145],.fade-disc-leave-active[data-v-5cf17145]{-webkit-transition:all .5s;transition:all .5s}.fade-disc-enter[data-v-5cf17145],.fade-disc-leave-to[data-v-5cf17145]{opacity:0}.u-height[data-v-5cf17145]{width:100%;height:100%;padding-bottom:env(safe-area-inset-bottom);-webkit-box-sizing:border-box;box-sizing:border-box}.u-height .root[data-v-5cf17145]{position:relative;background-color:#fcfcfd;height:100%}.u-height .root .song[data-v-5cf17145]{position:absolute;min-width:320px}.u-height .root .song[data-v-5cf17145],.u-height .root .song .song_bg[data-v-5cf17145]{left:0;top:0;right:0;bottom:0;z-index:1;overflow:hidden}.u-height .root .song .song_bg[data-v-5cf17145]{background-color:#161824;background-position:50%;background-repeat:no-repeat;background-size:auto 100%;-webkit-filter:blur(16vw) brightness(50%);filter:blur(60px) brightness(50%);position:fixed;height:100%;-webkit-transform-origin:center top;transform-origin:center top;-webkit-transform:scale(1.5);transform:scale(1.5);-webkit-transition:opacity .3s linear;transition:opacity .3s linear;content:\"viewport-units-buggyfill; -webkit-filter: blur(16vw) brightness(50%)\"}.u-height .root .song .song_bg[data-v-5cf17145]:before{position:absolute;left:0;top:0;right:0;bottom:0;z-index:1;background-color:rgba(0,0,0,.25)}.u-height .root .song .scroll_wrapper[data-v-5cf17145]{position:absolute;top:0;left:0;right:0;bottom:60px;overflow:hidden;z-index:20}.u-height .root .song .scroll_wrapper .scroll_content[data-v-5cf17145]{position:absolute;left:0;top:0;width:100%;min-height:100%}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst[data-v-5cf17145]{height:calc(100vh - 66px);position:relative;padding-bottom:12px;-webkit-box-sizing:border-box;box-sizing:border-box;content:\"viewport-units-buggyfill; height: calc(100vh-66px)\"}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .top_logo[data-v-5cf17145]{position:absolute;top:12px;left:10px;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .top_logo .icon-wangyiyunyinle1[data-v-5cf17145]{color:#d43c33;font-size:18px}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .top_logo .logo_ch[data-v-5cf17145]{font-size:14px;color:#fff;padding-left:5px}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap[data-v-5cf17145]{padding-top:63px}@media screen and (min-width:360px){.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap[data-v-5cf17145]{padding-top:70px}}@media screen and (min-width:414px){.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap[data-v-5cf17145]{padding-top:80px}}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc[data-v-5cf17145]{width:248px;height:248px;margin:0 auto;position:relative}@media screen and (min-width:360px){.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc[data-v-5cf17145]{width:296px;height:296px}}@media screen and (min-width:414px){.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc[data-v-5cf17145]{width:342px;height:342px}}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc[data-v-5cf17145]:after{content:\"\";position:absolute;top:-63px;left:107px;z-index:5;width:84px;height:122px;background:url(" + ___CSS_LOADER_URL___0___ + ") no-repeat;background-size:contain;-webkit-transition:-webkit-transform .2s linear;transition:-webkit-transform .2s linear;transition:transform .2s linear;transition:transform .2s linear,-webkit-transform .2s linear;-webkit-transform-origin:top left;transform-origin:top left}@media screen and (min-width:360px){.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc[data-v-5cf17145]:after{width:96px;height:137px;top:-70px;left:133px;background-image:url(" + ___CSS_LOADER_URL___1___ + ")}}@media screen and (min-width:414px){.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc[data-v-5cf17145]:after{width:110px;height:157px;top:-80px;left:150px;background-image:url(" + ___CSS_LOADER_URL___2___ + ")}}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc.playing[data-v-5cf17145]:after{-webkit-transform:rotate(-17deg);transform:rotate(-17deg);-webkit-transform-origin:left top;transform-origin:left top}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc .m-song-turn[data-v-5cf17145]{width:100%;height:100%}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc .m-song-turn[data-v-5cf17145]:before{content:\"\";position:absolute;left:0;top:0;right:0;bottom:0;z-index:1;background:url(" + ___CSS_LOADER_URL___3___ + ") no-repeat;background-size:contain}@media screen and (min-width:360px){.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc .m-song-turn[data-v-5cf17145]:before{background-image:url(" + ___CSS_LOADER_URL___4___ + ")}}@media screen and (min-width:414px){.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc .m-song-turn[data-v-5cf17145]:before{background-image:url(" + ___CSS_LOADER_URL___5___ + ")}}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc .m-song-turn .ignore_rollwrap[data-v-5cf17145]{position:absolute;width:150px;height:150px;left:50%;top:50%;z-index:1;margin:-75px 0 0 -75px}@media screen and (min-width:360px){.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc .m-song-turn .ignore_rollwrap[data-v-5cf17145]{width:184px;height:184px;margin:-92px 0 0 -92px}}@media screen and (min-width:414px){.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc .m-song-turn .ignore_rollwrap[data-v-5cf17145]{width:212px;height:212px;margin:-106px 0 0 -106px}}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc .m-song-turn .ignore_rollwrap .song_img[data-v-5cf17145]{width:100%;height:100%;border-radius:50%;overflow:hidden;background:url(" + ___CSS_LOADER_URL___6___ + ") no-repeat;background-size:contain}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc .m-song-turn .ignore_rollwrap .song_img.circling[data-v-5cf17145]{-webkit-animation:circling-data-v-5cf17145 20s linear infinite;animation:circling-data-v-5cf17145 20s linear infinite}@-webkit-keyframes circling-data-v-5cf17145{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc .m-song-turn .ignore_rollwrap .song_img.circling_paused[data-v-5cf17145]{-webkit-animation-play-state:paused;animation-play-state:paused}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc .m-song-turn .ignore_rollwrap .song_img img[data-v-5cf17145]{width:100%;vertical-align:middle}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc .m-song-turn .song_lgour[data-v-5cf17145]{position:absolute;left:0;top:0;right:0;bottom:0;z-index:1;z-index:3}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc .m-song-turn .song_lgour.circling[data-v-5cf17145]{-webkit-animation:circling-data-v-5cf17145 20s linear infinite;animation:circling-data-v-5cf17145 20s linear infinite}@keyframes circling-data-v-5cf17145{0%{-webkit-transform:rotate(0);transform:rotate(0)}to{-webkit-transform:rotate(1turn);transform:rotate(1turn)}}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc .m-song-turn .song_lgour.circling_paused[data-v-5cf17145]{-webkit-animation-play-state:paused;animation-play-state:paused}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc .m-song-turn .song_lgour .song_light[data-v-5cf17145]{position:absolute;left:0;top:0;right:0;bottom:0;z-index:1;z-index:3;background:url(" + ___CSS_LOADER_URL___7___ + ") no-repeat;background-size:contain}@media screen and (min-width:360px){.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc .m-song-turn .song_lgour .song_light[data-v-5cf17145]{background-image:url(" + ___CSS_LOADER_URL___8___ + ")}}@media screen and (min-width:414px){.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc .m-song-turn .song_lgour .song_light[data-v-5cf17145]{background-image:url(" + ___CSS_LOADER_URL___9___ + ")}}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc .ignore_plybtn[data-v-5cf17145]{width:50px;height:50px;left:50%;top:50%;position:absolute;-webkit-transform:translate(-50%,-50%);transform:translate(-50%,-50%);z-index:10;background:url(" + ___CSS_LOADER_URL___10___ + ") 0 0 no-repeat;background-size:contain}@media screen and (min-width:360px){.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc .ignore_plybtn[data-v-5cf17145]{width:56px;height:56px}}@media screen and (min-width:414px){.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .ignore_disc .ignore_plybtn[data-v-5cf17145]{width:65px;height:65px;background-image:url(" + ___CSS_LOADER_URL___11___ + ")}}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .m-song-wrap .song_clickarea[data-v-5cf17145]{position:absolute;width:100%;left:0;top:0;bottom:52px;z-index:10}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info[data-v-5cf17145]{margin-top:25px;padding:0 35px}@media screen and (min-width:414px){.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info[data-v-5cf17145]{margin-top:15px}}@media screen and (min-height:672px){.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info[data-v-5cf17145]{margin-top:25px}}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info .song_h2[data-v-5cf17145]{font-size:1px;text-align:center;color:#fefefe;line-height:1.1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:normal}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info .song_h2 .song_gap[data-v-5cf17145],.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info .song_h2 .song_title[data-v-5cf17145]{font-size:15px}@media screen and (min-width:375px){.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info .song_h2 .song_gap[data-v-5cf17145],.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info .song_h2 .song_title[data-v-5cf17145]{font-size:18px}}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info .song_h2 .song_gap[data-v-5cf17145]{margin:0 4px}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info .song_h2 .song_autr[data-v-5cf17145]{font-size:13px;color:hsla(0,0%,100%,.6)}@media screen and (min-width:375px){.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info .song_h2 .song_autr[data-v-5cf17145]{font-size:16px}}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info .song_lrc[data-v-5cf17145]{position:relative;margin-top:40px}@media screen and (min-width:414px){.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info .song_lrc[data-v-5cf17145]{margin-top:45px}}@media screen and (min-height:672px){.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info .song_lrc[data-v-5cf17145]{margin-top:55px}}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info .song_lrc .song_pure[data-v-5cf17145]{font-size:13px;color:hsla(0,0%,100%,.6);text-align:center;line-height:1;padding-top:6px;margin-bottom:6px}@media screen and (min-width:375px){.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info .song_lrc .song_pure[data-v-5cf17145]{font-size:16px}}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info .song_lrc .song_top[data-v-5cf17145]{position:relative;z-index:10}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info .song_lrc .helplrc[data-v-5cf17145]{text-decoration:underline}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info .song_lrc .songlrc_scroll[data-v-5cf17145]{height:72px;line-height:1.5;font-size:13px;overflow:hidden;text-align:center;color:hsla(0,0%,100%,.6)}@media screen and (min-width:375px){.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info .song_lrc .songlrc_scroll[data-v-5cf17145]{font-size:16px}}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info .song_lrc .songlrc_scroll .lrc_inner[data-v-5cf17145]{-webkit-transition:-webkit-transform .2s linear;transition:-webkit-transform .2s linear;transition:transform .2s linear;transition:transform .2s linear,-webkit-transform .2s linear}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info .song_lrc .songlrc_scroll .lrc_inner .lrc_item[data-v-5cf17145]{padding-bottom:5px}@media screen and (min-width:375px){.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info .song_lrc .songlrc_scroll .lrc_inner .lrc_item[data-v-5cf17145]{padding-bottom:8px}}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .song_info .song_lrc .songlrc_scroll .lrc_inner .lrc_item.light[data-v-5cf17145]{color:#fff}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .link_download[data-v-5cf17145]{color:hsla(0,0%,100%,.6);height:30px;line-height:30px;bottom:18px;font-size:14px}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .guide[data-v-5cf17145],.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .link_download[data-v-5cf17145]{position:absolute;left:0;right:0;-webkit-box-sizing:border-box;box-sizing:border-box;display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-ms-flex-direction:column;flex-direction:column;-webkit-box-align:center;-ms-flex-align:center;align-items:center}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .guide[data-v-5cf17145]{height:36px;padding-top:10px;z-index:10;bottom:-14px}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .guide .ignore_arr[data-v-5cf17145]{display:block;width:17px;height:12px;background-repeat:no-repeat;background-size:17px auto;background-image:url(" + ___CSS_LOADER_URL___12___ + ");background-position:0 0}.u-height .root .song .scroll_wrapper .scroll_content .m-song_newfst .guide .ani[data-v-5cf17145]{-webkit-animation:shine-data-v-5cf17145 1.2s steps(1) infinite;animation:shine-data-v-5cf17145 1.2s steps(1) infinite}@-webkit-keyframes shine-data-v-5cf17145{0%{background-position:0 0}15%{background-position:0 -12px}30%{background-position:0 -24px}45%{background-position:0 -36px}60%{background-position:0 -48px}75%{background-position:0 -60px}90%{background-position:0 -72px}to{background-position:0 -84px}}@keyframes shine-data-v-5cf17145{0%{background-position:0 0}15%{background-position:0 -12px}30%{background-position:0 -24px}45%{background-position:0 -36px}60%{background-position:0 -48px}75%{background-position:0 -60px}90%{background-position:0 -72px}to{background-position:0 -84px}}.u-height .root .song .scroll_wrapper .scroll_content .m_morelist[data-v-5cf17145]{line-height:1.6;padding:40px env(safe-area-inset-right) 30px env(safe-area-inset-left)}.u-height .root .song .scroll_wrapper .scroll_content .m_morelist .u_title[data-v-5cf17145]{position:relative;padding-left:10px;line-height:18px;color:#fff;font-size:16px}.u-height .root .song .scroll_wrapper .scroll_content .m_morelist .u_title[data-v-5cf17145]:after{content:\"\";background-color:#d33a31;position:absolute;width:2px;height:16px;left:0;top:1px}.u-height .root .song .scroll_wrapper .scroll_content .m_morelist ul[data-v-5cf17145]{display:-webkit-box;display:-ms-flexbox;display:flex;margin-top:12px}.u-height .root .song .scroll_wrapper .scroll_content .m_morelist ul li[data-v-5cf17145]{-webkit-box-flex:1;-ms-flex:auto;flex:auto;width:1%;margin-left:3px}.u-height .root .song .scroll_wrapper .scroll_content .m_morelist ul li[data-v-5cf17145]:first-child{margin-left:0}.u-height .root .song .scroll_wrapper .scroll_content .m_morelist ul li .cover[data-v-5cf17145]{position:relative;padding-bottom:100%;overflow:hidden}.u-height .root .song .scroll_wrapper .scroll_content .m_morelist ul li .cover[data-v-5cf17145]:after{content:\"\";position:absolute;top:0;left:0;width:100%;height:25px;z-index:1;background:-webkit-gradient(linear,left top,left bottom,from(rgba(0,0,0,.3)),to(transparent));background:linear-gradient(180deg,rgba(0,0,0,.3),transparent)}.u-height .root .song .scroll_wrapper .scroll_content .m_morelist ul li .cover img[data-v-5cf17145]{position:absolute;width:100%;height:100%;left:0;top:0;z-index:1}.u-height .root .song .scroll_wrapper .scroll_content .m_morelist ul li .cover .play_count[data-v-5cf17145]{z-index:33;position:absolute;right:3px;top:4px;font-size:12px;color:#fff;text-shadow:1px 0 0 rgba(0,0,0,.15)}.u-height .root .song .scroll_wrapper .scroll_content .m_morelist ul li .cover .play_count .icon-erji[data-v-5cf17145]{font-size:12px}.u-height .root .song .scroll_wrapper .scroll_content .m_morelist ul li .playlist_title[data-v-5cf17145]{margin:2px 0 -1px;padding:0 6px;color:#fff;font-size:13px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:normal}.u-height .root .song .scroll_wrapper .scroll_content .m_morelist ul li .sub[data-v-5cf17145]{position:relative;padding:0 19px 0 6px;color:hsla(0,0%,100%,.6);font-size:12px;height:20px;overflow:hidden}.u-height .root .song .scroll_wrapper .scroll_content .m_morelist ul li .sub .author[data-v-5cf17145]{display:-webkit-box;-webkit-line-clamp:1;-webkit-box-orient:vertical;position:relative;float:left}.u-height .root .song .scroll_wrapper .scroll_content .m_moresongs[data-v-5cf17145]{margin-top:10px;padding-bottom:30px;line-height:1.6;padding-left:env(safe-area-inset-left);padding-right:env(safe-area-inset-right)}.u-height .root .song .scroll_wrapper .scroll_content .m_moresongs .u_title[data-v-5cf17145]{position:relative;padding-left:10px;line-height:18px;color:#fff;font-size:16px}.u-height .root .song .scroll_wrapper .scroll_content .m_moresongs .u_title[data-v-5cf17145]:after{content:\"\";background-color:#d33a31;position:absolute;width:2px;height:16px;left:0;top:1px}.u-height .root .song .scroll_wrapper .scroll_content .m_moresongs ul[data-v-5cf17145]{margin-top:10px}.u-height .root .song .scroll_wrapper .scroll_content .m_moresongs ul li[data-v-5cf17145]{padding:7px 0 10px 10px;height:40px;position:relative;overflow:hidden}.u-height .root .song .scroll_wrapper .scroll_content .m_moresongs ul li .ignore_cover[data-v-5cf17145]{width:40px;height:40px;float:left;margin-right:10px}.u-height .root .song .scroll_wrapper .scroll_content .m_moresongs ul li .ignore_cover img[data-v-5cf17145]{width:100%;height:100%}.u-height .root .song .scroll_wrapper .scroll_content .m_moresongs ul li article[data-v-5cf17145]{padding-bottom:7px;padding-right:40px;height:100%;position:relative}.u-height .root .song .scroll_wrapper .scroll_content .m_moresongs ul li article .song_title[data-v-5cf17145]{line-height:18px;font-size:15px;color:#fff;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:normal}.u-height .root .song .scroll_wrapper .scroll_content .m_moresongs ul li article .song_des[data-v-5cf17145]{margin-top:2px;color:hsla(0,0%,100%,.6);overflow:hidden;text-overflow:ellipsis;white-space:nowrap;word-break:normal}.u-height .root .song .scroll_wrapper .scroll_content .m_moresongs ul li article[data-v-5cf17145]:after{content:\"\";position:absolute;top:0;left:0;pointer-events:none;-webkit-box-sizing:border-box;box-sizing:border-box;width:100%;height:100%;-webkit-transform-origin:left top;transform-origin:left top;z-index:2;border:0 solid rgba(0,0,0,.1);border-bottom:1px solid hsla(0,0%,100%,.1)}@media screen and (-webkit-min-device-pixel-ratio:1){.u-height .root .song .scroll_wrapper .scroll_content .m_moresongs ul li article[data-v-5cf17145]:after{width:150%;height:150%;-webkit-transform:scale(.666666);transform:scale(.666666)}}@media screen and (-webkit-min-device-pixel-ratio:2){.u-height .root .song .scroll_wrapper .scroll_content .m_moresongs ul li article[data-v-5cf17145]:after{width:200%;height:200%;-webkit-transform:scale(.5);transform:scale(.5)}}@media screen and (-webkit-min-device-pixel-ratio:3){.u-height .root .song .scroll_wrapper .scroll_content .m_moresongs ul li article[data-v-5cf17145]:after{width:300%;height:300%;-webkit-transform:scale(.333333);transform:scale(.333333)}}.u-height .root .song .scroll_wrapper .scroll_content .m_moresongs ul li .icon-bofang[data-v-5cf17145]{position:absolute;right:12px;color:hsla(0,0%,100%,.5);top:50%;-webkit-transform:translateY(-50%);transform:translateY(-50%);font-size:26px}.u-height .root .song .scroll_wrapper .scroll_content .m_newcomm[data-v-5cf17145]{position:relative;padding-top:20px}.u-height .root .song .scroll_wrapper .scroll_content .m_newcomm .talk_song[data-v-5cf17145]{min-height:145px;margin-top:-20px}.u-height .root .song .scroll_wrapper .scroll_content .m_newcomm .talk_song .m_comments[data-v-5cf17145]{padding-top:10px;word-wrap:break-word;word-break:break-word!important}.u-height .root .song .scroll_wrapper .scroll_content .m_newcomm .talk_song .m_comments .cmt_title[data-v-5cf17145]{position:relative;padding-left:10px;line-height:25px;height:23px;font-size:16px;background-color:transparent;color:#fff}.u-height .root .song .scroll_wrapper .scroll_content .m_newcomm .talk_song .cmt_more[data-v-5cf17145]{padding-left:10px;margin-bottom:40px;padding-top:19px}.u-height .root .song .scroll_wrapper .scroll_content .m_newcomm .talk_song .cmt_more .box[data-v-5cf17145]{display:block;border:1px solid #d8d8d8;border-radius:50px;padding:10px 0;font-size:14px;color:#fff;text-align:center;line-height:1;background-color:rgba(0,0,0,.12);margin-right:10px}.u-height .root .song .scroll_wrapper .scroll_content .m_newcomm .cmt_title[data-v-5cf17145]{color:#fff}.u-height .root .song .scroll_wrapper .scroll_content .m_newcomm .song_cmemp[data-v-5cf17145]{color:#fff;padding:40px 0;text-align:center;line-height:40px;font-size:16px}.u-height .root .song .footer[data-v-5cf17145]{background:none;z-index:100;position:absolute;left:0;right:0;bottom:10px}.u-height .root .song .footer .footer_wrap[data-v-5cf17145]{display:-webkit-box;display:-ms-flexbox;display:flex;margin:0 auto;padding:0 10px}.u-height .root .song .footer .footer_wrap .u_btn[data-v-5cf17145]{display:inline-block;height:40px;line-height:40px;text-align:center;-webkit-box-sizing:border-box;box-sizing:border-box;border-radius:40px;background:transparent;color:#d33a31;-webkit-box-flex:1;-ms-flex:auto;flex:auto;border:1px solid #d33a31;font-size:18px;padding:0 6px}.u-height .root .song .footer .footer_wrap .u_btn.red[data-v-5cf17145]{background-color:#d33a31;border-color:#d33a31;color:#fff;margin-left:10px}", ""]);


/***/ }),

/***/ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/style-resources-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/playsong/Playsong.vue?vue&type=style&index=0&id=5cf17145&lang=less&scoped=true&":
/*!********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** ./node_modules/vue-style-loader??ref--10-oneOf-1-0!./node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src??ref--10-oneOf-1-2!./node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!./node_modules/style-resources-loader/lib??ref--10-oneOf-1-4!./node_modules/cache-loader/dist/cjs.js??ref--0-0!./node_modules/vue-loader/lib??vue-loader-options!./src/views/playsong/Playsong.vue?vue&type=style&index=0&id=5cf17145&lang=less&scoped=true& ***!
  \********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// style-loader: Adds some css to the DOM by adding a <style> tag

// load the styles
var content = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--10-oneOf-1-2!../../../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!../../../node_modules/style-resources-loader/lib??ref--10-oneOf-1-4!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Playsong.vue?vue&type=style&index=0&id=5cf17145&lang=less&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/style-resources-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/playsong/Playsong.vue?vue&type=style&index=0&id=5cf17145&lang=less&scoped=true&");
if(typeof content === 'string') content = [[module.i, content, '']];
if(content.locals) module.exports = content.locals;
// add the styles to the DOM
var add = __webpack_require__(/*! ../../../node_modules/vue-style-loader/lib/addStylesClient.js */ "./node_modules/vue-style-loader/lib/addStylesClient.js").default
var update = add("ca289c5a", content, false, {"sourceMap":false,"shadowMode":false});
// Hot Module Replacement
if(true) {
 // When the styles change, update the <style> tags
 if(!content.locals) {
   module.hot.accept(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--10-oneOf-1-2!../../../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!../../../node_modules/style-resources-loader/lib??ref--10-oneOf-1-4!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Playsong.vue?vue&type=style&index=0&id=5cf17145&lang=less&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/style-resources-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/playsong/Playsong.vue?vue&type=style&index=0&id=5cf17145&lang=less&scoped=true&", function() {
     var newContent = __webpack_require__(/*! !../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--10-oneOf-1-2!../../../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!../../../node_modules/style-resources-loader/lib??ref--10-oneOf-1-4!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Playsong.vue?vue&type=style&index=0&id=5cf17145&lang=less&scoped=true& */ "./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/style-resources-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/playsong/Playsong.vue?vue&type=style&index=0&id=5cf17145&lang=less&scoped=true&");
     if(typeof newContent === 'string') newContent = [[module.i, newContent, '']];
     update(newContent);
   });
 }
 // When the module is disposed, remove the <style> tags
 module.hot.dispose(function() { update(); });
}

/***/ }),

/***/ "./src/api/comment-api.js":
/*!********************************!*\
  !*** ./src/api/comment-api.js ***!
  \********************************/
/*! exports provided: getComments, getUserPlaylist, getUser, getSongComments, getAlbumComments, getMvComments */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getComments", function() { return getComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUserPlaylist", function() { return getUserPlaylist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getUser", function() { return getUser; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSongComments", function() { return getSongComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAlbumComments", function() { return getAlbumComments; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getMvComments", function() { return getMvComments; });
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var js_config__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! js/config */ "./src/assets/js/config.js");

 // 可选参数：limit： 取出评论数量 , 默认为 20  歌单评论

function getComments(id) {
  var url = js_config__WEBPACK_IMPORTED_MODULE_1__["HOST"] + "/comment/playlist?id=".concat(id, "&limit=15");
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);
}

function getUserPlaylist(id) {
  var url = js_config__WEBPACK_IMPORTED_MODULE_1__["HOST"] + "/user/playlist?uid=".concat(id);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);
}

function getUser(id) {
  var url = js_config__WEBPACK_IMPORTED_MODULE_1__["HOST"] + "/user/detail?uid=".concat(id);
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);
} // 获取单曲的评论 （取十条


function getSongComments(id) {
  var url = js_config__WEBPACK_IMPORTED_MODULE_1__["HOST"] + "/comment/music?id=".concat(id, "&limit=10");
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);
} // 获取专辑的评论


function getAlbumComments(id) {
  var url = js_config__WEBPACK_IMPORTED_MODULE_1__["HOST"] + "/comment/album?id=".concat(id, "&limit=15");
  return axios__WEBPACK_IMPORTED_MODULE_0___default.a.get(url);
} // 获取MV的评论


function getMvComments(id) {
  var url = js_config__WEBPACK_IMPORTED_MODULE_1__["HOST"] + "/comment/mv?id=".concat(id);
}



/***/ }),

/***/ "./src/api/song-api.js":
/*!*****************************!*\
  !*** ./src/api/song-api.js ***!
  \*****************************/
/*! exports provided: getSong, getLyric, getSimiSongs, getSimiPlaylist, getSongUrl */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSong", function() { return getSong; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getLyric", function() { return getLyric; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSimiSongs", function() { return getSimiSongs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSimiPlaylist", function() { return getSimiPlaylist; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getSongUrl", function() { return getSongUrl; });
/* harmony import */ var js_config__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! js/config */ "./src/assets/js/config.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);



function getSong(id) {
  var url = js_config__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "/song/detail?ids=".concat(id);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url);
}

function getLyric(id) {
  var url = js_config__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "/lyric?id=".concat(id);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url);
}

function getSimiSongs(id) {
  var url = js_config__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "/simi/song?id=".concat(id);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url);
}

function getSimiPlaylist(id) {
  var url = js_config__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "/simi/playlist?id=".concat(id);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url);
}

function getSongUrl(id) {
  var url = js_config__WEBPACK_IMPORTED_MODULE_0__["HOST"] + "/song/url?id=".concat(id);
  return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get(url);
}



/***/ }),

/***/ "./src/assets/img/disc-ip6.png":
/*!*************************************!*\
  !*** ./src/assets/img/disc-ip6.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/disc-ip6.69796123.png";

/***/ }),

/***/ "./src/assets/img/disc-plus.png":
/*!**************************************!*\
  !*** ./src/assets/img/disc-plus.png ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/disc-plus.b700b62e.png";

/***/ }),

/***/ "./src/assets/img/disc_3x.png":
/*!************************************!*\
  !*** ./src/assets/img/disc_3x.png ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/disc_3x.d3bdd108.png";

/***/ }),

/***/ "./src/assets/img/disc_default.png":
/*!*****************************************!*\
  !*** ./src/assets/img/disc_default.png ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/disc_default.7c9b3adc.png";

/***/ }),

/***/ "./src/assets/img/disc_light-ip6.png":
/*!*******************************************!*\
  !*** ./src/assets/img/disc_light-ip6.png ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/disc_light-ip6.996fc8a2.png";

/***/ }),

/***/ "./src/assets/img/disc_light-plus.png":
/*!********************************************!*\
  !*** ./src/assets/img/disc_light-plus.png ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/disc_light-plus.4392c8c9.png";

/***/ }),

/***/ "./src/assets/img/disc_light.png":
/*!***************************************!*\
  !*** ./src/assets/img/disc_light.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/disc_light.2bb24f3f.png";

/***/ }),

/***/ "./src/assets/img/guide.png":
/*!**********************************!*\
  !*** ./src/assets/img/guide.png ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,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"

/***/ }),

/***/ "./src/assets/img/needle-ip6.png":
/*!***************************************!*\
  !*** ./src/assets/img/needle-ip6.png ***!
  \***************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/needle-ip6.be4ebbeb.png";

/***/ }),

/***/ "./src/assets/img/needle-plus.png":
/*!****************************************!*\
  !*** ./src/assets/img/needle-plus.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/needle-plus.994aa910.png";

/***/ }),

/***/ "./src/assets/img/needle.png":
/*!***********************************!*\
  !*** ./src/assets/img/needle.png ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__.p + "img/needle.702cf6d9.png";

/***/ }),

/***/ "./src/assets/img/play_btn.png":
/*!*************************************!*\
  !*** ./src/assets/img/play_btn.png ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAKgAAACoCAMAAABDlVWGAAABJlBMVEUAAAAAAAD////l5eX///9iYmKDg4Pn5+f///9YWFj////09PT////4+Pjt7e3///////9oaGhBQUH////////////////CwsIaGhr///8xMTEkJCT////7+/vp6en///////////////+srKyoqKienp58fHz////y8vKTk5P///8EBAT////////////////V1dW3t7f////////////////////v7++jo6N9fX3///////+UlJT////s7Oz////Nzc3///////+RkZGPj495eXkTExP////////29vb////k5OTPz882Njb////////////c3Nz///////9ycnJsbGz///9dXV3////////Q0ND///9QUFD///////////////////9FeiN6AAAAYXRSTlNmAP3c+oWT3ueB9vA19ealRId5EQbuurpu83RxD/nh05dfAquooo+M7JtzaSolE+vMspJ3Wj7w6KSQj6ucKeXNxLWnmpmObVYd8t3axXZRSt7TvbKLideCeSzHnn4V3Nh6YarbPAAABlRJREFUeNrU14lWEmEYh/GXcdj3HQTZRCkS913UNE2zbLd9Oc/930Q2LmVpwPAC03MD/M5835n/IC6dkqHnzcVoZvdkLp2HfHruZDcTXWw+DyVdOilAt6uNjI8782Ua1W2XjTShtdDSmzRdlH6zFKq5bKQBTS5H57gqXJrP1tsb7kShkBPJFQoJ90a7np0vhblqLrrc8R7oQ4vVPZOLIp8mp8flzsanJ59FuMjcqxZdHVKFxvYDWK1lPQXpooInu4ZVYD/m6pAWNLn0DSvvekJ6KLHuxerb0qyrQwrQViV/oZzKSc/lpi6sgUrLdSN16MyWARBcOBWbnS4EAYytj67r1KGtqMUseaSvPCWLGr14u+pDZysmwFhc+i4+BmBWZgcATTXTFvO9qOS3qOlmShu68g7A6xa13F6A7yuq0ORnA9jZENU2dgDjc1IPGvMB4QNR7+AJ4IspQVObBjDmF+Wur6qxmdKAbpeBoEcGlCcIlLf7hx7lOzxOlYeaP+oTmmoYQFsGWhswGql+oMUMEInLgItHgEzRPvS43OHYVY+/fGwXGvIBkzKU6oAvZA8aywOPZEg9AvIxO9AXAZg4lKF1OAGBF71DX5jw5EyG2NkTMJ/3Co2ZcM8tQ819D8xYb9CVgA2nijSw0gs0tArBzk59aRBWQ91Dj30QjssIiofBd9wttFiGiTMZSWcTUC52B629Bg5lRB0Cr2tdQRvAfRlZ94FGN9AjA+oywupgHHWGzuRhTEbaGORnOkFTZYj4ZaT5I1BOdYBuAnEZcXFg89/QmAFtGXltMGL/ghZ9I7+g19fUV/wHtAJBvzggfxAqd0NXDPCII/KAsXIXNPXOIQd/efjvUndAmxB2xMH/zB+G5u3Qr2k4EMd0AOmvt0IrsCMOagcqt0FbJkyLg5oGs3ULNApecVReiP4NnTHALY7KDcbHv6BbDno1XTUGW39CWwa8F4flB6P1B3TRgQ/UeqSLN6GzAQd83f1dHAKzN6AfoCQOrARLN6Andr9GpiITT9/KwPLAye/QGATFTusAxsOCDKogxH6D7sOC2GkNq+B9GVALsP8LWgzAqdjJ4LJXCRlIpxAoXkOrtteT6yYmH8gg8kL1GroHU/1CoTSQBZ6CvSto0oRc/1DM7GNRLwdm8hK6DF5RgMI9j6jnheVLaBTWdaAwPy7KrUP0Alqbg4QWlPCU6JaAuZoFDcGaqEHh6RdRLQIhC/oBsppQzAXVN1UWlixoBjyqUIhozr8H3vyE1lYhpwnVnv8CpH9CZyAi2lAIPtK8pDPn0Cp8UoWqz/8zqJ5DGzCpCdWf/0lonEMzMK0J1Z//acicQ30wrgnVn/9x8LkkCWFRherPfxiSEgKvLlR//r0QkmWY14Xqz/88LEsTsqpQ/fm3RlQWoa4L1Z//OixKFNq6UP35vw9RycDGMKAYD3P9vEhlF9y6UP35d8OuvISELlR//hPwUqxh0oTqz781TbIKueFB4em4rb/Mq5IfMpRn0nOPIS+ADBUatvcz/w/0B/X2VgMACMNQ9AMnWOADKwT/QuahyZYcDcte7e146X9W+vFmWmEzOeOJGfjMCmWOEubMYw7no7wizHPHvMuMAMFIOo5IxsiOjJDLSOOM2cDYN44hxliMjGnL2OAOWMCgGgz84uBEDKDFIG8ORLhzLPO2Y5kK6PpMdJiBsR28nQkMOBEMJtTixISY4JUTZWPCgVXevesgCINhGG7dZPLEIg7GRRsMTsaoMTEOnmLUuBgn+e//JuTHGt0aKT3y3QIFpj6vO9ctnbnAmr9PIysefn0E0PfhkjW92HFtnQHULn5AAG9aISZGF3NaQYxVrInRrcVYBW4H5vkPEPIfuIV5UGXhClHT8Qv9oXQ/MckoTfb+wVTGqK8ZUl9+4mmUnpGj03pOmzlH5y/w5w6ZiAil+G9qA0KpkfWMTxKsJ6530wel3try9CwjSscg27BTDcw321gHjzyuEjj9IbwP1hPeDqHo2abP0pn5XMR/NhTB/fyo2gv3q0gh1JSkEHCrUuMSG1VxCdxDOtfR1ZDr4AGUwIUACi5JJZMyx1RHUgY3kIn0LBuFQk2EFlv7J3t0+id7JPi86wlJsfm9FUVbQrZR1LrPmQ0hKZfSXC7Fzr5LeD7uGoYBQBCGV56PS2g5ewGy+NkUNbjr9gAAAABJRU5ErkJggg=="

/***/ }),

/***/ "./src/assets/img/play_btn_3x.png":
/*!****************************************!*\
  !*** ./src/assets/img/play_btn_3x.png ***!
  \****************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMMAAADDCAMAAAAIoVWYAAABL1BMVEUAAAAAAAD////////////w8PD////l5eXt7e3///+Dg4NXV1fu7u7///////+2trYFBQWUlJR5eXlbW1v9/f3///9qamr///+Pj49QUFD///+5ubkiIiIaGhr////////////////z8/Pn5+f///////////////9iYmLy8vL///+KioqAgID////////Z2dkMDAz///////////9GRkb///99fX3////////////////////Hx8f///////++vr6urq6rq6v////6+vr////g4ODPz8/////09PT///////////////82NjYqKir///////////////+7u7v///+oqKibm5v39/fo6OjR0dGkpKT///8+Pj7///+mpqb///////93d3f///+np6f///9cCyZgAAAAZHRSTlNmAP37A+vu3OQJk4Hn5oCyaZyOgvrriLaZfh20cG4P8n1a79/UvJmThO3clpFH489rUDcRe0OQeGFTPSG/q8y4rap69+HXxk/x2MWciXZya0soF7auqKDz4MempXgyp2Mtjc+n/tk0GwAACSNJREFUeNrU2odWGlEQgOFhG9LBgCgoVlAs2MVeEhM1MbGk93L+93+GCBo1iSi6O7L+L+D5zr13zqwqAYVyy/19w5+z66MVxzExHacyup79PNzXv5yzAt7nsWFlum9tL03j0ntrfdMrAY/y2hBafpx1aC4n+3g5FHCV94Yf1aLJeQPBj/m3qfGRuZfd3UlJdne/nBsZT73NfwwOcJ5ZrP4IuMhTgzVfqnCWPZnv7JqSxk11deYnbc6qlCbcPhD3hhogw2mDG+Fuaa7u8MYgp2VK824Y7g25+Db17NVwUm5XMrxqU287ngu4yI3B2sma1IomuuRudSWi1DKzOzcehoIhdDBKrXI+Im6K5MvUGj24dlApGGbjGWoF28V97UFqZeKzgQYpGApxB2B3s0e8qWdzF8CJFwJXpGAIVeuCaEq8LBWtK6r/3SgNQ/82QNu4eN14G8B2f+CvFAwzz+uCsGgUriuezwTOUzAUSgZQHhOtxsqAUTp73BqG6RhgfhLNPplAbDpwkoLh+A1A8JHoFgkCvDnWMBxmADss+oVtIHPouSE0bACJKbmPphKAMRzy1nA0BJTb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"

/***/ }),

/***/ "./src/assets/js/config.js":
/*!*********************************!*\
  !*** ./src/assets/js/config.js ***!
  \*********************************/
/*! exports provided: HOST, OK */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HOST", function() { return HOST; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "OK", function() { return OK; });
// export const HOST = 'http://localhost:3000'
var HOST = 'http://192.168.1.82:3000';
var OK = 200;

/***/ }),

/***/ "./src/components/public/Scroll.vue":
/*!******************************************!*\
  !*** ./src/components/public/Scroll.vue ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Scroll_vue_vue_type_template_id_65440bf3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scroll.vue?vue&type=template&id=65440bf3& */ "./src/components/public/Scroll.vue?vue&type=template&id=65440bf3&");
/* harmony import */ var _Scroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Scroll.vue?vue&type=script&lang=js& */ "./src/components/public/Scroll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");





/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__["default"])(
  _Scroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Scroll_vue_vue_type_template_id_65440bf3___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Scroll_vue_vue_type_template_id_65440bf3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('65440bf3')) {
      api.createRecord('65440bf3', component.options)
    } else {
      api.reload('65440bf3', component.options)
    }
    module.hot.accept(/*! ./Scroll.vue?vue&type=template&id=65440bf3& */ "./src/components/public/Scroll.vue?vue&type=template&id=65440bf3&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Scroll_vue_vue_type_template_id_65440bf3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Scroll.vue?vue&type=template&id=65440bf3& */ "./src/components/public/Scroll.vue?vue&type=template&id=65440bf3&");
(function () {
      api.rerender('65440bf3', {
        render: _Scroll_vue_vue_type_template_id_65440bf3___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Scroll_vue_vue_type_template_id_65440bf3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/components/public/Scroll.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/components/public/Scroll.vue?vue&type=script&lang=js&":
/*!*******************************************************************!*\
  !*** ./src/components/public/Scroll.vue?vue&type=script&lang=js& ***!
  \*******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Scroll.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/public/Scroll.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scroll_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/components/public/Scroll.vue?vue&type=template&id=65440bf3&":
/*!*************************************************************************!*\
  !*** ./src/components/public/Scroll.vue?vue&type=template&id=65440bf3& ***!
  \*************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b3604394_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scroll_vue_vue_type_template_id_65440bf3___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3604394-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Scroll.vue?vue&type=template&id=65440bf3& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"b3604394-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/components/public/Scroll.vue?vue&type=template&id=65440bf3&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b3604394_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scroll_vue_vue_type_template_id_65440bf3___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b3604394_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Scroll_vue_vue_type_template_id_65440bf3___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ }),

/***/ "./src/views/playsong/Playsong.vue":
/*!*****************************************!*\
  !*** ./src/views/playsong/Playsong.vue ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _Playsong_vue_vue_type_template_id_5cf17145_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Playsong.vue?vue&type=template&id=5cf17145&scoped=true& */ "./src/views/playsong/Playsong.vue?vue&type=template&id=5cf17145&scoped=true&");
/* harmony import */ var _Playsong_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Playsong.vue?vue&type=script&lang=js& */ "./src/views/playsong/Playsong.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport *//* harmony import */ var _Playsong_vue_vue_type_style_index_0_id_5cf17145_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Playsong.vue?vue&type=style&index=0&id=5cf17145&lang=less&scoped=true& */ "./src/views/playsong/Playsong.vue?vue&type=style&index=0&id=5cf17145&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../../node_modules/vue-loader/lib/runtime/componentNormalizer.js */ "./node_modules/vue-loader/lib/runtime/componentNormalizer.js");






/* normalize component */

var component = Object(_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_3__["default"])(
  _Playsong_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _Playsong_vue_vue_type_template_id_5cf17145_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
  _Playsong_vue_vue_type_template_id_5cf17145_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"],
  false,
  null,
  "5cf17145",
  null
  
)

/* hot reload */
if (true) {
  var api = __webpack_require__(/*! ./node_modules/vue-hot-reload-api/dist/index.js */ "./node_modules/vue-hot-reload-api/dist/index.js")
  api.install(__webpack_require__(/*! vue */ "./node_modules/vue/dist/vue.runtime.esm.js"))
  if (api.compatible) {
    module.hot.accept()
    if (!api.isRecorded('5cf17145')) {
      api.createRecord('5cf17145', component.options)
    } else {
      api.reload('5cf17145', component.options)
    }
    module.hot.accept(/*! ./Playsong.vue?vue&type=template&id=5cf17145&scoped=true& */ "./src/views/playsong/Playsong.vue?vue&type=template&id=5cf17145&scoped=true&", function(__WEBPACK_OUTDATED_DEPENDENCIES__) { /* harmony import */ _Playsong_vue_vue_type_template_id_5cf17145_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Playsong.vue?vue&type=template&id=5cf17145&scoped=true& */ "./src/views/playsong/Playsong.vue?vue&type=template&id=5cf17145&scoped=true&");
(function () {
      api.rerender('5cf17145', {
        render: _Playsong_vue_vue_type_template_id_5cf17145_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"],
        staticRenderFns: _Playsong_vue_vue_type_template_id_5cf17145_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]
      })
    })(__WEBPACK_OUTDATED_DEPENDENCIES__); })
  }
}
component.options.__file = "src/views/playsong/Playsong.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ "./src/views/playsong/Playsong.vue?vue&type=script&lang=js&":
/*!******************************************************************!*\
  !*** ./src/views/playsong/Playsong.vue?vue&type=script&lang=js& ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Playsong_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/cache-loader/dist/cjs.js??ref--12-0!../../../node_modules/babel-loader/lib!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Playsong.vue?vue&type=script&lang=js& */ "./node_modules/cache-loader/dist/cjs.js?!./node_modules/babel-loader/lib/index.js!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/playsong/Playsong.vue?vue&type=script&lang=js&");
/* empty/unused harmony star reexport */ /* harmony default export */ __webpack_exports__["default"] = (_node_modules_cache_loader_dist_cjs_js_ref_12_0_node_modules_babel_loader_lib_index_js_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Playsong_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__["default"]); 

/***/ }),

/***/ "./src/views/playsong/Playsong.vue?vue&type=style&index=0&id=5cf17145&lang=less&scoped=true&":
/*!***************************************************************************************************!*\
  !*** ./src/views/playsong/Playsong.vue?vue&type=style&index=0&id=5cf17145&lang=less&scoped=true& ***!
  \***************************************************************************************************/
/*! no static exports found */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Playsong_vue_vue_type_style_index_0_id_5cf17145_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!../../../node_modules/vue-style-loader??ref--10-oneOf-1-0!../../../node_modules/css-loader/dist/cjs.js??ref--10-oneOf-1-1!../../../node_modules/vue-loader/lib/loaders/stylePostLoader.js!../../../node_modules/postcss-loader/src??ref--10-oneOf-1-2!../../../node_modules/less-loader/dist/cjs.js??ref--10-oneOf-1-3!../../../node_modules/style-resources-loader/lib??ref--10-oneOf-1-4!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Playsong.vue?vue&type=style&index=0&id=5cf17145&lang=less&scoped=true& */ "./node_modules/vue-style-loader/index.js?!./node_modules/css-loader/dist/cjs.js?!./node_modules/vue-loader/lib/loaders/stylePostLoader.js!./node_modules/postcss-loader/src/index.js?!./node_modules/less-loader/dist/cjs.js?!./node_modules/style-resources-loader/lib/index.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/playsong/Playsong.vue?vue&type=style&index=0&id=5cf17145&lang=less&scoped=true&");
/* harmony import */ var _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Playsong_vue_vue_type_style_index_0_id_5cf17145_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Playsong_vue_vue_type_style_index_0_id_5cf17145_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Playsong_vue_vue_type_style_index_0_id_5cf17145_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Playsong_vue_vue_type_style_index_0_id_5cf17145_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_node_modules_vue_style_loader_index_js_ref_10_oneOf_1_0_node_modules_css_loader_dist_cjs_js_ref_10_oneOf_1_1_node_modules_vue_loader_lib_loaders_stylePostLoader_js_node_modules_postcss_loader_src_index_js_ref_10_oneOf_1_2_node_modules_less_loader_dist_cjs_js_ref_10_oneOf_1_3_node_modules_style_resources_loader_lib_index_js_ref_10_oneOf_1_4_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Playsong_vue_vue_type_style_index_0_id_5cf17145_lang_less_scoped_true___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ "./src/views/playsong/Playsong.vue?vue&type=template&id=5cf17145&scoped=true&":
/*!************************************************************************************!*\
  !*** ./src/views/playsong/Playsong.vue?vue&type=template&id=5cf17145&scoped=true& ***!
  \************************************************************************************/
/*! exports provided: render, staticRenderFns */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b3604394_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Playsong_vue_vue_type_template_id_5cf17145_scoped_true___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! -!cache-loader?{"cacheDirectory":"node_modules/.cache/vue-loader","cacheIdentifier":"b3604394-vue-loader-template"}!../../../node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../../../node_modules/cache-loader/dist/cjs.js??ref--0-0!../../../node_modules/vue-loader/lib??vue-loader-options!./Playsong.vue?vue&type=template&id=5cf17145&scoped=true& */ "./node_modules/cache-loader/dist/cjs.js?{\"cacheDirectory\":\"node_modules/.cache/vue-loader\",\"cacheIdentifier\":\"b3604394-vue-loader-template\"}!./node_modules/vue-loader/lib/loaders/templateLoader.js?!./node_modules/cache-loader/dist/cjs.js?!./node_modules/vue-loader/lib/index.js?!./src/views/playsong/Playsong.vue?vue&type=template&id=5cf17145&scoped=true&");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "render", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b3604394_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Playsong_vue_vue_type_template_id_5cf17145_scoped_true___WEBPACK_IMPORTED_MODULE_0__["render"]; });

/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "staticRenderFns", function() { return _cache_loader_cacheDirectory_node_modules_cache_vue_loader_cacheIdentifier_b3604394_vue_loader_template_node_modules_vue_loader_lib_loaders_templateLoader_js_vue_loader_options_node_modules_cache_loader_dist_cjs_js_ref_0_0_node_modules_vue_loader_lib_index_js_vue_loader_options_Playsong_vue_vue_type_template_id_5cf17145_scoped_true___WEBPACK_IMPORTED_MODULE_0__["staticRenderFns"]; });



/***/ })

}]);
//# sourceMappingURL=13.js.map