/**
 * 
 * @param {number[]} source 
 * @param {number} period 
 * @param {number} [size]
 * @returns 
 */
 function wilders(
    source, period,
    size = source.length
) {

    const output = []

    // if (period < 1) throw new Error("Invalid Options")
    // if (size <= period - 1) throw new Error("Out of range")

    const per = 1.0 / (period)

    let sum = 0

    for (let i = 0; i < period; ++i) {
        sum += source[i]
    }


    let val = sum / period
    output.push(val)

    for (let i = period; i < size; ++i) {
        val = (source[i] - val) * per + val
        output.push(val)
    }

    return output
}

module.exports = wilders