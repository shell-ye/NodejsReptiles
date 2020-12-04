const request = require("request")

// 要访问的目标页面
const targetUrl = "http://www.baidu.com"

// 代理服务器,假设提取到的代理ip是123.123.123.123:1234
const proxyHost = "123.123.123.123"
const proxyPort = 1234

// 代理隧道验证信息
const proxyUser = "xxx"
const proxyPass = "xxx"

const proxyUrl = "http://" + proxyUser + ":" + proxyPass + "@" + proxyHost + ":" + proxyPort

const proxiedRequest = request.defaults({'proxy': proxyUrl})

const options = {
    url: targetUrl,
    headers: {}
}

proxiedRequest.get(options, function (err, res, body) {
    console.log("got response: " + res.statusCode)
    console.log("got response: " + body)
})
.on("error", function (err) {
    console.log(err);
})