<template>
  <div class="setting">
    <div class="mask">
      <div class="content">
        <div class="title font-color1">Settings</div>
        <div class="block">
          <div class="smail-title font-color1">
            Slippage tolerance
            <div class="icon-info">
              <div class="icon"></div>
              <div class="hover">
                Your transaction will revert if the price changes unfavorably by
                more than this percentage.
              </div>
            </div>
          </div>
          <div class="content">
            <div class="Slippage font-color6">
              <div
                :class="{ checked: tolerance == 0.1 }"
                @click="tolerance = 0.1"
              >
                0.1%
              </div>
              <div
                :class="{ checked: tolerance == 0.5 }"
                @click="tolerance = 0.5"
              >
                0.5%
              </div>
              <div :class="{ checked: tolerance == 1 }" @click="tolerance = 1">
                1%
              </div>
              <div :class="{ checked: tolerance == 2 }" @click="tolerance = 2">
                2%
              </div>
            </div>
            <div class="percentage">
              <div><el-input v-model="tolerance"></el-input></div>
              <div>%</div>
            </div>
            <div class="describe">
              Error message Error message Error message Error message
            </div>
          </div>
        </div>
        <div class="block block-2">
          <div class="smail-title">
            Transaction deadline
            <div class="icon-info">
              <div class="icon"></div>
              <div class="hover">
                Your transaction will revert if the price changes unfavorably by
                more than this percentage.
              </div>
            </div>
          </div>
          <div class="content">
            <div class="percentage">
              <div><el-input v-model="input"></el-input></div>
              <div>Minutes</div>
            </div>
          </div>
        </div>
        <div class="block block-3">
          <div class="smail-title">Audio</div>
          <div class="content">
            <el-switch
              v-model="value"
              active-color="#FDC702"
              inactive-color="#13ce66"
            >
            </el-switch>
            <span class="myswich font-color7">{{ value ? "ON" : "YES" }}</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationSetting",
  data() {
    return {
      input: "",
      value: true,
      tolerance: 0.1,
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less" scoped>
.setting {
  position: relative;
  .mask {
    > .content {
      position: absolute;
      margin: 0 auto;
      width: 480px;
      height: 639px;
      padding: 21px 19px 57px 47px;
      border-radius: 9px;
      border: solid 1px #979797;
      .theme-box-back;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      .describe {
        height: 20px;
        margin: 15px 17px 27px 0;
        font-family: NotoSansCJKkr;
        font-size: 14px;
        font-weight: normal;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        
      }
      > .title {
        //   width: 98px;
        text-align: center;
        height: 36px;
        margin-top: 45px;
        margin-bottom: 49px;
        font-size: 24px;
        font-weight: bold;
        .basic-font;
      }
      .block {
        margin-bottom: 20px;
        .smail-title {
          height: 29px;
          font-size: 20px;
          font-weight: 500;
          .basic-font;
          display: flex;
          align-items: center;
          > .icon-info {
            position: relative;
            margin-left: 9px;
            .icon {
              width: 22px;
              height: 22px;
              background-image: url(../../assets/icons-help.png);
            }
          }
        }
        .content {
          .Slippage {
            margin-top: 22px;
            margin-bottom: 17px;
            display: flex;
            .checked {
              border-radius: 6px;
              font-family: NotoSansCJKkr;
              font-size: 16px;
              font-weight: 500;
              font-stretch: normal;
              font-style: normal;
              line-height: 40px;
              letter-spacing: normal;
              color: @f4;
              .theme-pink-back;
            }
            div {
              cursor: pointer;
              width: 90px;
              height: 40px;
              border-radius: 6px;
              .theme-pink-back1;
              .basic-font;
              font-size: 16px;
              font-weight: 500;
              line-height: 40px;
              
              text-align: center;
              margin-right: 8px;
            }
          }
          .percentage {
            display: flex;
            align-items: center;
            .el-input {
              width: 114px;
            }
            div:nth-child(2) {
              height: 29px;
              margin-left: 12px;
              font-size: 20px;
              font-weight: 500;
              .basic-font;
              color:@f1;
            }
          }
        }
      }
      .block-2,
      .block-3 {
        .smail-title {
          margin-bottom: 23px;
          > .icon-info {
            position: relative;
            margin-left: 9px;
            .icon {
              width: 22px;
              height: 22px;
              background-image: url(../../assets/icons-help.png);
            }
          }
        }
        .myswich {
          height: 24px;
          font-size: 16px;
          font-weight: 500;
          .basic-font;
        }
      }
      .block-3 {
        .content {
          display: flex;
          align-items: center;
          span {
            margin-left: 6.5px;
          }
        }
      }
    }
  }
}
</style>