// 方式一：手动切换不同环境（不推荐）
// export const BASE_URL = 'http://codewhy/dev'
// export const BASE_NAME = 'coderwhy'

// export const BASE_URL = 'http://codewhy/pro'
// export const BASE_NAME = 'jack'

// export const BASE_URL = 'http://codewhy/test'
// export const BASE_NAME = 'rose'

// 方式二：process.env.NODE_ENV区分
// 开发环境：development
// 生产环境：production
// 测试环境：test

let BASE_URL = ''
let BASE_NAME = ''

if (process.env.NODE_ENV == 'development') {
  BASE_URL = 'http://codewhy/dev'
  BASE_NAME = 'coderwhy'
} else if (process.env.NODE_ENV == 'production') {
  BASE_URL = 'http://codewhy/pro'
  BASE_NAME = 'jack'
} else {
  BASE_URL = 'http://codewhy/test'
  BASE_NAME = 'rose'
}
export { BASE_URL, BASE_NAME }
