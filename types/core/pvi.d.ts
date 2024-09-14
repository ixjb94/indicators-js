export = pvi;
/**
 *
 * @param {number[]} close
 * @param {number[]} volume
 * @param {number} [size]
 * @returns
 */
declare function pvi(close: number[], volume: number[], size?: number): Promise<number[]>;
