module.exports = function reverse (n) {
  let s = String(n);
  let result = '';

  if (n < 0){
    s = String(-n);
  }

  for (let i = 0; i < s.length; i++){
    result = `${s[i]}${result}`
  }
  return Number(result);
}
