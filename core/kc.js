/**
 * 
 * @param {number[]} high 
 * @param {number[]} low 
 * @param {number[]} close 
 * @param {number} period 
 * @param {number} multiple 
 * @param {number} [size]
 * @returns [kc_lower, kc_middle, kc_upper]
 */
function kc(
    high, low,
    close, period,
    multiple, size = high.length
) {

    const kc_lower = []
    const kc_middle = []
    const kc_upper = []

    // if (period < 1) throw new Error("Invalid Options")

    const per = 2 / (period + 1)

    let price_ema = close[0]
    let tr_ema = high[0] - low[0]

    kc_lower.push(price_ema - multiple * tr_ema)
    kc_middle.push(price_ema)
    kc_upper.push(price_ema + multiple * tr_ema)

    let truerange = 0
    for (let i = 1; i < size; ++i) {
        price_ema = (close[i] - price_ema) * per + price_ema

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

        tr_ema = (truerange - tr_ema) * per + tr_ema

        kc_lower.push(price_ema - multiple * tr_ema)
        kc_middle.push(price_ema)
        kc_upper.push(price_ema + multiple * tr_ema)
    }

    return [kc_lower, kc_middle, kc_upper]
}

module.exports = kc