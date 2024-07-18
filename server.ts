import express from 'express';
import { createClient } from '@supabase/supabase-js';
import authRoute from './routers/auth';

const supabaseUrl = process.env.SUPABASE_URL!;
const supabaseKey = process.env.SUPABASE_KEY!; //t3 env
export const supabase = createClient(supabaseUrl, supabaseKey);

const PORT = 8000;
const app = express();

app.use(express.json());
app.use('/api/auth', authRoute);

// // Create user API
// app.post('/api/auth/register', async (req, res) => {
//   const { username, email, password } = req.body;
//   let { data, error } = await supabase.auth.signUp({
//     email,
//     password,
//   });

//   const id = data.user?.id;
//   const result = await supabase
//     .from('User')
//     .insert([{ userid: id, username }])
//     .select();
//   return res.json({ data, error, result });
// });

// // Sign in API
// app.post('/api/auth/login', async (req, res) => {
//   const { email, password } = req.body;
//   let { data, error } = await supabase.auth.signInWithPassword({
//     email,
//     password,
//   });

//   return { data, error };
// });

app.listen(PORT, () => console.log(`server is running on ${PORT}`));
