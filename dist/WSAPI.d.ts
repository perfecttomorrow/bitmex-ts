import { WebSocketConnect, SubscribeTheme, FrameData, WSData } from './type';
export declare class WSAPI {
    private webSocketConnect;
    private arr;
    constructor(webSocketConnect: WebSocketConnect, arr: {
        theme: SubscribeTheme;
        filter?: string;
    }[]);
    onopen: () => void;
    onclose: () => void;
    onmessage: (data: FrameData) => void;
    onFilled: (side: "Buy" | "Sell", price: number) => void;
    data: WSData;
    connect: () => void;
}
