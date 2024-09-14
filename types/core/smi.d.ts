export = smi;
/**
 *
 * @param {number[]} high
 * @param {number[]} low
 * @param {number[]} close
 * @param {number} q_period
 * @param {number} r_period
 * @param {number} s_period
 * @param {number} [size]
 * @returns
 */
declare function smi(high: number[], low: number[], close: number[], q_period: number, r_period: number, s_period: number, size?: number): Promise<number[]>;
