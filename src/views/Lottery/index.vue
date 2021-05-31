<template>
  <div class="lottery full-r-w fx-fd-c fx-ai-c">

    <div class="title full-r-w">
        <div class="title-cxt">Lottery</div>
    </div>

    <div class="smail-title full-r-w">
        <div class="smail-title-text">
            Buy new tokens with a brand new token sale model.
        </div>
    </div>

    <div class="block full-r-w">
         <div class="lottery-nav fx-box fx-ai-c">
             <img class="lottery-nav-i" src="/assets/card-icon.png" alt="">
             <div class="text">Unlock wallet to access lottery</div>
             <div class="btn">Unlock Wallet</div>
         </div>

         <div class="lottery-cxt fx-jc-sb">
             <div class="lottery-item">
                 <div class="lottery-title">Select lottery number :</div>
                 <div class="lottery-input fx-aj-cs">
                     <input type="text">
                     <img src="/assets/search.png" alt="">
                 </div>

                 <div class="lottery-card lottery-pt">
                      <div class="fx-box fx-jc-sb lottery-plr">
                          <span class="font-size24">Round #499</span>
                          <span class="font-size14 font-color2">APR 28,2:00 UTC</span>
                      </div>
                      <div class="card-item fx-box lottery-plr">
                          <div class="card-item-i fx-box fx-jc-sb full-r-w">
                              <img src="/assets/s-card.png"/>
                              <div class="card-cxt-box fx-box fx-fd-jc-sb">
                                <div class="card-num-title">Winning numbers</div>
                                <div class="card-num">14, 11, 11, 2</div>
                              </div>
                          </div>
                          <div class="card-item-i fx-box fx-jc-sb full-r-w">
                              <img src="/assets/s-card.png"/>
                              <div class="card-cxt-box fx-box fx-fd-jc-sb">
                                <div class="card-num-title">Winning numbers</div>
                                <div class="card-num">14, 11, 11, 2</div>
                              </div>
                          </div>
                      </div>
                      <div class="card-split full-r-w"></div>

                      <div class="card-table lottery-plr">
                          <div class="card-table-header">
                            <div>No Matched</div>
                            <div>Winners</div>
                            <div>Prize Pot</div>
                          </div>
                          <div class="card-table-body"></div>
                      </div>


                 </div>

             </div>
             <div class="lottery-item"></div>
         </div>


    </div>
  </div>
</template>

<script>
export default {
  name: "EducationIho",
  data() {
    return {
      checked: 1,
    };
  },
  mounted() {
    if (this.$route.path == "/Start-upHUB/IHOs") {
      this.checked = 2;
    }
  },
  methods: {
    navhref(num) {
      this.checked = num;
      var router = "IHO";
      if (num == 2) {
        router = "IHOs";
      }
      this.$router.push(router);
    },
  },
};
</script>

<style lang="less" scoped>
.lottery {
  
  
  .title {
    font-family: NotoSansCJKkr;
    font-size: 36px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    
    .title-cxt{
        margin: 48px 176.5px 9px 176.5px;
        color: #000000;
        text-align: left;
    }
  }
  .smail-title {
        .basic-font;
        height: 36px;
        color: #000000;
        .smail-title-text{
            margin: 0px 176.5px 9px 176.5px;
        }
  }
  .block {
    
    .lottery-nav{
        .basic-font;
        height: 148px;
        border-radius: 8px;
        box-shadow: 4px 4px 10px 0 rgba(118, 134, 184, 0.62);
        border: solid 2px rgba(81, 90, 255, 0.45);
        background-image: linear-gradient(to left, #010033, #2c3074 68%, #010033 21%);
        margin: 90px 176.5px 0px 176.5px;
        padding:0px 0px 0px 261px;
        .lottery-nav-i{
            width: 77px;
            height: auto;
            margin-right: 25px;
        }
        .text{
            color: #ffffff;
            font-size: 24px;
            margin-right: 30px;
        }
        .btn{
             
                width: 326px;
                padding: 14px 95px 15px 98px;
                border-radius: 6px;
                box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.2);
                background-image: linear-gradient(to left, #ffe505, #ffc81c 0%);
                  color: #010033;
                  font-size: 20px;

        }
    }
    .lottery-cxt{
         margin: 0px 176.5px 0px 176.5px;
         .lottery-item{
             padding-top: 33px;
             width: calc(calc(100% - 24px)/2);
             .lottery-input{
                         border: solid 1px #000000;
                         background-color: #ffffff;
                         border-radius: 6px; height:56px;
                         overflow: hidden;
                    
                    input{
                        width: 200px;
                        border:none;
                        height:100%;
                        padding-left:26px;
                        font-size: 16px;
                    }
                    img{
                        width: 20px;
                        height: auto;
                        margin-right:26px;
                    }
             }
              .lottery-title{
                 padding-bottom: 10px;
                 font-size: 16px;
             }
             .lottery-pt{
               padding-top: 24px;
             }
             .lottery-plr{
               padding:0px  30px 0px 30px;
             }
             .lottery-card{
                    
                    opacity: 0.84;
                    border-radius: 8px;
                    box-shadow: 3px 3px 8px 0 #d8d8d8;
                    border: solid 1px #d8d8d8;
                    background-color: #ffffff;
                    margin-top: 23px;
                    margin-bottom:100px;

                    .card-split{
                        border: dashed 1px #a5a5a5;
                    }
             }
             .card-item{
               margin-top:58px;
               img{
                 width: 64px;
                 height:64px;
               }
               .card-item-i{
                 width: 50%;
               }
               .card-cxt-box{
                 height: 64px;
               }
               .card-num-title{
                  font-size: 14px;
                  font-weight: 300;
               }
               .card-num{
                   color: #2f303f;
                  font-size: 20px;
                  font-weight: bold;
               }
               
             }
            
         }

    }
  }
}
</style>