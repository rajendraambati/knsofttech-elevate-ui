import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { ScrollArea } from '@/components/ui/scroll-area';

interface Message {
  id: string;
  text: string;
  isUser: boolean;
  timestamp: Date;
}

interface ChatBotProps {
  // No props needed for knowledge-based chatbot
}

const ChatBot: React.FC<ChatBotProps> = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  // Knowledge base about Harshini
  const knowledgeBase = `
    My name is Harshini. I was born in Chennai, brought up in Bangalore, and my native place is Nellore. Family means everything 
    to me, and my mom is truly my first love and my greatest source of strength. Without her, I cannot even imagine my life. Along 
    with her, I love my dad and my grandmother very deeply, but my mom has always been my everything.

    I did my schooling in Bangalore. As a child, I was quite naughty and playful, but when it came to studies, I was obedient and 
    responsible. I was never a brilliant student—I was more on the average side—and honestly, I used to hate going to school. Still, 
    I managed to pass and move forward. Later, I joined Narayana Pre-University College, and this phase was very memorable for me. 
    It was here that I discovered my passion for dance and acting. Dancing became such an important part of my life, and I received 
    many awards and appreciation for my performances. During this time, I also made some very close friends, including my best 
    friend, Chaitra Reddy, who has always been an important part of my journey.

    After that, I joined Vemana Institute of Technology for engineering. College life was full of fun, happiness, sadness, and even 
    fights, but it was one of the best times of my life. I met another best friend, Yoshika Reddy, and together with Chaitra, the 
    three of us shared countless memories. Even if we fought sometimes, we always came back to each other. I also continued my 
    passion for dance during this time.

    But then, life changed unexpectedly. When COVID struck, everything moved online, and my father was diagnosed with cancer. That 
    moment turned my life upside down. While dealing with that pain, I also found love in my cousin, Harsha, whom we call "Bava" in 
    South India. He became not just my love but also my best friend and biggest support. We planned to move to the US together, but 
    while he got his visa, I couldn't. This created a long-distance relationship that was filled with struggles and fights. At the 
    same time, my father's health kept getting worse, and eventually, I lost him. His passing was the most painful and traumatic 
    moment of my life. Along with that, my relationship also went through many challenges, and we eventually stopped talking. I 
    felt helpless, lonely, and completely lost.

    Now, at 24, I am still figuring myself out. I am currently doing my internship at KN Soft Company, and I feel blessed to have 
    found supportive colleagues and friends there who help me grow professionally. I know I am a very kind-hearted, emotional, and 
    sometimes stubborn person. I feel things deeply—whether it's love, happiness, or pain—but I believe these qualities make me who 
    I am.

    Dance is still my biggest passion, and even though life has thrown many struggles my way, I continue to move forward. My 
    journey so far has been filled with ups and downs, but I am learning, growing, and becoming stronger every single day.
  `;

  const generateResponse = (question: string): string => {
    const q = question.toLowerCase();
    
    // Website-related questions
    if (q.includes('website') || q.includes('site') || q.includes('work') || q.includes('how does this')) {
      return "This is a personal website where you can learn about me and ask questions about my life, experiences, and journey. Feel free to ask me anything about my background, education, family, or experiences!";
    }
    
    // Personal information questions
    if (q.includes('name')) {
      return "My name is Harshini.";
    }
    
    if (q.includes('born') || q.includes('birth') || q.includes('where')) {
      return "I was born in Chennai, brought up in Bangalore, and my native place is Nellore.";
    }
    
    if (q.includes('family') || q.includes('mom') || q.includes('mother') || q.includes('dad') || q.includes('father')) {
      return "Family means everything to me. My mom is truly my first love and my greatest source of strength - I cannot even imagine my life without her. I also love my dad and my grandmother very deeply. Unfortunately, I lost my father to cancer, which was the most painful and traumatic moment of my life.";
    }
    
    if (q.includes('school') || q.includes('education') || q.includes('study') || q.includes('college')) {
      return "I did my schooling in Bangalore. I was quite naughty and playful as a child, but obedient with studies. Later, I joined Narayana Pre-University College, where I discovered my passion for dance and acting. After that, I joined Vemana Institute of Technology for engineering. College life was one of the best times of my life!";
    }
    
    if (q.includes('dance') || q.includes('dancing') || q.includes('passion') || q.includes('hobby')) {
      return "Dance is my biggest passion! I discovered it during my time at Narayana Pre-University College and received many awards and appreciation for my performances. Even though life has thrown many struggles my way, I continue to pursue dance and it remains my greatest passion.";
    }
    
    if (q.includes('friend') || q.includes('chaitra') || q.includes('yoshika')) {
      return "I have two very close best friends - Chaitra Reddy, whom I met during my pre-university college days, and Yoshika Reddy, whom I met during engineering college. Together, the three of us shared countless memories. Even if we fought sometimes, we always came back to each other.";
    }
    
    if (q.includes('love') || q.includes('harsha') || q.includes('bava') || q.includes('relationship')) {
      return "I found love in my cousin, Harsha, whom we call 'Bava' in South India. He became not just my love but also my best friend and biggest support. We planned to move to the US together, but while he got his visa, I couldn't. This created challenges in our long-distance relationship, and we eventually stopped talking.";
    }
    
    if (q.includes('work') || q.includes('job') || q.includes('intern') || q.includes('kn soft') || q.includes('company')) {
      return "I am currently doing my internship at KN Soft Company. I feel blessed to have found supportive colleagues and friends there who help me grow professionally.";
    }
    
    if (q.includes('age') || q.includes('old') || q.includes('24')) {
      return "I am 24 years old and still figuring myself out. I'm learning, growing, and becoming stronger every single day.";
    }
    
    if (q.includes('covid') || q.includes('pandemic') || q.includes('difficult') || q.includes('struggle')) {
      return "When COVID struck, everything changed in my life. My father was diagnosed with cancer during this time, and everything moved online. It was a very difficult period that completely turned my life upside down.";
    }
    
    // Default response for general questions
    return "I'm here to share about my life and experiences! You can ask me about my family, education, dance passion, friends, work at KN Soft Company, or any other aspect of my journey. What would you like to know?";
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async () => {
    if (!inputValue.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputValue,
      isUser: true,
      timestamp: new Date(),
    };

    setMessages(prev => [...prev, userMessage]);
    const currentInput = inputValue;
    setInputValue('');
    setIsLoading(true);

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse = generateResponse(currentInput);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: botResponse,
        isUser: false,
        timestamp: new Date(),
      };
      setMessages(prev => [...prev, botMessage]);
      setIsLoading(false);
    }, 1000);
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      {/* Chat Window */}
      <div
        className={`absolute bottom-16 right-0 w-[350px] h-[500px] bg-background border border-border rounded-lg shadow-xl transition-all duration-300 ease-in-out transform origin-bottom-right ${
          isOpen 
            ? 'opacity-100 scale-100 translate-y-0' 
            : 'opacity-0 scale-75 translate-y-4 pointer-events-none'
        } max-w-[calc(100vw-3rem)] max-h-[calc(100vh-6rem)]`}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border bg-muted/50 rounded-t-lg">
          <div className="flex items-center gap-2">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <h3 className="font-semibold text-sm">Chat Support</h3>
          </div>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(false)}
            className="h-6 w-6 hover:bg-muted"
          >
            <X className="h-4 w-4" />
          </Button>
        </div>

        {/* Messages */}
        <ScrollArea className="flex-1 h-[380px] p-4">
          <div className="space-y-4">
            {messages.length === 0 && (
              <div className="text-center text-muted-foreground text-sm py-8">
                <MessageCircle className="h-8 w-8 mx-auto mb-2 opacity-50" />
                <p>Start a conversation!</p>
              </div>
            )}
            {messages.map((message) => (
              <div
                key={message.id}
                className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
              >
                <div
                  className={`max-w-[80%] rounded-lg px-3 py-2 text-sm ${
                    message.isUser
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-muted text-foreground'
                  }`}
                >
                  {message.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-muted text-foreground rounded-lg px-3 py-2 text-sm">
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce"></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.1s' }}></div>
                    <div className="w-2 h-2 bg-current rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                  </div>
                </div>
              </div>
            )}
            <div ref={messagesEndRef} />
          </div>
        </ScrollArea>

        {/* Input */}
        <div className="p-4 border-t border-border">
          <div className="flex gap-2">
            <Input
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onKeyPress={handleKeyPress}
              placeholder="Type your message..."
              className="flex-1 text-sm"
              disabled={isLoading}
            />
            <Button
              onClick={sendMessage}
              size="icon"
              disabled={!inputValue.trim() || isLoading}
              className="shrink-0"
            >
              <Send className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="icon"
        className={`w-14 h-14 rounded-full shadow-lg hover:scale-110 transition-all duration-200 ${
          isOpen ? 'bg-destructive hover:bg-destructive/90' : 'bg-primary hover:bg-primary/90'
        }`}
      >
        {isOpen ? (
          <X className="h-6 w-6" />
        ) : (
          <MessageCircle className="h-6 w-6" />
        )}
      </Button>
    </div>
  );
};

export default ChatBot;