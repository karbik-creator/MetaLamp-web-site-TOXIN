import './menu.scss'

let submenuItem = document.querySelectorAll('[data-type="submenu"]');
let subMenu;
submenuItem.forEach(item=>{
    item.addEventListener('focus',openMenu);
    item.addEventListener('blur',closeMenu);
})

function openMenu(event){
    subMenu = event.target.offsetParent.offsetParent;
    subMenu.classList.add('open');
}
function closeMenu() {
    subMenu.classList.remove('open');
}