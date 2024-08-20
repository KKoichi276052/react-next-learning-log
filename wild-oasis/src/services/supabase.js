import { createClient } from '@supabase/supabase-js';
const supabaseUrl = 'https://tmhumtmbceeomavyqeyd.supabase.co';
const supabaseKey =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InRtaHVtdG1iY2Vlb21hdnlxZXlkIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjQxNDQ2MTMsImV4cCI6MjAzOTcyMDYxM30.Q2i3kvammxpEwzKJjzyT7lMR6Mg5RBQN58YIP4Gs8Dk';
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
