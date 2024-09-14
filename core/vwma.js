/**
 * 
 * @param {number[]} source 
 * @param {number[]} volume 
 * @param {number} period 
 * @param {number} [size]
 * @returns 
 */
async function vwma(
    source, volume,
    period, size = source.length
) {

    const output = []

    // if (period < 1) throw new Error("Invalid Options")
    // if (size <= period - 1) throw new Error("Out of range")

    let sum = 0
    let vsum = 0

    for (let i = 0; i < period; ++i) {
        sum += source[i] * volume[i]
        vsum += volume[i]
    }

    output.push(sum / vsum)

    for (let i = period; i < size; ++i) {
        sum += source[i] * volume[i]
        sum -= source[i - period] * volume[i - period]
        vsum += volume[i]
        vsum -= volume[i - period]

        output.push(sum / vsum)
    }

    return output
}

module.exports = vwma