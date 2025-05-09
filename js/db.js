// Подключение к Supabase
import { createClient } from 'https://esm.sh/@supabase/supabase-js';

// ! ЗАМЕНИТЕ ЭТИ ДАННЫЕ НА ВАШИ ИЗ SUPABASE !
const supabaseUrl = 'https://eleyaqjrlhodkyzxlvcc.supabase.co'; // Ваш Project URL
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVsZXlhcWpybGhvZGt5enhsdmNjIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDY4MTU0NTUsImV4cCI6MjA2MjM5MTQ1NX0.H2SHCiNpNTZncjWB0tlqjYGeSzXCJL-dFoiHE0jb0GU'; // Ваш anon/public key

// Создаем и экспортируем клиент
export const supabase = createClient(supabaseUrl, supabaseKey);

// Для теста (опционально)
console.log("Supabase подключен:", supabase);
