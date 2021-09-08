/*
let dropButton = document.querySelector('button')

dropButton.addEventListener('click', () => {
    dropButton.innerText = 'Lukk';


})
*/

function changeSelect() {
    if (document.getElementById('dropbtn').value == "Meny") {
        dropButton.innerText = 'Lukk';
    }
    else if (document.getElementById('dropbtn').value == "Lukk") {
        dropButton.innerText = 'Meny';
    }
}