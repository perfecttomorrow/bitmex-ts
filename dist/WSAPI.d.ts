import { WebSocketConnect, SubscribeTheme, FrameData, WSData } from './type';
export declare class WSAPI {
    private webSocketConnect;
    constructor(webSocketConnect: WebSocketConnect);
    onopen: () => void;
    onclose: () => void;
    onmessage: (data: FrameData) => void;
    onFilled: (side: "Buy" | "Sell", price: number) => void;
    data: WSData;
    subscribe(arr: {
        theme: SubscribeTheme;
        filter?: string;
    }[]): void;
    ws: any;
    connect: () => void;
}
