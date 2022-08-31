parent=document.querySelector("body");
child=document.querySelector("footer");
max1=document.querySelector("#max1");
max2=document.querySelector("#max2");
max3=document.querySelector("#max3");
max4=document.querySelector("#max4");

min1=document.querySelector("#min1");
min2=document.querySelector("#min2");
min3=document.querySelector("#min3");
min4=document.querySelector("#min4");

var cmax=[24,27,21,26];
var cmin=[18,19,16,21];
var fmax=[75,80,69,78];
var fmin=[65,66,61,70];

function city(){
    alert("Loading Weather Report");
}
function accepted(){
    parent.removeChild(child)
}

function CF(x){
        if(x.value=="C"){
            max1.innerText="24";
            max2.innerText="27";
            max3.innerText="21";
            max4.innerText="26";

            min1.innerText="18";
            min2.innerText="19";
            min3.innerText="16";
            min4.innerText="21";
        }
        if(x.value=="F"){
            max1.innerText="75";
            max2.innerText="80";
            max3.innerText="69";
            max4.innerText="78";
            
            min1.innerText="65";
            min2.innerText="66";
            min3.innerText="61";
            min4.innerText="70";
        }
}