
var greetingElement = document.getElementById('greeting');

greetingElement.textContent = `Olá, ${sessionStorage.getItem('name')}! Seja bem-vindo(a)!`;