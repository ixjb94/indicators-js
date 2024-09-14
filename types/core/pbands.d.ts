export = pbands;
/**
 *
 * @param {number[]} high
 * @param {number[]} low
 * @param {number[]} close
 * @param {number} period
 * @param {number} [size]
 * @returns [pbands_lower, pbands_upper]
 */
declare function pbands(high: number[], low: number[], close: number[], period: number, size?: number): number[][];
