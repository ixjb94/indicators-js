/**
 * 
 * @param {number[]} source 
 * @param {number} period 
 * @param {number} [size]
 * @returns 
 */
async function lag(
    source, period,
    size = source.length
) {

    const output = []

    // if (period < 0) throw new Error("Invalid Options")
    // if (size <= period) throw new Error("Out of range")

    for (let i = period; i < size; ++i) {
        output.push(source[i - period])
    }

    return output
}

module.exports = lag