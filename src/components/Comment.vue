<template>
  <ul class="comment_list">
    <li class="comment" v-for="(item,index) in comment" :key="index">
      <div class="cmt_head">
          <img src="../assets/img/logo.png" alt>
      </div>
      <div class="cmt_wrap">
        <div class="cmt_head">
          <div class="cmt_meta"></div>
          <div class="cmt_like"></div>
        </div>
        <div class="cmt_bottom"></div>
      </div>
    </li>
  </ul>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.comment_list {
    display: flex;
    flex-direction: column;
    .comment {
        flex: auto;
        display: flex;
        padding-top: 10px;
        
    }
}
</style>