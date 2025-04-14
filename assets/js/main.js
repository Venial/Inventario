// Importaciones
import { inventory } from "./inventory.js";
import {
  renderInventory,
  setupModal,
  closeModal,
  setupFormSubmit,
} from "./modules/dom-manager.js";
import { searchProducts } from "./modules/search-manager.js";
import { setupPrintHandlers } from "./modules/print-manager.js";
import {
  obtenerProductos,
  setProductos,
  agregarProducto,
  editarProducto,
} from "./modules/inventory-manager.js";

// Elementos del DOM
const searchInput = document.getElementById("search-input");
const addProductBtn = document.getElementById("add-product-btn");

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  // 1. Cargar productos iniciales
  const productosIniciales = inventory.map((p) => ({
    ...p,
    id: String(p.id), // Convertir IDs a strings
  }));

  setProductos(productosIniciales);
  console.log("Productos iniciales:", obtenerProductos());

  // 2. Configurar eventos
  // Búsqueda
  searchInput.addEventListener("input", (e) => {
    const results = searchProducts(e.target.value, obtenerProductos());
    renderInventory(results);
  });

  // Botón agregar
  addProductBtn.addEventListener("click", () => setupModal(false));

  // Impresión
  setupPrintHandlers(() => renderInventory(obtenerProductos()));

  // Formulario
  setupFormSubmit();

  // 3. Renderizar inventario inicial
  renderInventory(obtenerProductos());
});
