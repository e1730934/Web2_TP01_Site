
const form = document.getElementById("contact-form");
form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(`${e.target.name.value} ${e.target.email.value} ${e.target.message.value}`);
})
