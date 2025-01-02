import { useEffect } from 'react';

const ChatbotEmbed = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://www.chatbase.co/embed.min.js';
    script.async = true;
    script.setAttribute('chatbotId', 'UdNJVEhQt4ro3CElgDmyz');
    script.setAttribute('domain', 'www.chatbase.co');
    document.body.appendChild(script);
  }, []);

  return (
    <script>
      {`
        window.embeddedChatbotConfig = {
          chatbotId: "UdNJVEhQt4ro3CElgDmyz",
          domain: "www.chatbase.co"
        };
      `}
    </script>
  );
};

export default ChatbotEmbed;
