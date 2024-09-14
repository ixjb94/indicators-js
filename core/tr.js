/**
 * 
 * @param {number[]} high 
 * @param {number[]} low 
 * @param {number[]} close 
 * @param {number} [size]
 * @returns 
 */
async function tr(
    high, low,
    close, size = high.length
) {

    const output = []
    let truerange

    output[0] = high[0] - low[0]

    for (let i = 1; i < size; ++i) {
        // Start CALC_TRUERANGE
        const l = low[i]
        const h = high[i]
        const c = close[i - 1]

        const ych = Math.abs(h - c)
        const ycl = Math.abs(l - c)

        let v = h - l

        if (ych > v) v = ych
        if (ycl > v) v = ycl
        truerange = v
        // End CALC_TRUERANGE
        output.push(truerange)
    }

    return output
}

module.exports = tr