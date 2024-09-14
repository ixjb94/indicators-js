export = nvi;
/**
 *
 * @param {number[]} close
 * @param {number[]} volume
 * @param {number} [size]
 * @returns
 */
declare function nvi(close: number[], volume: number[], size?: number): Promise<number[]>;
