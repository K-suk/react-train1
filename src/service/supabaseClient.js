import { createClient } from '@supabase/supabase-js';

const supabaseUrl = 'https://mjwfoannmthmlbxeijdj.supabase.co';
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im1qd2ZvYW5ubXRobWxieGVpamRqIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcwNDU0MTcsImV4cCI6MjA1MjYyMTQxN30.ZsJPtww70jkHp9R0qSdIzC3PK3ltaS-jTKWWIJqWFm8'; // Supabaseのanonキー

export const supabase = createClient(supabaseUrl, supabaseAnonKey);