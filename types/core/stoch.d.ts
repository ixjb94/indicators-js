export = stoch;
/**
 *
 * @param {number[]} high
 * @param {number[]} low
 * @param {number[]} close
 * @param {number} kperiod
 * @param {number} kslow
 * @param {number} dperiod
 * @param {number} [size]
 * @returns [stoch, stoch_ma]
 */
declare function stoch(high: number[], low: number[], close: number[], kperiod: number, kslow: number, dperiod: number, size?: number): Promise<number[][]>;
