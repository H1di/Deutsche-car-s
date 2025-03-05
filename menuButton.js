let menu_window = document.querySelector(".menu_window");
let flag = false;

function menuButton() {
    if (!flag) {
        menu_window.classList.add("open_menu_window");        
    }
} 


//closing menu window
function CloseMenuButton() {
    menu_window.classList.remove("open_menu_window");
    flag = false; // Меню закрыто, сбрасываем флаг
}