// Nombre: Bryam Juvencio Najera Hernandez
// Lab - Reservaciones del restaurante (San Miguel)

// 1. Interface y datos iniciales
interface Reservacion {
id: number;
cliente: string;
personas: number;
  zona: string; // "Interior" o "Terraza"
}

const reservaciones: Reservacion[] = [
{ id: 1, cliente: "Ana Pérez", personas: 2, zona: "Interior" },
{ id: 2, cliente: "Carlos Mejía", personas: 6, zona: "Terraza" },
{ id: 3, cliente: "Lucía Romero", personas: 5, zona: "Interior" },
{ id: 4, cliente: "Mario Gómez", personas: 8, zona: "Terraza" },
];

// Función elegida: atender la primera reservación pendiente.
// Retira y devuelve la primera, o undefined si la lista está vacía.
function atenderPrimeraReservacion(lista: Reservacion[]): Reservacion | undefined {
    const atendida: Reservacion | undefined = lista.shift();
    if (atendida) {
    console.log(`Atendido: ${atendida.cliente} (${atendida.personas} personas)`);
    } else {
    console.log("No hay reservaciones pendientes por atender.");
    }
    return atendida;
}

console.log("=== Lista inicial ===");
console.log(reservaciones);

// 2. Registrar nuevas reservaciones
reservaciones.push({ id: 5, cliente: "Sofía Cruz", personas: 4, zona: "Terraza" }); // normal: al final
reservaciones.unshift({ id: 6, cliente: "Roberto Vega", personas: 3, zona: "Interior" }); // prioritaria: al inicio

console.log("\n=== Lista antes de atender (prioritaria al inicio, normal al final) ===");
console.log(reservaciones);

// 3. Atender (llamadas a la función con situaciones diferentes)
console.log("\n=== Atención ===");
const primeraAtendida = atenderPrimeraReservacion(reservaciones); // lista con datos
const listaVaciaPrueba: Reservacion[] = [];
atenderPrimeraReservacion(listaVaciaPrueba); // lista vacía
console.log("Resultado guardado:", primeraAtendida);

// 4. Búsqueda por identificador
console.log("\n=== Búsqueda por id ===");
const idExistente = 4;
const idInexistente = 99;

const encontrada: Reservacion | undefined = reservaciones.find((r) => r.id === idExistente);
if (encontrada) {
    console.log(`Id ${idExistente} encontrado:`, encontrada);
} else {
    console.log(`No existe una reservación con id ${idExistente}.`);
}

const noEncontrada: Reservacion | undefined = reservaciones.find((r) => r.id === idInexistente);
if (noEncontrada) {
    console.log(`Id ${idInexistente} encontrado:`, noEncontrada);
} else {
    console.log(`No existe una reservación con id ${idInexistente}.`);
}

// Filtro: Terraza y 5 o más personas (ambas condiciones)
console.log("\n=== Filtro: Terraza con 5 o más personas ===");
const cantidadAntesFiltro: number = reservaciones.length;
const gruposTerraza: Reservacion[] = reservaciones.filter(
    (r) => r.zona === "Terraza" && r.personas >= 5
);
const cantidadDespuesFiltro: number = reservaciones.length;

if (gruposTerraza.length > 0) {
    console.log(gruposTerraza);
} else {
    console.log("No hay grupos grandes en la terraza.");
}

// 6. Estado final
console.log("\n=== Estado final ===");
console.log("Reservaciones pendientes:", reservaciones);
console.log("Cantidad pendiente (length):", reservaciones.length);
console.log("Coincidencias del filtro:", gruposTerraza.length);
console.log(`Antes del filtro: ${cantidadAntesFiltro} | Después del filtro: ${cantidadDespuesFiltro}`);
console.log(
    cantidadAntesFiltro === cantidadDespuesFiltro
    ? "Correcto: el filtro no eliminó registros."
    : "Error: el filtro modificó el arreglo original."
);
// 4 iniciales + 2 registradas - 1 atendida = 5 pendientes
console.log("Esperado: 4 + 2 - 1 = 5 pendientes ->", reservaciones.length === 5 ? "OK" : "No coincide");
