function tocaSom (idElementAudio){
    const elemento = document.querySelector(idElementAudio);

    if(elemento != null && elemento.localName === 'audio'){
        elemento.play();
    }else{
        console.log('Elemento ou seletor inválido');
    }
    
}

    const listaDeTeclas = document.querySelectorAll('.tecla');

//definir variável que vai receber sempre um valor novo
let contador = 0;

//enquanto 
//nesse caso o while vai servir quando tem apenas sons de um tipo de instumento mas caso tivesse um piano, guitarra. pois para funcionar, depende de uma variável externa.
/*while(contador < listaDeTeclas.length){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];

    //template string
    const idAudio = `#som_${instrumento}`;
    //console.log(instrumento);

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    contador = contador + 1;

    //console.log(contador);
}*/

for(let contador = 0; contador < listaDeTeclas.length; contador++){

    const tecla = listaDeTeclas[contador];
    const instrumento = tecla.classList[1];
    const idAudio = `#som_${instrumento}`;//template string

    tecla.onclick = function(){
        tocaSom(idAudio);
    }

    tecla.onkeydown = function (event) {
    
        //Se a tecla pressionada for enter ou space, vai ativar a opção do som
        // utilizar "===" é o mais correto para utilizar em comparações de igualdade pois compara o valor e o tipo do dado.
        if(event.code === "Enter" || event.code === "Space"){
            tecla.classList.add('ativa');
        }
        
    }

    tecla.onkeyup = function(){

        tecla.classList.remove('ativa');
        
    }

}
