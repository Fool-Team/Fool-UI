<script>
export default {
  name: 'fool-main',
  render (h) {
    const classes = ['fool-main']
    return h('main', { class: classes }, this.$slots.default)
  }
}
</script>

<style lang="scss" scoped>
@use '../../theme-thalk/main.scss' as *;
</style>