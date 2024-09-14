/**
 * 
 * @param {number[]} source 
 * @param {number} period 
 * @param {number} lookback_period 
 * @param {number} [size]
 * @returns 
 */
 async function rmi(
    source, period,
    lookback_period, size = source.length
) {

    const output = []

    // if (period < 1) throw new Error("Invalid Options")
    // if (lookback_period < 1) throw new Error("Invalid Options")
    // if (size <= lookback_period) throw new Error("Out of range")

    let gains_ema
    let losses_ema

    let i = lookback_period
    gains_ema = ((0) > (source[i] - source[i - lookback_period]) ? (0) : (source[i] - source[i - lookback_period]))
    losses_ema = ((0) > (source[i - lookback_period] - source[i]) ? (0) : (source[i - lookback_period] - source[i]))
    ++i

    output.push(gains_ema / (gains_ema + losses_ema) * 100)

    for (; i < size; ++i) {
        gains_ema = ((0) > (source[i] - source[i - lookback_period]) ? (0) : (source[i] - source[i - lookback_period]) - gains_ema) * 2. / (1 + period) + gains_ema
        losses_ema = ((0) > (source[i - lookback_period] - source[i]) ? (0) : (source[i - lookback_period] - source[i]) - losses_ema) * 2. / (1 + period) + losses_ema
        output.push(gains_ema / (gains_ema + losses_ema) * 100)
    }

    return output
}

module.exports = rmi