<template>
  <div class="iho-block">
    <div class="block-item block-item-1">
      <div class="header">
        <div class="logo"><img src="../../assets/icons-logo.png" alt="" /></div>
        <div class="title">TITLE TITLE</div>
        <div class="Comming">Comming Soon</div>
        <div class="icon"></div>
      </div>
      <div class="content">
        <div class="progress">
          <div class="article">
            <el-progress :show-text="false" :percentage="50"></el-progress>
          </div>
          <div class="value">START : <span>0d 22h 41m(blocks)</span></div>
        </div>
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
            <el-checkbox v-model="checked"></el-checkbox>100
            <span>Learn more about TITLE(TITLE)</span>
            <div class="share"></div>
          </div>
        </div>
      </div>
      <div class="footer">Close</div>
    </div>
    <div class="block-item block-item-2">
      <div class="header">How to Take Part</div>
      <div class="content">
        <div class="block">
          <div class="ranking">1</div>
          <div class="line"></div>
          <div class="title">Activate your Profile</div>
          <div class="smail-title">
            You’ll need an active PancakeSwap Profile to take part in an IHO!
          </div>
          <div class="button">Active your profile</div>
        </div>
        <div class="block">
          <div class="ranking">2</div>
          <div class="line"></div>
          <div class="title">Get CAKE-BNB LP Tokens</div>
          <div class="smail-title">
            Stake CAKE and BNB in the liquidity pool to get LP tokens. You’ll
            spend them to buy IFO sale tokens.
          </div>
          <div class="button2">Get LP tokens</div>
        </div>
        <div class="block">
          <div class="ranking">3</div>
          <div class="line"></div>
          <div class="title">Claim your tokens and achievement</div>
          <div class="smail-title">
            When the IFO sales are live, you can “commit” your LP tokens to buy
            the tokens being sold. We recommend committing to the Basic Sale
            first, but you can do both if you want.
          </div>
        </div>
      </div>
    </div>
    <div class="block-item block-item-3">
      <div class="header">Details</div>
      <div class="block">
        <div class="top">
          <div>
            What’s the difference between a Basic sale and Unlimited Sale?
          </div>
          <div>
            Details
            <div class="icon"></div>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="top">
          <div>
            What’s the difference between a Basic sale and Unlimited Sale?
          </div>
          <div>
            Details
            <div class="icon"></div>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="top">
          <div>
            What’s the difference between a Basic sale and Unlimited Sale?
          </div>
          <div>
            Details
            <div class="icon"></div>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="top">
          <div>
            What’s the difference between a Basic sale and Unlimited Sale?
          </div>
          <div>
            Details
            <div class="icon"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationIho",
  data() {
    return {
      checked: false,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less">
.iho-block {
  margin-bottom: 108px;
  > .block-item-1 {
    // height: 1075px;
    border-radius: 12px;
    border: solid 1px #979797;
    background-color: #ffffff;
    margin-bottom: 144px;
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
      .Comming {
        position: absolute;
        left: 30px;
        top: -6px;
        width: 180px;
        height: 57px;
        line-height: 57px;
        border-radius: 6px;
        box-shadow: 3px 7px 5px 1px rgba(3, 3, 26, 0.18);
        background-image: linear-gradient(to bottom, #e4ede1, #ffffff 87%);
        font-family: NotoSansCJKkr;
        font-size: 18px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: center;
        color: #263757;
        cursor: pointer;
      }
      .icon {
        width: 22px;
        height: 11px;
        background-color: #f00;
        position: absolute;
        right: 62px;
        top: 50%;
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
        justify-content: space-between;
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
  > .block-item-2 {
    width: 948px;
    // height: 1096px;
    // margin: 144px 354px 110px 353px;
    border-radius: 12px;
    border: solid 1px #d8d8d8;
    background-color: #ffffff;
    .header {
      height: 103px;
      line-height: 103px;
      //   margin: 0 0 68px;
      //   padding: 25px 326px 24px;
      border-radius: 12px;
      border: solid 1px #d8d8d8;
      background-color: #010033;
      font-family: NotoSansCJKkr;
      font-size: 36px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      text-align: center;
      color: #ffffff;
    }
    .content {
      margin-top: 68px;
      margin-left: 71px;
      padding-left: 55px;
      border-left: 5px solid #d8d8d8;
      //   临时
      height: auto;
      padding-bottom: 100px;
      .block {
        position: relative;
        .ranking {
          z-index: 2;
          position: absolute;
          left: -95px;
          top: -18px;
          width: 74px;
          height: 74px;
          line-height: 74px;
          //   margin: 68px 21px 0 71px;
          //   padding: 12px 28px 17px;
          background-color: #010033;
          border-radius: 50%;
          font-family: NotoSansCJKkr;
          font-size: 30px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          //   line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: #ffffff;
        }
        .line {
          position: absolute;
          width: 5px;
          height: 100%;
          background-color: #010033;
          left: -60px;
          z-index: 1;
          top: 56px;
        }
        margin-right: 50px;
        // margin: 83px 516px 4px 21px;
        .title {
          height: 38px;
          font-family: NotoSansCJKkr;
          font-size: 26px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #000000;
        }
        .smail-title {
          //   height: 29px;
          //   margin: 4px 97px 20px 21px;
          margin-bottom: 20px;
          font-family: NotoSansCJKkr;
          font-size: 20px;
          font-weight: 300;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #000000;
        }
        .button {
          cursor: pointer;
          width: 244px;
          height: 58px;
          line-height: 58px;
          margin-bottom: 74px;
          //   margin: 20px 538px 60px 21px;
          //   padding: 14px 33px 15px 36px;
          opacity: 0.69;
          border-radius: 6px;
          background-image: linear-gradient(to left, #44465e, #2f303f 0%);
          font-family: NotoSansCJKkr;
          font-size: 20px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          letter-spacing: normal;
          text-align: center;
          color: #ffffff;
        }
        .button2 {
          margin-bottom: 68px;
          cursor: pointer;
          width: 229px;
          height: 58px;
          line-height: 58px;
          font-family: NotoSansCJKkr;
          font-size: 20px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          letter-spacing: normal;
          text-align: center;
          color: #010033;
          //   margin: 20px 553px 51px 21px;
          //   padding: 14px 21px 15px 50px;
          border-radius: 6px;
          background-image: linear-gradient(to left, #ffe505, #ffc81c 0%);
        }
      }
    }
  }
  > .block-item-3 {
    width: 948px;
    margin-top: 110px;
    height: 721px;
    // margin: 110px 354px 108px 353px;
    padding: 48px 22px 25px 26px;
    border-radius: 12px;
    border: solid 1px #d8d8d8;
    background-color: #ffffff;
    .header {
      //   width: 119px;
      height: 54px;
      margin: 0 391px 34px 390px;
      font-family: NotoSansCJKkr;
      font-size: 36px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #010033;
    }
    .block {
      width: 900px;
      height: 125px;
      margin: 0 auto 20px auto;
      padding: 48px 40px 48px 29px;
      border-radius: 6px;
      background-color: #f5f5f5;
      .top {
        display: flex;
        justify-content: space-between;
        > div {
          display: flex;
          align-items: center;
          height: 29px;
          //   margin: 0 154px 0 0;
          font-family: NotoSansCJKkr;
          font-size: 20px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: center;
          color: #444444;
          .icon {
            width: 12px;
            height: 6px;
            background-color: #f00;
            margin-left: 5px;
          }
        }
      }
    }
  }
}
</style>