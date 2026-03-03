export interface OHLCV {
    date: string;
    open: number;
    high: number;
    low: number;
    close: number;
    volumeET: number;
    volumeTU: number;
    tradeCount: number;
}