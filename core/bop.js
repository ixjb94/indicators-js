/**
 * 
 * @param {number[]} open 
 * @param {number[]} high 
 * @param {number[]} low 
 * @param {number[]} close 
 * @param {number} [size]
 * @returns 
 */
 function bop(
    open, high,
    low, close,
    size = open.length
) {

    const output = []

    for (let index = 0; index < size; ++index) {
        const hl = high[index] - low[index]

        if (hl <= 0.0) {
            output[index] = 0
        } else {
            output[index] = (close[index] - open[index]) / hl
        }
    }

    return output
}

module.exports = bop