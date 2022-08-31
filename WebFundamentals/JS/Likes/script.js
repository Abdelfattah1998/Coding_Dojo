var one=document.querySelector("#one")
var two=document.querySelector("#two")
var three=document.querySelector("#three")
var count1=0;
var count2=0;
var count3=0;
function Like1(){
    count1++;
    one.innerText=count1+" Like(s)"
}
function Like2(){
    count2++;
    two.innerText=count2+" Like(s)"
}
function Like3(){
    count3++;
    three.innerText=count3+" Like(s)"
}