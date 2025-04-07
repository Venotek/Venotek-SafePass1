function gerarSenha() {
    const length = document.getElementById("length").value;
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()_-+=<>?";
    let senha = "";
    for (let i = 0; i < length; i++) {
      senha += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    document.getElementById("senhaGerada").innerText = "Senha gerada: " + senha;
  }
  
  function verificarSenha() {
    const senha = document.getElementById("senhaParaVerificar").value;
    let forca = 0;
  
    if (senha.length >= 8) forca++;
    if (/[A-Z]/.test(senha)) forca++;
    if (/[a-z]/.test(senha)) forca++;
    if (/\d/.test(senha)) forca++;
    if (/[\W]/.test(senha)) forca++;
  
    const resultado = document.getElementById("forcaSenha");
  
    if (forca <= 2) {
      resultado.innerHTML = "Força da senha: Fraca";
      resultado.style.color = "red";
    } else if (forca === 3 || forca === 4) {
      resultado.innerHTML = "Força da senha: Média";
      resultado.style.color = "orange";
    } else {
      resultado.innerHTML = "Força da senha: Forte";
      resultado.style.color = "lightgreen";
    }
  }
  