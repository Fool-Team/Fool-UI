<template>
  <fool-switch v-model="active" name="username"></fool-switch>
</template>

<script>
export default {
  name: 'switch-pwh',
  data() {
    return {
      username: '123456',
      active: false
    }
  }
}
</script>

<style>
.fool-row {
  margin-bottom: 20px;
}
</style>
