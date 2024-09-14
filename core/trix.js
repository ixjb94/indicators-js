/**
 * 
 * @param {number[]} source 
 * @param {number} period 
 * @param {number} [size]
 * @returns 
 */
function trix(
    source, period,
    size = source.length
) {

    const output = []

    // if (period < 1) throw new Error("Invalid Options")
    // if (size <= ((period-1)*3)+1) throw new Error("Out of range")

    const start = (period * 3) - 2
    const per = 2 / (period + 1)

    let ema1 = source[0]
    let ema2 = 0
    let ema3 = 0

    for (let i = 1; i < start; ++i) {
        ema1 = (source[i] - ema1) * per + ema1

        if (i == period - 1) {
            ema2 = ema1
        } else if (i > period - 1) {
            ema2 = (ema1 - ema2) * per + ema2

            if (i == period * 2 - 2) {
                ema3 = ema2
            } else if (i > period * 2 - 2) {
                ema3 = (ema2 - ema3) * per + ema3
            }
        }
    }

    for (let i = start; i < size; ++i) {
        ema1 = (source[i] - ema1) * per + ema1
        ema2 = (ema1 - ema2) * per + ema2
        const last = ema3
        ema3 = (ema2 - ema3) * per + ema3
        output.push((ema3 - last) / ema3 * 100.0)
    }

    return output
}

module.exports = trix