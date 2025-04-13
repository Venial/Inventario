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

export { formatUnit, sortInventory, filterForPrint };
