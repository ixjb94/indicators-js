/**
 * 
 * @param {number[]} input 
 * @param {number} period 
 * @param {number} [size]
 * @returns 
 */
async function zlema(input, period, size = input.length) {

    const lag = Math.floor((period - 1) / 2)

    const output = []

    const per = 2 / (period + 1)

    let val = input[lag - 1]
    output.push(val)

    let i;
    for (i = lag; i < size; ++i) {
        const c = input[i];
        const l = input[i - lag];

        val = ((c + (c - l)) - val) * per + val;
        output.push(val)
    }

    return output
}

module.exports = zlema