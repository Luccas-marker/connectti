// js/cadastro.js
document.getElementById('cadastroForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const nome = document.getElementById('nome').value.trim();
  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;

  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  const usuarioExistente = usuarios.find(u => u.email === email);

  const msg = document.getElementById('cadastroMensagem');

  if (usuarioExistente) {
    msg.textContent = 'Já existe um usuário com esse e-mail.';
    msg.style.color = 'red';
  } else {
    usuarios.push({ nome, email, senha });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    msg.textContent = 'Cadastro realizado com sucesso!';
    msg.style.color = 'green';
    document.getElementById('cadastroForm').reset();
  }
});
