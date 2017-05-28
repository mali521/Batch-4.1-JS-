var str = "hello world";
var changeStr = str.split(" "); // ["hello","world"]

for(var i= 0; i < changeStr.length; i++)
{                                  
    changeStr[i] = changeStr[i].replace(changeStr[i].charAt(0),changeStr[i].charAt(0).toUpperCase())
}
console.log(changeStr.join(""));

var arr = [9,8];
arr[1] = 10