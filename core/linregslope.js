/**
 * 
 * @param {number[]} source 
 * @param {number} period 
 * @param {number} [size]
 * @returns 
 */
 async function linregslope(
    source, period,
    size = source.length
) {

    const output = []

    // if (period < 1) throw new Error("Invalid Options")
    // if (size <= period - 1) throw new Error("Out of range")

    // Start LINEAR_REGRESSION
    // LINEAR_REGRESSION(size, input, period, output, period)
    let x = 0
    let x2 = 0

    let y = 0
    let xy = 0
    for (let i = 0; i < (period) - 1; ++i) {
        x += i + 1
        x2 += (i + 1) * (i + 1)
        xy += (source)[i] * (i + 1)
        y += (source)[i]
    }

    x += (period)
    x2 += (period) * (period)

    const bd = 1.0 / ((period) * x2 - x * x)

    for (let i = (period) - 1; i < (size); ++i) {
        xy += (source)[i] * (period)
        y += (source)[i]

        const b = ((period) * xy - x * y) * bd
        // Start FINAL
        // ## forecast = 1
        output.push(b)
        // Start FINAL

        xy -= y
        y -= (source)[i - (period) + 1]
    }
    // End LINEAR_REGRESSION

    return output
}

module.exports = linregslope