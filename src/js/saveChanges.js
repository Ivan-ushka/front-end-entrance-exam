function loadData() {
    const editableElements = document.querySelectorAll('[contenteditable="true"]');

    editableElements.forEach((element) => {
        const key = element.className ? element.classList[0] : element.tagName.toLowerCase();

        const storedValue = localStorage.getItem(key);

        element.textContent = storedValue !== null ? storedValue : element.textContent; // Если нет в localStorage, использовать из HTML
    });
}

function saveData(event) {
    const key = event.target.className ? event.target.classList[0] : event.target.tagName.toLowerCase();

    localStorage.setItem(key, event.target.textContent);
}

window.onload = loadData;

// Слушаем изменения только в редактируемых элементах

const editableElements = document.querySelectorAll('[contenteditable="true"]');

editableElements.forEach(element => {
    element.addEventListener('input', saveData);
});

