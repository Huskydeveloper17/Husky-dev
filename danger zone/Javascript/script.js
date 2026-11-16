/** @type {HTMLInputElement}*/
const country = localStorage.getItem('country');
const name = localStorage.getItem('name');
function submit() {
    const addressin = document.getElementById('mail');
    const address = addressin.value;
    if (address == localStorage.getItem('address')) {
        localStorage.removeItem('name');
        localStorage.removeItem('country');
        localStorage.removeItem('address');
        alert("Deleted");
        window.location.href = "../index.html";
    }
    else {
        alert("Didint match");
    }
}