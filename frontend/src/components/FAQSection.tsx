import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDownIcon } from 'lucide-react';
export function FAQSection() {
  const faqs = [
  {
    q: "Combien coûte la construction d'une maison clé en main ?",
    a: 'Le coût varie en fonction de la surface, des matériaux choisis et des finitions. Nous vous invitons à utiliser notre estimateur de budget ou à nous contacter pour un devis précis et personnalisé.'
  },
  {
    q: 'Quels sont les délais moyens de construction ?',
    a: "Pour une villa standard, comptez entre 6 et 8 mois à partir de l'obtention du permis de construire. Un planning détaillé vous est fourni avant le début des travaux."
  },
  {
    q: "Gérez-vous l'obtention du permis de construire ?",
    a: "Oui, notre service 'clé en main' inclut la constitution du dossier et le suivi administratif jusqu'à l'obtention de votre permis de construire."
  },
  {
    q: 'Proposez-vous une garantie sur vos constructions ?',
    a: 'Absolument. Toutes nos constructions sont couvertes par la garantie décennale, vous protégeant contre les vices cachés pendant 10 ans.'
  },
  {
    q: 'Puis-je visiter le chantier pendant les travaux ?',
    a: "Oui, nous organisons des visites régulières avec le chef de chantier pour vous montrer l'avancement. Pour des raisons de sécurité, les visites libres ne sont pas autorisées."
  }];

  const [openIndex, setOpenIndex] = useState<number | null>(0);
  return (
    <section className="py-16 md:py-24 bg-globus-light">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-16">
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            className="inline-flex items-center justify-center gap-4 mb-4">
            
            <div className="h-1 w-8 bg-globus-orange"></div>
            <span className="font-montserrat font-bold text-globus-orange uppercase tracking-wider text-sm">
              FAQ
            </span>
            <div className="h-1 w-8 bg-globus-orange"></div>
          </motion.div>
          <motion.h2
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              delay: 0.1
            }}
            className="font-montserrat font-extrabold text-3xl md:text-4xl text-globus-blue-dark">
            
            Questions Fréquentes
          </motion.h2>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 20
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.4,
              delay: index * 0.1
            }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
            
              <button
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none">
              
                <span className="font-montserrat font-bold text-globus-blue-dark pr-8">
                  {faq.q}
                </span>
                <ChevronDownIcon
                className={`w-5 h-5 text-globus-orange transition-transform duration-300 flex-shrink-0 ${openIndex === index ? 'rotate-180' : ''}`} />
              
              </button>
              <AnimatePresence>
                {openIndex === index &&
              <motion.div
                initial={{
                  height: 0,
                  opacity: 0
                }}
                animate={{
                  height: 'auto',
                  opacity: 1
                }}
                exit={{
                  height: 0,
                  opacity: 0
                }}
                transition={{
                  duration: 0.3
                }}>
                
                    <div className="px-6 pb-5 font-opensans text-globus-gray border-t border-gray-50 pt-4">
                      {faq.a}
                    </div>
                  </motion.div>
              }
              </AnimatePresence>
            </motion.div>
          )}
        </div>

        <div className="text-center mt-10">
          <p className="font-opensans text-globus-gray mb-4">
            Une autre question ?
          </p>
          <button className="text-globus-orange font-montserrat font-bold hover:underline">
            Posez-la à notre Chatbot en bas à droite !
          </button>
        </div>
      </div>
    </section>);

}