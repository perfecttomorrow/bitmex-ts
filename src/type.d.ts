import { Message } from './Message';
export declare type OrderBook10 = {
    symbol: string;
    bids: [number, number][];
    asks: [number, number][];
    timestamp: string;
};
export declare type SubscribeTheme = 'announcement' | 'chat' | 'connected' | 'funding' | 'instrument' | 'insurance' | 'liquidation' | 'orderBookL2' | 'orderBook10' | 'publicNotifications' | 'quote' | 'quoteBin1m' | 'quoteBin5m' | 'quoteBin1h' | 'quoteBin1d' | 'settlement' | 'trade' | 'tradeBin1m' | 'tradeBin5m' | 'tradeBin1h' | 'tradeBin1d' | 'affiliate' | 'execution' | 'order' | 'margin' | 'position' | 'privateNotifications' | 'transact' | 'wallet';
export declare type FrameData = ({
    table: 'announcement';
    data: Message.Announcement[];
} | {
    table: 'chat';
    data: Message.Chat[];
} | {
    table: 'connected';
    data: Message.ConnectedUsers[];
} | {
    table: 'funding';
    data: Message.Funding[];
} | {
    table: 'instrument';
    data: Message.Instrument[];
} | {
    table: 'insurance';
    data: Message.Insurance[];
} | {
    table: 'liquidation';
    data: Message.Liquidation[];
} | {
    table: 'orderBookL2';
    data: Message.OrderBookL2[];
} | {
    table: 'orderBook10';
    data: OrderBook10[];
} | {
    table: 'publicNotifications';
    data: Message.Notification[];
} | {
    table: 'quote';
    data: Message.Quote[];
} | {
    table: 'quoteBin1m';
    data: Message.Quote[];
} | {
    table: 'quoteBin5m';
    data: Message.Quote[];
} | {
    table: 'quoteBin1h';
    data: Message.Quote[];
} | {
    table: 'quoteBin1d';
    data: Message.Quote[];
} | {
    table: 'settlement';
    data: Message.Settlement[];
} | {
    table: 'trade';
    data: Message.Trade[];
} | {
    table: 'tradeBin1m';
    data: Message.TradeBin[];
} | {
    table: 'tradeBin5m';
    data: Message.TradeBin[];
} | {
    table: 'tradeBin1h';
    data: Message.TradeBin[];
} | {
    table: 'tradeBin1d';
    data: Message.TradeBin[];
} | {
    table: 'affiliate';
    data: Message.Affiliate[];
} | {
    table: 'execution';
    data: Message.Execution[];
} | {
    table: 'order';
    data: Message.Order[];
} | {
    table: 'margin';
    data: Message.Margin[];
} | {
    table: 'position';
    data: Message.Position[];
} | {
    table: 'privateNotifications';
    data: Message.Notification[];
} | {
    table: 'transact';
    data: Message.Transaction[];
} | {
    table: 'wallet';
    data: Message.Wallet[];
}) & {
    action: 'partial' | 'update' | 'insert' | 'delete';
    keys?: string[];
};
export declare type WSData = {
    announcement: Message.Announcement[];
    chat: Message.Chat[];
    connected: Message.ConnectedUsers[];
    funding: Message.Funding[];
    instrument: Message.Instrument[];
    insurance: Message.Insurance[];
    liquidation: Message.Liquidation[];
    orderBookL2: Message.OrderBookL2[];
    orderBook10: OrderBook10[];
    publicNotifications: Message.Notification[];
    quote: Message.Quote[];
    quoteBin1m: Message.Quote[];
    quoteBin5m: Message.Quote[];
    quoteBin1h: Message.Quote[];
    quoteBin1d: Message.Quote[];
    settlement: Message.Settlement[];
    trade: Message.Trade[];
    tradeBin1m: Message.TradeBin[];
    tradeBin5m: Message.TradeBin[];
    tradeBin1h: Message.TradeBin[];
    tradeBin1d: Message.TradeBin[];
    affiliate: Message.Affiliate[];
    execution: Message.Execution[];
    order: Message.Order[];
    margin: Message.Margin[];
    position: Message.Position[];
    privateNotifications: Message.Notification[];
    transact: Message.Transaction[];
    wallet: Message.Wallet[];
};
export declare type HttpRequest = <T>(p: {
    method: string;
    path: string;
    req: any;
}) => Promise<T>;
export declare type WebSocketConnect = (url: string) => {
    onopen: () => void;
    onclose: () => void;
    onmessage: (obj: any) => void;
    send: (obj: any) => void;
};
