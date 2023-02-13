<template>
  <div class="basic-card">
    <fool-card shadow="always">
      <div v-for="i in 4" :key="i" class="card-body-item">List Item {{i}}</div>
    </fool-card>
  </div>
</template>

<script>
export default {
  name: 'easy-card'
}
</script>

<style lang="scss" scoped>
.card-body-item {
  padding: 18px 0;
  margin-bottom: 18px;
}
</style>