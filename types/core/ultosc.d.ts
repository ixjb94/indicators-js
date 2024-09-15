export = ultosc;
/**
 *
 * @param {number[]} high
 * @param {number[]} low
 * @param {number[]} close
 * @param {number} short_period
 * @param {number} medium_period
 * @param {number} long_period
 * @param {number} [size]
 * @returns
 */
declare function ultosc(high: number[], low: number[], close: number[], short_period: number, medium_period: number, long_period: number, size?: number): number[];
