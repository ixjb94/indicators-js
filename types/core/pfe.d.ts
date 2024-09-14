export = pfe;
/**
 *
 * @param {number[]} source
 * @param {number} period
 * @param {number} ema_period
 * @param {number} [size]
 * @returns
 */
declare function pfe(source: number[], period: number, ema_period: number, size?: number): Promise<number[]>;
