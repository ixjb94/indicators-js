/**
 * 
 * @param {number[]} highs 
 * @param {number[]} lows 
 * @param {number} period 
 * @returns [upper, middle, lower]
 */
 async function dc(highs, lows, period) {

    const upper = []
    const lower = []
    const middle = []

    for (let i = period - 1; i < highs.length; i++) {
        upper.push(Math.max(...highs.slice(i - period + 1, i + 1)))
        lower.push(Math.min(...lows.slice(i - period + 1, i + 1)))
        middle.push((upper[upper.length - 1] + lower[lower.length - 1]) / 2)
    }

    return [upper, middle, lower]
}

module.exports = dc