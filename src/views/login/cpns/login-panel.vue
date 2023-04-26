<template>
  <div class="login-panel">
    <h1 class="title">后台管理系统</h1>
    <el-tabs type="border-card" stretch>
      <el-tab-pane>
        <template #label>
          <el-icon><User /></el-icon>
          <span class="ml-4px">账号登录</span>
        </template>
        <LoginAccount />
      </el-tab-pane>
      <el-tab-pane>
        <template #label>
          <el-icon><Iphone /></el-icon>
          <span class="ml-4px">手机登录</span>
        </template>
        <LoginPhone />
      </el-tab-pane>
    </el-tabs>
  </div>
</template>

<script setup lang="ts" name="loginPanel">
import LoginAccount from './login-account.vue'
import LoginPhone from './login-phone.vue'
</script>

<style lang="less" scoped>
.login-panel {
  width: 320px;
  text-align: center;
}
</style>
