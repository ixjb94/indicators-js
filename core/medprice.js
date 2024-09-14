/**
 * 
 * @param {number[]} high 
 * @param {number[]} low 
 * @param {number} [size]
 * @returns 
 */
 async function medprice(
    high, low,
    size = high.length
) {

    const output = []

    for (let i = 0; i < size; ++i) {
        output.push((high[i] + low[i]) * 0.5)
    }

    return output
}

module.exports = medprice