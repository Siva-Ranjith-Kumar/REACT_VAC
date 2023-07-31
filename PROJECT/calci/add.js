const number1 = document.getElementById("number1");
const number2 = document.getElementById("number2");

function add(){
    var a = parseInt(document.getElementById("number1").value)
    var b = parseInt(document.getElementById("number2").value)
    var c = a+b;
    display(c,"sum is");
}

function sub(){
    var a = parseInt(document.getElementById("number1").value)
    var b = parseInt(document.getElementById("number2").value)
    var c = a-b;
    display(c,"sub is")
}
function display (c,str){
    const p = document.createElement("p");
    p.innerText = str +`${c}`;
    document.body.appendChild(p);
}