export = ema;
/**
 *
 * @param {number[]} source
 * @param {number} period
 * @param {number} [size]
 * @returns
 */
declare function ema(source: number[], period: number, size?: number): Promise<number[]>;
