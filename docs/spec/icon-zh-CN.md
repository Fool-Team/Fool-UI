---
title: Icon 图标
---
## Icon 图标

Fool UI 提供了一套常用的图标集合。

### 基础用法

```vue
<template>
  <div>
    <fool-icon :name="name" :size="size" :color="color" />
  </div>
</template>
```

<basic-icon />

### 徽标提示

<badge-icon />


### 图标合集

<icon-collections />

### API

#### Attributes

| 属性名                | 说明                                                     | 类型                | 默认值   |
| --------------------- | -------------------------------------------------------- | ------------------- | -------- |
| name                  | 图标名称或图片链接                                       | *string*          | -        |
| dot                   | 是否显示图标右上角小红点                                 | *boolean*         | false    |
| badge                 | 图标右上角徽标的内容                                     | *number / string* | -        |
| badge-props（未开发） | 自定义徽标的属性，传入的对象会被透传给Badge 组件的 props | *BadgeProps*      | -        |
| color                 | 图标颜色                                                 | *string*          | inherit  |
| size                  | 图标大小，如 `20px` `2em`，默认单位为 `px`         | *number / string* | inherit  |
| class-prefix          | 类名前缀，用于使用自定义图标                             | *string*          | van-icon |
| tag（未开发）         | 根节点对应的 HTML 标签名                                 | *string*          | i        |

#### Event

| 事件名 | 说明         | 回调参数              |
| ------ | ------------ | --------------------- |
| click  | 点击图标时触 | *event: MouseEvent* |
