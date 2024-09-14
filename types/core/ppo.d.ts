export = ppo;
/**
 *
 * @param {number[]} source
 * @param {number} short_period
 * @param {number} long_period
 * @param {number} [size]
 * @returns
 */
declare function ppo(source: number[], short_period: number, long_period: number, size?: number): Promise<number[]>;
