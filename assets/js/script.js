function mostrarInstruccion() {
  alert('Presiona F12 o clic derecho → Inspeccionar → Consola');
}

// 1. Crear un arreglo de largo n donde cada número es el doble del anterior
function crearArregloDoble (n) {
  let arreglo = [];
  let valor = 1;
for (let i = 0; i < n; i++) {
    arreglo.push(valor);
    valor = valor * 2;
  }

  return arreglo;
}

// 2. Obtener el mayor número de un arreglo de largo 10
function obtenerMayor(arreglo) {
  let mayor = arreglo[0];

  for (let i = 1; i < arreglo.length; i++) {
    if (arreglo[i] > mayor) {
      mayor = arreglo[i];
    }
  }

  return mayor;
}

// 3. Obtener un día de la semana según su número (1 = Lunes, 7 = Domingo)
function obtenerDia(numero) {
  let dias = ["Lunes", "Martes", "Miércoles", "Jueves", "Viernes", "Sábado", "Domingo"];

  if (numero >= 1 && numero <= 7) {
    return dias[numero - 1];
  } else {
    return "Número inválido. Debe ser entre 1 y 7.";
  }
}


// 4. Buscar un número dentro de un arreglo (máximo 100 elementos)
function buscarNumero(arreglo, numeroBuscado) {
  for (let i = 0; i < arreglo.length; i++) {
    if (arreglo[i] === numeroBuscado) {
      return `Número encontrado en la posición ${i}`;
    }
  }

  return "Número no encontrado en el arreglo.";
}

// 5. Ordenar un arreglo de números desordenados ascendentemente
function ordenarAscendente(arreglo) {
  return arreglo.sort((a, b) => a - b);
}

console.log("1. Arreglo de dobles:");
console.log(crearArregloDoble(6)); // [1, 2, 4, 8, 16, 32]

console.log("\n2. Mayor número en el arreglo:");
let arregloDiez = [4, 8, 1, 20, 5, 7, 10, 15, 0, 3];
console.log(obtenerMayor(arregloDiez)); // 20

console.log("\n3. Día de la semana (número 5):");
console.log(obtenerDia(5)); // Viernes

console.log("\n4. Buscar número en arreglo:");
let arregloBusqueda = [10, 22, 33, 44, 55];
console.log(buscarNumero(arregloBusqueda, 33)); // Encontrado en la posición 2

console.log("\n5. Arreglo ordenado ascendentemente:");
let arregloDesordenado = [12, 5, 3, 9, 1];
console.log(ordenarAscendente(arregloDesordenado)); // [1, 3, 5, 9, 12]