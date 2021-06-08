<template>
  <div id="block">
    <div class="top">
      <div class="header">
        <div class="title">Liquidity</div>
        <div class="icon">
          <div class="icon-1" @click="is_setting = !is_setting">
            <img src="../../../../public/assets/icons-settings.png" alt="" />
          </div>
          <div class="icon-2" @click="is_transactions = !is_transactions">
            <img
              src="../../../../public/assets/icons-recent.png"
              alt=""
              srcset=""
            />
          </div>
        </div>
      </div>
      <div class="title-2">Add liquidity to receive LP tokens</div>
      <div @click="addLiquidity" class="add-button">Add Liquidity</div>
    </div>
    <div class="bottom" v-loading="loading">
      <div class="title">
        <div>Your Liquidity</div>
        <div class="icon">
          <img src="../../../assets/icons-help@2x.png" class="icon-img-20" />
          <div class="hover">
            No Content No Content No Content No Content No Content No Content No
            Content No Content No Content No Content
          </div>
        </div>
      </div>
      <div v-if="!account" class="content">
        Connect to a wallet to view your liquidity.
      </div>
      <div v-if="account && dataList.length == 0 && !loading" class="content">
        No liquidity found.
      </div>
      <div v-if="dataList.length !== 0" class="content-list">
        <div
          v-for="(item, i) in dataList"
          :key="item.dataList"
          @click="onTap(item, i)"
          class="content-item"
        >
          <div class="content-i-head">
            <div class="content-i-img">
              <img :src="item.token0info.logoURI" class="head-img" />
              <img :src="item.token1info.logoURI" class="head-img" />

              <span class="head-title"
                >{{ item.token0info.symbol }}/{{ item.token1info.symbol }}</span
              >
            </div>
            <div>
              <img
                :class="
                  'list-row-down ' +
                  (item.checked ? 'content-icon-down' : 'content-icon-upper')
                "
                src="/assets/down-icon.png"
              />
            </div>
          </div>
          <!-- v-if="item.checked && item.children.length !== 0" -->
          <div @click.stop="" v-if="item.checked" class="content-i-box">
            <!-- 
              v-for="(cItem, indx) in item.children"
              :key="indx"
           -->
            <div class="content-i-card">
              <!-- <div class="content-i-name">{{ cItem.name }}</div>
              <div class="content-i-value">
                <span>{{ cItem.value }}</span>
                <img
                  v-for="(icon, imgindex) in cItem.icons"
                  :key="imgindex"
                  :src="icon"
                  alt=""
                />
              </div> -->
            </div>

            <div class="submit-group">
              <div class="submit-btn submit-btn1" @click="skip('add')">Add</div>
              <div class="submit-btn submit-btn2" @click="skip('remove', item)">
                Remove
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="value">
        <div class="value-1">Don’t see a pool you joined? Import it.</div>
        <div class="value-2">
          Or, if you staked your LP tokens in a farm, unstake them to see them
          here
        </div>
      </div>
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
<style lang="less" scoped>
@import url("./liquidity.less");
/* .bottom {
  position: relative;
} */
.content-list {
  margin: 21px 40px 17px;
  .content-item {
    margin-bottom: 20px;
  }
}
.content-item {
  padding: 24px 18px 23px 19px;
  border-radius: 6px;
  box-shadow: 2px 2px 4px 0 #e7e7e7;
  border: solid 1px #d8d8d8;
  background-color: #ffffff;
}
.submit-group {
  display: flex;
  justify-content: space-between;
  .submit-btn {
    width: 232px;
    height: 48px;
    margin: 30px 18px 0px 18px;
    cursor: pointer;
    border-radius: 6px;
    font-size: 20px;
    font-weight: 500;
    line-height: 48px;
    text-align: center;
  }
  .submit-btn:hover {
    opacity: 0.89;
  }
  .submit-btn1 {
    font-weight: 500;
    background-image: linear-gradient(to left, #ffe505, #ffc81c 0%);
  }
  .submit-btn2 {
    background-image: linear-gradient(to left, #44465e, #2f303f 0%);
    color: #ffffff;
  }
}

.content-i-head,
.content-i-card {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.content-i-card {
  margin-bottom: 10px;
}
.content-i-img {
  .content-i-head;
}

.content-icon-down {
  transform: rotate(180deg);
  transition: transform 0.2s linear;
}
.content-icon-upper {
  transform: rotate(360deg);
  transition: transform 0.2s linear;
}
.content-i-box {
  padding-top: 34px;
}
.content-i-value {
  display: flex;
  align-items: center;
}
.content-i-value > img {
  width: 20px;
  height: 20px;
  margin-left: 12px;
}

.content-i-name {
  color: #2f303f;
  font-size: 16px;
  .content-i-value > span {
    font-size: 16px;
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
import tokenInfo from "../../../../public/js/tokenlist.json";
import Setting from "../../../components/Hub_Swap/setting";
import Transactions from "../../../components/Hub_Swap/transactions";
// 引入Loading
export default {
  components: { Setting, Transactions },
  data() {
    return {
      dataList: [],
      tokens: [],
      loading: null,
      // 设置是否显示
      is_setting: false,
      is_transactions: false,
    };
  },
  async created() {
    // 获取当前HT的余额
    if (await this.$sdk.getAddress()) {
      this.loading = true;
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
      var list = await this.$sdk.getMultiBalanceOf();
      for (var i = 0; i < list.length; i += 2) {
        // console.log(formatUnits(list[i]))
        let money = formatUnits(list[i]);
        if (formatUnits(list[i]) == "0.0") {
          money = "0";
        }
        this.$set(tokenInfo.tokens[i / 2], "info", money);
        this.$set(tokenInfo.tokens[i / 2], "authorization", list[i + 1]);
        // tokenInfo.tokens[i].info = formatUnits(list[i]);
        // console.log(tokenInfo.tokens[i].info)
      }
      // console.log(tokenInfo);
      // 查询lp
      this.getLpBalance();
    }
    this.tokens = [...tokenInfo.tokens];
    console.log(this.tokens);
    const ethereum = window.ethereum;
    ethereum.on("chainChanged", (_chainId) => {
      var chainId = Number(_chainId);
      this.network = chainId;
      console.log("切换了网络");
      // window.location.reload();
      this.dataList = [];
    });
  },
  methods: {
    close() {
      this.is_transactions = false;
    },
    skip(router, params) {
      if (router == "add") {
        this.$router.push("/ExchangeHUB/Liquidity/Supply-Liquidity");
      } else if (router == "remove") {
        this.$store.commit("setremoveLiquidity", params);
        this.$router.push("/ExchangeHUB/Liquidity/remove-Liquidity");
      }
    },
    addLiquidity() {
      this.$router.push({
        path: "/ExchangeHUB/Liquidity/Supply-Liquidity",
      });
    },
    onTap(item, i) {
      // let obj = this.dataList;
      // console.log("obj[i]", obj[i]);
      // this.dataList[i].checked = !item.checked;
      this.$set(this.dataList[i], "checked", !this.dataList[i].checked);
    },
    async getLpBalance() {
      console.log("激活了我");
      var lpInfo = await this.$sdk.getLpBalance();
      console.log('lpInfo------------')
      console.log(lpInfo)
      for (var j = 0; j < lpInfo.length; j++) {
        if (lpInfo[j].balance > 0) {
          var token0 = lpInfo[j].token0;
          // console.log(token0);
          var token1 = lpInfo[j].token1;
          // console.log(token1);
          // token0.
          var token0Index = this.tokens.findIndex(
            (item) => item.address.toLowerCase() == token0.toLowerCase()
          );
          var token1Index = this.tokens.findIndex(
            (item) => item.address.toLowerCase() == token1.toLowerCase()
          );
          // console.log(token0Index);
          // console.log(token1Index);
          /* lpList.push({
            balance: formatUnits(lpInfo[j]),
            authorizationAmount: lpInfo[j + 1],
            token0info: this.tokens[token0Index],
            token1info: this.tokens[token1Index],
          }); */
          lpInfo[j].token0info = this.tokens[token0Index]
          lpInfo[j].token1info = this.tokens[token1Index]
        }
      }
      
      console.log('--------------------')
      console.log(lpInfo);
      this.dataList = lpInfo;
      this.loading = false;
    },
  },
  watch: {
    account(newValue, oldValue) {
      if(oldValue == null){
        return false
      }
      this.$sdk.getAddress().then((res) => {
        console.log(res);
        if (res) {
          this.loading = true;
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
                "data:image/png;base64,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",
            };
          });

          this.$sdk
            .getMultiBalanceOf()
            .then((list) => {
              this.loading = false;
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
            .catch((error) => {
              this.loading = false;
            });

          this.tokens = [...tokenInfo.tokens];
          this.getLpBalance();
        }
      });
    },
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
