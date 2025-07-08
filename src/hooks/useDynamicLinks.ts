import { useState, useEffect } from 'react';
import { supabase } from '@/integrations/supabase/client';

interface DynamicLink {
  id: string;
  link_type: string;
  url: string;
  title?: string;
  description?: string;
  is_active: boolean;
  created_at: string;
  updated_at: string;
}

export const useDynamicLinks = () => {
  const [links, setLinks] = useState<DynamicLink[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchLinks = async () => {
    try {
      setLoading(true);
      const { data, error } = await supabase
        .from('dynamic_links')
        .select('*')
        .eq('is_active', true);

      if (error) throw error;
      setLinks(data || []);
    } catch (err) {
      console.error('Error fetching dynamic links:', err);
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const getDanaKagetLink = () => {
    return links.find(link => link.link_type === 'dana_kaget');
  };

  useEffect(() => {
    fetchLinks();

    // Set up real-time subscription for link updates
    const channel = supabase
      .channel('dynamic-links-changes')
      .on(
        'postgres_changes',
        {
          event: '*',
          schema: 'public',
          table: 'dynamic_links'
        },
        () => {
          fetchLinks();
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  }, []);

  return {
    links,
    loading,
    error,
    getDanaKagetLink,
    refetch: fetchLinks
  };
};