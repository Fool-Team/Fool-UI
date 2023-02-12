<template>
  <div class="basic-card">
    <fool-row :gutter="20">
      <fool-col :span="8">
        <fool-card shadow="always">Always</fool-card>
      </fool-col>
      <fool-col :span="8">
        <fool-card shadow="hover">Hover</fool-card>
      </fool-col>
      <fool-col :span="8">
        <fool-card>Never</fool-card>
      </fool-col>
    </fool-row>
  </div>
</template>

<script>
export default {
  name: 'shadow-card'
}
</script>

<style lang="scss" scoped>
.card-body-item {
  padding: 18px 0;
  margin-bottom: 18px;
}
</style>