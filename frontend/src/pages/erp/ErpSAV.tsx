import React, { useState, Children } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldCheckIcon,
  AlertTriangleIcon,
  CheckCircle2Icon,
  ClockIcon,
  SearchIcon,
  FilterIcon,
  MessageSquareIcon,
  UserIcon,
  MapPinIcon,
  ActivityIcon,
  ChevronDownIcon } from
'lucide-react';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend } from
'recharts';
const tabs = [
{
  id: 'open',
  label: 'Tickets Ouverts',
  icon: AlertTriangleIcon
},
{
  id: 'all',
  label: 'Tous les Tickets',
  icon: ShieldCheckIcon
},
{
  id: 'stats',
  label: 'Statistiques',
  icon: ActivityIcon
}];

const mockTickets = [
{
  id: 'SAV-001',
  title: 'Fuite robinet cuisine',
  category: 'Plomberie',
  priority: 'Normal',
  client: 'Jean Talla',
  project: 'Villa Bonapriso',
  status: 'Résolu',
  date: '12/04/2025',
  desc: "Léger goutte à goutte sous l'évier de la cuisine.",
  assignee: 'Paul Mbarga'
},
{
  id: 'SAV-002',
  title: 'Fissure mur salon',
  category: 'Maçonnerie',
  priority: 'Haute',
  client: 'Jean Talla',
  project: 'Villa Bonapriso',
  status: 'En cours',
  date: '20/05/2025',
  desc: 'Micro-fissure apparue près de la baie vitrée.',
  assignee: 'Paul Mbarga'
},
{
  id: 'SAV-003',
  title: 'Prise électrique défectueuse',
  category: 'Électricité',
  priority: 'Normal',
  client: 'Jean Talla',
  project: 'Villa Bonapriso',
  status: 'Ouvert',
  date: '01/06/2025',
  desc: 'La prise murale de la chambre 2 ne fonctionne plus.',
  assignee: 'Non assigné'
},
{
  id: 'SAV-004',
  title: 'Infiltration toiture',
  category: 'Étanchéité',
  priority: 'Urgente',
  client: 'Mme Ndiaye',
  project: 'Résidence Bonanjo',
  status: 'Ouvert',
  date: '15/03/2026',
  desc: "Infiltration d'eau constatée suite aux fortes pluies.",
  assignee: 'Non assigné'
},
{
  id: 'SAV-005',
  title: 'Porte garage bloquée',
  category: 'Menuiserie',
  priority: 'Normal',
  client: 'M. Essomba',
  project: 'Bureau Deïdo',
  status: 'Ouvert',
  date: '18/03/2026',
  desc: 'Le moteur de la porte de garage fait un bruit anormal.',
  assignee: 'Non assigné'
},
{
  id: 'SAV-006',
  title: 'Carrelage fissuré',
  category: 'Revêtement',
  priority: 'Basse',
  client: 'SCI Akwa',
  project: 'Immeuble Akwa',
  status: 'En cours',
  date: '10/03/2026',
  desc: "Deux carreaux fissurés dans le hall d'entrée.",
  assignee: 'Alain Messi'
},
{
  id: 'SAV-007',
  title: 'Climatisation défaillante',
  category: 'CVC',
  priority: 'Haute',
  client: 'Tech Solutions',
  project: 'Bureau Deïdo',
  status: 'Ouvert',
  date: '22/03/2026',
  desc: 'Le split du bureau de direction ne refroidit plus.',
  assignee: 'Non assigné'
},
{
  id: 'SAV-008',
  title: 'Peinture écaillée',
  category: 'Peinture',
  priority: 'Basse',
  client: 'Logistics SA',
  project: 'Entrepôt Bonabéri',
  status: 'Ouvert',
  date: '20/03/2026',
  desc: 'Retouches peinture nécessaires sur façade ouest.',
  assignee: 'Non assigné'
}];

const statsTicketsMois = [
{
  month: 'Oct',
  tickets: 4
},
{
  month: 'Nov',
  tickets: 3
},
{
  month: 'Déc',
  tickets: 5
},
{
  month: 'Jan',
  tickets: 2
},
{
  month: 'Fév',
  tickets: 6
},
{
  month: 'Mar',
  tickets: 8
}];

const statsCategory = [
{
  name: 'Plomberie',
  value: 30,
  color: '#3B82F6'
},
{
  name: 'Électricité',
  value: 25,
  color: '#F59E0B'
},
{
  name: 'Maçonnerie',
  value: 20,
  color: '#6B7280'
},
{
  name: 'Menuiserie',
  value: 15,
  color: '#8B5CF6'
},
{
  name: 'Autres',
  value: 10,
  color: '#10B981'
}];

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'Urgente':
      return 'bg-red-100 text-red-700 border-red-200';
    case 'Haute':
      return 'bg-orange-100 text-orange-700 border-orange-200';
    case 'Normal':
      return 'bg-blue-100 text-blue-700 border-blue-200';
    case 'Basse':
      return 'bg-gray-100 text-gray-700 border-gray-200';
    default:
      return 'bg-gray-100 text-gray-700 border-gray-200';
  }
};
const getStatusColor = (status: string) => {
  switch (status) {
    case 'Résolu':
      return 'bg-green-100 text-green-700';
    case 'En cours':
      return 'bg-blue-100 text-blue-700';
    case 'Ouvert':
      return 'bg-orange-100 text-orange-700';
    case 'Fermé':
      return 'bg-gray-100 text-gray-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};
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
export function ErpSAV() {
  const [activeTab, setActiveTab] = useState('open');
  const [expandedTicket, setExpandedTicket] = useState<string | null>(null);
  const openTickets = mockTickets.filter(
    (t) => t.status === 'Ouvert' || t.status === 'En cours'
  );
  return (
    <div className="max-w-[1400px] mx-auto space-y-6">
      {/* Header & Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
        <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <h2 className="font-montserrat font-extrabold text-2xl text-globus-blue-dark flex items-center gap-2">
              <ShieldCheckIcon className="w-7 h-7 text-globus-orange" />
              Service Après-Vente (SAV)
            </h2>
            <p className="font-opensans text-sm text-globus-gray mt-1">
              Gestion des réclamations et garanties clients
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
                  layoutId="sav-tab"
                  className="absolute bottom-0 left-0 right-0 h-0.5 bg-globus-orange" />

                }
              </button>);

          })}
        </div>
      </div>

      <AnimatePresence mode="wait">
        {/* TAB 1: OPEN TICKETS */}
        {activeTab === 'open' &&
        <motion.div
          key="open"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={stagger}
          className="space-y-6">
          
            {/* KPIs */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <motion.div
              variants={fadeUp}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              
                <div className="flex items-center justify-between mb-2">
                  <p className="font-opensans text-sm text-globus-gray">
                    Tickets Ouverts
                  </p>
                  <div className="p-1.5 bg-orange-100 rounded-md">
                    <AlertTriangleIcon className="w-4 h-4 text-orange-600" />
                  </div>
                </div>
                <h3 className="font-montserrat font-extrabold text-3xl text-globus-blue-dark">
                  5
                </h3>
              </motion.div>
              <motion.div
              variants={fadeUp}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              
                <div className="flex items-center justify-between mb-2">
                  <p className="font-opensans text-sm text-globus-gray">
                    Temps Réponse Moyen
                  </p>
                  <div className="p-1.5 bg-blue-100 rounded-md">
                    <ClockIcon className="w-4 h-4 text-blue-600" />
                  </div>
                </div>
                <h3 className="font-montserrat font-extrabold text-3xl text-globus-blue-dark">
                  4h
                </h3>
              </motion.div>
              <motion.div
              variants={fadeUp}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              
                <div className="flex items-center justify-between mb-2">
                  <p className="font-opensans text-sm text-globus-gray">
                    Satisfaction Client
                  </p>
                  <div className="p-1.5 bg-green-100 rounded-md">
                    <CheckCircle2Icon className="w-4 h-4 text-green-600" />
                  </div>
                </div>
                <h3 className="font-montserrat font-extrabold text-3xl text-globus-blue-dark">
                  4.2<span className="text-lg text-gray-400">/5</span>
                </h3>
              </motion.div>
            </div>

            {/* Tickets List */}
            <div className="space-y-4">
              {openTickets.map((ticket) =>
            <motion.div
              key={ticket.id}
              variants={fadeUp}
              className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              
                  <div
                className="p-5 cursor-pointer hover:bg-gray-50 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4"
                onClick={() =>
                setExpandedTicket(
                  expandedTicket === ticket.id ? null : ticket.id
                )
                }>
                
                    <div className="flex-1">
                      <div className="flex flex-wrap items-center gap-2 mb-2">
                        <span className="font-mono text-xs font-bold text-gray-500">
                          {ticket.id}
                        </span>
                        <span
                      className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${getPriorityColor(ticket.priority)}`}>
                      
                          {ticket.priority}
                        </span>
                        <span
                      className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${getStatusColor(ticket.status)}`}>
                      
                          {ticket.status}
                        </span>
                        <span className="text-xs text-gray-400 flex items-center gap-1">
                          <ClockIcon className="w-3 h-3" /> {ticket.date}
                        </span>
                      </div>
                      <h3 className="font-montserrat font-bold text-lg text-globus-blue-dark">
                        {ticket.title}
                      </h3>
                      <div className="flex flex-wrap items-center gap-4 mt-2 text-sm text-gray-600">
                        <span className="flex items-center gap-1">
                          <UserIcon className="w-4 h-4" /> {ticket.client}
                        </span>
                        <span className="flex items-center gap-1">
                          <MapPinIcon className="w-4 h-4" /> {ticket.project}
                        </span>
                        <span className="flex items-center gap-1 text-gray-400">
                          • {ticket.category}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <div className="text-right hidden md:block">
                        <p className="text-xs text-gray-500 mb-1">Assigné à</p>
                        <p className="text-sm font-semibold text-gray-800">
                          {ticket.assignee}
                        </p>
                      </div>
                      <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center">
                        <ChevronDownIcon
                      className={`w-5 h-5 text-gray-500 transition-transform ${expandedTicket === ticket.id ? 'rotate-180' : ''}`} />
                    
                      </div>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedTicket === ticket.id &&
                <motion.div
                  initial={{
                    height: 0,
                    opacity: 0
                  }}
                  animate={{
                    height: 'auto',
                    opacity: 1
                  }}
                  exit={{
                    height: 0,
                    opacity: 0
                  }}
                  className="border-t border-gray-100 bg-gray-50/50">
                  
                        <div className="p-5">
                          <h4 className="text-xs font-bold text-gray-500 uppercase mb-2">
                            Description du problème
                          </h4>
                          <p className="text-sm text-gray-700 bg-white p-4 rounded-lg border border-gray-200 mb-5">
                            "{ticket.desc}"
                          </p>

                          <div className="flex flex-wrap gap-3">
                            <button className="bg-globus-blue hover:bg-globus-blue-dark text-white font-montserrat font-bold py-2 px-4 rounded-lg text-sm transition-colors flex items-center gap-2">
                              <MessageSquareIcon className="w-4 h-4" /> Répondre
                              au client
                            </button>
                            {ticket.status === 'Ouvert' &&
                      <button className="bg-white border border-gray-300 hover:bg-gray-50 text-gray-700 font-montserrat font-bold py-2 px-4 rounded-lg text-sm transition-colors">
                                Prendre en charge
                              </button>
                      }
                            <button className="bg-white border border-green-500 text-green-600 hover:bg-green-50 font-montserrat font-bold py-2 px-4 rounded-lg text-sm transition-colors flex items-center gap-2 ml-auto">
                              <CheckCircle2Icon className="w-4 h-4" /> Marquer
                              comme Résolu
                            </button>
                          </div>
                        </div>
                      </motion.div>
                }
                  </AnimatePresence>
                </motion.div>
            )}
            </div>
          </motion.div>
        }

        {/* TAB 2: ALL TICKETS */}
        {activeTab === 'all' &&
        <motion.div
          key="all"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={stagger}
          className="space-y-6">
          
            <motion.div
            variants={fadeUp}
            className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
            
              <div className="p-5 border-b border-gray-100 flex flex-col sm:flex-row gap-4 justify-between items-center">
                <div className="relative w-full sm:w-80">
                  <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                  <input
                  type="text"
                  placeholder="Rechercher un ticket, client..."
                  className="w-full pl-9 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-globus-blue" />
                
                </div>
                <div className="flex gap-3 w-full sm:w-auto">
                  <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-globus-blue flex-1 sm:flex-none">
                    <option>Tous les statuts</option>
                    <option>Ouvert</option>
                    <option>En cours</option>
                    <option>Résolu</option>
                  </select>
                  <select className="bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-globus-blue flex-1 sm:flex-none">
                    <option>Toutes priorités</option>
                    <option>Urgente</option>
                    <option>Haute</option>
                    <option>Normal</option>
                  </select>
                </div>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="bg-gray-50/50 border-b border-gray-100 text-xs font-montserrat font-bold text-gray-500 uppercase">
                      <th className="py-3 px-5">ID</th>
                      <th className="py-3 px-5">Titre</th>
                      <th className="py-3 px-5">Client / Projet</th>
                      <th className="py-3 px-5">Catégorie</th>
                      <th className="py-3 px-5">Priorité</th>
                      <th className="py-3 px-5">Statut</th>
                      <th className="py-3 px-5">Date</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 text-sm font-opensans">
                    {mockTickets.map((ticket) =>
                  <tr
                    key={ticket.id}
                    className="hover:bg-gray-50 transition-colors cursor-pointer">
                    
                        <td className="py-3 px-5 font-mono text-xs font-bold text-gray-500">
                          {ticket.id}
                        </td>
                        <td className="py-3 px-5 font-semibold text-gray-800">
                          {ticket.title}
                        </td>
                        <td className="py-3 px-5">
                          <p className="text-gray-800">{ticket.client}</p>
                          <p className="text-xs text-gray-500">
                            {ticket.project}
                          </p>
                        </td>
                        <td className="py-3 px-5 text-gray-600">
                          {ticket.category}
                        </td>
                        <td className="py-3 px-5">
                          <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold uppercase border ${getPriorityColor(ticket.priority)}`}>
                        
                            {ticket.priority}
                          </span>
                        </td>
                        <td className="py-3 px-5">
                          <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold uppercase ${getStatusColor(ticket.status)}`}>
                        
                            {ticket.status}
                          </span>
                        </td>
                        <td className="py-3 px-5 text-gray-500 text-xs">
                          {ticket.date}
                        </td>
                      </tr>
                  )}
                  </tbody>
                </table>
              </div>
            </motion.div>
          </motion.div>
        }

        {/* TAB 3: STATS */}
        {activeTab === 'stats' &&
        <motion.div
          key="stats"
          initial="hidden"
          animate="visible"
          exit="hidden"
          variants={stagger}
          className="space-y-6">
          
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              <motion.div
              variants={fadeUp}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              
                <h3 className="font-montserrat font-bold text-base text-globus-blue-dark mb-4">
                  Tickets par Mois
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart
                    data={statsTicketsMois}
                    margin={{
                      top: 5,
                      right: 10,
                      left: -20,
                      bottom: 0
                    }}>
                    
                      <CartesianGrid
                      strokeDasharray="3 3"
                      vertical={false}
                      stroke="#f3f4f6" />
                    
                      <XAxis
                      dataKey="month"
                      tick={{
                        fontSize: 11,
                        fill: '#6b7280'
                      }}
                      axisLine={false}
                      tickLine={false} />
                    
                      <YAxis
                      tick={{
                        fontSize: 11,
                        fill: '#6b7280'
                      }}
                      axisLine={false}
                      tickLine={false}
                      allowDecimals={false} />
                    
                      <Tooltip
                      contentStyle={{
                        borderRadius: '8px',
                        border: 'none',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                        fontSize: '12px'
                      }} />
                    
                      <Bar
                      dataKey="tickets"
                      fill="#3B82F6"
                      radius={[4, 4, 0, 0]}
                      maxBarSize={40} />
                    
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              <motion.div
              variants={fadeUp}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              
                <h3 className="font-montserrat font-bold text-base text-globus-blue-dark mb-4">
                  Répartition par Catégorie
                </h3>
                <div className="h-64">
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                      data={statsCategory}
                      cx="50%"
                      cy="50%"
                      innerRadius={60}
                      outerRadius={90}
                      dataKey="value"
                      stroke="none"
                      paddingAngle={2}>
                      
                        {statsCategory.map((entry, index) =>
                      <Cell key={index} fill={entry.color} />
                      )}
                      </Pie>
                      <Tooltip
                      formatter={(value: number) => [`${value}%`, '']}
                      contentStyle={{
                        borderRadius: '8px',
                        border: 'none',
                        boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                        fontSize: '12px'
                      }} />
                    
                      <Legend
                      layout="vertical"
                      verticalAlign="middle"
                      align="right"
                      iconType="circle"
                      wrapperStyle={{
                        fontSize: '12px'
                      }} />
                    
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <motion.div
              variants={fadeUp}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-center gap-6">
              
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                  <CheckCircle2Icon className="w-8 h-8 text-green-600" />
                </div>
                <div>
                  <p className="font-opensans text-sm text-gray-500 mb-1">
                    Taux de résolution global
                  </p>
                  <h3 className="font-montserrat font-extrabold text-3xl text-globus-blue-dark">
                    87%
                  </h3>
                </div>
              </motion.div>
              <motion.div
              variants={fadeUp}
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-6 flex items-center gap-6">
              
                <div className="w-16 h-16 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                  <ClockIcon className="w-8 h-8 text-blue-600" />
                </div>
                <div>
                  <p className="font-opensans text-sm text-gray-500 mb-1">
                    Délai moyen de résolution
                  </p>
                  <h3 className="font-montserrat font-extrabold text-3xl text-globus-blue-dark">
                    3.2{' '}
                    <span className="text-lg text-gray-400 font-normal">
                      jours
                    </span>
                  </h3>
                </div>
              </motion.div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}