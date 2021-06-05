<template>
  <div id="block">
    <div class="top">
      <div class="header">
        <div class="title">Liquidity</div>
        <div class="icon">
          <div class="icon-1">
            <img
              class="icon-img-20"
              src="../../../assets/icons-settings@2x.png"
            />
          </div>
          <div class="icon-2">
            <img
              class="icon-img-20"
              src="../../../assets/icons-recent@2x.png"
            />
          </div>
        </div>
      </div>
      <div class="title-2 font-color1">Add liquidity to receive LP tokens</div>
      <div @click="addLiquidity" class="add-button font-color5">Add Liquidity</div>
    </div>
    <div class="bottom">
      <div class="title font-color1">
        <div>Your Liquidity</div>
        <div class="icon">
          <img src="../../../assets/icons-help@2x.png" class="icon-img-20" />
        </div>
      </div>
      <div v-if="dataList.length == 0" class="content font-color3">
        Connect to a wallet to view your liquidity.
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

              <span class="head-title font-color7"
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
              <div class="submit-btn submit-btn2 font-color4" @click="skip('remove')">Remove</div>
            </div>
          </div>
        </div>
      </div>
      <div class="value">
        <div class="value-1 font-color1">Don’t see a pool you joined? Import it.</div>
        <div class="value-2">
          Or, if you staked your LP tokens in a farm, unstake them to see them
          here
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="less" scoped>
@import url("./liquidity.less");
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
  .theme-box-back;
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
    .black-theme-img2;
    
  }
  .submit-btn2 {
    .black-theme-img1;
    
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


</style>
<script>
const {
  // 将金额转换为小数
  formatUnits,
  // 将小数转换为金额
  parseUnits,
} = require("@ethersproject/units");
import tokenInfo from "../../../../public/js/tokenlist.json";
export default {
  data() {
    return {
      /* dataList: [
        {
          imgs: [
            "/assets/icons-default-img-2@2x.png",
            "/assets/icons-default-img-3@2x.png",
          ],
          coinName: "HD/HT",
          children: [
            {
              name: "Pooled HD :",
              value: "3.22221",
              icons: ["/assets/icons-default-img-3@2x.png"],
            },
            {
              name: "Pooled HT :",
              value: "0.34256",
              icons: ["/assets/icons-default-img-2@2x.png"],
            },
            {
              name: "Your pool tokens:",
              value: "0.6134",
            },
            {
              name: "Your pool share:",
              value: "0.00%",
            },
          ],
        },
      ], */
      dataList: [],
      tokens: [],
    };
  },
  async created() {
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
      var list = await this.$sdk.getMultiBalanceOf();
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
    }
    this.tokens = [...tokenInfo.tokens];
    console.log(this.tokens);
    // console.log(tokenInfo);
    // 查询lp
    var lpInfo = await this.$sdk.getLpBalance();
    console.log(lpInfo);
    var lpList = [];
    for (var j = 0; j < lpInfo.length; j += 4) {
      // console.log(formatUnits(list[i]));
      // console.log(list[i + 1]);
      // console.log(list[i + 2]);
      // i + 2 token0
      // i + 3 token1
      var token0 = lpInfo[j + 2];
      // console.log(token0);
      var token1 = lpInfo[j + 3];
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
      lpList.push({
        balance: formatUnits(lpInfo[j]),
        authorizationAmount: lpInfo[j + 1],
        token0info: this.tokens[token0Index],
        token1info: this.tokens[token1Index],
      });
    }
    this.dataList = lpList;
    console.log(lpList);
  },
  methods: {
    skip(router){
      if(router=='add') {
        this.$router.push('/ExchangeHUB/Liquidity/Supply-Liquidity')
      }else if(router=='remove'){
        // 暂未页面
        // this.$router.push('/ExchangeHUB/Liquidity/Supply-Liquidity')
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
  },
};
</script>
