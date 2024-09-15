export = ce;
/**
 *
 * @param {number[]} high
 * @param {number[]} low
 * @param {number[]} close
 * @param {number} period
 * @param {number} coef
 * @param {number} [size]
 * @returns [ce_high, ce_low]
 */
declare function ce(high: number[], low: number[], close: number[], period: number, coef: number, size?: number): number[][];
