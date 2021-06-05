<template>
  <div class="lottery full-r-w fx-fd-c fx-ai-c">

    <div class="title full-r-w">
        <div class="title-cxt font-color1">Vote</div>
    </div>

    <div class="smail-title full-r-w font-color1">
        <div class="smail-title-text">
            Description of the service Description of the service
        </div>
    </div>

    <div class="block full-r-w">
        
        <div class="vote-cxt fx-jc-sb fx-box fx-ai-c">
            <div class="vote-header fx-box">
               <div v-for="(item,index) in headerList" 
                    :key="index" 
                    @click.stop="changeTool(index)"
                    class="vote-item layout-rel font-color1">
                   <div :class="(item.checked?'font-color1':'font-color3')">{{item.label}}</div>
                   <div :class="'vote-active layout-abs '+(item.checked?'vote-ac':'vote-bc')"></div>
               </div>
               
            </div>
            <div class="fx-box fx-ai-c">
               <div class="small-pro font-size26">Proposals</div>
               <div class="small-num font-size16 font-color4 font-w5">100</div>
            </div>
        </div>

        <div class="vote-list">
           <div 
           v-for="(item,index) in storeList"
           :key="index"
           class="vote-list-item fx-box fx-ai-b">
             <div :class="'vote-list-btn font-color4 '+(item.open?'':'vote-list-btn-close')">
               {{item.text}}
             </div>
             <div class="vote-list-content">
                 <div class="store-name font-color5">{{item.title}}</div>
                 <div class="store-sign font-color6">{{item.sign}}</div>
             </div>
           </div>


        </div>
  
 


    </div>
  </div>
</template>

<script>

export default {
  name: "Vote",
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
      ],
      storeList:[
        {
          open:true,
          text:'Active',
          title:'Add Store Section to Hubdao',
          sign:'#QmqQtwW By 0x24F5…14566 start 5/20/2021 end 7/31/2021',
        },
        {
          open:false,
          text:'Closed',
          title:'Add Store Section to Hubdao',
          sign:'#QmqQtwW By 0x24F5…14566 start 5/20/2021 end 7/31/2021',
        },
        {
          open:false,
          text:'Closed',
          title:'Add Store Section to Hubdao',
          sign:'#QmqQtwW By 0x24F5…14566 start 5/20/2021 end 7/31/2021',
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
    changeTool(e){
      let {headerList}=this;
      this.headerList=this.updateByIndex(e,headerList);
    },
    updateByIndex(index,datas){
       datas=datas.map((item,i)=>{
          if(index===i){
            return {
                ...item,
                checked:true
            }
          }else{
             return {
                ...item,
                checked:false
            }
          }
       })
       return datas;
    },
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
        text-align: left;
    }
  }
  .smail-title {
        .basic-font;
        height: 36px;
        
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
       .small-num{
          width: 48px;
          height: 22px;
          border-radius: 13.5px;
          text-align: center;
          line-height:22px;
          margin-left: 7px;
          .black-font-color;
       }

     }
     .vote-list{
       margin: 0px 233px 10px 233px;
       padding-bottom: 100px;
       .vote-list-item{
          padding: 23px 41px 36px;
          border-radius: 8px;
          border: solid 1px #d8d8d8;
          .pink-border-color3;
          margin-bottom: 10px;
          .theme-box-back;
          .vote-list-btn{
            padding: 5px 21px 7px 23px;
            border-radius: 24px;
            .blue-btn-color;
          }
          .vote-list-btn-close{
             .black-font-color;
          }
          .vote-list-content{
            margin-left:30px;
            .store-name{
              font-size: 36px;
              
            }
            .store-sign{
               .font-size26;
              
               max-width:550px;
               overflow: hidden;
               white-space:nowrap;
               text-overflow: ellipsis;
            }
          }
       }
     }
  }
}
</style>