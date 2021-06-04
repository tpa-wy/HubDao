<template>
  <div class="ihos">
    <div class="block-item">
      <div class="header">
        <div class="logo"><img src="../../assets/icons-logo.png" alt="" /></div>
        <div class="title">TITLE TITLE</div>
        <div class="icon">
          <div class="smail-icon fx-aj-cc">
             <img class="header-icon-i" src="/assets/down-icon.png"/>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="block">
          <div class="block-item">
            <div class="title">
              Basic Sale
              <div class="icon">
                <img src="../../assets/icons-help.png" alt="" />
              </div>
            </div>
            <div class="logo">
              <img src="../../assets/icons-logo.png" alt="" />
            </div>
            <div class="sale-button">ON SALE</div>
            <div class="money">15,000,000 TITLE</div>
            <div class="total">30% of total sale</div>
            <div class="wallet-button">Unlock Wallet</div>
            <div class="table">
              <div class="tr">
                <div class="td">Max. LP token entry</div>
                <div class="td">0</div>
              </div>
              <div class="tr">
                <div class="td">Max. LP token entry</div>
                <div class="td">0</div>
              </div>
              <div class="tr">
                <div class="td">Max. LP token entry</div>
                <div class="td">0</div>
              </div>
              <div class="tr">
                <div class="td">Max. LP token entry</div>
                <div class="td">0</div>
              </div>
            </div>
          </div>
        </div>
        <div class="info">
          <div class="left">
             <div class="img fx-aj-cc">
               <img class="left-img" src="/assets/icons-default-img-2@2x.png"/>
            </div>
            <div class="content">
              <div>Achievement :</div>
              <div>IHO Shopper: TITLE (TITLE)</div>
              <div>Commit ~0.082 LP in total to earn!</div>
            </div>
          </div>
          <div class="right">
            <img class="cut-img" src="/assets/Cup.png"/>
            <span>Learn more about TITLE(TITLE)</span>
            <div class="share">
               <img src="/assets/Share.png" class="right-share-img"/>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">Close</div>
    </div>
    <div class="block-item">
      <div class="header">
        <div class="logo"><img src="../../assets/icons-logo.png" alt="" /></div>
        <div class="title">TITLE TITLE</div>
        <div class="icon">
          <div class="smail-icon fx-aj-cc">
             <img class="header-icon-i" src="/assets/down-icon.png"/>
          </div>
        </div>
      </div>
      <div class="content">
        <div class="block">
          <div class="block-item">
            <div class="title">
              Basic Sale
              <div class="icon">
                <img src="../../assets/icons-help.png" alt="" />
              </div>
            </div>
            <div class="logo">
              <img src="../../assets/icons-logo.png" alt="" />
            </div>
            <div class="sale-button">ON SALE</div>
            <div class="money">15,000,000 TITLE</div>
            <div class="total">30% of total sale</div>
            <div class="wallet-button">Unlock Wallet</div>
            <div class="table">
              <div class="tr">
                <div class="td">Max. LP token entry</div>
                <div class="td">0</div>
              </div>
              <div class="tr">
                <div class="td">Max. LP token entry</div>
                <div class="td">0</div>
              </div>
              <div class="tr">
                <div class="td">Max. LP token entry</div>
                <div class="td">0</div>
              </div>
              <div class="tr">
                <div class="td">Max. LP token entry</div>
                <div class="td">0</div>
              </div>
            </div>
          </div>
        </div>
        <div class="info">
          <div class="left">
            <div class="img fx-aj-cc">
               <img class="left-img" src="/assets/icons-default-img-2@2x.png"/>
            </div>
            <div class="content">
              <div>Achievement :</div>
              <div>IHO Shopper: TITLE (TITLE)</div>
              <div>Commit ~0.082 LP in total to earn!</div>
            </div>
          </div>
          <div class="right">
             <img class="cut-img" src="/assets/Cup.png"/>
            <span>Learn more about TITLE(TITLE)</span>
            <div class="share">
               <img src="/assets/Share.png" class="right-share-img"/>
            </div>
          </div>
        </div>
      </div>
      <div class="footer">Close</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationIhos",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>

.ihos {
  > .block-item {
   
    border-radius: 12px;
    border: solid 1px #979797;
    .theme-box-back;
    margin-bottom: 32px;
    .header {
      height: 117px;
      display: flex;
      align-items: center;
      justify-content: center;
      
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      .black-theme-img3;
      position: relative;
      .title {
        margin: 0 0 0 16px;
        font-family: NotoSansCJKkr;
        font-size: 36px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        .font-color4;
      }
      .icon {
        cursor: pointer;
        width: 48px;
        height: 48px;
        border-radius: 6px;
        box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.2);
        .theme-box-back;
        position: absolute;
        right: 62px;
        display: flex;
        align-items: center;
        .smail-icon {
           width: 48px;
           height: 48px;
           border-radius: 6px;
           box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.2);
           .theme-box-back;
          margin: 0 auto;
        }
        
          .header-icon-i{
            width:24px;height: 24px;
          }
      }
    }
    > .content {
      padding-left: 30px;
      padding-right: 30px;
      padding-bottom: 38px;
      padding-top: 51px;

      .progress {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .article {
          width: 602px;
          height: 11px;
          .el-progress {
            .el-progress-bar__outer {
              height: 11px !important;
            }
          }
        }
        .value {
          flex: 1;
          font-family: NotoSansCJKkr;
          font-size: 16px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          .font-color2;
          text-align: right;
          //   margin-left: 62px;
        }
      }
      > .block {
        display: flex;
        justify-content: center;
        align-items: center;
        .block-item {
          width: 432px;
          height: 575px;
          // margin: 31px 24px 46px 30px;
          margin-top: 37px;
          //   padding: 15px 28px 38px 56px;
          padding-left: 57px;
          padding-top: 15px;
          padding-right: 28px;
          margin-bottom: 38px;
          border-radius: 6px;
          border: solid 1px #d8d8d8;
          .pink-border-color3;
          .black-theme-img4;
          .title {
            height: 29px;
            font-family: NotoSansCJKkr;
            font-size: 20px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            .font-color5;
            position: relative;
            .icon {
              position: absolute;
              right: 0;
              top: 4px;
              cursor: pointer;
            }
          }
          > .logo {
            margin-top: 40px;
            width: 65px;
            height: 65px;
            margin-bottom: 24px;
          }
          .sale-button {
            width: 80px;
            height: 26px;
            // margin: 24px 30px 6px 1px;
            // padding: 3px 11px 3px 10px;
            line-height: 26px;
            border-radius: 16px;
           
            font-family: NotoSansCJKkr;
            font-size: 14px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            letter-spacing: normal;
            text-align: center;
            .font-color4;
            cursor: pointer;
            margin-bottom: 9px;
            .black-font-color;
          }
          .money {
            height: 54px;
            // margin: 6px 25px 0 0;
            font-family: NotoSansCJKkr;
            font-size: 36px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            .font-color5;
          }
          .total {
            height: 29px;
            font-family: NotoSansCJKkr;
            font-size: 20px;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: rgba(47, 48, 63, 0.73);
            margin-bottom: 42px;
          }
          .wallet-button {
            cursor: pointer;
            width: 320px;
            height: 58px;
            line-height: 58px;
            // margin: 42px 6px 32px 0;
            // padding: 14px 92px 15px 95px;
            border-radius: 6px;
            font-family: NotoSansCJKkr;
            font-size: 20px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            letter-spacing: normal;
            text-align: center;
            .font-color5;
            margin-bottom: 32px;
            .black-theme-img2;
          }
          .table {
            .tr {
              display: flex;
              justify-content: space-between;
              align-items: center;
              margin-bottom: 7px;
              .td {
                height: 24px;
                font-family: NotoSansCJKkr;
                font-size: 16px;
                font-weight: 300;
                font-stretch: normal;
                font-style: normal;
                line-height: normal;
                letter-spacing: normal;
                .font-color1;
                margin-right: 26px;
              }
            }
          }
        }
      }
      .info {
        margin-top: 46px;
        display: flex;
        justify-content: space-between;
        .left {
          display: flex;
          .img {
            width: 54px;
            height: 54px;
            margin: 19px 21px 23px 0;
            border-radius: 11px;
            border: solid 1px #979797;
            margin-right: 21px;
            .black-font-color;
            .left-img{
              width: 50px;
              height:50px;
            }
          }
          .content {
            > div {
              //   height: 24px;
              //   margin: 48px 235px 0 21px;
              font-family: NotoSansCJKkr;
              font-size: 16px;
              font-weight: 300;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              .font-color5;
            }
            > div:nth-child(2) {
              font-family: NotoSansCJKkr;
              font-size: 16px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              .font-color5;
              width: 154px;
            }
          }
        }
        .right {
          display: flex;
          align-items: center;
          .icon {
            width: 15px;
            height: 21px;
            // margin: 0 3px;
            // border: solid 1px #000000;
            background-color: #f00;
          }
           
           .cut-img{
              width: 16px;height:16px;
              margin-right: 8px;
            }
         
            .share {
              margin: 2px 2px 0 0;
              // border: solid 1.5px #2f303f;
              margin-left: 5px;
            }
            .right-share-img{
              width: 12px;height: 12px;
            }
          
          span {
            margin-left: 5px;
          }
          height: 24px;
          //   margin: 0 0 0 19px;
          font-family: NotoSansCJKkr;
          font-size: 16px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          .font-color2;
        }
      }
    }
    .footer {
      border-top: solid 1px #979797;
      height: 70px;
      line-height: 70px;
      font-family: NotoSansCJKkr;
      font-size: 20px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      text-align: center;
      .font-color6;
    }
  }
  .block-item:last-child{
    margin-bottom: 100px;
  }
}
</style>