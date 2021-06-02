<template>
  <div class="dialog">
    <div class="mask" @click="close">
      <!-- 阻止冒泡事件传播 -->
      <div class="content" @click.stop="">
        <div class="close" @click="close()"></div>
        <slot />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "EducationSetting",
  props:{
    is_close:{
      type:Boolean,
      default:false
    }
  },
  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {
    close() {
      console.log('应该关闭这个弹框')
      this.$emit('update:is_close',false);
    },
    close1() {
    }
  },
};
</script>

<style lang="less" scoped>
.dialog {
  position: relative;
  .mask {
    > .content {
      position: relative;
      .close {
        position: absolute;
        right: 20px;
        top: 20px;
        width: 20px;
        height: 20px;
        cursor: pointer;
        background-size: 100% 100%;
        background-image: url(../../../public/assets/del.png);
      }
      position: absolute;
      margin: 0 auto;
      // width: 480px;
      height: auto;
      // padding: 21px 19px 57px 47px;
      border-radius: 9px;
      // border: solid 1px #979797;
      // background-color: #ffffff;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
    }
  }
}
</style>