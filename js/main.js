const inputText = document.querySelector('.input_text');
const listDiv = document.querySelector('.list');
const addButton = document.querySelector(".add_but");
const cancelButton = document.querySelector(".cancel_button");
const modalB = document.querySelector('.modal-back');
const modalTxt = document.querySelector('.modal-text');
const modalW = document.querySelector('.modal-window');

function addText() {
    const newList = document.createElement("div");
    newList.className = 'newLi';
    const checkBox = document.createElement('input');
    const changeButton = document.createElement('input');
    const text = document.createElement('label');
    text.className = 'textLi';
    changeButton.className = 'changeTxt';
    changeButton.value = 'Delete task';
    checkBox.type = 'checkbox';
    changeButton.type = 'button';

    text.innerHTML = inputText.value;

    newList.appendChild(checkBox);
    newList.appendChild(text);
    newList.appendChild(changeButton);
    listDiv.appendChild(newList);

    function delB() {
        return listDiv.removeChild(newList);
    }
    changeButton.addEventListener('click', delB);

    if (inputText.value == null || inputText.value == '' || inputText.value == undefined ) {
        listDiv.removeChild(newList);
            modalB.style.display = 'flex';
            modalB.onclick = function () {
                const target = event.target;
                if(target !== modalW && target !== modalTxt) {
                     modalB.style.display = 'none';
                }
            }
    } else {
        return listDiv;

    }
}

function removeTxt() {
    return inputText.value = '';
}

addButton.addEventListener('click', addText);
cancelButton.addEventListener('click', removeTxt);



