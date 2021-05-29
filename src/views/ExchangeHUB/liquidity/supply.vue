<template>
<div>
 <div class="block">
   <div class="supply">
        <div class="top">
            <div class="header">
            <img @click="backPage" class="header-back-icon"  src="../../../assets/back-icon.png"/>

            
            <div class="title">Liquidity</div>
            <div class="icon">
                
                <div class="icon-2">
                <img class="icon-img-20" src="../../../assets/icons-recent@2x.png"/>
                </div>
            </div>
            </div>
      </div>
      
      <!-- 数据列表 -->
      <div class="liq-listview">
          <div v-for="(item) in 2" :key="item" class="liq-item">
              <div class="liq-listitem">
               <div class="liq-list-row">
                   <div>Input</div>
                   <div class="list-item-right">Balance : 0.210304</div>
               </div>
               <div class="liq-list-row">
                   <div>0.0530543</div>
                   <div class="liq-list-img">
                        <img class="list-row-max" src="../../../assets/icons-max@2x.png"/>
                        <img class="list-row-map" src="../../../assets/icons-default-img-2@2x.png"/>
                        <span class="list-row-span">HT</span>
                        <img  class="list-row-down" src="../../../assets/down-icon.png"/>
                   </div>
               </div>
          </div>

          <div class="add-btn">
              <img class="add-button" src="../../../assets/add-icon.png"/>
              
          </div>
          </div>
        
      </div>



       <div class="liq-listview btm-liq">
         
           <div class="liq-title">PRICES AND POOL SHARE</div>

           <div class="btm-liq-item">
                <div>
                    <div class="liq-i-num">18.800044</div>
                    <div class="liq-i-txt">HD per HT</div>
                </div>
                 <div>
                    <div class="liq-i-num">18.800044</div>
                    <div class="liq-i-txt">HD per HT</div>
                </div>
                 <div>
                    <div class="liq-i-num">18.800044</div>
                    <div class="liq-i-txt">HD per HT</div>
                </div>
           </div>

           <div class="submit-cxt">
               <div class="submit-btn">Supply</div>
           </div>

      </div>
   </div>  
</div>

<div class="wallet-box">
    <div class="wallet-state">
        <div class="w-title">
            LP TOKENS IN YOUR WALLET
        </div>

        <div class="fx-aj-cs w-item">
            <div class="w-img-box fx-box">
                <img class="head-img" src="/assets/icons-default-img-2@2x.png"/>
                <img class="head-img" src="/assets/icons-default-img-3@2x.png"/>
            </div>
            <div class="w-text">HD/HT</div>
            <div>0</div>
        </div>
        <div class="fx-aj-cs w-item">
            <div class="w-img-box w-text">HD/HT</div>
            <div class="w-text">HD/HT</div>
            <div>0</div>
        </div>
        <div class="fx-aj-cs w-item">
            <div class="w-img-box w-text">HD/HT</div>
            <div class="w-text">HD/HT</div>
            <div>0</div>
        </div>
        
    </div>
</div>

</div>
</template>

<style lang="less" scoped>
@import url('./liquidity.less');
.supply,.wallet-state{
       font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #000000;
        .top{
    .header-back-icon{
    width:32px;height: 32px;
    }
    .header{
        .title{
            text-align: center;
        }
    }
}

 .liq-listview{
        margin: 57px 64px 0px 64px;
        display: flex;
        flex-direction: column;
        .liq-listitem{
                height: 120px;
                padding: 12px 20px 20px;
                border-radius: 6px;
                background-color: @list-item-back;
        }
         .liq-title{
              color: #444444;
             font-size: 14px;
             font-weight: 300;
             height: 30px;
             line-height: 30px;
        }
        .liq-list-row{
                display: flex;
                justify-content: space-between;
        }
        .list-item-right{
            color: #444444;
        }
        .liq-list-row:last-child{
           .layout-mt24;
           font-size: 26px;
           color: #2f303f;
        }
        .list-row-span{
             color: #000000;
             font-size: 20px;font-weight: 500;
             margin-right: 4px;
        }
        .list-row-max{
            width: 54px;height: 29px;
            margin-right: 12px;
        }
         .list-row-map{
            width: 34px;height: 34px;
            margin-right: 4px;
        }
        
        .liq-list-img{
            display: flex;
            align-items: center;
        }
        .add-btn{
            display: flex;
            justify-content: center;
            width: 100%;
            height: 50px;
            align-items: center;
        }
        .add-button{
            width: 30px;height: 30px;
        }
        .liq-item:last-child .add-btn{
            height: 26px;
        }
        .liq-item:last-child .add-button{
            display: none;
        }
        
       
       
}
 
    .btm-liq{
            margin-top:0px;
    }
    .btm-liq-item{
        padding: 23px 17px 20px 20px;
        border-radius: 6px;
        border: solid 1px #d8d8d8;
        display: flex;
        flex-wrap: nowrap;
    }
    .liq-i-num{
        color: #2f303f;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: 500;
        text-align: center;
    }
     .liq-i-txt{
         color: #a5a5a5;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: 500;
        text-align: center;
    }
    .btm-liq-item>div{
        flex:1;
    }
    .submit-cxt{
        width: 100%;
        display: flex;
        justify-content: center;
        margin-top:41px;
    }
    .submit-btn{
        width: 466px;
        height: 58px;
        margin: 12px 24px 0;
        padding: 14px 0 15px;
        border-radius: 6px;
        background-image: linear-gradient(to left, #ffe505, #ffc81c 0%);
          color: #010033;
           font-size: 20px;
            font-weight: 500;
            text-align: center;
            user-select: none;
    }
     .submit-btn:active{
         opacity: 0.65;
     }
    
        
}

 .wallet-state{
         width: 466px;
         padding:23px 33px 19px 33px;
         border-radius: 6px;
         border: solid 1px #d8d8d8;
         background-color: #ffffff;
         
}
.wallet-box{
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 100px;
}
.w-title{
     color: #ffa402;
     font-size: 16px;
     margin-bottom:6px;
}
.w-text{
    color: #000000;
    font-size: 16px;
    font-weight: 300;
}
.w-img-box{
    width: 64px;
    padding-right: 24px;
}
.w-item{
    margin-top:11px;
}
</style>
<script>
export default {
       methods:{
          backPage(){
              this.$router.go(-1)
          }
       }
}
</script>