export = typprice;
/**
 *
 * @param {number[]} high
 * @param {number[]} low
 * @param {number[]} close
 * @param {number} [size]
 * @returns
 */
declare function typprice(high: number[], low: number[], close: number[], size?: number): Promise<number[]>;
