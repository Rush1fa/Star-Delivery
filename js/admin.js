import { supabase } from './db.js';

document.getElementById("add-product").addEventListener("submit", async (e) => {
  e.preventDefault();
  const product = {
    name: document.getElementById("name").value,
    price: document.getElementById("price").value,
    image_url: document.getElementById("image").value
  };

  const { error } = await supabase.from('products').insert([product]);
  if (error) alert("Ошибка: " + error.message);
  else alert("Товар добавлен!");
});
