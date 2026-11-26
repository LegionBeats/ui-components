DROP POLICY IF EXISTS "Anyone can view pending components" ON public.pending_components;
REVOKE SELECT ON TABLE public.pending_components FROM PUBLIC, anon, authenticated;
GRANT SELECT ON TABLE public.pending_components TO service_role;