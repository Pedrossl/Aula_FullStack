async function carregaDados() {
  const response = await fetch("http://localhost:3003/viewers");
  console.log(response);
  const data = await response.json();
  console.log(data);
  console.log(data.viewer);
  const cartoes = document.getElementById("cartoes");
  console.log(cartoes);

  cartoes.innerHTML = data.viewer.map((item) => {
    return `<div class=${item.moderador == 1 ? "cardDourado" : "card"}>
            <img src="${item.foto}" alt="Imgem do usuario">
            <div class="corpo-cartao">
                <h2>${item.nick}</h2>
                <h3>${item.nome}</h3>
                <p>Moderador: ${item.moderador == 1 ? "sim" : "não"}</p>
            </div>
        </div>`;
  });
}
carregaDados();
