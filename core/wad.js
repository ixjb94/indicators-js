/**
 * 
 * @param {number[]} high 
 * @param {number[]} low 
 * @param {number[]} close 
 * @param {number} [size]
 * @returns 
 */
 function wad(
    high, low,
    close, size = high.length
) {

    // if (size <= 1) throw new Error("Out of range")

    const output = []
    let sum = 0
    let yc = close[0]

    for (let i = 1; i < size; ++i) {
        const c = close[i]

        if (c > yc) {
            // Start MIN
            // MIN(a,b) ((a)<(b)?(a):(b))
            sum += c - ((yc) < (low[i]) ? (yc) : (low[i]))
            // End MIN()
        } else if (c < yc) {
            // Start MAX
            // MAX(a,b) ((a)>(b)?(a):(b))
            sum += c - ((yc) > (high[i]) ? (yc) : (high[i]))
            // End MAX
        } else {
            /* No change */
        }

        output.push(sum)

        yc = close[i]
    }

    return output
}

module.exports = wad