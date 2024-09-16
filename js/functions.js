const button = document.querySelector('button');
const table = document.querySelector('table');
const countParagraph = document.querySelector('p');

button.addEventListener('click', addNewRow);

let rowCount = 0;

function addNewRow() {
    const newRow = document.createElement('tr');

    for (let i = 0; i < 7; i++) {
        const newCell = document.createElement('td');
        newCell.textContent = Math.floor(Math.random() * 10);
        newRow.appendChild(newCell);
    }

    table.appendChild(newRow);

    rowCount++;
    countParagraph.textContent = `Valmiita rivejä: ${rowCount}`;
}