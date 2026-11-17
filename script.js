const account = document.getElementById('support');
window.onload = check();
function check() {
    if (localStorage.getItem('support')) {
        account.textContent = "unfollow";
        account.style.backgroundColor = "darkred";
    }
    else {
        account.textContent = "Follow";
        account.style.backgroundColor = "red";
    }
}
function follow() {
    if (account.textContent == "Follow") {
        account.textContent = "unfollow"
        account.style.backgroundColor = "darkred";
        if (localStorage.getItem('name')) {
            localStorage.setItem('support', true)
        }
    }
    else {
        account.style.backgroundColor = "red";
        account.textContent = "Follow";
        if (localStorage.getItem('name')) {
            localStorage.removeItem('support')
        }
    }
}