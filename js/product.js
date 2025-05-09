import { supabase } from './db.js';

async function loadProducts() {
  const { data, error } = await supabase.from('products').select('*');
  if (error) console.error(error);
  return data;
}
