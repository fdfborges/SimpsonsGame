const buttonStart = document.getElementById("buttonStart");
const imageHomer = document.getElementById("imageHomer");
const imageBart = document.getElementById("imageBart");


const popupAudio = document.getElementById("popupAudio");
const popupAudioBtnYes = document.getElementById("popupAudioBtnYes");
const popupAudioBtnNo = document.getElementById("popupAudioBtnNo");
const audioIntroSimpsons = document.getElementById("audioIntroSimpsons");
const btnsound = document.getElementById("btnsound");
const btnsoundimg = document.getElementById("btnsoundimg");


document.addEventListener("DOMContentLoaded", ()=>{
    popupAudio.style.bottom = "26rem";
    popupAudio.style.transition = "2s";
});

popupAudioBtnYes.addEventListener('click', ()=>{
    respostaUsuario(true);
});

popupAudioBtnNo.addEventListener('click', ()=>{
    respostaUsuario(false)
})

function respostaUsuario(respostaUsuario){
    if(respostaUsuario == true){
        audioIntroSimpsons.currentTime = "1.5";
        audioIntroSimpsons.play();
        popupAudio.style.bottom = "46rem";
        popupAudio.style.transition = "2s";
       
        
    }else{
        audioIntroSimpsons.pause();
        popupAudio.style.bottom = "46rem";
        popupAudio.style.transition = "2s";
    }
}

buttonStart.addEventListener("click", ()=>{
    imageHomer.style.left = "40rem";
    imageHomer.style.transition = "1s";
    imageBart.style.top = "-40rem";
    imageBart.style.transition = "1s";
});

