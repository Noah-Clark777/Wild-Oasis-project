import { createClient } from "@supabase/supabase-js";
export const supabaseUrl = "https://cuzcykrjgcwidaslorcl.supabase.co";
const supabaseKey = "sb_publishable_zYF2bgH7vUhF6IeoIi279A_QFxkRyAY";
const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
