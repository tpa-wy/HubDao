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
      <div class="block-item" v-for="item in list" :key="item.list" :class="{'block-item-checked':item.checked}">
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
          <div class="start">START EARNING</div>
          <div class="button">Unlock Wallet</div>
          <div class="Menual">
            <div class="Menual-button">Menual</div>
            <div class="icon"></div>
          </div>
        </div>
        <div class="footer" @click="item.checked = !item.checked">Details <span class="icon" :class="{'icon-rotate':item.checked}"></span></div>
        <div class="bottom">
          <div class="footer-block">
            <div class="total">
              <div class="block-left">Total Liquidity:</div>
              <div class="block-right">$756,210,797</div>
            </div>
            <div class="share">
              Get CAKE-BNB LP<svg
                viewBox="0 0 24 24"
                color="primary"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                class="sc-bdnxRM iXahuZ"
              >
                <path
                  d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"
                ></path>
              </svg>
            </div>
            <div class="share">
              View Contract<svg
                viewBox="0 0 24 24"
                color="primary"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                class="sc-bdnxRM iXahuZ"
              >
                <path
                  d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"
                ></path>
              </svg>
            </div>
            <div class="share">
              See Pair Info<svg
                viewBox="0 0 24 24"
                color="primary"
                width="20px"
                xmlns="http://www.w3.org/2000/svg"
                class="sc-bdnxRM iXahuZ"
              >
                <path
                  d="M18 19H6C5.45 19 5 18.55 5 18V6C5 5.45 5.45 5 6 5H11C11.55 5 12 4.55 12 4C12 3.45 11.55 3 11 3H5C3.89 3 3 3.9 3 5V19C3 20.1 3.9 21 5 21H19C20.1 21 21 20.1 21 19V13C21 12.45 20.55 12 20 12C19.45 12 19 12.45 19 13V18C19 18.55 18.55 19 18 19ZM14 4C14 4.55 14.45 5 15 5H17.59L8.46 14.13C8.07 14.52 8.07 15.15 8.46 15.54C8.85 15.93 9.48 15.93 9.87 15.54L19 6.41V9C19 9.55 19.45 10 20 10C20.55 10 21 9.55 21 9V4C21 3.45 20.55 3 20 3H15C14.45 3 14 3.45 14 4Z"
                ></path>
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationCommunitypool",
  data() {
    return {
      value: false,
      list: [{ checked: false }],
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
        width: 66px;
        height: 32px;
        line-height: 32px;
        // margin: 0 21px 0 0;
        // padding: 3px 16px 5px 17px;
        border-radius: 16px;
        background-color: #000000;
      }
    }
    .help-button {
      cursor: pointer;
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
    margin-bottom: 48px;
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
      overflow: hidden;
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
        height: 308px;
        .APR {
          display: flex;
          justify-content: space-between;
          height: 29px;
          margin: 0 21px 60px 24px;
          font-family: NotoSansCJKkr;
          font-size: 20px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #000000;
          .left {
          }
        }
        .start {
          height: 20px;
          margin: 0 39px 9px 24px;
          font-family: NotoSansCJKkr;
          font-size: 14px;
          font-weight: bold;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: #ffa402;
        }
        .button {
          width: 370px;
          height: 58px;
          line-height: 58px;
          margin: 9px 24px 44px;
          // padding: 14px 0 15px;
          border-radius: 6px;
          background-image: linear-gradient(to left, #ffe505, #ffc81c 0%);
          font-family: NotoSansCJKkr;
          font-size: 20px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          letter-spacing: normal;
          text-align: center;
          color: #010033;
        }
        .Menual {
          // text-align: right;
          display: flex;
          align-items: center;
          justify-content: right;
          float: right;
          margin-right: 20px;
          .Menual-button {
            width: 90px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            cursor: pointer;
            // margin: 44px 7px 28px 33px;
            // padding: 2px 18px 4px 17px;
            border-radius: 18px;
            border: solid 1px #2f303f;
            background-color: #2f303f;
            font-family: NotoSansCJKkr;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            letter-spacing: normal;
            color: #ffffff;
            margin-right: 7px;
          }
          .icon {
            cursor: pointer;
            width: 20px;
            height: 20px;
            // margin: 49px 24px 33px 7px;
            object-fit: contain;
            background-image: url(../../../public/assets/icons-help.png);
            background-size: 100% 100%;
          }
        }
      }
      .footer {
        user-select: none;
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
        display: flex;
        justify-content: center;
        align-items: center;
        cursor: pointer;
        .icon {
          background-image: url(../../../public/assets/down-icon.png);
          background-size: 100% 100%;
          width: 9px;
          height: 10px;
          margin-left: 8px;
        }
      }
      .bottom {
        // margin-top: 36px;
        padding-left: 24px;
        padding-right: 24px;
        .footer-block {
          font-size: 16px;
          font-weight: 600;
          .total {
            color: #280d5f;
            display: flex;
            justify-content: space-between;
            align-items: center;
            margin-bottom: 13px;
          }
          .share {
            display: flex;
            align-items: center;
            margin-bottom: 13px;
            color: #20c7d4;
            svg {
              cursor: pointer;
              margin-left: 6px;
            }
          }
        }
      }
      .icon-rotate {
        transform: rotate(180deg) !important;
      }
    }
    .block-item-checked {
      height: auto;
    }
  }
}
</style>