const navbring = document.getElementById('navbring');
const navoff = document.getElementById('navoff');
const togglenav = document.getElementById('togglenav');


function toggle(){
    togglenav.style.display = "block";
}

function toggleoff(){
    togglenav.style.display = "none";
}

navbring.addEventListener("click",toggle);

navoff.addEventListener("click",toggleoff);


const msg = document.getElementById('glow-on-hover3');
function updateDateTime() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    msg.textContent = `This website is still in progress. [ Date : ${date} , Time : ${time} ]`;
  }

  updateDateTime(); // Initial call
  setInterval(updateDateTime, 1000);
