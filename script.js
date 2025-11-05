const welcomeMessage=document.getElementById('welcome-message');const currentHour=new Date().getHours();if(currentHour<12){welcomeMessage.textContent="Good morning! Welcome to my portfolio."}else if(currentHour<18){welcomeMessage.textContent="Good afternoon! Glad you're here."}else{welcomeMessage.textContent="Good evening! Thanks for visiting."}
const toggleButton=document.getElementById('toggle-mode');const body=document.body;toggleButton.addEventListener('click',()=>{body.classList.toggle('dark-mode');if(body.classList.contains('dark-mode')){toggleButton.textContent="Switch to Light Mode"}else{toggleButton.textContent="Switch to Dark Mode"}})


