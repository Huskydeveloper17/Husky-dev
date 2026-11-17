function deletelahat() {
    try {
        localStorage.removeItem('name')
        localStorage.removeItem('address')
        localStorage.removeItem('country')
        location.reload()
    }
    catch {
        alert("We cannot do the action")
    }
}
window.onload = function() {
    if (localStorage.getItem('name')) {
        del.style.display = 'inline-block';
        const bro = document.getElementById('bro');
        bro.textContent = "Hello " + String(localStorage.getItem('name'));
    }
    else {
        const del = document.getElementById('del');
        del.style.display = 'none';
        const bro = document.getElementById('bro');
        bro.textContent = "Hello bro";
    }
};
function Handle() {
    /**@type {HTMLInputElement} */
    const country = document.getElementById('Country').value;
    const address = document.getElementById('address').value;
    const name = document.getElementById('Name').value;

    Alerted(country, address, name)
}
function Alerted(country, address, name) {
    if(!localStorage.getItem('country') && !localStorage.getItem('name')) {
    localStorage.setItem('country', country)
    localStorage.setItem('address', address)
    localStorage.setItem('name', name)
    const del = document.getElementById('del');
    del.style.display = 'inline-block';
    const bro = document.getElementById('bro');
    bro.textContent = "Hello " + localStorage.getItem('name');
    window.location.href = "../index.html"
    }
    else {
        alert("this is already existed");
    }
}