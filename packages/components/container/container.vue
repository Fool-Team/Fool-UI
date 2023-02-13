<script>
export default {
  name: 'fool-container',
  props: {
    direction: String
  },
  computed: {
    containerClasses () {
      const isVertical =
        this.direction === 'vertical' ||
        this.$slots.default.some(
          ({ componentOptions }) =>
            componentOptions?.tag === 'fool-header' ||
            componentOptions?.tag === 'fool-footer'
        )
      return ['fool-container', isVertical ? 'is-vertical' : '']
    }
  },
  render (h) {
    return h('section', { class: this.containerClasses }, this.$slots.default)
  }
}
</script>

<style lang="scss" scoped>
@use '../../theme-thalk/container.scss' as *;
</style>