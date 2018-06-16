"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const findItem = (a, arr, keys) => arr.find(b => keys.every(key => a[key] === b[key]));
class WSAPI {
    constructor(webSocketConnect) {
        this.onopen = () => { };
        this.onclose = () => { };
        this.onmessage = (data) => { };
        this.onFilled = (side, price) => { };
        this.data = {
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
        };
        this.connect = () => {
            let keysDic = new Map();
            let hasPartial = new Map();
            let ws = this.webSocketConnect('wss://www.bitmex.com/realtime');
            this.ws = ws;
            ws.onopen = () => {
                this.onopen();
            };
            ws.onclose = () => this.onclose();
            ws.onmessage = obj => {
                const fd = obj;
                const { table, keys, action, data } = fd;
                if (table != undefined) {
                    if (keys != undefined) {
                        keysDic.set(table, keys);
                    }
                    if (action == 'partial') {
                        this.data[table] = data;
                        hasPartial.set(table, true);
                    }
                    else if (action == 'insert') {
                        this.data[table] = [...this.data[table], ...data];
                    }
                    else {
                        const keys = keysDic.get(table);
                        if (keys != undefined) {
                            if (action == 'update') {
                                this.data[table] = this.data[table].map(a => {
                                    const item = findItem(a, data, keys);
                                    return item == undefined ? a : Object.assign({}, a, item);
                                });
                                if (table == 'order') {
                                    const fill = this.data.order.find(v => v.ordStatus == 'Filled');
                                    if (fill != undefined) {
                                        this.onFilled(fill.side, fill.price);
                                    }
                                    this.data.order = this.data.order.filter(v => v.ordStatus != 'Rejected'
                                        &&
                                            v.ordStatus != 'Canceled'
                                        &&
                                            v.ordStatus != 'Filled');
                                }
                            }
                            else if (action == 'delete') {
                                this.data[table] = this.data[table].filter(a => findItem(a, data, keys) == undefined);
                            }
                        }
                    }
                    if (hasPartial.has(table)) {
                        this.onmessage(fd);
                    }
                }
            };
        };
        this.webSocketConnect = webSocketConnect;
    }
    subscribe(arr) {
        arr.map(v => this.ws.send({
            op: 'subscribe',
            args: v.filter != undefined ? v.theme + ':' + v.filter : v.theme
        }));
    }
}
exports.WSAPI = WSAPI;
