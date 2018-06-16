import { Message } from './Message'

export type OrderBook10 = {
    symbol: string
    bids: [number, number][]
    asks: [number, number][]
    timestamp: string
}

export type SubscribeTheme =
    //下面的订阅主题是无需身份验证：
    'announcement' |// 网站公告
    'chat' |        // Trollbox 聊天室
    'connected' |   // 已连接用户/机器人的统计数据
    'funding' |     // 掉期产品的资金费率更新 每个资金时段发送（通常是8小时）
    'instrument' |  // 产品更新，包括交易量以及报价
    'insurance' |   // 每日保险基金的更新
    'liquidation' | // 进入委托列表的强平委托
    'orderBookL2' | // 完整的 level 2 委托列表
    'orderBook10' | //  前10层的委托列表，用传统的完整委托列表推送
    'publicNotifications' | // 全系统的告示（用于段时间的消息）
    'quote' |       // 最高层的委托列表
    'quoteBin1m' |  // 每分钟报价数据
    'quoteBin5m' |  // 每5分钟报价数据
    'quoteBin1h' |  // 每个小时报价数据
    'quoteBin1d' |  // 每天报价数据
    'settlement' |  // 结算信息
    'trade' |       // 实时交易
    'tradeBin1m' |  // 每分钟交易数据
    'tradeBin5m' |  // 每5分钟交易数据
    'tradeBin1h' |  // 每小时交易数据
    'tradeBin1d' |  // 每天交易数据

    //下列主题要求进行身份验证︰
    'affiliate' |   // 邀请人状态，已邀请用户及分红比率
    'execution' |   // 个别成交，可能是多个成交
    'order' |       // 你委托的更新
    'margin' |      // 你账户的余额和保证金要求的更新
    'position' |    // 你仓位的更新
    'privateNotifications' | // 个人的通知，现时并未使用
    'transact' |     // 资金提存更新
    'wallet'       // 比特币余额更新及总提款存款


export type FrameData = (
    { table: 'announcement', data: Message.Announcement[] } |
    { table: 'chat', data: Message.Chat[] } |
    { table: 'connected', data: Message.ConnectedUsers[] } |
    { table: 'funding', data: Message.Funding[] } |
    { table: 'instrument', data: Message.Instrument[] } |
    { table: 'insurance', data: Message.Insurance[] } |
    { table: 'liquidation', data: Message.Liquidation[] } |
    { table: 'orderBookL2', data: Message.OrderBookL2[] } |
    { table: 'orderBook10', data: OrderBook10[] } |
    { table: 'publicNotifications', data: Message.Notification[] } |
    { table: 'quote', data: Message.Quote[] } |
    { table: 'quoteBin1m', data: Message.Quote[] } |
    { table: 'quoteBin5m', data: Message.Quote[] } |
    { table: 'quoteBin1h', data: Message.Quote[] } |
    { table: 'quoteBin1d', data: Message.Quote[] } |
    { table: 'settlement', data: Message.Settlement[] } |
    { table: 'trade', data: Message.Trade[] } |
    { table: 'tradeBin1m', data: Message.TradeBin[] } |
    { table: 'tradeBin5m', data: Message.TradeBin[] } |
    { table: 'tradeBin1h', data: Message.TradeBin[] } |
    { table: 'tradeBin1d', data: Message.TradeBin[] } |
    { table: 'affiliate', data: Message.Affiliate[] } |
    { table: 'execution', data: Message.Execution[] } |
    { table: 'order', data: Message.Order[] } |
    { table: 'margin', data: Message.Margin[] } |
    { table: 'position', data: Message.Position[] } |
    { table: 'privateNotifications', data: Message.Notification[] } |
    { table: 'transact', data: Message.Transaction[] } |
    { table: 'wallet', data: Message.Wallet[] }
) & {
    action: 'partial' | 'update' | 'insert' | 'delete'
    keys?: string[]
}

export type WSData = {
    announcement: Message.Announcement[]
    chat: Message.Chat[]
    connected: Message.ConnectedUsers[]
    funding: Message.Funding[]
    instrument: Message.Instrument[]
    insurance: Message.Insurance[]
    liquidation: Message.Liquidation[]
    orderBookL2: Message.OrderBookL2[]
    orderBook10: OrderBook10[]
    publicNotifications: Message.Notification[]
    quote: Message.Quote[]
    quoteBin1m: Message.Quote[]
    quoteBin5m: Message.Quote[]
    quoteBin1h: Message.Quote[]
    quoteBin1d: Message.Quote[]
    settlement: Message.Settlement[]
    trade: Message.Trade[]
    tradeBin1m: Message.TradeBin[]
    tradeBin5m: Message.TradeBin[]
    tradeBin1h: Message.TradeBin[]
    tradeBin1d: Message.TradeBin[]
    affiliate: Message.Affiliate[]
    execution: Message.Execution[]
    order: Message.Order[]
    margin: Message.Margin[]
    position: Message.Position[]
    privateNotifications: Message.Notification[]
    transact: Message.Transaction[]
    wallet: Message.Wallet[]
}

export type HttpRequest = <T>(p: {
    method: string
    path: string
    req: any
}) => Promise<T>

export type WebSocketConnect = (url: string) => {
    onopen: () => void
    onclose: () => void
    onmessage: (obj: any) => void
    send: (obj: any) => void
}