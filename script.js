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

function addToOrder(itemId) {
    const item = menuItems.find(i => i.id === itemId);
    myOrder.push(item);
    updateUI(); 
}

function updateLanguage(lang) {
    currentLang = lang; 

    document.getElementById("adresstitle").innerText = dictionary[lang].adresstitle;
    document.getElementById("adress").innerText = dictionary[lang].adress;
    document.querySelector(".get-route").innerText = dictionary[lang].getRoute;
    document.getElementById("phone").innerText = dictionary[lang].phone;
    document.querySelector(".call-btn").innerText = dictionary[lang].callBtn;
    document.getElementById("hours").innerText = dictionary[lang].hours;
    document.getElementById("order").innerText = dictionary[lang].order;
    document.getElementById("insta").innerText = dictionary[lang].instagram;
    document.getElementById("breakfast").innerText = dictionary[lang].breakfast;
    document.getElementById("pasta").innerText = dictionary[lang].pasta;
    document.getElementById("starters").innerText = dictionary[lang].starters;
    document.getElementById("focaccia").innerText = dictionary[lang].focaccia;
    document.getElementById("soups").innerText = dictionary[lang].soups;
    document.getElementById("coldcoffee").innerText = dictionary[lang].coldcoffee;
    document.getElementById("hotcoffee").innerText = dictionary[lang].hotcoffee;
    document.getElementById("lemonade").innerText = dictionary[lang].lemonade;
    document.getElementById("softdrinks").innerText = dictionary[lang].softdrinks;

    const statusDiv = document.getElementById("status");
    statusDiv.innerText = isOpen ? dictionary[lang].statusOpen : dictionary[lang].statusClosed;
    

    const breakfastmenu = document.getElementById("breakfastmenu");
    breakfastmenu.innerHTML = ""; 

    BrekafastmenuItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="menu-card">
                <img src="${item.img}" alt="${item.title[lang]}">
                <h1 class="title">${item.title[lang]}</h1>
                <p class="description">${item.description[lang]}</p>
                <p class="price">${item.price} ₾</p>
                <button class="addtotray" onclick="addToTray(${item.id})">${dictionary[lang].addtotray}</button>
            </div>
        `;
        breakfastmenu.appendChild(li); 
    });

    const pastamenu = document.getElementById("pastamenu");
    pastamenu.innerHTML = ""; 

    PastamenuItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="menu-card">
                <img src="${item.img}" alt="${item.title[lang]}">
                <h1 class="title">${item.title[lang]}</h1>
                <p class="description">${item.description[lang]}</p>
                <p class="price">${item.price} ₾</p>
                <button class="addtotray" onclick="addToTray(${item.id})">${dictionary[lang].addtotray}</button>
            </div>
        `;
        pastamenu.appendChild(li); 
    });

    const startersmenu = document.getElementById("startersmenu");
    startersmenu.innerHTML = ""; 

    startersItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="menu-card">
                <img src="${item.img}" alt="${item.title[lang]}">
                <h1 class="title">${item.title[lang]}</h1>
                <p class="description">${item.description[lang]}</p>
                <p class="price">${item.price} ₾</p>
                <button class="addtotray" onclick="addToTray(${item.id})">${dictionary[lang].addtotray}</button>
            </div>
        `;
        startersmenu.appendChild(li); 
    });

    const focacciamenu = document.getElementById("focacciamenu");
    focacciamenu.innerHTML = ""; 

    focacciaItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="menu-card">
                <img src="${item.img}" alt="${item.title[lang]}">
                <h1 class="title">${item.title[lang]}</h1>
                <p class="description">${item.description[lang]}</p>
                <p class="price">${item.price} ₾</p>
                <button class="addtotray" onclick="addToTray(${item.id})">${dictionary[lang].addtotray}</button>
            </div>
        `;
        focacciamenu.appendChild(li); 
    });

    const soupsmenu = document.getElementById("soupsmenu");
    soupsmenu.innerHTML = ""; 

    soupItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="menu-card">
                <img src="${item.img}" alt="${item.title[lang]}">
                <h1 class="title">${item.title[lang]}</h1>
                <p class="description">${item.description[lang]}</p>
                <p class="price">${item.price} ₾</p>
                <button class="addtotray" onclick="addToTray(${item.id})">${dictionary[lang].addtotray}</button>
            </div>
        `;
        soupsmenu.appendChild(li); 
    });

    const coldcoffeemenu = document.getElementById("coldcoffeemenu");
    coldcoffeemenu.innerHTML = ""; 

    coldCoffeeItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="menu-card">
                <img src="${item.img}" alt="${item.title[lang]}">
                <h1 class="title">${item.title[lang]}</h1>
                <p class="description">${item.description[lang]}</p>
                <p class="price">${item.price} ₾</p>
                <button class="addtotray" onclick="addToTray(${item.id})">${dictionary[lang].addtotray}</button>
            </div>
        `;
        coldcoffeemenu.appendChild(li); 
    });

    const hotcoffeemenu = document.getElementById("hotcoffeemenu");
    hotcoffeemenu.innerHTML = ""; 

    hotCoffeeItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="menu-card">
                <img src="${item.img}" alt="${item.title[lang]}">
                <h1 class="title">${item.title[lang]}</h1>
                <p class="description">${item.description[lang]}</p>
                <p class="price">${item.price} ₾</p>
                <button class="addtotray" onclick="addToTray(${item.id})">${dictionary[lang].addtotray}</button>
            </div>
        `;
        hotcoffeemenu.appendChild(li); 
    });

    const lemonademenu = document.getElementById("lemonademenu");
    lemonademenu.innerHTML = ""; 

    lemonadeItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="menu-card">
                <img src="${item.img}" alt="${item.title[lang]}">
                <h1 class="title">${item.title[lang]}</h1>
                <p class="description">${item.description[lang]}</p>
                <p class="price">${item.price} ₾</p>
                <button class="addtotray" onclick="addToTray(${item.id})">${dictionary[lang].addtotray}</button>
            </div>
        `;
        lemonademenu.appendChild(li); 
    });

    const softdrinksmenu = document.getElementById("softdrinksmenu");
    softdrinksmenu.innerHTML = ""; 

    softDrinkItems.forEach(item => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="menu-card">
                <img src="${item.img}" alt="${item.title[lang]}">
                <h1 class="title">${item.title[lang]}</h1>
                <p class="description">${item.description[lang]}</p>
                <p class="price">${item.price} ₾</p>
                <button class="addtotray" onclick="addToTray(${item.id})">${dictionary[lang].addtotray}</button>
            </div>
        `;
        softdrinksmenu.appendChild(li); 
    });

    gsap.from(".contact-text span, .contact-text div, .menu", {
        opacity: 0,
        y: 5,
        duration: 0.3,
        stagger: 0.05
    });
}

updateLanguage('en');

setInterval(updateTbilisiClock, 1000);
updateTbilisiClock();

