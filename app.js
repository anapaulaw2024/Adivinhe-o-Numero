alert('Bem-vind@s ao jogo Adivinhe o Número!')
let numeroSecreto= parseInt(Math.random() * numeroMaximo + 1)
let chute;
let tentativas = 1;
let numeroMaximo = 100;

while (chute != numeroSecreto) {
chute = prompt(`Digite um número entre 1 e ${numeroMaximo}`);
    if (chute == numeroSecreto ){
        break;
        
    }
    if(chute > numeroSecreto){
        alert(`O número secreto é menor que ${chute}`);
}
    else{
        alert(`O número secreto é maior que ${chute}`);
    }
    ///tentativas = tentativas + 1;
    tentativas ++
    
}
let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa'
alert(`Você acertou o número${numeroSecreto}com${tentativas}${palavraTentativa}`);
