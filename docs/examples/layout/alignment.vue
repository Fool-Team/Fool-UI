<template>
  <div class="alignment">
    <h5>end</h5>
    <fool-row justify="end">
      <fool-col :span="8">
        <div style="height: 24px; background: #E4E7ED; border-radius: 4px; min-height: 36px;"></div>
      </fool-col>
      <fool-col :span="8">
        <div style="height: 24px; background: #E4E7ED; border-radius: 4px; min-height: 36px;"></div>
      </fool-col>
    </fool-row>
    <h5>center</h5>
    <fool-row justify="center">
      <fool-col :span="8">
        <div style="height: 24px; background: #E4E7ED; border-radius: 4px; min-height: 36px;"></div>
      </fool-col>
      <fool-col :span="8">
        <div style="height: 24px; background: #E4E7ED; border-radius: 4px; min-height: 36px;"></div>
      </fool-col>
    </fool-row>
    <h5>space-around</h5>
    <fool-row justify="space-around">
      <fool-col :span="8">
        <div style="height: 24px; background: #E4E7ED; border-radius: 4px; min-height: 36px;"></div>
      </fool-col>
      <fool-col :span="8">
        <div style="height: 24px; background: #E4E7ED; border-radius: 4px; min-height: 36px;"></div>
      </fool-col>
    </fool-row>
    <h5>space-between</h5>
    <fool-row justify="space-between">
      <fool-col :span="8">
        <div style="height: 24px; background: #E4E7ED; border-radius: 4px; min-height: 36px;"></div>
      </fool-col>
      <fool-col :span="8">
        <div style="height: 24px; background: #E4E7ED; border-radius: 4px; min-height: 36px;"></div>
      </fool-col>
    </fool-row>
  </div>
</template>

<script>
export default {
  name: 'alignment'
}
</script>

<style>
.fool-row {
  margin-bottom: 20px;
}
</style>