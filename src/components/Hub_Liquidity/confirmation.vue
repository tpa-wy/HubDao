<template>
  <div class="confirmation">
    <div class="title">Waiting for confirmation…</div>
    <div class="loadimg">
      <img src="../../../public/assets/group-21.png" alt="" />
    </div>
    <div class="block">
      <div class="block-title">Supplying 0.333234 HT and 3HD</div>
      <div class="block-smail-title">
        Confirm this transaction in your wallet
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HubdaoConfirmation",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.confirmation {
  width: 480px;
  height: 439px;
  padding: 21px 19px 58px 39px;
  border-radius: 9px;
  border: solid 1px #979797;
  background-color: #ffffff;
  .title {
    margin: 11px 90px 62px 0;
    font-family: NotoSansCJKkr;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
  }
  .loadimg {
    text-align: center;
    margin-bottom: 65px;
  }
  .block {
    .block-title {
        margin-left: 59px;
    //   margin: 65px 59px 10px 53px;
      font-family: NotoSansCJKkr;
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #000000;
    }
    .block-smail-title {
      margin: 10px 36px 0 29px;
      font-family: NotoSansCJKkr;
      font-size: 20px;
      font-weight: 300;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      color: #727272;
    }
  }
}
</style>