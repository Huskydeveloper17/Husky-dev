function email() {
    const addresso = localStorage.getItem('address')
    const url = "https://script.google.com/macros/s/AKfycbw_29vz6yJ0NIVCDvkR3cDCr39zDDYhs4hlikmVAS5qAIIAo17xxv_4tQWWSsjD9mWDaw/exec"
    try {
    fetch(url, {
        method: "POST",
        mode: "no-cors",
        body: JSON.stringify({
            address: addresso
        })
    })
    }
    catch {
        alert("Cannot send")
    }
}