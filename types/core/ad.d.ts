export = ad;
/**
 *
 * @param {number[]} high
 * @param {number[]} low
 * @param {number[]} close
 * @param {number[]} volume
 * @param {number} [size]
 * @returns
 */
declare function ad(high: number[], low: number[], close: number[], volume: number[], size?: number): Promise<number[]>;
