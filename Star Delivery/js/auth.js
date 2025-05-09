// Функция отправки кода в Telegram
async function sendTelegramCode(telegramUsername, code) {
    try {
      const response = await fetch('https://api.telegram.org/bot7225309681:AAECeZxfi6IuprnN-5QpNQq_rog5GHu8KUI/sendMessage', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          chat_id: telegramUsername,
          text: `Ваш код подтверждения: ${code}`
        })
      });
      return response.ok;
    } catch (error) {
      console.error('Ошибка отправки кода:', error);
      return false;
    }
  }
  
  // В обработчике формы авторизации:
  authForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const code = Math.floor(1000 + Math.random() * 9000);
    
    if (await sendTelegramCode(telegram.value, code)) {
      localStorage.setItem('tempAuthData', JSON.stringify({
        code,
        name: name.value,
        address: address.value,
        telegram: telegram.value
      }));
      authForm.style.display = 'none';
      codeVerification.style.display = 'block';
    } else {
      alert('Ошибка отправки кода. Проверьте Telegram username.');
    }
  });