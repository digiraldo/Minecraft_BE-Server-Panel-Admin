let usersImgElements = document.getElementById("imgUser");
//console.log(usersImgElements);
let userIconActualBtn = document.getElementById("icon-default-img");
//console.log(userIconActualBtn);

let userIconButton = document.querySelectorAll("iconUser, [value]");
//console.log(userIconButton);

let changeImgIconUser = async iconImgUser => {
    userIconActualBtn.getElementsByTagName('img')[0].src = `panel/includes/img/perfil/${iconImgUser}.png`
};


usersImgElements.addEventListener('change', (event) => {
    let selectIconUser =  event.target.value;
    changeImgIconUser(selectIconUser);
    //console.log(selectIconUser)
    //localStorage.setItem("iconuser", selectIconUser)
});


