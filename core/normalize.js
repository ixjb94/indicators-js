/**
 * 
 * @param {number} originalLength - example 100
 * @param {number[]} source - example ema | sma | rsi | etc.
 * @param {*} empty - example NaN | Null | 0 | false | etc.
 * @returns 
 */
function normalize(originalLength, source, empty = NaN) {
    const diff = originalLength - source.length

    const emptyList = []
    for (let index = 0; index < diff; ++index) {
        emptyList.push(empty)
    }

    const result = [...emptyList, ...source]

    return result
}

module.exports = normalize