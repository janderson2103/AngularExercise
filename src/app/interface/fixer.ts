export interface Query {
    from?: string;
    to?: string;
    amount?: number;
    symbols?: string;
    base?: string;
    start_date?: string;
    end_date?: string;
}

export interface ConvertResponse {
    success?: boolean;
    query?: {
        from?: string;
        to?: string;
        amount?: number;
    };
    result?: number;
}

export interface SymbolResponse {
    success?: boolean;
    symbols?: {
        [key: string]: string;
    };
}

export interface LatestResponse {
    success?: boolean;
    rates?: {
        [key: string]: number;
    };
}

export interface TimeseriesResponse {
    success?: boolean;
    timeseries?: boolean;
    start_date?: Date;
    end_date?: Date;
    rates?: [
        { 
            [key: string]: {
                [key2: string]: number
            };
        }
    ];
}
