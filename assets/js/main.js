// Importaciones corregidas
import { inventory } from "./inventory.js";
console.log(inventory);
import {
  renderInventory,
  setupModal,
  closeModal,
} from "./modules/dom-manager.js";
import { searchProducts } from "./modules/search-manager.js";
import { setupPrintHandlers } from "./modules/print-manager.js";

// Elementos del DOM
const searchInput = document.getElementById("search-input");
const addProductBtn = document.getElementById("add-product-btn");

// Variables de estado
let isEditing = false;
let currentEditId = null;

// Manejador de búsqueda
searchInput.addEventListener("input", (e) => {
  const results = searchProducts(e.target.value, inventory);
  renderInventory(results);
});

// Manejador para agregar producto
addProductBtn.addEventListener("click", () => {
  isEditing = false;
  currentEditId = null;
  setupModal();
});

// Inicialización
document.addEventListener("DOMContentLoaded", () => {
  renderInventory(inventory);
  setupPrintHandlers(() => renderInventory(inventory));
});
