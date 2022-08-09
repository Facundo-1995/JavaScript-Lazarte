var Alumnos = [];
const guardarLocal = (clave, valor) => { localStorage.setItem(clave, valor)};

class Alumno {
   constructor(nom,ape,not) {

      this.nombre = nom;
      this.apellido = ape;
      this.nota = not;
   }
}

function agregar() {
   var nombre = document.getElementById("Nombre").value;
   var apellido = document.getElementById("Apellido").value;
   var nota = document.getElementById("Nota").value;

   Alumnos.push(new Alumno(nombre,apellido,nota))

   document.getElementById("Nombre").value="";
   document.getElementById("Apellido").value="";
   document.getElementById("Nota").value="";
}

function mostrar() {

   const almacenados = JSON.parse(localStorage.getItem("ListaAlumnos"));

   for (let index = 0; index < almacenados.length; index++) {
      console.log(almacenados[index].nombre);
      console.log(almacenados[index].apellido);
      console.log(almacenados[index].nota);
      console.log("--------------------------");


      var label=document.createElement("label");
      label.innerHTML=almacenados[index].nombre + ", " + almacenados[index].apellido + " - " + almacenados[index].nota + "<br>";
      document.getElementById("MostrarAlumnos").appendChild(label);


   }
}

function guardar() {
   guardarLocal ("ListaAlumnos", JSON.stringify(Alumnos));
   Swal.fire(
      'Buen trabajo!',
      'Usted lo ha guardado!',
      'success'
    )
}

