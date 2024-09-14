/**
 * 
 * @param {number[]} high 
 * @param {number[]} low 
 * @param {number[]} close 
 * @param {number} period 
 * @param {number} [size]
 * @returns 
 */
function natr(
    high, low,
    close, period,
    size = high.length
) {

    const output = []

    // if (period < 1) throw new Error("Invalid Options")
    // if (size <= period - 1) throw new Error("Out of range")

    const per = 1.0 / (period)

    let sum = 0
    let truerange

    sum += high[0] - low[0]

    for (let i = 1; i < period; ++i) {
        // Start CALC_TRUERANGE()
        const l = low[i]
        const h = high[i]
        const c = close[i - 1]

        const ych = Math.abs(h - c)
        const ycl = Math.abs(l - c)

        let v = h - l

        if (ych > v) v = ych
        if (ycl > v) v = ycl
        truerange = v
        // End CALC_TRUERANGE()

        sum += truerange
    }


    let val = sum / period
    output.push(100 * (val) / close[period - 1])

    for (let i = period; i < size; ++i) {
        // Start CALC_TRUERANGE()
        const l = low[i]
        const h = high[i]
        const c = close[i - 1]

        const ych = Math.abs(h - c)
        const ycl = Math.abs(l - c)

        let v = h - l

        if (ych > v) v = ych
        if (ycl > v) v = ycl
        truerange = v
        // End CALC_TRUERANGE()
        val = (truerange - val) * per + val
        output.push(100 * (val) / close[i])
    }

    return output
}

module.exports = natr