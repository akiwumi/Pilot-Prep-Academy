import { createClient } from '@supabase/supabase-js';

function mustGetEnv(name: string): string {
  // Vite exposes only VITE_* vars to client code
  const value = import.meta.env[name] as string | undefined;
  if (!value) {
    throw new Error(
      `[supabase] Missing env var ${name}. Add it to .env.local (see env.example).`
    );
  }
  return value;
}

export const supabaseUrl = mustGetEnv('VITE_SUPABASE_URL');
export const supabaseAnonKey = mustGetEnv('VITE_SUPABASE_ANON_KEY');

export const supabase = createClient(supabaseUrl, supabaseAnonKey);


