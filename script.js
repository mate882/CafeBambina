let isOpen = false; 
let currentLang = 'en';

function updateTbilisiClock() {
    const now = new Date();
    const tbilisiTimeString = now.toLocaleString("en-US", {
        timeZone: "Asia/Tbilisi", hour: '2-digit', minute: '2-digit', hour12: true 
    });
    
    const tbilisiDate = new Date(now.toLocaleString("en-US", {timeZone: "Asia/Tbilisi"}));
    const hours = tbilisiDate.getHours();

    const clockEl = document.getElementById('clock');
    if(clockEl) clockEl.textContent = tbilisiTimeString;

    isOpen = (hours >= 10 && hours < 23);

    const statusDiv = document.getElementById('status');
    if(statusDiv) {
        statusDiv.textContent = isOpen ? dictionary[currentLang].statusOpen : dictionary[currentLang].statusClosed;
        statusDiv.className = isOpen ? "open" : "closed";
    }
}


document.querySelectorAll('.lang-buttons button').forEach(btn=>{
  btn.addEventListener('click',()=>{
    document.querySelectorAll('.lang-buttons button').forEach(b=>b.classList.remove('active'));
    btn.classList.add('active');
  });
});

function updateLanguage(lang) {
    currentLang = lang; 

    document.getElementById("adresstitle").innerText = dictionary[lang].adresstitle;
    document.getElementById("adress").innerText = dictionary[lang].adress;
    document.querySelector(".get-route").innerText = dictionary[lang].getRoute;
    document.getElementById("phone").innerText = dictionary[lang].phone;
    document.querySelector(".call-btn").innerText = dictionary[lang].callBtn;
    document.getElementById("hours").innerText = dictionary[lang].hours;
    document.getElementById("order").innerText = dictionary[lang].order;

    const statusDiv = document.getElementById("status");
    statusDiv.innerText = isOpen ? dictionary[lang].statusOpen : dictionary[lang].statusClosed;
    
    gsap.from(".contact-text span, .contact-text div", {
        opacity: 0,
        y: 5,
        duration: 0.3,
        stagger: 0.05
    });
}

updateLanguage('en');

setInterval(updateTbilisiClock, 1000);
updateTbilisiClock();