let usersElements = document.getElementById("iconUser");
//console.log(usersElements);
let userActualBtn = document.getElementById("user-default-img");
//console.log(userActualBtn);

let userButton = document.querySelectorAll("[data-parent]");
//console.log(userButton);
let dataToChange = document.querySelectorAll("[data-section]");
//console.log(dataToChange);

let changeIconUser = async iconUser => {
    userActualBtn.getElementsByTagName('img')[0].src = `panel/includes/img/perfil/${iconUser}.png`
};

let menuUsers = document.querySelectorAll('.dropdown-item');
menuUsers.forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector(".active").classList.remove("active");
        item.classList.add("active");
    });
});

userButton.forEach((button) => {
    button.addEventListener("click", () => {
        let abbreviationiconUser = button.dataset.parent;
        //console.log(abbreviationiconUser);
        changeIconUser(abbreviationiconUser);
    });
});
