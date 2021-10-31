// j=0
// names=["Razia","Rani","Rahil","Roshan","Rameesa","Rameez"]
// for(i=0;i<names.length;i++){
//     console.log(j+1,names[i]);
//     j+=1
// }
var read=require("readline-sync")
var number=read.question("Enter a number:")
for(let i=0;i<=number;i++){
    if(i%7===0){
        console.log(i);
    }
    else continue;
}