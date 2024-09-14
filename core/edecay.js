/**
 * 
 * @param {number[]} source 
 * @param {number} period 
 * @param {number} [size]
 * @returns 
 */
 async function edecay(
    source, period,
    size = source.length
) {

    const output = []

    const scale = 1.0 - 1.0 / period

    output.push(source[0])

    for (let i = 1; i < size; ++i) {
        const d = output[output.length - 1] * scale
        output.push(source[i] > d ? source[i] : d)
    }

    return output
}

module.exports = edecay