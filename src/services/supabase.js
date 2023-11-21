import { createClient } from "@supabase/supabase-js";

export const supabaseUrl = "https://yzsdlsgyedmolswmlqia.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl6c2Rsc2d5ZWRtb2xzd21scWlhIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTQ3Mjk0NDEsImV4cCI6MjAxMDMwNTQ0MX0.e_HV7TRIYvmPe_jQfXy2sTIwN118lSC_qzwYBEZ5E3M";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
