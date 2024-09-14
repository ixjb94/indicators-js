/**
 * @param {number[]} a 
 * @param {number[]} b 
 * @param {number} [size]
 * @returns 
 */
function crossover(a, b, size = a.length) {

    const output = []

    for (let i = 0; i < size; ++i) {
        output.push(a[i] > b[i] && a[i - 1] <= b[i - 1])
    }

    return output
}

module.exports = crossover