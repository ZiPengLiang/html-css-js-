const path = require('path');
const express = require('express');
const app = express();
const server = require('http').Server(app);
const WebSocket = require('ws');

const wss = new WebSocket.Server({ server: server });

wss.on('connection', (ws, req) => {
    ws.on('message', (message) => {
        // 广播消息给所有客户端
        wss.clients.forEach(function each(client) {
            if (client.readyState === WebSocket.OPEN) {
                client.send(message);
            }
        });
    })

    // 连接关闭
    ws.on('close', () => {
        console.log('连接关闭');
    });
});


server.listen(3012, function() {
    console.log('http://localhost:3012');
});