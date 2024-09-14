export = rmi;
/**
 *
 * @param {number[]} source
 * @param {number} period
 * @param {number} lookback_period
 * @param {number} [size]
 * @returns
 */
declare function rmi(source: number[], period: number, lookback_period: number, size?: number): Promise<number[]>;
