export = adosc;
/**
 * @param {number[]} high
 * @param {number[]} low
 * @param {number[]} close
 * @param {number[]} volume
 * @param {number} short_period
 * @param {number} long_period
 * @param {number} [size]
 * @returns
 */
declare function adosc(high: number[], low: number[], close: number[], volume: number[], short_period: number, long_period: number, size?: number): Promise<number[]>;
