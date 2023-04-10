function tocaSom(idElementoAudio){
    const element = document.querySelector(idElementoAudio);

    if(element != null && element.localName === "audio"){
        element.play();
    }else{
        console.log("Elemento ou seletor não encontrado")
    }
}

const keyboardList = document.querySelectorAll('.tecla');


for (let contador = 0; contador < keyboardList.length; contador++){
    const key = keyboardList[contador];
    const sound = key.classList[1];
    const idAudio = `#som_${sound}`;

    key.onclick = function() {
        tocaSom(idAudio);
    }

    key.onkeydown = function(event){
        console.log(event)
        if(event.code === "Enter" || event.code === "Space"){
            key.classList.add('ativa');
        }
    }

    key.onkeyup = function(){
        key.classList.remove('ativa');
    }

}
