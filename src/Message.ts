//greate by https://www.bitmex.com/api/explorer/swagger.json

export namespace Message {

    export interface Announcement {
        id: number /* format:int32*/
        link: string
        title: string
        content: string
        date: string /* format:date-time*/
    }

    export interface APIKey {
        id: string
        secret: string
        name: string
        nonce: number /* format:int64*/
        cidr: string
        permissions: any[]
        enabled: boolean
        userId: number /* format:int32*/
        created: string /* format:date-time*/
    }

    export interface Chat {
        id: number /* format:int32*/
        date: string /* format:date-time*/
        user: string
        message: string
        html: string
        fromBot: boolean
        channelID: number /* format:double*/
    }

    export interface ChatChannel {
        id: number /* format:int32*/
        name: string
    }

    export interface ConnectedUsers {
        users: number /* format:int32*/
        bots: number /* format:int32*/
    }

    export interface Execution {
        execID: string /* format:guid  成交 ID*/
        orderID: string /* format:guid 委托 ID*/
        clOrdID: string /*客户委托 ID*/
        clOrdLinkID: string /*客户委托连接 ID*/
        account: number /* format:int64*/
        symbol: string
        side: string
        lastQty: number /* format:int64 此交易中买入/卖出的合约数量。这等于或小于委托的数量*/
        lastPx: number /* format:double 此交易的成交价格。此价格可能好于或等于委托的限价*/
        underlyingLastPx: number /* format:double 标的资产的最新价格*/
        lastMkt: string  /* 成交市场*/
        lastLiquidityInd: string /*成交流动性指示*/
        simpleOrderQty: number /* format:double 委托的简单数量*/
        orderQty: number /* format:int64 委托的合约数量*/
        price: number /* format:double*/
        displayQty: number /* format:int64 显示数量*/
        stopPx: number /* format:double 价格达到触发价格时，您的止损委托将被激活？？*/
        pegOffsetValue: number /* format:double 追踪止损价距*/
        pegPriceType: string /*盯盘价格类型*/
        currency: string /*本合约的计价货币*/
        settlCurrency: string   /* 交割货币*/
        execType: string   /*成交类别*/
        ordType: string   /*委托的种类*/
        timeInForce: string   /*生效时间*/
        execInst: string   /*执行指令*/
        contingencyType: string   /*委托连接类型*/
        exDestination: string   /*交易目的地*/
        ordStatus: string   /**/
        triggered: string   /**/
        workingIndicator: boolean   /**/
        ordRejReason: string   /**/
        simpleLeavesQty: number /* format:double*/
        leavesQty: number /* format:int64 剩余可被成交的合约数量*/
        simpleCumQty: number /* format:double 累计成交的简单数量*/
        cumQty: number /* format:int64 已成交数量，如果委托已被完全成交，此数值将等于委托数量*/
        avgPx: number /* format:double 成交价格*/
        commission: number /* format:double 佣金feilv or yongjin*/
        tradePublishIndicator: string /*交易发布指示*/
        multiLegReportingType: string/*多腿合约报告类型*/
        text: string
        trdMatchID: string /* format:guid 交易匹配 ID */
        execCost: number /* format:int64 此交易中成交的合约的价值*/
        execComm: number /* format:int64 此交易所付的佣金*/
        homeNotional: number /* format:double 本地货币价值*/
        foreignNotional: number /* format:double 异地货币价值*/
        transactTime: string /* format:date-time*/
        timestamp: string /* format:date-time*/
    }

    export interface Funding {
        timestamp: string /* format:date-time*/
        symbol: string
        fundingInterval: string /* format:date-time*/
        fundingRate: number /* format:double*/
        fundingRateDaily: number /* format:double*/
    }

    export interface Instrument {
        symbol: string
        rootSymbol: string /*合约系列的代码 顶层代码*/
        state: string
        typ: string
        listing: string /* format:date-time 此合约开始交易的日期和时间*/
        front: string /* format:date-time 此合约在这个日期将变成即月合约*/
        expiry: string /* format:date-time 合约停止交易的日期和时*/
        settle: string /* format:date-time 该合约会在 {settlement} 结算*/
        relistInterval: string /* format:date-time  如果存在，此合约是重复挂牌性的合约，它会按照此时间间隔结算并重新挂牌*/
        inverseLeg: string /*若此合约有反向部分，是反向部分的合约代码*/
        sellLeg: string /*对于跨期合约，所卖的合约*/
        buyLeg: string /*对于跨期合约，所买的合约*/
        optionStrikePcnt: number /* format:double 期权执行价格 %*/
        optionStrikeRound: number /* format:double*/
        optionStrikePrice: number /* format:double 期权执行价格*/
        optionMultiplier: number /* format:double*/
        positionCurrency: string/*仓位货币*/
        underlying: string /*标的货币*/
        quoteCurrency: string/*本合约的计价货币*/
        underlyingSymbol: string /*交易标的资产的代码*/
        reference: string /*在合约到期时计算结算价格所使用的交易所*/
        referenceSymbol: string/*此合约用于制定结算价格所使用的代码*/
        calcInterval: string /* format:date-time  计算间隔*/
        publishInterval: string /* format:date-time 发布间隔*/
        publishTime: string /* format:date-time 发布时间*/
        maxOrderQty: number /* format:int64 最大委托数量*/
        maxPrice: number /* format:double 最大委托价*/
        lotSize: number /* format:int64 最小合约数量*/
        tickSize: number /* format:double 最小的价格变化*/
        multiplier: number /* format:int64 价格 * 倍值 就是一张合约的价值，并且以 XBt 表示 (Satoshi)，是比特币的最小单位*/
        settlCurrency: string /*用于计算盈亏和保证金的结算货币，例：XBt (Satoshi) 是比特币可分割的最小金额*/
        underlyingToPositionMultiplier: number /* format:int64 标的价值至仓位价值的乘数*/
        underlyingToSettleMultiplier: number /* format:int64 标的资产和结算货币的比例*/
        quoteToSettleMultiplier: number /* format:int64 计价货币和结算货币的比例*/
        isQuanto: boolean /*如果参数为 true，代表这是一个双币种合约：用一种货币报价而用另一种货币结算*/
        isInverse: boolean /*如果参数为 true，代表这是一个反向合约：其标的价格是报价的倒数*/
        initMargin: number /* format:double "开仓时根据委托价值的百分比需预留的保证金*/
        maintMargin: number /* format:double 维持仓位所需的仓位价值的百分比*/
        riskLimit: number /* format:int64 该产品的最大杠杆风险限额。若开仓额度高于该额度，则需要增加维持保证金*/
        riskStep: number /* format:int64 增加风险限额时，每增加一个维持保证金，对应增加一个递增额度*/
        limit: number /* format:double 每个交易时段上涨或下跌的价格限制。在同一个交易时段内，价格不能高于涨价限制，也不能低于跌价限*/
        capped: boolean /*是否限价*/
        taxed: boolean /*启用 DPE*/
        deleverage: boolean /*自动减仓*/
        makerFee: number /* format:double 提供流动*/
        takerFee: number /* format:double 提取流动性佣金*/
        settlementFee: number /* format:double 结算费*/
        insuranceFee: number /* format:double 保险*/
        fundingBaseSymbol: string /*永续合约里资金费用的基础利率符号*/
        fundingQuoteSymbol: string /*永续合约里资金费用的计价利率符号*/
        fundingPremiumSymbol: string /*永续合约里资金费用的溢价符号*/
        fundingTimestamp: string /* format:date-time下一个付费/收费时间*/
        fundingInterval: string /* format:date-time 资金费用收取间隔*/
        fundingRate: number
        /* format:double 此时段的资金费率。这是多仓需要支付给空仓的资金费率；如果此费率为负数，空仓将需付费给多仓。
        此费率的计算是首先用计价货币日资金费率减去基础货币日资金费率，然后将日费率转换成此时段的费率。对于拥有溢价代码的合约，此费率将被调整到溢价指数的0.05%范围内。*/
        indicativeFundingRate: number /* format:double 预测的下一个资金时段的资金费率。这是多仓需要付给空仓的费率。如果该数值是负数，代表空仓要付给多仓*/
        rebalanceTimestamp: string /* format:date-time 系统平衡时间*/
        rebalanceInterval: string /* format:date-time 系统平衡时段间隔*/
        openingTimestamp: string /* format:date-time 目前交易时段开始的日期和时间*/
        closingTimestamp: string /* format:date-time 目前交易时段结束的日期和时间*/
        sessionInterval: string /* format:date-time 每个交易时段的长度*/
        prevClosePrice: number /* format:double 上一个交易时段的收盘价*/
        limitDownPrice: number /* format:double 卖盘的竞价在下一个交易时段前不能够低于此价格，这是一个内部的熔断机制来防止在极端市场波动或市场操纵而导致的强平，此价格的计算为： `(1 - 限制百分比) * 上一个时段的收盘价 */
        limitUpPrice: number /* format:double 买盘的竞价在下一个交易时段前不能够高于此价格，这是一个内部的熔断机制来防止在极端市场波动或市场操纵而导致的强平，此价格的计算为： `(1 + 限制百分比) * 上一个时段的收盘价 */
        bankruptLimitDownPrice: number /* format:double 对于限价合约，其价格不允许低于所有空仓中最高的破产价*/
        bankruptLimitUpPrice: number /* format:double 破产最高限价*/
        prevTotalVolume: number /* format:int64 前一时段的总交易量*/
        totalVolume: number /* format:int64 自合约挂牌总合约交易数量*/
        volume: number /* format:int64 本交易时段总合约交易数量*/
        volume24h: number /* format:int64 前24小时总合约交易数量*/
        prevTotalTurnover: number /* format:int64 上一个交易时段的总成交额*/
        totalTurnover: number /* format:int64 自合约挂牌总交易量*/
        turnover: number /* format:int64 本交易时段总合约交易价值*/
        turnover24h: number /* format:int64 24H合约交易价值*/
        prevPrice24h: number /* format:double 前24H合约交易价值*/
        vwap: number /* format:double 交易量加权平均价格*/
        highPrice: number /* format:double 此交易时段的最高成交价格*/
        lowPrice: number /* format:double 此交易时段的最低成交价格*/
        lastPrice: number /* format:double 此合约的最新成交价*/
        lastPriceProtected: number /* format:double 受保护的最新成交价格*/
        lastTickDirection: string /*此合约最近成交价格的变动方向（上涨或下跌）*/
        lastChangePcnt: number /* format:double 过往24小时价格的变化百分比*/
        bidPrice: number /* format:double 此合约的最佳买价*/
        midPrice: number /* format:double 买价和卖价的均值*/
        askPrice: number /* format:double 此合约的最佳卖价*/
        impactBidPrice: number /* format:double 深度加权买价*/
        impactMidPrice: number /* format:double 深度加权中间价*/
        impactAskPrice: number /* format:double 深度加权卖价*/
        hasLiquidity: boolean  /*是否有流动性*/
        openInterest: number /* format:int64 未平仓合约总数*/
        openValue: number /* format:int64 未平仓合约的总价值*/
        fairMethod: string /*使用此种方法来计算合理基差，从而计算合理价格*/
        fairBasisRate: number
        /* format:double 合理基差率是由 BitMEX 设定的一个年化百分比。对于永续合约，它代表目前的资金费率；对于定期合约，此数值将不时调整。BitMEX 将尝试选择一个合理基差率，使得标记价格接近于定期合约的最近交易价格，但并不能保证每次都是这种情况。*/
        fairBasis: number /* format:double 合理基差是此合约的预期溢价，被用来计算合理价格。计算公式为`指示结算价＊(基差率百分比＊到期天数/365)*/
        fairPrice: number /* format:double 此价格的计算使用了 BitMEX 设定的年化基差百分比。在标的指数价格的基础上使用年化基差百分比，从而得到合理价格*/
        markMethod: string /*这是计算未实现盈亏和保证金的价格公式。“最新成交价” 是代表合约最后成交的价格，"合理价格"是透过比较复杂的公式得出，此价格是用来避免防止市场操作和非必要的强平*/
        markPrice: number /* format:double 这是合约最新的标记价格，此价格用于计算盈亏和保证金，并有可能与合约最新成交价格有偏差以避免市场操控，不会影响结算*/
        indicativeTaxRate: number /* format:double 预计税率*/
        indicativeSettlePrice: number /* format:double 目前对于到期时间的结算价格指标。对于大多数期货合约来说，此值就是现货价格，除了在到期前的30分钟或者2小时区间内，此值是时间加权平均价格*/
        optionUnderlyingPrice: number /* format:double*/
        settledPrice: number /* format:double 在到期日此合约的结算价格*/
        timestamp: string /* format:date-time*/
    }

    export interface InstrumentInterval {
        intervals: string[]
        symbols: string[]
    }

    export interface IndexComposite {
        timestamp: string /* format:date-time*/
        symbol: string
        indexSymbol: string
        reference: string
        lastPrice: number /* format:double*/
        weight: number /* format:double*/
        logged: string /* format:date-time*/
    }

    export interface Insurance {
        currency: string
        timestamp: string /* format:date-time*/
        walletBalance: number /* format:int64*/
    }

    export interface Leaderboard {
        name: string
        isRealName: boolean
        profit: number /* format:double*/
    }

    export interface Liquidation {
        orderID: string /* format:guid*/
        symbol: string
        side: string
        price: number /* format:double*/
        leavesQty: number /* format:int64*/
    }

    export interface Notification {
        id: number /* format:int32*/
        date: string /* format:date-time*/
        title: string
        body: string
        ttl: number /* format:int32*/
        type: string
        closable: boolean
        persist: boolean
        waitForVisibility: boolean
        sound: string
    }

    export interface Order {
        orderID: string /* format:guid  委托 ID */
        clOrdID: string/* f 客户委托 ID */
        clOrdLinkID: string /* 客户委托连接 ID*/
        account: number /* format:int64*/
        symbol: string
        side: string /*买或卖*/
        simpleOrderQty: number /* format:double 委托的简单数量*/
        orderQty: number /* format:int64 买入或卖出的合约数量*/
        price: number /* format:double 买入或卖出的价格*/
        displayQty: number /* format:int64 值为 0 以建立隐藏委托，或者设任何少于总委托数量的数值建立冰山委托*/
        stopPx: number /* format:double 当前价格达到触发价格时，止损委托将被激活。例如：卖空止损：当前价格 <= 触发价格  买多止损：当前价格 >= 触发价格*/
        pegOffsetValue: number /* format:double 距离市价触发追踪止损的价距。例如追踪价距为 $2，那么止损将会在价格不利的方向移动 $2 后触发*/
        pegPriceType: string /* 盯盘价格类型*/
        currency: string    /* 货币单位*/
        settlCurrency: string    /*用于计算盈亏和保证金的结算货币，XBt (Satoshi) 是比特币可分割的最小金额*/
        ordType: string    /*委托的种类：*/
        timeInForce: string
        /*该委托的生效时间。默认值是 GoodTillCancel（一直有效直至取消）。可被设置为 ImmediateOrCancel（立刻成交或取消）或 FillOrKill（完全成交或取消），该委托只会立刻全部成交，否则将被取消*/
        execInst: string    /*执行指令*/
        contingencyType: string    /*委托连接类型",*/
        exDestination: string    /**/
        ordStatus: string
        /*委托的状态，新委托 (New)、部分成交 (Partially Filled)、已成交 (Filled) 或已取消 (Canceled)。
        对于触发性委托将会有2个状态：未触发 (Untriggered) 或已触发 (Triggered)。当触发性委托未被触发时，它不会到市场上挂单，也不会使用起始保证金。当委托被触发后，它会进入挂单列表*/
        triggered: string    /*已触发*/
        workingIndicator: boolean    /*工作指标*/
        ordRejReason: string    /*委托的拒绝原因*/
        simpleLeavesQty: number /* format:double 未成交的简单数量*/
        leavesQty: number /* format:int64 委托剩余可被成交的合约数量*/
        simpleCumQty: number /* format:double 累计成交的简单数量*/
        cumQty: number /* format:int64  委托已成交数量，如果委托已被完全成交，此数值将等于委托数量*/
        avgPx: number /* format:double 此委托成交均价*/
        multiLegReportingType: string    /*多腿合约报告类型*/
        text: string    /**/
        transactTime: string /* format:date-time 委托提交或最后一次修改的时间，用于撮合系统中按照时间优先的排序*/
        timestamp: string /* format:date-time*/
    }

    export interface OrderBookL2 {
        symbol: string
        id: number /* format:int64*/
        side: string
        size: number /* format:int64*/
        price: number /* format:double*/
    }

    export interface Position {
        account: number /* format:int64 帐户*/
        symbol: string /* 合约代码 usdbtx*/
        currency: string /* 基础货币单位*/
        underlying: string /* 标的货币-在结算资金费率和利率时使用 */
        quoteCurrency: string /* 计价货币-在结算资金费率和利率时使用 */
        commission: number /* 佣金:分成交委托佣金、佣金费率等，待核实*/
        initMarginReq: number /* format:double 起始保证金要求*/
        maintMarginReq: number /* format:double 维持保证金要求*/
        riskLimit: number /* format:int64 风险限额*/
        leverage: number /* format:double 杠杆*/
        crossMargin: boolean /* format:double 全仓保证金*/
        deleveragePercentile: number /* format:double 自动减仓百分位*/
        rebalancedPnl: number /* format:int64 系统平衡的盈亏*/
        prevRealisedPnl: number /* format:int64 上一个已平仓位的盈亏*/
        prevUnrealisedPnl: number /* format:int64 前一个未实现盈亏*/
        prevClosePrice: number /* format:double 前一个收盘价格*/
        openingTimestamp: string /* format:date-time 开盘时间*/
        openingQty: number /* format:int64 开盘数量*/
        openingCost: number /* format:int64开盘成本*/
        openingComm: number /* format:int64 开盘佣金*/
        openOrderBuyQty: number /* format:int64 未成交买单数量*/
        openOrderBuyCost: number /* format:int64 未成交卖单成*/
        openOrderBuyPremium: number /* format:int64 未成交买单溢价*/
        openOrderSellQty: number /* format:int64 未成交卖单数量*/
        openOrderSellCost: number /* format:int64 未成交卖单成本*/
        openOrderSellPremium: number /* format:int64 未成交卖单溢价*/
        execBuyQty: number /* format:int64 成交买单数量*/
        execBuyCost: number /* format:int64 成交买单成本*/
        execSellQty: number /* format:int64 成交卖单数量*/
        execSellCost: number /* format:int64 成交卖单成本*/
        execQty: number /* format:int64 成交中成交的合约的数量*/
        execCost: number /* format:int64 此交易中成交的合约的价值*/
        execComm: number /* format:int64 此交易所付的佣金*/
        currentTimestamp: string /* format:date-time 当前时间*/
        currentQty: number /* format:int64 此合约的仓位，正数为多仓，负数为空仓*/
        currentCost: number /* format:int64 当前成本*/
        currentComm: number /* format:int64 当前佣金*/
        realisedCost: number /* format:int64 已实现成本*/
        unrealisedCost: number /* format:int64 未实现成本*/
        grossOpenCost: number /* format:int64 未成交委托总成本*/
        grossOpenPremium: number /* format:int64 未成交委托总溢价*/
        grossExecCost: number /* format:int64 总成交成本*/
        isOpen: boolean   /*未平仓*/
        markPrice: number /* format:double 合约的标记价格，此价格是用于计算盈亏和保证金*/
        markValue: number /* format:int64 标记价值*/
        riskValue: number /* format:int64 风险额度*/
        homeNotional: number /* format:double 仓位现时的名义价值*/
        foreignNotional: number /* format:double 异地货币价值*/
        posState: string  /*仓位状态*/
        posCost: number /* format:int64 仓位成本*/
        posCost2: number /* format:int64 仓位成本2*/
        posCross: number /* format:int64 仓位共享保证金*/
        posInit: number /* format:int64 仓位起始保证金*/
        posComm: number /* format:int64 仓位佣金*/
        posLoss: number /* format:int64 仓位亏损*/
        posMargin: number /* format:int64 仓位保证金*/
        posMaint: number /* format:int64 仓位维持保证金*/
        posAllowance: number /* format:int64 仓位津贴*/
        taxableMargin: number /* format:int64 应纳税保证金*/
        initMargin: number /* format:int64 委托保证金：你的委托所需要的最小保证金额。为每个委托价值乘以其所需的起始保证金比例之和*/
        maintMargin: number /* format:int64*/
        sessionMargin: number /* format:int64 交易时段保证金*/
        targetExcessMargin: number /* format:int64 目标剩余保证金*/
        varMargin: number /* format:int64 变动保证金*/
        realisedGrossPnl: number /* format:int64 已实现总盈亏*/
        realisedTax: number /* format:int64 已实现税额*/
        realisedPnl: number /* format:int64 已实现盈亏*/
        unrealisedGrossPnl: number /* format:int64 未实现总盈亏*/
        longBankrupt: number /* format:int64 多仓破产额*/
        shortBankrupt: number /* format:int64 空仓破产额*/
        taxBase: number /* format:int64 调整基础--等待核实不懂其义*/
        indicativeTaxRate: number /* format:double 预计税率*/
        indicativeTax: number /* format:int64 预计税额*/
        unrealisedTax: number /* format:int64 未实现税额*/
        unrealisedPnl: number /* format:int64 该合约的未实现盈亏，以及回报率*/
        unrealisedPnlPcnt: number /* format:double 未实现盈亏％*/
        unrealisedRoePcnt: number /* format:double 未实现资产收益％*/
        simpleQty: number /* format:double 简单数量 ？*/
        simpleCost: number /* format:double 简单成本 ？*/
        simpleValue: number /* format:double 简单价值*/
        simplePnl: number /* format:double 简单盈亏*/
        simplePnlPcnt: number /* format:double 简单盈亏%*/
        avgCostPrice: number /* format:double 目前多／空仓的平均买入／卖出价*/
        avgEntryPrice: number /* format:double 平均开仓价格*/
        breakEvenPrice: number /* format:double 保本价格*/
        marginCallPrice: number /* format:double 标记价触发强平仓位的价格*/
        liquidationPrice: number /* format:double 合约的标记价格低于该价格（多仓）或高于该价格（空仓），会被强制平仓*/
        bankruptPrice: number /* format:double 破产价格*/
        timestamp: string /* format:date-time 当前时间*/
        lastPrice: number /* format:double 最新成交价*/
        lastValue: number /* format:int64 最新价值*/
    }

    export interface Quote {
        timestamp: string /* format:date-time*/
        symbol: string
        bidSize: number /* format:int64*/
        bidPrice: number /* format:double*/
        askPrice: number /* format:double*/
        askSize: number /* format:int64*/
    }

    export interface Settlement {
        timestamp: string /* format:date-time*/
        symbol: string
        settlementType: string
        settledPrice: number /* format:double*/
        optionStrikePrice: number /* format:double*/
        optionUnderlyingPrice: number /* format:double*/
        bankrupt: number /* format:int64*/
        taxBase: number /* format:int64*/
        taxRate: number /* format:double*/
    }

    export interface Stats {
        rootSymbol: string
        currency: string
        volume24h: number /* format:int64*/
        turnover24h: number /* format:int64*/
        openInterest: number /* format:int64*/
        openValue: number /* format:int64*/
    }

    export interface StatsHistory {
        date: string /* format:date-time*/
        rootSymbol: string
        currency: string
        volume: number /* format:int64*/
        turnover: number /* format:int64*/
    }

    export interface StatsUSD {
        rootSymbol: string
        currency: string
        turnover24h: number /* format:int64*/
        turnover30d: number /* format:int64*/
        turnover365d: number /* format:int64*/
        turnover: number /* format:int64*/
    }

    export interface Trade {
        timestamp: string /* format:date-time*/
        symbol: string
        side: string
        size: number /* format:int64*/
        price: number /* format:double*/
        tickDirection: string
        trdMatchID: string /* format:guid 交易匹配 ID*/
        grossValue: number /* format:int64*/
        homeNotional: number /* format:double*/
        foreignNotional: number /* format:double*/
    }

    export interface TradeBin {
        timestamp: string /* format:date-time*/
        symbol: string
        open: number /* format:double*/
        high: number /* format:double*/
        low: number /* format:double*/
        close: number /* format:double*/
        trades: number /* format:int64*/
        volume: number /* format:int64*/
        vwap: number /* format:double*/
        lastSize: number /* format:int64*/
        turnover: number /* format:int64*/
        homeNotional: number /* format:double*/
        foreignNotional: number /* format:double*/
    }

    export interface Wallet {
        account: number /* format:int64*/
        currency: string
        prevDeposited: number /* format:int64*/
        prevWithdrawn: number /* format:int64*/
        prevTransferIn: number /* format:int64*/
        prevTransferOut: number /* format:int64*/
        prevAmount: number /* format:int64*/
        prevTimestamp: string /* format:date-time*/
        deltaDeposited: number /* format:int64*/
        deltaWithdrawn: number /* format:int64*/
        deltaTransferIn: number /* format:int64*/
        deltaTransferOut: number /* format:int64*/
        deltaAmount: number /* format:int64*/
        deposited: number /* format:int64*/
        withdrawn: number /* format:int64*/
        transferIn: number /* format:int64*/
        transferOut: number /* format:int64*/
        amount: number /* format:int64*/
        pendingCredit: number /* format:int64*/
        pendingDebit: number /* format:int64*/
        confirmedDebit: number /* format:int64*/
        timestamp: string /* format:date-time*/
        addr: string
        script: string
        withdrawalLock: string[]
    }

    export interface Transaction {
        transactID: string /* format:guid*/
        account: number /* format:int64*/
        currency: string
        transactType: string
        amount: number /* format:int64*/
        fee: number /* format:int64*/
        transactStatus: string
        address: string
        tx: string
        text: string
        transactTime: string /* format:date-time*/
        timestamp: string /* format:date-time*/
    }

    export interface AccessToken {
        id: string
        ttl: number /* format:double description:time to live in seconds (2 weeks by default)*/
        created: string /* format:date-time*/
        userId: number /* format:double*/
    }

    export interface Affiliate {/* 加盟*/
        account: number /* format:int64*/
        currency: string
        prevPayout: number /* format:int64*/
        prevTurnover: number /* format:int64*/
        prevComm: number /* format:int64*/
        prevTimestamp: string /* format:date-time*/
        execTurnover: number /* format:int64*/
        execComm: number /* format:int64*/
        totalReferrals: number /* format:int64*/
        totalTurnover: number /* format:int64*/
        totalComm: number /* format:int64*/
        payoutPcnt: number /* format:double*/
        pendingPayout: number /* format:int64*/
        timestamp: string /* format:date-time*/
        referrerAccount: number /* format:double*/
    }

    export interface User {/*用户*/
        id: number /* format:int32*/
        ownerId: number /* format:int32*/
        firstname: string
        lastname: string
        username: string
        email: string
        phone: string
        created: string /* format:date-time*/
        lastUpdated: string /* format:date-time*/
        preferences: Message.UserPreferences
        TFAEnabled: string
        affiliateID: string
        pgpPubKey: string
        country: string
    }

    export interface UserCommission {/* 用户佣金*/
        makerFee: number /* format:double*/
        takerFee: number /* format:double*/
        settlementFee: number /* format:double*/
        maxFee: number /* format:double*/
    }

    export interface Margin {/*余量*/
        account: number /* format:int64*/
        currency: string
        riskLimit: number /* format:int64*/
        prevState: string
        state: string
        action: string
        amount: number /* format:int64*/
        pendingCredit: number /* format:int64 待增加金额*/
        pendingDebit: number /* format:int64 待减少金额*/
        confirmedDebit: number /* format:int64 已确认减少金额*/
        prevRealisedPnl: number /* format:int64 前一个已实现盈亏*/
        prevUnrealisedPnl: number /* format:int64 前一个未实现盈*/
        grossComm: number /* format:int64 总佣金*/
        grossOpenCost: number /* format:int64 未成交委托总成本*/
        grossOpenPremium: number /* format:int64 未成交委托总溢价*/
        grossExecCost: number /* format:int64 总成交成本*/
        grossMarkValue: number /* format:int64 总标记价值*/
        riskValue: number /* format:int64 风险额度*/
        taxableMargin: number /* format:int64 未释放盈利*/
        initMargin: number /* format:int64 委托保证金：你的委托所需要的最小保证金额。此数值为你的每个委托价值乘以其所需的起始保证金比例之和。*/
        maintMargin: number /* format:int64 仓位保证金：保留你手持仓位所需的最低保证金要求。此数值为你持有的每种合约的开仓价值乘以其所需的维持保证金比率之和，并加上任何未实现的盈亏*/
        sessionMargin: number /* format:int64 "交易时段保证*/
        targetExcessMargin: number /* format:int64 目标剩余保证金*/
        varMargin: number /* format:int64 变动保证金*/
        realisedPnl: number /* format:int64 已实现盈亏：至今所有已平仓的盈亏金额*/
        unrealisedPnl: number /* format:int64 未实现盈亏：所有未平仓合约的当前盈亏*/
        indicativeTax: number /* format:int64 预计税*/
        unrealisedProfit: number /* format:int64 未实现盈利*/
        syntheticMargin: number /* format:int64  合成型保证金*/
        walletBalance: number /* format:int64 钱包余额 = (存款 - 提款 + 已实现盈亏)*/
        marginBalance: number /* format:int64 保证金余额：你在交易所的总权益。保证金余额 = (钱包余额 + 未实现盈亏)",*/
        marginBalancePcnt: number /* format:double 保证金余额％*/
        marginLeverage: number /* format:double 保证金杠杆*/
        marginUsedPcnt: number /* format:double 已使用保证金％*/
        excessMargin: number /* format:int64 你可以用于开仓的保证金。可用余额 = (保证金余额 - 委托保证金 - 仓位保证金)*/
        excessMarginPcnt: number /* format:double 剩余保证金％*/
        availableMargin: number /* format:int64 可用保证金*/
        withdrawableMargin: number /* format:int64 提现余额*/
        timestamp: string /* format:date-time*/
        grossLastValue: number /* format:int64*/
        commission: number /* format:double 佣金*/
    }

    export interface UserPreferences {/*用户优先*/
        alertOnLiquidations: boolean
        animationsEnabled: boolean
        announcementsLastSeen: string /* format:date-time*/
        chatChannelID: number /* format:double*/
        colorTheme: string
        currency: string
        debug: boolean
        disableEmails: string[]
        hideConfirmDialogs: string[]
        hideConnectionModal: boolean
        hideFromLeaderboard: boolean
        hideNameFromLeaderboard: boolean
        hideNotifications: string[]
        locale: string
        msgsSeen: string[]
        orderBookBinning: {
        }
        orderBookType: string
        orderClearImmediate: boolean
        orderControlsPlusMinus: boolean
        showLocaleNumbers: boolean
        sounds: string[]
        strictIPCheck: boolean
        strictTimeout: boolean
        tickerGroup: string
        tickerPinned: boolean
        tradeLayout: string
    }
}