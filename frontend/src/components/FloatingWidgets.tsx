import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircleIcon, ArrowUpIcon, XIcon, SendIcon } from 'lucide-react';

export function FloatingWidgets() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isWhatsAppOpen, setIsWhatsAppOpen] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  const messageTemplate = "Bonjour Globus Engineering, je vous contacte depuis votre site web. J'aimerais avoir plus d'informations concernant...";

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4 pointer-events-none">
      <AnimatePresence>
        {isWhatsAppOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            className="bg-white rounded-2xl shadow-2xl p-4 w-72 mb-2 pointer-events-auto origin-bottom-right"
          >
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-[#25D366] rounded-full flex items-center justify-center">
                  <MessageCircleIcon className="w-4 h-4 text-white" />
                </div>
                <div>
                  <h4 className="font-montserrat font-bold text-sm text-gray-800">Discutons sur WhatsApp</h4>
                  <p className="text-xs text-gray-500">Nous répondons généralement en quelques minutes</p>
                </div>
              </div>
              <button onClick={() => setIsWhatsAppOpen(false)} className="text-gray-400 hover:text-gray-600">
                <XIcon className="w-5 h-5" />
              </button>
            </div>
            
            <a
              href={`https://wa.me/33123456789?text=${encodeURIComponent(messageTemplate)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#25D366] hover:bg-[#1EBE5C] text-white font-montserrat font-bold text-sm py-3 px-4 rounded-xl w-full flex items-center justify-center gap-2 transition-colors"
            >
              <SendIcon className="w-4 h-4" />
              Démarrer la discussion
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center gap-4 pointer-events-auto">
        <AnimatePresence>
          {showScrollTop && (
            <motion.button
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.5 }}
              onClick={scrollToTop}
              className="w-12 h-12 bg-globus-blue hover:bg-globus-blue-dark text-white rounded-full flex items-center justify-center shadow-lg transition-colors"
              aria-label="Retour en haut"
            >
              <ArrowUpIcon className="w-5 h-5" />
            </motion.button>
          )}
        </AnimatePresence>

        <button
          onClick={() => setIsWhatsAppOpen(!isWhatsAppOpen)}
          className="w-14 h-14 bg-[#25D366] hover:bg-[#1EBE5C] text-white rounded-full flex items-center justify-center shadow-lg transition-transform hover:scale-110"
          aria-label="Contactez-nous sur WhatsApp"
        >
          <MessageCircleIcon className="w-7 h-7" />
        </button>
      </div>
    </div>
  );
}
