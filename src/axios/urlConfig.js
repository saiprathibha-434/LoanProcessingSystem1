export const baseUrl = `http://localhost:8080`;
export const api = `${baseUrl}`;
export const generateProductImagePublicUrl = (fileName) => {
  return `${baseUrl}/public/product-images/${fileName}`;
};

export const generateCategoryImagePublicUrl = (fileName) => {
  return `${baseUrl}/public/product-images/${fileName}`;
};