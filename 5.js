var array = [["make", "Ford"], ["model", "Mustang"], ["year", 1964]];
function fromListToObject(arr) {
var newObject={};
arr.map(i=>{
    newObject[i[0]]=i[1];
})
 
 return newObject;
}

console.log(fromListToObject(array))