function reverse(arr) {
    var arr1 =[] ;
    for(var i=0;i<arr.length;i++){
         arr1.push(arr.pop());
    }
    return arr1;
}
   
var result = reverse(["a", "b", "c", "d", "e"]);
console.log(result); // we expect back ["e", "d", "c", "b", "a"]
