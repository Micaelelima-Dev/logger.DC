
var register = document.getElementById('register');

register.addEventListener('click', function () {

    var name = document.getElementById('name').value;
    var user = document.getElementById('userRegister').value;
    var password = document.getElementById('passwordRegister').value;

    sessionStorage.setItem('name', name);
    sessionStorage.setItem('userRegister', user);
    sessionStorage.setItem('passwordRegister', password);

    alert('Cadastro realizado com sucesso!');

    window.location.href = "../pages/login.html";

});