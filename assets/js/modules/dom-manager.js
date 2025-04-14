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

  // Variable para rastrear el menú abierto
  let currentOpenMenu = null;

  productsToDisplay.forEach((product) => {
    const row = document.createElement("tr");

    row.innerHTML = `
      <td data-label="Producto">${product.name}</td>
      <td data-label="Rubro">${product.category}</td>
      <td data-label="Cantidad">${product.quantity}</td>
      <td data-label="Unidad">${formatUnit(product.unit)}</td>
      <td class="no-print" data-label="Acciones">
        <div class="action-btns">
          <button class="edit-btn" data-id="${product.id}">✏️ Editar</button>
          <button class="delete-btn" data-id="${
            product.id
          }">🗑️ Eliminar</button>
        </div>
        <div class="mobile-actions-container">
          <button class="mobile-actions-trigger" data-id="${
            product.id
          }">⋮</button>
          <div class="mobile-actions-dropdown">
            <button class="mobile-edit-btn" data-id="${
              product.id
            }">✏️ Editar</button>
            <button class="mobile-delete-btn" data-id="${
              product.id
            }">🗑️ Eliminar</button>
          </div>
        </div>
      </td>
    `;

    const trigger = row.querySelector(".mobile-actions-trigger");
    const dropdown = row.querySelector(".mobile-actions-dropdown");
    const mobileEditBtn = row.querySelector(".mobile-edit-btn");
    const mobileDeleteBtn = row.querySelector(".mobile-delete-btn");

    // Evento para el botón de tres puntos
    trigger.addEventListener("click", (e) => {
      e.stopPropagation();

      // Si este menú ya está abierto, cerrarlo
      if (currentOpenMenu === dropdown) {
        dropdown.classList.remove("show");
        currentOpenMenu = null;
        return;
      }

      // Cerrar cualquier menú previamente abierto
      if (currentOpenMenu) {
        currentOpenMenu.classList.remove("show");
      }

      // Abrir el menú actual
      dropdown.classList.add("show");
      currentOpenMenu = dropdown;
    });

    // Eventos para los botones del menú
    mobileEditBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      setupModal(true, product);
      dropdown.classList.remove("show");
      currentOpenMenu = null;
    });

    mobileDeleteBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      showDeleteModal(product);
      dropdown.classList.remove("show");
      currentOpenMenu = null;
    });

    // Eventos para la versión de escritorio
    row
      .querySelector(".edit-btn")
      .addEventListener("click", () => setupModal(true, product));
    row
      .querySelector(".delete-btn")
      .addEventListener("click", () => showDeleteModal(product));

    tableBody.appendChild(row);
  });

  // Cerrar menú al hacer click fuera
  document.addEventListener("click", () => {
    if (currentOpenMenu) {
      currentOpenMenu.classList.remove("show");
      currentOpenMenu = null;
    }
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
