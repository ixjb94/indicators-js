/**
 * 
 * @param {number[]} open 
 * @param {number[]} close 
 * @param {number} period 
 * @param {number} [size]
 * @returns 
 */
  function qstick(
    open,
    close,
    period,
    size = close.length
) {

    const output = []
    const scale = 1.0 / period

    let sum = 0

    let i;
    for (i = 0; i < period; ++i) {
        sum += close[i] - open[i]
    }

    output.push(sum * scale)

    for (i = period; i < size; ++i) {
        sum += close[i] - open[i]
        sum -= close[i - period] - open[i - period]
        output.push(sum * scale)
    }

    return output
}

module.exports = qstick