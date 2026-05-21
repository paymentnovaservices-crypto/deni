import React from 'react';
import { motion } from 'framer-motion';
import { MessageSquare } from 'lucide-react';

const MESSAGES = [
  { sender: 'D', text: "bună 😊" },
  { sender: 'G', text: "hey!! ce faci?" },
  { sender: 'D', text: "bine, obosita un pic 😴" },
  { sender: 'G', text: "mi e dor de tine" },
  { sender: 'D', text: "aww 🥺" },
  { sender: 'G', text: "așteptam mesaj de la tine" },
  { sender: 'D', text: "serioooos? 😭" },
  { sender: 'G', text: "tu chiar ai devenit importantă pentru mine" },
  { sender: 'D', text: "goodnighttt 😋❤️" },
  { sender: 'G', text: "you're my favorite notification" },
  { sender: 'G', text: "sleep welllll" },
  { sender: 'D', text: "tu ești cel mai 🥺" },
  { sender: 'G', text: "vreau să vorbesc doar cu tine" },
  { sender: 'G', text: "you make everything feel lighter" },
  { sender: 'D', text: "come here 😭" },
  { sender: 'G', text: "ești persoana mea favorită" },
  { sender: 'G', text: "i'd stay awake for you again" },
  { sender: 'D', "text": "…🥺❤️" }
];

export default function ChatSection() {
  return (
    <section className="w-full py-32 flex flex-col items-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="flex items-center gap-3 mb-12 text-primary"
      >
        <MessageSquare size={24} />
        <h2 className="text-3xl font-serif text-white/90">conversatii</h2>
      </motion.div>

      <div className="w-full max-w-md bg-black/60 border border-white/10 rounded-[3rem] p-6 pt-10 shadow-2xl backdrop-blur-xl relative">
        <div className="absolute top-4 left-1/2 -translate-x-1/2 w-16 h-1.5 bg-white/20 rounded-full" />
        
        <div className="flex flex-col gap-4 mb-4">
          {MESSAGES.map((msg, index) => {
            const isMe = msg.sender === 'G';
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.4, delay: index * 0.15 }}
                className={`flex items-end gap-2 ${isMe ? 'justify-end' : 'justify-start'}`}
              >
                {!isMe && (
                  <div className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center text-xs font-medium text-white/60 mb-1 flex-shrink-0">
                    D
                  </div>
                )}
                
                <div className={`px-4 py-2.5 max-w-[75%] ${
                  isMe 
                    ? 'bg-primary text-primary-foreground rounded-2xl rounded-br-sm' 
                    : 'bg-white/10 text-white rounded-2xl rounded-bl-sm'
                }`}>
                  <p className="text-[15px]">{msg.text}</p>
                </div>

                {isMe && (
                  <div className="w-8 h-8 rounded-full bg-secondary/80 flex items-center justify-center text-xs font-medium text-white mb-1 flex-shrink-0">
                    G
                  </div>
                )}
              </motion.div>
            );
          })}

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: MESSAGES.length * 0.15 + 0.5 }}
            className="flex items-center gap-1 self-start ml-10 mt-2 bg-white/10 px-3 py-2 rounded-full"
          >
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0 }} className="w-1.5 h-1.5 bg-white/50 rounded-full" />
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.2 }} className="w-1.5 h-1.5 bg-white/50 rounded-full" />
            <motion.div animate={{ y: [0, -5, 0] }} transition={{ repeat: Infinity, duration: 1, delay: 0.4 }} className="w-1.5 h-1.5 bg-white/50 rounded-full" />
          </motion.div>
        </div>
        
        <div className="text-right text-[10px] text-white/30 mr-12 mt-2">Delivered</div>
      </div>
    </section>
  );
}
