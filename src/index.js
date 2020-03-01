module.exports = function reverse (n) {
    let num = Math.abs(n);
    let number = num.toString().split('').reverse('').join('');
    return Number(number);
}
