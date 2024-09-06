import vTree from "./src/components/v-tree.vue";

vTree.install = function(Vue) {
    Vue.component(vTree.name, vTree);
};

export default vTree;