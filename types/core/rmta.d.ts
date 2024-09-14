export = rmta;
/**
 *
 * @param {number[]} source
 * @param {number} period
 * @param {number} beta
 * @param {number} [size]
 * @returns
 */
declare function rmta(source: number[], period: number, beta: number, size?: number): Promise<number[]>;
