import { inventory } from "../inventory.js";

// Formatear unidad para mostrar
function formatUnit(unit) {
  const unitsMap = {
    unidades: "Unidades",
    kg: "Kg",
    mg: "Mg",
  };
  return unitsMap[unit] || unit;
}

// Ordenar productos por categoría y nombre
function sortInventory(products) {
  return [...products].sort((a, b) => {
    if (a.category < b.category) return -1;
    if (a.category > b.category) return 1;
    if (a.name < b.name) return -1;
    if (a.name > b.name) return 1;
    return 0;
  });
}

// Filtrar productos para impresión
function filterForPrint(products) {
  return products.filter((product) => product.quantity > 0);
}

let productos = [];

function agregarProducto(producto) {
  productos.push(producto);
}

function obtenerProductos() {
  return productos;
}

function eliminarProducto(id) {
  const index = productos.findIndex((p) => p.id === id);
  if (index !== -1) {
    productos.splice(index, 1);
    console.log("Producto eliminado:", id);
  }
}

// Podés agregar esto si querés reiniciar la lista:
function setProductos(nuevosProductos) {
  productos = nuevosProductos;
}

export { agregarProducto, obtenerProductos, eliminarProducto, setProductos };

export { formatUnit, sortInventory, filterForPrint };
