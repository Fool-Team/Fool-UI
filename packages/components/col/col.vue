<script>
export default {
  name: 'foolCol',
  props: {
    span: {
      // 栅格占据的列数
      type: Number,
      default: 24
    },
    tag: {
      type: String,
      default: 'div'
    },
    offset: Number, // 栅格左侧的间隔格数
    push: Number, // 栅格向右移动格数
    pull: Number, // 栅格向左移动格数
    xs: Number, // <768px
    sm: Number, // ≥768px
    md: Number, // ≥992px
    lg: Number, // ≥1200px
    xl: Number // ≥1920px
  },
  computed: {
    gutter () {
      let parent = this.$parent
      while (parent && parent.$options.name !== 'foolRow') {
        parent = parent.$parent
      }

      return parent ? parent.gutter : 0
    }
  },
  render (h) {
    const classArr = []
    const style = {}

    if (this.gutter) {
      style.paddingLeft = style.paddingRight = this.gutter / 2 + 'px'
    }

    for (const prop of ['span', 'offset', 'push', 'pull']) {
      if (!this[prop] && this[prop] !== 0) continue
      if (prop === 'span') {
        classArr.push(`fool-col-${this[prop]}`)
        continue
      }
      classArr.push(`fool-col-${prop}-${this[prop]}`)
    }

    for (const prop of ['xs', 'sm', 'md', 'lg', 'xl']) {
      if (!this[prop] && this[prop] !== 0) continue
      classArr.push(`fool-col-${prop}-${this[prop]}`)
    }

    return h(
      this.tag,
      {
        class: ['fool-col', classArr],
        style: style
      },
      this.$slots.default
    )
  }
}
</script>

<style lang="scss" scoped>
@import '../../theme-thalk/col.scss';
</style>