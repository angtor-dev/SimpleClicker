window.onload = init; //Antes de cargar la pagina se ejecuta la funcion init()

function init() {
	document.querySelector(".main-circle").addEventListener("click", sumarPuntos); //añade un evento onclick
}

var pts = 0; //puntos
var aux_pts = 0; //variable auxiliar para dar un circulo cada 10pts
var ppc = 1; //puntos por click

var circles = 0; //circulos
var triangles = 0; //triagulos
var squares = 0; //cuadrados
var rhombus = 0; //rombos

//Función principal
function sumarPuntos() {
	pts += ppc;
	aux_pts += ppc;
	escribirPuntos(pts);

	if (aux_pts >= 10) {
		for (var i = 0; i < Math.floor(aux_pts / 10); i++) {
			crearForma("circulos", "circulo");
			circles++;
		}
		aux_pts %= 10;
	}

	if (circles >= 10) {
		for (var i = 0; i < Math.floor(circles / 10); i++) {
			crearForma("triangulos", "triangulo");
			triangles++;
		}
		circles %= 10;
		document.getElementById('circulos').innerHTML = '';
		for (var i = 0; i < circles; i++) {
			crearForma("circulos", "circulo");
		}
	}

	if (triangles >= 10) {
		for (var i = 0; i < Math.floor(triangles / 10); i++) {
			crearForma("cuadrados", "cuadrado");
			squares++;
		}
		triangles %= 10;
		document.getElementById('triangulos').innerHTML = '';
		for (var i = 0; i < triangles; i++) {
			crearForma("triangulos", "triangulo");
		}
	}

	if (squares >= 10) {
		for (var i = 0; i < Math.floor(squares / 10); i++) {
			crearForma("rombos", "rombo");
			rhombus++;
		}
		squares %= 10;
		document.getElementById('cuadrados').innerHTML = '';
		for (var i = 0; i < squares; i++) {
			crearForma("cuadrados", "cuadrado");
		}
	}
}

function crearForma(elemento, clase) {
	var midiv = document.createElement("div");
	midiv.setAttribute("class", clase);
	midiv.innerHTML = "";
	document.getElementById(elemento).appendChild(midiv);
}

function escribirPuntos(pts) {
	if (pts < 0) {
		document.getElementById('puntos').innerHTML = "Error";
	} 
	else if (pts >= 0 && pts < 10000) {
		document.getElementById('puntos').innerHTML = pts;
	}
	else if (pts >= 10000 && pts < 100000) {
		document.getElementById('puntos').innerHTML = (pts / 1000).toFixed(2) + "k";
	}
	else if (pts >= 100000 && pts < 1000000) {
		document.getElementById('puntos').innerHTML = (pts / 1000).toFixed(1) + "k";
	}
	else if (pts >= 1000000) {
		document.getElementById('puntos').innerHTML = (pts / 1000000).toFixed(2) + "M";
	}
}