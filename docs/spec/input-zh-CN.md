## input 输入框

### 基础用法

<input-pwh />
```vue
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
```