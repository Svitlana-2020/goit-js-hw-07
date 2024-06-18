const formLogin = document.querySelector(".login-form")
formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    const emailData = e.target.elements.email.value.trim();
    const passwordData = e.target.elements.password.value.trim();
if (emailData === "" || passwordData === "") {
    console.log('All form fields must be filled in');
}
else {
    console.log({email: emailData, password: passwordData
})
}
formLogin.reset();
})
