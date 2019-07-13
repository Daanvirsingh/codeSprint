var array = [[["firstName", "Vasanth"], ["lastName", "Raja"], ["age", 24], ["role", "JSWizard"]], [["firstName", "Sri"], ["lastName", "Devi"], ["age", 28], ["role", "Coder"]]];

function transformEmployeeData(arr) {
    var tranformEmployeeList = [];
   arr.map(i=>{
       var obj={};
       i.map(j=>{
        obj[j[0]]=j[1];
       })
       tranformEmployeeList.push(obj);
   })  
  
    
    return tranformEmployeeList;
   }

console.log(transformEmployeeData(array));
   