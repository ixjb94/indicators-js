export = volatility;
/**
 *
 * @param {number[]} source
 * @param {number} period
 * @param {number} [size]
 * @returns
 */
declare function volatility(source: number[], period: number, size?: number): Promise<number[]>;
