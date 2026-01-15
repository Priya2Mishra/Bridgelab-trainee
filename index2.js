function rotateString(str){
    return str.slice(1) +str[0];
}
function isRotation(str1,str2){
    if(str1.length !== str2.length){
        return false;
    }
    let rotated = str1;
    for(let i=0;i<str1.length;i++){
        rotated = rotateString(rotated);
        if(rotated === str2){
            return true;
        }
    }
    return false;
}
console.log(isRotation("ABCD","CDAB"));

for(let i=1;i<=5;i++){
    console.log("Loop count:", i);
}
// function
function add(x,y){
    return x+y;
}
let result =add(20,30);
console.log("Function result:",result)

//simple backend login
const admin ={
    username: "admin",
}