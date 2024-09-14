/**
 * 
 * @param {number[]} close 
 * @param {number[]} volume 
 * @param {number} [size]
 * @returns 
 */
 async function obv(
    close, volume,
    size = close.length
) {

    const output = []
    let sum = 0
    output.push(sum)

    let prev = close[0]

    for (let i = 1; i < size; ++i) {
        if (close[i] > prev) {
            sum += volume[i]
        } else if (close[i] < prev) {
            sum -= volume[i]
        } else {
            // No change.
        }

        prev = close[i]
        output.push(sum)
    }

    return output
}

module.exports = obv