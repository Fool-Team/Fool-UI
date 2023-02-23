<template>
  <div class="fool-input" :class="{ 'fool-input_suffix': showSuffix }">
    <input
      class="fool-input_inner"
      :class="{ 'is-disabled': disabled }"
      :placeholder="placeholder"
      :type="showPassword ? (passwordVisible ? 'text' : 'password') : type"
      :name="name"
      :value="value"
      @input="handleInput"
      :disabled="disabled"
    />
    <span class="fool-input_suffix">
      <i
        class="on-input_icon fool-icon-cancel"
        v-if="clearable && value"
        @click="clear"
      ></i>
      <i
        class="on-input_icon fool-icon-visible"
        v-if="showPassword && type == 'password'"
        @click="handlePassword"
      ></i>
    </span>
  </div>
</template>
<script>
export default {
  name: 'foolInput',
  components: {},
  props: {
    placeholder: {
      type: String,
      default: ''
    },
    type: {
      type: String,
      default: 'text'
    },
    name: {
      type: String,
      default: ''
    },
    disabled: {
      type: Boolean,
      default: false
    },
    value: {
      type: String,
      default: ''
    },
    clearable: {
      type: Boolean,
      default: false
    },
    showPassword: {
      type: Boolean,
      default: false
    }
  },
  watch: {},
  computed: {
    showSuffix() {
      return this.clearable || this.showPassword
    }
  },
  data() {
    return {
      // 显示是否显示密码框
      passwordVisible: false
    }
  },
  methods: {
    handleInput(e) {
      this.$emit('input', e.target.value)
    },
    clear() {
      this.$emit('input', '')
    },
    handlePassword() {
      this.passwordVisible = !this.passwordVisible
    }
  }
}
</script>
<style lang="scss" scoped>
@import '../../theme-thalk/input.scss';
</style>
