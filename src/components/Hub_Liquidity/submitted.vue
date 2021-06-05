<template>
  <div class="submitted">
    <div class="title font-color1">Transaction submitted</div>
    <div class="img-center">
      <img src="../../../public/assets/group-2.png" alt="" />
    </div>
    <div class="hecoscan font-color7">View on HecoScan</div>
    <div class="button font-color4">Close</div>
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
  .basic-font;
  .theme-box-back;
  .title {
    margin: 11px 139px 48px 3px;
    font-size: 24px;
    font-weight: bold;
    
  }
  .img-center {
    text-align: center;
    margin-bottom: 24px;
  }
  .hecoscan {
    text-align: center;
    font-size: 20px;
    font-weight: bold;
    margin-bottom: 48px;
  }
  .button {
    width: 408px;
    height: 58px;
    line-height: 58px;
    margin: 48px 4px 0 0;
    padding: 6px 119.8px 15px 127.6px;
    border-radius: 6px;
    .black-theme-img1;
   
    font-size: 20px;
    font-weight: 500;
    
    text-align: center;
    
  }
}
</style>