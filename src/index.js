/**
 * Big integer add operation.
 * @param a {String}
 * @param b {String}
 * @returns {String}
 */
const add = (a, b) => {
    let i = a.length -1,
        j = b.length - 1,
        carry = 0,
        ret = '';

    while (i >= 0 || j >= 0) {
        let x = 0, y = 0, sum;

        if (i >= 0) {
            x = a[i] - '0';
            i --;
        }

        if (j >= 0) {
            y = b[j] - '0';
            j --;
        }

        sum = x + y + carry;
        if (sum >= 10) {
            carry = 1;
            sum -= 10;
        }

        ret = sum + ret;
    }

    if (carry) {
        ret = carry + ret;
    }


    return ret;
};