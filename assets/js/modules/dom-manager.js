let productToDelete = null; // Variable para almacenar el producto a eliminar

import {
  formatUnit,
  sortInventory,
  filterForPrint,
  eliminarProducto,
  obtenerProductos,
  editarProducto,
  agregarProducto,
} from "./inventory-manager.js";

// Elementos del DOM
const tableBody = document.getElementById("table-body");
const modal = document.getElementById("product-modal");
const closeBtn = document.querySelector(".close");
const productForm = document.getElementById("product-form");
const modalTitle = document.getElementById("modal-title");
const deleteModal = document.getElementById("delete-modal");
const closeDeleteBtn = document.getElementById("close-delete-modal");
const cancelDeleteBtn = document.getElementById("cancel-delete");
const confirmDeleteBtn = document.getElementById("confirm-delete");
const productToDeleteSpan = document.getElementById("product-to-delete");

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
        <button class="edit-btn" data-id="${product.id}">✏️ Editar</button>
        <button class="delete-btn" data-id="${product.id}">🗑️ Eliminar</button>
      </td>
    `;

    const editBtn = row.querySelector(".edit-btn");
    const deleteBtn = row.querySelector(".delete-btn");

    editBtn.addEventListener("click", () => {
      setupModal(true, product);
    });

    deleteBtn.addEventListener("click", () => {
      showDeleteModal(product); // Solo esta línea para el modal personalizado
    });

    tableBody.appendChild(row);
  });
}

// Configurar modal
function setupModal(isEditing = false, product = null) {
  // Resetear estado
  modal.classList.remove("show");

  // Configurar contenido
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

  // Mostrar con animación
  setTimeout(() => {
    modal.style.display = "flex";
    setTimeout(() => {
      modal.classList.add("show");
      document.body.style.overflow = "hidden";

      // Enfocar el campo correspondiente según el modo
      const inputToFocus = isEditing
        ? document.getElementById("product-quantity")
        : document.getElementById("product-name");

      inputToFocus.focus();
      inputToFocus.select(); // Opcional: selecciona el texto existente
    }, 10);
  }, 10);
}

function closeModal() {
  modal.classList.remove("show");
  setTimeout(() => {
    modal.style.display = "none";
    document.body.style.overflow = "";
  }, 300);
}

// Asegúrate de que el event listener del cierre esté bien configurado
closeBtn.addEventListener("click", closeModal);

window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

// Modifica el event listener para cerrar al hacer clic fuera
window.addEventListener("click", (e) => {
  if (e.target === modal) {
    closeModal();
  }
});

export function setupFormSubmit() {
  productForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const productId = document.getElementById("product-id").value;
    const productData = {
      name: document.getElementById("product-name").value.trim(),
      category: document.getElementById("product-category").value.trim(),
      quantity: parseFloat(document.getElementById("product-quantity").value),
      unit: document.getElementById("product-unit").value,
    };

    // Validación
    if (
      !productData.name ||
      !productData.category ||
      isNaN(productData.quantity)
    ) {
      alert("Complete todos los campos correctamente");
      return;
    }

    if (productId) {
      // Modo edición
      console.log("Intentando guardar edición para ID:", productId);
      const success = editarProducto(productId, productData);

      if (success) {
        renderInventory(obtenerProductos());
        closeModal();
      } else {
        alert(`Error: No se encontró el producto con ID ${productId}`);
        console.log("Productos actuales:", obtenerProductos());
      }
    } else {
      // Modo agregar
      agregarProducto({
        ...productData,
        id: Date.now().toString(),
      });
      renderInventory(obtenerProductos());
      closeModal();
    }
  });
}

// Configurar el botón de cerrar
closeBtn.addEventListener("click", closeModal);

// Mostrar modal de eliminación
function showDeleteModal(product) {
  productToDelete = product;
  productToDeleteSpan.textContent = product.name;

  deleteModal.style.display = "flex";
  setTimeout(() => {
    deleteModal.classList.add("show");
    document.body.style.overflow = "hidden";
  }, 10);
}

// Ocultar modal de eliminación
function hideDeleteModal() {
  deleteModal.classList.remove("show");
  setTimeout(() => {
    deleteModal.style.display = "none";
    document.body.style.overflow = "";
    productToDelete = null;
  }, 300);
}

// Configurar eventos de eliminación
closeDeleteBtn.addEventListener("click", hideDeleteModal);
cancelDeleteBtn.addEventListener("click", hideDeleteModal);

confirmDeleteBtn.addEventListener("click", () => {
  if (productToDelete) {
    eliminarProducto(productToDelete.id);
    renderInventory(obtenerProductos());
    hideDeleteModal();
  }
});

window.addEventListener("click", (e) => {
  if (e.target === deleteModal) {
    hideDeleteModal();
  }
});

export { renderInventory, setupModal, closeModal };
