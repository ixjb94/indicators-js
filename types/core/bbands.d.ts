export = bbands;
/**
 *
 * @param {number[]} source
 * @param {number} period
 * @param {number} stddev
 * @param {number} [size]
 * @returns [Lower, Middle, Upper]
 */
declare function bbands(source: number[], period: number, stddev: number, size?: number): Promise<number[][]>;
