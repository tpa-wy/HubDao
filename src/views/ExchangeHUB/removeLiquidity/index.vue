<template>
  <div>
    <div id="block">
      <div class="supply">
        <div class="top">
          <div class="header">
            <img
              @click="backPage"
              class="header-back-icon"
              src="../../../assets/back-icon.png"
            />

            <div class="title">
              Unstaking {{ removeLiquidity.token0info.symbol }}-{{
                removeLiquidity.token1info.symbol
              }}
              LP tokens
            </div>
            <div class="icon">
              <div class="icon-2">
                <img
                  class="icon-img-20"
                  src="../../../assets/icons-recent@2x.png"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="block-item-1">
          <div class="title">
            <div class="title-1">Amount</div>
            <div class="title-2">Detailed</div>
          </div>
          <div class="percentage">
            <div class="text">{{ plan }}%</div>
            <el-progress
              color="#d42a4d"
              :percentage="plan"
              :format="format"
            ></el-progress>
          </div>
          <div class="smail-block">
            <div
              class="smail-block-item"
              :class="{ checked: plan == '25' }"
              @click="plan = 25"
            >
              25%
            </div>
            <div
              class="smail-block-item"
              :class="{ checked: plan == '50' }"
              @click="plan = 50"
            >
              50%
            </div>
            <div
              class="smail-block-item"
              :class="{ checked: plan == '75' }"
              @click="plan = 75"
            >
              75%
            </div>
            <div
              class="smail-block-item"
              :class="{ checked: plan == '100' }"
              @click="plan = 100"
            >
              MAX
            </div>
          </div>
        </div>
        <div class="icon-xia"></div>
        <div class="block-item-2">
          <div class="block">
            <div>-</div>
            <div>
              <img
                src="../../../../public/assets/icons-default-img-1.png"
                alt=""
                srcset=""
              />
              HD
            </div>
          </div>
          <div class="block">
            <div>-</div>
            <div>
              <img
                src="../../../../public/assets/icons-default-img-3.png"
                alt=""
                srcset=""
              />
              HT
            </div>
          </div>
          <div class="block">
            <div></div>
            <div class="Recieve">Recieve WBNB</div>
          </div>
        </div>
        <div class="price-title">Price</div>
        <div class="block-item-3">
          <div>1HD =<span>0.5555382746474 HT</span></div>
          <div>1HT =<span>42039484 HT</span></div>
        </div>
        <div class="button-info">
          <div
            class="button button-1"
            :class="{mr5:removeLiquidity.authorizationAmount <= 0}"
            v-show="removeLiquidity.authorizationAmount <= 0"
            @click="approve"
          >
            Approve
          </div>
          <div
            class="button button-2"
            :class="{
              bc0: removeLiquidity.authorizationAmount <= 0,
              disabled: removeLiquidity.authorizationAmount <= 0,
              ml5: removeLiquidity.authorizationAmount <= 0,
            }"
            v-show="plan > 0"
          >
            Unlock Wallet
          </div>
          <div
            class="button button-3"
            :class="{
              disabled: removeLiquidity.authorizationAmount <= 0,
              ml5: removeLiquidity.authorizationAmount <= 0,
            }"
            v-show="plan == 0"
          >
            Enter an amount
          </div>
        </div>
      </div>
    </div>
    <div class="wallet">
      <div class="title">LP TOKENS IN YOUR WALLET</div>
      <div class="content">
        <div class="content-item">
          <div>
            <img :src="removeLiquidity.token0info.logoURI" alt="" />
            <img :src="removeLiquidity.token1info.logoURI" alt="" />
            <span
              >{{ removeLiquidity.token0info.symbol }} /
              {{ removeLiquidity.token1info.symbol }}</span
            >
          </div>
          <div>{{ removeLiquidity.balance }}</div>
        </div>
        <div class="content-item">
          <div>{{ removeLiquidity.token0info.symbol }}</div>
          <div>1633332</div>
        </div>
        <div class="content-item">
          <div>{{ removeLiquidity.token1info.symbol }}</div>
          <div>7.028309</div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less">
.block {
  .el-progress-bar {
    padding-right: 0;
  }
  .el-progress-bar__outer {
    background-image: linear-gradient(269deg, #d8d8d8 100%, #a5a5a5);
    background-color: transparent;
  }
}
</style>
<style lang="less" scoped>
#block {
  > .block {
    width: 466px;
    margin: 15px auto 0 auto;
    // height: 100px;
    .block-item-1 {
      height: 217px;
      margin-bottom: 30px;
      padding: 15px 23px 22px;
      border-radius: 6px;
      background-color: #f5f5f5;
      .title {
        display: flex;
        justify-content: space-between;
        .title-1 {
          height: 29px;
          // margin: 0 252px 29px 3px;
          font-family: NotoSansCJKkr;
          font-size: 20px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 0.18px;
          color: #000000;
        }
        .title-2 {
          height: 29px;
          margin: 0 1px 29px 252px;
          font-family: NotoSansCJKkr;
          font-size: 20px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 0.18px;
          text-align: right;
          color: #ffa402;
        }
      }
      .percentage {
        .text {
          height: 54px;
          font-family: NotoSansCJKkr;
          font-size: 36px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 0.32px;
          color: #23224e;
        }
      }
      .smail-block {
        display: flex;
        align-items: center;
        justify-content: space-between;
        margin-top: 28px;
        .smail-block-item {
          width: 96px;
          cursor: pointer;
          height: 40px;
          line-height: 40px;
          //   margin: 0 12px 0 0;
          // padding: 1px 27px 2px;
          opacity: 0.64;
          border-radius: 4px;
          background-color: #d8d8d8;
          font-family: NotoSansCJKkr;
          font-size: 20px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          letter-spacing: normal;
          text-align: center;
          color: #a5a5a5;
        }
        .checked {
          //   background-image: linear-gradient(to left, #44465e, #2f303f 0%);
          background-color: #2f303f;
          color: #ffffff;
        }
      }
    }
    .icon-xia {
      width: 25px;
      height: 21px;
      margin: 0 auto;
      background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAACaUlEQVR4Xu2aMUhWURSAP6eWphaXppZGp0CabJCGwHIoCwVz0UEoGtTBoQQHW0LQoaYcFKRMoyFyEB2CCgfBwUEQAolACATBQRDkwBV+nu/p8//fPfe83r3r//PO+b5zzr3vv/xNVHw1VZyfKCB2QMUNxBGoeAPETTCOQByBihuII1DxBghyCjwGOoAfwFToAmiPwCgwXgPdB8yElKApYBh4nYCdA3qqIOAF8CYFtBX49b8LGASmUyAfAR9Dwkts3yPQD7yzCu9bwFPgvWV4nwK6gVnr8L4EPAQ+lAHeh4AHwGLK3mJiw0vbcIvcBO8Bn4AriUBm4YvsgHZX+atlgi9KQJur/LWywRch4LarfHMZ4RsVcMvBXy8rfCMCWhz8jTLD1ytAZv4tcDP0e3xKfLlfeHaZvOo5BlcBkWB13QHW8iYXBeQ1VfM9qb50gcWlMgICfhf4ljBwDMh934JFM1k51TMCp8+6D3xOPPjISVgqi4RGBAhjFzCfgD0EngBfyiChUQHC2Jtys3vgOuGrdQlFCBDGAfduUMu77yQsW5ZQlABhfA5MJmD/uTFZsSqhSAHCOAJMJGD3nITcLyeasooWILm/Al4mIP4CcjHyXRMuTywfArIk7DoJP/MkpvUdXwKyJPx2Eta1AC+K41NAloQdQG6ONy5KTuNz3wKyJGw7CZsakOfF0BCQJWEL6ARERrClJSBLghyN8vs92NIUkCZhzB2blREgoKd/kfkDDAUjd4G1OyA075n4UYC5kignFDtAWbi5cLEDzJVEOaHYAcrCzYWLHWCuJMoJxQ5QFm4uXOwAcyVRTugEgJJVQW8N8agAAAAASUVORK5CYII=);
      background-size: 100% 100%;
      transform: rotate(-90deg);
    }
    .block-item-2 {
      margin-top: 30px;
      // width: 466px;
      height: 150px;
      // margin: 30px 24px;
      padding: 19px 24px 15px 26px;
      border-radius: 6px;
      background-color: #f5f5f5;
      > .block {
        margin-top: 13px;
        display: flex;
        justify-content: space-between;

        .Recieve {
          font-family: NotoSansCJKkr;
          font-size: 16px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: 0.14px;
          color: #ffa402;
        }
        > div {
          display: flex;
          align-items: center;
          img {
            border-radius: 50%;
            width: 28px;
            height: 28px;
            margin-right: 7px;
          }
          font-family: NotoSansCJKkr;
          font-size: 20px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          text-align: right;
          color: #000000;
        }
      }
    }
    .price-title {
      height: 29px;
      margin-top: 30px;
      margin-bottom: 15px;
      //   margin: 30px 170px 15px 24px;
      font-family: NotoSansCJKkr;
      font-size: 20px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: 0.18px;
      color: #000000;
    }
    .block-item-3 {
      height: 88px;
      //   margin: 15px 24px 30px;
      margin-bottom: 32px;
      padding: 11px 19px 0px 0px;
      border-radius: 6px;
      border: solid 1px #d8d8d8;
      text-align: right;
      > div {
        font-family: NotoSansCJKkr;
        font-size: 20px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #2f303f;
        margin-top: 5px;
      }
    }
    .button-info {
      width: 100%;
      display: flex;
      justify-content: space-between;

      .button {
        // width: 227px;
        width: 100%;
        height: 48px;
        line-height: 48px;
        text-align: center;
        // margin: 32px 12px 0 24px;
        // padding: 9px 72px 10px 74px;
        border-radius: 6px;
        font-family: NotoSansCJKkr;
        font-size: 20px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: center;
      }
      .button-1 {
        background-image: linear-gradient(to left, #44465e, #2f303f 0%);
        color: #ffffff;
      }
      .bc0 {
        background-color: rgb(221, 226, 235);
      }
      .button-2 {
        background-image: linear-gradient(to left, #ffe505, #ffc81c 0%);
        color: #010033;
      }
      .button-3 {
        background-color: #d8d8d8;
        color: #a5a5a5;
      }
    }
  }
}

.wallet {
  width: 466px;
  margin: 0 auto;
  height: 201px;
  //   margin: 36px 596px 64px 594px;
  padding: 23px 32px 19px 33px;
  border-radius: 6px;
  border: solid 1px #d8d8d8;
  background-color: #ffffff;
  .title {
    font-family: NotoSansCJKkr;
    font-size: 16px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffa402;
  }
  .content {
    margin-top: 27px;
    .content-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      div {
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #000000;
        display: flex;
        margin-bottom: 11px;
        align-items: center;
      }
      img {
        width: 32px;
        height: 32px;
        // margin: 27px 0 17px;
        object-fit: contain;
        opacity: 0.68;
        border-radius: 50%;
      }
      span {
        margin-left: 24px;
      }
    }
  }
}
</style>
<script>
const {
  // 将金额转换为小数
  formatUnits,
  // 将小数转换为金额
  parseUnits,
} = require("@ethersproject/units");

export default {
  data() {
    return {
      //   进度
      plan: 0,
      removeLiquidity: null,
    };
  },
  created() {
    /* if (this.$store.state.removeLiquidity == null) {
      this.backPage();
    }
    this.removeLiquidity = this.$store.state.removeLiquidity; */
    //   console.log(JSON.stringify(this.$store.state.removeLiquidity))
    this.removeLiquidity = {
      balance: "0.057109309144671333",
      authorizationAmount: {
        type: "BigNumber",
        // hex: "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
        hex: "0x00",
      },
      token0info: {
        name: "Wrapped HT",
        address: "0x5545153ccfca01fbd7dd11c0b23ba694d9509a6f",
        symbol: "WHT",
        decimals: 18,
        chainId: 128,
        logoURI: "https://s2.coinmarketcap.com/static/img/coins/64x64/2502.png",
        info: "0.000000003427390897",
      },
      token1info: {
        name: "Heco-Peg USDTHECO Token",
        address: "0xa71edc38d189767582c38a3145b5873052c3e47a",
        symbol: "USDT",
        decimals: 18,
        chainId: 128,
        logoURI:
          "https://mdex.com/token-icons/heco/0xa71edc38d189767582c38a3145b5873052c3e47a.png",
        info: "368.649488306576626466",
      },
      checked: true,
    };
    this.removeLiquidity.authorizationAmount = formatUnits(
      this.removeLiquidity.authorizationAmount
    );
    console.log(this.removeLiquidity);
  },
  methods: {
    backPage() {
      this.$router.go(-1);
    },
    format() {
      return "";
    },
    // 授权lp
    approve() {
      let lpAddress = ''
      this.$sdk.authorization(lpAddress)
    }
  },
  computed: {
    account() {
      console.log("我是账户");
      // console.log(this.$store.state.account)
      return this.$store.state.account;
    },
  },
};
</script>
<style lang="less" scoped>
@import url("../liquidity/liquidity.less");
.supply,
.wallet-state {
  font-family: NotoSansCJKkr;
  font-size: 16px;
  font-weight: 300;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  color: #000000;
  .top {
    .header-back-icon {
      width: 32px;
      height: 32px;
    }
    .header {
      justify-items: center;
      .title {
        text-align: center;
        flex: 1;
      }
      .icon {
        display: flex;
        align-items: center;
      }
    }
  }

  .liq-listview {
    margin: 26px 64px 0px 64px;
    display: flex;
    flex-direction: column;
    .liq-listitem {
      height: 120px;
      padding: 12px 20px 20px;
      border-radius: 6px;
      background-color: @list-item-back;
    }
    .liq-title {
      color: #444444;
      font-size: 14px;
      font-weight: 300;
      height: 30px;
      line-height: 30px;
    }
    .liq-list-row {
      display: flex;
      width: 100%;
      justify-content: space-between;
      input {
        outline: none;
        border: none;
        flex: 1 1 auto;
        background-color: transparent;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0px;
        -webkit-appearance: textfield;
        -moz-appearance: textfield;
        appearance: textfield;
        width: 100%;
        height: 38px;
        font-family: NotoSansCJKkr;
        font-size: 16px;
      }
    }
    .list-item-right {
      color: #444444;
    }
    .liq-list-row:last-child {
      .layout-mt24;
      font-size: 26px;
      color: #2f303f;
    }
    .list-row-span {
      color: #000000;
      font-size: 20px;
      font-weight: 500;
      margin-right: 4px;
    }
    .list-row-max {
      width: 54px;
      height: 29px;
      margin-right: 12px;
      cursor: pointer;
    }
    .list-row-map {
      width: 34px;
      height: 34px;
      margin-right: 4px;
    }

    .liq-list-img {
      display: flex;
      align-items: center;
      > .list-block {
        padding-left: 10px;
        padding-right: 10px;
        padding-top: 5px;
        padding-bottom: 5px;
        display: flex;
        align-items: center;
        cursor: pointer;
      }
      .list-block:hover {
        border-radius: 20px;
        background-color: #e0d9eb;
      }
      img {
        border-radius: 20px;
      }
    }
    .add-btn {
      display: flex;
      justify-content: center;
      width: 100%;
      height: 50px;
      align-items: center;
    }
    .add-button {
      width: 30px;
      height: 30px;
    }
    .liq-item:last-child .add-btn {
      // height: 26px;
    }
    .liq-item:last-child .add-button {
      // display: none;
    }
  }

  .btm-liq {
    // margin-top: 0px;
  }
  .btm-liq-item {
    padding: 23px 17px 20px 20px;
    border-radius: 6px;
    border: solid 1px #d8d8d8;
    display: flex;
    flex-wrap: nowrap;
  }
  .liq-i-num {
    color: #2f303f;
    font-family: NotoSansCJKkr;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }
  .liq-i-txt {
    color: #a5a5a5;
    font-family: NotoSansCJKkr;
    font-size: 16px;
    font-weight: 500;
    text-align: center;
  }
  .btm-liq-item > div {
    flex: 1;
  }
  .submit-cxt {
    width: 100%;
    display: flex;
    justify-content: center;
    margin-top: 41px;
  }
  .submit-btn {
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
  .submit-btn-1 {
    width: 466px;
    height: 58px;
    margin: 12px 24px 0;
    padding: 14px 0 15px;
    border-radius: 6px;
    background-color: rgb(221, 226, 235);
    color: rgb(128, 142, 181);
    font-size: 20px;
    font-weight: 500;
    text-align: center;
    user-select: none;
  }
  .submit-btn:active {
    opacity: 0.65;
  }
}

.wallet-state {
  width: 466px;
  padding: 23px 33px 19px 33px;
  border-radius: 6px;
  border: solid 1px #d8d8d8;
  background-color: #ffffff;
}
.wallet-box {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 100px;
}
.w-title {
  color: #ffa402;
  font-size: 16px;
  margin-bottom: 6px;
}
.w-text {
  color: #000000;
  font-size: 16px;
  font-weight: 300;
}
.w-img-box {
  width: 64px;
  padding-right: 24px;
}
.w-item {
  margin-top: 11px;
}
</style>
