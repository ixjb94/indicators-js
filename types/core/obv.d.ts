export = obv;
/**
 *
 * @param {number[]} close
 * @param {number[]} volume
 * @param {number} [size]
 * @returns
 */
declare function obv(close: number[], volume: number[], size?: number): Promise<number[]>;
