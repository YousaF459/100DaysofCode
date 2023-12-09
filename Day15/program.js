const button1=document.getElementById("button1");
const button2=document.getElementById("button2");
const button3=document.getElementById("button3");
const button4=document.getElementById("button4");
const button5=document.getElementById("button5");
const submit=document.getElementById("submit");
const thanks=document.getElementById("thankyou");
const main=document.getElementById("containermain");
const ratingone=document.getElementById("ratingone");
let changebutton=null;




button1.onclick=function() {
if(changebutton!=null){neutral(changebutton);}
  
changeproperties(button1);
  
};
button2.onclick=function() {
if(changebutton!=null){neutral(changebutton); }
  changeproperties(button2);

};
button3.onclick=function() {
if(changebutton!=null){neutral(changebutton);}  
changeproperties(button3);

};
button4.onclick=function() {
if(changebutton!=null){neutral(changebutton); }
 changeproperties(button4);

};
button5.onclick=function() {
if(changebutton!=null){neutral(changebutton); } 
 changeproperties(button5);
};


function changeproperties(buttonselected){
buttonselected.style.color="white";
buttonselected.style.fontSize="30px";
buttonselected.style.backgroundColor="#bdbcb9";
ratingone.textContent=buttonselected.textContent;
changebutton=buttonselected;
}

function neutral(previousbutton){
previousbutton.style.color="#959eac";
previousbutton.style.fontSize="18px";
previousbutton.style.backgroundColor="#3a3e45";
}


submit.onclick=()=>{
 main.style.display = "none";
thanks.style.display="block";

}

