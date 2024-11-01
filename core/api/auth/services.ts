import { supabase } from "../../../global_variables/supabase";


async function getUser(id: number){
    const response = await supabase.from("").select("").eq("",id);
    return response.data;
}

export const authServices = {getUser};
