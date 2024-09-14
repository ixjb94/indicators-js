export = fisher;
/**
 *
 * @param {number[]} high
 * @param {number[]} low
 * @param {number} period
 * @param {number} [size]
 * @returns [fisher, signal]
 */
declare function fisher(high: number[], low: number[], period: number, size?: number): number[][];
