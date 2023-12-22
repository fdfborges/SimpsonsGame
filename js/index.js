const titleandsubt = document.getElementById("titleandsubt");
const buttonStart = document.getElementById("buttonStart");
const buttonStartAudio = document.getElementById("buttonStartAudio");
const imageHomer = document.getElementById("imageHomer");
const imageBart = document.getElementById("imageBart");


const popupAudio = document.getElementById("popupAudio");
const popupAudioBtnYes = document.getElementById("popupAudioBtnYes");
const popupAudioBtnNo = document.getElementById("popupAudioBtnNo");
const audioIntroSimpsons = document.getElementById("audioIntroSimpsons");
const btnsound = document.getElementById("btnsound");
const btnsoundimg = document.getElementById("btnsoundimg");

const titleDificulty = document.getElementById("titleDificulty");
const dificultyFacil = document.getElementById("dificulty-facil");
const dificultyMedia = document.getElementById("dificulty-medio");
const dificultyDificil = document.getElementById("dificulty-dificil");

const dificultyFacilImg = document.getElementById("dificulty-Facil-Img");
const dificultyFacilButton = document.getElementById("dificulty-facil-button")

const dificultyMedioImg = document.getElementById("dificulty-medio-img");
const dificultyMedioButton = document.getElementById("dificulty-medio-button");

const dificultyDificilImg = document.getElementById("dificulty-dificil-img");
const dificultyDificilButton = document.getElementById("dificulty-dificil-button");


document.addEventListener("DOMContentLoaded", ()=>{
    popupAudio.style.bottom = "36rem";
    popupAudio.style.transition = "1.3s";
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
        popupAudio.style.bottom = "50rem";
        popupAudio.style.transition = "1s";
        buttonStartAudio.remove();
        buttonStart.removeAttribute('disabled');
        
       
        
    }else{
        audioIntroSimpsons.pause();
        popupAudio.style.bottom = "50rem";
        popupAudio.style.transition = "1s";
        buttonStartAudio.remove();
        buttonStart.removeAttribute('disabled');
        
    }
}

buttonStartAudio.addEventListener('click', () => {
    popupAudio.classList.add('popup-audio');
    setTimeout(() => {
        popupAudio.classList.remove('popup-audio');
    }, 500);
});

buttonStart.addEventListener("click", ()=>{
    imageHomer.style.left = "40rem";
    imageHomer.style.transition = "1s";
    imageBart.style.top = "-40rem";
    imageBart.style.transition = "1s";

    titleandsubt.style.transition = '1s';
    titleandsubt.style.marginBottom = '30rem';
    buttonStart.remove();
    
    titleDificulty.style.transition = '2s'
    titleDificulty.style.visibility = "visible";
    titleDificulty.style.opacity = "100%"
    
    dificultyFacil.style.transition = "1s"
    dificultyFacil.style.bottom = "0rem";
    dificultyMedia.style.transition = "1s"
    dificultyMedia.style.bottom = "0rem";
    dificultyDificil.style.transition = "1s"
    dificultyDificil.style.bottom = "0rem";
   
    
});


dificultyFacilButton.addEventListener('click', () => {
    resetOpacity(); 
    dificultyFacilImg.style.opacity = '100%'; 
});

dificultyMedioButton.addEventListener('click', () => {
    resetOpacity();
    dificultyMedioImg.style.opacity = '100%';
});

dificultyDificilButton.addEventListener('click', () => {
    resetOpacity();
    dificultyDificilImg.style.opacity = '100%';
});


function resetOpacity() {
    dificultyFacilImg.style.opacity = '70%';
    dificultyMedioImg.style.opacity = '70%';
    dificultyDificilImg.style.opacity = '70%';
}
