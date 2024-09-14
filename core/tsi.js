/**
 * 
 * @param {number[]} source 
 * @param {number} y_period 
 * @param {number} z_period 
 * @param {number} [size]
 * @returns 
 */
async function tsi(
    source, y_period,
    z_period, size = source.length
) {

    const output = []

    // if (y_period < 1 || z_period < 1) {
    //     throw new Error("Invalid Options")
    // }

    let progress = -1

    let price = 0
    let y_ema_num = 0
    let z_ema_num = 0
    let y_ema_den = 0
    let z_ema_den = 0

    let i = 0
    for (; i < size && progress == -1; ++i, ++progress) {
        price = source[i]
    }

    for (; i < size && progress == 0; ++i, ++progress) {
        z_ema_num = y_ema_num = source[i] - price
        z_ema_den = y_ema_den = Math.abs(source[i] - price)

        output.push(100 * (z_ema_den ? z_ema_num / z_ema_den : 0))

        price = source[i]
    }

    for (; i < size; ++i, ++progress) {
        y_ema_num = ((source[i] - price) - y_ema_num) * 2 / (1 + y_period) + y_ema_num
        y_ema_den = ((Math.abs(source[i] - price)) - y_ema_den) * 2 / (1 + y_period) + y_ema_den

        z_ema_num = (y_ema_num - z_ema_num) * 2 / (1 + z_period) + z_ema_num
        z_ema_den = (y_ema_den - z_ema_den) * 2 / (1 + z_period) + z_ema_den


        output.push(100 * (z_ema_den ? z_ema_num / z_ema_den : 0))

        price = source[i]
    }

    return output
}

module.exports = tsi