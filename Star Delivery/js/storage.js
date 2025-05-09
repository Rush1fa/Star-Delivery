// storage.js
async function uploadImage(file) {
    const response = await fetch(`${API_GATEWAY_URL}/upload`, {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${IAM_TOKEN}`,
        'Content-Type': file.type
      },
      body: file
    });
    return await response.json(); // Вернет URL изображения
  }
  