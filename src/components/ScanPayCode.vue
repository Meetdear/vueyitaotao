<template>
    <div class="scan">
        <div class="mask"></div>
        <div class="item-wrap">
            <div class="img-scan"></div>
            <div class="img-pay">
                <div class="title">微信支付<em @click="close"></em></div>
                <div class="qrcode"><img :src="img" alt=""></div>
                <div class="tip">
                    <p>请使用<span class="theme-color">微信</span></p>
                    <p>二维码完成支付</p>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    name:'scan-pay-code',  
    props:['img'],
    methods:{
        close(){
            this.$emit('clo')
        }
    }
}
</script>>

