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
        
        <div class="vote-cxt">
            <div class="vote-header">
               <div class="vote-item">
                   <div></div>
                   <div class="vote-active"></div>
               </div>
            </div>
        </div>
  
 


    </div>
  </div>
</template>

<script>

export default {
  name: "EducationIho",
  data() {
    return {
      
     
    };
  },
  mounted() {
    if (this.$route.path == "/Start-upHUB/IHOs") {
      this.checked = 2;
    }
  },
  methods: {
    navhref(num) {
      this.checked = num;
      var router = "IHO";
      if (num == 2) {
        router = "IHOs";
      }
      this.$router.push(router);
    },
  },
};
</script>

<style lang="less" scoped>
.lottery {
  
  
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
        color: #000000;
        text-align: left;
    }
  }
  .smail-title {
        .basic-font;
        height: 36px;
        color: #000000;
        .smail-title-text{
            margin: 0px 176.5px 9px 176.5px;
        }
  }
  .block {
     .vote-cxt{
       margin: 20px 233px 0px 233px;
       .vote-header{
         margin:26px 0px;
         border-bottom: 1px solid #eee;
       }
     }
  }
}
</style>