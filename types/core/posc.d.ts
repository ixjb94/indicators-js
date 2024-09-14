export = posc;
/**
 *
 * @param {number[]} high
 * @param {number[]} low
 * @param {number[]} close
 * @param {number} period
 * @param {number} ema_period
 * @param {number} [size]
 * @returns
 */
declare function posc(high: number[], low: number[], close: number[], period: number, ema_period: number, size?: number): Promise<number[]>;
