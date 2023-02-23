<template>
  <section style="padding: 16px">
    <p>date1:{{ date1 }}</p>
    <fool-input :placeholder="date1" disabled></fool-input>
    <date-picker :date.sync="date1" :is-show.sync="showDate1"></date-picker>
    <p>date2:{{ date2 }}</p>
    <fool-input :placeholder="date2" disabled></fool-input>
    <date-picker1 :date.sync="date2" :is-show.sync="showDate2"></date-picker1>
    <p>date3:{{ date3 }}</p>
    <fool-input :placeholder="date3" disabled></fool-input>
    <fool-picker0
      :datetime.sync="date3"
      :is-show.sync="showDate3"
    ></fool-picker0>
    <fool-button>hello</fool-button>
  </section>
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
  name: 'PickerTest',
  data: () => ({
    showDate1: false,
    showDate2: false,
    showDate3: false,
    date1: new Date().format('yyyy-MM-dd'),
    date2: new Date().format('yyyy-MM-dd'),
    date3: new Date().format('yyyy-MM-dd hh:mm:ss')
  })
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
    line-height: 30px;
    text-align: right;
    white-space: nowrap;
    button {
      outline: none;
      border: solid 1px gainsboro;
      border-radius: 2px;
      color: #8a8a8a;
      height: 24px;
      font-size: 12px;
      background-color: #f3f3f3;
    }
    button:active,
    button:hover {
      border-color: #388dea;
      color: #388dea;
      background-color: #d9edf6;
    }
  }
}
</style>
>
