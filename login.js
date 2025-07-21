// js/login.js
document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const usuario = document.getElementById('usuario').value;
  const senha = document.getElementById('senha').value;

  const usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  const usuarioValido = usuarios.find(u => u.usuario === usuario && u.senha === senha);

  if (usuarioValido) {
    localStorage.setItem('usuarioLogado', usuario);
    window.location.href = 'home.html';
  } else {
    document.getElementById('erro').textContent = 'Usuário ou senha inválidos.';
  }
});
