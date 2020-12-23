const puppeteer = require("puppeteer");

(async () => {
    // 代理服务器,假设提取到的代理ip是123.123.123.123:1234
    const proxyHost = "123.123.123.123"
    const proxyPort = 1234
    const proxyServer = "http://" + proxyHost + ":" + proxyPort

    // 隧道验证信息
    const proxyUser = "xxx"
    const proxyPass = "xxx"
    

    const browser = await puppeteer.launch({
        ignoreHTTPSErrors: true,
        headless: false,
        args: ["--proxy-server=" + proxyServer]
    })

    const page = await browser.newPage()

    await page.authenticate({ username : proxyUser, password : proxyPass})

    try {
        await page.goto("http://cip.cc")
    }
    catch(err) {
        console.log(err)
    }
})()