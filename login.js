document.addEventListener("DOMContentLoaded", function() {
    const validUser = {
        username: "admin",
        password: "1234"
    };

    const loginForm = document.getElementById("loginForm");
    
    if (loginForm) {
        loginForm.addEventListener("submit", function(event) {
            event.preventDefault();

            const username = document.getElementById("username").value;
            const password = document.getElementById("password").value;
            const errorMessage = document.getElementById("errorMessage");

            if (username === validUser.username && password === validUser.password) {
                localStorage.setItem("auth", "true"); // Armazena o login bem-sucedido
                window.location.href = "home.html"; // Redireciona para a página principal
            } else {
                errorMessage.textContent = "Usuário ou senha incorretos!";
            }
        });
    }
});
