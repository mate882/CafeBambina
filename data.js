const dictionary = {
    en: {
        adresstitle: "Address",
        adress: "1 Shota Rustaveli Ave, Tbilisi 0114",
        getRoute: "Get Route",
        phone: "Phone",
        callBtn: "Call Now",
        hours: "Hours",
        statusOpen: "Open",
        statusClosed: "Closed",
        order: "Place an order",
        instagram: "Instagram",
        breakfast: "Breakfast",
    },
    ge: {
        adresstitle: "მისამართი",
        adress: "შოთა რუსთაველის გამზ. 1, თბილისი 0114",
        getRoute: "მარშრუტი",
        phone: "ტელეფონი",
        callBtn: "დარეკვა",
        hours: "სამუშაო საათები",
        statusOpen: "ღიაა",
        statusClosed: "დაკეტილია",
        order: "შეკვეთა",
        instagram: "ინსტაგრამი",
        breakfast: "საუზმე",
    },
    ru: {
        adresstitle: "Адрес",
        adress: "пр. Шота Руставели 1, Тбилиси 0114",
        getRoute: "Маршрут",
        phone: "Телефон",
        callBtn: "Позвонить",
        hours: "График работы",
        statusOpen: "открыто",
        statusClosed: "Закрыто",
        order: "Заказать",
        instagram: "Инстаграм",
        breakfast: "завтрак",
    }
};


const menuItems = [
    {
        id: 1,
        img: "images/GranolawithYogurt.jpg",
        price: "17",
        title: {
            en: "Granola with yogurt",
            ge: "გრანოლა იოგურტით",
            ru: "Гранола с йогуртом"
        },
        description: {
            en: "Banana popcorn with natural yogurt, matsoni, dark chocolate and berries",
            ge: "ბანანის პოპკორნი ნატურალური იოგურტით, მაწონით, შავი შოკოლადითა და კენკრით",
            ru: "Банановый попкорн с натуральным йогуртом, мацони, темным шоколадом и ягодами"
        }
    },
    {
        id: 2,
        img: "images/porridge.jpg",
        price: "13",
        title: {
            en: "Gingerbread porridge",
            ge: "ჯინჯერბრედის ფაფა",
            ru: "Пряничная каша"
        },
        description: {
            en: "Oatmeal porridge with seasonal berries and cinnamon",
            ge: "შვრიის ფაფა სეზონური კენკრით და დარიჩინით",
            ru: "Овсяная каша с сезонными ягодами и корицей"
        }
    },
    {
        id: 3,
        img: "images/syrniki.jpg",
        price: "19",
        title: {
            en: "Vanilla syrniki",
            ge: "ვანილის სირნიკები",
            ru: "Ванильные сырники"
        },
        description: {
            en: "Cottage cheese with black currant and sour cream",
            ge: "ხაჭო შავი მოცხარითა და არაჟნით",
            ru: "Творожники с черной смородиной и сметаной"
        }
    },
    {
        id: 4,
        img: "images/mortadella-waffle.jpg",
        price: "18",
        title: {
            en: "Mortadella waffle",
            ge: "მორტადელას ვაფლი",
            ru: "Вафля с мортаделлой"
        },
        description: {
            en: "Homemade waffle with mortadella and eggs",
            ge: "სახლში მომზადებული ვაფლი მორტადელათი და კვერცხით",
            ru: "Домашняя вафля с мортаделлой и яйцом"
        }
    },
    {
        id: 5,
        img: "images/pistachio-waffle.webp",
        price: "15",
        title: {
            en: "Pistachio waffle",
            ge: "ფისტას ვაფლი",
            ru: "Фисташковая вафля"
        },
        description: {
            en: "Homemade waffle with pistachio ganache and berries",
            ge: "სახლში მომზადებული ვაფლი ფისტას განაშით და კენკრით",
            ru: "Домашняя вафля с фисташковым ганашем и ягодами"
        }
    }
];

let myOrder = [];