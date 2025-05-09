async function createOrder(items) {
  const { data: { user } } = await supabase.auth.getUser();
  const { error } = await supabase.from('orders').insert([{
    user_id: user.id,
    items
  }]);
  if (error) console.error(error);
  else alert("Заказ оформлен!");
}
