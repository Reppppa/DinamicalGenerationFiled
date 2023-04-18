/*toDO поправить нейминг функций и переменных*/

import {onChecked, addNumberLine, priceChange, removeLine} from "./listener.js";

const init = () => {

    let addButton = document.querySelector('.add_button');

    document.querySelectorAll('.row').forEach((el) => {
        removeLine(el.querySelector('.deleted_button'));
        onChecked(el.querySelector('.checkbox'));
        priceChange(el.querySelector('.price'));
    });

    addButton.addEventListener("click", (evt) => {
        let tbody = document.querySelector('tbody');
        const template = document.querySelector('.template-row').cloneNode(true);
        const newEl = tbody.appendChild(template);
        newEl.classList.remove('template-row')

        onChecked(newEl.querySelector('.checkbox'));
        removeLine(newEl.querySelector('.deleted_button'));
        priceChange(newEl.querySelector('.price'));
        addNumberLine();
    });
};

init();

