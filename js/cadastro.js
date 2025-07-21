// js/cadastro.js
document.getElementById('cadastroForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const novoUsuario = document.getElementById('novoUsuario').value;
  const novaSenha = document.getElementById('novaSenha').value;

  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  const usuarioExistente = usuarios.find(u => u.usuario === novoUsuario);

  if (usuarioExistente) {
    document.getElementById('cadastroMensagem').textContent = 'Usuário já existe!';
    document.getElementById('cadastroMensagem').style.color = 'red';
  } else {
    usuarios.push({ usuario: novoUsuario, senha: novaSenha });
    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    document.getElementById('cadastroMensagem').textContent = 'Cadastro realizado com sucesso!';
    document.getElementById('cadastroMensagem').style.color = 'green';
  }
});
