<template>
  <div class="swap">
    <div id="block">
      <div class="header">
        <div class="title font-color1">Exchange</div>
        <div class="icon">
          <div class="icon-1" @click="is_setting = !is_setting">
            <img src="../../../public/assets/icons-settings.png" alt="" />
          </div>
          <div class="icon-2" @click="is_transactions = !is_transactions">
            <img
              src="../../../public/assets/icons-recent.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
      <div class="title-2 font-color1">Trade tokens in an instant</div>
      <div class="block-1">
        <div class="From font-color1">
          <div>From</div>
          <div v-show="account()">Balance : {{ fromcheckedBlock.info }}</div>
        </div>
        <div class="content">
          <div class="money font-color3">
            <input
              v-model="fromValue"
              inputmode="decimal"
              title="Token Amount"
              autocomplete="off"
              autocorrect="off"
              type="text"
              pattern="^[0-9]*[.,]?[0-9]*$"
              placeholder="0.0"
              minlength="1"
              maxlength="79"
              spellcheck="false"
              value=""
            />
          </div>
          <div class="currency  font-color1">
            <div
              class="img"
              v-show="account()"
              @click="fromValue = fromcheckedBlock.info"
            >
              <img src="../../assets/icons-max.png" alt="" />
            </div>
            <div class="block" @click="is_show = !is_show">
              <img
                class="icon"
                :src="fromcheckedBlock.logoURI"
                alt=""
                srcset=""
              />
              <div class="font">{{ fromcheckedBlock.symbol }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="icon-xia"></div>
      <div class="block-2">
        <div class="to font-color1">
          <div>To</div>
          <div v-show="tocheckedBlock.symbol != undefined">
            Balance : {{ tocheckedBlock.info }}
          </div>
        </div>
        <div class="content">
          <div class="money">
            <input
              v-model="toValue"
              inputmode="decimal"
              title="Token Amount"
              autocomplete="off"
              autocorrect="off"
              type="text"
              pattern="^[0-9]*[.,]?[0-9]*$"
              placeholder="0.0"
              minlength="1"
              maxlength="79"
              spellcheck="false"
              value=""
            />
          </div>
          <div
            class="button-select font-color1"
            @click="is_show2 = !is_show2"
            v-show="tocheckedBlock.symbol == undefined"
          >
            Select a currency
          </div>
          <div class="currency" v-show="tocheckedBlock.symbol != undefined">
            <div class="block font-color1" @click="is_show2 = !is_show2">
              <img
                class="icon"
                :src="tocheckedBlock.logoURI"
                alt=""
                srcset=""
              />
              <div class="font">{{ tocheckedBlock.symbol }}</div>
            </div>
          </div>
        </div>
      </div>
      <div class="button font-color5">Unlock Wallet</div>
    </div>
    <div class="rest font-color2">
      <div>
        <div>Maximum sold</div>
        <div>0.0000000 HT</div>
      </div>
      <div>
        <div>Maximum sold</div>
        <div></div>
      </div>
      <div>
        <div>Maximum sold</div>
        <div>0.0000000 HT</div>
      </div>
    </div>
    <!-- 选择货币 -->
    <div class="select-currency" v-show="is_show">
      <Dialog :is_close.sync="is_show">
        <SelectCurrency
          :tokens="tokens"
          :item="item"
          @SelectCurrency="SelectCurrency"
        ></SelectCurrency>
      </Dialog>
    </div>
    <div class="select-currency" v-show="is_show2">
      <Dialog :is_close.sync="is_show2">
        <SelectCurrency
          :tokens="tokens"
          :item="item"
          @SelectCurrency="SelectCurrency2"
        ></SelectCurrency>
      </Dialog>
    </div>
    <!-- 设置 -->
    <div class="settings" v-show="is_setting">
      <Dialog :is_close.sync="is_setting">
        <Setting></Setting>
      </Dialog>
    </div>
    <!-- 最近的交易 -->
    <div class="transactions" v-show="is_transactions">
      <Dialog :is_close.sync="is_transactions">
        <Transactions @close="close"></Transactions>
      </Dialog>
    </div>
  </div>
</template>

<script>
import SelectCurrency from "../../components/Hub_Swap/token";
import Setting from "../../components/Hub_Swap/setting";
import Transactions from "../../components/Hub_Swap/transactions";
import tokenInfo from "../../../public/js/tokenlist.json";
const {
  // 将金额转换为小数
  formatUnits,
  // 将小数转换为金额
  parseUnits,
} = require("@ethersproject/units");

export default {
  components: { SelectCurrency, Setting, Transactions },
  name: "EducationSwap",
  data() {
    return {
      // 弹框是否显示
      is_show: false,
      is_show2: false,
      // 设置是否显示
      is_setting: false,
      is_transactions: false,
      // 当前选择的数据
      fromcheckedBlock: null,
      tocheckedBlock: {},
      fromValue: "",
      toValue: "",
      tokens: [],
      item: {},
    };
  },
  created() {
    this.fromcheckedBlock = tokenInfo.tokens[0];
  },
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
    this.fromcheckedBlock = tokenInfo.tokens[0];
    this.tokens = [...tokenInfo.tokens];
    // console.log(this.tokens);
    // console.log(tokenInfo);
  },
  methods: {
    SelectCurrency(Currency) {
      this.is_show = false;
      this.fromValue = "";
      this.fromcheckedBlock = Currency;
    },
    SelectCurrency2(Currency) {
      console.log(Currency);
      this.is_show2 = false;
      this.toValue = "";
      this.tocheckedBlock = Currency;
    },
    close() {
      this.is_transactions = false;
    },
    account() {
      return this.$store.state.account;
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
.swap {
  // padding-top: 72px;
  width: 594px;
  margin: 0 auto;
  > #block {
    width: 594px;
    height: 600px;
    margin: 0 auto;
    // margin: 55px 531px 185px;
    padding: 22px 39px 59px 40px;
    border-radius: 8px;
    // border: solid 1px rgba(255, 242, 196, 0.31);
    .theme-box-back;
    .pink-border-color3;
    .header {
      display: flex;
      justify-content: space-between;
      .title {
        width: 115px;
        height: 36px;
        margin: 0 136px 7px 0;
        font-size: 24px;
        font-weight: bold;
        .basic-font;
        
      }
      .icon {
        display: flex;
        .icon-1 {
          width: 20px;
          height: 20px;
          margin-right: 25px;
          cursor: pointer;
        }
        .icon-2 {
          width: 20px;
          height: 20px;
          cursor: pointer;
        }
      }
    }
    .title-2 {
      height: 24px;
      margin: 7px 59px 47px 0;
      font-size: 16px;
      font-weight: 300;
      .basic-font;
      margin-bottom: 47px;
    }
    > .block-1 {
      width: 466px;
      height: 120px;
      // margin: 47px 0 19px 24px;
      margin: 20px auto 19px auto;
      padding: 12px 21px 20px 20px;
      border-radius: 6px;
      .theme-list-back;
      .From {
        // width: 41px;
        height: 24px;
        margin: 0 286px 24px 0;
        font-size: 16px;
        font-weight: 500;
        .basic-font;
        display: flex;
        justify-content: space-between;
        margin-right: 20px;
      }
      .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .currency {
          display: flex;
          align-items: center;
          font-size: 20px;
          font-weight: 500;
          
          text-align: right;
          .basic-font;
          .font {
            cursor: pointer;
          }
          img {
            display: flex;
            align-items: center;
            margin-right: 12px;
            border-radius: 15px;
            cursor: pointer;
          }
          .block {
            display: flex;
            align-items: center;
            border-radius: 20px;
            padding-top: 5px;
            padding-bottom: 5px;
            padding-left: 10px;
            padding-right: 10px;
            cursor: pointer;
            &:hover {
              background-color: #e0d9eb;
            }
          }
          .icon {
            width: 34px;
            height: 34px;
            margin-right: 13px;
            border-radius: 50%;
          }
          .currency-select {
            cursor: pointer;
          }
        }
      }
    }

    .money {
      height: 38px;
      font-size: 26px;
      .basic-font;
      font-weight: bold;
      flex: 1;
      input {
        outline: none;
        border: none;
        flex: 1 1 auto;
        background-color: transparent;
        font-size: 16px;
        white-space: nowrap;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 0px;
        appearance: textfield;

        width: 100%;
        height: 38px;
        font-family: NotoSansCJKkr;
        font-size: 16px;
      }
    }
    > .block-2 {
      width: 466px;
      height: 120px;
      // margin: 20px 0 47px 24px;
      margin: 20px auto 0 auto;
      padding: 12px 14px 14px 20px;
      border-radius: 6px;
      background-color: #f0f0f0;
      .to {
        // width: 20px;
        height: 24px;
        // margin: 0 190px 24px 0;
        margin-bottom: 24px;
        font-size: 16px;
        font-weight: 500;
        .basic-font;
       
        display: flex;
        justify-content: space-between;
        margin-right: 20px;
      }
      .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }

      .button-select:hover {
        background-color: rgb(224, 217, 235);
      }
      .button-select {
        cursor: pointer;
        width: 222px;
        height: 41px;
        line-height: 41px;
        // padding: 4px 28.4px 8px 29.6px;
        border-radius: 20.5px;
        font-size: 20px;
        font-weight: 500;
        text-align: center;
        .basic-font;
      }
      .block {
        display: flex;
        align-items: center;
        border-radius: 20px;
        padding-top: 5px;
        padding-bottom: 5px;
        padding-left: 10px;
        padding-right: 10px;
        cursor: pointer;
        font-size: 20px;
        font-weight: 500;
        
        text-align: right;
        .basic-font;
        &:hover {
          background-color: #e0d9eb;
        }
      }
      .icon {
        width: 34px;
        height: 34px;
        margin-right: 13px;
        border-radius: 50%;
      }
      .currency-select {
        cursor: pointer;
      }
    }
    .icon-xia {
      width: 25px;
      height: 21px;
      margin: 0 auto;
      background-image: url(../../../public/assets/back-icon.png);
      background-size: 100% 100%;
      transform: rotate(-90deg);
    }
  }
  .button {
    cursor: pointer;
    width: 466px;
    height: 58px;
    line-height: 58px;
    margin: 47px auto 0 auto;
    border-radius: 6px;
    background-color: #ffe505;
    font-size: 20px;
    font-weight: 500;
    .basic-font;
  }
  .rest {
    margin-bottom: 100px;
    margin-top: 21px;
    width: 594px;
    height: 113px;
    // margin: 21px 531px 111px 530.5px;
    padding: 15px 31px 14px 27px;
    border-radius: 8px;
    .pink-border-color3;
    .theme-box-back;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > div {
        // width: 108px;
        height: 24px;
        margin: 0 6px 6px 0;
        
        font-size: 16px;
        font-weight: 300;
        .basic-font;
      }
    }
  }
}
</style>