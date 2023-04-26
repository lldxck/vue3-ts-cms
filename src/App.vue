<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
// 为了让typescript正确的推导出组件选项内的类型，我们使用defineComponent()这个全局API来定义组件
export default defineComponent({
  name: 'App'
})
</script>

<style lang="less" scoped>
.app {
  width: 100%;
  height: 100%;
}
</style>
