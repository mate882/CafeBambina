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

gsap.registerPlugin(ScrollTrigger);

const headerTl = gsap.timeline({
  scrollTrigger: {
    trigger: "header",
    start: "top top",       
    end: "bottom top",      
    scrub: 1,               
    pin: false,            
  }
});

headerTl.to("header video", {
  x: "-35vw",
  opacity: 0.4,
  ease: "none",
}, 0);

headerTl.to("header .generalinfos", {
  x: "35vw",
  opacity: 0.4,
  ease: "none",
}, 0);

headerTl.to("header .lang-buttons", {
  x: "20vw",
  opacity: 0,
  ease: "none",
}, 0);

gsap.utils.toArray(".breakfast > div").forEach((card, i) => {
  gsap.fromTo(card,
    {
      y: 80,         
      opacity: 0,
    },
    {
      y: 0,
      opacity: 1,
      duration: 0.7,
      ease: "power3.out",
      scrollTrigger: {
        trigger: card,
        start: "top 88%",  
        toggleActions: "play none none reverse",
      },
      delay: i * 0.08,      
    }
  );
});


gsap.fromTo(".breakfast h1",
  { y: 40, opacity: 0 },
  {
    y: 0,
    opacity: 1,
    duration: 0.9,
    ease: "power4.out",
    scrollTrigger: {
      trigger: ".breakfast h1",
      start: "top 85%",
      toggleActions: "play none none reverse",
    }
  }
);
