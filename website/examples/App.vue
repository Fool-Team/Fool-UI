<template>
  <div id="app">
    <fool-checkbox></fool-checkbox>
    <fool-button circle>hello</fool-button>
    <fool-input></fool-input>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {},
  data() {
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
