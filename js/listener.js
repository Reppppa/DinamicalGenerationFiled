/*toDO добавил функцию удаления строк*/

/*toDo добавил исключение при удалении первой строки, в случае, если она единственная на странице,
   она не удаляется, а значения внутри нее удаляются */

export const onChecked = (checkbox) => {
    checkbox.addEventListener("click", (evt) => {
        calculateSum();
    });
};

export const calculateSum = () => {
    let sum = 0;
    document.querySelectorAll('.checkbox').forEach((check) => {
        if (check.checked) {
            let value = parseInt(check.closest('.row').querySelector('.price').value);

            if (isNaN(value)) {
                value = 0;
            }
            sum += value;
        }
    });
    document.querySelector('.sum').innerHTML = sum;
};

export const addNumberLine = () => {
    document.querySelectorAll('.num').forEach((el, index) => {
        el.textContent = index;
    });
};

export const removeLine = (btn) => {
    btn.addEventListener("click", (evt) => {
        let tbody = document.querySelector('tbody');
        const parent = evt.target.closest('.row');
        let countElements = tbody.querySelectorAll(".row:not(.template-row)").length;
        if (countElements === 1) {
            parent.querySelectorAll('input[type=text]').forEach((input) => {
               input.value = "";
            });
        } else {
            parent.remove();
        }
        addNumberLine();
        calculateSum();
    });
};

export const priceChange = (input) => {
    input.addEventListener("change", (evt) => {
        calculateSum();
    });
}