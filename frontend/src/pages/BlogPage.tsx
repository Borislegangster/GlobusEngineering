import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CalendarIcon,
  ArrowRightIcon,
  SearchIcon,
  ClockIcon,
  ChevronRightIcon,
  HomeIcon } from
'lucide-react';
export const blogPostsData = [
{
  id: 'erreurs-achat-terrain',
  title: "Les 5 erreurs à éviter avant d'acheter un terrain",
  category: 'Conseils',
  date: '12 Oct 2023',
  readTime: '5 min',
  author: 'Jean Dupont',
  excerpt:
  "L'achat d'un terrain est la première étape cruciale de votre projet immobilier. Découvrez les pièges à éviter pour garantir la faisabilité de votre construction et sécuriser votre investissement.",
  image:
  'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
  featured: true
},
{
  id: 'choisir-finitions-interieures',
  title: 'Comment choisir les finitions intérieures de sa villa ?',
  category: 'Design',
  date: '28 Sep 2023',
  readTime: '4 min',
  author: 'Sarah Koné',
  excerpt:
  'Carrelage, peinture, menuiserie... Guide complet pour harmoniser votre intérieur selon les dernières tendances.',
  image:
  'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  featured: false
},
{
  id: 'visite-residence-horizon',
  title: 'Chantier en cours : Visite de la Résidence Horizon',
  category: 'Actualités',
  date: '15 Sep 2023',
  readTime: '3 min',
  author: 'Amina Diallo',
  excerpt:
  "Plongée au cœur de notre dernier grand projet résidentiel. Découvrez l'avancement du gros œuvre en images.",
  image:
  'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  featured: false
},
{
  id: 'normes-environnementales-2024',
  title: 'Les nouvelles normes environnementales de construction en 2024',
  category: 'Réglementation',
  date: '02 Sep 2023',
  readTime: '6 min',
  author: 'Marc Lemaire',
  excerpt:
  "Tout ce qu'il faut savoir sur la réglementation thermique et les matériaux éco-responsables pour votre futur projet.",
  image:
  'https://images.unsplash.com/photo-1518780664697-55e3ad937233?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  featured: false
},
{
  id: 'importance-etude-sol',
  title: "Pourquoi l'étude de sol est-elle indispensable ?",
  category: 'Chantier',
  date: '20 Aou 2023',
  readTime: '4 min',
  author: 'Marc Lemaire',
  excerpt:
  'Comprendre les enjeux géotechniques avant de couler les fondations de votre maison. Une étape souvent négligée mais vitale.',
  image:
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  featured: false
},
{
  id: 'tendances-architecture-2024',
  title: 'Les 3 grandes tendances architecturales pour 2024',
  category: 'Design',
  date: '10 Aou 2023',
  readTime: '5 min',
  author: 'Sarah Koné',
  excerpt:
  "Espaces modulables, retour à la nature et domotique intégrée : découvrez ce qui fera l'architecture de demain.",
  image:
  'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
  featured: false
}];

export function BlogPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [activeCategory, setActiveCategory] = useState('Tous');
  const [searchQuery, setSearchQuery] = useState('');
  const categories = [
  'Tous',
  'Conseils',
  'Design',
  'Actualités',
  'Chantier',
  'Réglementation'];

  const heroPost = blogPostsData.find((p) => p.featured) || blogPostsData[0];
  const regularPosts = blogPostsData.filter((p) => p.id !== heroPost.id);
  // Filter logic
  const filteredPosts = regularPosts.filter((post) => {
    const matchesCategory =
    activeCategory === 'Tous' || post.category === activeCategory;
    const matchesSearch =
    post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });
  // Determine if hero post should be shown based on filters
  const showHero =
  (activeCategory === 'Tous' || heroPost.category === activeCategory) && (
  searchQuery === '' ||
  heroPost.title.toLowerCase().includes(searchQuery.toLowerCase()));
  return (
    <div className="pt-28 pb-20 bg-globus-light min-h-screen">
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
            Blog & Actualités
          </span>
        </nav>
      </div>

      <div className="container mx-auto px-4">
        {/* Header & Search */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-12 gap-6 bg-white p-6 md:p-8 rounded-3xl shadow-sm border border-gray-100">
          <div>
            <motion.h1
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              className="text-3xl md:text-4xl font-montserrat font-extrabold text-globus-blue-dark mb-2">
              
              Le Blog Globus
            </motion.h1>
            <p className="font-opensans text-globus-gray">
              Conseils, actualités et expertise BTP.
            </p>
          </div>

          <div className="relative w-full md:w-96">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Rechercher un article..."
              className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 bg-globus-light focus:outline-none focus:border-globus-blue focus:ring-2 focus:ring-globus-blue/20 shadow-inner font-opensans transition-all" />
            
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          </div>
        </div>

        {/* Categories */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((cat) =>
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`font-montserrat font-semibold px-6 py-2.5 rounded-full transition-all text-sm ${activeCategory === cat ? 'bg-globus-blue text-white shadow-md scale-105' : 'bg-white text-globus-gray hover:bg-seconda-blue hover:text-globus-blue-dark border border-gray-200'}`}>
            
              {cat}
            </button>
          )}
        </div>

        {/* Hero Post */}
        {showHero &&
        <motion.div
          initial={{
            opacity: 0,
            y: 30
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="mb-16">
          
            <Link
            to={`/blog/${heroPost.id}`}
            className="group block relative rounded-3xl overflow-hidden shadow-xl h-[60vh] min-h-[450px]">
            
              <img
              src={heroPost.image}
              alt={heroPost.title}
              className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700" />
            
              <div className="absolute inset-0 bg-gradient-to-t from-globus-blue-dark via-globus-blue-dark/60 to-transparent"></div>

              <div className="absolute bottom-0 left-0 p-8 md:p-12 w-full md:w-3/4 lg:w-2/3">
                <span className="inline-block bg-globus-orange text-white font-montserrat font-bold text-xs px-4 py-1.5 rounded-full mb-4 shadow-md">
                  {heroPost.category}
                </span>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-montserrat font-extrabold text-white mb-4 leading-tight group-hover:text-globus-orange transition-colors">
                  {heroPost.title}
                </h2>
                <p className="font-opensans text-seconda-blue text-lg mb-6 line-clamp-2 md:line-clamp-3">
                  {heroPost.excerpt}
                </p>
                <div className="flex flex-wrap items-center gap-6 text-white/90 font-opensans text-sm font-semibold">
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    <CalendarIcon className="w-4 h-4" /> {heroPost.date}
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-3 py-1.5 rounded-full backdrop-blur-sm">
                    <ClockIcon className="w-4 h-4" /> {heroPost.readTime}
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        }

        {/* Grid Posts */}
        {filteredPosts.length > 0 ?
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredPosts.map((post, idx) =>
          <motion.article
            key={post.id}
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
              delay: idx * 0.1
            }}
            className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 group flex flex-col border border-gray-100 hover:-translate-y-1">
            
                <Link to={`/blog/${post.id}`} className="flex flex-col h-full">
                  <div className="relative h-60 overflow-hidden">
                    <div className="absolute top-4 left-4 bg-globus-orange text-white font-montserrat font-bold text-xs px-3 py-1.5 rounded-full z-10 shadow-md">
                      {post.category}
                    </div>
                    <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" />
                
                  </div>
                  <div className="p-8 flex flex-col flex-grow">
                    <div className="flex items-center gap-4 text-globus-gray text-sm font-opensans font-semibold mb-4">
                      <div className="flex items-center gap-1.5">
                        <CalendarIcon className="w-4 h-4 text-globus-orange" />
                        <span>{post.date}</span>
                      </div>
                      <div className="flex items-center gap-1.5">
                        <ClockIcon className="w-4 h-4 text-globus-orange" />
                        <span>{post.readTime}</span>
                      </div>
                    </div>
                    <h3 className="font-montserrat font-bold text-xl text-globus-blue-dark mb-3 group-hover:text-globus-blue transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="font-opensans text-globus-gray mb-6 flex-grow line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="inline-flex items-center gap-2 font-montserrat font-bold text-globus-blue group-hover:text-globus-orange transition-colors mt-auto">
                      Lire l'article{' '}
                      <ArrowRightIcon className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              </motion.article>
          )}
          </div> :

        !showHero &&
        <div className="text-center py-20 bg-white rounded-3xl border border-gray-100 shadow-sm">
              <SearchIcon className="w-16 h-16 text-gray-300 mx-auto mb-4" />
              <h3 className="font-montserrat font-bold text-2xl text-globus-blue-dark mb-2">
                Aucun article trouvé
              </h3>
              <p className="font-opensans text-globus-gray">
                Essayez de modifier vos critères de recherche ou de catégorie.
              </p>
              <button
            onClick={() => {
              setSearchQuery('');
              setActiveCategory('Tous');
            }}
            className="mt-6 bg-globus-blue text-white px-6 py-2 rounded-lg font-montserrat font-semibold hover:bg-globus-blue-dark transition-colors">
            
                Réinitialiser les filtres
              </button>
            </div>

        }
      </div>
    </div>);

}