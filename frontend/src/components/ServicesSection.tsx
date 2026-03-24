import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  BuildingIcon,
  PencilRulerIcon,
  HardHatIcon,
  ArrowRightIcon } from
'lucide-react';
function ServiceImageCarousel({
  images,
  title



}: {images: string[];title: string;}) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images.length]);
  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${title} - image ${current + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{
            opacity: 0,
            x: 60
          }}
          animate={{
            opacity: 1,
            x: 0
          }}
          exit={{
            opacity: 0,
            x: -60
          }}
          transition={{
            duration: 0.6,
            ease: [0.45, 0, 0.55, 1]
          }} />
        
      </AnimatePresence>

      {/* Progress dots */}
      <div className="absolute bottom-4 right-4 z-20 flex gap-1.5">
        {images.map((_, idx) =>
        <div
          key={idx}
          className={`h-1.5 rounded-full transition-all duration-300 ${idx === current ? 'w-6 bg-globus-orange' : 'w-2 bg-white/50'}`} />

        )}
      </div>
    </div>);

}
export function ServicesSection() {
  const services = [
  {
    title: 'Construction de Bâtiments',
    subtitle: 'Résidentiel & Commercial',
    desc: 'Nous réalisons des constructions neuves de haute qualité, allant des villas de standing aux complexes commerciaux et industriels. Notre approche garantit des structures solides, durables et conformes aux normes les plus strictes.',
    icon: <BuildingIcon className="w-12 h-12 text-globus-orange" />,
    images: [
    'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80']

  },
  {
    title: 'Conception Architecturale',
    subtitle: 'Plans 2D/3D & Design',
    desc: "Notre bureau d'études transforme vos idées en plans concrets. Nous proposons des modélisations 3D réalistes pour vous permettre de visualiser votre projet avant même le premier coup de pioche, en optimisant l'espace et la lumière.",
    icon: <PencilRulerIcon className="w-12 h-12 text-globus-orange" />,
    images: [
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1574958269340-fa927503f3dd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80']

  },
  {
    title: 'Génie Civil & Rénovation',
    subtitle: 'Infrastructures & Réhabilitation',
    desc: 'Expertise pointue en génie civil pour les infrastructures complexes. Nous excellons également dans la rénovation lourde et la réhabilitation de bâtiments anciens, en alliant respect du patrimoine et modernité technique.',
    icon: <HardHatIcon className="w-12 h-12 text-globus-orange" />,
    images: [
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
    'https://images.unsplash.com/photo-1590725121839-892b458a74fe?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80']

  }];

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
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
              Nos Domaines d'Expertise
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
            
            Nos Services Phares
          </motion.h2>
        </div>

        <div className="space-y-20">
          {services.map((service, index) =>
          <div
            key={index}
            className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
            
              {/* Image Carousel */}
              <motion.div
              className="w-full lg:w-1/2"
              initial={{
                opacity: 0,
                x: index % 2 === 1 ? 50 : -50
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6
              }}>
              
                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                  <div className="absolute inset-0 bg-globus-blue/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                  <ServiceImageCarousel
                  images={service.images}
                  title={service.title} />
                
                  <div className="absolute bottom-0 left-0 bg-white p-4 rounded-tr-2xl z-20 shadow-lg">
                    {service.icon}
                  </div>
                </div>
              </motion.div>

              {/* Content */}
              <motion.div
              className="w-full lg:w-1/2"
              initial={{
                opacity: 0,
                x: index % 2 === 1 ? -50 : 50
              }}
              whileInView={{
                opacity: 1,
                x: 0
              }}
              viewport={{
                once: true
              }}
              transition={{
                duration: 0.6
              }}>
              
                <h4 className="font-montserrat font-bold text-globus-orange mb-2">
                  {service.subtitle}
                </h4>
                <h3 className="font-montserrat font-extrabold text-3xl text-globus-blue-dark mb-6">
                  {service.title}
                </h3>
                <p className="font-opensans text-globus-gray mb-8 text-lg leading-relaxed">
                  {service.desc}
                </p>
                <a
                href={`#service-${index}`}
                className="inline-flex items-center gap-2 font-montserrat font-bold text-globus-blue hover:text-globus-orange transition-colors group">
                
                  Voir ce service en détail
                  <ArrowRightIcon className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          )}
        </div>

        <div className="mt-20 text-center">
          <a
            href="#tous-les-services"
            className="inline-block bg-globus-blue hover:bg-globus-blue-dark text-white font-montserrat font-bold py-4 px-10 rounded-lg transition-all shadow-lg">
            
            Voir tous nos services en détail
          </a>
        </div>
      </div>
    </section>);

}