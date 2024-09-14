export = adx;
/**
 * @param {number[]} high
 * @param {number[]} low
 * @param {number} period
 * @param {number} [size]
 * @returns
 */
declare function adx(high: number[], low: number[], period: number, size?: number): Promise<number[]>;
