export = normalize2;
/**
 * More efficient
 * @param {number[]} source example: sma | rsi | cci | etc.
 * @param {number} length main source length, example: close.length
 * @returns
 */
declare function normalize2(source: number[], length: number): Promise<number[]>;
