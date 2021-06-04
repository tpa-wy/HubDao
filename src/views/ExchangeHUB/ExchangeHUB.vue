<template>
  <div class="ExchangeHUB">
    <div class="nav">
      <div
        class="nav-item nav-swap"
        :class="{ checked: nav == 1 }"
        @click="skipNav(1)"
      >
        Swap
      </div>
      <div
        class="nav-item nav-liquidityb"
        :class="{ checked: nav == 2 }"
        @click="skipNav(2)"
      >
        Liquidity
      </div>
      <div
        class="nav-item nav-brideg"
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
    background-color: #ebebeb;
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
      font-family: NotoSansCJKkr;
      font-size: 16px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      text-align: center;
      color: #000000;
    }
    .checked {
      cursor: pointer;
      display: inline-block;
      // height: 40px;
      // padding: 8px 28px 8px 29px;
      border-radius: 21.5px;
      background-color: #000000;
      font-family: NotoSansCJKkr;
      font-size: 16px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      text-align: center;
      color: #fff;
    }
    /* .nav-swap {
      cursor: pointer;
      display: inline-block;
      width: 101px;
      height: 40px;
      padding: 8px 28px 8px 29px;
      border-radius: 21.5px;
      background-color: #fbfbfb;
      font-family: NotoSansCJKkr;
      font-size: 16px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #010033;
    }
    .nav-liquidityb {
      cursor: pointer;
      display: inline-block;
      width: 122px;
      height: 40px;
      padding: 8px 28px 8px 29px;
      font-family: NotoSansCJKkr;
      font-size: 16px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #ffffff;
    }
    .nav-brideg {
      cursor: pointer;
      display: inline-block;
      width: 101px;
      height: 40px;
      padding: 8px 25px 8px 27px;
      border-radius: 21.5px;
      font-family: NotoSansCJKkr;
      font-size: 16px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      text-align: center;
      color: #ffffff;
    } */
  }
  >.block {
    width: 594px;
    height: 600px;
    margin: 0 auto;
    // margin: 55px 531px 185px;
    padding: 22px 39px 59px 40px;
    border-radius: 8px;
    border: solid 1px rgba(255, 242, 196, 0.31);
    background-color: #010033;
    .header {
      display: flex;
      justify-content: space-between;
      .title {
        width: 115px;
        height: 36px;
        margin: 0 136px 7px 0;
        font-family: NotoSansCJKkr;
        font-size: 24px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #ffffff;
      }
      .icon {
        display: flex;
        .icon-1 {
          background-color: #f00;
          width: 20px;
          height: 20px;
          margin-right: 25px;
        }
        .icon-2 {
          background-color: #ff0;
          width: 20px;
          height: 20px;
        }
      }
    }
    .title-2 {
      width: 192px;
      height: 24px;
      margin: 7px 59px 47px 0;
      font-family: NotoSansCJKkr;
      font-size: 16px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #ffffff;
      margin-bottom: 47px;
    }
    > .block-1 {
      width: 466px;
      height: 120px;
      margin: 47px 0 19px 24px;
      padding: 12px 21px 20px 20px;
      border-radius: 6px;
      background-color: #181742;
      .From {
        width: 41px;
        height: 24px;
        margin: 0 286px 24px 0;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #ffffff;
      }
      .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
        .currency {
          display: flex;
          align-items: center;
          .icon {
            width: 34px;
            height: 34px;
            // margin: 0 51px 0 0;
            margin-right: 13px;
            padding: 6px 7px 4px 6px;
            opacity: 0.69;
            border: solid 1px #444444;
            // background-color: #ffffff;
            background-color: #f00;
            border-radius: 50%;
          }
          .currency-select {
            cursor: pointer;
          }
        }
      }
    }

    .money {
      width: 40px;
      height: 38px;
      //   margin: 24px 287px 2px 0;
      font-family: NotoSansCJKkr;
      font-size: 26px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #a5a5a5;
    }
    > .block-2 {
      width: 466px;
      height: 120px;
      margin: 20px 0 47px 24px;
      padding: 12px 14px 14px 20px;
      border-radius: 6px;
      background-color: #181742;
      .to {
        width: 20px;
        height: 24px;
        margin: 0 190px 24px 0;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #ffffff;
      }
      .content {
        display: flex;
        align-items: center;
        justify-content: space-between;
      }
      .button-select {
        cursor: pointer;
        width: 222px;
        height: 41px;
        padding: 4px 28.4px 8px 29.6px;
        border-radius: 20.5px;
        box-shadow: 2px 2px 6px 0 rgba(1, 0, 51, 0.64);
        background-color: #323160;
        font-family: NotoSansCJKkr;
        font-size: 20px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #ffffff;
      }
    }
    .icon-xia {
      width: 17px;
      height: 21px;
      margin: 0 auto;
      background-color: #f00;
    }
  }
  .button {
    cursor: pointer;
    width: 466px;
    height: 58px;
    margin: 47px 0 0 24px;
    padding: 14px 0 15px;
    border-radius: 6px;
    background-color: #e7e7e7;
    font-family: NotoSansCJKkr;
    font-size: 20px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    color: #010033;
  }
}
// 下拉菜单
.el-dropdown-link {
  cursor: pointer;
  font-family: NotoSansCJKkr;
  font-size: 20px;
  font-weight: 500;
  font-stretch: normal;
  font-style: normal;
  line-height: normal;
  letter-spacing: normal;
  text-align: right;
  color: #ffffff;
}
.el-icon-arrow-down {
  font-size: 12px;
}
.el-dropdown {
  .el-icon-arrow-down {
    font-size: 18px;
  }
}
</style>