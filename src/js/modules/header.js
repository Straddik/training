const menu = document.querySelector('.popup-types');
const nav = document.querySelector('.nav');

export const popupMenu = (item) => {
    item.append(menu);
    if (!item.classList.contains('nav__item_choozen')) {
        [...item.parentNode.children].forEach(i => i.classList.remove('nav__item_choozen'))
        item.classList.toggle('nav__item_choozen');
        menu.style.display = 'flex';
    } else {
        item.classList.remove('nav__item_choozen');
        menu.style.display = 'none';
    }
};
export const popupMenuClose = () => {
    menu.style.display = 'none';
    [...nav.children].forEach(i => i.classList.remove('nav__item_choozen'))

};