import { fightsChange, popupFight, closePopupFight } from "./fights.js";
import { popupMenu, popupMenuClose } from "./header";
import { openEditor, closeEditor, checkingInput } from "./editor";

const body = document.querySelector('body');

export const click = () => {
    body.addEventListener('click', (e) => {
        if (e.target.closest('.fights__button')) {
            fightsChange(e.target.closest('.fights__button'));
        } else if (e.target.closest('.fights-block__fight  ')) {
            popupFight(e.target.closest('.fights-block__fight  '));
        } else if (e.target.closest('.nav__item')) {
            popupMenu(e.target.closest('.nav__item'));
        } else if (e.target.closest('.fighter__edit_open')) {
            openEditor(e.target.closest('.fighter__edit_open'));
        } else if (e.target.closest('.fighter__edit_close')) {
            closeEditor(e.target.closest('.fighter__edit_close'));
        } else {
            closePopupFight();
            popupMenuClose();
        }
    })
}
export const input = () => {
    body.addEventListener('input', (e) => {
        if (e.target.closest('.fighter__weight')) {
            checkingInput(e.target.closest('.fighter__weight'));
        } else if (e.target.closest('.fighter__height')) {
            checkingInput(e.target.closest('.fighter__height'));
        }
    })
};