window.addEventListener("load", function(){
  var game = new Game;
  game.initialize();

});
fu
      }
      //aleatori();
    }
  //
  }else{
    errores();
  }
//  alert("hola");
}
//es el principo del juego don controla que el nombre sea un nombre con solo letras
function mostrarInfo() {
  alert("Projecte - Joc de trilers \n Bienvenido");
   nomUser = prompt("Nombre: (Solo letras) ");
  var letras="abcdefghijklmnñopqrstuvwxyzç";
  if(nomUser!=null){
    for
}
//mostra missatge para iniciar el juego
function errores() {
  alert("[ F5 ] para continuar");
    haynombre=false;
}

function dificultat() {
   nivelldificltat = prompt("Nivel de dificultat: (0-baja, 1-media, 2-alta)");
   //si es diferent de null, osigui que cancela directament
   if(nivelldificltat!=null){
     //si la llargada de la variable es igual a 1, voldi que so pot escriu un numero
     if (nivelldificltat.length==1) {
       //Si el numero es 0, 1, o 2, llavor podrà accedir al joc
       if((nivelldificltat == 0 || nivelldificltat == 1 )|| nivelldificltat == 2 ){
          //inica el joc, por lo tanto activaremos la funcion
          if(nivelldificltat == 0){
            numGots =3;
          }else if (nivelldificltat == 1) {
            numGots =5;
          }else if (nivelldificltat == 2) {
            numGots =7;
          }
          iniciarsi = true;
          //iniciaJoc();
          console.log("hola1");
        }else{
          dificultat();
      }
    }else {
      mostrarInfo();
    }
    }else{
        mostrarInfo();
    }

}
//funcion que crea los objetos o los destruye segun lo que elijas
function iniciaJoc() {
  dinApostar();
  aleatori(numGots);
  var divgeneral=document.getElementById("board");
  for (var i = 0; i < numGots; i++) {
  //  console.log("y "+i);
    var got = document.createElement("div");
    var numgot = document.createTextNode(""+i);
    got.className = "beaker";
    got.id=""+i;
    got.addEventListener("click",function(e) {
      posarBoleta(e);
    });
    got.appendChild(numgot);
    divgeneral.appendChild(got);
  }
  var boton = document.createElement("button");
  var missatje = document.createTextNode("Remena i aposta!");
  boton.id="apostar";
  document.getElementById("general").appendChild(boton);
  boton.appendChild(missatje);

  boton.addEventListener("click",function() {

  for (var i = 0; i < numGots; i++) {
      var gotEliminar=document.getElementById(""+i);
      divgeneral.removeChild(gotEliminar);
    }
  numDeClics=0;
  clic=true;
  document.getElementById("general").removeChild(boton);
  //dificultat();
  iniciaJoc();
    //deberia de volver a resetearse// i volver a empezar
    //Que se recetee el numero de clics
  /**/

  });


}
//introduirem el numero de gots per aconsegui un numero aleatori
//aquest numero seria igual al numero del got
function aleatori(numero) {
    aleatorio = Math.round(Math.random()*numero);
    //  alert("Número aleatorio iguales "+aleatorio);
    if (numAnterior != aleatorio) {
      numAnterior=aleatorio;
      console.log("num "+aleatorio);
      //alert("Número aleatorio diferentes "+aleatorio);
      //return aleatorio;
    }else{
      aleatori(numero);
    }
}
//Aqui  saber on esta la boleta amagada dins de que got
function posarBoleta(e) {
//  console.log("has clicat el "+ e.target.getAttribute('id'));
  if (numDeClics==0) {
    //si guanya
    if (e.target.getAttribute('id')==aleatorio) {
      resultat("guany", "Felicitats :)");
    //  resultat("Felicitats :)");
    //si perd
    }else{
    //  resultat("Torna a provar! :S");
    resultat("perd", "Torna a provar! :S");

    }
    numDeClics=numDeClics+1;
  }
}

function resultat(value, missatje2) {
  //si se gana hara los calculos
  if(value=="guany"){
    if(nivelldificltat==0){
      dinGanados=diners*2;
    }else if(nivelldificltat==1){
      dinGanados=diners*5;
    }else if(nivelldificltat==2){
      dinGanados=diners*10;
    }
  }if(value=="perd"){
    //si pierde resta el dinero que tienes
      dinGanados=dinGanados-diners;
  }
  //como resultado mostrara este mensaje
  alert("Resultat:\n Nom: "+nomUser+"\n Dificultat: "+nivelldificltat+" \n Diners apostats "+diners+" \n Saldo actual "+ dinGanados+" \n "+missatje2);

}
function dinApostar() {
  diners=prompt("Diners a apostar ");
  if(diners==null){
    //si se clica cancelar se borron los obectos
    errores();
    document.getElementById("general").removeChild(document.getElementById("board"));
  }
}




//Pamela Loza


}
