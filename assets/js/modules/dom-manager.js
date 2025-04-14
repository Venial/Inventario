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
        <button class="btn-danger delete-btn" data-id="${
          product.id
        }">🗑️ Eliminar</button>
      </td>
    `;

    // Agregar listeners después de insertar la fila
    const editBtn = row.querySelector(".edit-btn");
    const deleteBtn = row.querySelector(".delete-btn");

    editBtn.addEventListener("click", () => {
      console.log(
        "Editando producto ID:",
        product.id,
        "Tipo:",
        typeof product.id
      );
      setupModal(true, product);
    });

    deleteBtn.addEventListener("click", () => {
      const confirmar = confirm(`¿Estás seguro de eliminar "${product.name}"?`);
      if (confirmar) {
        eliminarProducto(product.id);
        row.remove(); // 🔥 Esto elimina solo esa fila
      }
    });

    tableBody.appendChild(row);
  });
}

// Configurar modal
function setupModal(isEditing = false, product = null) {
  modalTitle.textContent = isEditing ? "Editar Producto" : "Agregar Producto";
  if (isEditing && product) {
    console.log("Configurando modal para editar producto ID:", product.id); // Debug
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

export { renderInventory, setupModal, closeModal };
