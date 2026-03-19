import { createClient } from '@supabase/supabase-js';
import dotenv from 'dotenv';
dotenv.config();

const supabaseUrl = process.env.SUPABASE_URL || '';
const supabaseKey = process.env.SUPABASE_KEY || '';

// Inicializamos o Supabase apenas se as chaves existirem, para não quebrar em dev test
export const supabase = (supabaseUrl && supabaseKey)
    ? createClient(supabaseUrl, supabaseKey)
    : null;

if (!supabase) {
    console.warn("⚠️ SUPABASE_URL ou SUPABASE_KEY ausentes no .env. Dados rodando em modo Mock/Reserva local.");
}
