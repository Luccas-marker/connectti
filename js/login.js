document.getElementById('loginForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const email = document.getElementById('email').value.trim();
  const senha = document.getElementById('senha').value;

  let usuarios = JSON.parse(localStorage.getItem('usuarios')) || [];

  const usuarioValido = usuarios.find(u => u.email === email && u.senha === senha);

  if (usuarioValido) {
    // Marca o usuário logado
    usuarios = usuarios.map(u => ({
      ...u,
      logado: u.email === usuarioValido.email // true só para quem está logando
    }));

    localStorage.setItem('usuarios', JSON.stringify(usuarios));
    localStorage.setItem('usuarioLogado', usuarioValido.nome);
    window.location.href = 'home.html';
  } else {
    document.getElementById('erro').textContent = 'E-mail ou senha inválidos.';
  }
});
