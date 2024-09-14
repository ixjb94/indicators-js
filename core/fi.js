/**
 * 
 * @param {number[]} close 
 * @param {number[]} volume 
 * @param {number} period 
 * @param {number} [size]
 * @returns 
 */
function fi(
    close, volume,
    period, size = close.length
) {

    const output = []

    // if (period < 1) throw new Error("Invalid Options")
    // if (size <= 1) throw new Error("Out of range")

    const per = 2. / (period + 1.)

    let ema = volume[1] * (close[1] - close[0])

    for (let i = 1; i < size; ++i) {
        ema = (volume[i] * (close[i] - close[i - 1]) - ema) * per + ema
        output.push(ema)
    }

    return output
}

module.exports = fi