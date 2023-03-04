
// usuario debe seleccionar zona en que vive para determinar si está dentro de la zona de delivery

let selection = prompt("Selecciona la delegación en la que vives (ingresa el número de la opción): \
 1. Álvaro Obregón\
 2. Azcapotzalco\
 3. Benito Juárez\
 4. Coyoacán");
console.log(selection)
let message = "";
let address = "Insurgentes Sur 601";

// si está dentro de la zona, se le pide elegir el producto que busca

if (selection == 1 || selection == 4) {
  let productSelection = prompt("Qué producto buscas? \
  1. Café de especialidad\
  2. Cafeteras\
  3. Accesorios Café");
  message = "fuera de stock";
} else if (selection == 2 || selection == 3) {
  message = "Lo sentimos. No tenemos envíos disponibles en tu zona.";
} 

alert(message + "\nPuedes visitarnos en: " + address);
