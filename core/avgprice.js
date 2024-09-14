/**
 * @param {number[]} open 
 * @param {number[]} high 
 * @param {number[]} low 
 * @param {number[]} close 
 * @param {number} [size]
 * @returns 
 */
function avgprice(
    open, high,
    low, close,
    size = open.length
) {

    const output = []

    for (let index = 0; index < size; ++index) {
        output.push((open[index] + high[index] + low[index] + close[index]) * 0.25)
    }

    return output
}

module.exports = avgprice