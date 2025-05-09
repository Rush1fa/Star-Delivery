orderForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    const orderData = {
      items: JSON.parse(localStorage.getItem('cart')),
      user: JSON.parse(localStorage.getItem('user')),
      deliveryTime: deliveryTime.value,
      payment: paymentMethod.value,
      comment: comment.value
    };
  
    const response = await fetch('YOUR_SERVER_ENDPOINT/send-order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(orderData)
    });
  
    if (response.ok) {
      localStorage.removeItem('cart');
      window.location.href = 'success.html';
    }
  });