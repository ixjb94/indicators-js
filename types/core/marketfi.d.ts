export = marketfi;
/**
 *
 * @param {number[]} high
 * @param {number[]} low
 * @param {number[]} volume
 * @param {number} [size]
 * @returns
 */
declare function marketfi(high: number[], low: number[], volume: number[], size?: number): Promise<number[]>;
