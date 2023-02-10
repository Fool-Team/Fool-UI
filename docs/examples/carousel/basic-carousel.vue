<template>
  <div class="basic-carousel doc-content">
    <div class="block">
      <div class="carousel-title">Switch when indicator is hovered (default)</div>
      <fool-carousel :height="150" :autoplay="true">
        <fool-carousel-item v-for="i in 4" :key="i" :class="`carousel-item-${i}`">
          <h3>{{ i }}</h3>
        </fool-carousel-item>
      </fool-carousel>
    </div>
    <div class="block">
      <div class="carousel-title">Switch when indicator is clicked</div>
      <fool-carousel :height="150" trigger="click">
        <fool-carousel-item v-for="i in 4" :key="i" :class="`carousel-item-${i}`">
          <h3>{{ i }}</h3>
        </fool-carousel-item>
      </fool-carousel>
    </div>
  </div>
</template>

<script>
export default {
  name: 'basic-carousel'
}
</script>

<style lang="scss" scoped>
.fool-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.fool-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}
.fool-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

.block:nth-child(n-1) {
  margin-top: 16px;
}
</style>