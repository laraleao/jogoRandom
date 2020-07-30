// criar um sistema, onde o usuário devera inserir um numero inteiro.

// O sistema ira executar uma função que gerara um numero randômico,

// e apresentar em quantas tentativas o sistema precisou para o numero

// randômico ser igual ao numero que foi inserido pelo usuário. Os números

// deverão aparecer no console.log e a quantidade de vezes executado devera

// ser apresentado para o usuário. Criar 2 cenários, o primeiro onde a aposta

// devera ser entre os números de 0 ate 9 (0,1,2,3,4,5,6,7,8,9) e o segundo

// onde a aposta devera ser entre os números 0 ate 99 (0,1,2,3,4,5...96,97,98,99)

function random() {
  const numeroInformado = document.getElementById("numero-primeiro-jogo").value;

  var contador = 0;
  // partindo de zero e impedidndo que insaram valores menor que 0 e maiores que 9
  while (numeroInformado < 0 || numeroInformado > 9) {
    window.alert("O número deve estar entre 0 e 9");
    return false;
  }
  for (i = 0; i < 10; i++) {
    contador = contador + 1;
    // mais 1 pois vai até 9
    var numeroRandom = Math.floor(Math.random() * 10);

    if (numeroInformado == numeroRandom) {
      console.log(contador + " Acertou");
      console.log(numeroRandom);

      // para limpar as respostas das exercuções
      var divResultados = document.getElementById("resultados-1");
      if (divResultados.innerHTML !== "") {
        divResultados.removeChild(divResultados.firstChild);
      }

      if (contador == 1) {
        // para o número randômico funcionar e responder no singular para 1
        var numeroResultado = document.createTextNode(
          `Seu número foi executado ${contador} vez`
        );
        // responder no plural
      } else {
        var numeroResultado = document.createTextNode(
          `Seu número foi executado ${contador} vezes`
        );
      }
      // criação div para mostrar resultado de quantas vez foi executado

      divResultados.appendChild(numeroResultado);

      break;
      // pausa no contador para não crachar a função
    } else {
      i--;
      // para ir até
      console.log(contador + " Tente de novo");
      console.log(numeroRandom);
    }
  }
}

function random2() {
  const numeroInformado = document.getElementById("numero-segundo-jogo").value;

  var contador = 0;
  // partindo de zero e impedidndo que insaram valores menor que 0 e maiores que 99
  while (numeroInformado < 0 || numeroInformado > 99) {
    window.alert("O número deve estar entre 0 e 99");
    return false;
  }
  for (i = 0; i < 100; i++) {
    contador = contador + 1;
    // mais 1 pois vai até 99
    var numeroRandom = Math.floor(Math.random() * 100);

    if (numeroInformado == numeroRandom) {
      console.log(contador + " Acertou");
      console.log(numeroRandom);

      // para limpar as respostas das exercuções
      var divResultados = document.getElementById("resultados-2");
      if (divResultados.innerHTML !== "") {
        divResultados.removeChild(divResultados.firstChild);
      }

      if (contador == 1) {
        // para o número randômico funcionar e responder no singular para 1
        var numeroResultado = document.createTextNode(
          `Seu número foi executado ${contador} vez`
        );
        // responder no plural
      } else {
        var numeroResultado = document.createTextNode(
          `Seu número foi executado ${contador} vezes`
        );
      }
      // criação div para mostrar resultado de quantas vez foi executado

      divResultados.appendChild(numeroResultado);

      break;
      // pausa no contador para não crachar a função
    } else {
      i--;
      // para ir até
      console.log(contador + " Tente de novo");
      console.log(numeroRandom);
    }
  }
}
