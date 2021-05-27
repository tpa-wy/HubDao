<template>
  <div class="CommunityPool">
    <div class="title">Community Pool</div>
    <div class="smail-title">Stake Liquidity Pool(LP) tokens to earn.</div>
    <div class="operation">
      <div class="choose">
        <el-switch
          v-model="value"
          active-color="#13ce66"
          inactive-color="#E7E7E7"
        >
        </el-switch>
        <span>Staked only</span>
      </div>
      <div class="nav">
        <div class="nav-item checked">Live</div>
        <div class="nav-item">Finished</div>
      </div>
      <div class="help-button">
        <div class="font">Help</div>
        <img class="icon" src="../../assets/icons-help-white.png" alt="" />
      </div>
    </div>
    <div class="block">
      <div class="block-item">
        <div class="header">
          <div class="img">
            <img src="../../assets/icons-default-img-3.png" alt="" srcset="" />
            <img src="../../assets/icons-default-img-4.png" alt="" srcset="" />
          </div>
          <div class="info">
            <div class="title">Earn XEND</div>
            <div class="smail-title">Stake HD</div>
          </div>
        </div>
        <div class="content">
            <div class="APR">
                <div class="left">APR :</div>
                <div class="right">
                    <span>49.28%</span>
                    <div class="smail-block"></div>
                </div>
            </div>
        </div>
        <div class="footer">Details</div>
      </div>
      <div class="block-item"></div>
      <div class="block-item"></div>
      <div class="block-item"></div>
      <div class="block-item"></div>
      <div class="block-item"></div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationCommunitypool",
  data() {
    return {
      value: false,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.CommunityPool {
  padding-left: 177px;
  padding-top: 50px;
  > .title {
    height: 54px;
    // margin: 0 157px 9px 0;
    font-family: NotoSansCJKkr;
    font-size: 36px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
  }
  > .smail-title {
    height: 36px;
    // margin: 9px 0 0;
    font-family: NotoSansCJKkr;
    font-size: 24px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #000000;
    margin-bottom: 78px;
  }
  .operation {
    display: flex;
    align-items: center;
    margin-bottom: 59px;
    .choose {
      display: flex;
      align-items: center;
      > span {
        height: 24px;
        // margin: 85px 40px 61px 8px;
        margin-left: 8px;
        margin-right: 40px;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        color: #727272;
      }
    }
    .nav {
      width: 172px;
      height: 32px;
      //   margin: 79px 46px 59px 40px;
      //   padding: 0 21px 0 21px;
      border-radius: 24px;
      background-color: #d8d8d8;
      display: flex;
      justify-content: space-between;
      .nav-item {
        line-height: 32px;
        cursor: pointer;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: center;
        color: #ffffff;
        margin-right: 20px;
      }
      .checked {
        // width: 66px;
        height: 32px;
        // margin: 0 21px 0 0;
        padding: 3px 16px 5px 17px;
        border-radius: 16px;
        background-color: #000000;
      }
    }
    .help-button {
      margin-left: 46px;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 90px;
      height: 32px;
      line-height: 32px;
      //   margin: 79px 397px 59px 46px;
      //   padding: 3px 12px 5px 13px;
      border-radius: 6px;
      background-color: #2f303f;
      font-family: NotoSansCJKkr;
      font-size: 16px;
      font-weight: 500;
      text-align: center;
      font-stretch: normal;
      font-style: normal;
      letter-spacing: 0.5px;
      color: #ffffff;
      .icon {
        width: 19px;
        height: 19px;
        margin-left: 8px;
      }
    }
  }
  .block {
    display: flex;
    // justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    .block-item {
      margin-right: 24px;
      //   padding-top: 35px;
      width: 418px;
      height: 494px;
      //   margin: 59px 24px 48px 176.5px;
      //   padding: 35px 0 27px;
      border-radius: 8px;
      box-shadow: 3px 3px 11px 1px rgba(165, 165, 165, 0.53);
      border: solid 1px #d8d8d8;
      background-color: #ffffff;
      margin-bottom: 48px;
      .header {
        height: 105px;
        display: flex;
        align-items: center;
        border-bottom: 1px solid #d8d8d8;
        .img {
          padding-left: 22px;
          position: relative;
          img:nth-child(1) {
            width: 42px;
            height: 42px;
            border-radius: 50%;
          }
          img:nth-child(2) {
            position: absolute;
            left: 30px;
            top: 25px;
            width: 26px;
            height: 26px;
            border-radius: 50%;
          }
        }
        .info {
          margin-left: 30px;
          .title {
            height: 29px;
            // margin: 0 79px 41px 13px;
            font-family: NotoSansCJKkr;
            font-size: 20px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #000000;
          }
          .smail-title {
            height: 24px;
            // margin: 23px 13px;
            font-family: NotoSansCJKkr;
            font-size: 16px;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #727272;
          }
        }
      }
      .content {
          padding-top: 30px;
          .APR {
              .left {
                  
              }
          }
      }
      .footer {
        border-top: solid 1px #d8d8d8;
        font-family: NotoSansCJKkr;
        height: 79px;
        line-height: 79px;
        font-size: 16px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: center;
        color: #727272;
      }
    }
  }
}
</style>