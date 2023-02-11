<template>
  <div class="icon-collections">
    <h4 class="demo-title">All</h4>
    <ul class="demo-icon-list">
      <li class="demo-item" v-for="(icon, index) in iconNames" :key="index">
        <span class="demo-icon">
          <fool-icon :name="icon" size="30px"></fool-icon>
          <span class="icon-name">{{ icon }}</span>
        </span>
      </li>
    </ul>
  </div>
</template>

<script>
import { iconNames } from '../../.vuepress/public/icon-names'

export default {
  name: 'icon-collections',
  data () {
    return {
      iconNames
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../../.vuepress/styles/common/var.scss';

.demo-icon-list {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
}

.demo-item {
  height: 90px;
  box-sizing: border-box;
  text-align: center;
  border: 1px solid $--fool-border-color-grade-3;
  cursor: pointer;
}

.demo-icon {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
}
</style>