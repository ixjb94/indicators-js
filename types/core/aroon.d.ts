export = aroon;
/**
 *
 * @param {number[]} high
 * @param {number[]} low
 * @param {number} period
 * @param {number} [size]
 * @returns First output = Aroon Down, Second output = Aroon Up
 */
declare function aroon(high: number[], low: number[], period: number, size?: number): number[][];
