// 目标网站
let targetUrl = "http://www.baidu.com"

// 代理服务器,假设提取到的代理 ip 是 123.123.123.123:1234
const proxyHost = "123.123.123.123"
const proxyPort = 1234;

// 代理隧道验证信息(猿人云官网套餐的订单号)
const proxyUser = "xxx"
const proxyPass = "xxx"

let proxy = {
    host: proxyHost,
    port: proxyPort,
    auth: {
        username: proxyUser,
        password: proxyPass
    }
}

// 参见官方文档 https://github.com/axios/axios#request-config
axios.get(targetUrl,{proxy:proxy})
    .then(function (response) {
        // handle success
        console.log(response.data);
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .finally(function () {
        // always executed
    })