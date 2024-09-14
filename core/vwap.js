/**
 * 
 * @param {number[]} high 
 * @param {number[]} low 
 * @param {number[]} close 
 * @param {number[]} volume 
 * @param {number} period 
 * @param {number} [size]
 * @returns 
 */
 function vwap(
    high, low,
    close, volume,
    period, size = high.length
) {

    const output = []

    // if (period < 1) throw new Error("Invalid Options")

    let progress = -period + 1

    let num = 0
    let den = 0

    let i = 0
    for (; i < size && progress < 1; ++i, ++progress) {
        num += (high[i] + low[i] + close[i]) / 3 * volume[i]
        den += volume[i]
    }

    if (i > 0 && progress == 1) {
        output.push(num / den)
    }

    for (; i < size; ++i, ++progress) {
        num += (high[i] + low[i] + close[i]) / 3 * volume[i]
            - (high[i - period] + low[i - period] + close[i - period]) / 3 * volume[i - period]
        den += volume[i] - volume[i - period]

        output.push(num / den)
    }

    return output
}

module.exports = vwap