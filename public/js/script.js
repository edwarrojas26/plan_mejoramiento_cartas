let iconos = [];
let selecciones = [];

generarTablero();

function cargarIconos() {
  iconos = [
    '<div class="carta"><img src="img/mongodb.png"></div>',
    '<div class="carta"><img src="img/java.png"></div>',
    '<div class="carta"><img src="img/js.png"></div>',
    '<div class="carta"><img src="img/react.png"></div>',
    '<div class="carta"><img src="img/python.jpg"></div>',
    '<div class="carta"><img src="img/c++.png"></div>',
    '<div class="carta"><img src="img/descarga.jpg"></div>',
    '<div class="carta"><img src="img/qooxdoo.png"></div>',
    '<div class="carta"><img src="img/spring_boot.png"></div>',
    '<div class="carta"><img src="img/ruby.png"></div>',
  ];
}

function generarTablero() {
  cargarIconos();
  selecciones = [];
  let tablero = document.querySelector(".contenedor");
  let tarjetas = [];
  for (let i = 0; i < 20; i++) {
    tarjetas.push(`
                <div class="area-tarjeta" onclick="seleccionarTarjeta(${i})">
                    <div class="tarjeta" id="tarjeta${i}">
                        <div class="front back" id="back${i}">
                            ${iconos[0]}
                        </div>
                        <div class="front superior">
                            <i class="far fa-question-circle"></i>
                        </div>
                    </div>
                </div>        
                `);
    if (i % 2 == 1) {
      iconos.splice(0, 1);
    }
  }
  tarjetas.sort(() => Math.random() - 0.5);
  tablero.innerHTML = tarjetas.join(" ");
}

function seleccionarTarjeta(i) {
  let tarjeta = document.getElementById("tarjeta" + i);
  if (tarjeta.style.transform != "rotateY(180deg)") {
    tarjeta.style.transform = "rotateY(180deg)";
    selecciones.push(i);
  }
  if (selecciones.length == 2) {
    deseleccionar(selecciones);
    selecciones = [];
  }
}

function deseleccionar(selecciones) {
  setTimeout(() => {
    let back1 = document.getElementById("back" + selecciones[0]);
    let back2 = document.getElementById("back" + selecciones[1]);
    if (back1.innerHTML != back2.innerHTML) {
      let tarjeta1 = document.getElementById("tarjeta" + selecciones[0]);
      let tarjeta2 = document.getElementById("tarjeta" + selecciones[1]);
      tarjeta1.style.transform = "rotateY(0deg)";
      tarjeta2.style.transform = "rotateY(0deg)";
    }
  }, 1000);
}
