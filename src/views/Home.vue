<template>
  <div>
    <el-container>
      <el-header>
        <div class="menu-button">
          <div>
            <div class="Rectangle"></div>
            <div class="Rectangle-Copy"></div>
            <div class="Rectangle-Copy-2"></div>
          </div>
          <div class="logo"></div>
        </div>
        <div class="userinfo">
          <div class="Rectangle">
            <div class="Connect">Connect</div>
          </div>
          <div class="user-img">
            <div class="dot"></div>
          </div>
        </div>
      </el-header>
      <el-container>
        <el-aside width="264px">
          <!-- <el-menu
            default-active="1-4-1"
            class="el-menu-vertical-demo"
            @open="handleOpen"
            @close="handleClose"
            :collapse="isCollapse"
          >
            <el-submenu index="1">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="2">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="3">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="4">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="5">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="6">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="7">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
            <el-submenu index="8">
              <template slot="title">
                <i class="el-icon-location"></i>
                <span slot="title">导航一</span>
              </template>
              <el-menu-item-group>
                <span slot="title">分组一</span>
                <el-menu-item index="1-1">选项1</el-menu-item>
                <el-menu-item index="1-2">选项2</el-menu-item>
              </el-menu-item-group>
              <el-menu-item-group title="分组2">
                <el-menu-item index="1-3">选项3</el-menu-item>
              </el-menu-item-group>
              <el-submenu index="1-4">
                <span slot="title">选项4</span>
                <el-menu-item index="1-4-1">选项1</el-menu-item>
              </el-submenu>
            </el-submenu>
          </el-menu> -->
        </el-aside>
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
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>
<style lang="less">
.el-header {
  width: 100%;
  height: 73px;
  padding: 14px 22px 17px;
  background-color: #010033;
  display: flex;
  justify-content: space-between;
  .menu-button {
    display: flex;
    align-items: center;
    display: inline-block;
    cursor: pointer;
    .Rectangle {
      width: 18px;
      height: 2px;
      margin: 9px 19px 4px 0;
      border-radius: 1.5px;
      background-color: #ffffff;
    }
    .Rectangle-Copy {
      width: 18px;
      height: 2px;
      margin: 4px 19px 4px 0;
      border-radius: 1.5px;
      background-color: #ffffff;
    }
    .Rectangle-Copy-2 {
      width: 18px;
      height: 2px;
      margin: 4px 19px 13px 0;
      border-radius: 1.5px;
      background-color: #ffffff;
    }
    .logo {
      width: 122px;
      height: 42px;
      margin: 0 0 0 19px;
    }
  }
  .userinfo {
    display: flex;
    align-items: center;
    .Rectangle {
      width: 116px;
      height: 37px;
      // margin: 4px 15px 1px 1547px;
      padding: 4px 22px 6px;
      border-radius: 18.5px;
      box-shadow: inset 0 1px 3px 0 rgba(0, 0, 0, 0.5);
      border: solid 1px #fff2c4;
      display: inline-block;
      .Connect {
        width: 64px;
        height: 24px;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: 500;
        font-stretch: normal;
        font-style: normal;
        line-height: normal;
        letter-spacing: normal;
        text-align: center;
        color: #fff2c4;
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
  background-color: #101040;
  // background-color: #f00;
  height: 100%;
  // height: 90vh;
  padding: 0;
}
.el-container {
  height: 100%;
  padding: 0;
  margin: 0;
  width: 100%;
}
</style>
<style lang="less">
/* .el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 264px;
  min-height: 400px;
}
.el-container {
  height: 100%;
}
 */

.el-aside {
  background-color: #010033;
  color: #333;
  text-align: center;
  line-height: 200px;
}
</style>