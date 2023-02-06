<template>
  <div class="responsive-layout">
    <fool-row>
      <fool-col :xs="24" class="hidden-sm-and-up">
        <div style="height: 24px; background: #E4E7ED; border-radius: 4px; min-height: 36px;"></div>
      </fool-col>
    </fool-row>
  </div>
</template>

<script>
export default {
  name: 'responsive-layout'
}
</script>