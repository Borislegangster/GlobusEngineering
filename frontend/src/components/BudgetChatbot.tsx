import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircleIcon, XIcon, SendIcon, SparklesIcon } from 'lucide-react';
import axios from 'axios';

export function BudgetChatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ text: string; sender: 'bot' | 'user' }[]>([
    { text: "Bonjour ! Je suis l'assistant IA de Globus BTP. Souhaitez-vous une estimation de budget pour votre projet de construction ?", sender: 'bot' }
  ]);
  const [input, setInput] = useState('');
  const [step, setStep] = useState(0);
  const [formData, setFormData] = useState({ surface_m2: 0, building_type: 'residential', finish_quality: 'standard' });
  const [loading, setLoading] = useState(false);

  const handleSend = async () => {
    if (!input.trim()) return;

    const userMsg = input;
    setMessages(prev => [...prev, { text: userMsg, sender: 'user' }]);
    setInput('');
    setLoading(true);

    let botReply = "Je n'ai pas compris.";

    try {
      if (step === 0) {
        botReply = "Super ! Quelle est la surface estimée en m² ?";
        setStep(1);
      } else if (step === 1) {
        const num = parseFloat(userMsg);
        if (isNaN(num)) {
          botReply = "Veuillez entrer un nombre valide pour la surface (ex: 150).";
        } else {
          setFormData(prev => ({ ...prev, surface_m2: num }));
          botReply = "C'est noté. S'agit-il d'un bâtiment 'residential' ou 'commercial' ?";
          setStep(2);
        }
      } else if (step === 2) {
        if (userMsg.toLowerCase().includes('commer')) {
           setFormData(prev => ({ ...prev, building_type: 'commercial' }));
        }
        botReply = "Et pour les finitions : 'standard', 'premium' ou 'luxury' ?";
        setStep(3);
      } else if (step === 3) {
        const quality = userMsg.toLowerCase().includes('lux') ? 'luxury' : userMsg.toLowerCase().includes('prem') ? 'premium' : 'standard';
        setFormData(prev => ({ ...prev, finish_quality: quality }));

        // Appeler l'API FastAPI
        const response = await axios.post('http://localhost:8000/api/chatbot/estimate', {
            surface_m2: formData.surface_m2,
            building_type: formData.building_type,
            finish_quality: quality
        });

        botReply = response.data.message;
        setStep(0); // Reset pour recommencer
      }
    } catch (error) {
       console.error(error);
       botReply = "Désolé, je rencontre un problème de connexion avec mes serveurs d'estimation. Veuillez réessayer plus tard.";
    }

    setTimeout(() => {
      setMessages(prev => [...prev, { text: botReply, sender: 'bot' }]);
      setLoading(false);
    }, 600);
  };

  return (
    <>
      {/* Bouton d'ouverture (fixé en bas à gauche pour ne pas gêner WhatsApp qui est à droite) */}
      <motion.button
        onClick={() => setIsOpen(true)}
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: isOpen ? 0 : 1, scale: isOpen ? 0.5 : 1 }}
        whileHover={{ scale: 1.1 }}
        className="fixed bottom-6 left-6 z-50 bg-globus-blue hover:bg-globus-blue-dark text-white p-4 rounded-full shadow-2xl flex items-center justify-center pointer-events-auto"
        style={{ pointerEvents: isOpen ? 'none' : 'auto' }}
      >
        <SparklesIcon className="w-6 h-6" />
      </motion.button>

      {/* Fenêtre du Chatbot */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 50, scale: 0.9 }}
            className="fixed bottom-6 left-6 z-50 w-[350px] bg-white rounded-2xl shadow-2xl border border-gray-100 overflow-hidden flex flex-col"
          >
            {/* Header */}
            <div className="bg-globus-blue p-4 text-white flex justify-between items-center shadow-md z-10">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center">
                  <SparklesIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h3 className="font-montserrat font-bold text-sm leading-tight">Globus IA</h3>
                  <p className="text-[10px] text-blue-200">Estimateur de budget</p>
                </div>
              </div>
              <button onClick={() => setIsOpen(false)} className="text-white/80 hover:text-white transition-colors">
                <XIcon className="w-5 h-5" />
              </button>
            </div>

            {/* Messages Area */}
            <div className="flex-1 p-4 h-[300px] overflow-y-auto bg-gray-50 flex flex-col gap-3">
              {messages.map((msg, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`max-w-[85%] p-3 text-sm rounded-2xl ${
                    msg.sender === 'bot'
                      ? 'bg-white border border-gray-200 text-gray-800 rounded-tl-sm self-start shadow-sm'
                      : 'bg-globus-orange text-white rounded-tr-sm self-end shadow-sm'
                  }`}
                >
                  {msg.text}
                </motion.div>
              ))}
              {loading && (
                <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="bg-white border border-gray-200 text-gray-500 rounded-2xl rounded-tl-sm p-3 self-start text-xs flex gap-1">
                  <span className="animate-bounce">.</span><span className="animate-bounce delay-100">.</span><span className="animate-bounce delay-200">.</span>
                </motion.div>
              )}
            </div>

            {/* Input Area */}
            <div className="p-3 bg-white border-t border-gray-100">
              <form onSubmit={(e) => { e.preventDefault(); handleSend(); }} className="flex gap-2">
                <input
                  type="text"
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  placeholder="Tapez votre réponse..."
                  className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-globus-blue focus:ring-1 focus:ring-globus-blue"
                />
                <button
                  type="submit"
                  disabled={!input.trim() || loading}
                  className="bg-globus-orange text-white w-10 h-10 rounded-full flex items-center justify-center hover:bg-globus-orange-hover disabled:opacity-50 transition-colors"
                >
                  <SendIcon className="w-4 h-4" />
                </button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
