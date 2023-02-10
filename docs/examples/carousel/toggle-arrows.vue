<template>
  <div class="toggle-arrows doc-content">
    <fool-carousel :height="150" :autoplay="true" arrow="always">
      <fool-carousel-item v-for="i in 4" :key="i">
        <h3>{{ i }}</h3>
      </fool-carousel-item>
    </fool-carousel>
  </div>
</template>

<script>
export default {
  name: 'toggle-arrows'
}
</script>

<style scoped>
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
</style>