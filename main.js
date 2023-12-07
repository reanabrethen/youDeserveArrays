/******************
 * YOUR CODE HERE *
 ******************/

function getFirstItemFrom(list){
   return list[0];
}


function getLastItemFrom(list){
  return (list[list.length -1]);
}


function getIndex3(list){
    if(list.length < 4){
      return list[list.length -1]
}else{
  return list[3]
}
}


function isLongList(arr){
  if(arr.length >= 10){
    return true
  }else{
    return false
  }
}


function firstItemIsNumber(list){
  if(typeof list[0] === "number"){
    return true
  }else{
    return false
  }
}


function secondCharOfThirdString(arr){
  if(typeof arr[2][1] === "string"){
    return arr[2][1]
    }else{
    return false
  }
}
 /********************************************
 * CODE DOWN HERE IS FOR INTERNAL USE ONLY. *
 *           PLEASE DON'T TOUCH!            *
 ********************************************/



if (typeof getFirstItemFrom === 'undefined') {
  getFirstItemFrom = undefined;
}


if (typeof getLastItemFrom === 'undefined') {
  getLastItemFrom = undefined;
}



if (typeof getIndex3 === 'undefined') {
  getIndex3 = undefined;
}


if (typeof firstItemIsNumber === 'undefined') {
  firstItemIsNumber = undefined;
}


if (typeof isLongList === 'undefined') {
  isLongList = undefined;
}


if (typeof secondCharOfThirdString === 'undefined') {
  secondCharOfThirdString = undefined;
}




module.exports = {
  getLastItemFrom,
  getFirstItemFrom,
  getIndex3,
  firstItemIsNumber,
  isLongList,
  secondCharOfThirdString,
}
