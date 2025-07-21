// js/login.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  const usuarioValido = usuarios.find(u => u.email === email && u.senha === senha);

  if (usuarioValido) {
    // Salva o nome do usuário logado
    localStorage.setItem('usuarioLogado', usuarioValido.nome);
    window.location.href = 'home.html';
  } else {
    document.getElementById('erro').textContent = 'E-mail ou senha inválidos.';
  }
});
