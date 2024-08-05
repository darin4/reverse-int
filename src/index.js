module.exports = function reverse(n) {
    n = Math.abs(n);
    let reversed = n.toString().split('').reverse().join('');
     return (reversed);
   }
