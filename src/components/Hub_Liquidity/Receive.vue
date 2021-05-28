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
        <div>
          <div>HT Deposited</div>
          <div>
            <img src="" class="icon" alt="" srcset="">
            <div class="font">0.18283949</div>
          </div>
        </div>
        <div></div>
      </div>
      <div class="block-item block-item-2"></div>
      <div class="block-item block-item-3"></div>
    </div>
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
  height: 562px;
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
    .block-item-1 {
      height: 105px;
    }
    .block-item {

    }
  }
}
</style>