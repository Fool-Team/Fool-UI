<template>
  <div :class="cardClasses" :style="bodyStyle">
    <div v-if="$slots.header || header" class="fool-card__header">
      <slot name="header">{{ header }}</slot>
    </div>
    <div class="fool-card__body">
      <slot name="default"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'fool-card',
  props: {
    header: String,
    bodyStyle: Object,
    shadow: {
      type: String,
      default: 'never' //  lways | never | hover
    }
  },
  computed: {
    cardClasses () {
      return [
        'fool-card',
        this.shadow || this.shadow === 'never' ? `is-${this.shadow}-shadow` : ''
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
@use '../../theme-thalk/card.scss';
</style>