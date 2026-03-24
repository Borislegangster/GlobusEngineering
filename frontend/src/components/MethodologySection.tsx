import React, { useState, Component } from 'react';
import { motion } from 'framer-motion';
import {
  PencilRulerIcon,
  FileTextIcon,
  BrickWallIcon,
  PaintRollerIcon,
  KeyIcon,
  HardHatIcon,
  HammerIcon,
  WrenchIcon,
  RulerIcon,
  BuildingIcon,
  HomeIcon,
  CompassIcon,
  CogIcon,
  LayersIcon,
  ShieldCheckIcon,
  TruckIcon,
  WarehouseIcon,
  DraftingCompassIcon,
  ScanLineIcon,
  SquareIcon } from
'lucide-react';
function BackgroundIcons() {
  const iconComponents = [
  HardHatIcon,
  HammerIcon,
  WrenchIcon,
  RulerIcon,
  BuildingIcon,
  BrickWallIcon,
  PaintRollerIcon,
  KeyIcon,
  HomeIcon,
  CompassIcon,
  CogIcon,
  LayersIcon,
  ShieldCheckIcon,
  TruckIcon,
  WarehouseIcon,
  DraftingCompassIcon,
  ScanLineIcon,
  SquareIcon,
  PencilRulerIcon,
  FileTextIcon];

  const colors = ['text-globus-blue', 'text-globus-orange', 'text-seconda-blue'];
  const sizes = [12, 14, 16, 18, 20, 22, 24];
  // Simple seeded pseudo-random for deterministic layout
  function seededRandom(seed: number) {
    let s = seed;
    return () => {
      s = (s * 16807 + 0) % 2147483647;
      return (s - 1) / 2147483646;
    };
  }
  const rand = seededRandom(42);
  const icons = Array.from(
    {
      length: 200
    },
    (_, i) => ({
      Icon: iconComponents[i % iconComponents.length],
      top: `${(rand() * 98 + 1).toFixed(1)}%`,
      left: `${(rand() * 96 + 2).toFixed(1)}%`,
      size: sizes[Math.floor(rand() * sizes.length)],
      rotate: Math.floor(rand() * 360 - 180),
      color: colors[Math.floor(rand() * colors.length)]
    })
  );
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true">
      
      {icons.map((item, idx) => {
        const { Icon, top, left, size, rotate, color } = item;
        return (
          <Icon
            key={idx}
            className={`absolute ${color} opacity-[0.10]`}
            style={{
              top,
              left,
              width: size,
              height: size,
              transform: `rotate(${rotate}deg)`
            }} />);


      })}
    </div>);

}
export function MethodologySection() {
  const steps = [
  {
    icon: <PencilRulerIcon className="w-8 h-8" />,
    title: 'Étude & Conception',
    desc: 'Analyse du terrain, plans architecturaux, modélisation 3D, devis détaillé.',
    image:
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <FileTextIcon className="w-8 h-8" />,
    title: 'Démarches Administratives',
    desc: "Nous gérons l'obtention du permis de construire et les autorisations pour vous.",
    image:
    'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <BrickWallIcon className="w-8 h-8" />,
    title: 'Gros Œuvre',
    desc: 'Fondations, élévation des murs, charpente et toiture. Solidité garantie.',
    image:
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <PaintRollerIcon className="w-8 h-8" />,
    title: 'Second Œuvre & Finitions',
    desc: 'Électricité, plomberie, menuiserie, peinture selon vos goûts et standards.',
    image:
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    icon: <KeyIcon className="w-8 h-8" />,
    title: 'Remise des Clés',
    desc: 'Inspection finale rigoureuse et livraison de votre bâtiment prêt à vivre.',
    image:
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }];

  return (
    <section
      id="methodologie"
      className="py-16 md:py-24 bg-globus-light relative">
      
      <BackgroundIcons />
      <div className="container mx-auto px-4 relative z-10">
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
              Notre Méthodologie
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
            
            Le "Clé en main" en 5 étapes
          </motion.h2>
          <motion.p
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
              delay: 0.2
            }}
            className="font-opensans text-globus-gray mt-4 max-w-2xl mx-auto">
            
            Nous vous accompagnons de A à Z. Découvrez notre processus
            transparent pour un projet sans stress.
          </motion.p>
        </div>

        <div className="max-w-4xl mx-auto relative">
          {/* Vertical Line for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-1 bg-seconda-blue -translate-x-1/2 rounded-full"></div>

          <div className="space-y-12 relative">
            {steps.map((step, index) =>
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
              className={`flex flex-col md:flex-row items-center gap-8 ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
              
                {/* Flip Card */}
                <div
                className={`w-full md:w-1/2 flex flex-col ${index % 2 === 0 ? 'md:items-start md:text-left' : 'md:items-end md:text-right'} text-center`}>
                
                  <FlipCard step={step} index={index} />
                </div>

                {/* Center Icon */}
                <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 w-16 h-16 bg-globus-blue rounded-full border-4 border-white shadow-md items-center justify-center text-white z-10">
                  {step.icon}
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </section>);

}
function FlipCard({
  step,
  index








}: {step: {icon: React.ReactNode;title: string;desc: string;image: string;};index: number;}) {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div
      className="w-full"
      style={{
        perspective: '1000px'
      }}
      onMouseEnter={() => setIsFlipped(true)}
      onMouseLeave={() => setIsFlipped(false)}>
      
      <div
        className="relative w-full transition-transform duration-700 ease-in-out"
        style={{
          transformStyle: 'preserve-3d',
          transform: isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'
        }}>
        
        {/* Front Face */}
        <div
          className="w-full"
          style={{
            backfaceVisibility: 'hidden'
          }}>
          
          <div className="bg-white p-6 rounded-xl shadow-lg border-t-4 border-globus-blue w-full hover:shadow-xl transition-shadow">
            <h3 className="font-montserrat font-bold text-xl text-globus-blue-dark mb-3 flex items-center justify-center md:justify-start gap-3">
              <span className="text-globus-orange font-extrabold text-2xl">
                0{index + 1}.
              </span>
              {step.title}
            </h3>
            <p className="font-opensans text-globus-gray">{step.desc}</p>
            <p className="font-opensans text-xs text-globus-orange mt-3 italic">
              Survolez pour voir l'aperçu →
            </p>
          </div>
        </div>

        {/* Back Face */}
        <div
          className="absolute inset-0 w-full h-full"
          style={{
            backfaceVisibility: 'hidden',
            transform: 'rotateY(180deg)'
          }}>
          
          <div className="w-full h-full rounded-xl overflow-hidden shadow-xl relative">
            <img
              src={step.image}
              alt={step.title}
              className="w-full h-full object-cover"
              style={{
                minHeight: '180px'
              }} />
            
            <div className="absolute inset-0 bg-gradient-to-t from-globus-blue-dark/80 via-transparent to-transparent"></div>
            <div className="absolute bottom-0 left-0 right-0 p-5">
              <span className="text-globus-orange font-montserrat font-extrabold text-lg">
                0{index + 1}.
              </span>
              <h3 className="font-montserrat font-bold text-white text-lg">
                {step.title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>);

}