import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import {
  BuildingIcon,
  PencilRulerIcon,
  HardHatIcon,
  PaintRollerIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  BriefcaseIcon,
  HomeIcon } from
'lucide-react';
export const servicesData = [
{
  id: 'construction-batiments',
  title: 'Construction de Bâtiments',
  subtitle: 'Résidentiel / Commercial / Industriel',
  desc: 'Réalisation de constructions neuves de haute qualité, garantissant des structures solides et durables.',
  icon: <BuildingIcon className="w-12 h-12 text-white" />,
  image:
  'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
},
{
  id: 'conception-architecturale',
  title: 'Conception Architecturale',
  subtitle: 'Plans 2D/3D & Design',
  desc: "Notre bureau d'études transforme vos idées en plans concrets avec des modélisations 3D réalistes.",
  icon: <PencilRulerIcon className="w-12 h-12 text-white" />,
  image:
  'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
},
{
  id: 'genie-civil',
  title: 'Génie Civil & Travaux Publics',
  subtitle: 'Infrastructures complexes',
  desc: 'Expertise pointue pour les infrastructures lourdes, routes, ponts et aménagements urbains.',
  icon: <HardHatIcon className="w-12 h-12 text-white" />,
  image:
  'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
},
{
  id: 'renovation-amenagement',
  title: 'Rénovation et Aménagement',
  subtitle: 'Réhabilitation & Second Œuvre',
  desc: 'Rénovation lourde et réhabilitation de bâtiments anciens, alliant respect du patrimoine et modernité.',
  icon: <PaintRollerIcon className="w-12 h-12 text-white" />,
  image:
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
}];

import { SEOMeta } from '../components/SEOMeta';
import { cmsApi } from '../services/api';

export function ServicesPage() {
  const [services, setServices] = useState<any[]>(servicesData);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchServices = async () => {
      try {
        const response = await cmsApi.getServices();
        if (response.data && response.data.length > 0) {
          const mapped = response.data.map((s: any) => ({
             id: s.slug,
             title: s.title,
             subtitle: s.short_description,
             description: s.short_description,
             icon: s.icon_name === 'HomeIcon' ? HomeIcon : BriefcaseIcon, // Fallback icon mapping
             image: s.image_url || 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80'
          }));
          setServices(mapped);
          return;
        }
      } catch (e) {
        console.error(e);
      }
    };
    fetchServices();
  }, []);

  return (
    <div className="pt-28 pb-20 bg-globus-light min-h-screen">
      <SEOMeta title="Nos Services - Globus Engineering BTP" description="Découvrez l'ensemble de nos services de construction, d'ingénierie et de conception." />
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-6">
        <nav className="flex items-center text-sm font-opensans text-globus-gray">
          <Link
            to="/"
            className="hover:text-globus-orange transition-colors flex items-center gap-1">
            
            <HomeIcon className="w-4 h-4" /> Accueil
          </Link>
          <ChevronRightIcon className="w-4 h-4 mx-2" />
          <span className="text-globus-blue-dark font-semibold">
            Nos Services
          </span>
        </nav>
      </div>

      {/* Hero Banner */}
      <section className="relative h-[40vh] min-h-[300px] flex items-center justify-center overflow-hidden mb-16 rounded-3xl mx-4 shadow-2xl">
        <div className="absolute inset-0 bg-globus-blue-dark/80 z-10"></div>
        <img
          src="https://images.unsplash.com/photo-1582063289852-62e3ba2747f8?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80"
          alt="Nos Services"
          className="absolute inset-0 w-full h-full object-cover" />
        
        <div className="relative z-20 text-center px-4">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-extrabold text-white mb-4">
            
            Nos domaines d'expertise
          </motion.h1>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              delay: 0.2
            }}
            className="h-1 w-24 bg-globus-orange mx-auto rounded-full">
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {services.map((service, idx) =>
          <motion.div
            key={service.id}
            initial={{
              opacity: 0,
              y: 30
            }}
            whileInView={{
              opacity: 1,
              y: 0
            }}
            viewport={{
              once: true,
              margin: '-50px'
            }}
            transition={{
              delay: idx * 0.1,
              duration: 0.5
            }}>
            
              <Link
              to={`/services/${service.id}`}
              className="group block relative rounded-2xl overflow-hidden shadow-lg h-[400px]">
              
                <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              
                <div className="absolute inset-0 bg-gradient-to-t from-globus-blue-dark via-globus-blue-dark/70 to-transparent opacity-90 group-hover:opacity-80 transition-opacity duration-300"></div>

                <div className="absolute inset-0 p-8 flex flex-col justify-end">
                  <div className="w-16 h-16 bg-globus-orange rounded-2xl flex items-center justify-center mb-6 transform group-hover:-translate-y-2 transition-transform duration-300 shadow-xl">
                    {service.icon}
                  </div>
                  <h4 className="font-montserrat font-bold text-globus-orange mb-2 transform group-hover:-translate-y-2 transition-transform duration-300 delay-75">
                    {service.subtitle}
                  </h4>
                  <h3 className="font-montserrat font-extrabold text-3xl text-white mb-4 transform group-hover:-translate-y-2 transition-transform duration-300 delay-100">
                    {service.title}
                  </h3>
                  <p className="font-opensans text-seconda-blue mb-6 line-clamp-2 transform group-hover:-translate-y-2 transition-transform duration-300 delay-150">
                    {service.desc}
                  </p>
                  <div className="flex items-center gap-2 text-white font-montserrat font-bold transform group-hover:translate-x-2 transition-transform duration-300">
                    Découvrir ce service <ArrowRightIcon className="w-5 h-5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          )}
        </div>
      </section>
    </div>);

}