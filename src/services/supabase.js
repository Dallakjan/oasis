import { createClient } from '@supabase/supabase-js';

// Create a single supabase client for interacting with your database
export const supabaseUrl = 'https://fziildzidjrcaermdmfh.supabase.co';
const supabase = createClient(
  'https://fziildzidjrcaermdmfh.supabase.co',
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImZ6aWlsZHppZGpyY2Flcm1kbWZoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Mzc5OTM0NzcsImV4cCI6MjA1MzU2OTQ3N30.Uw_ak51NlSrIyybT0gcPrVGY7ShEAO_xSw1VWTHdk6E'
);

export default supabase;
