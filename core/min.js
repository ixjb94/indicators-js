/**
 * 
 * @param {number[]} source 
 * @param {number} period 
 * @param {number} [size]
 * @returns 
 */
 async function min(
    source, period,
    size = source.length
) {

    const output = []

    // if (period < 1) throw new Error("Invalid Options")
    // if (size <= period - 1) throw new Error("Out of range")

    let trail = 0
    let mini = -1
    let min = source[0]

    let j
    for (let i = period - 1; i < size; ++i, ++trail) {
        let bar = source[i]

        if (mini < trail) {
            mini = trail
            min = source[mini]
            j = trail

            while (++j <= i) {
                bar = source[j]

                if (bar <= min) {
                    min = bar
                    mini = j
                }
            }

        } else if (bar <= min) {
            mini = i
            min = bar
        }

        output.push(min)
    }

    return output
}

module.exports = min