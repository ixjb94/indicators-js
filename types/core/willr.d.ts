export = willr;
/**
 *
 * @param {number[]} high
 * @param {number[]} low
 * @param {number[]} close
 * @param {number} period
 * @param {number} [size]
 * @returns
 */
declare function willr(high: number[], low: number[], close: number[], period: number, size?: number): Promise<number[]>;
