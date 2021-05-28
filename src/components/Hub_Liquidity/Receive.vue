<template>
  <div class="Receive">
    <div class="title">You will Receive</div>
    <div class="money">
      <div class="left">0.9938263</div>
      <div class="right">
        <img src="../../../public/assets/icons-default-img-1.png" alt="" />
        <img
          class="two-img"
          src="../../../public/assets/icons-default-img-3.png"
          alt=""
        />
      </div>
    </div>
    <div class="title2">HT/HD Pool Tokens</div>
    <div class="content">
      Output is estimated If the price changes by more than 0.8% your
      transaction will revert.
    </div>
    <div class="block">
      <div class="block-item block-item-1">
        <div class="block-item-child block-item-1-1">
          <div class="left">HT Deposited</div>
          <div class="right">
            <img
              src="../../../public/assets/icons-default-img-1.png"
              class="icon"
              alt=""
              srcset=""
            />
            <div class="font">0.18283949</div>
          </div>
        </div>
        <div class="block-item-child block-item-1-2">
          <div class="left">HT Deposited</div>
          <div class="right">
            <img
              src="../../../public/assets/icons-default-img-3.png"
              class="icon"
              alt=""
              srcset=""
            />
            <div class="font">0.18283949</div>
          </div>
        </div>
      </div>
      <div class="block-item block-item-1">
        <div class="block-item-child block-item-1-1">
          <div class="left">HT Deposited</div>
          <div class="right">
            <img
              src="../../../public/assets/icons-default-img-1.png"
              class="icon"
              alt=""
              srcset=""
            />
            <div class="font">0.18283949</div>
          </div>
        </div>
        <div class="block-item-child block-item-1-2">
          <div class="left"></div>
          <div class="right">
            <img
              src="../../../public/assets/icons-default-img-3.png"
              class="icon"
              alt=""
              srcset=""
            />
            <div class="font">0.18283949</div>
          </div>
        </div>
      </div>
      <div class="block-item block-item-1">
        <div class="block-item-child block-item-1-1">
          <div class="left">HT Deposited</div>
          <div class="right">
            <div class="font">0.18283949</div>
          </div>
        </div>
      </div>
    </div>
    <div class="button">Confirm Supply</div>
  </div>
</template>

<script>
export default {
  name: "EducationReceive",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.Receive {
  // 临时
  // height: 562px;
  height: auto;
  padding: 21px 0 28px;
  border-radius: 9px;
  border: solid 1px #979797;
  background-color: #ffffff;
  .title {
    // width: 191px;
    height: 36px;
    margin: 11px 34px 37px 39px;
    font-family: NotoSansCJKkr;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
  }
  .money {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    margin-bottom: 43px;
    .left {
      height: 59px;
      // margin: 37px 23px 43px 39px;
      margin-left: 39px;
      margin-right: 23px;
      font-family: NotoSansCJKkr;
      font-size: 40px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #2f303f;
    }
    .right {
      position: relative;
      img {
        border-radius: 50%;
      }
      .two-img {
        position: absolute;
        z-index: 1;
        left: 33px;
        top: 0;
      }
    }
  }
  .title2 {
    height: 36px;
    margin-left: 39px;
    margin-bottom: 37px;
    // margin: 43px 6px 37px 39px;
    font-family: NotoSansCJKkr;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #2f303f;
  }
  .content {
    width: 404px;
    height: 48px;
    margin-left: 39px;
    margin-bottom: 28px;
    // margin: 37px 6px 28.5px 38px;
    font-family: NotoSansCJKkr;
    font-size: 16px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #444444;
  }
  .block {
    padding-left: 39px;
    padding-right: 32px;
    font-family: NotoSansCJKkr;
    margin-bottom: 36px;
    font-size: 16px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
    .icon {
      border-radius: 50%;
      width: 24px;
      height: 24px;
      margin-right: 7px;
    }
    .block-item-1 {
      height: 105px;
      .block-item-child {
        display: flex;
        justify-content: space-between;
        align-items: center;
        .right {
          display: flex;
          align-items: center;
        }
      }
      .block-item-1-1 {
        margin-top: 22px;
      }
      .block-item-1-2 {
        margin-top: 15px;
      }
    }
    .block-item {
      border-top: solid 1px #d8d8d8;
      padding-bottom: 20px;
    }
    .block-item:last-child {
      border-bottom: solid 1px #d8d8d8;
      // padding-bottom: 0;
      height: auto;
    }
  }
  > .button {
    width: 409px;
    height: 58px;
    margin: 0 0 0 39px;
    // padding: 14px 0 15px;
    border-radius: 6px;
    background-image: linear-gradient(to left, #ffe505, #ffc81c 0%);
    font-family: NotoSansCJKkr;
    font-size: 20px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: 58px;
    letter-spacing: normal;
    text-align: center;
    color: #010033;
    cursor: pointer;
  }
}
</style>