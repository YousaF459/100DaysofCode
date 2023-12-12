const toggle = document.getElementById("togglelist");
const hamburger = document.getElementById("hamburger");

let isHidden = true; 

hamburger.onclick = () => {
    if (isHidden) {
        toggle.style.display = "flex"; 
    } else {
        toggle.style.display = "none"; 
    }
    isHidden = !isHidden; 
};


window.addEventListener('resize', () => {
    toggle.style.display = "none";
});