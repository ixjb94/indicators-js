export = psar;
/**
 *
 * @param {number[]} high
 * @param {number[]} low
 * @param {number} accel_step
 * @param {number} accel_max
 * @param {number} [size]
 * @returns
 */
declare function psar(high: number[], low: number[], accel_step: number, accel_max: number, size?: number): Promise<number[]>;
