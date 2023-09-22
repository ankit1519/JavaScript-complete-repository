const body=document.querySelector("body")
const grey=document.querySelector("#grey")
const white=document.querySelector("#white")
const blue=document.querySelector("#blue")
const yellow=document.querySelector("#yellow")

const arr=[grey,white,blue,yellow]
arr.forEach(function(btn){
    btn.addEventListener('click', function(e){
        if(e.target.id==='grey'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='white'){
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='blue'){ 
            body.style.backgroundColor=e.target.id;
        }
        if(e.target.id==='yellow'){
            body.style.backgroundColor=e.target.id;
        }
    });
});