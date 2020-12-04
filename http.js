const http = require("http")
const url  = require("url")

// 要访问的目标页面
const targetUrl = "http://www.baidu.com"
const urlParsed   = url.parse(targetUrl)

// 代理服务器,假设提取到的代理ip是123.123.123.123:1234
const proxyHost = "123.123.123.123"
const proxyPort = "1234"

// 代理隧道验证信息
const proxyUser = "2120110900197641441"
const proxyPass = "ttSSuifGIRbGRTpY"

const base64    = Buffer.from(proxyUser + ":" + proxyPass).toString("base64")

const options = {
    host: proxyHost,
    port: proxyPort,
    path: targetUrl,
    method: "GET",
    headers: {
        "Host": urlParsed.hostname,
        "Proxy-Authorization": "Basic " + base64
    }
}

http.request(options, function(res) {
    console.log("got response: " + res.statusCode)
})
.on("error", function(err) {
    console.log(err)
})
.end()