<template>
  <div class="confirmation">
    <div class="title font-color1">Waiting for confirmation…</div>
    <div class="loadimg">
      <img src="../../../public/assets/group-21.png" alt="" />
    </div>
    <div class="block">
      <div class="block-title font-color1">Supplying 0.333234 HT and 3HD</div>
      <div class="block-smail-title font-color6">
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
  padding: 21px 29px 58px 29px;
  border-radius: 9px;
  border: solid 1px #979797;
  
  .theme-box-back;
  .title {
    margin: 11px 90px 62px 0;
    font-size: 24px;
    font-weight: bold;
   
	.basic-font;
   
  }
  .loadimg {
    text-align: center;
    margin-bottom: 65px;
    img {
      -webkit-animation: rotate 1.1s infinite linear;
      -webkit-transform-origin: center center;
      -ms-transform-origin: center center;
      transform-origin: center center;
    }
    @keyframes rotate {
      0% {
        transform: rotate(-360deg);
        -ms-transform: rotate(-360deg);
        -webkit-transform: rotate(-360deg);
      }
      100% {
        transform: rotate(0deg);
        -ms-transform: rotate(0deg);
        -webkit-transform: rotate(0deg);
      }
    }
  }
  .block {
    .block-title {
      margin-left: 59px;
      font-size: 20px;
     
    }
    .block-smail-title {
      margin: 10px 36px 0 29px;
      font-size: 20px;
      font-weight: 300;
     
    }
  }
}
</style>