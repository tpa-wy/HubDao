<template>
  <div class="ihos">
    <div class="block-item">
      <div class="header">
        <div class="logo"><img src="../../assets/icons-logo.png" alt="" /></div>
        <div class="title">TITLE TITLE</div>
        <div class="icon">
          <div class="smail-icon"></div>
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
            <div class="img"></div>
            <div class="content">
              <div>Achievement :</div>
              <div>IHO Shopper: TITLE (TITLE)</div>
              <div>Commit ~0.082 LP in total to earn!</div>
            </div>
          </div>
          <div class="right">
            <div class="icon"></div>
            <span>Learn more about TITLE(TITLE)</span>
            <div class="share"></div>
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
          <div class="smail-icon"></div>
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
            <div class="img"></div>
            <div class="content">
              <div>Achievement :</div>
              <div>IHO Shopper: TITLE (TITLE)</div>
              <div>Commit ~0.082 LP in total to earn!</div>
            </div>
          </div>
          <div class="right">
            <div class="icon"></div>
            <span>Learn more about TITLE(TITLE)</span>
            <div class="share"></div>
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
    // height: 1075px;
    // height: 117px;
    border-radius: 12px;
    border: solid 1px #979797;
    background-color: #ffffff;
    margin-bottom: 32px;
    .header {
      height: 117px;
      display: flex;
      align-items: center;
      justify-content: center;
      //   padding: 31px 0 0;
      //   border-radius: 12px;
      border-top-left-radius: 12px;
      border-top-right-radius: 12px;
      background-image: linear-gradient(to left, #0b0d36, #44465e 0%);
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
        color: #ffffff;
      }
      .icon {
        cursor: pointer;
        width: 48px;
        height: 48px;
        border-radius: 6px;
        box-shadow: 3px 3px 6px 0 rgba(0, 0, 0, 0.2);
        background-color: #ffffff;
        position: absolute;
        right: 62px;
        display: flex;
        align-items: center;
        .smail-icon {
          width: 22px;
          height: 11px;
          background-color: #f00;
          line-height: 11px;
          margin: 0 auto;
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
          //   margin: 51px 62px 37px 30px;
          //   padding: 0 202px 0 0;
          //   border-radius: 5.5px;
          //   background-color: #d8d8d8;
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
          color: #444444;
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
          background-image: linear-gradient(to bottom, #fbfbfb 21%, #f5f5f5);
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
            color: #010033;
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
            background-color: #010033;
            font-family: NotoSansCJKkr;
            font-size: 14px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            letter-spacing: normal;
            text-align: center;
            color: #ffffff;
            cursor: pointer;
            margin-bottom: 9px;
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
            color: #010033;
          }
          .total {
            height: 29px;
            // margin: 60px 172px 42px 1px;
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
            background-image: linear-gradient(to left, #ffe505, #ffc81c 0%);
            font-family: NotoSansCJKkr;
            font-size: 20px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            letter-spacing: normal;
            text-align: center;
            color: #010033;
            margin-bottom: 32px;
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
                color: #000000;
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
            background-color: #d8d8d8;
            margin-right: 21px;
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
              color: #010033;
            }
            > div:nth-child(2) {
              font-family: NotoSansCJKkr;
              font-size: 16px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              color: #010033;
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
          .share {
            width: 12px;
            height: 12px;
            margin: 2px 2px 0 0;
            // border: solid 1.5px #2f303f;
            margin-left: 5px;
            background-color: #f00;
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
          color: #444444;
        }
      }
    }
    .footer {
      border-top: solid 1px #979797;
      height: 102px;
      line-height: 102px;
      font-family: NotoSansCJKkr;
      font-size: 20px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      text-align: center;
      color: #727272;
    }
  }
}
</style>