<script>
export default {
  name: 'fool-aside',
  props: {
    width: {
      type: String,
      default: '300px'
    }
  },
  computed: {
    asideStyles () {
      return { width: this.width }
    }
  },
  render (h) {
    const classes = ['fool-aside']
    return h(
      'aside',
      { class: classes, style: this.asideStyles },
      this.$slots.default
    )
  }
}
</script>

<style lang="scss" scoped>
@use '../../theme-thalk/aside.scss' as *;
</style>