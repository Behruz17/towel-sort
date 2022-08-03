
// You should implement your task here.

module.exports = function towelSort (matrix) {
  let newArr = [];
  if(matrix === undefined){
    return []
  }
  for(let i = 0; i < matrix.length; i++){
  if(i == 0 || i % 2 == 0){
  let arr = matrix[i]
  for(let a of arr){
      newArr.push(a)
  }
  }else{
  let arr = matrix[i].reverse();
  for(let a of arr){
      newArr.push(a)
  }
  }
  }
  return newArr
}
