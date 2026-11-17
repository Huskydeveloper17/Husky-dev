window.onload = function() {
    if (localStorage.getItem('name')) {
        const danger = document.getElementById('danger');
        danger.style.display = 'inline-block'
        const log = document.getElementById('log');
        log.style.display = 'none'
        const user = document.getElementById('username');
        user.textContent = "Username: " + String(localStorage.getItem('name'));
    }
    else {
        const danger = document.getElementById('danger');
        danger.style.display = 'none'
        const log = document.getElementById('log');
        log.style.display = 'inline-block'
        const user = document.getElementById('username');
        user.textContent = "new guy";
    }
}