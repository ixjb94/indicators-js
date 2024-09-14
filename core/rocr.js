/**
 * 
 * @param {number[]} source 
 * @param {number} period 
 * @param {number} [size]
 * @returns 
 */
  function rocr(
    source, period,
    size = source.length
) {

    const output = []

    // if (period < 1) throw new Error("Invalid Options")
    // if (size <= period) throw new Error("Out of range")

    for (let i = period; i < size; ++i) {
        output.push(source[i] / source[i - period])
    }

    return output
}

module.exports = rocr