let card = document.getElementById("card");

// Lista de áudios para o botão "Sim" e "Não"
const audiosSim = ["audios/sim-1.mp3", "audios/sim-2.mp3", "audios/sim-3.mp3", "audios/sim-4.mp3", "audios/sim-5.mp3", "audios/sim-6.mp3", "audios/sim-7.mp3", "audios/sim-8.mp3"];
const audiosNao = ["audios/nao-6.mp3"];

// Função para tocar áudio aleatório de uma lista
function playRandomAudio(audioList) {
    const randomIndex = Math.floor(Math.random() * audioList.length);
    const audio = new Audio(audioList[randomIndex]);
    audio.play().catch(error => console.error("Erro ao tocar áudio:", error));
}

// Evento para o botão "Sim" - ao clicar
document.querySelector("#yes").addEventListener("click", function () {
    let question = document.getElementById("question");
    let message = document.getElementById("answer");

    card.style.backgroundImage =
      "url('https://img1.picmix.com/output/stamp/normal/5/1/0/1/1171015_f458c.gif')";
    question.style.display = "none";
    message.style.display = "flex";

    playRandomAudio(audiosSim); // Toca um áudio aleatório para "Sim"
});

// Evento para o botão "Não" - ao passar o mouse
document.querySelector("#no").addEventListener('mouseover', function(){
    console.log("Mouse sobre o botão 'Não'"); // Diagnóstico do evento

    let width = window.innerWidth - 100; // Ajuste para evitar que saia da tela
    let height = window.innerHeight - 100;

    playRandomAudio(audiosNao); // Toca um áudio aleatório para "Não"
    
    // Posiciona o botão "Não" em um lugar aleatório na tela
    this.style.position = 'absolute';
    this.style.top = Math.random() * height + "px";
    this.style.left = Math.random() * width + "px";
});
