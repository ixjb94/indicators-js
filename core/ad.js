/**
 * 
 * @param {number[]} high 
 * @param {number[]} low 
 * @param {number[]} close 
 * @param {number[]} volume 
 * @param {number} [size]
 * @returns 
 */
async function ad(
    high, low,
    close, volume,
    size = close.length
) {

    const output = []

    let sum = 0

    for (let index = 0; index < size; ++index) {
        const hl = (high[index] - low[index])
        if (hl != 0.0) {
            sum += (close[index] - low[index] - high[index] + close[index]) / hl * volume[index]
        }
        output[index] = sum
    }

    return output
}

module.exports = ad