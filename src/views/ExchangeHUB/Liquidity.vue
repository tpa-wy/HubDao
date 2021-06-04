<template>
  <div class="Liquidity">
    
        <router-view>
        </router-view>
    
     
  </div>
</template>

<script>
export default {
  name: "EducationSwap",
  data() {
    return {
    };
  },
  
  methods: {
    selectCurrency(command) {
      console.log(command);
      this.selectedCurrency = command;
    },
  },
};
</script>

<style lang="less">
// @import url('./liquidity/liquidity.less');
.Liquidity {
  // padding-top: 72px;
  width: 594px;
  margin: 0 auto;
  #block {
    width: 594px;
    margin: 0 auto;
    margin-bottom: 50px;
    // margin: 55px 531px 185px;
    padding: 22px 0px 59px 0px;
    padding: 22px 0 49px;
    border-radius: 8px;
    border: solid 1px #d8d8d8;
    background-color: #ffffff;
  }
}
.el-icon-arrow-down {
  font-size: 12px;
}

</style>