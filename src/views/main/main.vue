<template>
  <div>
    <h4>Color for different levels</h4>
    <el-rate v-model="value2" :colors="colors" />
  </div>
</template>

<script setup lang="ts" name="main">
import { ref } from 'vue'

const value2 = ref(null)
const colors = ref(['#99A9BF', '#F7BA2A', '#FF9900']) // same as { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
</script>

<style scoped></style>
