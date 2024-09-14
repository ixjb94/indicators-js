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
 * @param {number} period 
 * @param {number} [size]
 * @returns 
 */
function cvi(
	high, low,
	period, size = high.length
) {

	const output = []

	const per = 2 / (period + 1)

	const lag = new ti_buffer(period)

	let val = high[0] - low[0]

	let i
	for (i = 1; i < period * 2 - 1; ++i) {
		val = ((high[i] - low[i]) - val) * per + val

		lag.qpush(val)
	}

	for (i = period * 2 - 1; i < size; ++i) {
		val = ((high[i] - low[i]) - val) * per + val

		const old = lag.vals[lag.index]

		output.push(100.0 * (val - old) / old)

		lag.qpush(val)
	}

	return output
}

module.exports = cvi