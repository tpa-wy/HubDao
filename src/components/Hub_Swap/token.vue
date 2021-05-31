<template>
  <div class="token">
    <div class="title">
      <div class="font">Select a token</div>
      <img src="../../../public/assets/icons-help.png" alt="" class="icon" />
    </div>
    <div class="search">
      <el-input placeholder="Search name or paste address" />
      <i class="icon-search el-icon-search"></i>
    </div>
    <div class="select">
      <div class="title">
        <div class="font">Token name</div>
        <div class="icon"></div>
      </div>
      <div class="block">
        <!-- checked -->
        <div class="block-item" @click="SelectCurrency('HT')">
          <img
            src="../../../public/assets/icons-default-img-1.png"
            alt=""
            class="icon"
          />
          <div class="font">HT</div>
        </div>
        <div class="block-item">
          <img
            src="../../../public/assets/icons-default-img-1.png"
            alt=""
            class="icon"
          />
          <div class="font">HT</div>
        </div>
        <div class="block-item">
          <img
            src="../../../public/assets/icons-default-img-1.png"
            alt=""
            class="icon"
          />
          <div class="font">HT</div>
        </div>
        <div class="block-item">
          <img
            src="../../../public/assets/icons-default-img-1.png"
            alt=""
            class="icon"
          />
          <div class="font">HT</div>
        </div>
        <div class="block-item">
          <img
            src="../../../public/assets/icons-default-img-1.png"
            alt=""
            class="icon"
          />
          <div class="font">HT</div>
        </div>
        <div class="block-item">
          <img
            src="../../../public/assets/icons-default-img-1.png"
            alt=""
            class="icon"
          />
          <div class="font">HT</div>
        </div>
        <div class="block-item">
          <img
            src="../../../public/assets/icons-default-img-1.png"
            alt=""
            class="icon"
          />
          <div class="font">HT</div>
        </div>
        <div class="block-item">
          <img
            src="../../../public/assets/icons-default-img-1.png"
            alt=""
            class="icon"
          />
          <div class="font">HT</div>
        </div>
        <div class="block-item">
          <img
            src="../../../public/assets/icons-default-img-1.png"
            alt=""
            class="icon"
          />
          <div class="font">HT</div>
        </div>
        <div class="block-item">
          <img
            src="../../../public/assets/icons-default-img-1.png"
            alt=""
            class="icon"
          />
          <div class="font">HT</div>
        </div>
        <div class="block-item">
          <img
            src="../../../public/assets/icons-default-img-1.png"
            alt=""
            class="icon"
          />
          <div class="font">HT</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "HubdaoToken",
  data() {
    return {
    };
  },
  mounted() {},
  methods: {
    // 用户选择了某个货币
    SelectCurrency(Currency) {
      this.$emit('SelectCurrency',Currency);
    }
  },
};
</script>
<style lang="less">
.token {
  .search {
    .el-input {
      input {
        border: none;
      }
    }
  }
}
</style>
<style lang="less" scoped>
.token {
  width: 480px;
  height: 733px;
  padding: 21px 0 0;
  border-radius: 8px;
  border: solid 1px #979797;
  background-color: #ffffff;
  > .title {
    height: 36px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 11px 8px 22px 24px;
    font-family: NotoSansCJKkr;
    font-size: 24px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
    margin-bottom: 22px;
    .font {
      margin-right: 8px;
    }
  }
  .search {
    width: 408px;
    height: 64px;
    margin: 22px 4px 38px 36px;
    display: flex;
    align-items: center;
    // padding: 20px 19px 19.7px 16px;
    border-radius: 6px;
    border: solid 1px #a5a5a5;
    .icon-search {
      // width: 30px;
      // height: 30px;
      font-size: 30px;
      margin-right: 23px;
      cursor: pointer;
    }
  }
  .select {
    overflow-x: auto;
    position: relative;
    padding-top: 20px;
    height: 539px;
    &::-webkit-scrollbar {
      width: 16px;
      height: 84px;
      border-radius: 8px;
      background-color: #eaeaea;
      &::-webkit-scrollbar {
        width: 16px;
        // height: 528px;
        margin: 38px 0 0 3px;
        padding: 0 0 444px;
        border-radius: 8px;
        background-color: #eaeaea;
      }
    }
    &::-webkit-scrollbar-thumb {
      border-radius: 8px;
      background-color: #fdc702;
    }
    .title {
      position: absolute;
      top: 0;
      display: flex;
      align-items: center;
      margin-left: 36px;
      .icon {
        width: 20px;
        height: 20px;
        background-image: url(../../../public/assets/back-icon.png);
        background-size: 100% 100%;
        transform: rotate(270deg);
        margin-left: 22px;
      }
      .font {
        height: 20px;
        //   margin: 38px 18px 22px 36px;
        font-family: NotoSansCJKkr;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #000000;
      }
    }
    .block {
      .checked {
        background-color: #f5f5f5;
      }
      .block-item {
        cursor: pointer;
        height: 56px;
        line-height: 56px;
        margin: 22px 0 12px;
        // padding: 12px 368px 12px 36px;
        margin-bottom: 12px;
        display: flex;
        // justify-content: center;
        padding-left: 36px;
        align-items: center;
        .icon {
          width: 32px;
          height: 32px;
        }
        .font {
          margin-left: 16px;
          font-family: NotoSansCJKkr;
          font-size: 20px;
          font-weight: 400;
          font-stretch: normal;
          font-style: normal;
          letter-spacing: normal;
          color: #000000;
        }
      }
      .block-item:hover {
        background-color: #f5f5f5;
      }
    }
  }
}
</style>