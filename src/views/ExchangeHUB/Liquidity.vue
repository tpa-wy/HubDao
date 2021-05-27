<template>
  <div class="Liquidity">
    <div class="block">
      <div class="top">
        <div class="header">
          <div class="title">Liquidity</div>
          <div class="icon">
            <div class="icon-1"></div>
            <div class="icon-2"></div>
          </div>
        </div>
        <div class="title-2">Add liquidity to receive LP tokens</div>
        <div class="add-button">Add Liquidity</div>
      </div>
      <div class="bottom">
        <div class="title">
          <div>Your Liquidity</div>
          <div class="icon"></div>
        </div>
        <div class="content">Connect to a wallet to view your liquidity.</div>
        <div class="value">
          <div class="value-1">Don’t see a pool you joined? Import it.</div>
          <div class="value-2">
            Or, if you staked your LP tokens in a farm, unstake them to see them
            here
          </div>
        </div>
      </div>
    </div>
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
  },
  methods: {
    selectCurrency(command) {
      console.log(command);
      this.selectedCurrency = command;
    },
  },
};
</script>

<style lang="less" scoped>
.Liquidity {
  padding-top: 72px;
  width: 594px;
  margin: 0 auto;
  > .block {
    width: 594px;
    height: 600px;
    margin: 0 auto;
    // margin: 55px 531px 185px;
    padding: 22px 0px 59px 0px;
    border-radius: 8px;
    border: solid 1px rgba(255, 242, 196, 0.31);
    background-color: #fff;
    .top {
      margin-left: 40px;
      margin-right: 40px;
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
          color: #000;
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
        height: 24px;
        margin: 7px 59px 47px 0;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #000;
        margin-bottom: 47px;
      }
      .add-button {
        cursor: pointer;
        width: 183px;
        height: 58px;
        line-height: 58px;
        margin: 40px 10px 35.2px 40px;
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
      }
    }
    .bottom {
      border-top: solid 1px #d8d8d8;
      .title {
        display: flex;
        justify-content: space-between;
        height: 27px;
        margin: 28.8px 61px 68px 40px;
        font-family: NotoSansCJKkr;
        font-size: 18px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #000;

        .icon {
          width: 20px;
          height: 20px;
          background-color: #f00;
        }
      }
      .content {
        text-align: center;
        margin: 68px 0px 74px 0;
        font-family: NotoSansCJKkr;
        font-size: 20px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #000;
      }
      .value {
        margin-left: 30px;
        color: #000;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        .value-2 {
          margin-top: 15px;
        }
      }
    }
  }
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