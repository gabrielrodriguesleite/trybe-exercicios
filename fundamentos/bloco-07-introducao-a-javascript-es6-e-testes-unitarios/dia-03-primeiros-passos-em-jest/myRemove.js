function myRemove(arr, item) {
  if (arr.includes(item)) arr.splice(arr.indexOf(item),1);
  return arr;
}

//console.log(myRemove([1,2,3,4],3));
//console.log(myRemove([1,2,3,4],5));

module.exports = myRemove;
