/**
 * 
 * @param {number[]} high 
 * @param {number[]} low 
 * @param {number[]} close 
 * @param {number} [size]
 * @returns 
 */
async function wcprice(
    high, low,
    close, size = high.length
) {

    const output = []

    for (let i = 0; i < size; ++i) {
        output.push((high[i] + low[i] + close[i] + close[i]) * 0.25)
    }

    return output
}

module.exports = wcprice