/**
 * 
 * @param {number[]} source 
 * @param {number} short_period 
 * @param {number} long_period 
 * @param {number} alpha 
 * @param {number} [size]
 * @returns 
 */
 function vidya(
    source, short_period,
    long_period, alpha,
    size = source.length
) {

    const output = []

    const short_div = 1.0 / short_period
    const long_div = 1.0 / long_period

    // if (short_period < 1) throw new Error("Invalid Options")
    // if (long_period < short_period) throw new Error("Invalid Options")
    // if (long_period < 2) throw new Error("Invalid Options")
    // if (alpha < 0.0 || alpha > 1.0) throw new Error("Invalid Options")
    // if (size <= long_period - 2) throw new Error("Out of range")

    let short_sum = 0
    let short_sum2 = 0

    let long_sum = 0
    let long_sum2 = 0

    for (let i = 0; i < long_period; ++i) {
        long_sum += source[i]
        long_sum2 += source[i] * source[i]

        if (i >= long_period - short_period) {
            short_sum += source[i]
            short_sum2 += source[i] * source[i]
        }
    }

    let val = source[long_period - 2]
    output.push(val)

    if (long_period - 1 < size) {
        const short_stddev = Math.sqrt(short_sum2 * short_div - (short_sum * short_div) * (short_sum * short_div))
        const long_stddev = Math.sqrt(long_sum2 * long_div - (long_sum * long_div) * (long_sum * long_div))
        let k = short_stddev / long_stddev
        if (k != k) k = 0; /* In some conditions it works out that we take the sqrt(-0.0), which gives NaN.
                                  That implies that k should be zero. */
        k *= alpha
        val = (source[long_period - 1] - val) * k + val
        output.push(val)
    }

    for (let i = long_period; i < size; ++i) {
        long_sum += source[i]
        long_sum2 += source[i] * source[i]

        short_sum += source[i]
        short_sum2 += source[i] * source[i]

        long_sum -= source[i - long_period]
        long_sum2 -= source[i - long_period] * source[i - long_period]

        short_sum -= source[i - short_period]
        short_sum2 -= source[i - short_period] * source[i - short_period]

        const short_stddev = Math.sqrt(short_sum2 * short_div - (short_sum * short_div) * (short_sum * short_div))
        const long_stddev = Math.sqrt(long_sum2 * long_div - (long_sum * long_div) * (long_sum * long_div))
        let k = short_stddev / long_stddev
        if (k != k) k = 0
        k *= alpha
        val = (source[i] - val) * k + val

        output.push(val)
    }

    return output
}

module.exports = vidya