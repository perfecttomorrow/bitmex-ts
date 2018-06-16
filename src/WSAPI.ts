import { WebSocketConnect, SubscribeTheme, FrameData, WSData } from './type'

const findItem = (a: any, arr: any[], keys: any[]) => arr.find(b => keys.every(key => a[key] === b[key]))

export class WSAPI {

    private webSocketConnect: WebSocketConnect
    private arr: { theme: SubscribeTheme, filter?: string }[]

    constructor(webSocketConnect: WebSocketConnect, arr: { theme: SubscribeTheme, filter?: string }[]) {
        this.webSocketConnect = webSocketConnect
        this.arr = arr
    }

    onopen = () => { }
    onclose = () => { }
    onmessage = (data: FrameData) => { }
    onFilled = (side: 'Buy' | 'Sell', price: number) => { }

    data: WSData = {
        announcement: [],
        chat: [],
        connected: [],
        funding: [],
        instrument: [],
        insurance: [],
        liquidation: [],
        orderBookL2: [],
        orderBook10: [],
        publicNotifications: [],
        quote: [],
        quoteBin1m: [],
        quoteBin5m: [],
        quoteBin1h: [],
        quoteBin1d: [],
        settlement: [],
        trade: [],
        tradeBin1m: [],
        tradeBin5m: [],
        tradeBin1h: [],
        tradeBin1d: [],
        affiliate: [],
        execution: [],
        order: [],
        margin: [],
        position: [],
        privateNotifications: [],
        transact: [],
        wallet: [],
    }

    connect = () => {

        const { arr } = this

        let keysDic = new Map<string, string[]>()

        let hasPartial = new Map<string, boolean>()

        let ws = this.webSocketConnect('wss://www.bitmex.com/realtime')

        ws.onopen = () => {
            this.onopen()
            arr.map(v => ws.send({ op: 'subscribe', args: v.filter != undefined ? v.theme + ':' + v.filter : v.theme }))
        }

        ws.onclose = () => {
            this.onclose()
            setTimeout(() => this.connect(), 100)
        }

        ws.onmessage = obj => {
            const fd: FrameData = obj

            const { table, keys, action, data } = fd

            //table消息
            if (table != undefined) {

                //主键
                if (keys != undefined) {
                    keysDic.set(table, keys)
                }


                //完全替换数据
                if (action == 'partial') {
                    this.data[table] = data
                    hasPartial.set(table, true)
                }
                //插入新数据
                else if (action == 'insert') {
                    this.data[table] = [...this.data[table], ...data as any]

                    //限制长度
                    // if (this.data[table].length > 100) {
                    //     this.data[table] = this.data[table].slice(this.data[table].length - 100)
                    // }
                }
                //更新 删除
                else {
                    const keys = keysDic.get(table)

                    if (keys != undefined) {

                        //更新数据
                        if (action == 'update') {

                            this.data[table] = (this.data[table] as any[]).map(a => {
                                const item = findItem(a, data, keys)
                                return item == undefined ? a : { ...a, ...item }
                            })

                            if (table == 'order') {

                                const fill = this.data.order.find(v => v.ordStatus == 'Filled')
                                if (fill != undefined) {
                                    this.onFilled(fill.side as 'Buy' | 'Sell', fill.price)
                                }

                                this.data.order = this.data.order.filter(v =>
                                    v.ordStatus != 'Rejected'  //拒绝委托
                                    &&
                                    v.ordStatus != 'Canceled'  //取消委托
                                    &&
                                    v.ordStatus != 'Filled'    //完全成交
                                )
                            }
                        }

                        //删除数据
                        else if (action == 'delete') {

                            this.data[table] = (this.data[table] as any[]).filter(a =>
                                findItem(a, data, keys) == undefined
                            )
                        }
                    }

                }

                if (hasPartial.has(table)) {
                    this.onmessage(fd)
                }
            }
        }
    }
}