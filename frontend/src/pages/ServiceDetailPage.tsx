import React, { useEffect, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  CheckCircleIcon,
  ArrowRightIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  HomeIcon,
  ArrowLeftIcon,
  ClipboardListIcon,
  SearchIcon,
  HardHatIcon,
  KeyIcon,
  FileTextIcon,
  PencilRulerIcon,
  WrenchIcon,
  LayersIcon,
  ShieldCheckIcon,
  TruckIcon,
  ScanIcon,
  PaintRollerIcon,
  HammerIcon,
  RulerIcon } from
'lucide-react';
import { projectsData } from './ProjectsPage';
// Process step icons mapped per service
const processIcons: Record<string, React.ReactNode[]> = {
  'construction-batiments': [
  <ClipboardListIcon className="w-7 h-7 text-white" />,
  <HardHatIcon className="w-7 h-7 text-white" />,
  <ShieldCheckIcon className="w-7 h-7 text-white" />,
  <KeyIcon className="w-7 h-7 text-white" />],

  'conception-architecturale': [
  <SearchIcon className="w-7 h-7 text-white" />,
  <PencilRulerIcon className="w-7 h-7 text-white" />,
  <LayersIcon className="w-7 h-7 text-white" />,
  <FileTextIcon className="w-7 h-7 text-white" />],

  'genie-civil': [
  <ScanIcon className="w-7 h-7 text-white" />,
  <TruckIcon className="w-7 h-7 text-white" />,
  <HardHatIcon className="w-7 h-7 text-white" />,
  <ShieldCheckIcon className="w-7 h-7 text-white" />],

  'renovation-amenagement': [
  <SearchIcon className="w-7 h-7 text-white" />,
  <HammerIcon className="w-7 h-7 text-white" />,
  <PaintRollerIcon className="w-7 h-7 text-white" />,
  <RulerIcon className="w-7 h-7 text-white" />]

};
const serviceDetailsData: Record<string, any> = {
  'construction-batiments': {
    title: 'Construction de Bâtiments',
    category: 'Gros Œuvre',
    image:
    'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    desc: "Nous prenons en charge la construction intégrale de vos bâtiments, qu'ils soient à usage résidentiel, commercial ou industriel. Notre approche 'clé en main' vous garantit une tranquillité d'esprit totale, de la pose de la première pierre jusqu'à la remise des clés.",
    details:
    "Grâce à notre expertise technique et notre réseau de partenaires fiables, nous utilisons des matériaux de première qualité respectant les normes environnementales et de sécurité les plus strictes. Chaque étape du chantier est rigoureusement contrôlée par nos ingénieurs pour assurer la pérennité de l'ouvrage.",
    benefits: [
    'Respect strict des délais annoncés',
    'Assurance décennale incluse',
    'Matériaux certifiés et durables',
    'Un seul interlocuteur dédié',
    'Suivi de chantier transparent',
    'Respect des normes parasismiques'],

    relatedCategory: 'Résidentiel',
    processSteps: [
    {
      title: 'Étude & Planification',
      desc: 'Analyse du terrain, étude de sol, élaboration des plans et obtention des permis de construire. Nous définissons ensemble le cahier des charges et le budget prévisionnel.'
    },
    {
      title: 'Gros Œuvre',
      desc: 'Terrassement, fondations, élévation des murs porteurs, dalles et charpente. Chaque étape est validée par un contrôle qualité rigoureux avant de passer à la suivante.'
    },
    {
      title: 'Second Œuvre & Finitions',
      desc: 'Plomberie, électricité, isolation, revêtements de sol, peinture et menuiseries. Nous coordonnons tous les corps de métier pour un résultat impeccable.'
    },
    {
      title: 'Livraison Clé en Main',
      desc: 'Inspection finale, levée des réserves, remise des clés et du dossier technique complet. Votre garantie décennale est activée dès la réception.'
    }],

    faq: [
    {
      q: "Combien de temps dure la construction d'une maison ?",
      a: "La durée varie selon la taille et la complexité du projet. En moyenne, comptez 10 à 18 mois pour une villa R+1 à R+2, et 18 à 36 mois pour un immeuble commercial. Nous établissons un planning détaillé dès la phase d'étude."
    },
    {
      q: 'Quelles garanties offrez-vous après la livraison ?',
      a: 'Nous offrons la garantie de parfait achèvement (1 an), la garantie biennale (2 ans) sur les équipements, et la garantie décennale (10 ans) sur la structure. Toutes nos constructions sont couvertes par une assurance professionnelle.'
    },
    {
      q: "Puis-je suivre l'avancement de mon chantier en temps réel ?",
      a: "Absolument. Chaque client dispose d'un accès à notre plateforme de suivi de chantier avec photos hebdomadaires, rapports d'avancement et un interlocuteur dédié joignable à tout moment."
    },
    {
      q: 'Fournissez-vous les matériaux ou dois-je les acheter moi-même ?',
      a: "Nous gérons l'intégralité de l'approvisionnement en matériaux. Grâce à nos partenariats avec les meilleurs fournisseurs, nous obtenons des tarifs préférentiels que nous répercutons sur votre devis."
    }]

  },
  'conception-architecturale': {
    title: 'Conception Architecturale',
    category: 'Études & Plans',
    image:
    'https://images.unsplash.com/photo-1503387762-592deb58ef4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    desc: "Notre bureau d'études donne vie à vos idées. Nous concevons des espaces fonctionnels, esthétiques et durables, parfaitement adaptés à vos besoins et aux contraintes du terrain.",
    details:
    'Nous utilisons les derniers logiciels de CAO/DAO (AutoCAD, Revit) pour vous fournir des plans détaillés et des modélisations 3D immersives. Cela vous permet de visualiser votre projet dans ses moindres détails avant le début des travaux, évitant ainsi les mauvaises surprises.',
    benefits: [
    'Modélisation 3D réaliste et visites virtuelles',
    'Optimisation des espaces et de la lumière',
    'Dossier de permis de construire complet',
    "Respect strict des normes d'urbanisme locales",
    'Design sur-mesure et contemporain',
    "Étude d'impact environnemental"],

    relatedCategory: 'Commercial',
    processSteps: [
    {
      title: 'Consultation & Brief',
      desc: 'Rencontre avec le client pour comprendre ses besoins, son budget et ses aspirations. Visite du terrain et analyse des contraintes urbanistiques et environnementales.'
    },
    {
      title: 'Esquisse & Avant-Projet',
      desc: 'Création des premières esquisses et plans de masse. Présentation de 2 à 3 propositions architecturales avec estimations budgétaires pour validation.'
    },
    {
      title: 'Modélisation 3D & Plans Détaillés',
      desc: "Développement complet des plans d'exécution, coupes, façades et modélisation 3D photoréaliste. Visite virtuelle interactive de votre futur espace."
    },
    {
      title: 'Dossier Administratif',
      desc: 'Constitution et dépôt du dossier de permis de construire, suivi des démarches administratives et coordination avec les bureaux de contrôle.'
    }],

    faq: [
    {
      q: 'Puis-je voir mon projet en 3D avant la construction ?',
      a: "Oui, c'est même l'un de nos points forts. Nous réalisons des modélisations 3D photoréalistes et des visites virtuelles interactives qui vous permettent de vous projeter dans votre futur espace."
    },
    {
      q: 'Combien coûte une étude architecturale ?',
      a: "Les honoraires d'architecture représentent généralement entre 8% et 12% du coût total de la construction. Ce pourcentage varie selon la complexité du projet. Nous établissons un devis détaillé après la première consultation."
    },
    {
      q: 'Gérez-vous les démarches de permis de construire ?',
      a: "Oui, nous constituons l'intégralité du dossier de permis de construire et assurons le suivi auprès des services d'urbanisme jusqu'à l'obtention de l'autorisation."
    }]

  },
  'genie-civil': {
    title: 'Génie Civil & Travaux Publics',
    category: 'Infrastructures',
    image:
    'https://images.unsplash.com/photo-1581094794329-c8112a89af12?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    desc: "Une expertise pointue pour la réalisation d'infrastructures lourdes : routes, ponts, réseaux d'assainissement et aménagements urbains complexes.",
    details:
    "Nos équipes d'ingénieurs en génie civil déploient tout leur savoir-faire pour garantir des ouvrages d'art capables de résister à l'épreuve du temps et aux contraintes environnementales les plus sévères.",
    benefits: [
    'Expertise technique reconnue',
    'Parc matériel de pointe',
    'Solutions innovantes de soutènement',
    'Gestion stricte des normes HSE',
    'Études géotechniques approfondies',
    'Respect des normes environnementales'],

    relatedCategory: 'Public',
    processSteps: [
    {
      title: 'Études Géotechniques',
      desc: 'Analyse approfondie du sol, relevés topographiques, études hydrologiques et évaluation des risques naturels. Ces données sont essentielles pour dimensionner correctement les ouvrages.'
    },
    {
      title: 'Mobilisation & Terrassement',
      desc: 'Déploiement du parc matériel lourd sur site, terrassement général, déblais/remblais et préparation des plateformes de travail selon les cotes du projet.'
    },
    {
      title: 'Exécution des Ouvrages',
      desc: 'Réalisation des fondations profondes, coulage des structures en béton armé, mise en place des armatures et coffrage. Contrôle qualité à chaque phase critique.'
    },
    {
      title: 'Réception & Contrôle',
      desc: "Tests de charge, essais de conformité, vérification des tolérances dimensionnelles et remise du dossier des ouvrages exécutés (DOE) au maître d'ouvrage."
    }],

    faq: [
    {
      q: "Quels types d'infrastructures réalisez-vous ?",
      a: "Nous intervenons sur les routes et voiries, ponts et ouvrages d'art, réseaux d'assainissement, fondations spéciales (pieux, micropieux), murs de soutènement et aménagements urbains (parkings, places publiques)."
    },
    {
      q: 'Disposez-vous de votre propre parc matériel ?',
      a: "Oui, Globus dispose d'un parc matériel complet : pelles hydrauliques, bulldozers, grues, bétonnières, compacteurs et camions-bennes. Cela nous permet de maîtriser les coûts et les délais."
    },
    {
      q: 'Comment gérez-vous la sécurité sur les chantiers de génie civil ?',
      a: "La sécurité est notre priorité absolue. Chaque chantier dispose d'un responsable HSE dédié, d'un plan de prévention des risques et d'équipements de protection individuelle pour tous les intervenants."
    }]

  },
  'renovation-amenagement': {
    title: 'Rénovation et Aménagement',
    category: 'Second Œuvre',
    image:
    'https://images.unsplash.com/photo-1504307651254-35680f356dfd?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80',
    desc: 'Redonnez vie à vos anciens bâtiments. Nous excellons dans la rénovation lourde et la réhabilitation, en alliant respect du patrimoine et modernité technique.',
    details:
    'De la démolition sélective à la finition intérieure, nous repensons vos espaces pour les rendre plus fonctionnels, plus économes en énergie et esthétiquement irréprochables.',
    benefits: [
    'Mise aux normes électriques et plomberie',
    'Isolation thermique et phonique (RT2020)',
    'Aménagement intérieur sur-mesure',
    "Respect de l'architecture d'origine",
    'Valorisation de votre patrimoine immobilier',
    "Solutions d'extension et surélévation"],

    relatedCategory: 'Résidentiel',
    processSteps: [
    {
      title: 'Diagnostic & État des Lieux',
      desc: 'Inspection complète du bâtiment existant : structure, réseaux, isolation, conformité. Identification des pathologies et des travaux prioritaires avec un rapport détaillé.'
    },
    {
      title: 'Démolition & Préparation',
      desc: 'Démolition sélective des éléments à remplacer, dépose des anciens revêtements, mise à nu des structures pour vérification et traitement des éventuelles fissures ou infiltrations.'
    },
    {
      title: 'Travaux de Rénovation',
      desc: "Réfection des réseaux (électricité, plomberie, chauffage), pose de l'isolation, création de nouvelles cloisons, installation des menuiseries et mise en conformité générale."
    },
    {
      title: 'Finitions & Aménagement',
      desc: "Revêtements de sol et muraux, peinture, installation des équipements sanitaires et de cuisine, éclairage et décoration. Livraison d'un espace entièrement rénové et prêt à vivre."
    }],

    faq: [
    {
      q: 'Faut-il un permis de construire pour une rénovation ?',
      a: "Cela dépend de l'ampleur des travaux. Une simple rénovation intérieure ne nécessite généralement pas de permis. En revanche, une modification de façade, une extension ou un changement de destination du bâtiment requiert une déclaration préalable ou un permis de construire."
    },
    {
      q: 'Combien coûte une rénovation complète au m² ?',
      a: "Le coût varie entre 800 et 1 500 €/m² selon l'état initial du bâtiment et le niveau de finition souhaité. Nous établissons un devis précis après le diagnostic initial pour éviter toute mauvaise surprise."
    },
    {
      q: 'Peut-on habiter le logement pendant les travaux ?',
      a: 'Pour une rénovation partielle (une seule pièce ou un étage), il est souvent possible de rester sur place. Pour une rénovation complète, nous recommandons de prévoir un logement temporaire pour votre confort et la sécurité du chantier.'
    }]

  }
};
// FAQ Accordion Item
function FaqItem({
  question,
  answer,
  isOpen,
  onToggle





}: {question: string;answer: string;isOpen: boolean;onToggle: () => void;}) {
  return (
    <div className="border border-gray-200 rounded-2xl overflow-hidden transition-all">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between p-6 text-left hover:bg-globus-light/50 transition-colors">
        
        <span className="font-montserrat font-bold text-globus-blue-dark text-lg pr-4">
          {question}
        </span>
        <ChevronDownIcon
          className={`w-6 h-6 text-globus-orange flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
        
      </button>
      <motion.div
        initial={false}
        animate={{
          height: isOpen ? 'auto' : 0,
          opacity: isOpen ? 1 : 0
        }}
        transition={{
          duration: 0.3,
          ease: 'easeInOut'
        }}
        className="overflow-hidden">
        
        <div className="px-6 pb-6 pt-0">
          <p className="font-opensans text-globus-gray leading-relaxed">
            {answer}
          </p>
        </div>
      </motion.div>
    </div>);

}
export function ServiceDetailPage() {
  const { slug } = useParams<{
    slug: string;
  }>();
  const navigate = useNavigate();
  const data = serviceDetailsData[slug || ''];
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!data) {
      navigate('/services');
    }
  }, [slug, data, navigate]);
  if (!data) return null;
  const icons =
  processIcons[slug || ''] || processIcons['construction-batiments'];
  // Get related projects
  const relatedProjects = projectsData.
  filter(
    (p) => p.category === data.relatedCategory || p.category === 'En Cours'
  ).
  slice(0, 3);
  return (
    <div className="pt-28 pb-20 bg-white">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 mb-6">
        <nav className="flex items-center text-sm font-opensans text-globus-gray">
          <Link
            to="/"
            className="hover:text-globus-orange transition-colors flex items-center gap-1">
            
            <HomeIcon className="w-4 h-4" /> Accueil
          </Link>
          <ChevronRightIcon className="w-4 h-4 mx-2" />
          <Link
            to="/services"
            className="hover:text-globus-orange transition-colors">
            
            Services
          </Link>
          <ChevronRightIcon className="w-4 h-4 mx-2" />
          <span className="text-globus-blue-dark font-semibold truncate">
            {data.title}
          </span>
        </nav>
      </div>

      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center overflow-hidden mb-16 rounded-3xl mx-4 shadow-2xl">
        <div className="absolute inset-0 bg-gradient-to-r from-globus-blue-dark/95 to-globus-blue-dark/40 z-10"></div>
        <img
          src={data.image}
          alt={data.title}
          className="absolute inset-0 w-full h-full object-cover" />
        
        <div className="container mx-auto px-4 relative z-20">
          <motion.div
            initial={{
              opacity: 0,
              y: 30
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="max-w-3xl">
            
            <span className="inline-block bg-globus-orange text-white font-montserrat font-bold text-xs px-3 py-1 rounded-full mb-4">
              {data.category}
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-montserrat font-extrabold text-white mb-6 leading-tight">
              {data.title}
            </h1>
            <Link
              to="/services"
              className="text-seconda-blue font-montserrat font-semibold inline-flex items-center gap-2 hover:text-white transition-colors">
              
              <ArrowLeftIcon className="w-4 h-4" /> Voir tous les services
            </Link>
          </motion.div>
        </div>
      </section>

      <div className="container mx-auto px-4">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Main Content */}
          <div className="w-full lg:w-2/3">
            <motion.div
              initial={{
                opacity: 0,
                y: 20
              }}
              animate={{
                opacity: 1,
                y: 0
              }}
              transition={{
                delay: 0.2
              }}>
              
              <h2 className="font-montserrat font-extrabold text-3xl text-globus-blue-dark mb-6">
                Présentation de notre expertise
              </h2>
              <div className="prose prose-lg max-w-none font-opensans text-globus-gray mb-10">
                <p className="lead text-xl text-globus-blue-dark font-semibold mb-6">
                  {data.desc}
                </p>
                <p>{data.details}</p>
              </div>

              {/* Benefits */}
              <div className="bg-globus-light p-8 md:p-10 rounded-3xl border border-gray-100 mb-10 shadow-sm">
                <h3 className="font-montserrat font-bold text-2xl text-globus-blue-dark mb-8 flex items-center gap-3">
                  <div className="w-2 h-8 bg-globus-orange rounded-full"></div>
                  Vos Avantages avec Globus
                </h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {data.benefits.map((benefit: string, idx: number) =>
                  <li key={idx} className="flex items-start gap-3">
                      <CheckCircleIcon className="w-6 h-6 text-globus-orange flex-shrink-0 mt-0.5" />
                      <span className="font-opensans font-semibold text-globus-blue-dark">
                        {benefit}
                      </span>
                    </li>
                  )}
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Sidebar */}
          <div className="w-full lg:w-1/3">
            <motion.div
              initial={{
                opacity: 0,
                x: 20
              }}
              animate={{
                opacity: 1,
                x: 0
              }}
              transition={{
                delay: 0.3
              }}
              className="bg-globus-blue-dark rounded-3xl p-8 text-white sticky top-32 shadow-2xl">
              
              <h3 className="font-montserrat font-bold text-2xl mb-4">
                Besoin de ce service ?
              </h3>
              <p className="font-opensans text-seconda-blue mb-8">
                Discutez de votre projet de{' '}
                <strong>{data.title.toLowerCase()}</strong> avec nos experts et
                obtenez une estimation détaillée.
              </p>
              <Link
                to="/contact"
                className="block w-full text-center bg-globus-orange hover:bg-globus-orange-hover text-white font-montserrat font-bold py-4 px-6 rounded-xl transition-colors shadow-md mb-4">
                
                Demander un devis
              </Link>
              <a
                href="tel:+33123456789"
                className="block w-full text-center bg-white/10 hover:bg-white/20 text-white font-montserrat font-bold py-4 px-6 rounded-xl transition-colors mb-4">
                
                Appeler le +33 1 23 45 67 89
              </a>
              <a
                href="https://wa.me/33612345678"
                target="_blank"
                rel="noopener noreferrer"
                className="block w-full text-center bg-[#25D366] hover:bg-[#20bd5a] text-white font-montserrat font-bold py-4 px-6 rounded-xl transition-colors">
                
                WhatsApp
              </a>
            </motion.div>
          </div>
        </div>

        {/* ===== NOTRE PROCESSUS ===== */}
        <section className="mt-24">
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
                Méthodologie
              </span>
              <div className="h-1 w-8 bg-globus-orange"></div>
            </motion.div>
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-globus-blue-dark">
              Notre Processus
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.processSteps.map((step: any, idx: number) =>
            <motion.div
              key={idx}
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
                delay: idx * 0.15,
                duration: 0.5
              }}
              className="relative">
              
                {/* Connector line */}
                {idx < data.processSteps.length - 1 &&
              <div className="hidden lg:block absolute top-10 left-[calc(50%+40px)] w-[calc(100%-40px)] h-0.5 bg-gray-200 z-0"></div>
              }

                <div className="relative z-10 flex flex-col items-center text-center">
                  {/* Step number + icon */}
                  <div className="relative mb-6">
                    <div className="w-20 h-20 bg-globus-blue-dark rounded-2xl flex items-center justify-center shadow-xl">
                      {icons[idx]}
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-globus-orange rounded-full flex items-center justify-center shadow-md">
                      <span className="font-montserrat font-extrabold text-white text-sm">
                        {idx + 1}
                      </span>
                    </div>
                  </div>

                  <h3 className="font-montserrat font-bold text-xl text-globus-blue-dark mb-3">
                    {step.title}
                  </h3>
                  <p className="font-opensans text-globus-gray text-sm leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            )}
          </div>
        </section>

        {/* ===== QUESTIONS FRÉQUENTES ===== */}
        <section className="mt-24">
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
                FAQ
              </span>
              <div className="h-1 w-8 bg-globus-orange"></div>
            </motion.div>
            <h2 className="font-montserrat font-extrabold text-3xl md:text-4xl text-globus-blue-dark">
              Questions Fréquentes
            </h2>
            <p className="font-opensans text-globus-gray mt-4 max-w-2xl mx-auto">
              Les réponses aux questions les plus posées par nos clients
              concernant notre service de {data.title.toLowerCase()}.
            </p>
          </div>

          <div className="max-w-3xl mx-auto space-y-4">
            {data.faq.map((item: any, idx: number) =>
            <motion.div
              key={idx}
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
                delay: idx * 0.1
              }}>
              
                <FaqItem
                question={item.q}
                answer={item.a}
                isOpen={openFaq === idx}
                onToggle={() => setOpenFaq(openFaq === idx ? null : idx)} />
              
              </motion.div>
            )}
          </div>
        </section>

        {/* ===== PROJETS ASSOCIÉS (avec progression) ===== */}
        {relatedProjects.length > 0 &&
        <section className="mt-24 mb-12">
            <div className="flex items-center justify-between mb-8">
              <h2 className="font-montserrat font-extrabold text-3xl text-globus-blue-dark">
                Projets Associés
              </h2>
              <Link
              to="/projets"
              className="hidden md:flex items-center gap-2 text-globus-orange font-montserrat font-bold hover:text-globus-orange-hover transition-colors">
              
                Voir tout le portfolio <ArrowRightIcon className="w-5 h-5" />
              </Link>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProjects.map((project) =>
            <Link
              to={`/projets/${project.id}`}
              key={project.id}
              className="group rounded-2xl overflow-hidden shadow-lg block bg-white border border-gray-100">
              
                  {/* Image */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                  src={project.image}
                  alt={project.title}
                  className="absolute inset-0 w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700" />
                
                    <div className="absolute inset-0 bg-gradient-to-t from-globus-blue-dark/80 via-transparent to-transparent"></div>
                    {/* Status badge */}
                    <div className="absolute top-4 left-4">
                      <span
                    className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full font-montserrat font-bold text-xs text-white shadow-md ${project.progress === 100 ? 'bg-green-600' : 'bg-globus-orange'}`}>
                    
                        <div
                      className={`w-2 h-2 rounded-full ${project.progress === 100 ? 'bg-green-300' : 'bg-white animate-pulse'}`}>
                    </div>
                        {project.progress === 100 ? 'Livré' : 'En Cours'}
                      </span>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="p-6">
                    <span className="text-globus-orange font-montserrat font-bold text-xs block mb-2">
                      {project.category}
                    </span>
                    <h4 className="font-montserrat font-bold text-lg text-globus-blue-dark mb-4 group-hover:text-globus-blue transition-colors">
                      {project.title}
                    </h4>

                    {/* Progress Bar */}
                    <div>
                      <div className="flex justify-between items-center mb-1.5">
                        <span className="font-opensans text-globus-gray text-xs font-semibold">
                          Avancement
                        </span>
                        <span className="font-montserrat font-extrabold text-globus-blue text-sm">
                          {project.progress}%
                        </span>
                      </div>
                      <div className="w-full h-2.5 bg-gray-200 rounded-full overflow-hidden">
                        <motion.div
                      className={`h-full rounded-full ${project.progress === 100 ? 'bg-green-500' : 'bg-gradient-to-r from-globus-blue to-globus-blue-dark'}`}
                      initial={{
                        width: 0
                      }}
                      whileInView={{
                        width: `${project.progress}%`
                      }}
                      viewport={{
                        once: true
                      }}
                      transition={{
                        duration: 1,
                        ease: 'easeOut',
                        delay: 0.2
                      }} />
                    
                      </div>
                    </div>
                  </div>
                </Link>
            )}
            </div>
          </section>
        }
      </div>
    </div>);

}