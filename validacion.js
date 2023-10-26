const nombre = document.getElementById("nombre")
const apellido = document.getElementById ("apellido")
const ciudad = document.getElementById ("ciudad")
const postal = document.getElementById ("codigo postal")
const direccion = document.getElementById ("direccion")
const numeroTarjeta = document.getElementById ("number")
const forms = document.getElementById ("formulario2")
const parrafo = document.getElementById ("warnings")

forms.addEventListener ("submit", e=>{
    e.preventDefault()
    let warnings = ""
    let entrar = false
    parrafo.innerHTML = ""

    if (nombre.value.length < 3 ){
         warnings += "Ingrese un nombre valido <br>"
         entrar = true
        }
    if (apellido.value.length < 3 ){
        warnings += "Ingrese un apellido valido <br>"
        entrar = true
    }
    
   if (direccion.value.length < 3){
       warnings += "Ingrese una direccion valida <br>"
       entrar = true
   }
   if (ciudad.value.length < 3 ){
      warnings += "Ingrese una ciudad valida <br>"
      entrar = true
   }
   if (postal.value.length !== 4 ){
      warnings += "Ingrese un codigo postal valido"
      entrar = true
   }
   if (numeroTarjeta.value.length !== 16 ){
      warnings += "El numero de tarjeta ingresado no es valido"
      entrar = true
    }

   if (entrar){
     parrafo.innerHTML = warnings
   }
   else {
     alert ("Su pedido ha sido enviado con exito")
   }
 })
 document.addEventListener("DOMContentLoaded", function () {
  var checkboxes = document.querySelectorAll('input[type="checkbox"]');
  var maxChecked = 3;

  checkboxes.forEach(function (checkbox) {
    checkbox.addEventListener("change", function () {
      var checkedCheckboxes = document.querySelectorAll('input[type="checkbox"]:checked');
      if (checkedCheckboxes.length > maxChecked) {
        this.checked = false; // Desmarca el checkbox si se supera el límite
      }
    });
  });
});
