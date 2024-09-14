export = kc;
/**
 *
 * @param {number[]} high
 * @param {number[]} low
 * @param {number[]} close
 * @param {number} period
 * @param {number} multiple
 * @param {number} [size]
 * @returns [kc_lower, kc_middle, kc_upper]
 */
declare function kc(high: number[], low: number[], close: number[], period: number, multiple: number, size?: number): Promise<number[][]>;
