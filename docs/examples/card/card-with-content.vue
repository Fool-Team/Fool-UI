<template>
  <fool-row :gutter="40">
    <fool-col :span="12" v-for="i in 2" :key="i">
      <div class="card-with-content">
        <fool-card class="box-card" shadow="always">
          <img src="https://vuepress.vuejs.org/hero.png" alt />
          <div class="card-contnet">
            <div class="introduce">Fool-Card</div>
            <div class="bottom">
              <div class="time">
                当前时间 20:54
                <br />2023年2月12日星期日
              </div>
              <fool-button class="link">Operating</fool-button>
            </div>
          </div>
        </fool-card>
      </div>
    </fool-col>
  </fool-row>
</template>

<script>
export default {
  name: 'card-with-content'
}
</script>

<style lang="scss" scoped>
@import '../../.vuepress/styles/common/var.scss';
.bottom {
  display: flex;
  justify-content: space-between;
  margin-top: 13px;
  color: $--text-color-grade-4;

  .time {
    font-size: 12px;
  }
}
</style>