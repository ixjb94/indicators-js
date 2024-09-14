export = tsi;
/**
 *
 * @param {number[]} source
 * @param {number} y_period
 * @param {number} z_period
 * @param {number} [size]
 * @returns
 */
declare function tsi(source: number[], y_period: number, z_period: number, size?: number): Promise<number[]>;
