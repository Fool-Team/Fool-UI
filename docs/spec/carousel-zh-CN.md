---
title: Carousel 跑马灯
---
## Carousel 走马灯

在有限空间内，循环播放同一类型的图片、文字等内容

### 基础用法

结合使用 `fool-carousel` 和 `fool-carousel-item` 标签就得到了一个走马灯。 每一个页面的内容是完全可定制的，把你想要展示的内容放在 `fool-carousel-item` 标签内。 默认情况下，在鼠标 hover 底部的指示器时就会触发切换。 通过设置 `trigger` 属性为 `click`，可以达到点击触发的效果。

<basic-carousel/>

### 切换箭头

可以设置切换箭头的显示时机

`arrow` 属性定义了切换箭头的显示时机。 默认情况下，切换箭头只有在鼠标 hover 到走马灯上时才会显示。 若将 `arrow` 设置为 `always`，则会一直显示；设置为 `never`，则会一直隐藏。

<toggle-arrows />

### 垂直布局

默认情况下，`direction` 为 `horizontal`。 通过设置 `direction` 为 `vertical` 来让走马灯在垂直方向上显示。

<vertical-carousel />

### Carousel 属性

| 属性名                       | 说明                                | 类型    | 可选值                 | 默认值     |
| ---------------------------- | ----------------------------------- | ------- | ---------------------- | ---------- |
| height                       | carousel 的高度                     | string  | ---                    | ---        |
| initial-index                | 初始状态激活的幻灯片的索引，从 0 开 | number  | ---                    | 0          |
| trrgger                      | 指示器的触发方                      | string  | hover / click          | hover      |
| autoplay                     | 是否自动切换                        | boolean | ---                    | false      |
| interval                     | 自动切换的时间间隔，单位为毫        | number  | ---                    | 3000       |
| indicator-position（未开发） | 指示器的位置                        | string  | outside / none         | ---        |
| arrow                        | 切换箭头的显示时                    | string  | always / hoevr / never | ---        |
| type（未开发）               | carousel 的类型                     | string  | card                   | ---        |
| loop（未开发）               | 是否循环显示                        | boolean | -                      | true       |
| direction                    | 展示的方向                          | string  | horizontal / vertical  | horizontal |
| pause-on-hover               | 鼠标悬浮时暂停自动切换              | boolean | -                      | true       |

### Carousel 方法

未开发

### Carousel 插槽

| 属性名 | 说明           | 子标签        |
| ------ | -------------- | ------------- |
| -      | 自定义默认内容 | Carousel-Item |

### Carousel-Item 属性

未开发

### Carousel-Item 插槽

| 插槽名 | 说明           |
| ------ | -------------- |
| -      | 自定义默认内容 |
