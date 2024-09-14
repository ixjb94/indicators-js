/**
 * @param {number[]} high 
 * @param {number[]} low 
 * @param {number[]} close 
 * @param {number[]} volume 
 * @param {number} short_period 
 * @param {number} long_period 
 * @param {number} [size]
 * @returns 
 */
function adosc(
    high, low,
    close, volume,
    short_period, long_period,
    size = close.length
) {

    const start = long_period - 1

    // if (short_period < 1) throw new Error("Invalid Options")
    // if (long_period < short_period) throw new Error("Invalid Options")
    // if (size <= long_period - 1) throw new Error("Out of range")

    const short_per = 2 / (short_period + 1)
    const long_per = 2 / (long_period + 1)

    const output = []

    let sum = 0
    let short_ema = 0
    let long_ema = 0

    for (let index = 0; index < size; ++index) {

        const hl = (high[index] - low[index])
        if (hl != 0.0) {
            sum += (close[index] - low[index] - high[index] + close[index]) / hl * volume[index]
        }

        if (index == 0) {
            short_ema = sum
            long_ema = sum
        } else {
            short_ema = (sum - short_ema) * short_per + short_ema
            long_ema = (sum - long_ema) * long_per + long_ema
        }

        if (index >= start) {
            // output[output.length] = short_ema - long_ema
            output.push(short_ema - long_ema)
        }
    }

    return output
}

module.exports = adosc