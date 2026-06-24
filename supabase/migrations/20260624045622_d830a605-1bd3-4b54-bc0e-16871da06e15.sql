
CREATE TABLE public.pending_components (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  url TEXT NOT NULL,
  note TEXT,
  status TEXT NOT NULL DEFAULT 'pending',
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

GRANT SELECT, INSERT ON public.pending_components TO anon;
GRANT SELECT, INSERT ON public.pending_components TO authenticated;
GRANT ALL ON public.pending_components TO service_role;

ALTER TABLE public.pending_components ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Anyone can view pending components"
  ON public.pending_components FOR SELECT
  USING (true);

CREATE POLICY "Anyone can add pending components"
  ON public.pending_components FOR INSERT
  WITH CHECK (
    url ~ '^https?://'
    AND length(url) <= 500
    AND (note IS NULL OR length(note) <= 500)
  );
