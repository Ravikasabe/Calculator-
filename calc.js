function clr(){
    document.getElementById("result").value = "";
}
function display(val){
    document.getElementById("result").value+=val;  
}
function equate(){
    let X = document.getElementById("result").value;
    let Y = eval(X);
    document.getElementById("result").value = Y ;
}
