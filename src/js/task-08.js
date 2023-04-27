const form = document.querySelector('.login-form');

form.addEventListener('submit', (event) => {
  event.preventDefault(); 
    const {
    elements: { email, password }
  } = event.currentTarget;
  
    if (email.value === "" || password.value === "") {
        alert("Please fill in all the fields!");
    } else {
        const formData = {
            login: email.value,
            password: password.value
        };
        console.log(formData);
        form.reset();
    }
});

