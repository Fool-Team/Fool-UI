<template>
  <div class="common-layout">
    <fool-container>
      <fool-header>Header</fool-header>
      <fool-container>
        <fool-aside style="height: 200px; width: 200px">Aside</fool-aside>
        <fool-container>
          <fool-main>Main</fool-main>
          <fool-footer>Footer</fool-footer>
        </fool-container>
      </fool-container>
    </fool-container>
  </div>
</template>

<script>
export default {
  name: 'layout-hamf'
}
</script>