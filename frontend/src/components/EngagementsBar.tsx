import React from 'react';
import { motion } from 'framer-motion';
import { HardHatIcon, KeyIcon, ShieldCheckIcon } from 'lucide-react';
export function EngagementsBar() {
  const engagements = [
  {
    icon: <HardHatIcon className="w-10 h-10 mb-4" />,
    title: 'Expertise Technique',
    desc: 'Ingénieurs hautement qualifiés.',
    bgColor: 'bg-globus-blue',
    textColor: 'text-white'
  },
  {
    icon: <KeyIcon className="w-10 h-10 mb-4" />,
    title: '100% Clé en main',
    desc: 'Un seul interlocuteur. Zéro stress.',
    bgColor: 'bg-globus-orange',
    textColor: 'text-white'
  },
  {
    icon: <ShieldCheckIcon className="w-10 h-10 mb-4" />,
    title: 'Qualité et Délais',
    desc: 'Respect strict des budgets.',
    bgColor: 'bg-globus-blue-dark',
    textColor: 'text-white'
  }];

  return (
    <section className="relative z-30 -mt-12 md:-mt-16 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 rounded-xl overflow-hidden shadow-2xl">
          {engagements.map((item, index) =>
          <motion.div
            key={index}
            className={`${item.bgColor} ${item.textColor} p-8 md:p-10 flex flex-col items-center text-center`}
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
              duration: 0.5,
              delay: index * 0.1
            }}>
            
              {item.icon}
              <h3 className="font-montserrat font-bold text-xl mb-2">
                {item.title}
              </h3>
              <p className="font-opensans text-sm opacity-90">{item.desc}</p>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}