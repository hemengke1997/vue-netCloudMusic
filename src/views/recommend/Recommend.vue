<template>
    <!-- <van-pull-refresh v-model="isLoading" @refresh="onRefresh">
        <span>1111111111</span>
    </van-pull-refresh> -->
    <div class="recommend">
        <span>111</span>
    </div>
</template>

<script>
import {PullRefresh} from 'vant'
export default {
    components:{
        [PullRefresh.name]: PullRefresh,
    },
    mounted(){
        // console.log(this.$route,'recommend')
        // console.log(this,'recommend')
    }
}
</script>

<style lang="less" scoped>
.recommend {
    margin-top: 95px;
}
</style>

