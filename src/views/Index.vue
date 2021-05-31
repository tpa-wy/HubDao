<template>
  <div class="Index">
    <div class="logo">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        width="54"
        height="50"
        viewBox="0 0 54 50"
      >
        <defs>
          <clipPath id="clip-path">
            <rect
              id="矩形_3025"
              data-name="矩形 3025"
              width="54"
              height="50"
              transform="translate(-0.424 0.361)"
              fill="none"
            />
          </clipPath>
          <pattern
            id="pattern"
            preserveAspectRatio="none"
            width="100%"
            height="100%"
            viewBox="0 0 322 301"
          >
            <image
              width="322"
              height="301"
              xlink:href="data:image/png;base64,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"
            />
          </pattern>
        </defs>
        <g
          id="组_4971"
          data-name="组 4971"
          transform="translate(-115.576 139.972)"
        >
          <g
            id="组_4970"
            data-name="组 4970"
            transform="translate(116 -140.333)"
          >
            <g
              id="组_4969"
              data-name="组 4969"
              transform="translate(0 0)"
              clip-path="url(#clip-path)"
            >
              <rect
                id="矩形_3024"
                data-name="矩形 3024"
                width="54"
                height="50"
                transform="translate(-0.424 0.361)"
                fill="url(#pattern)"
              />
            </g>
          </g>
        </g>
      </svg>
    </div>
    <div class="title">
      DECENTRALIZED FINANCIAL ECOSYSTEM BASED ON GOVERNANCE.
    </div>
    <div class="block">
      <div class="block-tr">
        <div class="block-td Rectangle-Copy-13 one">
          <div class="title">
            <div class="TLV">TLV</div>
            <div class="time">2021-05-19 오후 10:00 기준</div>
          </div>
          <div class="money">$104.419.391</div>
          <div class="canvas">
            <div id="main" :style="{ width: '100%', height: '100%' }"></div>
          </div>
        </div>
        <div class="block-td Rectangle-Copy-14">
          <div class="block-td-column">
            <div>HD Price : <span>$10</span></div>
            <div>Clrculating supply : <span>1.392.391 HD</span></div>
          </div>
          <div class="block-td-column">
            <div>Remaining Token to be mined : 19,203,193</div>
          </div>
          <div class="block-td-column">
            <div>Total Burned HD : 1,402,301 HD</div>
          </div>
          <div class="block-td-column">
            <div>Volume : <span>$104,203,293</span></div>
            <div>Fee : <span>$291,392</span></div>
          </div>
        </div>
      </div>
      <div class="block-tr">
        <div class="block-td Rectangle-Copy-13 Paris">
          <div class="title">Paris</div>
          <div class="table">
            <div class="th">
              <div class="Stake">Stake</div>
              <div class="APY">APY</div>
              <div class="Add-Liquidity">Add Liquidity</div>
              <div class="Trade">/ Trade</div>
            </div>
            <div class="td">
              <div class="Stake-td">HD-HTLP</div>
              <div class="APY-td">293%</div>
              <div class="button button-1">Add</div>
              <div class="button button-2">Trade</div>
            </div>
            <div class="td">
              <div class="Stake-td">HD-HTLP</div>
              <div class="APY-td">293%</div>
              <div class="button button-1">Add</div>
              <div class="button button-2">Trade</div>
            </div>
            <div class="td">
              <div class="Stake-td">HD-HTLP</div>
              <div class="APY-td">293%</div>
              <div class="button button-1">Add</div>
              <div class="button button-2">Trade</div>
            </div>
            <div class="td">
              <div class="Stake-td">HD-HTLP</div>
              <div class="APY-td">293%</div>
              <div class="button button-1">Add</div>
              <div class="button button-2">Trade</div>
            </div>
          </div>
        </div>
        <div class="block-td Rectangle-Copy-14 block-td-4">
          <div class="Earn-up-to">Earn up to</div>
          <div class="content">
            <div class="content-1">1993%</div>
            <div class="content-2">APY</div>
            <div class="content-3">In Stake HUB</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const echarts = require("echarts");
export default {
  name: "EducationIndex",
  data() {
    return {};
  },
  mounted() {
    var chartDom = document.getElementById("main");
    var myChart = echarts.init(chartDom);
    var option;

    option = {
      xAxis: {
        type: "category",
        data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
      },
      yAxis: {
        type: "value",
      },
      series: [
        {
          data: [150, 230, 224, 218, 135, 147, 260],
          type: "line",
        },
      ],
    };

    option && myChart.setOption(option);
  },
  methods: {},
};
</script>

<style lang="less" scoped>
.Index {
  padding-top: 40px;
  .logo {
    width: 137px;
    height: 115px;
    margin: 0 auto;
    // background-color: #f00;
    // height: 128px;
    // margin: 73px 772px 18px 746.5px;
    margin-bottom: 20px;
    svg {
      width: 100%;
      height: 100%;
    }
  }
  > .title {
    width: 824px;
    height: 90px;
    margin: 0 auto;
    font-family: NotoSansCJKkr;
    font-size: 30px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: 7.5px;
    text-align: center;
    color: @font-color;
  }
  .block {
    margin-top: 40px;
    .block-tr {
      display: flex;
      justify-content: center;
      .one {
        .title {
          display: flex;
          justify-content: space-between;
          align-items: center;
          .TLV {
            width: 37px;
            height: 27px;
            font-family: NotoSansCJKkr;
            font-size: 18px;
            font-weight: normal;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: @font-color;
            margin-left: 30px;
          }
          .time {
            width: 146px;
            height: 18px;
            opacity: 0.68;
            font-family: NotoSansCJKkr;
            font-size: 12px;
            font-weight: 300;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: right;
            color: #8f90a5;
            margin-right: 30px;
          }
        }
        .money {
          height: 36px;
          // margin: 3px 86px 26px 30px;
          margin-left: 30px;
          font-family: NotoSansCJKkr;
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: @font-color;
        }
        .canvas {
          // background-color: #f00;
          width: 100%;
          height: 100%;
          // height: 130px;
        }
      }
      .Rectangle-Copy-13 {
        width: 547px;
        height: 240px;
        // margin: 31px 30px 287px 265.5px;
        margin-bottom: 31px;
        margin-right: 60px;
        padding: 18px 0 24px;
        border-radius: 10px;
        // box-shadow: 5px 5px 20px 8px rgba(2, 1, 29, 0.58);
        // background-color: #0f1145;
        background-color: @boxcolor;
      }
      .Rectangle-Copy-14 {
        width: 547px;
        height: 240px;
        margin-bottom: 31px;
        padding: 12px 24px 28px 24px;
        border-radius: 10px;
        // box-shadow: 5px 5px 20px 8px rgba(2, 1, 29, 0.58);
        // background-color: #0f1145;
        background-color: @boxcolor;

        .block-td-column:nth-child(1) {
          div {
            color: #ffa402;
          }
        }
        .block-td-column:nth-last-of-type(1) {
          position: relative;
          &::before {
            content: "";
            width: 499px;
            height: 1px;
            margin: 0 0 14px;
            opacity: 0.27;
            background-color: @font-color;
            position: absolute;
            bottom: -8px;
          }
          &::after {
            content: "";
            width: 499px;
            height: 1px;
            margin: 0 0 14px;
            opacity: 0.27;
            background-color: @font-color;
            position: absolute;
            top: 0;
          }
        }
        .block-td-column {
          display: flex;
          position: relative;
          &::before {
            content: "";
            width: 499px;
            height: 1px;
            margin: 0 0 14px;
            opacity: 0.27;
            background-color: @font-color;
            position: absolute;
          }
          > div:nth-child(1) {
            margin-right: 36px;
            margin-left: 16px;
          }
          > div {
            margin-top: 15px;
            margin-bottom: 15px;
            // width: 118px;
            height: 27px;
            // margin: 14px 34px 12px 15px;
            font-family: NotoSansCJKkr;
            font-size: 18px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: @font-color;
            span {
              color: @font-color;
            }
          }
        }
      }
      .block-td-4 {
        margin-left: 6px;
        margin-top: 11px;
        .Earn-up-to {
          width: 188px;
          height: 45px;
          margin: 0 68px 22px 0;
          font-family: NotoSansCJKkr;
          font-size: 30px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: @font-color;
        }
        .content {
          display: flex;
          align-items: center;
          .content-1 {
            width: 174px;
            height: 71px;
            // margin: 22px 0 34px;
            font-family: NotoSansCJKkr;
            font-size: 48px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #ffe68c;
          }
          .content-2 {
            width: 93px;
            height: 71px;
            // margin: 22px 190px 34px 0;
            font-family: NotoSansCJKkr;
            font-size: 48px;
            font-weight: bold;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            color: #ffe68c;
          }

          .content-3 {
            width: 227px;
            height: 45px;
            // margin: 41px 0 41px 68px;
            font-family: NotoSansCJKkr;
            font-size: 30px;
            font-weight: 500;
            font-stretch: normal;
            font-style: normal;
            line-height: normal;
            letter-spacing: normal;
            text-align: right;
            color: @font-color;
          }
        }
      }
      .Paris {
        .title {
          width: 59px;
          height: 29px;
          margin: 0 119px 18px 30px;
          font-family: NotoSansCJKkr;
          font-size: 20px;
          font-weight: 500;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: @font-color;
        }
        .table {
          .th {
            display: flex;
            align-items: center;
            position: relative;
            padding-bottom: 9px;
            &::before {
              content: "";
              position: absolute;
              bottom: 0;
              width: 100%;
              height: 1px;
              opacity: 0.3;
              background-color: #d8d8d8;
            }
            > div {
              // flex: 1;
            }
            .Stake {
              width: 177px;
              height: 18px;
              // margin: 18px 146px 4px 30px;
              opacity: 0.79;
              font-family: NotoSansCJKkr;
              font-size: 12px;
              font-weight: 300;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              text-align: left;
              padding-left: 31px;
              color: @font-color;
            }
            .APY {
              width: 150px;
              height: 18px;
              // margin: 18px 129px 4px 119px;
              opacity: 0.79;
              font-family: NotoSansCJKkr;
              font-size: 12px;
              font-weight: 300;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              text-align: left;
              color: @font-color;
            }
            .Add-Liquidity {
              width: 74px;
              height: 18px;
              // margin: 0 5px 0 0;
              opacity: 0.79;
              font-family: NotoSansCJKkr;
              font-size: 12px;
              font-weight: 300;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              color: @font-color;
            }
            .Trade {
              width: 40px;
              height: 18px;
              // margin: 0 0 0 5px;
              opacity: 0.79;
              font-family: NotoSansCJKkr;
              font-size: 12px;
              font-weight: 300;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              color: @font-color;
            }
          }
          .td {
            display: flex;
            margin-top: 11px;
            .Stake-td {
              width: 177px;
              height: 24px;
              padding-left: 31px;
              font-family: NotoSansCJKkr;
              font-size: 16px;
              font-weight: 300;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              color: @font-color;
            }
            .APY-td {
              width: 150px;
              height: 24px;
              font-family: NotoSansCJKkr;
              font-size: 16px;
              font-weight: 300;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              color: @font-color;
            }
            .button-1 {
              width: 75px;
              height: 23px;
              padding: 2px 19px 3px;
              border-radius: 4px;
              background-color: #ffa402;
              cursor: pointer;
              font-family: NotoSansCJKkr;
              font-size: 12px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              text-align: center;
              color: #2f303f;
            }
            .button-2 {
              cursor: pointer;
              margin-left: 9px;
              width: 75px;
              height: 23px;
              margin: 1px 0 0 9px;
              padding: 2px 17px 3px 18px;
              border-radius: 4px;
              background-color: #3b3b5d;
              font-family: NotoSansCJKkr;
              font-size: 12px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: normal;
              letter-spacing: normal;
              text-align: center;
              color: #ffffff;
            }
          }
        }
      }
    }
  }
}
</style>