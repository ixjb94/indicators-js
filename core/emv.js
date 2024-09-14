/**
 * 
 * @param {number[]} high 
 * @param {number[]} low 
 * @param {number[]} volume 
 * @param {number} [size]
 * @returns 
 */
function emv(
    high, low, volume,
    size = high.length
) {

    const output = []

    // if (size <= 1) throw new Error("Out of range")

    let last = (high[0] + low[0]) * 0.5

    for (let i = 1; i < size; ++i) {
        const hl = (high[i] + low[i]) * 0.5
        const br = volume[i] / 10000.0 / (high[i] - low[i])

        output.push((hl - last) / br)
        last = hl
    }

    return output
}

module.exports = emv