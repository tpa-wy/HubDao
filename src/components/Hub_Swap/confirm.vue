<template>
  <div class="confirm">
    <div class="title font-color1">Confirm Swap</div>
    <div class="currency">
      <div class="currency-item currency-top">
        <div class="left">
          <img
            src="../../../public/assets/icons-default-img-5.png"
            alt=""
            class="icon"
          />
          <div class="font font-color2">7.482793</div>
        </div>
        <div class="right font-color1">HD</div>
      </div>
      <div class="currency-center"></div>
      <div class="currency-item currency-buttom">
        <div class="left">
          <img
            src="../../../public/assets/icons-default-img-5.png"
            alt=""
            class="icon"
          />
          <div class="font font-color2">7.482793</div>
        </div>
        <div class="right font-color1">HD</div>
      </div>
    </div>
    <div class="describe font-color2">
      Output is estimated . You will receive at least <span class="font-color9">0.453432</span> HT
      or the transaction will revert.
    </div>
    <div class="Price">
      <div class="Price-1">
        <div class="left font-color1">Price</div>
        <div class="right font-color1">
          <div class="font">0.18283949 HT / HD</div>
          <div class="icon"></div>
        </div>
      </div>
      <div class="Price-2">
        <div class="Price-2-item font-color1">
          <div class="left">
            <div class="font font-color1">Minimum received</div>
            <div class="icon"></div>
          </div>
          <div class="right">0.482372 HT</div>
        </div>
        <div class="Price-2-item  font-color1">
          <div class="left">
            <div class="font font-color1">Minimum received</div>
            <div class="icon"></div>
          </div>
          <div class="right">0.482372 HT</div>
        </div>
        <div class="Price-2-item font-color1">
          <div class="left">
            <div class="font font-color1">Minimum received</div>
            <div class="icon"></div>
          </div>
          <div class="right">0.482372 HT</div>
        </div>
      </div>
    </div>
    <div class="button font-color5">Confirm Swap</div>
  </div>
</template>

<script>
export default {
  name: "HubdaoConfirm",
  data() {
    return {};
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.confirm {
  width: 480px;
  height: 673px;
  padding: 21px 0 27px;
  border-radius: 9px;
  border: solid 1px #979797;
  .theme-box-back;
  > .title {
    height: 36px;
    margin: 11px 60px 37px 39px;
    font-size: 24px;
    font-weight: bold;
    .basic-font;
  }
  .currency {
    .currency-item {
      display: flex;
      align-items: center;
      justify-content: space-between;
      height: 36px;
      margin-bottom: 21px;
      .left {
        margin-left: 41px;
        display: flex;
        justify-content: center;
        align-items: center;
        .icon {
          margin-right: 16px;
          border-radius: 50%;
        }
        .font {
          font-size: 24px;
          font-weight: 500;
          .basic-font;
          
        }
      }
      .right {
        // margin: 41px 0 21px 205px;
        margin-right: 32px;
        font-size: 24px;
        font-weight: 500;
         .basic-font;
        text-align: right;
       
      }
    }
    .currency-center {
      width: 20px;
      height: 14px;
      margin-left: 55px;
      margin-bottom: 23px;
      background-image: url(../../../public/assets/back-icon.png);
      background-size: 100% 100%;
      background-repeat: no-repeat;
      transform: rotate(270deg);
    }
  }
  .describe {
    height: 48px;
    margin: 34px 60px 28.5px 38px;
    font-size: 16px;
    font-weight: 300;
    .basic-font;
    
    span {
      
      font-weight: 500;
    }
  }
  .Price {
    height: 192px;
    border-top: 1px solid #d8d8d8;
    border-bottom: 1px solid #d8d8d8;
    padding-left: 39px;
    padding-right: 32px;
    padding-top: 22px;
    padding-bottom: 33px;
    .Price-1 {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 24px;
      margin-bottom: 28px;
      .basic-font;
      .left {
        font-size: 16px;
        font-weight: 500;
        .basic-font;
        
      }
      .right {
        display: flex;
        align-items: center;
        .font {
          font-size: 16px;
          font-weight: 500;
          margin-right: 12px;
        }
        .icon {
          width: 20px;
          height: 20px;
          background-image: url(../../../public/assets/icons-home-copy-2.png);
          background-size: 100% 100%;
        }
      }
    }
    .Price-2 {
      .Price-2-item {
        margin-bottom: 6px;
        display: flex;
        align-items: center;
        justify-content: space-between;
        height: 24px;
        .left {
          display: flex;
          align-items: center;
          .font {
            margin: 0 8px 0 0;
            font-size: 16px;
            font-weight: 500;
            .basic-font;
            
          }
          .icon {
            width: 20px;
            height: 20px;
            background-image: url(../../../public/assets/icons-help.png);
            background-size: 100% 100%;
          }
        }
        .right {
          
          font-size: 16px;
          font-weight: 500;
          .basic-font;
        }
      }
    }
  }
  .button {
    cursor: pointer;
    height: 58px;
    line-height: 58px;
    margin: 25px 39px 27px 39px;
    // padding: 14px 0 15px;
    border-radius: 6px;
    .black-theme-img2;
    font-size: 20px;
    font-weight: 500;
    .basic-font;
    text-align: center;
  }
}
</style>