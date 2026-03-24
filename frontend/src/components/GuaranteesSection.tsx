import React from 'react';
import { motion } from 'framer-motion';
import {
  ShieldCheckIcon,
  AwardIcon,
  WrenchIcon,
  HardHatIcon } from
'lucide-react';
export function GuaranteesSection() {
  const guarantees = [
  {
    icon: <ShieldCheckIcon className="w-12 h-12 text-globus-orange" />,
    title: 'Garantie Décennale',
    desc: "Votre ouvrage est couvert contre les vices cachés pendant 10 ans. Une tranquillité d'esprit totale."
  },
  {
    icon: <AwardIcon className="w-12 h-12 text-globus-orange" />,
    title: 'Matériaux Normés',
    desc: 'Utilisation exclusive de matériaux certifiés et testés en laboratoire pour une durabilité maximale.'
  },
  {
    icon: <WrenchIcon className="w-12 h-12 text-globus-orange" />,
    title: 'Service Après-Vente',
    desc: 'Une équipe réactive et disponible même après la remise des clés pour tout ajustement nécessaire.'
  },
  {
    icon: <HardHatIcon className="w-12 h-12 text-globus-orange" />,
    title: 'Sécurité sur Chantier',
    desc: "Respect strict des normes HSE pour protéger nos ouvriers, vos visiteurs et l'environnement."
  }];

  return (
    <section className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
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
            className="font-montserrat font-extrabold text-3xl md:text-4xl text-globus-blue-dark mb-4">
            
            Nos Garanties et Notre Sécurité
          </motion.h2>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            whileInView={{
              opacity: 1,
              scale: 1
            }}
            viewport={{
              once: true
            }}
            className="h-1 w-24 bg-globus-orange mx-auto rounded-full">
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {guarantees.map((item, index) =>
          <motion.div
            key={index}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true
            }}
            transition={{
              duration: 0.5,
              delay: index * 0.1
            }}
            className="bg-globus-light p-8 rounded-xl text-center hover:shadow-xl transition-shadow border border-gray-100 group">
            
              <div className="mb-6 inline-flex items-center justify-center w-20 h-20 rounded-full bg-white shadow-md group-hover:scale-110 transition-transform duration-300">
                {item.icon}
              </div>
              <h3 className="font-montserrat font-bold text-xl text-globus-blue-dark mb-4">
                {item.title}
              </h3>
              <p className="font-opensans text-globus-gray text-sm leading-relaxed">
                {item.desc}
              </p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}