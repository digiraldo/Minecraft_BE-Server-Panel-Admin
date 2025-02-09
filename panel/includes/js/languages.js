let LocalStorageLanguage = localStorage.getItem("language");
let flagsElements = document.getElementById('flags');
let idiomaActualBtn = document.getElementById('idioma-btn');

//  ==================== CAMBIO DE IDIOMA V2 ====================
let langButtons = document.querySelectorAll("[data-language]");
let textsToChange = document.querySelectorAll("[data-section]");

let changeLanguage = async language => {
    idiomaActualBtn.getElementsByTagName('img')[0].src = `panel/includes/icon/${language}.svg`;
    fetch(`panel/includes/lang/${language}.json`)
    .then(res => res.json())
    .then(data => {
        textsToChange.forEach((el) => {
            let section = el.dataset.section;
            let value = el.dataset.value;
            el.innerHTML = data[section][value];
        });
    });
};

let changeUndefined = async languageUndefined => {
    idiomaActualBtn.getElementsByTagName('img')[0].src = `panel/includes/icon/${languageUndefined}.svg`;
};

let menuItems = document.querySelectorAll('.dropdown-item');
menuItems.forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector(".active").classList.remove("active");
        item.classList.add("active");
    });
});


switch (LocalStorageLanguage) {
    case null:
        let languageNavbar = navigator.languages;
        let languages = languageNavbar[1];
        changeLanguage(languages);
        break;
    case "undefined":
        let undefined = "language";
        changeUndefined(undefined);
        localStorage.removeItem("language");
        break;
    default:
        changeLanguage(LocalStorageLanguage);
        let btnToActive = document.querySelector(`[id="${LocalStorageLanguage}"]`);
        btnToActive.classList.add('active');
        break;
}

langButtons.forEach((button) => {
    button.addEventListener("click", () => {
        let abbreviationLanguage = button.dataset.language;
        changeLanguage(abbreviationLanguage);
        localStorage.setItem("language", abbreviationLanguage)
    });
});