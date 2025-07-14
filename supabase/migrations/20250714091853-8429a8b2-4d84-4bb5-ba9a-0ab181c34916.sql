-- Create table for user submissions
CREATE TABLE public.user_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  full_name TEXT NOT NULL,
  dana_number TEXT NOT NULL,
  email TEXT,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.user_submissions ENABLE ROW LEVEL SECURITY;

-- Create policy for public access (since this is for lead collection)
CREATE POLICY "Anyone can submit data" 
ON public.user_submissions 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Public can view submissions" 
ON public.user_submissions 
FOR SELECT 
USING (true);

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_user_submissions_updated_at
BEFORE UPDATE ON public.user_submissions
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();