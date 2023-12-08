const start=document.getElementById('start');
const paused=document.getElementById('paused');
const reset=document.getElementById('reset');
let display=document.getElementById('time');
let hours=0;
let min=0;
let seconds=0;
let startinterval;
let startonce=0;
let pausedonce=0;

if(startonce==0){start.addEventListener("click", () => {
 startinterval=setInterval(timerunning,1000);
	startonce=startonce+1;
});
}



function timerunning(){
seconds=seconds+1;
if(seconds==60)
{
	seconds=0;
	min=min+1;
	if(min==60){
	min=0;
	hours=hours+1;
}
}
let h= hours< 10 ? "0" + hours :hours;
let m= min< 10 ? "0" + min :min;
let s= seconds< 10 ? "0" + seconds :seconds;

display.textContent=h + ":" + m +":"+s;	

}


paused.addEventListener("click",()=>{
startonce=0;

clearInterval(startinterval);

});


reset.addEventListener("click",()=>{
seconds=0;
hours=0;
min=0;
display.innerHTML="00:00:00"
clearInterval(startinterval);

});