<template>
  <div class="wallet">
    <div class="title">Connect to a wallet</div>
    <div class="block">
      <div class="block-item">
        <img
          src="../../../public/assets/icons-default-img-5.png"
          class="icon"
        />
        <div class="font">Metamask</div>
      </div>
      <div class="block-item">
        <img
          src="../../../public/assets/icons-default-img-5.png"
          class="icon"
        />
        <div class="font">Metamask</div>
      </div>
      <div class="block-item">
        <img
          src="../../../public/assets/icons-default-img-5.png"
          class="icon"
        />
        <div class="font">Metamask</div>
      </div>
      <div class="block-item">
        <img
          src="../../../public/assets/icons-default-img-5.png"
          class="icon"
        />
        <div class="font">Metamask</div>
      </div>
      <div class="block-item">
        <img
          src="../../../public/assets/icons-default-img-5.png"
          class="icon"
        />
        <div class="font">Metamask</div>
      </div>
      <div class="block-item">
        <img
          src="../../../public/assets/icons-default-img-5.png"
          class="icon"
        />
        <div class="font">Metamask</div>
      </div>
      <div class="block-item">
        <img
          src="../../../public/assets/icons-default-img-5.png"
          class="icon"
        />
        <div class="font">Metamask</div>
      </div>
    </div>
    <div class="footer">
      <div class="font">Learn how to connect</div>
      <img src="../../../public/assets/icons-help.png" alt="" class="icon" />
    </div>
  </div>
</template>

<script>
export default {
  name: "HubdaoWallet",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.wallet {
  width: 480px;
  height: 712px;
  padding: 45px 36px 34px;
  border-radius: 9px;
  border: solid 1px #979797;
  background-color: #ffffff;
  .title {
    height: 36px;
    // margin: 0 90px 29px;
    margin-bottom: 38px;
    text-align: center;
    font-family: NotoSansCJKkr;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
  }
  .block {
    margin-bottom: 34px;
    .block-item {
      width: 408px;
      height: 64px;
      line-height: 64px;
      margin: 0 0 8px;
      padding: 11px 137px 6px 19px;
      border-radius: 6px;
      background-color: #ebebeb;
      display: flex;
      align-items: center;
      .icon {
        border-radius: 50%;
        margin-right: 22px;
      }
      .font {
        opacity: 0.8;
        font-family: NotoSansCJKkr;
        font-size: 20px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        color: #444444;
      }
    }
  }
  .footer {
    // height: 29px;
    // margin: 0 8px 0 0;
    font-family: NotoSansCJKkr;
    font-size: 20px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #444444;
    display: flex;
    align-items: center;
    justify-content: center;
    .icon {
        width: 24px;
        height: 24px;
        border-radius: 50%;
        margin-left: 8px;
    }
  }
}
</style>