<script>
export default {
  name: 'fool-header',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  },
  computed: {
    headerStyles () {
      return { height: this.height }
    }
  },
  render (h) {
    const classes = ['fool-header']
    return h(
      'header',
      { class: classes, style: this.headerStyles },
      this.$slots.default
    )
  }
}
</script>

<style lang="scss" scoped>
@use '../../theme-thalk/header.scss' as *;
</style>