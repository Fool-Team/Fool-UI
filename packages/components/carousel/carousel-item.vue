<template>
  <div class="fool-carousel__item">
    <slot />
  </div>
</template>

<script>
export default {
  name: 'foolCarouselItem'
}
</script>

<style lang="scss" scoped>
@use '../../theme-thalk/carousel-item.scss' as *;
</style>