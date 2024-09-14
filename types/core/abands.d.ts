export = abands;
/**
 * @param {number[]} high
 * @param {number[]} low
 * @param {number[]} close
 * @param {number} period
 * @param {number} [size]
 * @returns [upper_band, lower_band, middle_point]
 */
declare function abands(high: number[], low: number[], close: number[], period: number, size?: number): Promise<number[][]>;
