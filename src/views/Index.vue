<template>
  <div class="Index">
    <div class="logo"></div>
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
export default {
  name: "EducationIndex",
  data() {
    return {};
  },
  mounted() {},
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
    background-color: #f00;
    // height: 128px;
    // margin: 73px 772px 18px 746.5px;
    margin-bottom: 20px;
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
          margin: 3px 86px 26px 30px;
          font-family: NotoSansCJKkr;
          font-size: 24px;
          font-weight: normal;
          font-stretch: normal;
          font-style: normal;
          line-height: normal;
          letter-spacing: normal;
          color: @font-color;
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