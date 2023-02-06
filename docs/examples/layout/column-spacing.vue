<template>
  <div class="column-spacing">
    <fool-row :gutter="20">
      <fool-col :span="8">
        <div style="height: 24px; background: #E4E7ED; border-radius: 4px; min-height: 36px;"></div>
      </fool-col>
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
  name: 'column-spacing'
}
</script>