//  ==================== CAMBIO DE IDIOMA V2 ====================
//  ==================== CAMBIO DE IDIOMA V2 ====================
//  ==================== CAMBIO DE IDIOMA V2 ====================

let LocalStorageLanguage = localStorage.getItem("language");
const flagsElements = document.getElementById('flags');
const idiomaActualBtn = document.getElementById('idioma-btn');
// console.log(idiomaActualBtn)
// idiomaActualBtn.getElementsByTagName('img')[0].src = `panel/includes/icon/${button.dataset.language}.svg`;
// console.log(idiomaActualBtn.getElementsByTagName('img')[0].src = `panel/includes/icon/${button.dataset.language}.svg`;);
//console.log(languageActual);
// console.log(LocalStorageLanguage);
// console.log(languageNavbar);
// console.log(languages);


//  ==================== CAMBIO DE IDIOMA V2 ====================
const langButtons = document.querySelectorAll("[data-language]");
const textsToChange = document.querySelectorAll("[data-section]");
//console.log(textsToChange);

const changeLanguage = async language => {
    idiomaActualBtn.getElementsByTagName('img')[0].src = `panel/includes/icon/${language}.svg`;
    fetch(`panel/includes/lang/${language}.json`)
    .then(res => res.json())
    //.then(data => console.log(data))
    .then(data => {
        textsToChange.forEach((el) => {
            const section = el.dataset.section;
            const value = el.dataset.value;
            el.innerHTML = data[section][value];
            //console.log(data['signup']['user']);
        });
    });
};
const changeUndefined = async languageUndefined => {
    idiomaActualBtn.getElementsByTagName('img')[0].src = `panel/includes/icon/${languageUndefined}.svg`;
};

const menuItems = document.querySelectorAll('.dropdown-item');
//console.log(menuItems);
menuItems.forEach((item) => {
    // console.log(item);
    item.addEventListener('click', () => {
        //console.log(item);
        document.querySelector(".active").classList.remove("active");
        item.classList.add("active");
    });
});


switch (LocalStorageLanguage) {
    case null:
        let languageNavbar = navigator.languages;
        let languages = languageNavbar[1];
        changeLanguage(languages);
        //localStorage.setItem("language", languages)
        break;
    case "undefined":
        const undefined = "language";
        changeUndefined(undefined);
        localStorage.removeItem("language");
        break;
    default:
        changeLanguage(LocalStorageLanguage);
        const btnToActive = document.querySelector(`[id="${LocalStorageLanguage}"]`);
        btnToActive.classList.add('active');
        // console.log(btnToActive);
        // console.log(btnToActive.classList.value);
        // console.log(btnToActive.id);
        break;
}

langButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const abbreviationLanguage = button.dataset.language;
        changeLanguage(abbreviationLanguage);
        localStorage.setItem("language", abbreviationLanguage)

        console.log(abbreviationLanguage);
    });
});

// =============== ESTE HACE IGUAL AL DE ARRIBA ===============
flagsElements.addEventListener('click', (e) => {
    // changeLanguage(e.target.parentElement.dataset.language)
    // const abbreviationLanguage = e.target.parentElement.dataset.language
    // localStorage.setItem("language", abbreviationLanguage)

    //console.log(e.target.classList.length);
    //console.log(e.target.parentElement.dataset.language);
    //console.log(abbreviationLanguage);
});





//  ==================== CAMBIO DE IDIOMA V1 ====================
//  ==================== CAMBIO DE IDIOMA V1 ====================
//  ==================== CAMBIO DE IDIOMA V1 ====================
let LocalStorageLanguage = localStorage.getItem("language");
const flagsElements = document.getElementById('flags');
//console.log(idiomaActualBtn);
//console.log(languageActual);

// console.log(languageNavbar);
// console.log(languages);

const idiomaActualBtn = document.getElementById('idioma-btn');
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async language => {
    const requestJson = await fetch(`panel/includes/lang/${language}.json`)
    idiomaActualBtn.getElementsByTagName('img')[0].src = `panel/includes/icon/${language}.svg`;
    //console.log(idiomaActualBtn.getElementsByTagName('img')[0].src = `panel/includes/icon/${language}.svg`);
    const texts = await requestJson.json()
    // console.log(texts);
    for (const textToChange of textsToChange) {
        // console.log(textToChange);
        const section = textToChange.dataset.section;
        const value = textToChange.dataset.value;
        // console.log(section, value);
        textToChange.innerHTML = texts[section][value]
    }

};

const menuItems = document.querySelectorAll('.dropdown-item');
//console.log(menuItems);
menuItems.forEach((item) => {
    // console.log(item);
    item.addEventListener('click', () => {
        //console.log(item);
        document.querySelector(".active").classList.remove("active");
        item.classList.add("active");
    });
});

if (LocalStorageLanguage === null) {
    let languageNavbar = navigator.languages;
    let languages = languageNavbar[1];
    //localStorage.setItem("language", languages)
    changeLanguage(languages);
    
} else {
    changeLanguage(LocalStorageLanguage)
    const btnToActive = document.querySelector(`[id="${LocalStorageLanguage}"]`);
    btnToActive.classList.add('active');
    // console.log(btnToActive);
    // console.log(btnToActive.classList.value);
    // console.log(btnToActive.id);
}

flagsElements.addEventListener('click', (e) => {
    // console.log(e.target.classList.length);
    // console.log(e.target.parentElement.dataset.language);
    changeLanguage(e.target.parentElement.dataset.language)
    const abbreviationLanguage = e.target.parentElement.dataset.language
    //console.log(abbreviationLanguage);
    localStorage.setItem("language", abbreviationLanguage)
});


/* console.log('Consola de Registro')
console.info('Consola de Información')
console.debug('Console de Depuración')
console.warn('Consola de Aviso')
console.error('Consola de Error') */











if (LocalStorageLanguage === null) {
    let languageNavbar = navigator.languages;
    let languages = languageNavbar[1];
    //localStorage.setItem("language", languages)
    changeLanguage(languages);
    } else if (LocalStorageLanguage === "undefined") {
        const undefined = "language";
        changeUndefined(undefined);
    } else {
        changeLanguage(LocalStorageLanguage);
        const btnToActive = document.querySelector(`[id="${LocalStorageLanguage}"]`);
        btnToActive.classList.add('active');
        // console.log(btnToActive);
        // console.log(btnToActive.classList.value);
        // console.log(btnToActive.id);
    };