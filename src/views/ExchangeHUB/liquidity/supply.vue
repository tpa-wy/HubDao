<template>
  <div>
    <div class="block">
      <div class="supply">
        <div class="top">
          <div class="header">
            <img
              @click="backPage"
              class="header-back-icon"
              src="../../../assets/back-icon.png"
            />

            <div class="title">Liquidity</div>
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

        <!-- 数据列表 -->
        <div class="liq-listview">
          <div v-for="item in 2" :key="item" class="liq-item">
            <div class="liq-listitem">
              <div class="liq-list-row">
                <div>Input</div>
                <div class="list-item-right">Balance : 0.210304</div>
              </div>
              <div class="liq-list-row">
                <div>0.0530543</div>
                <div class="liq-list-img">
                  <img
                    class="list-row-max"
                    src="../../../assets/icons-max@2x.png"
                  />
                  <img
                    class="list-row-map"
                    src="../../../assets/icons-default-img-2@2x.png"
                  />
                  <span class="list-row-span">HT</span>
                  <img
                    class="list-row-down"
                    src="../../../assets/down-icon.png"
                  />
                </div>
              </div>
            </div>

            <div class="add-btn">
              <img class="add-button" src="../../../assets/add-icon.png" />
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
            <div class="submit-btn" @click="addLiquidity">Approve</div>
            <!-- <div class="submit-btn" @click="addLiquidity">Supply</div> -->
          </div>
        </div>
      </div>
    </div>

    <div class="wallet-box">
      <div class="wallet-state">
        <div class="w-title">LP TOKENS IN YOUR WALLET</div>

        <div class="fx-aj-cs w-item">
          <div class="w-img-box fx-box">
            <img class="head-img" src="/assets/icons-default-img-2@2x.png" />
            <img class="head-img" src="/assets/icons-default-img-3@2x.png" />
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

<script>
const {
  // 将金额转换为小数
  formatUnits,
  // 将小数转换为金额
  parseUnits,
} = require("@ethersproject/units");
import tokenInfo from "../../../../public/js/tokenlist.json";
export default {
  async mounted() {
    // 获取当前HT的余额
    if (await this.$sdk.getAddress()) {
      // 获取HT的余额
      this.item = {
        name: "HT",
        // wht
        info: formatUnits(await this.$sdk.getHTCurrency()),
        address: "",
        symbol: "HT",
        decimals: 18,
        chainId: 128,
        logoURI:
          "data:image/png;base64,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",
      };
      this.$sdk
        .getMultiBalanceOf()
        .then((list) => {
          // console.log(tokenInfo.tokens)
          console.log("list", list);
          for (var i = 0; i < list.length; i += 2) {
            // console.log(formatUnits(list[i]))
            let money = formatUnits(list[i]);
            if (formatUnits(list[i]) == "0.0") {
              money = "0";
            }
            this.$set(tokenInfo.tokens[i / 2], "info", money);
            // tokenInfo.tokens[i].info = formatUnits(list[i]);
            // console.log(tokenInfo.tokens[i].info)
          }
        })
        .catch((error) => console.error(error));
    }

    this.tokens = [...tokenInfo.tokens];
    // console.log(this.tokens);
    // console.log(tokenInfo);
  },
  methods: {
    // 添加流动性
    addLiquidity() {
      console.log("添加流动性");
      /* this.$sdk
        .addLiquidityaETH(
          "0xa71edc38d189767582c38a3145b5873052c3e47a",
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
          "0.16",
          "0.01"
        )
        .then((res) => console.log(res))
        .catch((error) => console.log(error)); */
      /* this.$sdk
        .addLiquidity(
          "0xa71edc38d189767582c38a3145b5873052c3e47a", // usdt合约
          "0x25D2e80cB6B86881Fd7e07dd263Fb79f4AbE033c", // mdx合约
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", // usdt的授权金额
          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff", // usdt的授权金额
        //   "0x00", // mdx的授权金额
          "0.01", // usdt的金额
          "0.0039390087" // mdx的金额
        )
        .then((res) => console.log(res))
        .catch((error) => console.log(error)); */
    },
    backPage() {
      this.$router.go(-1);
    },
  },
  watch: {
    account(newValue, oldValue) {
      if (oldValue == "") {
        return false;
      }
      console.log("账号变化");
      this.$sdk.getAddress().then((res) => {
        // console.log(res);
        if (res) {
          // 获取HT的余额
          this.$sdk.getHTCurrency().then((res) => {
            this.item = {
              name: "HT",
              // wht
              info: formatUnits(res),
              address: "",
              symbol: "HT",
              decimals: 18,
              chainId: 128,
              logoURI:
                "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAABBVBMVEUAAAArNVkpL2gpL2k1PW0qL2kqL2kpL2kpL2gpMGcqL2kpL2gqMGooMGgqMGkrL2cpMGopMGkoLWUqMGoqMWorMGsqMGoqMGoqMWoqMGsqL2grL2koMGkoL2cpL2ckMG0qMGn///8tM2v8/P0rMWr9/v4sMm0bIl8rMWstNHEeJGAtM3AmLGYjKWQgJ2IoLmg3PHLx8fXr6/DT1OBrcJcwNm3l5u3c3eaEh6hDSXs7QHX39/rIydmVmLViZpFQVYTu7/O8vtCtr8Wlp8CforyZnLeMj694fKBZXorX2eTNztzExdW3uMxeYo18gKNxdZtITX8/RXixtMhbYIzf4Ojf3+imqcHTHlvUAAAAIHRSTlMAAv36BI/369cow7qpYV0W0s8ahvHnrXh3bWtBPy2HFRWOmMAAAAStSURBVFjDjVcHW9swELUSjzDDaqHbsiVHiUcIAUIIbRgtBbqg6///lJ4sVNk6F6p88BmT9/RuSXcOXsSVvxZWvaVO4IehH3SWvNUFAi/lPx5fBL74wlv3kyQRLIQlBDz6694LwJP/gW/srCX9JGy1W62wXC14DOHV2vbGYxSEOBubQZpIhLXgVZIGm134zkPbk2dP+qyKZjUOkT55Rowr8PavFlPRrkBYVrDQolh8pUVg61f8pKY9Ghzt9yLLksRfafYEIV7K6qZHvYv4togsZ4SpR0gD3F3u6+2Nggs6iYbInf1llxAbT57227bnxeCM0w9ghLXa/aeuQ6zkW8Z48OGYxrNpzjDDsuNWGVzHa8Tv7tGYXoAEzOABqIJfSTE+ZMWcU85HxxnDDOmK4xr8gm/7TwXhK43h8xVLAE/6Cw7RDiCLKcbLIHyWBPwTZBNmSBYBeJ9Bz5UDsAtOKYfPaFfagN3wXEkg5E0gGgX0PoIACgxfCtEgQQRdQkoBm0YACiKl8HOknIAkvFYSuoHiRwL2YfOS4H0jQSi2uo6szW0cQlXHExorgu8DRYBCuSND6XaSZg98AKgiOBuIRoKkI+Pwshk/+BIDXhMoBTiUL8EFXpMFUX68R/k9Adc+wDZ4YMF6gwKWiTHgtYJvkqAxmdZkFjc5MD8DnFqc75WJNGQhXpDPq1gAY8W5xGsBb6UAcZCLBgmrjpe0mwNQE8Dy6Xg+iHAcPGdJKUBFaAR87EXw7ogeTnOBFCw5HbsORDGfce1AkwQTTq8j2w8t0XEChlxwTXnFADhOQMA3ymP6G4VTBI6PDHhrDADQO7CchWwCpDGUpc3gO9YL8BYYYEVAeiCWf53g89VBAt5rAQpRptXxaUnK6Q90MlgmsOGBTGHtgNO7XEjS77ouz3uRbUIg6jWkDgGTw+pgiBUjPbQCwQIdRmMBj//iPw8idTvwv6LmOauH0UokVnyisTZgdJcxyXlODec+cNYSyUplFS8TAUl5pTXh41Gmsiom48PDewJOT2URKk2G4FIRmGJS5YwJ9J0oiit4gRWYcnbXkhbKY3UbDIQMyzmqrIqAddc60oQUbCyQIRhVFHCZ2daRpg5VdBRwOs6YzguDn00zZh2qxO2YOADgnb5NTgpmlRaN+biO77jybt9J28iLgLrJmb6gURC0BdsAJ053S+Bq5nTCyuI8qZ5us7uqArhd1e3+Wl+uqvJGnEuCsjFhhSbQlyS+XAnpyuvdSLiksXa4NkGX0kHGqtf7G0Jwg8HC4VhiYtnfKTptQHwFlKjBUC1O0qqeSSMAcfqTlX2WTixuJVGqWxxgqDVZIPtqVjJAnwx0N/ddRgx4q8lycZunGUCDCiQkRklGD38Avt7mEdRoGobbsUwbKUEVQ3yxa+xHjSZudaM8vNyj9NfBEFIruqaTeS+LHmp1QU292RZh7/joZCQjKYrpzW0vYlazTcjD7T6Lsl6+CwpkboVDgdv9xoEjBAZDwbKheqpPTswMHGjk2aqPPApnjzxb1siDhi5DgVdt6MLLlWOfocC7sz4a+5CI7sOD5wbeHo++2/8afXfQ6PvY8C1KV6Lh+7H17/G/Af8HPNioO7WQjZgAAAAASUVORK5CYII=",
            };
          });

          this.$sdk
            .getMultiBalanceOf()
            .then((list) => {
              // console.log(tokenInfo.tokens)
              // console.log("list", list);
              for (var i = 0; i < list.length; i += 2) {
                // console.log(formatUnits(list[i]))
                let money = formatUnits(list[i]);
                if (formatUnits(list[i]) == "0.0") {
                  money = "0";
                }
                this.$set(tokenInfo.tokens[i / 2], "info", money);
                // tokenInfo.tokens[i].info = formatUnits(list[i]);
                // console.log(tokenInfo.tokens[i].info)
              }
            })
            .catch((error) => console.error(error));

          this.tokens = [...tokenInfo.tokens];
        }
      });
    },
  },
};
</script>
<style lang="less" scoped>
@import url("./liquidity.less");
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
      .title {
        text-align: center;
      }
    }
  }

  .liq-listview {
    margin: 57px 64px 0px 64px;
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
      justify-content: space-between;
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
    }
    .list-row-map {
      width: 34px;
      height: 34px;
      margin-right: 4px;
    }

    .liq-list-img {
      display: flex;
      align-items: center;
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
      height: 26px;
    }
    .liq-item:last-child .add-button {
      display: none;
    }
  }

  .btm-liq {
    margin-top: 0px;
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
