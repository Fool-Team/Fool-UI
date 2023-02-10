<template>
  <div id="app">
    <fool-button icon="bluetoothon"></fool-button>
    <fool-button type="primary" icon="delete">照相机</fool-button>
    <fool-button type="success" circle round>机</fool-button>
    <fool-button type="info" icon="bluetooth_link"></fool-button>
    <fool-button type="danger" icon="addto"></fool-button>
    <fool-button type="warning" icon="audio"></fool-button>
    <fool-button type="primary" @click="visible = true" round resource debounce
      >dialog开关</fool-button
    >
    <fool-dialog top="10%" :visible.sync="visible">
      <template v-slot:title>hello</template>
      <ul>
        <li>1</li>
        <li>2</li>
        <li>3s</li>
      </ul>
      <template v-slot:footer>
        <fool-button type="primary" @click="visible = false">确认</fool-button>
        <fool-button @click="visible = false">取消</fool-button>
      </template>
    </fool-dialog>

    <fool-row style="marginTop: 40px">
      <fool-col :span="12" :offset="6">
        <fool-carousel :height="180" trigger="click" direction="vertical">
          <fool-carousel-item v-for="i in 5" :key="i">
            <h3 style="lineHeight: 100px; margin: 0">{{ i }}</h3>
          </fool-carousel-item>
        </fool-carousel>
      </fool-col>
    </fool-row>
  </div>
</template>
<script>
export default {
  name: 'App',
  components: {},
  data() {
    return {
      visible: false
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
