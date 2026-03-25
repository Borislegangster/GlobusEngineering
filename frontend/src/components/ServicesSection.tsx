import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { BuildingIcon, PencilRulerIcon, HardHatIcon, ArrowRightIcon } from 'lucide-react';
import { cmsApi } from '../services/api';

function ServiceImageCarousel({ images, title }: { images: string[]; title: string; }) {
  const [current, setCurrent] = useState(0);
  useEffect(() => {
    if (!images || images.length === 0) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % images.length);
    }, 3500);
    return () => clearInterval(interval);
  }, [images]);

  if (!images || images.length === 0) return <div className="w-full aspect-[4/3] bg-gray-200 animate-pulse"></div>;

  return (
    <div className="relative w-full aspect-[4/3] overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.img
          key={current}
          src={images[current]}
          alt={`${title} - image ${current + 1}`}
          className="absolute inset-0 w-full h-full object-cover"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -60 }}
          transition={{ duration: 0.6, ease: [0.45, 0, 0.55, 1] }}
        />
      </AnimatePresence>
      {images.length > 1 && (
        <div className="absolute bottom-4 right-4 z-20 flex gap-1.5">
          {images.map((_, idx) => (
            <div key={idx} className={`h-1.5 rounded-full transition-all duration-300 ${idx === current ? 'w-6 bg-globus-orange' : 'w-2 bg-white/50'}`} />
          ))}
        </div>
      )}
    </div>
  );
}

export function ServicesSection() {
  const [services, setServices] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fallback data in case API is empty or fails
  const fallbackServices = [
    {
      title: 'Construction de Bâtiments',
      subtitle: 'Résidentiel & Commercial',
      full_description: 'Nous réalisons des constructions neuves de haute qualité, allant des villas de standing aux complexes commerciaux et industriels.',
      icon_name: 'BuildingIcon',
      images: [
        'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    },
    {
      title: 'Conception Architecturale',
      subtitle: 'Plans 2D/3D & Design',
      full_description: "Notre bureau d'études transforme vos idées en plans concrets. Nous proposons des modélisations 3D réalistes.",
      icon_name: 'PencilRulerIcon',
      images: [
        'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
      ]
    }
  ];

  useEffect(() => {
    cmsApi.getServices()
      .then(res => {
        if (res.data && res.data.length > 0) {
          setServices(res.data);
        } else {
          setServices(fallbackServices); // Use fallback if empty DB
        }
      })
      .catch(err => {
        console.error("Erreur lors de la récupération des services", err);
        setServices(fallbackServices); // Use fallback on error
      })
      .finally(() => setLoading(false));
  }, []);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'BuildingIcon': return <BuildingIcon className="w-12 h-12 text-globus-orange" />;
      case 'PencilRulerIcon': return <PencilRulerIcon className="w-12 h-12 text-globus-orange" />;
      case 'HardHatIcon': return <HardHatIcon className="w-12 h-12 text-globus-orange" />;
      default: return <BuildingIcon className="w-12 h-12 text-globus-orange" />;
    }
  };

  if (loading) return <div className="py-24 text-center">Chargement des services...</div>;

  return (
    <section id="services" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="inline-flex items-center justify-center gap-4 mb-4">
            <div className="h-1 w-8 bg-globus-orange"></div>
            <span className="font-montserrat font-bold text-globus-orange uppercase tracking-wider text-sm">Nos Domaines d'Expertise</span>
            <div className="h-1 w-8 bg-globus-orange"></div>
          </motion.div>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-montserrat font-extrabold text-3xl md:text-4xl text-globus-blue-dark">
            Nos Services Phares
          </motion.h2>
        </div>

        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={index} className={`flex flex-col ${index % 2 === 1 ? 'lg:flex-row-reverse' : 'lg:flex-row'} items-center gap-12`}>
              <motion.div className="w-full lg:w-1/2" initial={{ opacity: 0, x: index % 2 === 1 ? 50 : -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <div className="relative rounded-2xl overflow-hidden shadow-xl group">
                  <div className="absolute inset-0 bg-globus-blue/10 group-hover:bg-transparent transition-colors duration-500 z-10 pointer-events-none"></div>
                  <ServiceImageCarousel images={service.images || (service.image_url ? [service.image_url] : fallbackServices[0].images)} title={service.title} />
                  <div className="absolute bottom-0 left-0 bg-white p-4 rounded-tr-2xl z-20 shadow-lg">
                    {getIcon(service.icon_name || 'BuildingIcon')}
                  </div>
                </div>
              </motion.div>
              <motion.div className="w-full lg:w-1/2" initial={{ opacity: 0, x: index % 2 === 1 ? -50 : 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
                <h4 className="font-montserrat font-bold text-globus-orange mb-2">{service.short_description || service.subtitle || 'Service'}</h4>
                <h3 className="font-montserrat font-extrabold text-3xl text-globus-blue-dark mb-6">{service.title}</h3>
                <p className="font-opensans text-globus-gray mb-8 text-lg leading-relaxed">{service.full_description}</p>
                <a href={`#/services/${service.slug || ''}`} className="inline-flex items-center gap-2 font-montserrat font-bold text-globus-blue hover:text-globus-orange transition-colors group">
                  Voir ce service en détail
                  <ArrowRightIcon className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
                </a>
              </motion.div>
            </div>
          ))}
        </div>

        <div className="mt-20 text-center">
          <a href="#/services" className="inline-block bg-globus-blue hover:bg-globus-blue-dark text-white font-montserrat font-bold py-4 px-10 rounded-lg transition-all shadow-lg">
            Voir tous nos services en détail
          </a>
        </div>
      </div>
    </section>
  );
}
