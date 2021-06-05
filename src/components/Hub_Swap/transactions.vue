<template>
  <div class="transactions">
    <div class="title font-color1">Recent transactions</div>
    <div class="content font-color1">
      Please connect your wallet to view your recent transactions
    </div>
    <div class="button font-color4" @click="close">Close</div>
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
    font-size: 24px;
    font-weight: bold;
    .basic-font;
  }
  .content {
    height: 58px;
    margin: 28px 4px 64px 0;
    font-size: 20px;
    font-weight: 300;
    
    text-align: center;
    
	.basic-font;
  }
  .button {
    cursor: pointer;
    height: 58px;
    line-height: 58px;
    margin: 64px 4px 0 0;
    border-radius: 6px;
    .black-theme-img1;
    font-size: 20px;
    font-weight: 500;
    text-align: center;
   
  }
}
</style>