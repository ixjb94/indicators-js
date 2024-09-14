/**
 * 
 * @param {number[]} source 
 * @param {number} period 
 * @param {number} [size]
 * @returns 
 */
 async function sum(
    source, period,
    size = source.length
) {

    const output = []

    // if (period < 1) throw new Error("Invalid Options")
    // if (size <= period - 1) throw new Error("Out of range")

    let sum = 0

    for (let i = 0; i < period; ++i) {
        sum += source[i]
    }

    output.push(sum)

    for (let i = period; i < size; ++i) {
        sum += source[i]
        sum -= source[i - period]
        output.push(sum)
    }

    return output
}

module.exports = sum