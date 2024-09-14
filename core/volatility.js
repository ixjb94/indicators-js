/**
 * 
 * @param {number[]} source 
 * @param {number} period 
 * @param {number} [size]
 * @returns 
 */
async function volatility(
    source, period,
    size = source.length
) {

    const output = []

    const scale = 1.0 / period
    const annual = Math.sqrt(252) /* Multiplier, number of trading days in year. */

    // if (period < 1) throw new Error("Invalid Options")
    // if (size <= period) throw new Error("Out of range")

    let sum = 0
    let sum2 = 0

    for (let i = 1; i <= period; ++i) {
        // Start Change()
        const c = (source[i] / source[i - 1] - 1.0)
        // End Change()
        sum += c
        sum2 += c * c
    }

    output.push(Math.sqrt(sum2 * scale - (sum * scale) * (sum * scale)) * annual)

    for (let i = period + 1; i < size; ++i) {
        // Start Change()
        const c = (source[i] / source[i - 1] - 1.0)
        // End Change()
        sum += c
        sum2 += c * c

        // Start Change()
        const cp = (source[i - period] / source[i - period - 1] - 1.0)
        // Start Change()
        sum -= cp
        sum2 -= cp * cp

        output.push(Math.sqrt(sum2 * scale - (sum * scale) * (sum * scale)) * annual)
    }

    return output
}

module.exports = volatility