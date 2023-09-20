for (let i = 0; i < 10; i++) {
    console.log(i);
}

let myArray=["flash", "superman", "Batman"]
for(let i=0;i<myArray.length;i++){
    console.log(myArray[i]);
}


//break and continue
for (let i = 1; i <= 10; i++) {
    if(i==4) continue;
    if(i==8) break;
    console.log(i);
}