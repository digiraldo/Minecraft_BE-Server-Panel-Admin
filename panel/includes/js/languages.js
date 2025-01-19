const langButtons = document.querySelectorAll("[data-language]");
const textsToChange = document.querySelectorAll("[data-section]");
//console.log(textsToChange);



langButtons.forEach((button) => {
    button.addEventListener("click", () => {
        //console.log(button.dataset.language);
        fetch(`panel/includes/lang/${button.dataset.language}.json`)
        .then(res => res.json())
        //.then(data => console.log(data))
        .then(data => {
            textsToChange.forEach((el) => {
                const section = el.dataset.section;
                const value = el.dataset.value;

                el.innerHTML = data[section][value];
                //console.log(data['signup']['user']);
            })
        })
    })
})




let languageNavbar = navigator.languages;
let languages = languageNavbar[1];

console.log(languageNavbar);
console.log(languages);


document.addEventListener('DOMContentLoaded',()=>{
    switch (languages) {
        case 'en':
            //establecerIdioma('en')
            break;
        
        case 'es':
            //establecerIdioma('es')
            break;
        
        default:
            break;
    }
});