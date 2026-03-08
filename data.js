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
        addtotray: "Add to Tray",
        pasta: "Pasta",
        starters: "Starters & Salads",
        focaccia: "Focaccia",
        soups: "Soups",
        coldcoffee: "Cold Coffee",
        hotcoffee: "Hot Coffee",
        lemonade: "Lemonade",
        softdrinks: "Soft Drinks"
    },
    ka: {
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
        addtotray: "კალათაში დამატება",
        pasta: "პასტა",
        starters: "სტარტერები და სალათები",
        focaccia: "ფოკაჩა",
        soups: "წვნიანები",
        coldcoffee: "ცივი ყავა",
        hotcoffee: "ცხელი ყავა",
        lemonade: "ლიმონათი",
        softdrinks: "გამაგრილებელი სასმელები"
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
        addtotray: "Добавить в корзину",
        pasta: "Паста",
        starters: "Закуски и салаты",
        focaccia: "Фокачча",
        soups: "Супы",
        coldcoffee: "Холодный кофе",
        hotcoffee: "Горячий кофе",
        lemonade: "Лимонад",
        softdrinks: "Безалкогольные напитки"
    }
};


const BrekafastmenuItems = [
    {
        id: 1,
        img: "images/GranolawithYogurt.avif",
        price: 17.00,
        title: {
            en: "Granola with yogurt",
            ka: "გრანოლა იოგურტით",
            ru: "Гранола с йогуртом"
        },
        description: {
            en: "Banana popcorn with natural yogurt, matsoni, dark chocolate and berries",
            ka: "ბანანის პოპკორნი ნატურალური იოგურტით, მაწონით, შავი შოკოლადითა და კენკრით",
            ru: "Банановый попкорн с натуральным йогуртом, мацони, темным шоколадом и ягодами"
        }
    },
    {
        id: 2,
        img: "images/porridge.jpg",
        price: 13.00,
        title: {
            en: "Gingerbread porridge",
            ka: "ჯინჯერბრედის ფაფა",
            ru: "Пряничная каша"
        },
        description: {
            en: "Oatmeal porridge with seasonal berries and cinnamon",
            ka: "შვრიის ფაფა სეზონური კენკრით და დარიჩინით",
            ru: "Овсяная каша с сезонными ягодами и корицей"
        }
    },
    {
        id: 3,
        img: "images/syrniki.jpg",
        price: 19.00,
        title: {
            en: "Vanilla syrniki",
            ka: "ვანილის სირნიკები",
            ru: "Ванильные сырники"
        },
        description: {
            en: "Cottage cheese with black currant and sour cream",
            ka: "ხაჭო შავი მოცხარითა და არაჟნით",
            ru: "Творожники с черной смородиной и сметаной"
        }
    },
    {
        id: 4,
        img: "images/mortadella-waffle.jpg",
        price: 18.00,
        title: {
            en: "Mortadella waffle",
            ka: "მორტადელას ვაფლი",
            ru: "Вафля с мортаделлой"
        },
        description: {
            en: "Homemade waffle with mortadella and eggs",
            ka: "სახლში მომზადებული ვაფლი მორტადელათი და კვერცხით",
            ru: "Домашняя вафля с мортаделлой и яйцом"
        }
    },
    {
        id: 5,
        img: "images/pistachio-waffle.avif",
        price: 15.00,
        title: {
            en: "Pistachio waffle",
            ka: "ფისტას ვაფლი",
            ru: "Фисташковая вафля"
        },
        description: {
            en: "Homemade waffle with pistachio ganache and berries",
            ka: "სახლში მომზადებული ვაფლი ფისტას განაშით და კენკრით",
            ru: "Домашняя вафля с фисташковым ганашем и ягодами"
        }
    }
];

const PastamenuItems = [
    {
        id: 6,
        category: "pasta",
        img: "images/bolognese.avif",
        price: 37.00,
        title: {
            en: "Bolognese",
            ka: "ბოლონიეზე",
            ru: "Болоньезе"
        },
        description: {
            en: "Beef ragù, tagliatelle, Parmesan, butter.",
            ka: "საქონლის რაგუ, ტალიატელე, პარმეზანი, კარაქი.",
            ru: "Рагу из говядины, тальятелле, пармезан, сливочное масло."
        }
    },
    {
        id: 7,
        category: "pasta",
        img: "images/carbonara.avif",
        price: 35.00,
        title: {
            en: "Carbonara Classica",
            ka: "კარბონარა კლასიკა",
            ru: "Карбонара Классика"
        },
        description: {
            en: "Pancetta, egg yolk, Parmesan, tagliatelle.",
            ka: "პანჩეტა, კვერცხის გული, პარმეზანი, ტალიატელე.",
            ru: "Панчетта, яичный желток, пармезан, тальятелле."
        }
    },
    {
        id: 8,
        category: "pasta",
        img: "images/truffle.avif",
        price: 33.00,
        title: {
            en: "Bambina Truffle",
            ka: "ბამბინა ტრიუფელი",
            ru: "Трюфельная Бамбина"
        },
        description: {
            en: "Cream, truffle paste, Parmesan, tagliatelle",
            ka: "ნაღები, ტრიუფელის პასტა, პარმეზანი, ტალიატელე",
            ru: "Сливки, трюфельная паста, пармезан, тальятелле"
        }
    },
    {
        id: 9,
        category: "pasta",
        img: "images/arrabbiata.avif",
        price: 31.00,
        title: {
            en: "Arrabbiata",
            ka: "არაბიატა",
            ru: "Арраббьята"
        },
        description: {
            en: "Peeled tomatoes, oregano, crushed chili, basil, Parmesan, tagliatelle.",
            ka: "გაფცქვნილი პომიდორი, ორეგანო, დაფქული ჩილი, ბაზილიკი, პარმეზანი, ტალიატელე.",
            ru: "Очищенные томаты, орегано, измельченный чили, базилик, пармезан, тальятелле."
        }
    },
    {
        id: 10,
        category: "pasta",
        img: "images/pesto.avif",
        price: 31.00,
        title: {
            en: "Almond - Parsley Pesto",
            ka: "ნუშის და ოხრახუშის პესტო",
            ru: "Миндально-петрушечный песто"
        },
        description: {
            en: "Parsley pesto, tagliatelle, sun-dried tomatoes, Parmesan.",
            ka: "ოხრახუშის პესტო, ტალიატელე, ჩირი პომიდორი, პარმეზანი.",
            ru: "Песто из петрушки, тальятелле, вяленые томаты, пармезан."
        }
    }
];

const startersItems = [
    {
        id: 11,
        img: "images/caesar.jpg",
        price: 33,
        title: { en: "Caesar Salad", ka: "სალათი ცეზარი", ru: "Салат Цезарь" },
        description: {
            en: "Grilled chicken fillet, iceberg lettuce, Caesar dressing, Parmesan, croutons.",
            ka: "გრილზე შემწვარი ქათმის ფილე, აისბერგი, ცეზარის დრესინგი, პარმეზანი, ორცხობილა.",
            ru: "Куриное филе на гриле, салат айсберг, соус Цезарь, пармезан, гренки."
        }
    },
    {
        id: 12,
        img: "images/bambina-salad.jpg",
        price: 27,
        title: { en: "Bambina Salad", ka: "ბამბინა სალათი", ru: "Салат Бамбина" },
        description: {
            en: "Peeled tomatoes, feta mousse, Kakhetian olive oil dressing, arugula, cashews.",
            ka: "გაფცქვნილი პომიდორი, ფეტას მუსი, კახური ზეთის დრესინგი, არაგულა, კეშიუ.",
            ru: "Очищенные томаты, мусс из феты, заправка из кахетинского масла, руккола, кешью."
        }
    },
    {
        id: 13,
        img: "images/beetroot.jpg",
        price: 29,
        title: { en: "Beetroot Salad", ka: "ჭარხლის სალათი", ru: "Салат из свеклы" },
        description: {
            en: "Roasted beetroot, arugula, goat cheese mousse, orange & mustard dressing.",
            ka: "შემწვარი ჭარხალი, არაგულა, თხის ყველის მუსი, ფორთოხლის და მდოგვის დრესინგი.",
            ru: "Запеченная свекла, руккола, мусс из козьего сыра, апельсиново-горчичная заправка."
        }
    },
    {
        id: 14,
        img: "images/pate.jpg",
        price: 29,
        title: { en: "Chicken Pâté", ka: "ქათმის პაშტეტი", ru: "Куриный паштет" },
        description: {
            en: "Chicken liver pâté, orange blossom jam, Hokkaido bread.",
            ka: "ქათმის ღვიძლის პაშტეტი, ფორთოხლის მურაბა, ჰოკაიდოს პური.",
            ru: "Паштет из куриной печени, варенье из цветков апельсина, хлеб Хоккайдо."
        }
    },
    {
        id: 15,
        img: "images/gravlax.jpg",
        price: 35,
        title: { en: "Salmon Gravlax", ka: "ორაგულის გრავლაქსი", ru: "Гравлакс из лосося" },
        description: {
            en: "Marinated salmon, horseradish sauce, microgreens.",
            ka: "მარინირებული ორაგული, პირშუშხას სოუსი, მიკრო მწვანილი.",
            ru: "Маринованный лосось, соус из хрена, микрозелень."
        }
    }
];

const focacciaItems = [
    {
        id: 16,
        img: "images/focaccia-mortadella.jpg",
        price: 33,
        title: { en: "Focaccia Mortadella", ka: "ფოკაჩა მორტადელათი", ru: "Фокачча с мортаделлой" },
        description: { en: "Focaccia, mortadella, stracciatella, arugula, pistachios, honey, pesto.", ka: "ფოკაჩა, მორტადელა, სტრაჩატელა, არაგულა, ფსტა, თაფლი, პესტო.", ru: "Фокачча, мортаделла, страчателла, руккола, фисташки, мед, песто." }
    },
    {
        id: 17,
        img: "images/focaccia-tuna.jpg",
        price: 33,
        title: { en: "Focaccia Tuna", ka: "ფოკაჩა თინუსით", ru: "Фокачча с тунцом" },
        description: { en: "Focaccia, tuna, homemade mayonnaise, egg, capers, red onion, iceberg lettuce.", ka: "ფოკაჩა, თინუსი, სახლის მაიონეზი, კვერცხი, კაპერსი, წითელი ხახვი, აისბერგი.", ru: "Фокачча, тунец, домашний майонез, яйцо, каперсы, красный лук, айсберг." }
    },
    {
        id: 18,
        img: "images/focaccia-salmon.jpg",
        price: 33,
        title: { en: "Focaccia Salmon", ka: "ფოკაჩა ორაგულით", ru: "Фокачча с лососем" },
        description: { en: "Focaccia, salmon, arugula, cream cheese, capers, cucumber.", ka: "ფოკაჩა, ორაგული, არაგულა, კრემ-ყველი, კაპერსი, კიტრი.", ru: "Фокачча, лосось, руккола, крем-чиз, каперсы, огурец." }
    },
    {
        id: 19,
        img: "images/focaccia-caesar.jpg",
        price: 33,
        title: { en: "Focaccia Caesar", ka: "ფოკაჩა ცეზარი", ru: "Фокачча Цезарь" },
        description: { en: "Focaccia, grilled chicken, Caesar sauce, Parmesan, iceberg lettuce.", ka: "ფოკაჩა, შემწვარი ქათამი, ცეზარის სოუსი, პარმეზანი, აისბერგი.", ru: "Фокачча, курица гриль, соус Цезарь, пармезан, айсберг." }
    },
    {
        id: 20,
        img: "images/focaccia-prosciutto.jpg",
        price: 33,
        title: { en: "Focaccia Prosciutto", ka: "ფოკაჩა პროშუტო", ru: "Фокачча Прошутто" },
        description: { en: "Focaccia, prosciutto, arugula, stracciatella, pesto, dried cherry tomatoes salsa.", ka: "ფოკაჩა, პროშუტო, არაგულა, სტრაჩატელა, პესტო, ჩირი პომიდვრის სალსა.", ru: "Фокачча, прошутто, руккола, страчателла, песто, сальса из вяленых томатов." }
    }
];

const soupItems = [
    {
        id: 21,
        img: "images/pumpkin-soup.jpg",
        price: 25,
        title: { en: "Pumpkin Cream Soup", ka: "გოგრის კრემ-სუპი", ru: "Тыквенный крем-суп" },
        description: { en: "Pumpkin cream soup, pumpkin seeds, croutons, microgreens.", ka: "გოგრის კრემ-სუპი, გოგრის თესლი, ორცხობილა, მიკრო მწვანილი.", ru: "Тыквенный крем-суп, тыквенные семечки, гренки, микрозелень." }
    },
    {
        id: 22,
        img: "images/chicken-soup.jpg",
        price: 23,
        title: { en: "Homemade Chicken Soup", ka: "ქათმის სუპი", ru: "Домашний куриный суп" },
        description: { en: "Chicken broth, chicken fillet, vegetables, rice noodles, quail egg.", ka: "ქათმის ბულიონი, ქათმის ფილე, ბოსტნეული, ბრინჯის ნუდლსი, მწყრის კვერცხი.", ru: "Куриный бульон, куриное филе, овощи, рисовая лапша, перепелиное яйцо." }
    },
    {
        id: 23,
        img: "images/pea-soup.jpg",
        price: 27,
        title: { en: "Pea Cream Soup with Mint", ka: "ბარდის კრემ-სუპი პიტნით", ru: "Гороховый крем-суп с мятой" },
        description: { en: "Green pea cream soup with mint, fresh peas, cream, microgreens.", ka: "მწვანე ბარდის კრემ-სუპი პიტნით, ნაღები, მიკრო მწვანილი.", ru: "Крем-суп из зеленого горошка с мятой, свежий горошек, сливки, микрозелень." }
    }
];

const coldCoffeeItems = [
    { id: 24, img: "images/espresso-tonic.jpg", price: 13, title: { en: "Espresso Tonic", ka: "ესპრესო ტონიკი", ru: "Эспрессо Тоник" }, description: { en: "", ka: "", ru: "" } },
    { id: 25, img: "images/iced-raf.jpg", price: 13, title: { en: "Iced Raf", ka: "აცივებული რაფ ყავა", ru: "Айс Раф" }, description: { en: "", ka: "", ru: "" } },
    { id: 26, img: "images/iced-latte.jpg", price: 13, title: { en: "Iced Latte", ka: "აცივებული ლატე", ru: "Айс Латте" }, description: { en: "", ka: "", ru: "" } },
    { id: 27, img: "images/cold-filter.jpg", price: 9, title: { en: "Cold Filter", ka: "ცივი ფილტრ ყავა", ru: "Колд фильтр" }, description: { en: "", ka: "", ru: "" } },
    { id: 28, img: "images/bumble.jpg", price: 13, title: { en: "Bumble", ka: "ბამბლი", ru: "Бамбл" }, description: { en: "", ka: "", ru: "" } },
    { id: 29, img: "images/iced-matcha-latte.jpg", price: 13, title: { en: "Iced Matcha Latte", ka: "აცივებული მაჩა ლატე", ru: "Айс Матча Латте" }, description: { en: "", ka: "", ru: "" } },
    { id: 30, img: "images/iced-cappuccino.jpg", price: 11, title: { en: "Iced Cappuccino", ka: "აცივებული კაპუჩინო", ru: "Айс Капучино" }, description: { en: "", ka: "", ru: "" } },
    { id: 31, img: "images/matcha-tonic.jpg", price: 11, title: { en: "Matcha Tonic", ka: "მაჩა ტონიკი", ru: "Матча Тоник" }, description: { en: "", ka: "", ru: "" } },
    { id: 32, img: "images/iced-matcha-raf.jpg", price: 13, title: { en: "Iced Matcha Raf", ka: "აცივებული მაჩა რაფა", ru: "Айс Матча Раф" }, description: { en: "", ka: "", ru: "" } }
];

const hotCoffeeItems = [
    { id: 33, img: "images/filter-coffee.jpg", price: 9, title: { en: "Filter Coffee", ka: "ფილტრ ყავა", ru: "Фильтр-кофе" }, description: { en: "", ka: "", ru: "" } },
    { id: 34, img: "images/cappuccino.jpg", price: 11, title: { en: "Cappuccino", ka: "კაპუჩინო", ru: "Капучино" }, description: { en: "", ka: "", ru: "" } },
    { id: 35, img: "images/latte.jpg", price: 13, title: { en: "Latte", ka: "ლატე", ru: "Латте" }, description: { en: "", ka: "", ru: "" } },
    { id: 36, img: "images/flat-white.jpg", price: 13, title: { en: "Flat White", ka: "ფლეტ ვაითი", ru: "Флэт Уайт" }, description: { en: "", ka: "", ru: "" } },
    { id: 37, img: "images/americano.jpg", price: 9, title: { en: "Americano", ka: "ამერიკანო", ru: "Американо" }, description: { en: "", ka: "", ru: "" } },
    { id: 38, img: "images/raf.jpg", price: 13, title: { en: "Raf", ka: "რაფ ყავა", ru: "Раф" }, description: { en: "", ka: "", ru: "" } },
    { id: 39, img: "images/cocoa.jpg", price: 11, title: { en: "Cocoa", ka: "კაკაო", ru: "Какао" }, description: { en: "", ka: "", ru: "" } },
    { id: 40, img: "images/matcha-latte.jpg", price: 13, title: { en: "Matcha Latte", ka: "მაჩა ლატე", ru: "Матча Латте" }, description: { en: "", ka: "", ru: "" } }
];

const lemonadeItems = [
    { id: 41, img: "images/tarragon.jpg", price: 15, title: { en: "Tarragon", ka: "ტარხუნა", ru: "Тархун" }, description: { en: "", ka: "", ru: "" } },
    { id: 42, img: "images/ginger.jpg", price: 15, title: { en: "Ginger", ka: "კოჭა", ru: "Имбирь" }, description: { en: "", ka: "", ru: "" } },
    { id: 43, img: "images/raspberry-passion.jpg", price: 15, title: { en: "Raspberry & Passion Fruit", ka: "ჟოლო და პასიფლორა", ru: "Малина и Маракуйя" }, description: { en: "", ka: "", ru: "" } },
    { id: 44, img: "images/buckthorn-almond.jpg", price: 15, title: { en: "Sea Buckthorn & Almond", ka: "ქაცვი და ნუში", ru: "Облепиха и Миндаль" }, description: { en: "", ka: "", ru: "" } },
    { id: 45, img: "images/strawberry-lychee.jpg", price: 15, title: { en: "Strawberry & Lychee", ka: "მარწყვი და ლიჩი", ru: "Клубника и Личи" }, description: { en: "", ka: "", ru: "" } }
];

const softDrinkItems = [
    { id: 46, img: "images/cola.jpg", price: 5, title: { en: "Coca Cola", ka: "კოკა-კოლა", ru: "Кока-кола" }, description: { en: "", ka: "", ru: "" } },
    { id: 47, img: "images/cola-zero.jpg", price: 5, title: { en: "Coca Cola Zero", ka: "კოკა-კოლა ზერო", ru: "Кока-кола Зеро" }, description: { en: "", ka: "", ru: "" } },
    { id: 48, img: "images/shweppes.jpg", price: 5, title: { en: "Shweppes", ka: "შვეფსი", ru: "Швепс" }, description: { en: "", ka: "", ru: "" } },
    { id: 49, img: "images/water-mtis.jpg", price: 3, title: { en: "Water Mtis", ka: "წყალი მთის", ru: "Вода Мтис" }, description: { en: "", ka: "", ru: "" } }
];