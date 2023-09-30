//Paste the code from Supabase

async function session() {
const { data, error } = await supabase.auth.getSession()
console.log(data);
}

session();