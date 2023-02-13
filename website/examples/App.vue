<template>
  <div id="app">
    <fool-container>
      <fool-header>header</fool-header>
      <fool-container>
        <fool-aside style="width: 200px;">aside</fool-aside>
        <fool-main>main</fool-main>
      </fool-container>
      <fool-footer>footer</fool-footer>
    </fool-container>
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
</style>
