import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import {
  MapPinIcon,
  CalendarIcon,
  UserIcon,
  MaximizeIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowLeftIcon,
  HomeIcon,
  ArrowRightIcon,
  CheckCircle2Icon,
  CircleDotIcon,
  CircleIcon } from
'lucide-react';
import { projectsData } from './ProjectsPage';
import { cmsApi } from '../services/api';
import { SEOMeta } from '../components/SEOMeta';
// Extended project details mock database
const projectDetailsData: Record<string, any> = {
  'villa-alizes': {
    title: 'Villa Contemporaine Les Alizés',
    category: 'Résidentiel',
    status: 'Livré en 2023',
    location: 'Douala, Quartier Bonapriso',
    client: 'Privé',
    area: '450 m² (R+2)',
    duration: '14 mois',
    architect: 'Cabinet Design & Co',
    images: [
    'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'],

    challenge:
    "La construction de la Villa Les Alizés représentait un défi architectural majeur en raison de la topographie complexe du terrain, présentant une forte déclivité. Le client souhaitait une maison ultra-moderne, lumineuse, tout en préservant l'intimité vis-à-vis du voisinage.",
    solution:
    'Les ingénieurs de Globus ont conçu des fondations spéciales sur pieux pour stabiliser la structure. Nous avons privilégié de grandes baies vitrées orientées stratégiquement pour maximiser la lumière naturelle tout en évitant le vis-à-vis. Le résultat est une villa aux lignes épurées, intégrant des matériaux nobles (bois exotique, béton ciré, verre) et des solutions domotiques de pointe.',
    videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4',
    progression: [
    {
      step: 'Études et conception',
      status: 'validé',
      date: 'Janvier 2022'
    },
    {
      step: 'Terrassement et fondations',
      status: 'validé',
      date: 'Mars 2022'
    },
    {
      step: 'Gros œuvre',
      status: 'validé',
      date: 'Juillet 2022'
    },
    {
      step: "Mise hors d'eau / hors d'air",
      status: 'validé',
      date: 'Octobre 2022'
    },
    {
      step: 'Second œuvre et finitions',
      status: 'validé',
      date: 'Février 2023'
    },
    {
      step: 'Aménagements extérieurs',
      status: 'validé',
      date: 'Avril 2023'
    },
    {
      step: 'Livraison',
      status: 'validé',
      date: 'Mai 2023'
    }]

  },
  'complexe-horizon': {
    title: 'Complexe Bureaux Horizon',
    category: 'Commercial',
    status: 'Livré en 2022',
    location: 'Yaoundé, Centre',
    client: 'Horizon Invest',
    area: '2500 m² (R+6)',
    duration: '24 mois',
    architect: 'Studio ArchiPlus',
    images: [
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'],

    challenge:
    'Construire un immeuble de bureaux de grande hauteur en plein centre-ville avec un espace de stockage de matériaux extrêmement restreint et des contraintes de nuisances sonores strictes.',
    solution:
    "Mise en place d'une logistique en flux tendu (just-in-time) pour l'approvisionnement. Utilisation de structures métalliques préfabriquées pour accélérer le montage et réduire les nuisances sur site. Le bâtiment a obtenu la certification HQE grâce à son isolation thermique par l'extérieur et sa façade bioclimatique.",
    videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4',
    progression: [
    {
      step: 'Obtention du permis de construire',
      status: 'validé',
      date: 'Février 2020'
    },
    {
      step: 'Fondations profondes',
      status: 'validé',
      date: 'Juin 2020'
    },
    {
      step: 'Élévation de la structure',
      status: 'validé',
      date: 'Décembre 2020'
    },
    {
      step: 'Façades et vitrages',
      status: 'validé',
      date: 'Août 2021'
    },
    {
      step: 'Aménagements intérieurs',
      status: 'validé',
      date: 'Janvier 2022'
    },
    {
      step: 'Tests et mise en service',
      status: 'validé',
      date: 'Mars 2022'
    },
    {
      step: 'Inauguration',
      status: 'validé',
      date: 'Avril 2022'
    }]

  },
  // Fallback
  default: {
    title: 'Projet de Construction',
    category: 'Gros Œuvre',
    status: 'En Cours',
    location: 'Cameroun',
    client: 'Confidentiel',
    area: 'Sur mesure',
    duration: 'En cours',
    architect: 'Globus Engineering',
    images: [
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80',
    'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=1600&q=80'],

    challenge:
    'Répondre aux exigences techniques et architecturales spécifiques du client tout en respectant un budget et des délais serrés.',
    solution:
    "Déploiement de notre méthodologie 'clé en main' avec un suivi rigoureux à chaque étape du chantier, garantissant une exécution parfaite et conforme aux normes de sécurité.",
    videoUrl: 'https://www.youtube.com/embed/ScMzIvxBSi4',
    progression: [
    {
      step: 'Installation de chantier',
      status: 'validé',
      date: 'Septembre 2023'
    },
    {
      step: 'Fondations',
      status: 'validé',
      date: 'Novembre 2023'
    },
    {
      step: 'Élévation des murs (RDC)',
      status: 'validé',
      date: 'Janvier 2024'
    },
    {
      step: 'Plancher haut et charpente',
      status: 'en-cours'
    },
    {
      step: 'Menuiseries extérieures',
      status: 'à-venir'
    },
    {
      step: 'Équipements techniques',
      status: 'à-venir'
    },
    {
      step: 'Finitions et livraison',
      status: 'à-venir'
    }]

  }
};
export function ProjectDetailPage() {
  const { slug } = useParams<{
    slug: string;
  }>();
  const navigate = useNavigate();
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    window.scrollTo(0, 0);
    const fetchProject = async () => {
      try {
        if (slug) {
          const response = await cmsApi.getProject(slug);
          if (response.data) {
            // Map the API data structure to the expected UI structure
            const apiProj = response.data;
            let parsedGallery = [];
            try { if (apiProj.gallery_urls_json) parsedGallery = JSON.parse(apiProj.gallery_urls_json); } catch(e){ console.error(e); }

            setData({
              title: apiProj.title,
              category: apiProj.category,
              status: apiProj.completion_date,
              location: apiProj.location,
              client: apiProj.client_name,
              duration: apiProj.budget, // Using budget as duration here due to schema reuse in mapping
              description: apiProj.short_description,
              challenge: apiProj.full_description,
              solution: "Approche intégrée et matériaux de qualité",
              results: "Projet livré dans les délais et budgets",
              images: [apiProj.cover_image_url, ...parsedGallery],
              stats: [
                { label: 'Surface', value: 'N/A' },
                { label: 'Ouvriers', value: 'N/A' },
                { label: 'Durée', value: 'N/A' }
              ]
            });
            return;
          }
        }
      } catch (e) {
        console.error(e);
      }
      // fallback
      setData(projectDetailsData[slug || ''] || projectDetailsData['villa-alizes'] || projectDetailsData['default']);
    };
    fetchProject();
  }, [slug]);

  const [currentImg, setCurrentImg] = useState(0);

  if (!data) return null;
  const nextImg = () => setCurrentImg((prev) => (prev + 1) % data.images.length);
  const prevImg = () =>
  setCurrentImg(
    (prev) => (prev - 1 + data.images.length) % data.images.length
  );
  // Get related projects
  const relatedProjects = projectsData.
  filter((p) => p.category === data.category && p.id !== slug).
  slice(0, 3);
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <SEOMeta title={`${data.title} - Projet BTP Globus`} description={data.description || data.challenge} />
      <div className="container mx-auto px-4">
        {/* Breadcrumb & Back */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-8 gap-4">
          <nav className="flex items-center text-sm font-opensans text-globus-gray">
            <Link
              to="/"
              className="hover:text-globus-orange transition-colors flex items-center gap-1">
              
              <HomeIcon className="w-4 h-4" /> Accueil
            </Link>
            <ChevronRightIcon className="w-4 h-4 mx-2" />
            <Link
              to="/projets"
              className="hover:text-globus-orange transition-colors">
              
              Portfolio
            </Link>
            <ChevronRightIcon className="w-4 h-4 mx-2" />
            <span className="text-globus-blue-dark font-semibold truncate max-w-[200px]">
              {data.title}
            </span>
          </nav>

          <Link
            to="/projets"
            className="inline-flex items-center gap-2 text-globus-gray hover:text-globus-orange font-montserrat font-semibold transition-colors bg-globus-light px-4 py-2 rounded-full">
            
            <ArrowLeftIcon className="w-4 h-4" /> Retour au portfolio
          </Link>
        </div>

        {/* Header */}
        <div className="mb-10">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="bg-globus-blue/10 text-globus-blue px-4 py-1.5 rounded-full font-montserrat font-bold text-sm">
              {data.category}
            </span>
            <span
              className={`px-4 py-1.5 rounded-full font-montserrat font-bold text-sm flex items-center gap-2 ${data.status.includes('Livré') ? 'bg-green-100 text-green-700' : 'bg-globus-orange/10 text-globus-orange'}`}>
              
              <div
                className={`w-2 h-2 rounded-full ${data.status.includes('Livré') ? 'bg-green-500' : 'bg-globus-orange animate-pulse'}`}>
              </div>
              {data.status}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-extrabold text-globus-blue-dark mb-4 leading-tight">
            {data.title}
          </h1>
          <div className="flex items-center text-globus-gray font-opensans text-lg">
            <MapPinIcon className="w-5 h-5 mr-2 text-globus-orange" />
            {data.location}
          </div>
        </div>

        {/* Gallery Slider */}
        <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[50vh] min-h-[400px] mb-16 group bg-globus-light">
          <AnimatePresence mode="wait">
            <motion.img
              key={currentImg}
              src={data.images[currentImg]}
              alt={`${data.title} - Vue ${currentImg + 1}`}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{
                opacity: 0,
                scale: 1.05
              }}
              animate={{
                opacity: 1,
                scale: 1
              }}
              exit={{
                opacity: 0
              }}
              transition={{
                duration: 0.5
              }} />
            
          </AnimatePresence>

          {data.images.length > 1 &&
          <>
              <button
              onClick={prevImg}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-globus-blue-dark shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110">
              
                <ChevronLeftIcon className="w-6 h-6" />
              </button>
              <button
              onClick={nextImg}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/90 hover:bg-white rounded-full flex items-center justify-center text-globus-blue-dark shadow-lg opacity-0 group-hover:opacity-100 transition-all hover:scale-110">
              
                <ChevronRightIcon className="w-6 h-6" />
              </button>

              <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 bg-black/30 px-4 py-2 rounded-full backdrop-blur-sm">
                {data.images.map((_: any, idx: number) =>
              <button
                key={idx}
                onClick={() => setCurrentImg(idx)}
                className={`h-2 rounded-full transition-all ${idx === currentImg ? 'bg-globus-orange w-6' : 'bg-white/60 hover:bg-white w-2'}`} />

              )}
              </div>
            </>
          }
        </div>

        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            <h2 className="font-montserrat font-extrabold text-3xl text-globus-blue-dark mb-6 flex items-center gap-3">
              <div className="w-2 h-8 bg-globus-orange rounded-full"></div>
              Le Défi & La Solution
            </h2>
            <div className="prose prose-lg max-w-none font-opensans text-globus-gray">
              <p className="mb-6 leading-relaxed">
                <strong className="text-globus-blue-dark font-montserrat text-xl block mb-2">
                  Le Défi Initial
                </strong>
                {data.challenge}
              </p>
              <div className="bg-globus-light p-8 rounded-2xl border-l-4 border-globus-orange mb-8">
                <strong className="text-globus-blue-dark font-montserrat text-xl block mb-2">
                  L'Approche Globus
                </strong>
                <p className="leading-relaxed m-0">{data.solution}</p>
              </div>
            </div>
          </div>

          {/* Sidebar Specs */}
          <div className="w-full lg:w-1/3">
            <div className="bg-globus-blue-dark rounded-3xl p-8 shadow-xl text-white sticky top-32">
              <h3 className="font-montserrat font-bold text-2xl mb-8 border-b border-white/10 pb-4">
                Fiche Technique
              </h3>
              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <UserIcon className="w-5 h-5 text-globus-orange" />
                  </div>
                  <div>
                    <span className="block text-sm text-seconda-blue font-opensans">
                      Maître d'ouvrage
                    </span>
                    <span className="font-montserrat font-bold text-lg">
                      {data.client}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MaximizeIcon className="w-5 h-5 text-globus-orange" />
                  </div>
                  <div>
                    <span className="block text-sm text-seconda-blue font-opensans">
                      Superficie
                    </span>
                    <span className="font-montserrat font-bold text-lg">
                      {data.area}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <CalendarIcon className="w-5 h-5 text-globus-orange" />
                  </div>
                  <div>
                    <span className="block text-sm text-seconda-blue font-opensans">
                      Durée des travaux
                    </span>
                    <span className="font-montserrat font-bold text-lg">
                      {data.duration}
                    </span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-5 h-5 text-globus-orange" />
                  </div>
                  <div>
                    <span className="block text-sm text-seconda-blue font-opensans">
                      Architecte
                    </span>
                    <span className="font-montserrat font-bold text-lg">
                      {data.architect}
                    </span>
                  </div>
                </li>
              </ul>

              <div className="mt-10 pt-8 border-t border-white/10">
                <p className="text-sm text-seconda-blue font-opensans mb-4 text-center">
                  Un projet similaire en tête ?
                </p>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-globus-orange hover:bg-globus-orange-hover text-white font-montserrat font-bold py-3 px-6 rounded-xl transition-colors shadow-md">
                  
                  Contactez-nous
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Progression du Projet */}
        {data.progression && data.progression.length > 0 &&
        <div className="mt-24">
            <h2 className="font-montserrat font-extrabold text-3xl text-globus-blue-dark mb-10 flex items-center gap-3">
              <div className="w-2 h-8 bg-globus-orange rounded-full"></div>
              Progression du Projet
            </h2>

            <div className="relative">
              {/* Vertical Line */}
              <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-gray-200 -z-10"></div>

              <div className="space-y-8">
                {data.progression.map((item: any, index: number) =>
              <motion.div
                key={index}
                initial={{
                  opacity: 0,
                  x: -20
                }}
                whileInView={{
                  opacity: 1,
                  x: 0
                }}
                viewport={{
                  once: true,
                  margin: '-100px'
                }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.1
                }}
                className="relative flex items-start gap-6">
                
                    <div className="relative z-10 bg-white py-1">
                      {item.status === 'validé' &&
                  <CheckCircle2Icon className="w-8 h-8 text-green-500" />
                  }
                      {item.status === 'en-cours' &&
                  <div className="relative">
                          <CircleDotIcon className="w-8 h-8 text-globus-orange relative z-10" />
                          <div className="absolute inset-0 bg-globus-orange rounded-full animate-ping opacity-30"></div>
                        </div>
                  }
                      {item.status === 'à-venir' &&
                  <CircleIcon className="w-8 h-8 text-gray-300" />
                  }
                    </div>

                    <div className="flex-1 pt-1">
                      <h4
                    className={`font-montserrat font-bold text-lg ${item.status === 'à-venir' ? 'text-gray-400' : 'text-globus-blue-dark'}`}>
                    
                        {item.step}
                      </h4>
                      {item.status === 'en-cours' &&
                  <span className="inline-block mt-2 text-xs font-bold px-3 py-1 bg-globus-orange/10 text-globus-orange rounded-full">
                          En cours
                        </span>
                  }
                      {item.date &&
                  <p className="text-sm text-globus-gray font-opensans mt-1 flex items-center gap-1.5">
                          <CalendarIcon className="w-3.5 h-3.5" /> {item.date}
                        </p>
                  }
                    </div>
                  </motion.div>
              )}
              </div>
            </div>
          </div>
        }

        {/* Vidéo de Présentation */}
        {data.videoUrl &&
        <div className="mt-24">
            <h2 className="font-montserrat font-extrabold text-3xl text-globus-blue-dark mb-4 flex items-center gap-3">
              <div className="w-2 h-8 bg-globus-orange rounded-full"></div>
              Vidéo de Présentation
            </h2>
            <p className="text-globus-gray font-opensans mb-8 text-lg">
              Découvrez les coulisses et l'avancement de ce chantier en vidéo.
            </p>
            <div className="relative w-full aspect-video rounded-3xl overflow-hidden shadow-2xl bg-globus-light group">
              <iframe
              src={data.videoUrl}
              title={`Vidéo de présentation - ${data.title}`}
              className="absolute inset-0 w-full h-full border-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen>
            </iframe>
            </div>
          </div>
        }

        {/* Related Projects */}
        {relatedProjects.length > 0 &&
        <div className="mt-24 pt-16 border-t border-gray-200">
            <h2 className="font-montserrat font-extrabold text-3xl text-globus-blue-dark mb-8 text-center">
              Dans la même catégorie
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((project) =>
            <Link
              to={`/projets/${project.id}`}
              key={project.id}
              className="group rounded-2xl overflow-hidden shadow-lg block relative h-64">
              
                  <img
                src={project.image}
                alt={project.title}
                className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
              
                  <div className="absolute inset-0 bg-globus-blue-dark/70 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center p-4 text-center">
                    <h4 className="text-white font-montserrat font-bold text-xl mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {project.title}
                    </h4>
                    <span className="text-globus-orange font-montserrat font-bold text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75">
                      Voir le projet <ArrowRightIcon className="w-4 h-4" />
                    </span>
                  </div>
                </Link>
            )}
            </div>
          </div>
        }
      </div>
    </div>);

}