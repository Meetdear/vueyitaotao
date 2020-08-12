<template>
    <div class="product">
        <product-param>
            <template v-slot:buy>
                <button class="btn">立即购买</button>
            </template>
        </product-param>
        <div class="item-video">
            <div class="video-bg" @click="showSlid=slideDown"></div>
            <div class="video-box">
                <div class="overlay" v-if="showSlide=='slideDown'"></div>
                <div class="video" :class="{'slide':showSlide}">
                    <span class="icon-close"  @click="showSlid=slideUp"></span>
                    <video src="/imgs/product/video.mp4" controls="controls" muted autoplay></video>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import ProductParam from './../components/ProductParam'
export default {
    name:'product',
   components :{
        ProductParam
    },
    data(){
        return{
             showSlide:"",
            swiperOption:{

            }
        }
    }
}
</script>

<style lang="scss">
@import './../assets/scss/mixin.scss';
  .product{
      
     button{
          margin-left: 10px;             
                  }
    .h{
    margin-top:50px;
    background-color: #f0f;
    }
    .item-video{
        .video-bg{

        }
        .video-box{
            .overlay{
             @include position(fixed);
             background-color: #333;
             opacity: .3;
             z-index: 10;
            }
            @keyframes slideDown{
             from{
                 top:-50%;
                 opacity: 0;
                }
               to{
                  top:50%;
                  opacity: 1;
              }
            }
            @keyframes slideUp{
                from{
                 top:50%;
                 opacity:1 ;
                }
               to{
                  top:-50%;
                  opacity:0;
              }
            }
            .video{
                position: fixed;
                top:50%;
                left:50%;
                transform: translate(-50%,-50%);
                z-index: 10;
                width:1000px;
                height:536px;
                opacity: 0;
                // transition: all .6s ;
                &.slideDown{
                   animation: slideDown .6s linear;
                }
                &.slideUp{
                   animation: slideUp .6s linear;
                }
                &.slide{
                top:50%;
                opacity: 1;
                }
                .icon-close{
                   position: absolute;
                   top:20px;
                   right:20px;
                   cursor: pointer;
                   z-index:11;
                    @include bgImg(20px,20px,'/imgs/icon-close.png');
                }
                video{
                    width:100%;
                    height: 100%;
                    object-fit: cover;
                    outline:none;
                }
            }
        }

    }

  }

</style>