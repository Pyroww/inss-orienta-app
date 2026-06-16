import { createClient } from '@supabase/supabase-js';

// Você vai pegar essas duas chaves lá no painel do seu Supabase 
// em: Project Settings -> API
// No Vite, puxamos as variáveis usando import.meta.env
const supabaseUrl = import.meta.env.VITE_SUPABASE_URL;
const supabaseKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = createClient(supabaseUrl, supabaseKey);