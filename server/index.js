const path = require('path')

const express = require('express')

const app = express()

const getFiles = require('./routes/server.js')

import users from './routes/users'

app.use('/', getFiles)

// 模块化开发，通过/users/getList来调用
app.use('/users', users)

// 获取本机ip地址
function getIPAdress () {
    const interfaces = require('os').networkInterfaces();
    for (const devName in interfaces) {
        const iface = interfaces[devName];
        for (let i = 0; i < iface.length; i++) {
            const alias = iface[i];
            if (alias.family === 'IPv4' && alias.address !== '127.0.0.1' && !alias.internal) {
                return alias.address;
            }
        }
    }
}

const server = app.listen(3000, function () {
    const host = server.address().address;
    const port = server.address().port;
    console.log(`应用实例，访问地址为 http://${getIPAdress()}:${port}`);
})