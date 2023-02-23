<template>
  <div style="display: inline-block">
    <span @click="showPicker">{{ getLangText(label.datePicker) }}</span>
    <div class="date-picker-bg" v-show="isShow" @click="closePicker"></div>
    <div
      class="date-picker"
      v-show="isShow"
      :style="{ width: '220px', top: pickerTop > 0 ? pickerTop + 'px' : '' }"
    >
      <div class="picker-top">
        <span class="picker-arrow" @click="preYear">&lsaquo; &lsaquo;</span>
        <span class="picker-arrow" @click="preMonth">&lsaquo;</span>
        <span class="date-text"
          >{{ year }}-{{ month > 9 ? month : '0' + month }}</span
        >
        <span class="picker-arrow" @click="nextMonth">&rsaquo;</span>
        <span class="picker-arrow" @click="nextYear">&rsaquo;&rsaquo;</span>
      </div>
      <!--生成对应的月份星期表格 start-->
      <div class="picker-content">
        <table>
          <thead>
            <tr>
              <th v-for="(item, idx) in weekList" :key="'week' + idx">
                {{ getLangText(item) }}
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="idx in weekNum" :key="'weekNum' + idx">
              <td
                v-for="m in 7"
                :key="'monthDay' + idx + '_' + m"
                :class="[
                  new Date(monthList[idx - 1][m - 1]).getMonth() + 1 == month
                    ? ''
                    : 'gray',
                  selectDate == monthList[idx - 1][m - 1] ? 'active' : ''
                ]"
                @click="onSelectDate(monthList[idx - 1][m - 1])"
                @dblclick="onConfirmDate(monthList[idx - 1][m - 1])"
              >
                {{ new Date(monthList[idx - 1][m - 1]).getDate() }}
              </td>
              <!--日期为该月为深色否则为浅色-->
            </tr>
          </tbody>
        </table>
      </div>
      <!--生成对应的月份星期表格 end-->
      <div class="picker-footer">
        <!-- <fool-button @click="closePicker" class="mybutton">{{
          getLangText(label.close)
        }}</fool-button>
        <fool-button @click="setNow">{{
          getLangText(label.today)
        }}</fool-button> -->
        <!-- <button @click="confirmPicker">{{getLangText(label.ok)}}</button> -->
      </div>
    </div>
  </div>
</template>
<script>
Date.prototype.format = function(fmt) {
  //author: meizz
  var o = {
    'M+': this.getMonth() + 1, //月份
    'd+': this.getDate(), //日
    'h+': this.getHours(), //小时
    'm+': this.getMinutes(), //分
    's+': this.getSeconds(), //秒
    'q+': Math.floor((this.getMonth() + 3) / 3), //季度
    S: this.getMilliseconds() //毫秒
  }
  if (/(y+)/.test(fmt))
    fmt = fmt.replace(
      RegExp.$1,
      (this.getFullYear() + '').substr(4 - RegExp.$1.length)
    )
  for (var k in o)
    if (new RegExp('(' + k + ')').test(fmt))
      fmt = fmt.replace(
        RegExp.$1,
        RegExp.$1.length == 1 ? o[k] : ('00' + o[k]).substr(('' + o[k]).length)
      )
  return fmt
}
export default {
  name: 'DatePicker',
  props: {
    langType: {
      type: String,
      default: window.localStorage.getItem('langType')
    },
    date: {
      type: String,
      default: new Date().format('yyyy-MM-dd')
    },
    isScroll: {
      type: Boolean,
      default: false
    },
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data: () => ({
    label: {
      ok: { zh: '确定', en: 'OK' },
      close: { zh: '关闭', en: 'close' },
      today: { zh: '今天', en: 'today' },
      datePicker: { zh: '日期选择', en: 'DatePicker' }
    },
    weekList: [
      { zh: '日', en: 'Sun' },
      { zh: '一', en: 'Mon' },
      { zh: '二', en: 'Tue' },
      { zh: '三', en: 'Wed' },
      { zh: '四', en: 'Thu' },
      { zh: '五', en: 'Fir' },
      { zh: '六', en: 'Sat' }
    ],
    year: new Date().getFullYear(),
    month: new Date().getMonth() + 1,
    day: new Date().getDate(),

    startDay: 0,
    endDay: 0,
    weekNum: 0,
    selectDate: new Date(new Date().format('yyyy-MM-dd 00:00')).getTime(),
    monthList: [],
    pickerTop: 0
  }),
  watch: {
    year() {
      this.getMonthDay()
    },
    month() {
      this.getMonthDay()
    }
  },
  methods: {
    getLangText(item) {
      if (item) {
        if (this.langType == 'en') {
          if (item.en && item.en.length > 1) {
            return item.en.substring(0, 1).toUpperCase() + item.en.substring(1)
          } else if (item.en && item.en.length == 1) {
            return item.en.toUpperCase()
          } else {
            return '--'
          }
        } else {
          return item.zh ? item.zh : '--'
        }
      } else {
        return '--'
      }
    },
    preYear() {
      this.year = this.year - 1
    },
    nextYear() {
      this.year = this.year + 1
    },
    nextMonth() {
      if (this.month == 12) {
        this.year = this.year + 1
        this.month = 1
      } else {
        this.month++
      }
    },
    preMonth() {
      if (this.month == 1) {
        this.year = this.year - 1
        this.month = 12
      } else {
        this.month--
      }
    },
    showPicker(e) {
      if (this.isScroll) {
        this.pickerTop = e.clientY + e.offsetY
        var h = document.getElementById('app').offsetHeight
        if (this.pickerTop > h - 230) {
          this.pickerTop = h - 230
        }
      }

      this.$emit('update:is-show', true)
      var time = new Date(this.date).getTime()
      this.year = new Date(time).getFullYear()
      this.month = new Date(time).getMonth() + 1
      this.day = new Date(time).getDate()
      this.selectDate = new Date(
        new Date(time).format('yyyy-MM-dd 00:00')
      ).getTime()
    },
    onConfirmDate(time) {
      this.onSelectDate(time)
      this.confirmPicker()
    },
    closePicker() {
      this.$emit('update:is-show', false)
    },
    setNow() {
      this.year = new Date().getFullYear()
      this.month = new Date().getMonth() + 1
      this.day = new Date().getDate()
      this.selectDate = new Date(
        new Date().format('yyyy-MM-dd 00:00')
      ).getTime()
    },
    confirmPicker() {
      this.$emit('update:date', new Date(this.selectDate).format('yyyy-MM-dd'))
      this.$emit(
        'picker-result',
        new Date(this.selectDate + this.selectHour * 3600000).format(
          'yyyy-MM-dd hh:00'
        )
      )
      this.closePicker()
    },
    getMonthDay() {
      var monthFirst = new Date(this.year + '-' + this.month + '-01 00:00')
      var w = monthFirst.getDay()

      this.startDay = monthFirst.getTime() - w * 24 * 3600 * 1000
      if (this.month == 12) {
        this.endDay = new Date(this.year + 1 + '-01-01 00:00').getTime() - 1000
      } else {
        this.endDay =
          new Date(this.year + '-' + (this.month + 1) + '-01 00:00').getTime() -
          1000
      }

      var monthDay = (this.endDay + 1000 - this.startDay) / (24 * 3600 * 1000)
      this.weekNum = Math.ceil(monthDay / 7)
      this.monthList = []
      for (var i = 0; i < this.weekNum; i++) {
        var item = []
        for (var j = 0; j < 7; j++) {
          item.push(
            this.startDay + i * 24 * 3600 * 1000 * 7 + j * 24 * 3600 * 1000
          )
        }
        this.monthList.push(item)
      }
    },
    onSelectDate(time) {
      this.selectDate = time
      this.year = new Date(time).getFullYear()
      this.month = new Date(time).getMonth() + 1
      this.day = new Date(time).getDate()
      this.$emit('update:date', new Date(time).format('yyyy-MM-dd'))
    }
  },
  mounted() {
    this.getMonthDay()
  }
}
</script>
<style lang="scss" scoped>
.date-picker-bg {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 5;
}

.date-picker {
  background-color: white;
  position: fixed;
  display: block;
  padding: 4px;
  z-index: 6;
  border: solid 1px gainsboro;
  border-radius: 2px;
  .picker-top {
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 30px;
    line-height: 30px;
    .picker-arrow {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      width: 30px;
      height: 30px;
      cursor: pointer;
      .iconfont {
        color: #8a8a8a;
      }
      .iconfont:active,
      .iconfont:hover {
        color: #388dea;
      }
    }

    .date-text {
      flex: 1;
      font-weight: bold;
      display: inline-block;
      text-align: center;
      font-size: 14px;
    }
  }

  .picker-content {
    display: block;
    border-top: solid 1px gainsboro;
    border-bottom: solid 1px gainsboro;
    height: 160px;
    table {
      width: 100%;
      border-collapse: collapse;
      border-spacing: 0;
      font-size: 12px;
      line-height: 20px !important;
      thead > tr {
        background-color: #cedeee;
        th {
          text-align: center;
          font-weight: normal;
        }
      }
      tbody {
        tr {
          td {
            font-weight: 600;
            cursor: pointer;
            text-align: center;
          }
          td.gray {
            font-weight: normal;
            color: #8a8a8a;
          }
          td.active {
            color: white;
            background: #388dea;
          }
        }
      }
    }
  }

  .picker-content1 {
    @extend .picker-content;
    display: flex;
    flex-direction: row;
    table {
      width: calc(100% - 40px);
    }
    .hour-list {
      display: inline-block;
      list-style: none;
      padding: 0;
      margin: 0;
      height: 100%;
      overflow-x: hidden;
      width: 40px;
      font-size: 12px;

      overflow-y: auto;
      li {
        padding: 0;
        margin: 0;
        display: flex;
        align-items: center;
        padding: 0 4px;
        height: 20px;
        cursor: pointer;
      }
      li:not(:last-child) {
        border-bottom: solid 1px gainsboro;
      }
      li.active {
        color: white;
        background: #388dea;
      }
    }
    .hour-list::-webkit-scrollbar {
      background: transparent;
      height: 8px;
      width: 8px;
      border: none;
    }

    .hour-list::-webkit-scrollbar-thumb {
      background: lightgray;
      border-radius: 5px;
    }
    //设置滚动条 end
  }

  .picker-footer {
    display: block;
    line-height: 20px;
    text-align: right;
    white-space: nowrap;
    // button {
    //   outline: none;
    //   border: solid 1px gainsboro;
    //   border-radius: 2px;
    //   color: #8a8a8a;
    //   height: 24px;
    //   font-size: 12px;
    //   background-color: #f3f3f3;
    // }
    // button:active,
    // button:hover {
    //   border-color: #388dea;
    //   color: #388dea;
    //   background-color: #d9edf6;
    // }
  }
}
.mybutton {
  margin: 0 5px;
}
</style>
