const btn=document.querySelectorAll("#nu");
const inp = document.getElementById("calc");
const eva = document.querySelectorAll("ari");
const AC = document.getElementById("Reset");
const Delete = document.getElementById("delete")
let str = ""
let str1 = ""

Array.from(btn).forEach(buttons=>{
    buttons.addEventListener("click",(e)=>{

        if( e.target.value === '='){
            str = eval(str);
            inp.innerHTML = str
        }
        else{
            str += e.target.value
            inp.innerHTML = str
        }
    })
})
AC.addEventListener("click",function(){
    str = ''
    inp.innerHTML = str
})
Delete.addEventListener("click",function(){
    str = str.slice(0,-1)
    inp.innerHTML = str
})




