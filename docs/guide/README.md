---
title: 介绍
---

## 介绍

VuePress 由两部分组成：第一部分是一个[极简静态网站生成器 **(opens new window)**](https://github.com/vuejs/vuepress/tree/master/packages/%40vuepress/core)，它包含由 Vue 驱动的[主题系统](https://vuepress.vuejs.org/zh/theme/)和[插件 API](https://vuepress.vuejs.org/zh/plugin/)，另一个部分是为书写技术文档而优化的[默认主题](https://vuepress.vuejs.org/zh/theme/default-theme-config.html)，它的诞生初衷是为了支持 Vue 及其子项目的文档需求。

每一个由 VuePress 生成的页面都带有预渲染好的 HTML，也因此具有非常好的加载性能和搜索引擎优化（SEO）。同时，一旦页面被加载，Vue 将接管这些静态内容，并将其转换成一个完整的单页应用（SPA），其他的页面则会只在用户浏览到的时候才按需加载。

## 它是如何工作的？

事实上，一个 VuePress 网站是一个由 [Vue **(opens new window)**](http://vuejs.org/)、[Vue Router **(opens new window)**](https://github.com/vuejs/vue-router)和 [webpack **(opens new window)**](http://webpack.js.org/)驱动的单页应用。如果你以前使用过 Vue 的话，当你在开发一个自定义主题的时候，你会感受到非常熟悉的开发体验，你甚至可以使用 Vue DevTools 去调试你的自定义主题。

在构建时，我们会为应用创建一个服务端渲染（SSR）的版本，然后通过虚拟访问每一条路径来渲染对应的 HTML。这种做法的灵感来源于 [Nuxt **(opens new window)**](https://nuxtjs.org/)的 `nuxt generate` 命令，以及其他的一些项目，比如 [Gatsby **(opens new window)**](https://www.gatsbyjs.org/)。
