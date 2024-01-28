const btn = document.querySelector("#send");
btn.addEventListener('click', function (e) {
  e.preventDefault();

  const Linguagens = document.getElementById("#NotaLinguagens")
  const NotaDLinguagens = Linguagens.value;

  const Humanas = document.getElementById('#NotaHumanas')
  const NotaDHumanas = Humanas.value;

  const Natureza = document.getElementById("#NotaNatureza")
  const NotaDNatureza = Natureza.value;

  const Matematica = document.getElementById("#NotaMatematica")
  const NotaDMatematica = Matematica.value;

  const Redacao = document.getElementById("#NotaRedacao")
  const NotaDRedacao = Redacao.value;


  const NotaDRedacaoN = parseFloat(NotaDRedacao);
  const NotaDNaturezaN = parseFloat(NotaDNatureza);
  const NotaDMatematicaN = parseFloat(NotaDMatematica);
  const NotaDLinguagensN = parseFloat(NotaDLinguagens);
  const NotaDHumanasN = parseFloat(NotaDHumanas);


  let Media = (NotaDHumanasN + NotaDLinguagensN + NotaDNaturezaN + NotaDMatematicaN) / 4;

  let MediaCR0 = (NotaDHumanasN + NotaDLinguagensN + NotaDNaturezaN + NotaDMatematicaN + NotaDRedacaoN) / 4; 
  if (Media >= 450 && NotaDRedacaoN > 0) {
    console.log("Nota Boa");
  } else {
    console.log("Nota Ruim");
  }
  

 

   let MediaSR = document.querySelector("#MediaSR")

   MediaSR.innerHTML = Media

   let MediaCR = document.querySelector("#MediaCR")

   MediaCR.innerHTML = MediaCR0

   let NRedacao = document.querySelector("#NRedacao")
   NRedacao.innerHTML = NotaDRedacaoN




   if (Media >= 450 && NotaDRedacaoN > 0){

    document.querySelector("#ReacaoBoa").style.display = "block"
    document.querySelector("#ReacaoRuim").style.display = "none"
    document.querySelector(".imagem_RB").style.display = "block"
    document.querySelector(".imagem_RR").style.display = "none"
    document.querySelector("#ReacaopB").style.display ="block"
    document.querySelector("#ReacaopR").style.display ="none"

  }else{
    document.querySelector("#ReacaoRuim").style.display = "block"
    document.querySelector("#ReacaoBoa").style.display = "none"
    document.querySelector(".imagem_RR").style.display = "block"
    document.querySelector(".imagem_RB").style.display = "none"
    document.querySelector("#ReacaopR").style.display ="block"
    document.querySelector("#ReacaopB").style.display ="none"
   }

   if (MediaCR0 >= 0) {
     document.querySelector("#resultadovalido").style.display = "block"
     document.querySelector("#resultadoinvalido").style.display = "none"
    } else {
      document.querySelector("#resultadoinvalido").style.display = "block"
      document.querySelector("#resultadovalido").style.display = "none"
   }
});

const btnvernota = document.querySelector("#abrirnotas");
btnvernota.addEventListener('click', function () {
  document.querySelector("#inputnotas").style.display = "block"  
  document.querySelector("#abrirnotas").style.display = "none"

})
