import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CalendarIcon } from 'lucide-react';
export function BlogSection() {
  const posts = [
  {
    title: "Les 5 erreurs à éviter avant d'acheter un terrain",
    category: 'Conseils',
    date: '12 Oct 2023',
    excerpt:
    "L'achat d'un terrain est la première étape cruciale. Découvrez les pièges à éviter pour garantir la faisabilité de votre projet.",
    image:
    'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Comment choisir les finitions intérieures de sa villa ?',
    category: 'Design',
    date: '28 Sep 2023',
    excerpt:
    'Carrelage, peinture, menuiserie... Guide complet pour harmoniser votre intérieur selon les dernières tendances.',
    image:
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  },
  {
    title: 'Chantier en cours : Visite de la Résidence Horizon',
    category: 'Actualités',
    date: '15 Sep 2023',
    excerpt:
    "Plongée au cœur de notre dernier grand projet résidentiel. Découvrez l'avancement du gros œuvre en images.",
    image:
    'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
  }];

  return (
    <section id="blog" className="py-16 md:py-24 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
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
              className="inline-flex items-center gap-4 mb-4">
              
              <div className="h-1 w-8 bg-globus-orange"></div>
              <span className="font-montserrat font-bold text-globus-orange uppercase tracking-wider text-sm">
                Actualités & Conseils
              </span>
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
              
              Le Blog Globus
            </motion.h2>
          </div>
          <motion.a
            href="#blog-complet"
            initial={{
              opacity: 0,
              x: 20
            }}
            whileInView={{
              opacity: 1,
              x: 0
            }}
            viewport={{
              once: true
            }}
            className="hidden md:inline-flex items-center gap-2 font-montserrat font-bold text-globus-blue hover:text-globus-orange transition-colors">
            
            Lire tous les articles
            <ArrowRightIcon className="w-5 h-5" />
          </motion.a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {posts.map((post, index) =>
          <motion.article
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
            className="bg-globus-light rounded-xl overflow-hidden shadow-md hover:shadow-xl transition-shadow group flex flex-col">
            
              <div className="relative h-56 overflow-hidden">
                <div className="absolute top-4 left-4 bg-globus-orange text-white font-montserrat font-bold text-xs px-3 py-1 rounded-full z-10">
                  {post.category}
                </div>
                <img
                src={post.image}
                alt={post.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
              
              </div>
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center gap-2 text-globus-gray text-sm font-opensans mb-3">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{post.date}</span>
                </div>
                <h3 className="font-montserrat font-bold text-xl text-globus-blue-dark mb-3 group-hover:text-globus-blue transition-colors">
                  {post.title}
                </h3>
                <p className="font-opensans text-globus-gray mb-6 flex-grow">
                  {post.excerpt}
                </p>
                <a
                href={`#article-${index}`}
                className="inline-flex items-center gap-2 font-montserrat font-bold text-globus-blue group-hover:text-globus-orange transition-colors mt-auto">
                
                  Lire la suite
                  <ArrowRightIcon className="w-4 h-4" />
                </a>
              </div>
            </motion.article>
          )}
        </div>

        <div className="mt-8 text-center md:hidden">
          <a
            href="#blog-complet"
            className="inline-flex items-center gap-2 font-montserrat font-bold text-globus-blue">
            
            Lire tous les articles <ArrowRightIcon className="w-5 h-5" />
          </a>
        </div>
      </div>
    </section>);

}