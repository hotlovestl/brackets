module.exports = function check(str, bracketsConfig) {
  let arr = bracketsConfig.map(element => element.join(''));
  for (let i = 0; i < arr.length; i++){
    if(str.includes(arr[i])){
      str = str.split(arr[i]).join('');
      i = -1;
    }
  }
  if (str == 0){
    return true;
  }
  else{
    return false;
  }
}
