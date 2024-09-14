/**
 * 
 * @param {number[]} source 
 * @param {number} period 
 * @param {number} [size]
 * @returns 
 */
function msw(
    source, period,
    size = source.length
) {

    const sine = []
    const lead = []

    // if (period < 1) throw new Error("Invalid Options")
    // if (size <= period) throw new Error("Out of range")

    const pi = 3.1415926
    const tpi = 2 * pi

    let weight = 0
    let phase
    let rp
    let ip

    let j
    for (let i = period; i < size; ++i) {
        rp = 0
        ip = 0

        for (j = 0; j < period; ++j) {
            weight = source[i - j]
            rp = rp + Math.cos(tpi * j / period) * weight
            ip = ip + Math.sin(tpi * j / period) * weight
        }

        if (Math.abs(rp) > .001) {
            phase = Math.atan(ip / rp)
        } else {
            phase = tpi / 2.0 * (ip < 0 ? -1.0 : 1.0)
        }

        if (rp < 0.0) phase += pi
        phase += pi / 2.0

        if (phase < 0.0) phase += tpi
        if (phase > tpi) phase -= tpi

        sine.push(Math.sin(phase))
        lead.push(Math.sin(phase + pi / 4.0))
    }

    return [sine, lead]
}

module.exports = msw