<script>
export default {
  name: 'fool-icon',
  props: {
    name: String,
    size: {
      type: String,
      default: 'inherit'
    },
    color: {
      type: String,
      default: 'inherit'
    },
    dot: {
      type: Boolean,
      default: false
    },
    badge: [Number, String],
    classPrefix: {
      type: String,
      default: 'fool-icon'
    }
  },
  computed: {
    iconClasses () {
      return [
        this.classPrefix,
        this.name ? `${this.classPrefix}-${this.name}` : '',
        this.dot ? 'fool-badge--wrapper' : ''
      ]
    },
    iconStyle () {
      return { fontSize: this.size, color: this.color }
    },
    badgeClasses () {
      return [
        'fool-badge',
        'fool-badge--fixed',
        'fool-badge--top-right',
        !this.badge ? 'fool-badge--dot' : ''
      ]
    }
  },
  render (h) {
    return h(
      'i',
      {
        class: this.iconClasses,
        style: this.iconStyle
      },
      [
        this.dot
          ? h(
            'div',
            {
              class: this.badgeClasses
            },
            this.badge
          )
          : ''
      ]
    )
  }
}
</script>

<style lang="scss" scoped>
@import '../../theme-thalk/icon.scss';
</style>