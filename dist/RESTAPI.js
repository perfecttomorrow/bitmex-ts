export const RESTAPI = (httpRequest) => ({
    Announcement: {
        get: (req) => httpRequest({ method: 'GET', path: '/api/v1/announcement', req }),
        getUrgent: (req) => httpRequest({ method: 'GET', path: '/api/v1/announcement/urgent', req })
    },
    APIKey: {
        new: (req) => httpRequest({ method: 'POST', path: '/api/v1/apiKey', req }),
        get: (req) => httpRequest({ method: 'GET', path: '/api/v1/apiKey', req }),
        remove: (req) => httpRequest({ method: 'DELETE', path: '/api/v1/apiKey', req }),
        disable: (req) => httpRequest({ method: 'POST', path: '/api/v1/apiKey/disable', req }),
        enable: (req) => httpRequest({ method: 'POST', path: '/api/v1/apiKey/enable', req })
    },
    Chat: {
        get: (req) => httpRequest({ method: 'GET', path: '/api/v1/chat', req }),
        new: (req) => httpRequest({ method: 'POST', path: '/api/v1/chat', req }),
        getChannels: (req) => httpRequest({ method: 'GET', path: '/api/v1/chat/channels', req }),
        getConnected: (req) => httpRequest({ method: 'GET', path: '/api/v1/chat/connected', req })
    },
    Execution: {
        get: (req) => httpRequest({ method: 'GET', path: '/api/v1/execution', req }),
        getTradeHistory: (req) => httpRequest({ method: 'GET', path: '/api/v1/execution/tradeHistory', req })
    },
    Funding: {
        get: (req) => httpRequest({ method: 'GET', path: '/api/v1/funding', req })
    },
    Instrument: {
        get: (req) => httpRequest({ method: 'GET', path: '/api/v1/instrument', req }),
        getActive: (req) => httpRequest({ method: 'GET', path: '/api/v1/instrument/active', req }),
        getIndices: (req) => httpRequest({ method: 'GET', path: '/api/v1/instrument/indices', req }),
        getActiveAndIndices: (req) => httpRequest({ method: 'GET', path: '/api/v1/instrument/activeAndIndices', req }),
        getActiveIntervals: (req) => httpRequest({ method: 'GET', path: '/api/v1/instrument/activeIntervals', req }),
        getCompositeIndex: (req) => httpRequest({ method: 'GET', path: '/api/v1/instrument/compositeIndex', req })
    },
    Insurance: {
        get: (req) => httpRequest({ method: 'GET', path: '/api/v1/insurance', req })
    },
    Leaderboard: {
        get: (req) => httpRequest({ method: 'GET', path: '/api/v1/leaderboard', req }),
        getName: (req) => httpRequest({ method: 'GET', path: '/api/v1/leaderboard/name', req })
    },
    Liquidation: {
        get: (req) => httpRequest({ method: 'GET', path: '/api/v1/liquidation', req })
    },
    Notification: {
        get: (req) => httpRequest({ method: 'GET', path: '/api/v1/notification', req })
    },
    Order: {
        getOrders: (req) => httpRequest({ method: 'GET', path: '/api/v1/order', req }),
        new: (req) => httpRequest({ method: 'POST', path: '/api/v1/order', req }),
        amend: (req) => httpRequest({ method: 'PUT', path: '/api/v1/order', req }),
        cancel: (req) => httpRequest({ method: 'DELETE', path: '/api/v1/order', req }),
        newBulk: (req) => httpRequest({ method: 'POST', path: '/api/v1/order/bulk', req }),
        amendBulk: (req) => httpRequest({ method: 'PUT', path: '/api/v1/order/bulk', req }),
        closePosition: (req) => httpRequest({ method: 'POST', path: '/api/v1/order/closePosition', req }),
        cancelAll: (req) => httpRequest({ method: 'DELETE', path: '/api/v1/order/all', req }),
        cancelAllAfter: (req) => httpRequest({ method: 'POST', path: '/api/v1/order/cancelAllAfter', req })
    },
    OrderBook: {
        getL2: (req) => httpRequest({ method: 'GET', path: '/api/v1/orderBook/L2', req })
    },
    Position: {
        get: (req) => httpRequest({ method: 'GET', path: '/api/v1/position', req }),
        isolateMargin: (req) => httpRequest({ method: 'POST', path: '/api/v1/position/isolate', req }),
        updateRiskLimit: (req) => httpRequest({ method: 'POST', path: '/api/v1/position/riskLimit', req }),
        transferIsolatedMargin: (req) => httpRequest({ method: 'POST', path: '/api/v1/position/transferMargin', req }),
        updateLeverage: (req) => httpRequest({ method: 'POST', path: '/api/v1/position/leverage', req })
    },
    Quote: {
        get: (req) => httpRequest({ method: 'GET', path: '/api/v1/quote', req }),
        getBucketed: (req) => httpRequest({ method: 'GET', path: '/api/v1/quote/bucketed', req })
    },
    Schema: {
        get: (req) => httpRequest({ method: 'GET', path: '/api/v1/schema', req }),
        websocketHelp: (req) => httpRequest({ method: 'GET', path: '/api/v1/schema/websocketHelp', req })
    },
    Settlement: {
        get: (req) => httpRequest({ method: 'GET', path: '/api/v1/settlement', req })
    },
    Stats: {
        get: (req) => httpRequest({ method: 'GET', path: '/api/v1/stats', req }),
        history: (req) => httpRequest({ method: 'GET', path: '/api/v1/stats/history', req }),
        historyUSD: (req) => httpRequest({ method: 'GET', path: '/api/v1/stats/historyUSD', req })
    },
    Trade: {
        get: (req) => httpRequest({ method: 'GET', path: '/api/v1/trade', req }),
        getBucketed: (req) => httpRequest({ method: 'GET', path: '/api/v1/trade/bucketed', req })
    },
    User: {
        getDepositAddress: (req) => httpRequest({ method: 'GET', path: '/api/v1/user/depositAddress', req }),
        getWallet: (req) => httpRequest({ method: 'GET', path: '/api/v1/user/wallet', req }),
        getWalletHistory: (req) => httpRequest({ method: 'GET', path: '/api/v1/user/walletHistory', req }),
        getWalletSummary: (req) => httpRequest({ method: 'GET', path: '/api/v1/user/walletSummary', req }),
        minWithdrawalFee: (req) => httpRequest({ method: 'GET', path: '/api/v1/user/minWithdrawalFee', req }),
        requestWithdrawal: (req) => httpRequest({ method: 'POST', path: '/api/v1/user/requestWithdrawal', req }),
        cancelWithdrawal: (req) => httpRequest({ method: 'POST', path: '/api/v1/user/cancelWithdrawal', req }),
        confirmWithdrawal: (req) => httpRequest({ method: 'POST', path: '/api/v1/user/confirmWithdrawal', req }),
        requestEnableTFA: (req) => httpRequest({ method: 'POST', path: '/api/v1/user/requestEnableTFA', req }),
        confirmEnableTFA: (req) => httpRequest({ method: 'POST', path: '/api/v1/user/confirmEnableTFA', req }),
        disableTFA: (req) => httpRequest({ method: 'POST', path: '/api/v1/user/disableTFA', req }),
        confirm: (req) => httpRequest({ method: 'POST', path: '/api/v1/user/confirmEmail', req }),
        getAffiliateStatus: (req) => httpRequest({ method: 'GET', path: '/api/v1/user/affiliateStatus', req }),
        checkReferralCode: (req) => httpRequest({ method: 'GET', path: '/api/v1/user/checkReferralCode', req }),
        logout: (req) => httpRequest({ method: 'POST', path: '/api/v1/user/logout', req }),
        logoutAll: (req) => httpRequest({ method: 'POST', path: '/api/v1/user/logoutAll', req }),
        savePreferences: (req) => httpRequest({ method: 'POST', path: '/api/v1/user/preferences', req }),
        get: (req) => httpRequest({ method: 'GET', path: '/api/v1/user', req }),
        update: (req) => httpRequest({ method: 'PUT', path: '/api/v1/user', req }),
        getCommission: (req) => httpRequest({ method: 'GET', path: '/api/v1/user/commission', req }),
        getMargin: (req) => httpRequest({ method: 'GET', path: '/api/v1/user/margin', req })
    }
});
