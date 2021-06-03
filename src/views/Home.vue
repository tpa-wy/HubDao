<template>
  <div>
    <el-container>
      <el-header>
        <div class="menu-button">
          <div @click="isCollapse = !isCollapse">
            <img src="../../public/assets/icons-ham.png" alt="" srcset="" />
          </div>
          <div class="logo"></div>
        </div>
        <div class="userinfo">
          <div class="Rectangle" v-show="network == 128">
            <div class="Connect" @click="connect" v-show="network == 128">
              {{ account }}
            </div>
          </div>
          <div class="Rectangle2" v-show="network != 128">
            <div class="heUZLp">Wrong Network</div>
          </div>
          <div class="user-img">
            <div class="dot"></div>
          </div>
        </div>
      </el-header>
      <el-container>
        <div class="left-aside">
          <el-menu
            :style="!isCollapse ? 'width:200px' : 'width:auto'"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
            @select="menuselect"
          >
            <el-menu-item index="/Index">
              <img
                src="../../public/assets/menu/icons-home-2.png"
                alt=""
                class="menu-img"
              />
              <span slot="title">Dashboard</span>
            </el-menu-item>
            <el-submenu index="/ExchangeHUB">
              <template slot="title">
                <img
                  src="../../public/assets/menu/icons-home-copy-2.png"
                  alt=""
                  class="menu-img"
                />
                <span slot="title">Exchange HUB</span>
              </template>
              <el-menu-item-group>
                <span slot="title"></span>
                <el-menu-item index="/ExchangeHUB/Bridge">Bridge</el-menu-item>
                <el-menu-item index="/ExchangeHUB/Swap">Swap</el-menu-item>
                <el-menu-item index="/ExchangeHUB/Liquidity"
                  >Liquidity</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="/StakeHUB">
              <template slot="title">
                <img
                  src="../../public/assets/menu/icons-home-copy-3.png"
                  class="menu-img"
                />
                <span slot="title">Stake HUB</span>
              </template>
              <el-menu-item-group>
                <span slot="title"></span>
                <el-menu-item index="/StakeHUB/YieldFarming"
                  >Yield Farming</el-menu-item
                >
                <el-menu-item index="/StakeHUB/CommunityPool"
                  >Community Pool</el-menu-item
                >
                <el-menu-item index="/StakeHUB/FixedStaking"
                  >Fixed Staking</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="/Start-upHUB">
              <template slot="title">
                <img
                  src="../../public/assets/menu/icons-startup.png"
                  class="menu-img"
                />
                <span slot="title">Start-up HUB</span>
              </template>
              <el-menu-item-group>
                <span slot="title"></span>
                <el-menu-item index="/Start-upHUB/IHO">IHO</el-menu-item>
              </el-menu-item-group>
            </el-submenu>
            <el-submenu index="/PredictionHUB">
              <template slot="title">
                <img
                  src="../../public/assets/menu/icons-prediction.png"
                  class="menu-img"
                />
                <span slot="title">Prediction HUB</span>
              </template>
              <el-menu-item-group>
                <span slot="title"></span>
                <el-menu-item index="/PredictionHUB/Lottery"
                  >Lottery</el-menu-item
                >
              </el-menu-item-group>
            </el-submenu>
            <el-menu-item index="/Vote/vote">
              <img
                src="../../public/assets/menu/icons-vote.png"
                alt=""
                class="menu-img"
              />
              <span slot="title">Vote</span>
            </el-menu-item>
            <el-menu-item index="/LendingHUB">
              <img
                src="../../public/assets/menu/icons-lending-hub.png"
                alt=""
                class="menu-img"
              />
              <span slot="title">Lending HUB</span>
            </el-menu-item>
            <el-menu-item index="/Analytics">
              <img
                src="../../public/assets/menu/icons-analytic.png"
                alt=""
                class="menu-img"
              />
              <span slot="title">Analytics</span>
            </el-menu-item>
            <el-menu-item index="/Settings">
              <img
                src="../../public/assets/menu/icons-setting.png"
                alt=""
                class="menu-img"
              />
              <span slot="title">Settings</span>
            </el-menu-item>
          </el-menu>
        </div>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  name: "EduHome",
  data() {
    return {
      isCollapse: false,
      // 当前是否是heco主网
      network: "",
    };
  },
  mounted() {
    const ethereum = window.ethereum;
    // 获取用户连接的主网信息
    // this.network =
    ethereum
      .request({ method: "eth_chainId" })
      .then((success) => {
        // console.log(success);
        this.network = Number(success)
      })
      .catch((error) => {
        console.log(error);
      });
    // console.log(this.network)
    // ethereum.autoRefreshOnNetworkChange = false;
    ethereum.on("chainChanged", (_chainId) => {
      var chainId = Number(_chainId);
      this.network = chainId;
      console.log("切换了网络");
      // window.location.reload();
      if (chainId != 128) {
        this.$message({
          message: "Unsupported Chain Id Error. Check your chain Id.",
          type: "error",
        });
      }
    });

    // 切换了账号
    ethereum.on("accountsChanged", (accounts) => {
      if (accounts.length === 0) {
        this.$message({
          message: "Please connect to MetaMask.",
          type: "error",
        });
        this.$store.commit("setAccount", "");
      } else if (accounts[0] !== this.$store.state.account) {
        // 设置切换的账号信息
        this.$store.commit("setAccount", accounts[0]);
      }
    });

    this.$util
      .getUserinfo()
      .then((account) => {
        // console.log(account);
        this.$store.commit("setAccount", account[0]);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  computed: {
    account() {
      return this.$store.state.account || "Content";
    },
  },
  methods: {
    handleOpen(key, keyPath) {
      // console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      // console.log(key, keyPath);
    },
    menuselect(index) {
      // console.log(index);
      this.$router.push(index);
    },
    // 连接钱包
    connect() {
      // console.log(this.$util.detectionMetaMask())
      this.$util.linkWallet();
    },
  },
};
</script>
<style lang="less">
body {
  overflow: hidden;
}
.el-submenu__title {
  display: flex;
  align-items: center;
}
.menu-img {
  margin-right: 20px;
  width: 28px;
  height: 28px;
}
.el-header {
  width: 100%;
  height: 73px;
  padding: 14px 22px 17px;
  background-color: @header-left;
  display: flex;
  justify-content: space-between;
  .menu-button {
    display: flex;
    align-items: center;
    cursor: pointer;
    .logo {
      width: 122px;
      height: 42px;
      margin: 0 0 0 19px;
      background-image: url(../../public/assets/hub-dao-logo-05.png);
      background-repeat: no-repeat;
      background-size: 100% 100%;
    }
  }
  .userinfo {
    display: flex;
    align-items: center;
    .Rectangle {
      width: 130px;
      height: 37px;
      line-height: 37px;
      // margin: 4px 15px 1px 1547px;
      // padding: 4px 22px 6px;
      border-radius: 18.5px;
      box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);
      // border: solid 1px #fff2c4;
      display: inline-block;
      background-color: #2f303f;
      .Connect {
        // width: 64px;
        margin-left: 10px;
        overflow: hidden;
        white-space: nowrap;
        text-overflow: ellipsis;
        // height: 24px;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        // line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #fff;
        cursor: pointer;
      }
    }
    .Rectangle2 {
      width: 130px;
      height: 37px;
      line-height: 37px;
      // margin: 4px 15px 1px 1547px;
      border-radius: 18.5px;
      box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);
      // border: solid 1px #fff2c4;
      display: inline-block;
      background-color: rgb(255, 104, 113);
      .heUZLp {
        font-family: NotoSansCJKkr;
        font-size: 14px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        letter-spacing: normal;
        text-align: center;
        color: #fff;
        cursor: pointer;
      }
    }
    .user-img {
      display: inline-block;
      cursor: pointer;
      width: 37px;
      height: 37px;
      margin: 4px 2px 1px 15px;
      padding: 1px;
      border: solid 1px #d8d8d8;
      background-color: #d8d8d8;
      border-radius: 50%;
      position: relative;
      .dot {
        position: absolute;
        right: -3px;
        top: -5px;
        width: 10px;
        height: 10px;
        margin: 3px 0 2px 44px;
        background-color: #e85b72;
        border-radius: 50%;
      }
    }
  }
}
.el-main {
  background-color: @bgcolor;
  // background-color: #fff;
  height: 100%;
  // height: 90vh;
  padding: 0;
  // margin-bottom: 1000px;
}
.el-container {
  height: 100%;
  padding: 0;
  margin: 0;
  width: 100%;
}
/* 
.el-aside {
  background-color: @header-left;
  color: #333;
  text-align: center;
  line-height: 200px;
} */
.left-aside {
  // width: 200px;
  width: auto;
}
</style>