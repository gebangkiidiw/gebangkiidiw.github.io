-- Create table for storing dynamic affiliate links
CREATE TABLE public.dynamic_links (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  link_type TEXT NOT NULL UNIQUE,
  url TEXT NOT NULL,
  title TEXT,
  description TEXT,
  is_active BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.dynamic_links ENABLE ROW LEVEL SECURITY;

-- Create policy to allow read access to everyone (since this is for public website)
CREATE POLICY "Allow public read access to dynamic links" 
ON public.dynamic_links 
FOR SELECT 
USING (true);

-- Create policy to allow insert/update (for bot updates)
CREATE POLICY "Allow insert and update for dynamic links" 
ON public.dynamic_links 
FOR ALL
USING (true);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_dynamic_links_updated_at
BEFORE UPDATE ON public.dynamic_links
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert default DANA KAGET entry
INSERT INTO public.dynamic_links (link_type, url, title, description) 
VALUES (
  'dana_kaget', 
  '#', 
  'DANA KAGET',
  'Hadiah Mendadak Untukmu'
);