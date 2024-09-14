export = macd;
/**
 *
 * @param {number[]} source
 * @param {number} short_period
 * @param {number} long_period
 * @param {number} signal_period
 * @param {number} [size]
 * @returns [macd, signal, hist]
 */
declare function macd(source: number[], short_period: number, long_period: number, signal_period: number, size?: number): Promise<number[][]>;
