
/**
 * 
 * @param {number[]} close 
 * @param {number[]} volume 
 * @param {number} [size]
 * @returns 
 */
  function pvi(
    close, volume,
    size = close.length
) {

    const output = []

    // if (size <= 0) throw new Error("Out of range")

    let pvi = 1000
    output.push(pvi)

    for (let i = 1; i < size; ++i) {

        if (volume[i] > volume[i - 1]) {
            pvi += ((close[i] - close[i - 1]) / close[i - 1]) * pvi;
        }
        output.push(pvi)
    }

    return output
}

module.exports = pvi