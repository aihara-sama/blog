ALTER TABLE public.articles ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Allow read access to for all users" ON public.articles FOR
SELECT
  TO anon,
  authenticated USING (true);