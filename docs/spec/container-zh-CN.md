---
title: Container 布局容器
---
## Container 布局容器

用于布局的容器组件，方便快速搭建页面的基本结构：

`<fool-container>`：外层容器。 当子元素中包含 `<fool-header>` 或 `<fool-footer>` 时，全部子元素会垂直上下排列， 否则会水平左右排列。

`<fool-header>`：顶栏容器。

`<fool-aside>`：侧边栏容器。

`<fool-main>`：主要区域容器。

`<fool-footer>`：底栏容器。

::: tip

以上组件采用了 flex 布局，使用前请确定目标浏览器是否兼容。 此外， `<fool-container>`的直接子元素必须是后四个组件中的一个或多个。 后四个组件的亲元素必须是一个 `<fool-container>`

:::

### 常见页面布局

<layout-hm />

---

---

<layout-hmf />

---

---

<layout-am />

---

---

<layout-ham />

---

---

<layout-hamf />

---

---

<layout-ahm />

---

---

<layout-ahmf />

### Container API

#### Container Attributes

| 属性名    | 说明             | 可选值                     | 默认值                                                                     |
| --------- | ---------------- | -------------------------- | -------------------------------------------------------------------------- |
| direction | 子元素的排列方向 | *vertical / horizontal* | 子元素中有 `el-header` 或 `el-footer` 时为 vertical，否则为 horizontal |

#### Container Slots

| 插槽名  | 说明           | 子标签                                     |
| ------- | -------------- | ------------------------------------------ |
| default | 自定义默认内容 | Container / Header / Aside / Main / Footer |

### Header API

#### Header Attributes

| 属性名 | 说明     | 可选值     | 默认值 |
| ------ | -------- | ---------- | ------ |
| height | 顶栏高度 | *string* | 60px   |

#### Header Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

### Aside API

#### Aside Attributes

| 属性名 | 说明       | 可选值     | 默认值 |
| ------ | ---------- | ---------- | ------ |
| height | 侧边栏宽度 | *string* | 300px  |

#### Aside Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |

### Main API

#### Main Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |



### Footer API

#### Footer Attributes

| 属性名 | 说明     | 可选值     | 默认值 |
| ------ | -------- | ---------- | ------ |
| height | 底栏高度 | *string* | 60px   |

#### Footer Slots

| 插槽名  | 说明           |
| ------- | -------------- |
| default | 自定义默认内容 |
