function verResultado() {
  const checkboxes = document.querySelectorAll('input[type="checkbox"]:checked');
  const resultado = document.getElementById("resultado");

  if (checkboxes.length === 0) {
    resultado.innerText = "Escolha pelo menos uma opção 😅";
    return;
  }

  let mensagens = [];

  checkboxes.forEach(cb => {
    if (cb.value === "tecnologia") {
      mensagens.push("Você pode se dar bem com Programação ou Engenharia 💻");
    }
    if (cb.value === "criatividade") {
      mensagens.push("Design, Marketing ou Produção de Conteúdo combinam com você 🎨");
    }
    if (cb.value === "esportes") {
      mensagens.push("Educação Física ou carreira esportiva podem ser seu caminho ⚽");
    }
    if (cb.value === "ajudar") {
      mensagens.push("Psicologia, Medicina ou áreas sociais são fortes pra você ❤️");
    }
  });

  resultado.innerText = mensagens.join(" | ");
}

/* Ano automático */
document.getElementById("ano").innerText = new Date().getFullYear();
