<template>
  <div class="rol">
    <div class="title font-color1">ROI</div>
    <div class="table">
      <div class="th font-color6">
        <div>TIMEFRAME</div>
        <div>ROI</div>
        <div>HD PER $1,000</div>
      </div>
      <div class="td font-color8">
        <div>1d</div>
        <div>0.23%</div>
        <div>0.13</div>
      </div>
      <div class="td font-color8">
        <div>1d</div>
        <div>0.23%</div>
        <div>0.13</div>
      </div>
      <div class="td font-color8">
        <div>1d</div>
        <div>0.23%</div>
        <div>0.13</div>
      </div>
      <div class="td font-color8">
        <div>1d</div>
        <div>0.23%</div>
        <div>0.13</div>
      </div>
    </div>
    <div class="content font-color1">
      Calculated base on current rates. Compounding 288x daily. Rates are
      estimateds provided for your convenience only, and by no means represent
      guaranteed returns.
    </div>
    <div class="footer">
      <div class="font font-color7">Get HD</div>
      <div class="icon"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HubdaoRol",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.rol {
  width: 480px;
  height: 516px;
  padding: 21px 19px 29px 36px;
  border-radius: 9px;
  border: solid 1px #979797;
  .basic-font;
  .theme-box-back;
  .title {
    height: 36px;
    margin: 11px 70px 36px 95px;
    text-align: center;
    font-size: 24px;
    font-weight: bold;
  }
  .table {
    padding-left: 36px;
    padding-right: 39px;
    padding-bottom: 42px;
    .th {
      display: flex;
      font-size: 16px;
      justify-content: space-between;
    }
    .td {
      margin-top: 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      font-size: 22px;
      font-weight: bold;
    }
  }
  .content {
    margin-bottom: 65px;
    font-size: 14px;
    font-weight: 300;
    
    margin-right: 36px;
  }
  .footer {
    display: flex;
    justify-content: center;
    align-items: center;
    .font {
      font-family: NotoSansCJKkr;
      font-size: 20px;
      font-weight: normal;
      font-stretch: normal;
      font-style: normal;
      line-height: normal;
      letter-spacing: normal;
      margin-right: 9px;
    }
    .icon {
      width: 20px;
      height: 20px;
      background-size: 100% 100%;
    }
  }
}
</style>