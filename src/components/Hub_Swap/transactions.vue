<template>
  <div class="transactions">
    <div class="title">Recent transactions</div>
    <div class="content">
      Please connect your wallet to view your recent transactions
    </div>
    <div class="button" @click="close">Close</div>
  </div>
</template>

<script>
export default {
  name: "HubdaoTransactions",
  data() {
    return {};
  },
  mounted() {},
  methods: {
    close() {
      this.$emit('close');
    }
  },
};
</script>

<style lang="less" scoped>
.transactions {
  width: 480px;
  height: 315px;
  padding: 21px 19px 26px 36px;
  border-radius: 9px;
  border: solid 1px #979797;
  .theme-box-back;
  .title {
    // width: 237px;
    height: 36px;
    margin: 11px 89px 28px 86px;
    font-family: NotoSansCJKkr;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    text-align: center;
    letter-spacing: normal;
    .font-color1;
  }
  .content {
    height: 58px;
    margin: 28px 4px 64px 0;
    font-family: NotoSansCJKkr;
    font-size: 20px;
    font-weight: 300;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    text-align: center;
    .font-color1;
  }
  .button {
    cursor: pointer;
    height: 58px;
    line-height: 58px;
    margin: 64px 4px 0 0;
    // padding: 14px 175px 15px 180px;
    border-radius: 6px;
    .black-theme-img1;
    font-family: NotoSansCJKkr;
    font-size: 20px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    .font-color4;
  }
}
</style>