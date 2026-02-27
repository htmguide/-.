// Функция запуска конвертации
function processConversion(format) {
    const urlInput = document.getElementById('videoUrl'); [cite: 2026-02-27]
    const status = document.getElementById('status'); [cite: 2026-02-27]
    const url = urlInput.value.trim(); [cite: 2026-02-27]

    // 1. Проверяем, не пустой ли инпут
    if (!url) {
        alert('Please dont leave label empty!'); [cite: 2026-02-22]
        return;
    }

    // 2. Проверяем, что это реально Ютубчик
    if (!url.includes('youtube.com') && !url.includes('youtu.be')) {
        alert('This is not an YouTube URL, please give correct URL'); [cite: 2026-02-22]
        return;
    }

    // 3. Флексим статусом перед юзером
    status.style.color = '#00ff00'; [cite: 2026-02-27]
    status.innerHTML = `Connecting to api.ytmp3.tube for ${format.toUpperCase()}...`; [cite: 2026-02-27]

    // 4. Генерим ссылку для API
    // Кодируем URL, чтобы спецсимволы (&, ?) ничего не сломали
    const apiUrl = `https://api.ytmp3.tube/download?url=${encodeURIComponent(url)}&format=${format}`; [cite: 2026-02-27]

    // 5. Делаем небольшую паузу для солидности и редиректим
    setTimeout(() => {
        window.location.href = apiUrl; [cite: 2026-02-27]
    }, 1000);
}
