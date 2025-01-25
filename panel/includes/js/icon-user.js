const usersElements = document.getElementById("iconUser");
//console.log(usersElements);
const userActualBtn = document.getElementById("user-default-img");
//console.log(userActualBtn);

const userButton = document.querySelectorAll("[data-parent]");
//console.log(userButton);
const dataToChange = document.querySelectorAll("[data-section]");
//console.log(dataToChange);

const changeIconUser = async iconUser => {
    userActualBtn.getElementsByTagName('img')[0].src = `panel/includes/img/perfil/${iconUser}.png`
};

const menuUsers = document.querySelectorAll('.dropdown-item');
menuUsers.forEach((item) => {
    item.addEventListener('click', () => {
        document.querySelector(".active").classList.remove("active");
        item.classList.add("active");
    });
});

userButton.forEach((button) => {
    button.addEventListener("click", () => {
        const abbreviationiconUser = button.dataset.parent;
        //console.log(abbreviationiconUser);
        changeIconUser(abbreviationiconUser);
    });
});
