var mem="";
display=document.querySelector("#display");
function press(num){
    mem +=num;
    display.innerText=mem;
}
function setOP(op){
    set=op;
    buffer=mem;
    mem="";
}
function calculate(){
    // mem=parseFloat(mem);
    if  (set == "+"){
        buffer=buffer+mem;
    }
    else if(set == "-"){
        buffer=buffer-mem;
    }
    else if(set == "*"){
        buffer=buffer*mem;
    }
    else if(set == "/"){
        buffer=buffer/mem;
    }
    display.innerText=buffer;
    buffer=0;
}
function clr(){
    mem="";
    display.innerText=mem;
}