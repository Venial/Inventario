import {
  formatUnit,
  sortInventory,
  filterForPrint,
} from "./inventory-manager.js";

// Elementos del DOM
const tableBody = document.getElementById("table-body");
const modal = document.getElementById("product-modal");
const closeBtn = document.querySelector(".close");
const productForm = document.getElementById("product-form");
const modalTitle = document.getElementById("modal-title");

// Renderizar inventario
function renderInventory(products) {
  tableBody.innerHTML = "";

  const productsToDisplay = window.printing
    ? filterForPrint(products)
    : sortInventory(products);

  productsToDisplay.forEach((product) => {
    const row = document.createElement("tr");
    row.innerHTML = `
              <td>${product.name}</td>
              <td>${product.category}</td>
              <td>${product.quantity}</td>
              <td>${formatUnit(product.unit)}</td>
              <td class="no-print action-btns">
                  <button class="edit-btn" data-id="${
                    product.id
                  }">✏️ Editar</button>
                  <button class="btn-danger delete-btn" data-id="${
                    product.id
                  }">🗑️ Eliminar</button>
              </td>
          `;
    tableBody.appendChild(row);
  });
}

// Configurar modal
function setupModal(isEditing = false, product = null) {
  modalTitle.textContent = isEditing ? "Editar Producto" : "Agregar Producto";
  if (isEditing && product) {
    document.getElementById("product-id").value = product.id;
    document.getElementById("product-name").value = product.name;
    document.getElementById("product-category").value = product.category;
    document.getElementById("product-quantity").value = product.quantity;
    document.getElementById("product-unit").value = product.unit;
  } else {
    productForm.reset();
    document.getElementById("product-id").value = "";
  }
  modal.style.display = "block";
}

// Cerrar modal
function closeModal() {
  modal.style.display = "none";
}

// Cerrar al hacer clic fuera
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

export { renderInventory, setupModal, closeModal };
