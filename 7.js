

function assertObjectsEqual(actual, expected, testName){
    if(JSON.stringify(actual)===JSON.stringify(expected)){
        console.log("Success")
    }else{
        console.log(`FAILED ${testName} Expected ${JSON.stringify(expected)}, but got ${JSON.stringify(actual)}`)

    }
   }
   assertObjectsEqual({foo: 5, bar: 6},{foo: 5, bar: 6}, "detects that two objects are equal")
   assertObjectsEqual({foo: 6, bar: 5},{foo: 5, bar: 6}, "detects that two objects are equal")