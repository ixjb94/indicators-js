export = normalize;
/**
 *
 * @param {number} originalLength - example 100
 * @param {number[]} source - example ema | sma | rsi | etc.
 * @param {*} empty - example NaN | Null | 0 | false | etc.
 * @returns
 */
declare function normalize(originalLength: number, source: number[], empty?: any): any[];
