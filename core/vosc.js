/**
 * 
 * @param {number[]} source 
 * @param {number} short_period 
 * @param {number} long_period 
 * @param {number} [size]
 * @returns 
 */
async function vosc(
    source, short_period,
    long_period, size = source.length
) {

    const output = []

    const short_div = 1.0 / short_period
    const long_div = 1.0 / long_period

    // if (short_period < 1) throw new Error("Invalid Options")
    // if (long_period < short_period) throw new Error("Invalid Options")
    // if (size <= long_period - 1) throw new Error("Out of range")

    let short_sum = 0
    let long_sum = 0

    for (let i = 0; i < long_period; ++i) {
        if (i >= (long_period - short_period)) {
            short_sum += source[i]
        }
        long_sum += source[i]
    }

    const savg = short_sum * short_div
    const lavg = long_sum * long_div
    output.push(100.0 * (savg - lavg) / lavg)

    for (let i = long_period; i < size; ++i) {
        short_sum += source[i]
        short_sum -= source[i - short_period]

        long_sum += source[i]
        long_sum -= source[i - long_period]

        const savg = short_sum * short_div
        const lavg = long_sum * long_div
        output.push(100.0 * (savg - lavg) / lavg)
    }

    return output
}

module.exports = vosc