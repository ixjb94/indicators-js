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
 * @param {number[]} input 
 * @param {number} period 
 * @param {number} [size]
 * @returns 
 */
 function hma(input, period, size = input.length) {

    const output = []

    const period2 = Math.floor(period / 2)
    const periodsqrt = Math.floor(Math.sqrt(period))

    const weights = period * (period + 1) / 2;
    const weights2 = period2 * (period2 + 1) / 2;
    const weightssqrt = periodsqrt * (periodsqrt + 1) / 2;

    let sum = 0; /* Flat sum of previous numbers. */
    let weight_sum = 0; /* Weighted sum of previous numbers. */

    let sum2 = 0;
    let weight_sum2 = 0;

    let sumsqrt = 0;
    let weight_sumsqrt = 0;

    /* Setup up the WMA(period) and WMA(period/2) on the input. */
    let i;
    for (i = 0; i < period - 1; ++i) {
        weight_sum += input[i] * (i + 1);
        sum += input[i];

        if (i >= period - period2) {
            weight_sum2 += input[i] * (i + 1 - (period - period2));
            sum2 += input[i];
        }
    }

    const buff = new ti_buffer(periodsqrt)

    for (i = period - 1; i < size; ++i) {
        weight_sum += input[i] * period;
        sum += input[i];

        weight_sum2 += input[i] * period2;
        sum2 += input[i];

        const wma = weight_sum / weights;
        const wma2 = weight_sum2 / weights2;
        const diff = 2 * wma2 - wma;

        weight_sumsqrt += diff * periodsqrt;
        sumsqrt += diff;

        buff.qpush(diff)

        if (i >= (period - 1) + (periodsqrt - 1)) {
            output.push(weight_sumsqrt / weightssqrt)

            weight_sumsqrt -= sumsqrt;
            // sumsqrt -= ti_buffer_get(buff, 1)
            sumsqrt -= buff.get(1)
        } else {
            weight_sumsqrt -= sumsqrt
        }


        weight_sum -= sum;
        sum -= input[i - period + 1];

        weight_sum2 -= sum2;
        sum2 -= input[i - period2 + 1];
    }

    return output
}

module.exports = hma