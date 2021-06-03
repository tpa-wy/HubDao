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
            <div class="vote-header fx-box">
               <div v-for="item in headerList" :key="item.label" class="vote-item layout-rel">
                   <div>{{item.label}}</div>
                   <div :class="'vote-active layout-abs '+(item.checked?'vote-ac':'vote-bc')"></div>
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
      
      headerList:[
        {
          label:'All',
          checked:true,
        },
        {
          label:'Core',
          checked:false,
        },
        {
          label:'Active',
          checked:false,
        },
        {
          label:'Pending',
          checked:false,
        },{
          label:'Closed',
          checked:false,
        }
      ]
     
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
         width:400px;
         margin:26px 0px;
         .vote-item{
            height:41px;
            line-height: 41px;
            margin-right: 40px;
            letter-spacing: 0.5px;
            color: #000000;
            font-size: 28px;
            font-weight: 500;
           .vote-active{
             border-radius: 3px; 
             width: 100%;height: 6px;
             left: 0;
             bottom:-3px;
           }
           .vote-ac{
             background-color: #fdc702;
           }
           .vote-bc{
            
           }
         }
       }

     }
  }
}
</style>