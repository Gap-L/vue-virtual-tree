# vue-virtual-tree

## npm install @gaplin/vue-virtual-tree

## 或

## yarn add @gaplin/vue-virtual-tree

## 额外安装有版本要求的依赖

### 安装sass-loader，命令：npm add sass-loader@8.0.2

### 安装node-sass，命令：npm add node-sass@4.14.1

## 全局引入
<strong>在 main.js 文件中引入：</strong>

```js
import Vue from 'vue'
import App from './App.vue'
import VueVirtualTree from '@gaplin/vue-virtual-tree'
import '@gaplin/vue-virtual-tree/src/assets/index.scss'

Vue.config.productionTip = false
Vue.use(VueVirtualTree)
new Vue({
  render: h => h(App),
}).$mount('#app')
```
## 组件引入

```js
<strong>在组件中引入：</strong>
import VueVirtualTree from "@gaplin/vue-virtual-tree";
import '@gaplin/vue-virtual-tree/src/assets/index.scss';

export default {
  components: {
    VueVirtualTree,
  },
}
```
## 使用:
```html
<template>
  <div class="ve-tree" style="height: calc(100vh - 20px)">
    <!-- 不使用虚拟滚动时只需去掉height参数即可 -->
    <VueVirtualTree
      ref="veTree"
      node-key="id"
      height="calc(100vh - 20px)"
      :data="treeData"
      show-checkbox
      :props="props"
    ></VueVirtualTree>
  </div>
</template>
```
```js
export default {
  components: {
    VueVirtualTree,
  },
  data() {
    return {
      props: {
        label: "name",
        children: "children",
      },
      treeData: [],
    };
  },
  created() {
    const data = [],
      root = 8,
      children = 3,
      base = 1000;
    for (let i = 0; i < root; i++) {
      data.push({
        id: `${i}`,
        name: `test-${i}`,
        children: [],
      });
      for (let j = 0; j < children; j++) {
        data[i].children.push({
          id: `${i}-${j}`,
          name: `test-${i}-${j}`,
          children: [],
        });
        for (let k = 0; k < base; k++) {
          data[i].children[j].children.push({
            id: `${i}-${j}-${k}`,
            name: `test-${i}-${j}-${k}`,
          });
        }
      }
    }
    this.treeData = data;
  },
};
```
