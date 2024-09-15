export = vwap;
/**
 *
 * @param {number[]} high
 * @param {number[]} low
 * @param {number[]} close
 * @param {number[]} volume
 * @param {number} period
 * @param {number} [size]
 * @returns
 */
declare function vwap(high: number[], low: number[], close: number[], volume: number[], period: number, size?: number): number[];
