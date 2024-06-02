let sidebar = document.querySelector(".sidebar");
let closeBtn = document.querySelector("#btn");
let searchBtn = document.querySelector(".bx-search");

closeBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange(); // Calling the function (optional)
});

searchBtn.addEventListener("click", () => {
    sidebar.classList.toggle("open");
    menuBtnChange(); // Calling the function (optional)
});

// Following are the code to change sidebar button (optional)
function menuBtnChange() {
    if(sidebar.classList.contains("open")){
        closeBtn.classList.replace("bx-menu", "bx-menu-alt-right"); // Replacing the icons class
    } else {
        closeBtn.classList.replace("bx-menu-alt-right","bx-menu"); // Replacing the icons class
    }
}
