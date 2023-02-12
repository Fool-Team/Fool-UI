<template>
  <label :class="{ 'is-switch1': value }" class="switch" ref="swt">
    <input type="checkbox" @click="handleClick" :name="name" />
    <div class="switch-checked">
      <span></span>
    </div>
  </label>
</template>

<script>
export default {
  props: {
    value: {
      type: Boolean,
      default: false
    },
    activeColor: {
      type: String,
      default: ''
    },
    inactiveColor: {
      type: String,
      default: ''
    },
    name: {
      type: String,
      default: ''
    }
  },
  data() {
    return {}
  },
  methods: {
    async handleClick() {
      this.$emit('input', !this.value)
      // 点击的时候还要修改
      await this.$nextTick()
      this.setColor()
    },
    setColor() {
      if (this.activeColor || this.inactiveColor) {
        const color = this.value ? this.activeColor : this.inactiveColor
        this.$refs.swt.style.setProperty('--dot', color)
        this.$refs.swt.style.setProperty('--circle', color)
      }
    }
  },
  mounted() {
    this.setColor()
  },
  name: 'foolSwitch'
}
</script>

<style lang="scss" scoped>
@import '../../theme-thalk/switch.scss';
</style>
