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