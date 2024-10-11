const express = require('express')
const path = require('path')
const app = express()

// 빌드된 정적 파일 제공
app.use(express.static(path.join(__dirname, 'dist')))

// 모든 요청에 대해 index.html 반환
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})

// 포트 설정
const PORT = process.env.PORT || 8000 // Koyeb가 제공하는 포트 사용
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`)
})
