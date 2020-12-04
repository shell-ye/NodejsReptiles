const request = require("superagent")
require("superagent-proxy")(request)

// 要访问的目标页面
const targetUrl = "http://www.baidu.com"

// 代理服务器,假设提取到的代理ip是123.123.123.123:1234
const proxyHost = "123.123.123.123";
const proxyPort = 1234;

// 代理隧道验证信息
const proxyUser = "xxx"
const proxyPass = "xxx"

const proxyUrl = "http://" + proxyUser + ":" + proxyPass + "@" + proxyHost + ":" + proxyPort

request.get(targetUrl).proxy(proxyUrl).end(function onResponse(err, res) {
    if (err) {
        return console.log(err)
    }
    console.log(res.status, res.headers)
    console.log(res.text)
});