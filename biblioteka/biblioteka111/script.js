// Функция для загрузки данных из JSON файла
async function loadJSON(url) {
    try {
        const response = await fetch(url); // Отправляем GET запрос на указанный URL
        if (!response.ok) throw new Error('Ошибка сети'); // Проверяем, успешен ли ответ
        return await response.json(); // Возвращаем данные в формате JSON
    } catch (error) {
        console.error('Ошибка при загрузке JSON:', error); // Выводим ошибку в консоль
        throw error; // Прокидываем ошибку выше
    }
}

// Функция для отображения данных на странице
function displayData(data) {
    const container = document.getElementById('data-container'); // Получаем контейнер для данных
    container.innerHTML = ''; // Очищаем контейнер перед добавлением новых данных

    data.forEach(item => {
        const div = document.createElement('div'); // Создаем новый элемент div для каждого элемента данных
        div.textContent = `Название: ${item.name}, Возраст: ${item.age}`; // Устанавливаем текст для элемента
        container.appendChild(div); // Добавляем элемент в контейнер
    });
}

// Основная функция, которая запускает загрузку и отображение данных
async function init() {
    const data = await loadJSON('data.json'); // Загружаем данные из JSON файла
    displayData(data); // Отображаем загруженные данные
}

// Вызываем основную функцию при загрузке страницы
window.onload = init;