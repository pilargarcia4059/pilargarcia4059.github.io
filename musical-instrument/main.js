console.log("hola")
const myName = "Pilar";
// myName="Pilar";
let myAge = 16;
let x = 8;
let y = 4;
const likesMusic = true;
console.log("myName", myName);
console.log("myAge", myAge);
console.log("x", "x");
console.log("y", y);
console.log("likesMusic", likesMusic);

console.log("myName es de tipo", typeof myName);
console.log("myAge es de tipo", typeof myAge);
console.log("myAge es de tipo", typeof x);
console.log("myAge es de tipo", typeof y);
console.log("likesMusic es de tipo", typeof likesMusic);


let z;
//Operador aritmetico de suma
z = x + y;
console.log("La suma de " + x + " y " + y + " es  " + z);

//Operador aritmetico de resta;
z = x - y;
console.log("La resta de " + x + " menos " + y + " es  " + z);
//Operador artmetico de division
z = x / y;
console.log("La divion de " + x + " entre " + y + " es " + z);
//Operador artmetico de division
z = x / y;
console.log("La divion de " + y + " entre " + x + " es " + z);


//Operador aritmetico de multipicacion
z = x * y;
console.log("La multiplicion de " + x + " por " + y + " es " + z);

let num = "16";
//Operadores aritmeticos adicionales;
//console.log(Operador de incremento" ,x++);
//console.log(Operador de decremento" ,x--);
x++;
console.log("Operador de incremento", x);
x--;
console.log("Operador de decremento", x);
console.log("Operador de negacion unaria", -x);
console.log("Operador de la suma unaria", +num);

//Operadores de coomparacion.
console.log("x vale " + x + " y vale " + y);
console.log("Operador de igualdad", x == y);
console.log("Operador de igualdad estricta", x === y);
console.log("Operador de desigualdad", x != y);
console.log("Operador de desigualdad estricta", x !== y);
console.log("Operador mayor que", x > y);
console.log("Operador mayor igual que", x >= y);
console.log("Operador menor que", x < y);
console.log("Operador menor igual que", x <= y);

if (likesMusic === true) {
  console.log("Me gusta la musica");
} else {
  console.log("No me gusta la musica");
}


let compraRealizada = false;
let pisoBarrido = true;
let dinero;
//Si mi hermanito me realizo la compra o Barrio el piso
if (compraRealizada === true || pisoBarrido === true) {
  //Le doy 10 pesos
  dinero = 10;

} else {
  dinero = 5;
}



console.log("El dienero de mi hermanito es: ", dinero);


let compraRealizada2 = false;
let pisoBarrido2 = true;
let dinero2;
//Si mi hermanito me realizo la compra o Barrio el piso
if (compraRealizada2 === true || pisoBarrido2 === true) {
  //Le doy 20 pesos
  let dinero2 = 20;

}
else {
  dinero2 = 0;
}

console.log("El dienero de mi hermanito es:", dinero);



// YOB = Year of Birth
let YOB = 2006;
const d = new Date();
// CY = Current Year
let CY = d.getFullYear();

for (let year = YOB; year <= CY; year++) {
  if (year == YOB) {
    console.log('En ' + year + ' yo nací');
  } else if (year - YOB == 1) {
    console.log('En ' + year + ' yo tenía ' + (year - YOB) + ' año');
  } else if (year == CY) {
    console.log('En el ' + year + ' yo tengo' + (year - YOB) + ' años');
  } else {
    console.log('En ' + year + ' yo tenía ' + (year - YOB) + ' años');
  }
}



{

  let year = YOB; //2006

  let currentYear = 2022;


  while (year < 2022) {
    if (year === YOB) {
      console.log("En " + year + " yo naci ");
    } else if (year == CY) {
      console.log('En el ' + year + ' yo tengo' + (year - YOB) + ' años');
    } else {
      let age = year - YOB
      console.log("En " + year + " yo tenia " + age + "años");

    }
    year++;
  }



}



function aCelsius(fahrenheit) {

  // return(fahrenheit-32) /1.8;
  //}

  const aCelsius = (fahrenheit) => (fahrenheit - 32) / 1.8;

  console.log(aCelsius(100));
  

}

function playNote(key) {
  //Obtener la nota
  const noteAudio = document.getElementById(key.dataset.note);
 
  //Resetear la ejecucion de la nota

  // Utilizar metodo play() de la nota
  noteAudio.play();

  //Añadimos clase active
  key.classList.add("active");

  //Agregamos un event listener al estado ended del evento keydown
  noteAudio.addEventListener|"ended",() =>{
  //Cuando termine de reproducirse el sonido, removemosm clase active
  key.classList.remove("active");
//}};
}
}

const WHITE_KEYS =["z","x", "c","v", "b", "n", "m"];
const BLACK_KEYS = ["s", "d", "g", "h", "j"];

const keys = document.querySelectorAll('.key');
const whiteKeys = document.querySelectorAll('.key.white');
const blackKeys = document.querySelectorAll('.key.black');


const nameElement = document.querySelector("#name");
const ageElement = document.querySelector("#age");
const likesMusicElement = document.querySelector("#likesMusic");



console.log("nameElement", nameElement);
console.log("ageElement", ageElement);
console.log("likesMusicElement", likesMusicElement);

console.log(nameElement);
nameElement.textContent=myName;
ageElement.textContent=myAge;

 if (likesMusic== true)  {
  likesMusicElement.textContent="Me gusta la musica";}
  else{
     likesMusicElement.textContent="No me gusta la musica";
  }



const body= document.querySelector("body");
const text = document.createElement("p");
text.textContent="hola desde el DOM";

body.appendChild(text);

body.removeChild(text);

document.addEventListener("keydown" , (e) =>{
  //arlet "hola¡¡¡"
if (e.repeat) return;
  const key = e.key;
  const whiteKeyIndex = WHITE_KEYS.indexOf(key);
  const blackKeyIndex = BLACK_KEYS.indexOf(key);

  if (whiteKeyIndex > -1) playNote(whiteKeys[whiteKeyIndex]);
  if (blackKeyIndex > -1) playNote(blackKeys[blackKeyIndex]);
});

const personaPilar={
  nombre:{

    primerNombre: "Dalia Pilar",
    apellidoPaterno:"Garcia",
    apellidoMaterno: "Sarmiento",
  
  },
  edad: 16,
  bio: function(){
    console.log( this.nombre.primerNombre+" Tiene" +this.edad+" años");
  
  },
  presentarseArrowFn: ()=>{console.log(this.nombre.primerNombre)},
  presentarse: function(){
  console.log("hola mi nombre es " +this.nombre.primerNombre);
  }
};

const frutas = ["Manzana", "Mango", "Melon", "Sandia", "Durazno"];
frutas[5]="Piña";
frutas[0]="Higo";
frutas.push("Frambuesa");
frutas.shift();
console.log(frutas);


const calificaciones= [10, 6, 5, 8, 8, 7, 5, 10, 9, 9];
const reprobados = calificaciones.find((calificacion) => calificacion <= 5);
const mayorA8= calificaciones.map((califacion) => califacion >= 8);
const aprobados =calificaciones.filter((califacion) => califacion > 5);

const sumatoria = calificaciones.reduce(
  (valorAnterior , valorActual) => valorAnterior+ valorActual,
  0
);
const promedio = sumatoria / calificaciones.length;
console.log("reprobados", reprobados);
console.log("aprobados",aprobados);
console.log("Mayor a 8", mayorA8);

console.log("El promedio general de la escuela es de :" + promedio);




//const getAge = () => {
  //fetch('https://api.agify.io/?name=pilar').then((response) => response.json()).then((data) => console.log(data))
//}

//getAge();

//console.log("Pilar")


//const getAge = async () => {
  //const response = await fetch('https://api.agify.io/?name=pilar');
  //console.log(response);

  //const data = await response.json();
 // console.log(data)
//}

//const printJuan = () => {
 // let age = 10;
  //let years = 5;
  //console.log('Juan' + (age + years));
//}

//const main = async () => {
 // await getAge();

 // printJuan();
  //console.log('Pepe')
//}


//main();



let guessedAge=0;
const getGuessedAge = async () => {
  const response = await fetch ('https://api.agify.io/?name=pilar');
const data = await response.json();
console.log(data);
return data.age;

}
const displayGuessedAge = async () =>{
  let guessedAgeSpan = document.getElementById("guessedAge");
  const isCorrectSpan=  document. getElementById("isGuessRight");
 


   guessedAge= await getGuessedAge ();
   console.log(guessedAge);
  guessedAgeSpan.textContent = guessedAge;

  if(guessedAge !==16)
  {
    isCorrectSpan.textContent = "incorrecto"
  }else{
     isCorrectSpan.textContect ="correcto"
  }

}
displayGuessedAge();

