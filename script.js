
const paragrafo = document.getElementById("texto-sobre");
const palavras = paragrafo.innerText.split(" ");
paragrafo.innerHTML = palavras
    .map(p => `<span class="hover-palavra">${p}</span>`)
    .join(" ");
