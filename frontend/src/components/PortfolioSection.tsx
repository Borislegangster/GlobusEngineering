import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRightIcon, MapPinIcon } from 'lucide-react';
import { cmsApi } from '../services/api';

export function PortfolioSection() {
  const [projects, setProjects] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fallbackProjects = [
    {
      id: 1,
      title: 'Villa Les Alizés',
      category: 'Résidentiel',
      location: 'Douala, Cameroun',
      image: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      slug: 'villa-alizes'
    },
    {
      id: 2,
      title: 'Complexe Administratif Horizon',
      category: 'Commercial',
      location: 'Yaoundé, Cameroun',
      image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      slug: 'complexe-horizon'
    },
    {
      id: 3,
      title: 'Hôpital Régional',
      category: 'Institutionnel',
      location: 'Bafoussam, Cameroun',
      image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      slug: 'hopital-regional'
    },
    {
      id: 4,
      title: 'Résidence de Luxe Les Palmiers',
      category: 'Résidentiel',
      location: 'Kribi, Cameroun',
      image: 'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80',
      slug: 'residence-palmiers'
    }
  ];

  useEffect(() => {
    cmsApi.getProjects()
      .then(res => {
        if (res.data && res.data.length > 0) {
          setProjects(res.data.slice(0, 4));
        } else {
          setProjects(fallbackProjects);
        }
      })
      .catch(err => {
        console.error("Erreur portfolio", err);
        setProjects(fallbackProjects);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;

  return (
    <section id="portfolio" className="py-16 md:py-24 bg-globus-light">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 md:mb-16 gap-6">
          <div className="max-w-2xl">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-globus-orange"></div>
              <span className="font-montserrat font-bold text-globus-orange uppercase tracking-wider text-sm">
                Notre Portfolio
              </span>
            </motion.div>
            <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} className="font-montserrat font-extrabold text-3xl md:text-4xl text-globus-blue-dark">
              Découvrez nos réalisations récentes.
            </motion.h2>
          </div>
          <motion.a href="#/projets" initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} className="shrink-0 inline-flex items-center gap-2 font-montserrat font-bold text-globus-blue hover:text-globus-orange transition-colors">
            Voir tous les projets
            <ArrowUpRightIcon className="w-5 h-5" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <motion.a key={project.id || index} href={`#/projets/${project.slug}`} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.6 }} className="group relative block rounded-2xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[400px] lg:h-[450px]">
              <div className="absolute inset-0 bg-gray-200">
                <img src={project.cover_image_url || project.image} alt={project.title} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-globus-blue-dark/90 via-globus-blue-dark/40 to-transparent opacity-80 transition-opacity duration-300 group-hover:opacity-90"></div>
              
              <div className="absolute inset-0 p-8 flex flex-col justify-end transform transition-transform duration-300">
                <div className="mb-4 transform translate-y-4 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                  <span className="inline-block px-4 py-1.5 bg-globus-orange text-white font-montserrat font-bold text-xs uppercase tracking-wider rounded-full shadow-lg">
                    {project.category}
                  </span>
                </div>

                <h3 className="font-montserrat font-extrabold text-2xl md:text-3xl text-white mb-2 leading-tight">
                  {project.title}
                </h3>

                <div className="flex items-center gap-2 text-gray-300 font-opensans">
                  <MapPinIcon className="w-4 h-4 text-globus-orange" />
                  <span>{project.location}</span>
                </div>
              </div>

              <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center transform scale-0 opacity-0 transition-all duration-300 group-hover:scale-100 group-hover:opacity-100 shadow-xl">
                <ArrowUpRightIcon className="w-6 h-6 text-globus-blue" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
