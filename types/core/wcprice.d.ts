export = wcprice;
/**
 *
 * @param {number[]} high
 * @param {number[]} low
 * @param {number[]} close
 * @param {number} [size]
 * @returns
 */
declare function wcprice(high: number[], low: number[], close: number[], size?: number): Promise<number[]>;
