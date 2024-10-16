/**
 * @param {number[]} data 
 * @param {number} period1 
 * @param {number} period2 
 * @returns 
 */
function copp(data, period1, period2) {

    const roc1 = new Array(data.length);
    const roc2 = new Array(data.length);
    const coppock = new Array(data.length);

    for (let i = 0; i < data.length; i++) {
        if (i < period1 - 1) {
            roc1[i] = null;
        } else {
            roc1[i] = (data[i] - data[i - period1]) / data[i - period1] * 100;
        }
        if (i < period2 - 1) {
            roc2[i] = null;
        } else {
            roc2[i] = (data[i] - data[i - period2]) / data[i - period2] * 100;
        }
        coppock[i] = (roc1[i] + roc2[i]) * 10;
    }

    return coppock;
}

module.exports = copp