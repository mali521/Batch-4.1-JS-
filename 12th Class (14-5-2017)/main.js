function mapForEach(arr,func){
  var newArr= [];

  for(var i =0; i < arr.length; i++){
    newArr.push(func(arr[i]))
  }
  return newArr;
}
// function map(arr){

// var newArr = [];//[2,4,6];
// for(var i = 0; i < arr.length; i++){
    
//     newArr.push(arr[i]*2);
// }
// return newArr;
// }
// console.log(mapForEach([3,6,4]))// [2,4,6]

// var arr = [1,2,3];
function popup(){
    alert("hello");
}

var c = mapForEach([1,2,3],function(item){
    return item + 2
})
console.log(c);