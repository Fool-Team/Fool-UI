<script>
export default {
  name: "foolRow",
  props: {
    gutter: {
      type: Number,
      default: 0
    },
    tag: {
      type: String,
      default: 'div'
    },
    justify: {
      type: String,
      default: 'start'
    },
    align: String,
  },
  render(h) {
    const style = {};
    style.marginLeft = style.marginRight = `-${this.gutter / 2}px`;
    style.justifyContent = this.justify;
    style.align = this.align;
    
    return h(this.tag, {
      class: [     
        'fool-row',
      ],
      style: style
    }, this.$slots.default)
  },
};
</script>

<style lang="scss" scoped>
@import "../../theme-thalk/row.scss";
</style>
