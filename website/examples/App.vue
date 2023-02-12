<template>
  <div id="app">
    <fool-card class="box-card" shadow="always">
      <template #header>header</template>
      <div v-for="i in 4" :key="i">List Item {{i}}</div>
    </fool-card>
    <fool-card class="box-card" shadow="hover" header="这是 props 传入的 header">
      <div v-for="i in 4" :key="i">List Item {{i}}</div>
    </fool-card>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {},
  data () {
    return {
      visible: false,
      active: true
    }
  }
}
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
}

.box-card {
  width: 400px;
}
.box-card:not(:last-child) {
  margin-bottom: 20px;
}
</style>
