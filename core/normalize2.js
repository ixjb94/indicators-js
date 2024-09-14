/**
 * More efficient
 * @param {number[]} source example: sma | rsi | cci | etc.
 * @param {number} length main source length, example: close.length
 * @returns 
 */
function normalize2(source, length) {
    const temp = []
    const diff = length - source.length
    temp[diff - 1] = NaN
    return [...temp, ...source]
}

module.exports = normalize2