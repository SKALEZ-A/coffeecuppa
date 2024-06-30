import { createClient, SupabaseClient } from '@supabase/supabase-js'

// Create and export a single supabase client for interacting with your database
const supabaseUrl: string = 'https://ltsimenqyeaglhukmwti.supabase.co'
const supabaseKey: string = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imx0c2ltZW5xeWVhZ2xodWttd3RpIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MTMzMTkzMjYsImV4cCI6MjAyODg5NTMyNn0.GDviTOuUD1u1kQ6CYGzHSG_Gje6rnWr7bek21Gpl6Ws'

export const supabase: SupabaseClient = createClient(supabaseUrl, supabaseKey)
