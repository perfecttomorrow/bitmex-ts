# bitmex-ts

## NPM
```sh 
npm install bitmex-ts -S
```

## Usage
```ts
import * as request from 'request'
import * as WebSocket from 'ws'
import * as crypto from 'crypto'
const queryString = require('query-string')
import { RESTAPI, WSAPI, HttpRequest, WebSocketConnect } from 'bitmex-ts'

//实现httpRequest
export const httpRequest = (apiKey: string, apiSecret: string): HttpRequest => <T>(obj: { method: string, path: string, req: any }) =>
    new Promise<T>((resolve, reject) => {
        const { method, req } = obj
        const expires = Math.floor(Date.now() / 1000) + 60 // 1 min in the future
        const path = (method == 'GET' || method == 'DELETE') ? (obj.path + '?' + queryString.stringify(req)) : obj.path
        const postBody = (method == 'GET' || method == 'DELETE') ? '' : JSON.stringify(req)
        const signature = crypto.createHmac('sha256', apiSecret).update(method + path + expires + postBody).digest('hex')
        const requestOptions = {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest',
                'api-expires': expires,
                'api-key': apiKey,
                'api-signature': signature
            },
            url: 'https://www.bitmex.com' + path,
            method: method,
            body: postBody,
        }

        request(requestOptions, (error, response, body) => {
            if (error != null) {
                reject(JSON.stringify({ error, response, body }, null, 4))
            }
            else if (response.statusCode == 200) {
                try {
                    const obj = JSON.parse(body)
                    resolve(obj)
                } catch (err) {
                    reject('JSON.parse error: ' + JSON.stringify(err))
                }
            } else {
                reject(JSON.stringify({ error, response, body }, null, 4))
            }
        })
    })

//实现webSocketConnect
export const webSocketConnect = (apiKey: string, apiSecret: string): WebSocketConnect => (url: string) => {
    let ws = new WebSocket('wss://www.bitmex.com/realtime')
    const expires = Math.floor(Date.now() / 1000) + 60 * 60 * 24
    const signature = crypto.createHmac('sha256', apiSecret).update('GET/realtime' + expires).digest('hex')

    let ret = {
        onopen: () => { },
        onclose: () => { },
        onmessage: (str: string) => { },
        send: (str: string) => ws.send(JSON.stringify(str)),
    }

    ws.onopen = () => {
        ws.send(JSON.stringify({ op: 'authKey', args: [apiKey, expires, signature] }))
        ret.onopen()
    }
    ws.onclose = () => ret.onclose()
    ws.onmessage = e => ret.onmessage(JSON.parse(e.data + ''))
    return ret
}


const apiKey = '________apiKey________'
const apiSecret = '________apiSecret________'

let rest = RESTAPI(httpRequest(apiKey, apiSecret))
let ws = new WSAPI(webSocketConnect(apiKey, apiSecret))

//输出余额
rest.User.getMargin({}).then(res => {
    console.log('总:' + res.walletBalance.toLocaleString('en-US'))
    console.log('可用:' + res.availableMargin.toLocaleString('en-US'))
}).catch(err => {
    console.log('获取失败', err)
})

//实时输出 最新价 和 我的仓位
ws.connect()
ws.onopen = () => {
    console.log('连接成功')
    ws.subscribe([
        { theme: 'instrument', filter: 'XBTUSD' },//最新价
        { theme: 'position', filter: 'XBTUSD' }//我的仓位
    ])
}

ws.onclose = () => {
    console.log('连接断开')
    setTimeout(() => ws.connect(), 100)
}

ws.onmessage = frame => {
    if (frame.table == 'instrument') {
        console.log('instrument', frame.action, frame.data) //增量更新数据
        console.log('instrument', ws.data.instrument)//全部数据
    }
    else if (frame.table == 'position') {
        console.log('position', frame.action, frame.data) //增量更新数据
        console.log('position', ws.data.position)//全部数据
    }
}
```