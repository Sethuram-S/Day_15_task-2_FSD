const dataUrl = 'https://gist.github.com/rvsp/add40254aa126f045837fa5b51f47f1f';

let currentPage = 1;
const itemsPerPage = 10;

async function fetchData() {
    const response = await fetch(dataUrl);
    const data = await response.json();
    return data;
}

function renderPagination(totalItems) {
    const totalPages = Math.ceil(totalItems / itemsPerPage);
    const paginationContainer = document.getElementById('buttons');
    paginationContainer.innerHTML = '';
    
    const firstButton = createButton('First', () => {
        currentPage = 1;
        renderItems();
        highlightCurrentPage();
    });
    const prevButton = createButton('Previous', () => {
        if (currentPage > 1) {
            currentPage--;
            renderItems();
            highlightCurrentPage();
        }
    });
    const nextButton = createButton('Next', () => {
        if (currentPage < totalPages) {
            currentPage++;
            renderItems();
            highlightCurrentPage();
        }
    });
    const lastButton = createButton('Last', () => {
        currentPage = totalPages;
        renderItems();
        highlightCurrentPage();
    });

    paginationContainer.appendChild(firstButton);
    paginationContainer.appendChild(prevButton);

    for (let i = 1; i <= totalPages; i++) {
        const pageButton = createButton(i, () => {
            currentPage = i;
            renderItems();
            highlightCurrentPage();
        });
        paginationContainer.appendChild(pageButton);
    }

    paginationContainer.appendChild(nextButton);
    paginationContainer.appendChild(lastButton);
}

function createButton(text, onClick) {
    const button = document.createElement('button');
    button.className = 'btn btn-primary';
    button.textContent = text;
    button.addEventListener('click', onClick);
    return button;
}

function renderItems(items) {
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;
    const itemsToDisplay = items.slice(start, end);

    const itemsContainer = document.getElementById('items-container');
    itemsContainer.innerHTML = '';

    itemsToDisplay.forEach((item, index) => {
        const row = document.createElement('tr');

        const indexCell = document.createElement('td');
        indexCell.textContent = start + index + 1;
        row.appendChild(indexCell);

        const nameCell = document.createElement('td');
        nameCell.textContent = item.name;
        row.appendChild(nameCell);

        const emailCell = document.createElement('td');
        emailCell.textContent = item.email;
        row.appendChild(emailCell);

        itemsContainer.appendChild(row);
    });
}

function highlightCurrentPage() {
    const buttons = document.querySelectorAll('#buttons button');
    buttons.forEach(button => {
        button.classList.remove('active');
        if (button.textContent == currentPage) {
            button.classList.add('active');
        }
    });
}

async function init() {
    const data = await fetchData();
    renderItems(data);
    renderPagination(data.length);
    highlightCurrentPage();
}

document.addEventListener('DOMContentLoaded', init);