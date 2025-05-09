function updateOrderButton() {
    const total = calculateTotal();
    const minOrderMsg = document.getElementById('minOrderMsg');
    const checkoutBtn = document.getElementById('checkoutBtn');
  
    if (total < 1000) {
      minOrderMsg.style.display = 'block';
      checkoutBtn.disabled = true;
    } else {
      minOrderMsg.style.display = 'none';
      checkoutBtn.disabled = false;
    }
  }
  
  // Вызываем при любом изменении корзины
  updateOrderButton();