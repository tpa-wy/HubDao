<template>
  <div class="token">
    <div class="title">
      <div class="font">Select a token</div>
      <div class="icon">
        <img src="../../../public/assets/icons-help.png" alt="" class="icon" />
        <div class="hover">
          <div class="font">
            Find a token by searching for its name or symbol or by pasting its
            address below.
          </div>
        </div>
      </div>
    </div>
    <div class="search">
      <el-input
        placeholder="Search name or paste address"
        v-model="searchValue"
      />
      <!-- <i class="icon-search el-icon-search" @click="search()"></i> -->
    </div>
    <div class="select">
      <div class="title">
        <div class="font">Token name</div>
        <div
          class="icon"
          :class="{ 'icon-sort ': sort }"
          @click="sort = !sort"
        ></div>
      </div>
      <div class="block">
        <!-- checked -->
        <div
          class="block-item"
          v-if="item != undefined"
          v-show="searchValue == ''"
          @click="SelectCurrency(item)"
        >
          <div class="left">
            <img
              v-lazy="item.logoURI"
              :key="item.logoURI"
              alt=""
              class="icon"
            />
            <div class="font">{{ item.symbol }}</div>
          </div>
          <div class="right" v-show="account">
            <div
              class="balance1"
              :title="item.info"
              v-show="item.info == undefined"
            >
              <img src="../../../public/assets/loading.gif" alt="" srcset="" />
            </div>
            <div
              class="balance2"
              :title="item.info"
              v-show="item.info != undefined"
            >
              {{ item.info }}
            </div>
          </div>
        </div>
        <div
          class="block-item"
          v-for="item in searchList"
          :key="item.tokens"
          @click="SelectCurrency(item)"
        >
          <div class="left">
            <img
              v-lazy="item.logoURI"
              :key="item.logoURI"
              alt=""
              class="icon"
            />
            <div class="font">{{ item.symbol }}</div>
          </div>
          <div class="right" v-show="account">
            <div
              class="balance1"
              :title="item.info"
              v-show="item.info == undefined"
            >
              <img src="../../../public/assets/loading.gif" alt="" srcset="" />
            </div>
            <div
              class="balance2"
              :title="item.info"
              v-show="item.info != undefined"
            >
              {{ item.info }}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

// import erc20_ABi from "../../../public/js/ERC20_ABI.json";
export default {
  name: "HubdaoToken",
  props: {
    item: {
      type: Object,
    },
    tokens: {
      type: Array,
    },
  },
  data() {
    return {
      searchValue: "",
      sort: true,
    };
  },
  methods: {
    // 用户选择了某个货币
    SelectCurrency(Currency) {
      this.$emit("SelectCurrency", Currency);
    },
  },
  computed: {
    searchList() {
      var _this = this;
      var searchList = [];
      _this.tokens.map(function (item) {
        if (
          item.address.toUpperCase() == _this.searchValue.toUpperCase() ||
          item.symbol.toUpperCase().search(_this.searchValue.toUpperCase()) !=
            -1
        ) {
          searchList.push(item);
        }
      });
      // console.log(searchList)
      if (this.sort) {
        searchList = searchList.sort((a, b) => {
          return a["symbol"].localeCompare(b["symbol"]); //index是list你需要索引的字段名称
        });
      } else {
        searchList = searchList.sort((a, b) => {
          return b["symbol"].localeCompare(a["symbol"]); //index是list你需要索引的字段名称
        });
      }
      return searchList;
    },
    account() {
      // console.log(this.$store.state.account)
      return this.$store.state.account;
    },
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
  .theme-box-back;
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
    .font-color1;
    margin-bottom: 22px;
    > .font {
      margin-right: 8px;
    }
    .icon {
      position: relative;
      display: flex;
      align-items: center;
      img {
        cursor: pointer;
      }
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
    .pink-border-color1;
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
      .theme-back2;
      &::-webkit-scrollbar {
        width: 16px;
        // height: 528px;
        margin: 38px 0 0 3px;
        padding: 0 0 444px;
        border-radius: 8px;
        .theme-back2;
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
        transform: rotate(90deg);
        margin-left: 22px;
        cursor: pointer;
      }
      .icon-sort {
        transform: rotate(270deg);
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
        .font-color1;
      }
    }
    .block {
      .checked {
        .theme-back1;
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
        justify-content: space-between;
        .left {
          display: flex;
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
            .font-color1;
          }
        }
        .right {
          margin-right: 20px;
          .balance1 {
            white-space: nowrap;
            overflow: hidden;
            max-width: 5rem;
            text-overflow: ellipsis;
            font-size: 16px;
            display: flex;
            align-items: center;
            .font {
              width: 5rem;
            }
          }
          .balance2 {
            white-space: nowrap;
            overflow: hidden;
            max-width: 5rem;
            text-overflow: ellipsis;
            font-size: 16px;
            .font {
              width: 5rem;
            }
          }
        }
      }
      .block-item:hover {
        .theme-back1;
      }
    }
  }
}
</style>