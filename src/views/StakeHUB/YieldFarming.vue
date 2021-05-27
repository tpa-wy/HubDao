<template>
  <div class="yield-farming">
    <div class="title">Yield Farming</div>
    <div class="connect">Stake Liquidity Pool(LP) tokens to earn.</div>
    <div class="outer">
      <div class="Rectangle">
        <div class="left">
          <div class="icon-block icon-block-1"></div>
          <div class="icon-block icon-block-2"></div>
          <div class="swith">
            <el-switch
              v-model="switchValue"
              active-color="#13ce66"
              inactive-color="#444462"
            >
            </el-switch>
            <div>Staked only</div>
          </div>
          <div class="live">
            <div class="live-1">Live</div>
            <div class="live-2">Liquidity</div>
          </div>
        </div>

        <div class="right">
          <div class="SORT-BY">
            <div class="title">SORT BY</div>
            <div class="select"></div>
          </div>
          <div class="_SEARCH">
            <div class="title">SEARCH</div>
            <div class="search"></div>
          </div>
        </div>
      </div>
      <div class="block">
        <div class="block-item block-1">
          <div class="content">
            <div class="title">
              <div class="dot dot-1"></div>
              <div class="dot dot-2"></div>
              <div class="content">COINCOIN-HT</div>
            </div>
            <div class="core">
              <div class="core-item">
                <div class="icon"></div>
                <div class="font">Croe</div>
              </div>
              <div class="ratio">40X</div>
            </div>
            <div class="line">
              <div class="line-row">
                <div class="line-row-1">APR :</div>
                <div class="line-row-2">49.28%</div>
              </div>
              <div class="line-row">
                <div class="line-row-1">Earn :</div>
                <div class="line-row-2">HD</div>
              </div>
            </div>
            <div class="small-block">
              <div class="title">HD <span>EARNED</span></div>
              <div class="block">
                <div class="money">0</div>
                <div class="button">Harvest</div>
              </div>
            </div>
            <div class="small-block">
              <div class="title">HD <span>EARNED</span></div>
              <div class="block">
                <div class="money">0</div>
                <div class="button2">Harvest</div>
              </div>
            </div>
          </div>

          <div class="details">
            Details
            <div class="icon"></div>
          </div>
        </div>
        <div class="block-item block-1">
          <div class="content">
            <div class="title">
              <div class="dot dot-1"></div>
              <div class="dot dot-2"></div>
              <div class="content">COINCOIN-HT</div>
            </div>
            <div class="core">
              <div class="core-item">
                <div class="icon"></div>
                <div class="font">Croe</div>
              </div>
              <div class="ratio">40X</div>
            </div>
            <div class="line">
              <div class="line-row">
                <div class="line-row-1">APR :</div>
                <div class="line-row-2">49.28%</div>
              </div>
              <div class="line-row">
                <div class="line-row-1">Earn :</div>
                <div class="line-row-2">HD</div>
              </div>
            </div>
            <div class="small-block">
              <div class="title">HD <span>EARNED</span></div>
              <div class="block">
                <div class="money">0</div>
                <div class="button">Harvest</div>
              </div>
            </div>
            <div class="small-block">
              <div class="title">HD <span>EARNED</span></div>
              <div class="block">
                <div class="money">0</div>
                <div class="button2">Harvest</div>
              </div>
            </div>
          </div>

          <div class="details">
            Details
            <div class="icon"></div>
          </div>
        </div>
        <div class="block-item block-1">
          <div class="content">
            <div class="title">
              <div class="dot dot-1"></div>
              <div class="dot dot-2"></div>
              <div class="content">COINCOIN-HT</div>
            </div>
            <div class="core">
              <div class="core-item">
                <div class="icon"></div>
                <div class="font">Croe</div>
              </div>
              <div class="ratio">40X</div>
            </div>
            <div class="line">
              <div class="line-row">
                <div class="line-row-1">APR :</div>
                <div class="line-row-2">49.28%</div>
              </div>
              <div class="line-row">
                <div class="line-row-1">Earn :</div>
                <div class="line-row-2">HD</div>
              </div>
            </div>
            <div class="small-block">
              <div class="title">HD <span>EARNED</span></div>
              <div class="block">
                <div class="money">0</div>
                <div class="button">Harvest</div>
              </div>
            </div>
            <div class="small-block">
              <div class="title">HD <span>EARNED</span></div>
              <div class="block">
                <div class="money">0</div>
                <div class="button2">Harvest</div>
              </div>
            </div>
          </div>

          <div class="details">
            Details
            <div class="icon"></div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationYieldfarming",
  data() {
    return {
      // 开关
      switchValue: false,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.yield-farming {
  > .title {
    // width: 244px;
    height: 54px;
    margin: 48px 197px 9px 178px;
    font-family: NotoSansCJKkr;
    font-size: 36px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #ffffff;
  }
  > .connect {
    // width: 442px;
    height: 36px;
    margin: 9px 441px 63px 178px;
    font-family: NotoSansCJKkr;
    font-size: 24px;
    font-weight: normal;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    color: #fff9e3;
  }
  .outer {
    width: 1302px;
    margin: 0 auto;
    .Rectangle {
      height: 64px;
      width: 1302px;
      margin: 0 auto;
      padding: 16px 0;
      display: flex;
      justify-content: space-between;
      // margin-left: 184px;
      // padding-right: 100px;
      .left {
        display: flex;
        align-items: center;
        .icon-block-1 {
          width: 22px;
          height: 22px;
          background-color: #f00;
          margin-right: 32px;
        }
        .icon-block-2 {
          width: 22px;
          height: 22px;
          background-color: #f00;
          //   margin-right: 70px;
        }
        .swith {
          display: flex;
          align-items: center;
          // margin-right: 82px;
          margin-left: 18px;
          > div:nth-child(2) {
            margin-left: 18px;
            width: 136px;
            height: 24px;
            // margin: 6px 40px 2px 8px;
            font-family: NotoSansCJKkr;
            font-size: 16px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #a5a5a5;
          }
        }
        .live {
          cursor: pointer;
          width: 172px;
          height: 32px;
          // margin: 0 366px 0 40px;
          padding: 0 20px 0 0;
          border-radius: 24px;
          background-color: #444462;
          display: flex;
          align-items: center;
          .live-1 {
            width: 66px;
            height: 32px;
            // margin: 0 21px 0 0;
            padding: 3px 16px 5px 17px;
            border-radius: 16px;
            background-color: #ffffff;
            font-family: NotoSansCJKkr;
            font-size: 16px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #030226;
          }
          .live-2 {
            width: 65px;
            height: 24px;
            // margin: 3px 0 5px 21px;
            font-family: NotoSansCJKkr;
            font-size: 16px;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: center;
            color: #ffffff;
            margin-left: 21px;
          }
        }
      }
      .right {
        display: flex;
        align-items: center;
        .SORT-BY,
        ._SEARCH {
          display: flex;
          align-items: center;
          .title {
            width: 56px;
            height: 20px;
            //   margin: 6px 13px 6px 366px;
            font-family: NotoSansCJKkr;
            font-size: 14px;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: right;
            color: #ffffff;
          }
        }
        .select {
          width: 121px;
          height: 32px;
          margin: 0 64px 0 13px;
          padding: 3px 10px 5px 12px;
          border-radius: 2px;
          border: solid 1px #010033;
          background-color: #444462;
        }
        .search {
          width: 177px;
          height: 32px;
          margin: 0 0 0 13px;
          padding: 8px 11px 6px 6px;
          border-radius: 2px;
          border: solid 1px #010033;
          background-color: #444462;
        }
      }
    }
    .block {
      display: flex;
      justify-content: space-between;
      align-items: center;
      .block-item {
        width: 418px;
        height: 540px;
        // margin-right: 24px;
        margin-top: 30px;
        border-radius: 8px;
        box-shadow: 3px 3px 11px 1px rgba(1, 0, 51, 0.65);
        background-color: #181742;
        > .content {
          padding: 35px 0 0 24px;
        }
        .title {
          display: flex;
          position: relative;
          .dot {
            width: 32px;
            height: 32px;
            //   margin: 0 36px 22px 24px;
            padding: 5px 6px 4px;
            opacity: 0.84;
            border-radius: 50%;
          }
          .dot-1 {
            position: absolute;
            background-color: #fdc702;
            left: 0;
            top: 0;
            z-index: 1;
          }
          .dot-2 {
            position: absolute;
            background-color: #f00;
            left: 25px;
            top: 0;
            z-index: 2;
          }
          .content {
            height: 29px;
            font-family: NotoSansCJKkr;
            font-size: 20px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #ffffff;
            margin-left: 70px;
          }
        }
        .core {
          display: flex;
          align-items: center;
          .core-item {
            width: 77px;
            height: 28px;
            margin: 22px 11px 42px 24px;
            padding: 2px 11px 2px 6px;
            border-radius: 4px;
            border: solid 1px #ffffff;
            display: flex;
            align-items: center;
            .icon {
              width: 16px;
              height: 16px;
              margin: 5px 8px 3px 0;
              padding: 6px 4px 5px;
              transform: rotate(-360deg);
              border-radius: 12px;
              background-color: #f00;
            }
            .font {
              height: 24px;
              font-family: NotoSansCJKkr;
              font-size: 16px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              text-align: center;
              color: #ffffff;
            }
          }
          .ratio {
            width: 61px;
            height: 28px;
            margin: 22px 1px 42px 9px;
            padding: 2px 12px 2px 13px;
            border-radius: 4px;
            background-color: #b5b6c9;
            font-family: NotoSansCJKkr;
            font-size: 16px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: 0.5px;
            text-align: center;
            color: #010033;
          }
        }
        .line {
          .line-row {
            display: flex;
            align-items: center;
            justify-content: space-between;
            margin: 10px 20px 5px 24px;
            .line-row-1 {
              // width: 48px;
              height: 29px;
              font-family: NotoSansCJKkr;
              font-size: 20px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              color: #ffffff;
            }
            .line-row-2 {
              width: 69px;
              height: 29px;
              font-family: NotoSansCJKkr;
              font-size: 20px;
              font-weight: normal;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              text-align: right;
              color: #ffffff;
            }
          }
        }
        .small-block {
          .title {
            height: 20px;
            margin: 18px 9px 9px 24px;
            font-family: NotoSansCJKkr;
            font-size: 14px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #a5a5a5;
            span {
              margin-left: 5px;
              font-weight: bold;
              color: #fdc702;
            }
          }
          .block {
            display: flex;
            justify-content: space-between;
            align-items: center;
            .money {
              width: 12px;
              height: 29px;
              margin-left: 24px;
              font-family: NotoSansCJKkr;
              font-size: 20px;
              font-weight: bold;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              color: #a5a5a5;
            }
            .button {
              cursor: pointer;
              width: 125px;
              height: 44px;
              margin-right: 22px;
              padding: 7px 24px 8px 26px;
              opacity: 0.5;
              border-radius: 4px;
              box-shadow: 3px 3px 7px 0 #010033;
              background-color: #707091;
              font-family: NotoSansCJKkr;
              font-size: 20px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              text-align: center;
              color: #c9c8eb;
            }
            .button2 {
              cursor: pointer;
              width: 123px;
              height: 58px;
              padding: 14px 0 15px;
              margin-right: 22px;
              border-radius: 6px;
              border: solid 1px #b5b9ff;
              background-color: #010033;
              font-family: NotoSansCJKkr;
              font-size: 20px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              text-align: center;
              color: #b5b9ff;
            }
          }
        }
        .details {
          display: flex;
          justify-content: center;
          align-items: center;
          margin-bottom: 27px;
          border-top: 1px solid #6a6a82;
          margin-top: 39px;
          height: 79px;
          width: 100%;
          line-height: 79px;
          font-family: NotoSansCJKkr;
          font-size: 16px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          letter-spacing: normal;
          text-align: center;
          color: #f5f5f5;
          .icon {
            margin-left: 8px;
            width: 9px;
            height: 5px;
            background-color: #f00;
          }
        }
      }
    }
  }
}
</style>