<template>
  <button
    class="fool-button"
    :class="[
      `fool-button--${type}`,
      {
        'is-round': round,
        'is-circle': circle,
        'is-disabled': disabled
      }
    ]"
    @click="resource ? (debounce ? fndebounce() : throttle()) : handleclick()"
    :disabled="disabled"
  >
    <div class="mask" v-if="disabled"></div>
    <i :class="`fool-icon-${icon}`" v-if="icon"></i>
    <span v-if="$slots.default" :class="icon ? 'is-icon' : 'is-default'">
      <slot></slot>
    </span>
  </button>
</template>

<script>
export default {
  name: 'foolButton',
  props: {
    type: {
      type: String,
      default: 'default'
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
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    resource: {
      type: Boolean,
      default: false
    },
    debounce: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      timer: null,
      flag: true
    }
  },
  methods: {
    fndebounce(e) {
      // this.$emit('click', e)
      if (this.timer != null) {
        clearTimeout(this.timer)
      }
      this.timer = setTimeout(() => {
        this.$emit('click', e)
        // console.log('防抖')
      }, 300)
    },
    throttle(e) {
      if (this.flag) {
        setTimeout(() => {
          this.$emit('click', e)
          // console.log('节流')
          this.flag = true
        }, 300)
        this.flag = false
      }
    },
    handleclick(e) {
      this.$emit('click', e)
      // console.log('正常')
    }
  }
}
</script>

<style scoped lang="scss">
@import '../../theme-thalk/button.scss';
</style>
