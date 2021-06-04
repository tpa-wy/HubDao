<template>
  <div class="iho">
    <div class="title">IHO (Initial Hubdao Offering)</div>
    <div class="smail-title">
      Buy new tokens with a brand new token sale model.
    </div>
    <div class="block">
      <div class="nav">
        <div
          class="nav-item"
          :class="{ checked: checked == 1 }"
          @click="navhref(1)"
        >
          Next IHO
        </div>
        <div
          class="nav-item"
          :class="{ checked: checked == 2 }"
          @click="navhref(2)"
        >
          Past IHOs
        </div>
      </div>
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationIho",
  data() {
    return {
      checked: 1,
    };
  },
  mounted() {
    if (this.$route.path == "/Start-upHUB/IHOs") {
      this.checked = 2;
    }
  },
  methods: {
    navhref(num) {
      this.checked = num;
      var router = "IHO";
      if (num == 2) {
        router = "IHOs";
      }
      this.$router.push(router);
    },
  },
};
</script>

<style lang="less" scoped>
.iho {
  padding-left: 177px;
  padding-top: 48px;
  .title {
    height: 54px;
    // margin: 48px 26px 9px 177px;
    font-family: NotoSansCJKkr;
    font-size: 36px;
    font-weight: bold;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    .font-color1;
  }
  .smail-title {
    height: 36px;
    //   margin: 9px 883px 79px 177px;
    font-family: NotoSansCJKkr;
    font-size: 24px;
    font-weight: 500;
    font-stretch: normal;
    font-style: normal;
    line-height: normal;
    letter-spacing: normal;
    .font-color1;
    margin-bottom: 79px;
  }
  .block {
    width: 948px;
    margin: 0 auto;
    .nav {
      width: 221px;
      margin: 0 auto;
      height: 40px;
      //   padding: 0 17px 0 0;
      border-radius: 24px;
      margin-bottom: 79px;
      .theme-pink-back2;
      display: flex;
      justify-content: space-between;
      align-items: center;
      .nav-item {
        width: 111px;
        height: 40px;
        border-radius: 21.5px;
        cursor: pointer;
        font-family: NotoSansCJKkr;
        font-size: 16px;
        font-weight: bold;
        font-stretch: normal;
        font-style: normal;
        line-height: 40px;
        letter-spacing: normal;
        text-align: center;
        .font-color4;
      }
      .checked {
        .theme-black-back;
      }
    }
  }
}
</style>