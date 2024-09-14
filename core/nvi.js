/**
 * 
 * @param {number[]} close 
 * @param {number[]} volume 
 * @param {number} [size]
 * @returns 
 */
 async function nvi(
    close, volume,
    size = close.length
) {

    const output = []

    // if (size <= 0) throw new Error("Out of range")

    let nvi = 1000

    output.push(nvi)

    for (let i = 1; i < size; ++i) {

        if (volume[i] < volume[i - 1]) {
            nvi += ((close[i] - close[i - 1]) / close[i - 1]) * nvi
        }
        output.push(nvi)
    }

    return output
}

module.exports = nvi