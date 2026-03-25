import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  SearchIcon,
  ChevronDownIcon,
  MessageCircleIcon,
  MailIcon } from
'lucide-react';
import { Link } from 'react-router-dom';
const faqData = [
{
  category: 'Devis & Tarifs',
  items: [
  {
    q: "Combien coûte la construction d'une maison clé en main ?",
    a: 'Le coût varie en fonction de la surface, des matériaux choisis et des finitions. Nous vous invitons à utiliser notre estimateur de budget ou à nous contacter pour un devis précis et personnalisé.'
  },
  {
    q: 'Les devis sont-ils gratuits ?',
    a: "Oui, la première étude de votre projet et l'établissement du devis initial sont entièrement gratuits et sans engagement."
  },
  {
    q: 'Quelles sont les modalités de paiement ?',
    a: "Le paiement s'effectue généralement par appels de fonds échelonnés selon l'avancement des travaux (ex: 10% à la signature, 15% à l'ouverture du chantier, etc.). Un échéancier précis est défini dans le contrat."
  },
  {
    q: 'Le prix annoncé sur le devis peut-il évoluer ?',
    a: 'Nos devis sont fermes et définitifs pour les prestations décrites. Le prix ne peut évoluer que si vous demandez des modifications ou des prestations supplémentaires en cours de chantier (avenants).'
  }]

},
{
  category: 'Délais de Construction',
  items: [
  {
    q: 'Quels sont les délais moyens de construction ?',
    a: "Pour une villa standard, comptez entre 6 et 8 mois à partir de l'obtention du permis de construire. Un planning détaillé vous est fourni avant le début des travaux."
  },
  {
    q: 'Que se passe-t-il en cas de retard ?',
    a: "Nos contrats incluent des pénalités de retard en cas de dépassement du délai de livraison convenu, sauf en cas de force majeure ou d'intempéries exceptionnelles."
  },
  {
    q: 'Puis-je visiter le chantier pendant les travaux ?',
    a: "Oui, nous organisons des visites régulières avec le chef de chantier pour vous montrer l'avancement. Pour des raisons de sécurité, les visites libres ne sont pas autorisées."
  }]

},
{
  category: 'Garanties',
  items: [
  {
    q: 'Proposez-vous une garantie sur vos constructions ?',
    a: 'Absolument. Toutes nos constructions sont couvertes par la garantie décennale, vous protégeant contre les vices cachés pendant 10 ans.'
  },
  {
    q: "Qu'est-ce que la garantie de parfait achèvement ?",
    a: "Elle couvre pendant un an à compter de la réception des travaux tous les désordres signalés par le maître de l'ouvrage, quelles que soient leur nature et leur importance."
  },
  {
    q: "Qu'est-ce que la garantie biennale ?",
    a: 'Aussi appelée garantie de bon fonctionnement, elle couvre pendant deux ans les équipements dissociables de la construction (portes, fenêtres, volets, plomberie apparente, etc.).'
  }]

},
{
  category: 'Administratif',
  items: [
  {
    q: "Gérez-vous l'obtention du permis de construire ?",
    a: "Oui, notre service 'clé en main' inclut la constitution du dossier et le suivi administratif jusqu'à l'obtention de votre permis de construire."
  },
  {
    q: 'Faut-il souscrire une assurance dommages-ouvrage ?',
    a: "Oui, la souscription d'une assurance dommages-ouvrage est obligatoire pour le maître d'ouvrage. Nous pouvons vous accompagner dans cette démarche."
  },
  {
    q: 'Quels documents dois-je fournir pour lancer le projet ?',
    a: "Généralement, nous aurons besoin du titre de propriété du terrain, d'un plan de situation, et d'un relevé topographique. Notre équipe vous guidera étape par étape."
  }]

}];

import { SEOMeta } from '../components/SEOMeta';

export function FAQPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [searchQuery, setSearchQuery] = useState('');
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});
  const toggleItem = (categoryIndex: number, itemIndex: number) => {
    const key = `${categoryIndex}-${itemIndex}`;
    setOpenItems((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };
  // Filter logic
  const filteredData = faqData.
  map((category) => {
    const filteredItems = category.items.filter(
      (item) =>
      item.q.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.a.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...category,
      items: filteredItems
    };
  }).
  filter((category) => category.items.length > 0);
  return (
    <div className="pt-28 pb-20 bg-globus-light min-h-screen">
      <SEOMeta title="Foire aux Questions - Globus BTP" description="Trouvez les réponses à vos questions concernant la construction, le budget, et notre processus d'accompagnement." />
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header & Search */}
        <div className="text-center mb-16">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-4xl md:text-5xl font-montserrat font-extrabold text-globus-blue-dark mb-4">
            
            Foire Aux Questions
          </motion.h1>
          <div className="h-1 w-24 bg-globus-orange mx-auto rounded-full mb-8"></div>

          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
              <SearchIcon className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              className="w-full bg-white border border-gray-200 rounded-xl py-4 pl-12 pr-4 font-opensans text-lg focus:outline-none focus:border-globus-orange focus:ring-2 focus:ring-globus-orange/20 transition-all shadow-sm"
              placeholder="Comment pouvons-nous vous aider ?"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)} />
            
          </div>
        </div>

        {/* FAQ Content */}
        <div className="space-y-12">
          {filteredData.length > 0 ?
          filteredData.map((category, catIdx) =>
          <div key={catIdx}>
                <h2 className="font-montserrat font-bold text-2xl text-globus-blue-dark mb-6 flex items-center gap-3">
                  <div className="w-2 h-6 bg-globus-orange rounded-full"></div>
                  {category.category}
                </h2>
                <div className="space-y-4">
                  {category.items.map((item, itemIdx) => {
                const isOpen = openItems[`${catIdx}-${itemIdx}`];
                return (
                  <motion.div
                    key={itemIdx}
                    initial={{
                      opacity: 0,
                      y: 10
                    }}
                    animate={{
                      opacity: 1,
                      y: 0
                    }}
                    transition={{
                      delay: itemIdx * 0.05
                    }}
                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    
                        <button
                      onClick={() => toggleItem(catIdx, itemIdx)}
                      className="w-full px-6 py-5 text-left flex justify-between items-center focus:outline-none hover:bg-gray-50 transition-colors">
                      
                          <span className="font-montserrat font-bold text-globus-blue-dark pr-8">
                            {item.q}
                          </span>
                          <ChevronDownIcon
                        className={`w-5 h-5 text-globus-orange transition-transform duration-300 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                      
                        </button>
                        <AnimatePresence>
                          {isOpen &&
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
                        
                              <div className="px-6 pb-5 font-opensans text-globus-gray border-t border-gray-50 pt-4 leading-relaxed">
                                {item.a}
                              </div>
                            </motion.div>
                      }
                        </AnimatePresence>
                      </motion.div>);

              })}
                </div>
              </div>
          ) :

          <div className="text-center py-12 bg-white rounded-2xl shadow-sm border border-gray-100">
              <p className="font-opensans text-lg text-globus-gray">
                Aucun résultat trouvé pour "{searchQuery}"
              </p>
            </div>
          }
        </div>

        {/* CTA */}
        <div className="mt-16 bg-globus-blue-dark rounded-3xl p-8 md:p-12 text-center text-white shadow-xl relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="absolute bottom-0 left-0 w-40 h-40 bg-globus-orange opacity-10 rounded-full translate-y-1/3 -translate-x-1/4"></div>

          <div className="relative z-10">
            <h3 className="font-montserrat font-bold text-2xl md:text-3xl mb-4">
              Vous ne trouvez pas votre réponse ?
            </h3>
            <p className="font-opensans text-seconda-blue mb-8 max-w-2xl mx-auto">
              Notre équipe est à votre disposition pour répondre à toutes vos
              questions spécifiques concernant votre projet de construction.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                to="/contact"
                className="bg-globus-orange hover:bg-globus-orange-hover text-white font-montserrat font-bold py-3 px-8 rounded-lg transition-colors shadow-md flex items-center justify-center gap-2">
                
                <MailIcon className="w-5 h-5" /> Contactez-nous
              </Link>
              <Link
                to="/aide"
                className="bg-white/10 hover:bg-white/20 border border-white/20 text-white font-montserrat font-bold py-3 px-8 rounded-lg transition-colors flex items-center justify-center gap-2">
                
                <MessageCircleIcon className="w-5 h-5" /> Centre d'Aide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>);

}