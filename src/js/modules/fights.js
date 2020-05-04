export const fightsChange = (button) => {
    button.classList.toggle('fights__button_active');
    [...button.parentNode.parentNode.children].forEach(item => item.closest(".fights-block") ? (item.style.display === 'none') ? item.style.display = 'flex' : item.style.display = 'none' : item);
    if (!!button.nextElementSibling) {
        button.nextElementSibling.classList.toggle('fights__button_active');
    } else {
        button.previousElementSibling.classList.toggle('fights__button_active');
    }
}
export const popupFight = (block) => {
    const popup = document.querySelector(`.popup-fighters_${block.parentNode.parentNode.className.match(/\d/)[0]}`);
    if (!block.classList.contains('check')) {
        [...block.parentNode.parentNode.children].forEach(item => [...item.children].forEach(i => i.classList.contains('check') ? i.classList.remove('check') : i));
        block.classList.add('check');
        block.lastElementChild.after(popup);
        popup.style.display = 'flex';
    } else {
        popup.style.display = 'none';
        block.classList.remove('check');
    }

}

export const closePopupFight = () => {
    document.querySelectorAll('.popup-fighters').forEach(item => item.style.display = 'none');
}