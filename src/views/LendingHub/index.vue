<template>
  <div class="lottery full-r-w fx-fd-c fx-ai-c">

    <div class="title full-r-w">
        <div class="title-cxt">Vote</div>
    </div>

    <div class="smail-title full-r-w">
        <div class="smail-title-text">
            Description of the service Description of the service
        </div>
    </div>

    <div class="block full-r-w">
        <div class="lending-cxt">
             <div class="lending-content">
                   <div class="block-msg full-r-w">
                       Comming Soon !
                   </div>
             </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {
  name: "LendingHub",
  data() {
    return {
      
     
     
    };
  },
  
  methods: {
   
  },
};
</script>

<style lang="less" scoped>
.lottery {
   .basic-font;
  
  .title {
    font-family: NotoSansCJKkr;
    font-size: 36px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    
    .title-cxt{
        margin: 48px 176.5px 9px 176.5px;
        .font-color1;
        text-align: left;
    }
  }
  .smail-title {
        .basic-font;
        height: 36px;
        .font-color1;
        .smail-title-text{
            margin: 0px 176.5px 9px 176.5px;
        }
  }
  .block {
     .lending-cxt{
            margin: 20px 176.5px 0px 176.5px;
            .lending-content{
                    border-radius: 8px;
                    height: 560px;
                    border: solid 1px #979797;
                    margin-bottom:100px;
                    .theme-box-back;
                    .block-msg{
                        
                        font-size: 72px;
                        line-height:560px;
                        text-align: center;
                        .font-color12;
                    }
            }
     }
  }
}
</style>