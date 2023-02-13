<script>
export default {
  name: 'fool-footer',
  props: {
    height: {
      type: String,
      default: '60px'
    }
  },
  computed: {
    footerStyles () {
      return { height: this.height }
    }
  },
  render (h) {
    const classes = ['fool-footer']
    return h(
      'footer',
      { class: classes, style: this.footerStyles },
      this.$slots.default
    )
  }
}
</script>

<style lang="scss" scoped>
@use '../../theme-thalk/footer.scss' as *;
</style>