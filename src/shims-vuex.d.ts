// vuex-shim.d.ts
// eslint-disable放在文件第一行，对整个文件生效
/* eslint-disable */
import { ComponentCustomProperties } from 'vue'
import { Store } from 'vuex'

declare module '@vue/runtime-core' {
  // 声明自己的 store state
  interface State {
    [name: string]: any
  }

  // 为 `this.$store` 提供类型声明
  interface ComponentCustomProperties {
    $store: Store<State>
  }
}
