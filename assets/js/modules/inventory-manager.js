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

function editarProducto(id, nuevosDatos) {
  // Asegurarnos que el ID es string
  const idStr = String(id);

  const index = productos.findIndex((p) => String(p.id) === idStr);

  if (index !== -1) {
    // Actualizar solo los campos permitidos manteniendo el ID original
    productos[index] = {
      id: productos[index].id, // Mantener el ID original
      name: nuevosDatos.name,
      category: nuevosDatos.category,
      quantity: nuevosDatos.quantity,
      unit: nuevosDatos.unit,
    };

    console.log("Producto actualizado:", productos[index]);
    return true;
  }

  console.error("Producto no encontrado. ID buscado:", idStr);
  console.error(
    "IDs existentes:",
    productos.map((p) => String(p.id))
  );
  return false;
}

export {
  agregarProducto,
  obtenerProductos,
  editarProducto,
  eliminarProducto,
  setProductos,
  formatUnit,
  sortInventory,
  filterForPrint,
};
