<template>
  <div class="basic-card">
    <fool-card shadow="always">
      <template #header>
        <div class="card-header">
          <div class="card-name">Card name</div>
          <fool-button :round="true">Operation button</fool-button>
        </div>
      </template>
      <div v-for="i in 4" :key="i" class="card-body-item">List Item {{i}}</div>
    </fool-card>
  </div>
</template>

<script>
export default {
  name: 'basic-card'
}
</script>

<style lang="scss" scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.card-body-item {
  margin-bottom: 18px;
}
</style>