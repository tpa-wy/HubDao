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

         <div class="lottery-cxt fx-box">
             <div class="lottery-item">
                 <div class="lottery-title">Select lottery number :</div>
                 <div class="lottery-input fx-aj-cs">
                     <input type="text">
                     <img src="/assets/search.png" alt="">
                 </div>

                 <div class="lottery-card lottery-pt">
                      <div class="fx-box fx-jc-sb fx-ai-c lottery-plr">
                          <span class="font-size24">Round #499</span>
                          <span class="font-size14 font-color2">APR 28,2:00 UTC</span>
                      </div>
                      <div class="card-item fx-box lottery-plr">
                          <div class="card-item-i fx-box fx-jc-sb fx-ai-c full-r-w">
                              <img src="/assets/s-card.png"/>
                              <div class="card-cxt-box fx-box fx-fd-jc-sb">
                                <div class="card-num-title">Winning numbers</div>
                                <div class="card-num">14, 11, 11, 2</div>
                              </div>
                          </div>
                          <div class="card-item-i fx-box fx-jc-sb fx-ai-c full-r-w">
                              <img src="/assets/s-card.png"/>
                              <div class="card-cxt-box fx-box fx-fd-jc-sb">
                                <div class="card-num-title">Winning numbers</div>
                                <div class="card-num">14, 11, 11, 2</div>
                              </div>
                          </div>
                      </div>
                      <div class="card-split full-r-w"></div>

                      <div class="card-table lottery-plr">
                          <div class="card-table-header fx-box">
                            <div class="fx-1 text-left">No Matched</div>
                            <div  class="fx-1 text-center">Winners</div>
                            <div  class="fx-1 text-right">Prize Pot</div>
                          </div>
                          <div class="card-table-body">
                              <div class="full-r-w fx-box body-item fx-ai-c">
                                  <div class="fx-1 text-left">No Matched</div>
                                  <div  class="fx-1 text-center">Winners</div>
                                  <div  class="fx-1 text-right">Prize Pot</div>
                              </div>
                               <div class="full-r-w fx-box body-item body-item-op1  fx-ai-c">
                                  <div class="fx-1 text-left">No Matched</div>
                                  <div  class="fx-1 text-center">Winners</div>
                                  <div  class="fx-1 text-right">Prize Pot</div>
                              </div>
                               <div class="full-r-w fx-box body-item  body-item-op2 fx-ai-c">
                                  <div class="fx-1 text-left">No Matched</div>
                                  <div  class="fx-1 text-center">Winners</div>
                                  <div  class="fx-1 text-right">Prize Pot</div>
                              </div>
                          </div>
                      </div>


                      <div class="lottery-plr fx-box fx-jc-sb fx-ai-c layout-mt20 font-color2">
                           <div class="">Burned:</div>
                           <div>620</div>
                      </div>

                      <div class="full-r-w fx-jc-c fx-ai-c">
                          <div class="basic-btn-yellow lottery-btn">
                            Unlock Wallet
                          </div>
                      </div>


                 </div>

             </div>
             <div class="lottery-item lottery-item2">
                  <div class="lottery-plr">

                      <div class="fx-box fx-jc-sb fx-ai-c">
                        <div class="history">History</div>
                        <div class="fx-box fx-ai-c">
                            <div class="showlast font-color2">SHOW LAST</div>
                            <div>
                              <el-select v-model="selectVal" clearable placeholder="请选择">
                              <el-option
                                v-for="item in options"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                              </el-option>
                            </el-select>
                            </div>
                        </div>
                      </div>

                  </div>

                  <div class="lottery-plr chart-h">
                    <v-chart :option="chartOps"
                    autoresize/>
                  </div>
                 
             </div>
         </div>


    </div>
  </div>
</template>

<script>
let options={
  tooltip: {
        trigger: 'axis',
        axisPointer: {
            type: 'cross',
            crossStyle: {
                color: '#999'
            }
        }
    },
    
    legend: {
        data: ['PoolSize', 'Burned']
    },
    xAxis: [
        {
            type: 'category',
            data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
            axisPointer: {
                type: 'shadow'
            }
        }
    ],
    yAxis: [
        {
            type: 'value',
            name: '',
            min: 0,
            max: 250,
            interval: 50
        },
        {
            type: 'value',
            name: '',
            min: 0,
            max: 25,
            interval: 5,
        }
    ],
    series: [
        {
            name: 'PoolSize',
            type: 'bar',
            data: [2.0, 4.9, 7.0, 23.2, 25.6, 76.7, 135.6, 162.2, 32.6, 20.0, 6.4, 3.3]
        },
        {
            name: 'Burned',
            type: 'bar',
            data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        }
    ]
}
export default {
  name: "EducationIho",
  data() {
    return {
      checked: 1,
      options:[
          {
            label:'50',
            value:50
          },
          {
            label:'60',
            value:60
          },
          {
            label:'70',
            value:70
          }
      ],
      chartOps:options,
      selectVal:'',
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
        .font-color1;
        text-align: left;
    }
  }
  .smail-title {
        .basic-font;
        height: 36px;
        .font-color1;
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
        
        margin: 90px 176.5px 0px 176.5px;
        padding:0px 0px 0px 261px;
        .black-theme-img;
        .lottery-nav-i{
            width: 77px;
            height: auto;
            margin-right: 25px;
        }
        .text{
            .font-color4;
            font-size: 24px;
            margin-right: 30px;
        }
        .btn{
             
                width: 326px;
                padding: 14px 95px 15px 98px;
                border-radius: 6px;
                box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.2);
                .font-color5;
                .black-theme-img2;
                  font-size: 20px;

        }
    }
    .lottery-cxt{
         margin: 0px 176.5px 0px 176.5px;
         .lottery-item{
             margin-top: 33px;
             width: calc(calc(100% - 24px)/2);
             .lottery-input{
                         border: solid 1px #000000;
                         .theme-box-back;
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
                    .pink-border-color3;
                    .theme-box-back;
                    margin-top: 23px;
                    margin-bottom:100px;
                    padding-bottom: 35px;
                    .card-split{
                        border: dashed 1px #a5a5a5;
                        .pink-border-color1;
                        margin-top:43.5px;
                    }
                    .card-table-header{
                      margin-top:43.5px;
                      margin-bottom: 14px;
                    }
                    .card-table-body{

                    }
                    .body-item{
                      .theme-list-back;
                      padding: 3px 11px 5px;
                      border-radius: 2px;
                      font-size: 16px;
                      font-weight: 500;
                      .font-color1;
                      margin-bottom:8px;
                    }
                    .body-item-op1{
                      opacity: 0.6;
                    }
                    .body-item-op2{
                      opacity: 0.4;
                    }
                    .lottery-btn{
                        height: 58px;
                        width: 380px;
                        line-height: 58px;
                        .font-color5;
                        font-size: 20px;
                        margin-top: 64px;
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
                  .font-color7;
                  font-size: 20px;
                  font-weight: bold;
               }
               
             }
            
         }
         .lottery-item2{
           border-radius: 8px;
          box-shadow: 3px 3px 8px 0 #d8d8d8;
          .pink-border-color3;
          .theme-back1;
          padding-top: 26px;height: 534px;
         }
         .history{
           font-size: 24px;
           font-weight: bold;
           .font-color1;
         }
         .showlast{
           font-size: 14px;
           font-weight: 300;
           margin-right: 13px;
         }
         .chart-h{
           height:300px;
           margin-top:34px;
         }

    }
  }
}
</style>