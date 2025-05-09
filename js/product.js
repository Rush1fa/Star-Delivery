// Импорт supabase из db.js
import { supabase } from './db.js';

// Загрузка товаров
export async function loadProducts() {
  const { data, error } = await supabase
    .from('products')
    .select('*');

  if (error) {
    console.error('Ошибка загрузки товаров:', error);
    return [];
  }

  return data;
}

// Отображение товаров на странице
async function displayProducts() {
  const products = await loadProducts();
  const container = document.getElementById('products-container');

  if (!container) {
    console.error('Элемент products-container не найден');
    return;
  }

  container.innerHTML = products.map(product => `
    <div class="product">
      <img src="${product.image_url}" alt="${product.name}">
      <h3>${product.name}</h3>
      <p>${product.price} руб.</p>
      <button onclick="addToCart(${product.id})">В корзину</button>
    </div>
  `).join('');
}

// Инициализация при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  displayProducts();
});
// Тестовый запрос
supabase.from('products').select('*')
  .then(response => console.log("Товары:", response.data))
  .catch(error => console.error("Ошибка:", error));
