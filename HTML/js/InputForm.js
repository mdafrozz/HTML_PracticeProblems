const text = document.querySelector('#text');
const textError = document.querySelector('.text-error');

text.addEventListener('input', function () {
    let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
    if (nameRegex.test(text.value))
        textError.textContent = "";
    else textError.textContent = "First Name is incorrect";
});

const email = document.querySelector('#email');
const emailError = document.querySelector('.email-error');

email.addEventListener('input', function () {
    let emailRegex = RegExp('[a-z0-9]+@[a-z]+\.[a-z]{2,3}');
    if (emailRegex.test(email.value))
        emailError.textContent = "";
    else emailError.textContent = "Email is incorrect";
});

const phone = document.querySelector('#phone');
const phoneError = document.querySelector('.phone-error');

phone.addEventListener('input', function () {
    let phoneRegex = RegExp('^[0-9]{2} [0-9]{10}$');
        if (phoneRegex.test(phone.value))
        phoneError.textContent = "";
    else phoneError.textContent = "Mobile No is incorrect";
});