document.addEventListener("DOMContentLoaded", function () {
    if (localStorage.getItem("auth") !== "true") {
        window.location.href = "login.html"; // Redireciona para o login se não estiver autenticado
    }
});
function logout() {
    localStorage.removeItem("auth"); // Remove a autenticação
    window.location.href = "login.html"; // Redireciona para a página de login
}
