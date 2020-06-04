//引入http
const http = require("http");

//地址
const hostname = '127.0.0.1'

//端口
const port = 3000

// 创建服务器
const server = http.createServer((req, res) => {
    //返回状态
    res.statusCode = 200
        //设置请求头
    res.setHeader('Content-Type', 'text/plain')
    res.end('hello world')
})

//监听服务器
server.listen(port, hostname, () => {
    console.log('Server is running at' + port)
})