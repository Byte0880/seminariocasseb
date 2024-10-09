document.addEventListener("DOMContentLoaded", function() {
    const messiImage = document.getElementById("messi-img");
    messiImage.addEventListener("click", function() {
        window.open("https://image-cdn-ak.spotifycdn.com/image/ab67706c0000da84302872ea0b7d69e6b7c7c40d", "_blank"); 
    });
});

function goat(params) {
    alert("Biografia do GOAT");
}

document.addEventListener("DOMContentLoaded", function() {
    const tituloCampeonatos = document.getElementById("tituloCampeonatos");

    tituloCampeonatos.addEventListener("click", function() {
        if (tituloCampeonatos.textContent == "Campeonatos") {
            tituloCampeonatos.textContent = "1,40m, o Cabra, 5x Copa Pistão, 12x Parazão, 5x Campeonato de Ping Pong CESUPA, 8x Programas em Portugol, 27x Bola de Ouro e careca, prazer Lionel Messi.";
        } else {
            tituloCampeonatos.textContent = "Campeonatos";
        }
    });
});