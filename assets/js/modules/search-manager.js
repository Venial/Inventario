import { inventory } from "../inventory.js";

// Normalizar string para búsqueda (quitar acentos)
function normalizeString(str) {
  return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
}

// Buscar productos
function searchProducts(query, products = inventory) {
  if (!query) return products;

  const normalizedQuery = normalizeString(query.toLowerCase());

  return products.filter((product) => {
    const normalizedName = normalizeString(product.name.toLowerCase());
    const normalizedCategory = normalizeString(product.category.toLowerCase());

    return (
      normalizedName.includes(normalizedQuery) ||
      normalizedCategory.includes(normalizedQuery)
    );
  });
}

export { searchProducts, normalizeString };
