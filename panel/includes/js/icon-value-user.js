const usersImgElements = document.getElementById("imgUser");
//console.log(usersImgElements);
const userIconActualBtn = document.getElementById("icon-default-img");
//console.log(userIconActualBtn);

const userIconButton = document.querySelectorAll("iconUser, [value]");
//console.log(userIconButton);

const changeImgIconUser = async iconImgUser => {
    userIconActualBtn.getElementsByTagName('img')[0].src = `panel/includes/img/perfil/${iconImgUser}.png`
};


usersImgElements.addEventListener('change', (event) => {
    const selectIconUser =  event.target.value;
    changeImgIconUser(selectIconUser);
    //console.log(selectIconUser)
    //localStorage.setItem("iconuser", selectIconUser)
});


