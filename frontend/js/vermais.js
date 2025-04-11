const params = new URLSearchParams(window.location.search);
const id = params.get("id");
async function getViewerById() {
  const response = await fetch(`http://localhost:3003/viewer/${id}`);
  const data = await response.json();
  const vermais = document.getElementById("vermais");
  vermais.innerHTML = `
       <div class="${data.moderador === 1 ? "cardDourado" : "card"}">
            <img src="${data.foto}" alt="">
            <div class="card-body">
                <h2>${data.nome}</h2>
                <h3>${data.nick}</h3>
                <h3>Moderador: ${data.moderador}</h3>
            </div>
        </div>
  `;
}
getViewerById();
