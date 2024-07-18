import { Router } from 'express';
import { supabase } from '../server';

const router = Router();

// Create user API
router.post('/register', async (req, res) => {
  const { username, email, password } = req.body;
  let { data, error } = await supabase.auth.signUp({
    email,
    password,
  });

  const id = data.user?.id;
  const result = await supabase
    .from('User')
    .insert([{ userid: id, username }])
    .select();
  return res.json({ data, error, result });
});

// Sign in API
router.post('/login', async (req, res) => {
  const { email, password } = req.body;
  let { data, error } = await supabase.auth.signInWithPassword({
    email,
    password,
  });

  return { data, error };
});

export default router;
