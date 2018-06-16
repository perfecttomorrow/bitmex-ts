
//greate by https://www.bitmex.com/api/explorer/swagger.json

import { Message } from './Message'
import { HttpRequest } from './type'

export const RESTAPI = (httpRequest: HttpRequest) => ({

    Announcement: {

        get: (req: {
            columns?: string /* 'JSON'  Array of column names to fetch. If omitted, will return all columns.*/
        }) => httpRequest<Message.Announcement[]>({ method: 'GET', path: '/api/v1/announcement', req }),

        getUrgent: (req: {}) => httpRequest<Message.Announcement[]>({ method: 'GET', path: '/api/v1/announcement/urgent', req })
    },

    APIKey: {

        new: (req: {
            name?: string /* ''  Key name. This name is for reference only.*/
            cidr?: string /* ''  CIDR block to restrict this key to. To restrict to a single address, append "/32", e.g. 207.39.29.22/32. Leave blank or set to 0.0.0.0/0 to allow all IPs. Only one block may be set. <a href="http://software77.net/cidr-101.html">More on CIDR blocks</a>*/
            permissions?: string /* 'JSON'  Key Permissions. All keys can read margin and position data. Additional permissions must be added. Available: ["order", "orderCancel", "withdraw"].*/
            enabled?: boolean /* ''  Set to true to enable this key on creation. Otherwise, it must be explicitly enabled via /apiKey/enable.*/
            token?: string /* ''  OTP Token (YubiKey, Google Authenticator)*/
        }) => httpRequest<Message.APIKey>({ method: 'POST', path: '/api/v1/apiKey', req }),

        get: (req: {
            reverse?: boolean /* ''  If true, will sort results newest first.*/
        }) => httpRequest<Message.APIKey[]>({ method: 'GET', path: '/api/v1/apiKey', req }),

        remove: (req: {
            apiKeyID: string /* ''  API Key ID (public component).*/
        }) => httpRequest<{ success: boolean }>({ method: 'DELETE', path: '/api/v1/apiKey', req }),

        disable: (req: {
            apiKeyID: string /* ''  API Key ID (public component).*/
        }) => httpRequest<Message.APIKey>({ method: 'POST', path: '/api/v1/apiKey/disable', req }),

        enable: (req: {
            apiKeyID: string /* ''  API Key ID (public component).*/
        }) => httpRequest<Message.APIKey>({ method: 'POST', path: '/api/v1/apiKey/enable', req })
    },

    Chat: {

        get: (req: {
            count?: number /* 'int32'  Number of results to fetch.*/
            start?: number /* 'int32'  Starting ID for results.*/
            reverse?: boolean /* ''  If true, will sort results newest first.*/
            channelID?: number /* 'double'  Channel id. GET /chat/channels for ids. Leave blank for all.*/
        }) => httpRequest<Message.Chat[]>({ method: 'GET', path: '/api/v1/chat', req }),

        new: (req: {
            message: string /* ''  */
            channelID?: number /* 'double'  Channel to post to. Default 1 (English).*/
        }) => httpRequest<Message.Chat>({ method: 'POST', path: '/api/v1/chat', req }),

        getChannels: (req: {}) => httpRequest<Message.ChatChannel[]>({ method: 'GET', path: '/api/v1/chat/channels', req }),

        getConnected: (req: {}) => httpRequest<Message.ConnectedUsers>({ method: 'GET', path: '/api/v1/chat/connected', req })
    },

    Execution: {

        get: (req: {
            symbol?: string /* ''  Instrument symbol. Send a bare series (e.g. XBU) to get data for the nearest expiring contract in that series.

You can also send a timeframe, e.g. `XBU:monthly`. Timeframes are `daily`, `weekly`, `monthly`, `quarterly`, and `biquarterly`.*/
            filter?: string /* 'JSON'  Generic table filter. Send JSON key/value pairs, such as `{"key": "value"}`. You can key on individual fields, and do more advanced querying on timestamps. See the [Timestamp Docs](https://www.bitmex.com/app/restAPI#Timestamp-Filters) for more details.*/
            columns?: string /* 'JSON'  Array of column names to fetch. If omitted, will return all columns.

Note that this method will always return item keys, even when not specified, so you may receive more columns that you expect.*/
            count?: number /* 'int32'  Number of results to fetch.*/
            start?: number /* 'int32'  Starting point for results.*/
            reverse?: boolean /* ''  If true, will sort results newest first.*/
            startTime?: string /* 'date-time'  Starting date filter for results.*/
            endTime?: string /* 'date-time'  Ending date filter for results.*/
        }) => httpRequest<Message.Execution[]>({ method: 'GET', path: '/api/v1/execution', req }),

        getTradeHistory: (req: {
            symbol?: string /* ''  Instrument symbol. Send a bare series (e.g. XBU) to get data for the nearest expiring contract in that series.

You can also send a timeframe, e.g. `XBU:monthly`. Timeframes are `daily`, `weekly`, `monthly`, `quarterly`, and `biquarterly`.*/
            filter?: string /* 'JSON'  Generic table filter. Send JSON key/value pairs, such as `{"key": "value"}`. You can key on individual fields, and do more advanced querying on timestamps. See the [Timestamp Docs](https://www.bitmex.com/app/restAPI#Timestamp-Filters) for more details.*/
            columns?: string /* 'JSON'  Array of column names to fetch. If omitted, will return all columns.

Note that this method will always return item keys, even when not specified, so you may receive more columns that you expect.*/
            count?: number /* 'int32'  Number of results to fetch.*/
            start?: number /* 'int32'  Starting point for results.*/
            reverse?: boolean /* ''  If true, will sort results newest first.*/
            startTime?: string /* 'date-time'  Starting date filter for results.*/
            endTime?: string /* 'date-time'  Ending date filter for results.*/
        }) => httpRequest<Message.Execution[]>({ method: 'GET', path: '/api/v1/execution/tradeHistory', req })
    },

    Funding: {

        get: (req: {
            symbol?: string /* ''  Instrument symbol. Send a bare series (e.g. XBU) to get data for the nearest expiring contract in that series.

You can also send a timeframe, e.g. `XBU:monthly`. Timeframes are `daily`, `weekly`, `monthly`, `quarterly`, and `biquarterly`.*/
            filter?: string /* 'JSON'  Generic table filter. Send JSON key/value pairs, such as `{"key": "value"}`. You can key on individual fields, and do more advanced querying on timestamps. See the [Timestamp Docs](https://www.bitmex.com/app/restAPI#Timestamp-Filters) for more details.*/
            columns?: string /* 'JSON'  Array of column names to fetch. If omitted, will return all columns.

Note that this method will always return item keys, even when not specified, so you may receive more columns that you expect.*/
            count?: number /* 'int32'  Number of results to fetch.*/
            start?: number /* 'int32'  Starting point for results.*/
            reverse?: boolean /* ''  If true, will sort results newest first.*/
            startTime?: string /* 'date-time'  Starting date filter for results.*/
            endTime?: string /* 'date-time'  Ending date filter for results.*/
        }) => httpRequest<Message.Funding[]>({ method: 'GET', path: '/api/v1/funding', req })
    },

    Instrument: {

        get: (req: {
            symbol?: string /* ''  Instrument symbol. Send a bare series (e.g. XBU) to get data for the nearest expiring contract in that series.

You can also send a timeframe, e.g. `XBU:monthly`. Timeframes are `daily`, `weekly`, `monthly`, `quarterly`, and `biquarterly`.*/
            filter?: string /* 'JSON'  Generic table filter. Send JSON key/value pairs, such as `{"key": "value"}`. You can key on individual fields, and do more advanced querying on timestamps. See the [Timestamp Docs](https://www.bitmex.com/app/restAPI#Timestamp-Filters) for more details.*/
            columns?: string /* 'JSON'  Array of column names to fetch. If omitted, will return all columns.

Note that this method will always return item keys, even when not specified, so you may receive more columns that you expect.*/
            count?: number /* 'int32'  Number of results to fetch.*/
            start?: number /* 'int32'  Starting point for results.*/
            reverse?: boolean /* ''  If true, will sort results newest first.*/
            startTime?: string /* 'date-time'  Starting date filter for results.*/
            endTime?: string /* 'date-time'  Ending date filter for results.*/
        }) => httpRequest<Message.Instrument[]>({ method: 'GET', path: '/api/v1/instrument', req }),

        getActive: (req: {}) => httpRequest<Message.Instrument[]>({ method: 'GET', path: '/api/v1/instrument/active', req }),

        getIndices: (req: {}) => httpRequest<Message.Instrument[]>({ method: 'GET', path: '/api/v1/instrument/indices', req }),

        getActiveAndIndices: (req: {}) => httpRequest<Message.Instrument[]>({ method: 'GET', path: '/api/v1/instrument/activeAndIndices', req }),

        getActiveIntervals: (req: {}) => httpRequest<Message.InstrumentInterval>({ method: 'GET', path: '/api/v1/instrument/activeIntervals', req }),

        getCompositeIndex: (req: {
            account?: number /* 'double'  */
            symbol?: string /* ''  The composite index symbol.*/
            filter?: string /* 'JSON'  Generic table filter. Send JSON key/value pairs, such as `{"key": "value"}`. You can key on individual fields, and do more advanced querying on timestamps. See the [Timestamp Docs](https://www.bitmex.com/app/restAPI#Timestamp-Filters) for more details.*/
            columns?: string /* 'JSON'  Array of column names to fetch. If omitted, will return all columns.

Note that this method will always return item keys, even when not specified, so you may receive more columns that you expect.*/
            count?: number /* 'int32'  Number of results to fetch.*/
            start?: number /* 'int32'  Starting point for results.*/
            reverse?: boolean /* ''  If true, will sort results newest first.*/
            startTime?: string /* 'date-time'  Starting date filter for results.*/
            endTime?: string /* 'date-time'  Ending date filter for results.*/
        }) => httpRequest<Message.IndexComposite[]>({ method: 'GET', path: '/api/v1/instrument/compositeIndex', req })
    },

    Insurance: {

        get: (req: {
            symbol?: string /* ''  Instrument symbol. Send a bare series (e.g. XBU) to get data for the nearest expiring contract in that series.

You can also send a timeframe, e.g. `XBU:monthly`. Timeframes are `daily`, `weekly`, `monthly`, `quarterly`, and `biquarterly`.*/
            filter?: string /* 'JSON'  Generic table filter. Send JSON key/value pairs, such as `{"key": "value"}`. You can key on individual fields, and do more advanced querying on timestamps. See the [Timestamp Docs](https://www.bitmex.com/app/restAPI#Timestamp-Filters) for more details.*/
            columns?: string /* 'JSON'  Array of column names to fetch. If omitted, will return all columns.

Note that this method will always return item keys, even when not specified, so you may receive more columns that you expect.*/
            count?: number /* 'int32'  Number of results to fetch.*/
            start?: number /* 'int32'  Starting point for results.*/
            reverse?: boolean /* ''  If true, will sort results newest first.*/
            startTime?: string /* 'date-time'  Starting date filter for results.*/
            endTime?: string /* 'date-time'  Ending date filter for results.*/
        }) => httpRequest<Message.Insurance[]>({ method: 'GET', path: '/api/v1/insurance', req })
    },

    Leaderboard: {

        get: (req: {
            method?: string /* ''  Ranking type. Options: "notional", "ROE"*/
        }) => httpRequest<Message.Leaderboard[]>({ method: 'GET', path: '/api/v1/leaderboard', req }),

        getName: (req: {}) => httpRequest<{ name: string }>({ method: 'GET', path: '/api/v1/leaderboard/name', req })
    },

    Liquidation: {

        get: (req: {
            symbol?: string /* ''  Instrument symbol. Send a bare series (e.g. XBU) to get data for the nearest expiring contract in that series.

You can also send a timeframe, e.g. `XBU:monthly`. Timeframes are `daily`, `weekly`, `monthly`, `quarterly`, and `biquarterly`.*/
            filter?: string /* 'JSON'  Generic table filter. Send JSON key/value pairs, such as `{"key": "value"}`. You can key on individual fields, and do more advanced querying on timestamps. See the [Timestamp Docs](https://www.bitmex.com/app/restAPI#Timestamp-Filters) for more details.*/
            columns?: string /* 'JSON'  Array of column names to fetch. If omitted, will return all columns.

Note that this method will always return item keys, even when not specified, so you may receive more columns that you expect.*/
            count?: number /* 'int32'  Number of results to fetch.*/
            start?: number /* 'int32'  Starting point for results.*/
            reverse?: boolean /* ''  If true, will sort results newest first.*/
            startTime?: string /* 'date-time'  Starting date filter for results.*/
            endTime?: string /* 'date-time'  Ending date filter for results.*/
        }) => httpRequest<Message.Liquidation[]>({ method: 'GET', path: '/api/v1/liquidation', req })
    },

    Notification: {

        get: (req: {}) => httpRequest<Message.Notification[]>({ method: 'GET', path: '/api/v1/notification', req })
    },

    Order: {

        getOrders: (req: {
            symbol?: string /* ''  Instrument symbol. Send a bare series (e.g. XBU) to get data for the nearest expiring contract in that series.

You can also send a timeframe, e.g. `XBU:monthly`. Timeframes are `daily`, `weekly`, `monthly`, `quarterly`, and `biquarterly`.*/
            filter?: string /* 'JSON'  Generic table filter. Send JSON key/value pairs, such as `{"key": "value"}`. You can key on individual fields, and do more advanced querying on timestamps. See the [Timestamp Docs](https://www.bitmex.com/app/restAPI#Timestamp-Filters) for more details.*/
            columns?: string /* 'JSON'  Array of column names to fetch. If omitted, will return all columns.

Note that this method will always return item keys, even when not specified, so you may receive more columns that you expect.*/
            count?: number /* 'int32'  Number of results to fetch.*/
            start?: number /* 'int32'  Starting point for results.*/
            reverse?: boolean /* ''  If true, will sort results newest first.*/
            startTime?: string /* 'date-time'  Starting date filter for results.*/
            endTime?: string /* 'date-time'  Ending date filter for results.*/
        }) => httpRequest<Message.Order[]>({ method: 'GET', path: '/api/v1/order', req }),

        new: (req: {
            symbol: string /* ''  Instrument symbol. e.g. 'XBTUSD'.*/
            side?: string /* ''  Order side. Valid options: Buy, Sell. Defaults to 'Buy' unless `orderQty` or `simpleOrderQty` is negative.*/
            simpleOrderQty?: number /* 'double'  Order quantity in units of the underlying instrument (i.e. Bitcoin).*/
            orderQty?: number /* 'int32'  Order quantity in units of the instrument (i.e. contracts).*/
            price?: number /* 'double'  Optional limit price for 'Limit', 'StopLimit', and 'LimitIfTouched' orders.*/
            displayQty?: number /* 'int32'  Optional quantity to display in the book. Use 0 for a fully hidden order.*/
            stopPx?: number /* 'double'  Optional trigger price for 'Stop', 'StopLimit', 'MarketIfTouched', and 'LimitIfTouched' orders. Use a price below the current price for stop-sell orders and buy-if-touched orders. Use `execInst` of 'MarkPrice' or 'LastPrice' to define the current price used for triggering.*/
            clOrdID?: string /* ''  Optional Client Order ID. This clOrdID will come back on the order and any related executions.*/
            clOrdLinkID?: string /* ''  Optional Client Order Link ID for contingent orders.*/
            pegOffsetValue?: number /* 'double'  Optional trailing offset from the current price for 'Stop', 'StopLimit', 'MarketIfTouched', and 'LimitIfTouched' orders; use a negative offset for stop-sell orders and buy-if-touched orders. Optional offset from the peg price for 'Pegged' orders.*/
            pegPriceType?: string /* ''  Optional peg price type. Valid options: LastPeg, MidPricePeg, MarketPeg, PrimaryPeg, TrailingStopPeg.*/
            ordType?: string /* ''  Order type. Valid options: Market, Limit, Stop, StopLimit, MarketIfTouched, LimitIfTouched, MarketWithLeftOverAsLimit, Pegged. Defaults to 'Limit' when `price` is specified. Defaults to 'Stop' when `stopPx` is specified. Defaults to 'StopLimit' when `price` and `stopPx` are specified.*/
            timeInForce?: string /* ''  Time in force. Valid options: Day, GoodTillCancel, ImmediateOrCancel, FillOrKill. Defaults to 'GoodTillCancel' for 'Limit', 'StopLimit', 'LimitIfTouched', and 'MarketWithLeftOverAsLimit' orders.*/
            execInst?: string /* ''  Optional execution instructions. Valid options: ParticipateDoNotInitiate, AllOrNone, MarkPrice, IndexPrice, LastPrice, Close, ReduceOnly, Fixed. 'AllOrNone' instruction requires `displayQty` to be 0. 'MarkPrice', 'IndexPrice' or 'LastPrice' instruction valid for 'Stop', 'StopLimit', 'MarketIfTouched', and 'LimitIfTouched' orders.*/
            contingencyType?: string /* ''  Optional contingency type for use with `clOrdLinkID`. Valid options: OneCancelsTheOther, OneTriggersTheOther, OneUpdatesTheOtherAbsolute, OneUpdatesTheOtherProportional.*/
            text?: string /* ''  Optional order annotation. e.g. 'Take profit'.*/
        }) => httpRequest<Message.Order>({ method: 'POST', path: '/api/v1/order', req }),

        amend: (req: {
            orderID?: string /* ''  Order ID*/
            origClOrdID?: string /* ''  Client Order ID. See POST /order.*/
            clOrdID?: string /* ''  Optional new Client Order ID, requires `origClOrdID`.*/
            simpleOrderQty?: number /* 'double'  Optional order quantity in units of the underlying instrument (i.e. Bitcoin).*/
            orderQty?: number /* 'int32'  Optional order quantity in units of the instrument (i.e. contracts).*/
            simpleLeavesQty?: number /* 'double'  Optional leaves quantity in units of the underlying instrument (i.e. Bitcoin). Useful for amending partially filled orders.*/
            leavesQty?: number /* 'int32'  Optional leaves quantity in units of the instrument (i.e. contracts). Useful for amending partially filled orders.*/
            price?: number /* 'double'  Optional limit price for 'Limit', 'StopLimit', and 'LimitIfTouched' orders.*/
            stopPx?: number /* 'double'  Optional trigger price for 'Stop', 'StopLimit', 'MarketIfTouched', and 'LimitIfTouched' orders. Use a price below the current price for stop-sell orders and buy-if-touched orders.*/
            pegOffsetValue?: number /* 'double'  Optional trailing offset from the current price for 'Stop', 'StopLimit', 'MarketIfTouched', and 'LimitIfTouched' orders; use a negative offset for stop-sell orders and buy-if-touched orders. Optional offset from the peg price for 'Pegged' orders.*/
            text?: string /* ''  Optional amend annotation. e.g. 'Adjust skew'.*/
        }) => httpRequest<Message.Order>({ method: 'PUT', path: '/api/v1/order', req }),

        cancel: (req: {
            orderID?: string /* 'JSON'  Order ID(s).*/
            clOrdID?: string /* 'JSON'  Client Order ID(s). See POST /order.*/
            text?: string /* ''  Optional cancellation annotation. e.g. 'Spread Exceeded'.*/
        }) => httpRequest<Message.Order[]>({ method: 'DELETE', path: '/api/v1/order', req }),

        newBulk: (req: {
            orders?: string /* 'JSON'  An array of orders.*/
        }) => httpRequest<Message.Order[]>({ method: 'POST', path: '/api/v1/order/bulk', req }),

        amendBulk: (req: {
            orders?: string /* 'JSON'  An array of orders.*/
        }) => httpRequest<Message.Order[]>({ method: 'PUT', path: '/api/v1/order/bulk', req }),

        closePosition: (req: {
            symbol: string /* ''  Symbol of position to close.*/
            price?: number /* 'double'  Optional limit price.*/
        }) => httpRequest<Message.Order /* description:Resulting close order.*/>({ method: 'POST', path: '/api/v1/order/closePosition', req }),

        cancelAll: (req: {
            symbol?: string /* ''  Optional symbol. If provided, only cancels orders for that symbol.*/
            filter?: string /* 'JSON'  Optional filter for cancellation. Use to only cancel some orders, e.g. `{"side": "Buy"}`.*/
            text?: string /* ''  Optional cancellation annotation. e.g. 'Spread Exceeded'*/
        }) => httpRequest<Message.Order[]>({ method: 'DELETE', path: '/api/v1/order/all', req }),

        cancelAllAfter: (req: {
            timeout: number /* 'double'  Timeout in ms. Set to 0 to cancel this timer. */
        }) => httpRequest<{}>({ method: 'POST', path: '/api/v1/order/cancelAllAfter', req })
    },

    OrderBook: {

        getL2: (req: {
            symbol: string /* ''  Instrument symbol. Send a series (e.g. XBT) to get data for the nearest contract in that series.*/
            depth?: number /* 'int32'  Orderbook depth per side. Send 0 for full depth.*/
        }) => httpRequest<Message.OrderBookL2[]>({ method: 'GET', path: '/api/v1/orderBook/L2', req })
    },

    Position: {

        get: (req: {
            filter?: string /* 'JSON'  Table filter. For example, send {"symbol": "XBTUSD"}.*/
            columns?: string /* 'JSON'  Which columns to fetch. For example, send ["columnName"].*/
            count?: number /* 'int32'  Number of rows to fetch.*/
        }) => httpRequest<Message.Position[]>({ method: 'GET', path: '/api/v1/position', req }),

        isolateMargin: (req: {
            symbol: string /* ''  Position symbol to isolate.*/
            enabled?: boolean /* ''  True for isolated margin, false for cross margin.*/
        }) => httpRequest<Message.Position /* description:Affected position.*/>({ method: 'POST', path: '/api/v1/position/isolate', req }),

        updateRiskLimit: (req: {
            symbol: string /* ''  Symbol of position to isolate.*/
            riskLimit: number /* 'int64'  New Risk Limit, in Satoshis.*/
        }) => httpRequest<Message.Position /* description:Affected position.*/>({ method: 'POST', path: '/api/v1/position/riskLimit', req }),

        transferIsolatedMargin: (req: {
            symbol: string /* ''  Symbol of position to isolate.*/
            amount: number /* 'int64'  Amount to transfer, in Satoshis. May be negative.*/
        }) => httpRequest<Message.Position /* description:Affected position.*/>({ method: 'POST', path: '/api/v1/position/transferMargin', req }),

        updateLeverage: (req: {
            symbol: string /* ''  Symbol of position to adjust.*/
            leverage: number /* 'double'  Leverage value. Send a number between 0.01 and 100 to enable isolated margin with a fixed leverage. Send 0 to enable cross margin.*/
        }) => httpRequest<Message.Position /* description:Affected position.*/>({ method: 'POST', path: '/api/v1/position/leverage', req })
    },

    Quote: {

        get: (req: {
            symbol?: string /* ''  Instrument symbol. Send a bare series (e.g. XBU) to get data for the nearest expiring contract in that series.

You can also send a timeframe, e.g. `XBU:monthly`. Timeframes are `daily`, `weekly`, `monthly`, `quarterly`, and `biquarterly`.*/
            filter?: string /* 'JSON'  Generic table filter. Send JSON key/value pairs, such as `{"key": "value"}`. You can key on individual fields, and do more advanced querying on timestamps. See the [Timestamp Docs](https://www.bitmex.com/app/restAPI#Timestamp-Filters) for more details.*/
            columns?: string /* 'JSON'  Array of column names to fetch. If omitted, will return all columns.

Note that this method will always return item keys, even when not specified, so you may receive more columns that you expect.*/
            count?: number /* 'int32'  Number of results to fetch.*/
            start?: number /* 'int32'  Starting point for results.*/
            reverse?: boolean /* ''  If true, will sort results newest first.*/
            startTime?: string /* 'date-time'  Starting date filter for results.*/
            endTime?: string /* 'date-time'  Ending date filter for results.*/
        }) => httpRequest<Message.Quote[]>({ method: 'GET', path: '/api/v1/quote', req }),

        getBucketed: (req: {
            binSize?: string /* ''  Time interval to bucket by. Available options: [1m,5m,1h,1d].*/
            partial?: boolean /* ''  If true, will send in-progress (incomplete) bins for the current time period.*/
            symbol?: string /* ''  Instrument symbol. Send a bare series (e.g. XBU) to get data for the nearest expiring contract in that series.

You can also send a timeframe, e.g. `XBU:monthly`. Timeframes are `daily`, `weekly`, `monthly`, `quarterly`, and `biquarterly`.*/
            filter?: string /* 'JSON'  Generic table filter. Send JSON key/value pairs, such as `{"key": "value"}`. You can key on individual fields, and do more advanced querying on timestamps. See the [Timestamp Docs](https://www.bitmex.com/app/restAPI#Timestamp-Filters) for more details.*/
            columns?: string /* 'JSON'  Array of column names to fetch. If omitted, will return all columns.

Note that this method will always return item keys, even when not specified, so you may receive more columns that you expect.*/
            count?: number /* 'int32'  Number of results to fetch.*/
            start?: number /* 'int32'  Starting point for results.*/
            reverse?: boolean /* ''  If true, will sort results newest first.*/
            startTime?: string /* 'date-time'  Starting date filter for results.*/
            endTime?: string /* 'date-time'  Ending date filter for results.*/
        }) => httpRequest<Message.Quote[]>({ method: 'GET', path: '/api/v1/quote/bucketed', req })
    },

    Schema: {

        get: (req: {
            model?: string /* ''  Optional model filter. If omitted, will return all models.*/
        }) => httpRequest<{}>({ method: 'GET', path: '/api/v1/schema', req }),

        websocketHelp: (req: {}) => httpRequest<{}>({ method: 'GET', path: '/api/v1/schema/websocketHelp', req })
    },

    Settlement: {

        get: (req: {
            symbol?: string /* ''  Instrument symbol. Send a bare series (e.g. XBU) to get data for the nearest expiring contract in that series.

You can also send a timeframe, e.g. `XBU:monthly`. Timeframes are `daily`, `weekly`, `monthly`, `quarterly`, and `biquarterly`.*/
            filter?: string /* 'JSON'  Generic table filter. Send JSON key/value pairs, such as `{"key": "value"}`. You can key on individual fields, and do more advanced querying on timestamps. See the [Timestamp Docs](https://www.bitmex.com/app/restAPI#Timestamp-Filters) for more details.*/
            columns?: string /* 'JSON'  Array of column names to fetch. If omitted, will return all columns.

Note that this method will always return item keys, even when not specified, so you may receive more columns that you expect.*/
            count?: number /* 'int32'  Number of results to fetch.*/
            start?: number /* 'int32'  Starting point for results.*/
            reverse?: boolean /* ''  If true, will sort results newest first.*/
            startTime?: string /* 'date-time'  Starting date filter for results.*/
            endTime?: string /* 'date-time'  Ending date filter for results.*/
        }) => httpRequest<Message.Settlement[]>({ method: 'GET', path: '/api/v1/settlement', req })
    },

    Stats: {

        get: (req: {}) => httpRequest<Message.Stats[]>({ method: 'GET', path: '/api/v1/stats', req }),

        history: (req: {}) => httpRequest<Message.StatsHistory[]>({ method: 'GET', path: '/api/v1/stats/history', req }),

        historyUSD: (req: {}) => httpRequest<Message.StatsUSD[]>({ method: 'GET', path: '/api/v1/stats/historyUSD', req })
    },

    Trade: {

        get: (req: {
            symbol?: string /* ''  Instrument symbol. Send a bare series (e.g. XBU) to get data for the nearest expiring contract in that series.

You can also send a timeframe, e.g. `XBU:monthly`. Timeframes are `daily`, `weekly`, `monthly`, `quarterly`, and `biquarterly`.*/
            filter?: string /* 'JSON'  Generic table filter. Send JSON key/value pairs, such as `{"key": "value"}`. You can key on individual fields, and do more advanced querying on timestamps. See the [Timestamp Docs](https://www.bitmex.com/app/restAPI#Timestamp-Filters) for more details.*/
            columns?: string /* 'JSON'  Array of column names to fetch. If omitted, will return all columns.

Note that this method will always return item keys, even when not specified, so you may receive more columns that you expect.*/
            count?: number /* 'int32'  Number of results to fetch.*/
            start?: number /* 'int32'  Starting point for results.*/
            reverse?: boolean /* ''  If true, will sort results newest first.*/
            startTime?: string /* 'date-time'  Starting date filter for results.*/
            endTime?: string /* 'date-time'  Ending date filter for results.*/
        }) => httpRequest<Message.Trade[]>({ method: 'GET', path: '/api/v1/trade', req }),

        getBucketed: (req: {
            binSize?: string /* ''  Time interval to bucket by. Available options: [1m,5m,1h,1d].*/
            partial?: boolean /* ''  If true, will send in-progress (incomplete) bins for the current time period.*/
            symbol?: string /* ''  Instrument symbol. Send a bare series (e.g. XBU) to get data for the nearest expiring contract in that series.

You can also send a timeframe, e.g. `XBU:monthly`. Timeframes are `daily`, `weekly`, `monthly`, `quarterly`, and `biquarterly`.*/
            filter?: string /* 'JSON'  Generic table filter. Send JSON key/value pairs, such as `{"key": "value"}`. You can key on individual fields, and do more advanced querying on timestamps. See the [Timestamp Docs](https://www.bitmex.com/app/restAPI#Timestamp-Filters) for more details.*/
            columns?: string /* 'JSON'  Array of column names to fetch. If omitted, will return all columns.

Note that this method will always return item keys, even when not specified, so you may receive more columns that you expect.*/
            count?: number /* 'int32'  Number of results to fetch.*/
            start?: number /* 'int32'  Starting point for results.*/
            reverse?: boolean /* ''  If true, will sort results newest first.*/
            startTime?: string /* 'date-time'  Starting date filter for results.*/
            endTime?: string /* 'date-time'  Ending date filter for results.*/
        }) => httpRequest<Message.TradeBin[]>({ method: 'GET', path: '/api/v1/trade/bucketed', req })
    },

    User: {

        getDepositAddress: (req: {
            currency?: string /* ''  */
        }) => httpRequest<string>({ method: 'GET', path: '/api/v1/user/depositAddress', req }),

        getWallet: (req: {
            currency?: string /* ''  */
        }) => httpRequest<Message.Wallet>({ method: 'GET', path: '/api/v1/user/wallet', req }),

        getWalletHistory: (req: {
            currency?: string /* ''  */
        }) => httpRequest<Message.Transaction[]>({ method: 'GET', path: '/api/v1/user/walletHistory', req }),

        getWalletSummary: (req: {
            currency?: string /* ''  */
        }) => httpRequest<Message.Transaction[]>({ method: 'GET', path: '/api/v1/user/walletSummary', req }),

        minWithdrawalFee: (req: {
            currency?: string /* ''  */
        }) => httpRequest<{}>({ method: 'GET', path: '/api/v1/user/minWithdrawalFee', req }),

        requestWithdrawal: (req: {
            otpToken?: string /* ''  2FA token. Required if 2FA is enabled on your account.*/
            currency: string /* ''  Currency you're withdrawing. Options: `XBt`*/
            amount: number /* 'int64'  Amount of withdrawal currency.*/
            address: string /* ''  Destination Address.*/
            fee?: number /* 'double'  Network fee for Bitcoin withdrawals. If not specified, a default value will be calculated based on Bitcoin network conditions. You will have a chance to confirm this via email.*/
        }) => httpRequest<Message.Transaction>({ method: 'POST', path: '/api/v1/user/requestWithdrawal', req }),

        cancelWithdrawal: (req: {
            token: string /* ''  */
        }) => httpRequest<Message.Transaction>({ method: 'POST', path: '/api/v1/user/cancelWithdrawal', req }),

        confirmWithdrawal: (req: {
            token: string /* ''  */
        }) => httpRequest<Message.Transaction>({ method: 'POST', path: '/api/v1/user/confirmWithdrawal', req }),

        requestEnableTFA: (req: {
            type?: string /* ''  Two-factor auth type. Supported types: 'GA' (Google Authenticator)*/
        }) => httpRequest<boolean>({ method: 'POST', path: '/api/v1/user/requestEnableTFA', req }),

        confirmEnableTFA: (req: {
            type?: string /* ''  Two-factor auth type. Supported types: 'GA' (Google Authenticator), 'Yubikey'*/
            token: string /* ''  Token from your selected TFA type.*/
        }) => httpRequest<boolean>({ method: 'POST', path: '/api/v1/user/confirmEnableTFA', req }),

        disableTFA: (req: {
            type?: string /* ''  Two-factor auth type. Supported types: 'GA' (Google Authenticator)*/
            token: string /* ''  Token from your selected TFA type.*/
        }) => httpRequest<boolean>({ method: 'POST', path: '/api/v1/user/disableTFA', req }),

        confirm: (req: {
            token: string /* ''  */
        }) => httpRequest<Message.AccessToken>({ method: 'POST', path: '/api/v1/user/confirmEmail', req }),

        getAffiliateStatus: (req: {}) => httpRequest<Message.Affiliate>({ method: 'GET', path: '/api/v1/user/affiliateStatus', req }),

        checkReferralCode: (req: {
            referralCode?: string /* ''  */
        }) => httpRequest<number /* format:double*/>({ method: 'GET', path: '/api/v1/user/checkReferralCode', req }),

        logout: (req: {}) => httpRequest<null>({ method: 'POST', path: '/api/v1/user/logout', req }),

        logoutAll: (req: {}) => httpRequest<number /* format:double*/>({ method: 'POST', path: '/api/v1/user/logoutAll', req }),

        savePreferences: (req: {
            prefs: string /* 'JSON'  */
            overwrite?: boolean /* ''  If true, will overwrite all existing preferences.*/
        }) => httpRequest<Message.User>({ method: 'POST', path: '/api/v1/user/preferences', req }),

        get: (req: {}) => httpRequest<Message.User>({ method: 'GET', path: '/api/v1/user', req }),

        update: (req: {
            firstname?: string /* ''  */
            lastname?: string /* ''  */
            oldPassword?: string /* ''  */
            newPassword?: string /* ''  */
            newPasswordConfirm?: string /* ''  */
            username?: string /* ''  Username can only be set once. To reset, email support.*/
            country?: string /* ''  Country of residence.*/
            pgpPubKey?: string /* ''  PGP Public Key. If specified, automated emails will be sentwith this key.*/
        }) => httpRequest<Message.User>({ method: 'PUT', path: '/api/v1/user', req }),

        getCommission: (req: {}) => httpRequest<Message.UserCommission[]>({ method: 'GET', path: '/api/v1/user/commission', req }),

        getMargin: (req: {
            currency?: string /* ''  */
        }) => httpRequest<Message.Margin>({ method: 'GET', path: '/api/v1/user/margin', req })
    }
})