function email() {
    const addresso = localStorage.getItem('address')
    const url = "https://script.google.com/macros/s/AKfycbw_29vz6yJ0NIVCDvkR3cDCr39zDDYhs4hlikmVAS5qAIIAo17xxv_4tQWWSsjD9mWDaw/exec"
    if (!addresso) {
        alert("you need to be logged in")
        return
    }
    fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
            address: addresso
        })
    })
    .then(() => {
        console.log("Sent")
    })
    .catch(err => console.error("Failed to send", err))
}