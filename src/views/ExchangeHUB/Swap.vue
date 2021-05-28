<template>
  <div class="swap">
    <div class="block">
      <div class="header">
        <div class="title">Exchange</div>
        <div class="icon">
          <div class="icon-1"><img src="../../../public/assets/icons-settings.png" alt=""></div>
          <div class="icon-2"><img src="../../../public/assets/icons-recent.png" alt="" srcset=""></div>
        </div>
      </div>
      <div class="title-2">Trade tokens in an instant</div>
      <div class="block-1">
        <div class="From">
          <div>From</div>
          <div>Balance : 0.210304</div>
        </div>
        <div class="content">
          <div class="money">0.0</div>
          <div class="currency">
            <div class="img">
              <img src="../../assets/icons-max.png" alt="" />
            </div>
            <img class="icon" src="../../../public/assets/icons-default-img-3.png" alt="" srcset="">
            <el-dropdown class="currency-select" @command="selectCurrency">
              <span class="el-dropdown-link">
                {{ selectedCurrency
                }}<i class="el-icon-arrow-down el-icon--right"></i>
              </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item
                  v-for="item in currencyList"
                  :key="item.currencyList"
                  :command="item.label"
                  >{{ item.name }}</el-dropdown-item
                >
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </div>
      <div class="icon-xia"></div>
      <div class="block-2">
        <div class="to">
          <div>To</div>
          <div>Balance : 0.210304</div>
        </div>
        <div class="content">
          <div class="money">0.0</div>
          <div class="button-select">Select a currency</div>
        </div>
      </div>
      <div class="button">Unlock Wallet</div>
    </div>
    <div class="rest">
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
.swap {
  // padding-top: 72px;
  width: 594px;
  margin: 0 auto;
  > .block {
    width: 594px;
    height: 600px;
    margin: 0 auto;
    // margin: 55px 531px 185px;
    padding: 22px 39px 59px 40px;
    border-radius: 8px;
    // border: solid 1px rgba(255, 242, 196, 0.31);
    background-color: #fff;
    border: solid 1px #d8d8d8;
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
    > .block-1 {
      width: 466px;
      height: 120px;
      // margin: 47px 0 19px 24px;
      margin-bottom: 19px;
      margin-left: 24px;
      padding: 12px 21px 20px 20px;
      border-radius: 6px;
      background-color: #f0f0f0;
      .From {
        // width: 41px;
        height: 24px;
        margin: 0 286px 24px 0;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #000;
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
          img {
            margin-right: 12px;
          }
          .icon {
            width: 34px;
            height: 34px;
            // margin: 0 51px 0 0;
            margin-right: 13px;
            // padding: 6px 7px 4px 6px;
            // opacity: 0.69;
            // border: solid 1px #444444;
            // background-color: #ffffff;
            // background-color: #f00;
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
      background-color: #f0f0f0;
      .to {
        // width: 20px;
        height: 24px;
        // margin: 0 190px 24px 0;
        margin-bottom: 24px;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #000;
        display: flex;
        justify-content: space-between;
        margin-right: 20px;
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
        // box-shadow: 2px 2px 6px 0 rgba(1, 0, 51, 0.64);
        // background-color: #323160;
        font-family: NotoSansCJKkr;
        font-size: 20px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: right;
        color: #000;
      }
    }
    .icon-xia {
      width: 25px;
      height: 21px;
      margin: 0 auto;
      // background-color: #f00;
      background-image: url(../../../public/assets/back-icon.png);
      background-size: 100% 100%;
      transform: rotate(-90deg);
    }
  }
  .button {
    cursor: pointer;
    width: 466px;
    height: 58px;
    margin: 47px 0 0 24px;
    padding: 14px 0 15px;
    border-radius: 6px;
    background-color: #ffe505;
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
  .rest {
    margin-bottom: 100px;
    margin-top: 21px;
    width: 594px;
    height: 113px;
    // margin: 21px 531px 111px 530.5px;
    padding: 15px 31px 14px 27px;
    border-radius: 8px;
    border: solid 1px #d8d8d8;
    background-color: #ffffff;
    > div {
      display: flex;
      justify-content: space-between;
      align-items: center;
      > div {
        // width: 108px;
        height: 24px;
        margin: 0 6px 6px 0;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: 300;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #444444;
      }
    }
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
  color: #000;
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