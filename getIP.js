const axios = require('axios')

// id secrect 来自猿人云官网
const queries = {
    id: 'xxx',
    secret: 'xxx',
    limit: 1,
    format: 'txt',
    auth_mode: 'auto'
}

axios.get('http://tunnel-api.apeyun.com/q', {
    params: queries,
}).then((response) => {
    console.log('IP：', response.data)
}).catch((e) => {
    console.error('Error:', e)
})
