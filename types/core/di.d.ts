export = di;
/**
 *
 * @param {number[]} high
 * @param {number[]} low
 * @param {number[]} close
 * @param {number} period
 * @param {number} [size]
 * @returns [Plus DI, Minus DI]
 */
declare function di(high: number[], low: number[], close: number[], period: number, size?: number): Promise<number[][]>;
