/**
 * 
 * @param {number[]} source 
 * @param {number} period 
 * @param {number} beta 
 * @param {number} [size]
 * @returns 
 */
  function rmta(
    source, period,
    beta, size = source.length
) {

    const output = []

    // if (period < 1) throw new Error("Invalid Options")
    // if (size <= period - 1) throw new Error("Out of range")

    const alpha = 1 - beta
    let b = (1 - alpha) * source[0] + source[0]
    let rmta = (1 - alpha) * source[0] + alpha * (source[0] + b)

    for (let i = 1; i < period - 1; ++i) {
        const next_b = (1 - alpha) * b + source[i]
        rmta = (1 - alpha) * rmta + alpha * (source[i] + next_b - b)
        b = next_b
    }

    for (let i = period - 1; i < size; ++i) {
        const next_b = (1. - alpha) * b + source[i]
        rmta = (1 - alpha) * rmta + alpha * (source[i] + next_b - b)
        b = next_b
        output.push(rmta)
    }

    return output
}

module.exports = rmta