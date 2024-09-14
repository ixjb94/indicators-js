/**
 * 
 * @param {number[]} source 
 * @param {number} period 
 * @param {number} offset 
 * @param {number} sigma 
 * @param {number} [size]
 * @returns 
 */
 async function alma(
    source, period,
    offset, sigma,
    size = source.length
) {

    const output = []

    // validate options
    // if (period < 1) throw new Error("Invalid Options")
    // if (sigma <= 0) throw new Error("Invalid Options")
    // if ((offset < 0) || (offset > 1)) throw new Error("Invalid Options")
    // if (size <= period - 1) throw new Error("Out of range")

    const weights = []

    const m = Math.floor(offset * (period - 1))
    const s = period / sigma

    let norm = 0

    for (let i = 0; i < period; i++) {
        weights[i] = Math.exp(-1 * Math.pow(i - m, 2) / (2 * Math.pow(s, 2)))
        norm += weights[i]
    }

    for (let i = 0; i < period; i++) {
        weights[i] /= norm
    }

    for (let i = period - 1; i < size; i++) {
        let sum = 0
        for (let j = 0; j < period; j++) {
            sum += source[i - period + j + 1] * weights[j]
        }
        output.push(sum)
    }

    return output
}

module.exports = alma