/**
 * 
 * @param {number[]} source 
 * @param {number} period 
 * @param {number} [size]
 * @returns 
 */
async function wma(
    source, period,
    size = source.length
) {

    const output = []

    // if (period < 1) throw new Error("Invalid Options")
    // if (size <= period - 1) throw new Error("Out of range")

    const weights = period * (period + 1) / 2

    let sum = 0
    let weight_sum = 0

    for (let i = 0; i < period - 1; ++i) {
        weight_sum += source[i] * (i + 1)
        sum += source[i]
    }

    for (let i = period - 1; i < size; ++i) {
        weight_sum += source[i] * period
        sum += source[i]

        output.push(weight_sum / weights)

        weight_sum -= sum
        sum -= source[i - period + 1]
    }

    return output
}

module.exports = wma