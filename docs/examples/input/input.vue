<template>
  <fool-input
    placeholder="请输入用户名"
    v-model="username"
    width="200px"
    showPassword
    type="password"
    clearable
  ></fool-input>
</template>

<script>
export default {
  name: 'input-pwh',
  data() {
    return {
      username: '123456'
    }
  }
}
</script>

<style>
.fool-row {
  margin-bottom: 20px;
}
</style>
