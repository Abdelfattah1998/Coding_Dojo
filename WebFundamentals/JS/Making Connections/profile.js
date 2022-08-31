parent1=document.querySelector("#parent")
user1=document.querySelector("#user1");
user2=document.querySelector("#user2");
button1=document.querySelector("#button1");
button2=document.querySelector("#button2");
nam=document.querySelector("#name");

var count1 =2;
var count2 =500;
function accept1(){
    parent1.removeChild(user1);
    count1--;
    count2++;
    button1.innerText=count1;
    button2.innerText=count2;
    console.log("accept1");
}
function accept2(){
    parent1.removeChild(user2);
    count1--;
    count2++;
    button1.innerText=count1;
    button2.innerText=count2;
    console.log("accept2");
}
function reject1(){
    parent1.removeChild(user1);
    count1--;
    button1.innerText=count1;
    console.log("accept1");
}
function reject2(){
    parent1.removeChild(user2);
    count1--;
    button1.innerText=count1;
    console.log("accept2");
}
function editprofile(){
    nam.innerText="Any Name";
}