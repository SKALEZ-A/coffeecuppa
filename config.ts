import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Create and export a single supabase client for interacting with your database
const supabaseUrl: string = 'https://ltsimenqyeaglhukmwti.supabase.co'
const supabaseKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0c2ltZW5xeWVhZ2xodWttd3RpIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTcxMzMxOTMyNiwiZXhwIjoyMDI4ODk1MzI2fQ.BtemAbgMK2OuUwEWSSj4U2GhsrXmV5H_oF_q58LSADk'

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey)
