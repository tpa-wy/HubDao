<template>
  <div class="ExchangeHUB">
    <div class="nav">
      <div
        class="nav-item nav-swap font-color1"
        :class="{ checked: nav == 1 }"
        @click="skipNav(1)"
      >
        Swap
      </div>
      <div
        class="nav-item font-color1 nav-liquidityb"
        :class="{ checked: nav == 2 }"
        @click="skipNav(2)"
      >
        Liquidity
      </div>
      <div
        class="nav-item font-color1 nav-brideg"
        :class="{ checked: nav == 3 }"
        @click="skipNav(3)"
      >
        Bridge
      </div>
    </div>
    <router-view />
  </div>
</template>

<script>
export default {
  name: "EducationSwap",
  data() {
    return {
      // 货币列表
      currencyList: [],
      // 当前选中的货币
      selectedCurrency: "",
      nav: 1,
    };
  },
  mounted() {
    //   设置货币列表
    this.currencyList = [
      {
        name: "HT",
        label: "HT",
      },
      {
        name: "BTC",
        label: "BTC",
      },
    ];
    if (this.currencyList.length >= 1) {
      this.selectedCurrency = this.currencyList[0].label;
    }
    var router = this.$route.path;
    if (router == "/ExchangeHUB/Liquidity" || router == "/ExchangeHUB/Liquidity/Supply-Liquidity") {
      this.nav = 2;
    } else if (router == "/ExchangeHUB/Bridge") {
      this.nav = 3;
    }
  },
  methods: {
    selectCurrency(command) {
      console.log(command);
      this.selectedCurrency = command;
    },
    // 跳转Nav导航
    skipNav(nav) {
      var router = "Bridge";
      if (nav == 1) {
        router = "Swap";
      } else if (nav == 2) {
        router = "Liquidity";
      }
      // 临时
      if(router=="Bridge"){
        return false
      }
      this.nav = nav;
      this.$router.push('/ExchangeHUB/'+router);
    },
  },
};
</script>

<style lang="less" scoped>
.ExchangeHUB {
  padding-top: 72px;
  width: 594px;
  margin: 0 auto;
  // background-color: #0f0;
  // height: 500px;
  .nav {
    width: 350px;
    margin: 0 auto;
    .theme-pink-back1;
    border-radius: 125px;
    margin-bottom: 57px;
    display: flex;
    justify-content: space-between;
    align-items: center;
      height: 40px;
    .nav-item {
      cursor: pointer;
      display: flex;
      align-items: center;
      //   width: 122px;
      // line-height: 40px;
      padding: 8px 28px 8px 29px;
      
      font-size: 16px;
      font-weight: 300;
      .basic-font;
      text-align: center;
      
    }
    .checked {
      cursor: pointer;
      display: inline-block;
      // height: 40px;
      // padding: 8px 28px 8px 29px;
      border-radius: 21.5px;
      
      font-size: 16px;
      font-weight: bold;
      .basic-font;
      text-align: center;
      color: @f4;
      .theme-black-back;
    }
   
  }
  
}
</style>