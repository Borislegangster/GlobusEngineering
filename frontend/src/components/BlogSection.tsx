import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRightIcon, CalendarIcon, UserIcon, ArrowUpRightIcon } from 'lucide-react';
import { cmsApi } from '../services/api';

export function BlogSection() {
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  // Fallback data
  const fallbackPosts = [
    {
      id: 1,
      title: "Les 5 erreurs à éviter avant d'acheter un terrain au Cameroun",
      category: 'Conseils',
      image: 'https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '12 Oct 2023',
      author: 'Jean Dupont',
      excerpt: "L'achat d'un terrain est la première étape cruciale de votre projet. Découvrez les vérifications indispensables pour éviter les litiges fonciers et sécuriser votre investissement.",
      slug: '5-erreurs-acheter-terrain'
    },
    {
      id: 2,
      title: 'Comment choisir les finitions intérieures de votre villa',
      category: 'Design & Déco',
      image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '28 Sep 2023',
      author: 'Sarah Koné',
      excerpt: "Carrelage, peinture, boiserie... Le choix des finitions détermine l'ambiance de votre future maison. Guide complet pour allier esthétique, durabilité et budget.",
      slug: 'choisir-finitions-interieures'
    },
    {
      id: 3,
      title: 'Point sur les normes environnementales dans la construction (2024)',
      category: 'Réglementation',
      image: 'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
      date: '15 Sep 2023',
      author: 'Marc Lemaire',
      excerpt: "L'industrie du bâtiment évolue. Décryptage des nouvelles normes environnementales qui impactent vos projets de construction et comment Globus s'y conforme.",
      slug: 'normes-environnementales-2024'
    }
  ];

  useEffect(() => {
    cmsApi.getBlogPosts()
      .then(res => {
        if (res.data && res.data.length > 0) {
          setPosts(res.data.slice(0, 3)); // Only show top 3 on home
        } else {
          setPosts(fallbackPosts);
        }
      })
      .catch(err => {
        console.error("Erreur blog", err);
        setPosts(fallbackPosts);
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return null;

  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-4 mb-4">
              <div className="h-1 w-12 bg-globus-orange"></div>
              <span className="font-montserrat font-bold text-globus-orange uppercase tracking-wider text-sm">
                Blog & Actualités
              </span>
            </div>
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-globus-blue-dark">
              Restez informés sur nos projets et l'industrie.
            </h2>
          </div>
          <a href="#/blog" className="shrink-0 group flex items-center gap-2 font-montserrat font-bold text-globus-blue hover:text-globus-orange transition-colors">
            Voir tous les articles
            <ArrowRightIcon className="w-5 h-5 transform group-hover:translate-x-1 transition-transform" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <motion.article key={post.id || index} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1, duration: 0.5 }} className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group flex flex-col h-full">
              <div className="relative h-60 overflow-hidden">
                <img src={post.cover_image_url || post.image} alt={post.title} className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out" />
                <div className="absolute top-4 left-4">
                  <span className="bg-white/90 backdrop-blur-sm text-globus-blue-dark font-montserrat font-bold text-xs py-1.5 px-3 rounded-full uppercase tracking-wider shadow-sm">
                    {post.category}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </div>

              <div className="p-8 flex flex-col flex-grow">
                <div className="flex items-center gap-4 text-xs font-opensans text-gray-500 mb-4">
                  <div className="flex items-center gap-1.5">
                    <CalendarIcon className="w-4 h-4 text-globus-orange" />
                    <span>{post.published_date || post.date}</span>
                  </div>
                  <div className="flex items-center gap-1.5">
                    <UserIcon className="w-4 h-4 text-globus-orange" />
                    <span>{post.author}</span>
                  </div>
                </div>

                <h3 className="font-montserrat font-bold text-xl text-globus-blue-dark mb-4 leading-snug group-hover:text-globus-blue transition-colors line-clamp-2">
                  <a href={`#/blog/${post.slug}`}>{post.title}</a>
                </h3>

                <p className="font-opensans text-gray-600 mb-6 line-clamp-3 text-sm flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="mt-auto pt-6 border-t border-gray-100">
                  <a href={`#/blog/${post.slug}`} className="inline-flex items-center gap-2 font-montserrat font-bold text-globus-blue group-hover:text-globus-orange transition-colors">
                    Lire l'article
                    <ArrowUpRightIcon className="w-4 h-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </a>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
