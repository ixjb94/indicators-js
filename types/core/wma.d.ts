export = wma;
/**
 *
 * @param {number[]} source
 * @param {number} period
 * @param {number} [size]
 * @returns
 */
declare function wma(source: number[], period: number, size?: number): Promise<number[]>;
