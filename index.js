// selección de zona para determinar si se puede hacer delivery

function elegirDelegacion() {
    const delOpciones = [
      "Álvaro Obregón",
      "Azcapotzalco",
      "Benito Juárez",
      "Coyoacán",
    ];
  
    const delegacion = parseInt(prompt("Selecciona la delegación en la que vives:\n\n" + delOpciones.map((option, index) => `${index + 1}. ${option}`).join("\n")));
  
    return delegacion;
  }
  
  function deliveryNo() {
    alert("Lo sentimos. No tenemos envíos disponibles en tu zona.");
  }
  
  function visitanos() {
    alert("Puedes visitarnos en: Insurgentes Sur 601");
  }
  
// selección de producto para determinar stock (para hacerlo corto para el trabajo, todos los productos están sin stock)

  function elegirProducto() {
    const productoOpciones = [
      "Café de especialidad",
      "Cafeteras",
      "Accesorios Café"
    ];
  
    const productos = parseInt(prompt("Qué producto buscas?\n\n" + productoOpciones.map((option, index) => `${index + 1}. ${option}`).join("\n")));
  
    return productos;
  }
  
  function noStock() {
    alert("Fuera de stock.");
  }
  
  function elegirDelegacion2() {
    const delegacion = elegirDelegacion();
  
    if ([1, 4].includes(delegacion)) {
      deliveryNo();
    } else {
      const elegirPro = elegirProducto();
  
      if ([1, 2, 3].includes(elegirPro)) {
        noStock();
      }
    }
  
    visitanos();
  }
  
  elegirDelegacion2();
  
