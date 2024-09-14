/**
 * 
 * @param {number[]} high 
 * @param {number[]} low 
 * @param {number[]} close 
 * @param {number} [size]
 * @returns 
 */
function typprice(
    high, low,
    close, size = high.length
) {

    const output = []

    for (let i = 0; i < size; ++i) {
        output.push((high[i] + low[i] + close[i]) * (1.0 / 3.0))
    }

    return output
}

module.exports = typprice