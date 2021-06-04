<template>
  <div class="stake">
    <div class="title">Stake LP tokens</div>
    <div class="bclok">
      <div class="one-column">
        <div class="left">Stake</div>
        <div class="right">Balance : 0.210304</div>
      </div>
      <div class="twp-column">
        <div class="left">0</div>
        <div class="right">
          <div class="icon"></div>
          <div class="font">HD-HT LP</div>
        </div>
      </div>
    </div>
    <div class="button-info">
      <div class="button button-1">Cancle</div>
      <div class="button button-2">Confirm</div>
    </div>
    <div class="footer">
      <div class="font">Get HD-HT LP</div>
      <div class="icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HubdaoStake",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.stake {
  width: 480px;
  height: 439px;
  padding: 21px 19px 26px 39px;
  border-radius: 9px;
  border: solid 1px #979797;
  .theme-box-back;
  .title {
    margin: 11px 19px 52px 0;
    font-family: NotoSansCJKkr;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    .font-color1;
  }
  .bclok {
    width: 402px;
    height: 120px;
    // margin: 52px 7px 40px 0;
    padding: 12px 17px 20px 20px;
    border-radius: 6px;
    box-shadow: 3px 3px 7px 0 #d8d8d8;
    .theme-list-back;
    .one-column {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 24px;
      font-family: NotoSansCJKkr;
      margin-bottom: 24px;
      font-size: 16px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      .font-color1;
    }
    .twp-column {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 38px;
    //   margin: 24px 196px 2px 0;
      font-family: NotoSansCJKkr;
      font-size: 26px;
      font-weight: bold;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      .font-color7;
      .right {
        display: flex;
        align-items: center;
        .icon {
          background-image: url(../../../public/assets/icons-max.png);
          background-size: 100% 100%;
          width: 54px;
          height: 29px;
          margin-right: 10px;
          cursor: pointer;
        }
      }
    }
  }
  .button-info {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .button-1 {
      .black-theme-img1;
      .font-color4;
    }
    .button-2 {
      .font-color1;
      .black-theme-img2;
    }
    .button {
      cursor: pointer;
      width: 193px;
      height: 58px;
      line-height: 58px;
      margin: 40px 16px 33px 0;
      border-radius: 6px;
      font-family: NotoSansCJKkr;
      font-size: 20px;
      font-weight: 500;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: normal;
      text-align: center;
    }
  }
  .footer {
    height: 29px;
    margin: 0 7px 0 0;
    font-family: NotoSansCJKkr;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: right;
    .font-color7;
    display: flex;
    justify-content: center;
    align-items: center;
    .icon {
      margin-left: 7px;
      width: 20px;
      height: 20px;
      //   background-image: url(../../../public/assets/icons-settings.png);
      background-size: 100% 100%;
      
    }
  }
}
</style>