// products.js
const API_GATEWAY_URL = 'https://ваш-шлюз.apigw.yandexcloud.net';
const IAM_TOKEN = 'ваш_iam_токен'; // Берите из переменных окружения или запрашивайте при входе

async function loadProducts() {
  const response = await fetch(`${API_GATEWAY_URL}/products`, {
    headers: {
      'Authorization': `Bearer ${IAM_TOKEN}`
    }
  });
  return await response.json();
}