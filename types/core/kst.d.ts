export = kst;
/**
 *
 * @param {number[]} source
 * @param {number} roc1
 * @param {number} roc2
 * @param {number} roc3
 * @param {number} roc4
 * @param {number} ma1
 * @param {number} ma2
 * @param {number} ma3
 * @param {number} ma4
 * @param {number} [size]
 * @returns
 */
declare function kst(source: number[], roc1: number, roc2: number, roc3: number, roc4: number, ma1: number, ma2: number, ma3: number, ma4: number, size?: number): Promise<number[][]>;
