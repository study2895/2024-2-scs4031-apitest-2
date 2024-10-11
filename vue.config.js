const { defineConfig } = require('@vue/cli-service')
const path = require('path')

module.exports = defineConfig({
  transpileDependencies: true,
  chainWebpack: (config) => {
    // ESLint 비활성화
    config.module.rules.delete('eslint')
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src')
      }
    }
  },
  devServer: {
    proxy: {
      '/api': {
        target: 'http://apis.data.go.kr', // API 서버의 URL
        changeOrigin: true,
        pathRewrite: { '^/api': '' }
      },
      '/v1/search': {
        target: 'https://openapi.naver.com', // Naver API 주소
        changeOrigin: true, // CORS 해결을 위한 설정
        pathRewrite: { '^/v1/search': '/v1/search' }, // 실제 경로와 일치하도록 설정
        secure: false // HTTPS 인증서 관련 문제 무시
      }
    }
  }
})
