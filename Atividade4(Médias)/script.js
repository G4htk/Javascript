let ipNumeroA = document.querySelector("#ipNumeroA");
let ipNumeroB = document.querySelector("#ipNumeroB");
let ipNumeroC = document.querySelector("#ipNumeroC");
let btMedias = document.querySelector("#btMedias");
let MediaA = document.querySelector("#MediaA");
let MediaB = document.querySelector("#MediaB");
let MediaC = document.querySelector("#MediaC");
let MediaD = document.querySelector("#MediaD");


function Media(){
    let A = Number(ipNumeroA.value);
    let B = Number(ipNumeroB.value);
    let C = Number(ipNumeroC.value);
    MediaA.textContent = (A + B + C) / 3;
    return (A + B + C) / 3;

}

function MediaPonderada(){
    let A = Number(ipNumeroA.value);
    let B = Number(ipNumeroB.value);
    let C = Number(ipNumeroC.value);
    
    MediaB.textContent = (A * 3 + B * 2 + C * 5) / (3 + 2 + 5);
    return (A * 3 + B * 2 + C * 5) / (2 + 3 + 5);
}

function SomaMedia(){
    let A = Number(ipNumeroA.value);
    let B = Number(ipNumeroB.value);
    let C = Number(ipNumeroC.value);
    let MediaA = Media()
    let MediaB = MediaPonderada()
    MediaC.textContent = (MediaA + MediaB)
    return (MediaA + MediaB)
}

function MediaMedia(){
    let A = Number(ipNumeroA.value);
    let B = Number(ipNumeroB.value);
    let C = Number(ipNumeroC.value);
    let MediaA = Media()
    let MediaB = MediaPonderada()
    let MediaC = SomaMedia()
    MediaD.textContent = (MediaA + MediaB + MediaC) / 3
}

btMedias.onclick = function(){
    Media(); MediaPonderada(); SomaMedia(); MediaMedia();
} 
