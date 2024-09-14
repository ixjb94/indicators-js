/**
 * 
 * @param {number[]} high 
 * @param {number[]} low 
 * @param {number[]} volume 
 * @param {number} [size]
 * @returns 
 */
 async function marketfi(
    high, low,
    volume, size = high.length
) {

    const output = []

    // if (size <= 0) throw new Error("Out of range")

    for (let i = 0; i < size; ++i) {
        output.push((high[i] - low[i]) / volume[i])
    }

    return output
}

module.exports = marketfi