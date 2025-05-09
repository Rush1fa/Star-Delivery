import { createClient } from 'https://esm.sh/@supabase/supabase-js';

export const supabase = createClient(
  'https://ваш-id.supabase.co',
  'eleyaqjrlhodkyzxlvcc' // Из настроек проекта в Supabase
);
