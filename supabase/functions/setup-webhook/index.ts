const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const telegramToken = Deno.env.get('TELEGRAM_BOT_TOKEN')!;
    const webhookUrl = `https://byuphfwqugmgewmvvjzz.supabase.co/functions/v1/telegram-webhook`;

    // Set webhook for Telegram bot
    const response = await fetch(
      `https://api.telegram.org/bot${telegramToken}/setWebhook`,
      {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          url: webhookUrl,
          allowed_updates: ['message']
        })
      }
    );

    const result = await response.json();
    
    if (result.ok) {
      return new Response(
        JSON.stringify({ 
          success: true, 
          message: 'Webhook berhasil disetup!',
          webhook_url: webhookUrl,
          result: result
        }),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    } else {
      return new Response(
        JSON.stringify({ 
          success: false, 
          error: result.description,
          result: result
        }),
        { status: 400, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

  } catch (error) {
    console.error('Error setting up webhook:', error);
    return new Response(
      JSON.stringify({ error: 'Failed to setup webhook' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});