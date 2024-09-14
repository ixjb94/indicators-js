
/**
 * 
 * @param {number[]} source 
 * @param {number} short_period 
 * @param {number} long_period 
 * @param {number} [size]
 * @returns 
 */
 async function apo(
    source, short_period, long_period,
    size = source.length
) {

    const output = []

    // if (short_period < 1) throw new Error("Invalid Options")
    // if (long_period < 2) throw new Error("Invalid Options")
    // if (long_period < short_period) throw new Error("Invalid Options")
    // if (size <= 1) throw new Error("Out of range")

    const short_per = 2 / (short_period + 1)
    const long_per = 2 / (long_period + 1)

    let short_ema = source[0]
    let long_ema = source[0]

    for (let index = 1; index < size; ++index) {

        short_ema = (source[index] - short_ema) * short_per + short_ema
        long_ema = (source[index] - long_ema) * long_per + long_ema

        const out = short_ema - long_ema

        // output[output.length] = out
        output.push(out)
    }

    return output
}

module.exports = apo