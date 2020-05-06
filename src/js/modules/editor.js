const [maxHeight, minHeight, maxWeight, minWeight] = [220, 150, 150, 60];
//Запрет ввода роста больше 299
const replacer1 = (match, p1, p2, p3) => {
    if (!(p1 === "1" || p1 === "2")) {
        return "";
    } else if (!!p2) {
        if (!!p3) {
            return p1 + p2 + p3;
        } else {
            return p1 + p2;
        }
    } else {
        return p1;
    }
};
//Запрет ввода веса больше 199
const replacer2 = (match, p1, p2, p3) => {
    if (!!p3) {
        if (p1 === "1") {
            return p1 + p2 + p3;
        } else {
            return p1 + p2;
        }

    } else {
        if (!!p2) {
            return p1 + p2;
        } else {
            return p1;
        }
    }
};
const error = document.querySelector('.popupError');
export const openEditor = (button) => {
    [...button.parentNode.children].forEach(item => {
        item.classList.contains('fighter__parametrs') ?
            item.classList.toggle('fighter__parametrs_none') :
            item.classList.contains('fighter__edit') ? item.classList.toggle('fighter__edit_none') : item;
    });

};

export const closeEditor = (button) => {
    if ([...button.parentNode.children].some(item => {
            return [...item.children].some(i => {
                if (!!i.firstElementChild) {
                    if (!!i.firstElementChild.firstElementChild) {
                        return i.firstElementChild.firstElementChild.classList.contains('error');
                    }
                } else {
                    return false;
                }
            })
        })) {
        button.style.disabled = "true";
        button.parentNode.after(error);
        error.style.display = 'block';
    } else {
        button.style.disabled = "false";
        error.style.display = 'none';
        const weight = button.parentNode.querySelector('.fighter__weight_show'),
            height = button.parentNode.querySelector('.fighter__height_show'),
            weightInput = button.parentNode.querySelector('.fighter__weight_cont'),
            heightInput = button.parentNode.querySelector('.fighter__height_cont');
        if (!!weight.innerHTML) {
            weight.innerHTML = `Вес: ${weightInput.value} кг`;
            weightInput.value = "";
        }
        if (!!height.innerHTML) {
            height.innerHTML = `Рост: ${heightInput.value} см`;
            heightInput.value = "";
        }

        [...button.parentNode.children].forEach(item => {
            item.classList.contains('fighter__parametrs') ?
                item.classList.toggle('fighter__parametrs_none') :
                item.classList.contains('fighter__edit') ? item.classList.toggle('fighter__edit_none') : item;
        });
    }

};

export const checkingInput = (input) => {
    if (input.classList.contains('fighter__weight')) {
        input.value = input.value.replace(/[^\d]/g, "");
        input.value = input.value.replace(/(^\d)(\d)?(\d)?.*/g, replacer2)
        if (!(+input.value > minWeight && +input.value < maxWeight)) {
            input.style.color = "red";
            input.classList.add('error');
        } else {
            input.style.color = "black";
            input.classList.remove('error');
        }
    } else if (input.classList.contains('fighter__height')) {
        input.value = input.value.replace(/[^\d]/g, "");
        input.value = input.value.replace(/(^\d)(\d)?(\d)?.*/g, replacer1);
        if (!(+input.value > minHeight && +input.value < maxHeight)) {
            input.style.color = "red";
            input.classList.add('error');
        } else {
            input.style.color = "black";
            input.classList.remove('error');
        }
    }
};