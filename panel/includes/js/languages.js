let LocalStorageLanguage = localStorage.getItem("language");
const flagsElements = document.getElementById('flags');
const idiomaActualBtn = document.getElementById('idioma-btn');

//  ==================== CAMBIO DE IDIOMA V2 ====================
const langButtons = document.querySelectorAll("[data-language]");
const textsToChange = document.querySelectorAll("[data-section]");

const changeLanguage = async language => {
    idiomaActualBtn.getElementsByTagName('img')[0].src = `panel/includes/icon/${language}.svg`;
    fetch(`panel/includes/lang/${language}.json`)
    .then(res => res.json())
    .then(data => {
        textsToChange.forEach((el) => {
            const section = el.dataset.section;
            const value = el.dataset.value;
            el.innerHTML = data[section][value];
        });
    });
};

const changeUndefined = async languageUndefined => {
    idiomaActualBtn.getElementsByTagName('img')[0].src = `panel/includes/icon/${languageUndefined}.svg`;
};

const menuItems = document.querySelectorAll('.dropdown-item');
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
        const undefined = "language";
        changeUndefined(undefined);
        localStorage.removeItem("language");
        break;
    default:
        changeLanguage(LocalStorageLanguage);
        const btnToActive = document.querySelector(`[id="${LocalStorageLanguage}"]`);
        btnToActive.classList.add('active');
        break;
}

langButtons.forEach((button) => {
    button.addEventListener("click", () => {
        const abbreviationLanguage = button.dataset.language;
        changeLanguage(abbreviationLanguage);
        localStorage.setItem("language", abbreviationLanguage)
    });
});