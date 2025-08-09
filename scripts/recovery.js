
var recovery = document.getElementById("recovery");

recovery.addEventListener("click", function () {

    var newPassword = document.getElementById("passwordRecovery").value;
    var ConfirmNewPassword = document.getElementById("passwordConfirmRecovery").value;


    if (newPassword != ConfirmNewPassword) {
        alert("Certifique-se de que ambas senhas sejam iguais.");
        return;
    }

    sessionStorage.setItem("password", newPassword);

    alert("Senha recuperada com sucesso!");

    window.location.href = "../pages/login.html";

});