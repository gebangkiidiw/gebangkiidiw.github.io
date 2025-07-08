import { createClient } from 'https://esm.sh/@supabase/supabase-js@2.50.3';

const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Headers': 'authorization, x-client-info, apikey, content-type',
};

interface TelegramUpdate {
  message?: {
    from: {
      id: number;
      username?: string;
      first_name: string;
    };
    text: string;
    chat: {
      id: number;
    };
  };
}

Deno.serve(async (req) => {
  // Handle CORS preflight requests
  if (req.method === 'OPTIONS') {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const supabaseUrl = Deno.env.get('SUPABASE_URL')!;
    const supabaseKey = Deno.env.get('SUPABASE_SERVICE_ROLE_KEY')!;
    const telegramToken = Deno.env.get('TELEGRAM_BOT_TOKEN')!;
    const channelId = '@gebangkiidiw';

    const supabase = createClient(supabaseUrl, supabaseKey);

    if (req.method === 'POST') {
      const update: TelegramUpdate = await req.json();
      console.log('Received Telegram update:', JSON.stringify(update, null, 2));
      
      if (update.message?.text) {
        const text = update.message.text;
        const chatId = update.message.chat.id;
        const userName = update.message.from.first_name;
        
        console.log(`Received message from ${userName}: ${text}`);
        
        // Check if message contains a URL for DANA KAGET
        const urlPattern = /(https?:\/\/[^\s]+)/g;
        const urls = text.match(urlPattern);
        
        if (urls && urls.length > 0) {
          const newUrl = urls[0];
          console.log(`Found URL: ${newUrl}`);
          
          // Update the DANA KAGET link in database
          const { error: updateError } = await supabase
            .from('dynamic_links')
            .update({ 
              url: newUrl, 
              updated_at: new Date().toISOString() 
            })
            .eq('link_type', 'dana_kaget');
          
          if (updateError) {
            console.error('Error updating link:', updateError);
            // Send error message to user
            await fetch(
              `https://api.telegram.org/bot${telegramToken}/sendMessage`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  chat_id: chatId,
                  text: "❌ Gagal mengupdate link. Silakan coba lagi."
                })
              }
            );
            return new Response('Error updating link', { status: 500, headers: corsHeaders });
          }
          
          console.log('Successfully updated link in database');
          
          // Send message to Telegram channel
          const photoUrl = "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhSkcALmNX6zttlrpuOFCI3_mKxQE0WpkB96OPWQ4RaFoC9TXz4n78X1Y4J2sc9adOr0ZHZcRXNmftqToSGGTtiJ92HVzjKG1d7CVNVcg9Fc33Ty0pzv6v5Ro0taYkbMSjm42RqagFz4Sxzdxs9G1LspvMPhnGv6bw4Jj1jqvI9sB2SQBMRUYVsSjEPbMdA/s16000/photo_2023-12-20%2019.05.37.jpeg";
          const caption = "Aku lagi sebar DANA Kaget nih! Yuk, sikat segera sebelum melayang 💸💸💸";
          const buttonText = "DAGET 💸";
          
          const telegramPayload = {
            chat_id: channelId,
            photo: photoUrl,
            caption: caption,
            reply_markup: {
              inline_keyboard: [[{
                text: buttonText,
                url: newUrl
              }]]
            }
          };
          
          const telegramResponse = await fetch(
            `https://api.telegram.org/bot${telegramToken}/sendPhoto`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(telegramPayload)
            }
          );
          
          if (!telegramResponse.ok) {
            console.error('Error sending Telegram message:', await telegramResponse.text());
            // Send error message to user
            await fetch(
              `https://api.telegram.org/bot${telegramToken}/sendMessage`,
              {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                  chat_id: chatId,
                  text: "❌ Link berhasil diupdate tapi gagal mengirim ke channel. Silakan cek channel manual."
                })
              }
            );
            return new Response('Error sending message', { status: 500, headers: corsHeaders });
          }
          
          console.log('Successfully sent message to channel');
          
          // Reply to the user who sent the link
          await fetch(
            `https://api.telegram.org/bot${telegramToken}/sendMessage`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                chat_id: chatId,
                text: `✅ Link DANA KAGET berhasil diupdate!\n\n🔗 Link baru: ${newUrl}\n\n📤 Pesan sudah dikirim ke channel @gebangkiidiw\n💻 Website otomatis terupdate!`
              })
            }
          );
          
          return new Response(
            JSON.stringify({ 
              success: true, 
              message: 'Link updated and message sent',
              new_url: newUrl 
            }),
            { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
          );
        } else {
          // Reply that no valid URL was found
          await fetch(
            `https://api.telegram.org/bot${telegramToken}/sendMessage`,
            {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                chat_id: chatId,
                text: "❌ Tidak ada link yang valid ditemukan.\n\n📝 Kirim link DANA KAGET yang baru untuk mengupdate website.\n\n💡 Format: kirim pesan yang berisi link lengkap (contoh: https://example.com)"
              })
            }
          );
        }
      }
      
      return new Response('OK', { headers: corsHeaders });
    }

    // GET request to check current DANA KAGET link
    if (req.method === 'GET') {
      const { data, error } = await supabase
        .from('dynamic_links')
        .select('*')
        .eq('link_type', 'dana_kaget')
        .single();

      if (error) {
        return new Response(
          JSON.stringify({ error: error.message }),
          { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
        );
      }

      return new Response(
        JSON.stringify(data),
        { headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
      );
    }

    return new Response('Method not allowed', { status: 405, headers: corsHeaders });

  } catch (error) {
    console.error('Error:', error);
    return new Response(
      JSON.stringify({ error: 'Internal server error' }),
      { status: 500, headers: { ...corsHeaders, 'Content-Type': 'application/json' } }
    );
  }
});