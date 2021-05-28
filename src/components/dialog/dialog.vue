<template>
  <div class="setting">
    <div class="mask">
      <div class="content">
        <slot />
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
      height: auto;
      // padding: 21px 19px 57px 47px;
      border-radius: 9px;
      border: solid 1px #979797;
      background-color: #ffffff;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>