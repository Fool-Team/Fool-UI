<template>
  <button
    class="fool-button"
    :class="[
      `fool-button--${type}`,
      {
        'is-plain': plain,
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled
      }
    ]"
    @click="handleClick"
    :disabled="disabled"
  >
    <i v-if="icon" :class="`fool-icon-${icon}`"></i>
    <!-- 如果没传入文本插槽，则不显示span内容 -->
    <span v-if="$slots.default"><slot></slot></span>
  </button>
</template>

<script>
export default {
  name: "foolButton",
  // 此时对props进行校验，值接收string类型的type值
  props: {
    type: {
      type: String,
      // 设置默认值：如果不传值，那么使用default
      default: "defalut"
    },
    plain: {
      type: Boolean,
      default: false
    },
    round: {
      type: Boolean,
      default: false
    },
    circle: {
      type: Boolean,
      default: false
    },
    icon: {
      type: String,
      default: ""
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  created() {
    // 显示所有插槽
    // console.log(this.$slots)
  },
  methods: {
    // 定义一个点击事件，这个点击事件的作用是调用父组件中的点击事件，并且回调
    handleClick(e) {
      this.$emit("click", e);
    }
  }
};
</script>

<style lang="scss" scoped>
@import "../../theme-thalk/button.scss";
</style>
