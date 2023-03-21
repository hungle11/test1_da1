function changeTab(type) {
    let wrapperLogin = document.querySelector(".modal-body_wrapper-login")
    let wrapperRegister = document.querySelector(".modal-body_wrapper-register")
    if (type === "login") {
        wrapperLogin.classList.add("active");
        wrapperRegister.classList.remove("active");
    } else {
        wrapperLogin.classList.remove("active");
        wrapperRegister.classList.add("active");
    }
}

function showLargeMenu() {
    let menuLarge = document.querySelector(".menu-large");
    menuLarge.style.display = "block";
}

window.onload = () => {
    let mainMenu = document.querySelector(".main-menu");
    let menuItemNodes = document.querySelectorAll(".menu-item");
    let menuItems = Array.from(menuItemNodes)
    let totalWidthMenuItem = caculatorTotalWidth(menuItems);
    if (totalWidthMenuItem > mainMenu.clientWidth) {
        menuItems.reverse();
        for (let menu of menuItems) {
            if (!menu.classList.contains("btn-show-all")) {
                menu.classList.add("hidden");
            }
            let totalWidthMenuItem = caculatorTotalWidth(menuItems);
            if (totalWidthMenuItem < mainMenu.clientWidth) {
                break
            }
        }
    }
}

function caculatorTotalWidth(menuItems) {
    return menuItems.reduce((prev, curr) => {
        return prev + (curr.classList.contains("hidden") ? 0 : curr.clientWidth);
    }, 0)
}