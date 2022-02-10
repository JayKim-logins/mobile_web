const express = require('express')
const next = require('next')
const { createProxyMiddleware } = require("http-proxy-middleware")
const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV === 'development'
const app = next({ dev })
const handle = app.getRequestHandler()

// 트레이드 버스 port구분
// 로그인: 29000
// 이외 API: 18080

const apiPaths = {
  '/login': {
    target: 'http://210.217.150.160:29000',
    pathRewrite: {
      '^/login': '/'
    },
    changeOrigin: true
  },
  '/api': {
    target: 'http://210.217.150.160:18080',
    pathRewrite: {
      '^/api': '/'
    },
    changeOrigin: true
  }
}
app.prepare().then(() => {
  const server = express();
  if (dev) {
    server.use('/api', createProxyMiddleware(apiPaths['/api']))
  }
  server.all('*', (req, res) => {
    console.log(req)
    return handle(req, res)
  })
  server.listen(port, (err) => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
}).catch(err => {
 console.log('Error:::::', err)
})