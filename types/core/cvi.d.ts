export = cvi;
/**
 *
 * @param {number[]} high
 * @param {number[]} low
 * @param {number} period
 * @param {number} [size]
 * @returns
 */
declare function cvi(high: number[], low: number[], period: number, size?: number): Promise<number[]>;
