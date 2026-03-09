let isOpen = false; 
let currentLang = 'en';
let tray = JSON.parse(localStorage.getItem("bambina_tray")) || [];
let priceTracker = { displayVal: 0 };

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

function AddToTray(id) {
    const existingitem = tray.find(item => String(item.id) === String(id));

    if (existingitem) {
        existingitem.quantity += 1;
    } else {
        tray.push({ id: String(id), quantity: 1 });
    }
    localStorage.setItem("bambina_tray", JSON.stringify(tray));
    renderTray();
}

function animateFly(event) {
    const btn = event.currentTarget;
    const card = btn.closest('.menu-card');
    
    const imgToCopy = card ? card.querySelector('img') : null;
    
    let trayIcon = document.getElementById('tray-icon') || document.getElementById('tray');

    if (!imgToCopy || !trayIcon) {
        console.log("Animation cancelled: Missing Image or Tray element");
        return; 
    }

    const flyer = imgToCopy.cloneNode();
    document.body.appendChild(flyer);

    const start = imgToCopy.getBoundingClientRect();
    const end = trayIcon.getBoundingClientRect();

    Object.assign(flyer.style, {
        position: 'fixed',
        top: `${start.top}px`,
        left: `${start.left}px`,
        width: `${start.width}px`,
        height: `${start.height}px`,
        zIndex: '9999',
        pointerEvents: 'none',
        borderRadius: '15px',
        objectFit: 'cover'
    });

    const dx = end.left - start.left;
    const dy = end.top - start.top;
    const distance = Math.sqrt(dx * dx + dy * dy);

    const dynamicDuration = distance / 800; 

    gsap.to(flyer, {
        top: end.top + (end.height / 2) - 20,
        left: end.left + (end.width / 2) - 20,
        width: 40,
        height: 40,
        opacity: 0.6,
        rotation: 360,
        duration: Math.max(0.4, dynamicDuration), 
        ease: "power1.out", 
        onComplete: () => {
            flyer.remove();
            gsap.fromTo(trayIcon, { scale: 1 }, { scale: 1.2, duration: 0.1, yoyo: true, repeat: 1 });
        }
    });
}

function renderTray() {
    const itemsContainer = document.getElementById("tray"); 
    if (!itemsContainer) return;
    itemsContainer.innerHTML = ""; 

    const emptyMsg = document.getElementById("emptytray");
    const clearBtn = document.getElementById("cleartray");

    // 2. Visibility Logic
    if (tray.length === 0) {
        if(emptyMsg) emptyMsg.style.display = 'block';
        if(clearBtn) clearBtn.style.display = 'none';
    } else {
        if(emptyMsg) emptyMsg.style.display = 'none';
        if(clearBtn) clearBtn.style.display = 'block';
    }

    const allItems = [...BrekafastmenuItems, ...PastamenuItems, ...startersItems, ...focacciaItems, ...soupItems, ...coldCoffeeItems, ...hotCoffeeItems, ...lemonadeItems, ...softDrinkItems]; 

    let totalMoney = 0;

    tray.forEach(item => {
        const details = allItems.find(i => String(i.id) === String(item.id));

        if (details) {
            const name = details.title[currentLang]; 
            const price = Number(details.price);
            const qty = Number(item.quantity);
            totalMoney += (price * qty);

            const li = document.createElement('li');
            li.innerHTML = `
                <div class="tray-item">
                    <h3>${name}</h3>
                    <p>${(price * qty)} ₾</p>
                    <button onclick="RemoveOne('${item.id}')">-</button>
                    <span>${qty}</span>
                    <button onclick="animateFly(event); AddToTray('${item.id}')">+</button>
                </div>
            `;
            itemsContainer.appendChild(li); 
        }
    });

    const totalDisplay = document.getElementById("totalamount");
    if (totalDisplay) {
        gsap.to(priceTracker, {
            displayVal: totalMoney,
            duration: 0.5,
            onUpdate: () => {
                totalDisplay.textContent = Math.round(priceTracker.displayVal) + " ₾";
            }
        });
    }
}

function RemoveOne(id) {
    const itemIndex = tray.findIndex(item => item.id === id);

    if (itemIndex > -1) {
        if (tray[itemIndex].quantity > 1) {
            tray[itemIndex].quantity -= 1;
        } else {
            tray.splice(itemIndex, 1); 
        }
    }

    localStorage.setItem("bambina_tray", JSON.stringify(tray));

    renderTray();
}

function clearTray() {
    tray = [];
    localStorage.removeItem("bambina_tray"); 
    renderTray();
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
    document.getElementById("cleartray").innerText = dictionary[lang].clearTray;
    document.getElementById("emptytray").innerText = dictionary[lang].emptyTray;

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
                <button class="addtotray" onclick="animateFly(event); AddToTray('${item.id}')">${dictionary[lang].addtotray}</button>
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
                <button class="addtotray" onclick="animateFly(event); AddToTray('${item.id}')">${dictionary[lang].addtotray}</button>
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
                <button class="addtotray" onclick="animateFly(event); AddToTray('${item.id}')">${dictionary[lang].addtotray}</button>
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
                <button class="addtotray" onclick="animateFly(event); AddToTray('${item.id}')">${dictionary[lang].addtotray}</button>
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
                <button class="addtotray" onclick="animateFly(event); AddToTray('${item.id}')">${dictionary[lang].addtotray}</button>
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
                <button class="addtotray" onclick="animateFly(event); AddToTray('${item.id}')">${dictionary[lang].addtotray}</button>
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
                <button class="addtotray" onclick="animateFly(event); AddToTray('${item.id}')">${dictionary[lang].addtotray}</button>
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
                <button class="addtotray" onclick="animateFly(event); AddToTray('${item.id}')">${dictionary[lang].addtotray}</button>
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
                <button class="addtotray" onclick="animateFly(event); AddToTray('${item.id}')">${dictionary[lang].addtotray}</button>
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
    renderTray();
}

updateLanguage('en');

setInterval(updateTbilisiClock, 1000);
updateTbilisiClock();
