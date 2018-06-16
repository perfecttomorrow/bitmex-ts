import { Message } from './Message';
import { HttpRequest } from './type';
export declare const RESTAPI: (httpRequest: HttpRequest) => {
    Announcement: {
        get: (req: {
            columns?: string;
        }) => Promise<Message.Announcement[]>;
        getUrgent: (req: {}) => Promise<Message.Announcement[]>;
    };
    APIKey: {
        new: (req: {
            name?: string;
            cidr?: string;
            permissions?: string;
            enabled?: boolean;
            token?: string;
        }) => Promise<Message.APIKey>;
        get: (req: {
            reverse?: boolean;
        }) => Promise<Message.APIKey[]>;
        remove: (req: {
            apiKeyID: string;
        }) => Promise<{
            success: boolean;
        }>;
        disable: (req: {
            apiKeyID: string;
        }) => Promise<Message.APIKey>;
        enable: (req: {
            apiKeyID: string;
        }) => Promise<Message.APIKey>;
    };
    Chat: {
        get: (req: {
            count?: number;
            start?: number;
            reverse?: boolean;
            channelID?: number;
        }) => Promise<Message.Chat[]>;
        new: (req: {
            message: string;
            channelID?: number;
        }) => Promise<Message.Chat>;
        getChannels: (req: {}) => Promise<Message.ChatChannel[]>;
        getConnected: (req: {}) => Promise<Message.ConnectedUsers>;
    };
    Execution: {
        get: (req: {
            symbol?: string;
            filter?: string;
            columns?: string;
            count?: number;
            start?: number;
            reverse?: boolean;
            startTime?: string;
            endTime?: string;
        }) => Promise<Message.Execution[]>;
        getTradeHistory: (req: {
            symbol?: string;
            filter?: string;
            columns?: string;
            count?: number;
            start?: number;
            reverse?: boolean;
            startTime?: string;
            endTime?: string;
        }) => Promise<Message.Execution[]>;
    };
    Funding: {
        get: (req: {
            symbol?: string;
            filter?: string;
            columns?: string;
            count?: number;
            start?: number;
            reverse?: boolean;
            startTime?: string;
            endTime?: string;
        }) => Promise<Message.Funding[]>;
    };
    Instrument: {
        get: (req: {
            symbol?: string;
            filter?: string;
            columns?: string;
            count?: number;
            start?: number;
            reverse?: boolean;
            startTime?: string;
            endTime?: string;
        }) => Promise<Message.Instrument[]>;
        getActive: (req: {}) => Promise<Message.Instrument[]>;
        getIndices: (req: {}) => Promise<Message.Instrument[]>;
        getActiveAndIndices: (req: {}) => Promise<Message.Instrument[]>;
        getActiveIntervals: (req: {}) => Promise<Message.InstrumentInterval>;
        getCompositeIndex: (req: {
            account?: number;
            symbol?: string;
            filter?: string;
            columns?: string;
            count?: number;
            start?: number;
            reverse?: boolean;
            startTime?: string;
            endTime?: string;
        }) => Promise<Message.IndexComposite[]>;
    };
    Insurance: {
        get: (req: {
            symbol?: string;
            filter?: string;
            columns?: string;
            count?: number;
            start?: number;
            reverse?: boolean;
            startTime?: string;
            endTime?: string;
        }) => Promise<Message.Insurance[]>;
    };
    Leaderboard: {
        get: (req: {
            method?: string;
        }) => Promise<Message.Leaderboard[]>;
        getName: (req: {}) => Promise<{
            name: string;
        }>;
    };
    Liquidation: {
        get: (req: {
            symbol?: string;
            filter?: string;
            columns?: string;
            count?: number;
            start?: number;
            reverse?: boolean;
            startTime?: string;
            endTime?: string;
        }) => Promise<Message.Liquidation[]>;
    };
    Notification: {
        get: (req: {}) => Promise<Message.Notification[]>;
    };
    Order: {
        getOrders: (req: {
            symbol?: string;
            filter?: string;
            columns?: string;
            count?: number;
            start?: number;
            reverse?: boolean;
            startTime?: string;
            endTime?: string;
        }) => Promise<Message.Order[]>;
        new: (req: {
            symbol: string;
            side?: string;
            simpleOrderQty?: number;
            orderQty?: number;
            price?: number;
            displayQty?: number;
            stopPx?: number;
            clOrdID?: string;
            clOrdLinkID?: string;
            pegOffsetValue?: number;
            pegPriceType?: string;
            ordType?: string;
            timeInForce?: string;
            execInst?: string;
            contingencyType?: string;
            text?: string;
        }) => Promise<Message.Order>;
        amend: (req: {
            orderID?: string;
            origClOrdID?: string;
            clOrdID?: string;
            simpleOrderQty?: number;
            orderQty?: number;
            simpleLeavesQty?: number;
            leavesQty?: number;
            price?: number;
            stopPx?: number;
            pegOffsetValue?: number;
            text?: string;
        }) => Promise<Message.Order>;
        cancel: (req: {
            orderID?: string;
            clOrdID?: string;
            text?: string;
        }) => Promise<Message.Order[]>;
        newBulk: (req: {
            orders?: string;
        }) => Promise<Message.Order[]>;
        amendBulk: (req: {
            orders?: string;
        }) => Promise<Message.Order[]>;
        closePosition: (req: {
            symbol: string;
            price?: number;
        }) => Promise<Message.Order>;
        cancelAll: (req: {
            symbol?: string;
            filter?: string;
            text?: string;
        }) => Promise<Message.Order[]>;
        cancelAllAfter: (req: {
            timeout: number;
        }) => Promise<{}>;
    };
    OrderBook: {
        getL2: (req: {
            symbol: string;
            depth?: number;
        }) => Promise<Message.OrderBookL2[]>;
    };
    Position: {
        get: (req: {
            filter?: string;
            columns?: string;
            count?: number;
        }) => Promise<Message.Position[]>;
        isolateMargin: (req: {
            symbol: string;
            enabled?: boolean;
        }) => Promise<Message.Position>;
        updateRiskLimit: (req: {
            symbol: string;
            riskLimit: number;
        }) => Promise<Message.Position>;
        transferIsolatedMargin: (req: {
            symbol: string;
            amount: number;
        }) => Promise<Message.Position>;
        updateLeverage: (req: {
            symbol: string;
            leverage: number;
        }) => Promise<Message.Position>;
    };
    Quote: {
        get: (req: {
            symbol?: string;
            filter?: string;
            columns?: string;
            count?: number;
            start?: number;
            reverse?: boolean;
            startTime?: string;
            endTime?: string;
        }) => Promise<Message.Quote[]>;
        getBucketed: (req: {
            binSize?: string;
            partial?: boolean;
            symbol?: string;
            filter?: string;
            columns?: string;
            count?: number;
            start?: number;
            reverse?: boolean;
            startTime?: string;
            endTime?: string;
        }) => Promise<Message.Quote[]>;
    };
    Schema: {
        get: (req: {
            model?: string;
        }) => Promise<{}>;
        websocketHelp: (req: {}) => Promise<{}>;
    };
    Settlement: {
        get: (req: {
            symbol?: string;
            filter?: string;
            columns?: string;
            count?: number;
            start?: number;
            reverse?: boolean;
            startTime?: string;
            endTime?: string;
        }) => Promise<Message.Settlement[]>;
    };
    Stats: {
        get: (req: {}) => Promise<Message.Stats[]>;
        history: (req: {}) => Promise<Message.StatsHistory[]>;
        historyUSD: (req: {}) => Promise<Message.StatsUSD[]>;
    };
    Trade: {
        get: (req: {
            symbol?: string;
            filter?: string;
            columns?: string;
            count?: number;
            start?: number;
            reverse?: boolean;
            startTime?: string;
            endTime?: string;
        }) => Promise<Message.Trade[]>;
        getBucketed: (req: {
            binSize?: string;
            partial?: boolean;
            symbol?: string;
            filter?: string;
            columns?: string;
            count?: number;
            start?: number;
            reverse?: boolean;
            startTime?: string;
            endTime?: string;
        }) => Promise<Message.TradeBin[]>;
    };
    User: {
        getDepositAddress: (req: {
            currency?: string;
        }) => Promise<string>;
        getWallet: (req: {
            currency?: string;
        }) => Promise<Message.Wallet>;
        getWalletHistory: (req: {
            currency?: string;
        }) => Promise<Message.Transaction[]>;
        getWalletSummary: (req: {
            currency?: string;
        }) => Promise<Message.Transaction[]>;
        minWithdrawalFee: (req: {
            currency?: string;
        }) => Promise<{}>;
        requestWithdrawal: (req: {
            otpToken?: string;
            currency: string;
            amount: number;
            address: string;
            fee?: number;
        }) => Promise<Message.Transaction>;
        cancelWithdrawal: (req: {
            token: string;
        }) => Promise<Message.Transaction>;
        confirmWithdrawal: (req: {
            token: string;
        }) => Promise<Message.Transaction>;
        requestEnableTFA: (req: {
            type?: string;
        }) => Promise<boolean>;
        confirmEnableTFA: (req: {
            type?: string;
            token: string;
        }) => Promise<boolean>;
        disableTFA: (req: {
            type?: string;
            token: string;
        }) => Promise<boolean>;
        confirm: (req: {
            token: string;
        }) => Promise<Message.AccessToken>;
        getAffiliateStatus: (req: {}) => Promise<Message.Affiliate>;
        checkReferralCode: (req: {
            referralCode?: string;
        }) => Promise<number>;
        logout: (req: {}) => Promise<null>;
        logoutAll: (req: {}) => Promise<number>;
        savePreferences: (req: {
            prefs: string;
            overwrite?: boolean;
        }) => Promise<Message.User>;
        get: (req: {}) => Promise<Message.User>;
        update: (req: {
            firstname?: string;
            lastname?: string;
            oldPassword?: string;
            newPassword?: string;
            newPasswordConfirm?: string;
            username?: string;
            country?: string;
            pgpPubKey?: string;
        }) => Promise<Message.User>;
        getCommission: (req: {}) => Promise<Message.UserCommission[]>;
        getMargin: (req: {
            currency?: string;
        }) => Promise<Message.Margin>;
    };
};
