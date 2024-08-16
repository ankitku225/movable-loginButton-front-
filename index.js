const emailInput = document.getElementById('email')
const passwordInput = document.getElementById('password')
const loginButton = document.getElementById('button')

emailInput.addEventListener('input', validateForm);
passwordInput.addEventListener('input', validateForm);

loginButton.addEventListener('mouseover', function() {
    if (loginButton.disabled) {
        const randomX = Math.floor(Math.random() * 300);
        const randomY = Math.floor(Math.random() * 250);
        loginButton.style.transform = `translate(${randomX}px, ${randomY}px)`;
    }
});

loginButton.addEventListener('click', function() {
    if(!loginButton.disabled){
        window.location.href = 'Home.html'
    }
})


function validateForm() {
    if(emailInput.value && passwordInput.value) {
        loginButton.disabled = false;
        loginButton.style.transform = 'translate(0, 0)';
        
    } else {
        loginButton.disabled = true;
    }
}

