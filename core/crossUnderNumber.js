/**
 * 
 * @param {number[]} seriesA 
 * @param {number} number 
 * @returns 
 */
async function crossUnderNumber(seriesA, number) {

    const output = []

    for (let index = 0; index < seriesA.length; index++) {
        const current = seriesA[index]
        const pre = seriesA[index - 1]

        if (
            current < number &&
            pre >= number
        ) {
            output.push(true)
        } else {
            output.push(false)
        }
    }

    return output
}

module.exports = crossUnderNumber