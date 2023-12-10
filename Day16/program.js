const emailtext=document.getElementById("holder");
const main=document.getElementById("maincontainer");
const card=document.getElementById("thankyou");
const thankemail=document.getElementById("thankyouemail");
const invalidemail=document.getElementById("validemail");
const submit=document.getElementById("submit");
const dismissmessege=document.getElementById("bthankyou");




submit.onclick=()=>{
event.preventDefault();
const emailpattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
thankemail.textContent=emailtext.value;
if(emailtext.value!=null){
if(emailpattern.test(emailtext.value)){


main.style.display="none";
card.style.display="block";
}
else{
invalidemail.style.display="block";
}

}
}



dismissmessege.onclick=()=>{
card.style.display="none";
main.style.display="flex";
emailtext.value="";
invalidemail.style.display="none";
}

