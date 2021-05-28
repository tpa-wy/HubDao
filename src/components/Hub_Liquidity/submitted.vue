<template>
  <div class="submitted">
    <div class="title">Transaction submitted</div>
    <div class="img-center">
      <img src="../../../public/assets/group-2.png" alt="" />
    </div>
    <div class="hecoscan">View on HecoScan</div>
    <div class="button">Close</div>
  </div>
</template>

<script>
export default {
  name: "HubdaoSubmitted",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.submitted {
  width: 480px;
  height: 439px;
  padding: 21px 19px 32px 36px;
  border-radius: 9px;
  border: solid 1px #979797;
  background-color: #ffffff;
  .title {
    margin: 11px 139px 48px 3px;
    font-family: NotoSansCJKkr;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
  }
  .img-center {
    text-align: center;
    margin-bottom: 24px;
  }
  .hecoscan {
    text-align: center;
    font-family: NotoSansCJKkr;
    font-size: 20px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #2f303f;
    margin-bottom: 48px;
  }
  .button {
    width: 408px;
    height: 58px;
    line-height: 58px;
    margin: 48px 4px 0 0;
    padding: 6px 119.8px 15px 127.6px;
    border-radius: 6px;
    background-image: linear-gradient(to left, #44465e, #2f303f 0%);
    font-family: NotoSansCJKkr;
    font-size: 20px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    letter-spacing: normal;
    text-align: center;
    color: #ffffff;
  }
}
</style>