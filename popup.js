// popup.js

document.addEventListener('DOMContentLoaded', function () {
    const appContainer = document.getElementById('app-container');
    const iframe = document.createElement('iframe');
    iframe.src = "https://kawaiipaxx.pythonanywhere.com";
    iframe.style.height = '900px';
    iframe.style.width = '1100px';
    iframe.style.display = 'block';
    appContainer.appendChild(iframe);
});
