/**
 * 
 * @param {number[]} high 
 * @param {number[]} low 
 * @param {number} period 
 * @param {number} [size]
 * @returns 
 */
function aroonosc(
    high, low,
    period, size = high.length
) {

    const output = []

    // if (period < 1) throw new Error("Invalid Options")
    // if (size <= period) throw new Error("Out of range")

    const scale = 100.0 / period

    let trail = 0
    let maxi = -1
    let mini = -1
    let max = high[0]
    let min = low[0]

    let j
    for (let index = period; index < size; ++index, ++trail) {

        // Maintain highest
        let bar = high[index]
        if (maxi < trail) {
            maxi = trail
            max = high[maxi]
            j = trail
            while (++j <= index) {
                bar = high[j];
                if (bar >= max) {
                    max = bar
                    maxi = j
                }
            }

        } else if (bar >= max) {
            maxi = index
            max = bar
        }


        // Maintain lowest
        bar = low[index]
        if (mini < trail) {
            mini = trail
            min = low[mini]
            j = trail
            while (++j <= index) {
                bar = low[j]
                if (bar <= min) {
                    min = bar
                    mini = j
                }
            }

        } else if (bar <= min) {
            mini = index
            min = bar
        }

        // output[output.length] = (maxi - mini) * scale
        output.push((maxi - mini) * scale)
    }

    return output
}

module.exports = aroonosc