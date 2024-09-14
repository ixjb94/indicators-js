class ti_buffer {

	size;
	pushes;
	index;
	sum;
	vals;

	constructor(size) {
		this.size = size;
		this.pushes = 0;
		this.index = 0;
		this.sum = 0;
		this.vals = []
	}

	static new(size) {
		return new ti_buffer(size);
	}

	push(val) {
		if (this.pushes >= this.size) {
			this.sum -= this.vals[this.index];
		}

		this.sum += val;
		this.vals[this.index] = val;
		this.pushes += 1;
		this.index = (this.index + 1) % this.size;
	}

	qpush(val) {
		this.vals[this.index] = val;
		this.index = (this.index + 1) % this.size;
	}

	get(val) {
		return this.vals[(this.index + this.size - 1 + val) % this.size];
	}
}

/**
 * 
 * @param {number[]} high 
 * @param {number[]} low 
 * @param {number[]} close 
 * @param {number} period 
 * @param {number} [size]
 * @returns 
 */
function cci(
    high, low,
    close, period,
    size = high.length
) {

    const scale = 1.0 / period

    // if (period < 1) throw new Error("Invalid Options")
    // if (size <= (period-1) * 2) throw new Error("Out of range")

    const output = []

    const sum = new ti_buffer(period)

    let i, j
    for (i = 0; i < size; ++i) {

        // Start TYPEPRICE
        // ((high[(INDEX)] + low[(INDEX)] + close[(INDEX)]) * (1.0/3.0))
        const today = ((high[(i)] + low[(i)] + close[(i)]) * (1.0 / 3.0))
        // End TYPEPRICE

        sum.push(today)
        const avg = sum.sum * scale

        if (i >= period * 2 - 2) {
            let acc = 0
            for (j = 0; j < period; ++j) {
                acc += Math.abs(avg - sum.vals[j])
            }

            let cci = acc * scale
            cci *= .015
            cci = (today - avg) / cci
            output.push(cci)
        }
    }

    return output
}

module.exports = cci