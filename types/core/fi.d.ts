export = fi;
/**
 *
 * @param {number[]} close
 * @param {number[]} volume
 * @param {number} period
 * @param {number} [size]
 * @returns
 */
declare function fi(close: number[], volume: number[], period: number, size?: number): Promise<number[]>;
