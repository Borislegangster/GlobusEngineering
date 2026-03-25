import React, { useState, Children } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FileTextIcon,
  ImageIcon,
  BriefcaseIcon,
  UsersIcon,
  HelpCircleIcon,
  SearchIcon,
  PlusIcon,
  EditIcon,
  Trash2Icon,
  EyeIcon,
  EyeOffIcon,
  GripVerticalIcon,
  CheckCircle2Icon,
  MessageSquareIcon,
  MailIcon,
  ClockIcon } from
'lucide-react';
const tabs = [
{
  id: 'pages',
  label: 'Pages & Légal',
  icon: FileTextIcon
},
{
  id: 'blog',
  label: 'Articles Blog',
  icon: FileTextIcon
},
{
  id: 'portfolio',
  label: 'Projets & Portfolio',
  icon: ImageIcon
},
{
  id: 'services',
  label: 'Services',
  icon: BriefcaseIcon
},
{
  id: 'team',
  label: 'Équipe & Témoignages',
  icon: UsersIcon
},
{
  id: 'faq',
  label: 'FAQ & Contact',
  icon: HelpCircleIcon
}];

const blogData = [
{
  id: 1,
  title: "Les 5 erreurs à éviter avant d'acheter un terrain",
  category: 'Conseils',
  author: 'Jean Dupont',
  date: '12/10/2023',
  status: 'Publié'
},
{
  id: 2,
  title: 'Comment choisir les finitions intérieures',
  category: 'Design',
  author: 'Sarah Koné',
  date: '28/09/2023',
  status: 'Publié'
},
{
  id: 3,
  title: 'Visite de la Résidence Horizon',
  category: 'Actualités',
  author: 'Amina Diallo',
  date: '15/09/2023',
  status: 'Publié'
},
{
  id: 4,
  title: 'Normes environnementales 2024',
  category: 'Réglementation',
  author: 'Marc Lemaire',
  date: '02/09/2023',
  status: 'Publié'
},
{
  id: 5,
  title: 'Guide du premier achat immobilier',
  category: 'Conseils',
  author: 'Jean Dupont',
  date: '-',
  status: 'Brouillon'
},
{
  id: 6,
  title: 'Tendances architecture 2026',
  category: 'Design',
  author: 'Sarah Koné',
  date: '25/04/2026',
  status: 'Planifié'
}];

const projectsData = [
{
  id: 1,
  title: 'Villa Les Alizés',
  category: 'Résidentiel',
  location: 'Douala',
  progress: 100,
  status: 'Publié',
  image:
  'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=150&q=80'
},
{
  id: 2,
  title: 'Complexe Horizon',
  category: 'Commercial',
  location: 'Yaoundé',
  progress: 100,
  status: 'Publié',
  image:
  'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=150&q=80'
},
{
  id: 3,
  title: 'Hôpital Régional',
  category: 'Institutionnel',
  location: 'Bafoussam',
  progress: 65,
  status: 'Publié',
  image:
  'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=150&q=80'
},
{
  id: 4,
  title: 'Tour Zenith',
  category: 'Commercial',
  location: 'Douala',
  progress: 45,
  status: 'Publié',
  image:
  'https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=150&q=80'
},
{
  id: 5,
  title: 'Résidence Palmiers',
  category: 'Résidentiel',
  location: 'Douala',
  progress: 30,
  status: 'Brouillon',
  image:
  'https://images.unsplash.com/photo-1541888086425-d81bb19240f5?w=150&q=80'
}];

const servicesData = [
{
  id: 1,
  title: 'Construction de Bâtiments',
  subtitle: 'Résidentiel / Commercial / Industriel',
  status: 'Publié'
},
{
  id: 2,
  title: 'Conception Architecturale',
  subtitle: 'Plans 2D/3D & Design',
  status: 'Publié'
},
{
  id: 3,
  title: 'Génie Civil & Travaux Publics',
  subtitle: 'Infrastructures complexes',
  status: 'Publié'
},
{
  id: 4,
  title: 'Rénovation et Aménagement',
  subtitle: 'Réhabilitation & Second Œuvre',
  status: 'Publié'
}];

const teamData = [
{
  id: 1,
  name: 'Jean-Paul Kamga',
  role: 'Directeur Général'
},
{
  id: 2,
  name: 'Marie-Claire Fotso',
  role: 'Architecte en Chef'
},
{
  id: 3,
  name: 'Alain Mbarga',
  role: 'Directeur Technique'
},
{
  id: 4,
  name: 'Sophie Ndjock',
  role: 'Responsable QHSE'
}];

const testimonialsData = [
{
  id: 1,
  name: 'M. Essomba',
  role: 'Propriétaire Villa',
  quote: "Une équipe professionnelle et à l'écoute...",
  status: 'Publié'
},
{
  id: 2,
  name: 'SCI Akwa Center',
  role: 'Promoteur Immobilier',
  quote: 'Respect strict des délais et du budget...',
  status: 'Publié'
},
{
  id: 3,
  name: 'Mme Ndiaye',
  role: 'Investisseur',
  quote: 'La qualité des finitions est exceptionnelle...',
  status: 'Brouillon'
}];

const faqData = [
{
  id: 1,
  question: 'Quels sont vos délais moyens de construction ?',
  status: 'Publié'
},
{
  id: 2,
  question: 'Proposez-vous des garanties décennales ?',
  status: 'Publié'
},
{
  id: 3,
  question: 'Comment se déroule le paiement ?',
  status: 'Publié'
},
{
  id: 4,
  question: 'Prenez-vous en charge les démarches administratives ?',
  status: 'Publié'
},
{
  id: 5,
  question: 'Quels matériaux utilisez-vous ?',
  status: 'Brouillon'
}];

const contactData = [
{
  id: 1,
  name: 'Pierre Talla',
  email: 'p.talla@email.com',
  subject: 'Devis construction villa',
  date: '23/03/2026',
  status: 'Nouveau'
},
{
  id: 2,
  name: 'Entreprise ABC',
  email: 'contact@abc.com',
  subject: 'Partenariat sous-traitance',
  date: '22/03/2026',
  status: 'Lu'
},
{
  id: 3,
  name: 'Jeanne Eto',
  email: 'j.eto@email.com',
  subject: 'Rénovation appartement',
  date: '20/03/2026',
  status: 'Répondu'
},
{
  id: 4,
  name: 'Mairie Douala',
  email: 'urbanisme@douala.cm',
  subject: "Dossier appel d'offres",
  date: '18/03/2026',
  status: 'Répondu'
}];

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.05
    }
  }
};
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 15
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.3
    }
  }
};

// Shared Modal Component
const Modal = ({ isOpen, onClose, title, children }: any) => {
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4 overflow-y-auto">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="bg-white rounded-xl shadow-xl w-full max-w-2xl overflow-hidden my-auto"
      >
        <div className="p-6 border-b border-gray-100 flex justify-between items-center bg-gray-50">
          <h3 className="font-montserrat font-bold text-xl text-globus-blue-dark">{title}</h3>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-600 rounded-full hover:bg-gray-200 transition-colors">
             ✕
          </button>
        </div>
        <div className="p-6 max-h-[70vh] overflow-y-auto custom-scrollbar">
          {children}
        </div>
      </motion.div>
    </div>
  );
};

export function ErpCMS() {
  const [activeTab, setActiveTab] = useState('pages');
  const [pagesList, setPagesList] = useState<any[]>([]);

  // Editing state
  const [isEditing, setIsEditing] = useState(false);
  const [editType, setEditType] = useState('');
  const [editItem, setEditItem] = useState<any>(null);

  const handleEditClick = (item: any, type: string) => {
    setEditType(type);
    setEditItem({ ...item }); // create a copy
    setIsEditing(true);
  };

  const handleSaveEdit = async () => {
    try {
      if (editType === 'Page') {
        await cmsApi.updatePage(editItem.slug, editItem);
        const res = await cmsApi.getPages();
        setPagesList(res.data);
      } else if (editType === 'Blog') {
        await cmsApi.updateBlogPost(editItem.slug, editItem);
        const res = await cmsApi.getBlogPosts();
        setBlogList(res.data);
      } else if (editType === 'Projet') {
        await cmsApi.updateProject(editItem.slug, editItem);
        const res = await cmsApi.getProjects();
        setProjectsList(res.data);
      } else if (editType === 'Service') {
        await cmsApi.updateService(editItem.slug, editItem);
        const res = await cmsApi.getServices();
        setServicesList(res.data);
      } else if (editType === 'Equipe') {
        await cmsApi.updateTeamMember(editItem.id, editItem);
        const res = await cmsApi.getTeam();
        setTeamList(res.data);
      } else if (editType === 'Témoignage') {
        await cmsApi.updateTestimonial(editItem.id, editItem);
        const res = await cmsApi.getTestimonials();
        setTestimonialsList(res.data);
      } else if (editType === 'FAQ') {
        await cmsApi.updateFaq(editItem.id, editItem);
        const res = await cmsApi.getFaqs();
        setFaqList(res.data);
      }
      setIsEditing(false);
      alert('Modification enregistrée avec succès.');
    } catch (e) {
      console.error(e);
      alert('Erreur lors de la modification.');
    }
  };

  const handleDeleteClick = async (item: any, type: string) => {
    if (window.confirm(`Êtes-vous sûr de vouloir supprimer cet élément de type ${type}?`)) {
      try {
        if (type === 'Blog') {
          await cmsApi.deleteBlogPost(item.slug);
          const res = await cmsApi.getBlogPosts();
          setBlogList(res.data);
        } else if (type === 'Projet') {
          await cmsApi.deleteProject(item.slug);
          const res = await cmsApi.getProjects();
          setProjectsList(res.data);
        } else if (type === 'Service') {
          await cmsApi.deleteService(item.slug);
          const res = await cmsApi.getServices();
          setServicesList(res.data);
        } else if (type === 'Equipe') {
          await cmsApi.deleteTeamMember(item.id);
          const res = await cmsApi.getTeam();
          setTeamList(res.data);
        } else if (type === 'Témoignage') {
          await cmsApi.deleteTestimonial(item.id);
          const res = await cmsApi.getTestimonials();
          setTestimonialsList(res.data);
        } else if (type === 'FAQ') {
          await cmsApi.deleteFaq(item.id);
          const res = await cmsApi.getFaqs();
          setFaqList(res.data);
        }
        alert('Élément supprimé avec succès.');
      } catch (e) {
        console.error(e);
        alert('Erreur lors de la suppression.');
      }
    }
  };

  const handlePublishToggle = async (item: any, type: string) => {
      try {
        if (type === 'Page') {
          await cmsApi.updatePage(item.slug, { ...item, is_published: !item.is_published });
          const res = await cmsApi.getPages();
          setPagesList(res.data);
        } else if (type === 'Blog') {
          await cmsApi.updateBlogPost(item.slug, { ...item, is_published: !item.is_published });
          const res = await cmsApi.getBlogPosts();
          setBlogList(res.data);
        }
        alert('Statut de publication mis à jour avec succès.');
      } catch (e) {
        console.error(e);
        alert('Erreur lors de la mise à jour.');
      }
  };

  useEffect(() => {
    const loadPages = async () => {
      try {
        const res = await cmsApi.getPages();
        if (res.data) setPagesList(res.data);
      } catch (e) { console.error(e); }
    };
    loadPages();
  }, []);

  return (
    <div className="max-w-[1400px] mx-auto space-y-6">
      {/* Header & Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-montserrat font-extrabold text-2xl text-globus-blue-dark flex items-center gap-2">
              <FileTextIcon className="w-7 h-7 text-globus-orange" />
              Gestion de Contenu (CMS)
            </h2>
            <p className="font-opensans text-sm text-globus-gray mt-1">
              Gérez le contenu du site public (Blog, Projets, Services, etc.)
            </p>
          </div>
        </div>
        <div className="flex overflow-x-auto hide-scrollbar">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-4 font-montserrat font-semibold text-sm transition-colors relative whitespace-nowrap ${isActive ? 'text-globus-orange' : 'text-gray-500 hover:text-gray-800 hover:bg-gray-50'}`}>
                
                <Icon className="w-4 h-4" />
                {tab.label}
                {isActive &&
                <motion.div
                  layoutId="cms-tab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-globus-orange" />

                }
              </button>);

          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* TAB 0: PAGES */}
        {activeTab === 'pages' &&
          <motion.div
            key="pages"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={stagger}
            className="space-y-6">
            <motion.div variants={fadeUp} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <h3 className="font-montserrat font-bold text-lg text-globus-blue-dark">Pages Publiques</h3>
                </div>
                <button className="w-full sm:w-auto bg-globus-orange hover:bg-globus-orange-hover text-white font-montserrat font-bold py-2 px-4 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 text-sm">
                  <PlusIcon className="w-4 h-4" /> Nouvelle Page
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50 border-b border-gray-100 text-xs font-montserrat font-bold text-gray-500 uppercase">
                      <th className="py-3 px-5">Titre</th>
                      <th className="py-3 px-5">Slug / URL</th>
                      <th className="py-3 px-5">Statut</th>
                      <th className="py-3 px-5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm font-opensans">
                    {pagesList.map((page) =>
                      <tr key={page.id} className="hover:bg-gray-50 transition-colors">
                        <td className="py-3 px-5 font-semibold text-gray-800">{page.title}</td>
                        <td className="py-3 px-5 text-gray-600">/{page.slug}</td>
                        <td className="py-3 px-5">
                          <span className={`inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold uppercase ${page.is_published ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-700'}`}>
                            {page.is_published ? 'Publié' : 'Brouillon'}
                          </span>
                        </td>
                        <td className="py-3 px-5 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button onClick={() => handleEditClick(page, 'Page')} className="p-1.5 text-gray-400 hover:text-globus-blue hover:bg-blue-50 rounded transition-colors" title="Modifier">
                              <EditIcon className="w-4 h-4" />
                            </button>
                            <button onClick={() => handlePublishToggle(page, 'Page')} className="p-1.5 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded transition-colors" title={page.is_published ? 'Dépublier' : 'Publier'}>
                              {page.is_published ? <EyeOffIcon className="w-4 h-4" /> : <EyeIcon className="w-4 h-4" />}
                            </button>
                          </div>
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        }

        {/* TAB 1: BLOG */}
        {activeTab === 'blog' &&
        <motion.div
          key="blog"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={stagger}
          className="space-y-6">
          
            <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 sm:grid-cols-4 gap-4">
            
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">
                    Publiés
                  </p>
                  <p className="text-2xl font-montserrat font-bold text-green-600">
                    4
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center">
                  <CheckCircle2Icon className="w-5 h-5 text-green-500" />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">
                    Brouillons
                  </p>
                  <p className="text-2xl font-montserrat font-bold text-gray-600">
                    1
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-gray-50 flex items-center justify-center">
                  <EditIcon className="w-5 h-5 text-gray-500" />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">
                    Planifiés
                  </p>
                  <p className="text-2xl font-montserrat font-bold text-blue-600">
                    1
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <ClockIcon className="w-5 h-5 text-blue-500" />
                </div>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 flex items-center justify-between">
                <div>
                  <p className="text-xs text-gray-500 font-bold uppercase">
                    Vues ce mois
                  </p>
                  <p className="text-2xl font-montserrat font-bold text-globus-blue-dark">
                    2,450
                  </p>
                </div>
                <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center">
                  <EyeIcon className="w-5 h-5 text-globus-blue" />
                </div>
              </div>
            </motion.div>

            <motion.div
            variants={fadeUp}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            
              <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="flex items-center gap-4 w-full sm:w-auto">
                  <div className="relative flex-1 sm:w-64">
                    <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                    <input
                    type="text"
                    placeholder="Rechercher un article..."
                    className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-globus-blue" />
                  
                  </div>
                  <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-globus-blue">
                    <option>Toutes catégories</option>
                    <option>Conseils</option>
                    <option>Design</option>
                    <option>Actualités</option>
                  </select>
                </div>
                <button className="w-full sm:w-auto bg-globus-orange hover:bg-globus-orange-hover text-white font-montserrat font-bold py-2 px-4 rounded-lg transition-colors shadow-sm flex items-center justify-center gap-2 text-sm">
                  <PlusIcon className="w-4 h-4" /> Nouvel Article
                </button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50 border-b border-gray-100 text-xs font-montserrat font-bold text-gray-500 uppercase">
                      <th className="py-3 px-5">Titre</th>
                      <th className="py-3 px-5">Catégorie</th>
                      <th className="py-3 px-5">Auteur</th>
                      <th className="py-3 px-5">Date</th>
                      <th className="py-3 px-5">Statut</th>
                      <th className="py-3 px-5 text-right">Actions</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm font-opensans">
                    {blogData.map((post) =>
                  <tr
                    key={post.id}
                    className="hover:bg-gray-50 transition-colors">
                    
                        <td className="py-3 px-5 font-semibold text-gray-800">
                          {post.title}
                        </td>
                        <td className="py-3 px-5 text-gray-600">
                          {post.category}
                        </td>
                        <td className="py-3 px-5 text-gray-600">
                          {post.author}
                        </td>
                        <td className="py-3 px-5 text-gray-500">{post.date}</td>
                        <td className="py-3 px-5">
                          <span
                        className={`inline-flex items-center px-2 py-1 rounded-full text-[10px] font-bold uppercase ${post.status === 'Publié' ? 'bg-green-100 text-green-700' : post.status === 'Planifié' ? 'bg-blue-100 text-blue-700' : 'bg-gray-100 text-gray-700'}`}>
                        
                            {post.status}
                          </span>
                        </td>
                        <td className="py-3 px-5 text-right">
                          <div className="flex items-center justify-end gap-2">
                            <button onClick={() => handleEditClick(post, 'Blog')}
                          className="p-1.5 text-gray-400 hover:text-globus-blue hover:bg-blue-50 rounded transition-colors"
                          title="Modifier">
                          
                              <EditIcon className="w-4 h-4" />
                            </button>
                            <button onClick={() => handlePublishToggle(post, 'Blog')}
                          className="p-1.5 text-gray-400 hover:text-orange-500 hover:bg-orange-50 rounded transition-colors"
                          title={
                          post.status === 'Publié' ?
                          'Dépublier' :
                          'Publier'
                          }>
                          
                              {post.status === 'Publié' ?
                          <EyeOffIcon className="w-4 h-4" /> :

                          <EyeIcon className="w-4 h-4" />
                          }
                            </button>
                            <button onClick={() => handleDeleteClick(post, 'Blog')}
                          className="p-1.5 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors"
                          title="Supprimer">
                          
                              <Trash2Icon className="w-4 h-4" />
                            </button>
                          </div>
                        </td>
                      </tr>
                  )}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        }

        {/* TAB 2: PORTFOLIO */}
        {activeTab === 'portfolio' &&
        <motion.div
          key="portfolio"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={stagger}
          className="space-y-6">
          
            <motion.div
            variants={fadeUp}
            className="flex justify-between items-center bg-white p-4 rounded-xl shadow-sm border border-gray-200">
            
              <h3 className="font-montserrat font-bold text-lg text-globus-blue-dark">
                Projets du Portfolio
              </h3>
              <button className="bg-globus-orange hover:bg-globus-orange-hover text-white font-montserrat font-bold py-2 px-4 rounded-lg transition-colors shadow-sm flex items-center gap-2 text-sm">
                <PlusIcon className="w-4 h-4" /> Ajouter un Projet
              </button>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projectsData.map((project) =>
            <motion.div
              key={project.id}
              variants={fadeUp}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden group">
              
                  <div className="h-40 relative overflow-hidden">
                    <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                
                    <div className="absolute top-3 right-3">
                      <span
                    className={`px-2 py-1 rounded-full text-[10px] font-bold uppercase shadow-sm ${project.status === 'Publié' ? 'bg-green-500 text-white' : 'bg-gray-500 text-white'}`}>
                    
                        {project.status}
                      </span>
                    </div>
                  </div>
                  <div className="p-5">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-montserrat font-bold text-globus-blue-dark">
                        {project.title}
                      </h4>
                    </div>
                    <p className="text-sm text-gray-500 mb-4">
                      {project.category} • {project.location}
                    </p>

                    <div className="mb-4">
                      <div className="flex justify-between text-xs mb-1">
                        <span className="text-gray-500">
                          Avancement affiché
                        </span>
                        <span className="font-bold text-globus-blue">
                          {project.progress}%
                        </span>
                      </div>
                      <div className="w-full bg-gray-100 rounded-full h-1.5">
                        <div
                      className="bg-globus-blue h-1.5 rounded-full"
                      style={{
                        width: `${project.progress}%`
                      }}>
                    </div>
                      </div>
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <button onClick={() => handleEditClick(project, 'Projet')} className="text-sm font-semibold text-gray-500 hover:text-globus-blue flex items-center gap-1">
                        <EditIcon className="w-4 h-4" /> Modifier
                      </button>
                      <button onClick={() => handleDeleteClick(project, 'Projet')} className="text-sm font-semibold text-gray-400 hover:text-red-500 flex items-center gap-1">
                        <Trash2Icon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </motion.div>
            )}
            </div>
          </motion.div>
        }

        {/* TAB 3: SERVICES */}
        {activeTab === 'services' &&
        <motion.div
          key="services"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={stagger}
          className="space-y-6">
          
            <motion.div
            variants={fadeUp}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-montserrat font-bold text-lg text-globus-blue-dark">
                  Services Proposés
                </h3>
                <button className="bg-globus-orange hover:bg-globus-orange-hover text-white font-montserrat font-bold py-2 px-4 rounded-lg transition-colors shadow-sm flex items-center gap-2 text-sm">
                  <PlusIcon className="w-4 h-4" /> Ajouter un Service
                </button>
              </div>

              <div className="space-y-3">
                {servicesData.map((service) =>
              <div
                key={service.id}
                className="flex items-center gap-4 p-4 border border-gray-200 rounded-lg bg-white hover:border-globus-blue/50 transition-colors group">
                
                    <div className="cursor-grab text-gray-300 hover:text-gray-500">
                      <GripVerticalIcon className="w-5 h-5" />
                    </div>
                    <div className="w-12 h-12 rounded-lg bg-globus-blue-dark flex items-center justify-center shrink-0">
                      <BriefcaseIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-montserrat font-bold text-gray-800">
                        {service.title}
                      </h4>
                      <p className="text-sm text-gray-500">
                        {service.subtitle}
                      </p>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="px-2 py-1 rounded-full text-[10px] font-bold uppercase bg-green-100 text-green-700">
                        {service.status}
                      </span>
                      <button onClick={() => handleEditClick(service, 'Service')} className="p-2 text-gray-400 hover:text-globus-blue hover:bg-blue-50 rounded transition-colors">
                        <EditIcon className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDeleteClick(service, 'Service')} className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded transition-colors">
                        <Trash2Icon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
              )}
              </div>
            </motion.div>
          </motion.div>
        }

        {/* TAB 4: TEAM & TESTIMONIALS */}
        {activeTab === 'team' &&
        <motion.div
          key="team"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
            <motion.div
            variants={fadeUp}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-montserrat font-bold text-lg text-globus-blue-dark">
                  Équipe Dirigeante
                </h3>
                <button className="text-sm font-semibold text-globus-blue hover:underline flex items-center gap-1">
                  <PlusIcon className="w-4 h-4" /> Ajouter
                </button>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {teamData.map((member) =>
              <div
                key={member.id}
                className="border border-gray-100 rounded-lg p-4 text-center relative group hover:border-globus-blue/30 transition-colors">
                
                    <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                      <button onClick={() => handleEditClick(member, 'Equipe')} className="p-1 text-gray-400 hover:text-globus-blue">
                        <EditIcon className="w-3.5 h-3.5" />
                      </button>
                      <button onClick={() => handleDeleteClick(member, 'Equipe')} className="p-1 text-gray-400 hover:text-red-500">
                        <Trash2Icon className="w-3.5 h-3.5" />
                      </button>
                    </div>
                    <div className="w-16 h-16 mx-auto bg-gray-200 rounded-full mb-3 flex items-center justify-center">
                      <UsersIcon className="w-8 h-8 text-gray-400" />
                    </div>
                    <h4 className="font-montserrat font-bold text-sm text-gray-800">
                      {member.name}
                    </h4>
                    <p className="text-xs text-gray-500 mt-1">{member.role}</p>
                  </div>
              )}
              </div>
            </motion.div>

            <motion.div
            variants={fadeUp}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-montserrat font-bold text-lg text-globus-blue-dark">
                  Témoignages Clients
                </h3>
                <button className="text-sm font-semibold text-globus-blue hover:underline flex items-center gap-1">
                  <PlusIcon className="w-4 h-4" /> Ajouter
                </button>
              </div>
              <div className="space-y-4">
                {testimonialsData.map((testi) =>
              <div
                key={testi.id}
                className="border border-gray-100 rounded-lg p-4 bg-gray-50/50">
                
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <h4 className="font-montserrat font-bold text-sm text-gray-800">
                          {testi.name}
                        </h4>
                        <p className="text-xs text-gray-500">{testi.role}</p>
                      </div>
                      <span
                    className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${testi.status === 'Publié' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>
                    
                        {testi.status}
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 italic">
                      "{testi.quote}"
                    </p>
                    <div className="flex justify-end gap-2 mt-3">
                      <button onClick={() => handleEditClick(testi, 'Témoignage')} className="text-xs font-semibold text-gray-500 hover:text-globus-blue">
                        Modifier
                      </button>
                      <button onClick={() => handleDeleteClick(testi, 'Témoignage')} className="text-xs font-semibold text-gray-400 hover:text-red-500">
                        Supprimer
                      </button>
                    </div>
                  </div>
              )}
              </div>
            </motion.div>
          </motion.div>
        }

        {/* TAB 5: FAQ & CONTACT */}
        {activeTab === 'faq' &&
        <motion.div
          key="faq"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={stagger}
          className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          
            <motion.div
            variants={fadeUp}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            
              <div className="flex justify-between items-center mb-6">
                <h3 className="font-montserrat font-bold text-lg text-globus-blue-dark">
                  Foire Aux Questions
                </h3>
                <button className="text-sm font-semibold text-globus-blue hover:underline flex items-center gap-1">
                  <PlusIcon className="w-4 h-4" /> Ajouter
                </button>
              </div>
              <div className="space-y-3">
                {faqData.map((faq) =>
              <div
                key={faq.id}
                className="flex items-start gap-3 p-3 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors group">
                
                    <GripVerticalIcon className="w-4 h-4 text-gray-300 mt-1 cursor-grab" />
                    <div className="flex-1">
                      <p className="font-semibold text-sm text-gray-800">
                        {faq.question}
                      </p>
                      <div className="flex items-center gap-3 mt-2">
                        <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${faq.status === 'Publié' ? 'bg-green-100 text-green-700' : 'bg-gray-200 text-gray-600'}`}>
                      
                          {faq.status}
                        </span>
                      </div>
                    </div>
                    <div className="opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                      <button onClick={() => handleEditClick(faq, 'FAQ')} className="p-1 text-gray-400 hover:text-globus-blue">
                        <EditIcon className="w-4 h-4" />
                      </button>
                      <button onClick={() => handleDeleteClick(faq, 'FAQ')} className="p-1 text-gray-400 hover:text-red-500">
                        <Trash2Icon className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
              )}
              </div>
            </motion.div>

            <motion.div
            variants={fadeUp}
            className="bg-white rounded-xl shadow-sm border border-gray-200 p-6">
            
              <h3 className="font-montserrat font-bold text-lg text-globus-blue-dark mb-6 flex items-center gap-2">
                <MailIcon className="w-5 h-5 text-gray-400" />
                Soumissions Formulaire Contact
              </h3>
              <div className="space-y-3">
                {contactData.map((msg) =>
              <div
                key={msg.id}
                className={`p-4 rounded-lg border ${msg.status === 'Nouveau' ? 'border-blue-200 bg-blue-50/30' : 'border-gray-100 bg-white'}`}>
                
                    <div className="flex justify-between items-start mb-2">
                      <div className="flex items-center gap-2">
                        {msg.status === 'Nouveau' &&
                    <span className="w-2 h-2 rounded-full bg-blue-500" />
                    }
                        <h4 className="font-montserrat font-bold text-sm text-gray-800">
                          {msg.name}
                        </h4>
                      </div>
                      <span className="text-xs text-gray-500">{msg.date}</span>
                    </div>
                    <p className="text-xs text-gray-500 mb-1">{msg.email}</p>
                    <p className="text-sm font-semibold text-gray-700 mb-3">
                      {msg.subject}
                    </p>
                    <div className="flex justify-between items-center">
                      <span
                    className={`px-2 py-1 rounded text-[10px] font-bold uppercase ${msg.status === 'Nouveau' ? 'bg-blue-100 text-blue-700' : msg.status === 'Répondu' ? 'bg-green-100 text-green-700' : 'bg-gray-100 text-gray-600'}`}>
                    
                        {msg.status}
                      </span>
                      <button className="text-xs font-semibold text-globus-blue hover:underline">
                        Voir le message
                      </button>
                    </div>
                  </div>
              )}
              </div>
            </motion.div>
          </motion.div>
        }
      </AnimatePresence>

      <Modal isOpen={isEditing} onClose={() => setIsEditing(false)} title={`Modifier ${editType}`}>
        {editItem && (
          <div className="space-y-4">
            <div className="flex flex-col gap-2">
              <label className="text-sm font-semibold text-gray-700">Titre / Nom / Question</label>
              <input
                type="text"
                value={editItem.title || editItem.name || editItem.question || ''}
                onChange={(e) => {
                  const val = e.target.value;
                  if ('title' in editItem) setEditItem({...editItem, title: val});
                  else if ('name' in editItem) setEditItem({...editItem, name: val});
                  else if ('question' in editItem) setEditItem({...editItem, question: val});
                }}
                className="border border-gray-300 rounded p-2 focus:outline-none focus:border-globus-orange"
              />
            </div>

            {('content_json' in editItem) && (
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Contenu (JSON)</label>
                <textarea
                  rows={8}
                  value={editItem.content_json || ''}
                  onChange={(e) => setEditItem({...editItem, content_json: e.target.value})}
                  className="border border-gray-300 rounded p-2 focus:outline-none focus:border-globus-orange font-mono text-sm"
                />
                <p className="text-xs text-gray-500">Gérez le contenu avancé de la page sous format JSON.</p>
              </div>
            )}

            {('full_description' in editItem) && (
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Description Complète</label>
                <textarea
                  rows={4}
                  value={editItem.full_description || ''}
                  onChange={(e) => setEditItem({...editItem, full_description: e.target.value})}
                  className="border border-gray-300 rounded p-2 focus:outline-none focus:border-globus-orange"
                />
              </div>
            )}

            {('answer' in editItem) && (
              <div className="flex flex-col gap-2">
                <label className="text-sm font-semibold text-gray-700">Réponse</label>
                <textarea
                  rows={4}
                  value={editItem.answer || ''}
                  onChange={(e) => setEditItem({...editItem, answer: e.target.value})}
                  className="border border-gray-300 rounded p-2 focus:outline-none focus:border-globus-orange"
                />
              </div>
            )}

            <div className="pt-4 flex justify-end gap-4">
              <button onClick={() => setIsEditing(false)} className="px-4 py-2 text-sm text-gray-600 font-semibold hover:text-gray-800">Annuler</button>
              <button onClick={handleSaveEdit} className="px-6 py-2 text-sm bg-globus-orange text-white font-bold rounded shadow hover:bg-orange-600 transition-colors">
                Enregistrer
              </button>
            </div>
          </div>
        )}
      </Modal>
    </div>);

}