import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  TargetIcon,
  CalculatorIcon,
  PlusIcon,
  DownloadIcon,
  CopyIcon,
  PencilIcon,
  UserIcon,
  CalendarIcon,
  PercentIcon } from
'lucide-react';
const pipelineColumns = [
{
  id: 'prospect',
  label: 'PROSPECT',
  color: 'border-t-gray-400',
  bg: 'bg-gray-50',
  items: [
  {
    name: 'M. Essomba',
    project: 'Villa 5 chambres',
    budget: '95M FCFA',
    source: 'Recommandation',
    date: '20/03/2026',
    prob: 20
  },
  {
    name: 'Société SABC',
    project: 'Extension usine',
    budget: '500M FCFA',
    source: 'Salon BTP',
    date: '18/03/2026',
    prob: 15
  }]

},
{
  id: 'qualification',
  label: 'QUALIFICATION',
  color: 'border-t-blue-500',
  bg: 'bg-blue-50/30',
  items: [
  {
    name: 'Mme Ngo Bassa',
    project: 'Immeuble R+2',
    budget: '180M FCFA',
    source: 'Site web',
    date: '15/03/2026',
    prob: 40
  },
  {
    name: 'Dr. Fotso',
    project: 'Clinique privée',
    budget: '250M FCFA',
    source: 'Recommandation',
    date: '12/03/2026',
    prob: 50
  }]

},
{
  id: 'devis',
  label: 'DEVIS ENVOYÉ',
  color: 'border-t-globus-orange',
  bg: 'bg-orange-50/30',
  items: [
  {
    name: 'M. Tchoupo',
    project: 'Villa 4 chambres',
    budget: '85M FCFA',
    source: 'Site web',
    date: '10/03/2026',
    prob: 65
  }]

},
{
  id: 'nego',
  label: 'NÉGOCIATION',
  color: 'border-t-purple-500',
  bg: 'bg-purple-50/30',
  items: [
  {
    name: 'Import-Export SA',
    project: 'Entrepôt 800m²',
    budget: '150M FCFA',
    source: 'Salon BTP',
    date: '05/03/2026',
    prob: 80
  }]

},
{
  id: 'won',
  label: 'GAGNÉ',
  color: 'border-t-emerald-500',
  bg: 'bg-emerald-50/30',
  items: [
  {
    name: 'Mme Nguema',
    project: 'Immeuble R+3',
    budget: '350M FCFA',
    source: 'Recommandation',
    date: '01/03/2026',
    prob: 100
  },
  {
    name: 'CAMTEL',
    project: 'Rénovation bureau',
    budget: '25M FCFA',
    source: "Appel d'offre",
    date: '25/02/2026',
    prob: 100
  }]

}];

const quotes = [
{
  id: 'DEV-2026-015',
  project: 'Villa 4 chambres',
  client: 'M. Tchoupo',
  amount: 85000000,
  status: 'Envoyé',
  date: '15/03/2026'
},
{
  id: 'DEV-2026-014',
  project: 'Immeuble R+3',
  client: 'Mme Nguema',
  amount: 350000000,
  status: 'Accepté',
  date: '10/03/2026'
},
{
  id: 'DEV-2026-013',
  project: 'Rénovation bureau',
  client: 'CAMTEL',
  amount: 25000000,
  status: 'En rédaction',
  date: '08/03/2026'
},
{
  id: 'DEV-2026-012',
  project: 'Entrepôt 500m²',
  client: 'Import-Export SA',
  amount: 120000000,
  status: 'Refusé',
  date: '01/03/2026'
}];

export function ErpCRM() {
  const [activeTab, setActiveTab] = useState('pipeline');
  const fmt = (v: number) =>
  new Intl.NumberFormat('fr-FR', {
    maximumFractionDigits: 0
  }).format(v) + ' FCFA';
  const tabs = [
  {
    id: 'pipeline',
    label: 'Pipeline Commercial',
    icon: TargetIcon
  },
  {
    id: 'devis',
    label: 'Devis & BOQ',
    icon: CalculatorIcon
  }];

  const getStatusStyle = (s: string) => {
    switch (s) {
      case 'Envoyé':
        return 'bg-orange-100 text-orange-700';
      case 'Accepté':
        return 'bg-green-100 text-green-700';
      case 'En rédaction':
        return 'bg-blue-100 text-blue-700';
      case 'Refusé':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-700';
    }
  };
  return (
    <div className="max-w-7xl mx-auto">
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2 mb-6 flex flex-wrap gap-2">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-[160px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-montserrat font-bold text-sm transition-all ${activeTab === tab.id ? 'bg-globus-orange text-white shadow-md' : 'text-globus-gray hover:bg-globus-light'}`}>
              
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>);

        })}
      </div>

      {activeTab === 'pipeline' &&
      <motion.div
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}>
        
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-montserrat font-bold text-xl text-globus-blue-dark">
              Tunnel de Vente
            </h2>
            <button className="bg-globus-orange hover:bg-globus-orange-hover text-white font-montserrat font-bold py-2 px-5 rounded-lg transition-colors shadow-sm flex items-center gap-2 text-sm">
              <PlusIcon className="w-4 h-4" /> Nouveau Prospect
            </button>
          </div>
          <div className="flex gap-4 overflow-x-auto pb-4">
            {pipelineColumns.map((col, ci) =>
          <motion.div
            key={col.id}
            initial={{
              opacity: 0,
              y: 10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: ci * 0.05
            }}
            className={`min-w-[260px] flex-1 rounded-xl border border-gray-200 border-t-4 ${col.color} ${col.bg} overflow-hidden`}>
            
                <div className="p-3 border-b border-gray-200/50">
                  <div className="flex items-center justify-between">
                    <h3 className="font-montserrat font-bold text-xs uppercase tracking-wider text-globus-blue-dark">
                      {col.label}
                    </h3>
                    <span className="bg-white text-globus-gray text-xs font-bold px-2 py-0.5 rounded-full border border-gray-200">
                      {col.items.length}
                    </span>
                  </div>
                </div>
                <div className="p-3 space-y-3">
                  {col.items.map((item, i) =>
              <div
                key={i}
                className="bg-white rounded-lg p-3 shadow-sm border border-gray-100 hover:shadow-md transition-shadow cursor-pointer">
                
                      <div className="flex items-center gap-2 mb-2">
                        <div className="w-7 h-7 rounded-full bg-globus-blue-dark text-white flex items-center justify-center text-[10px] font-bold shrink-0">
                          {item.name.charAt(0)}
                          {item.name.split(' ').pop()?.charAt(0)}
                        </div>
                        <p className="font-montserrat font-bold text-xs text-globus-blue-dark truncate">
                          {item.name}
                        </p>
                      </div>
                      <p className="text-xs text-globus-gray font-opensans mb-2">
                        {item.project}
                      </p>
                      <div className="flex items-center justify-between">
                        <span className="font-montserrat font-bold text-xs text-globus-orange">
                          {item.budget}
                        </span>
                        <span className="flex items-center gap-0.5 text-[10px] text-globus-gray">
                          <PercentIcon className="w-3 h-3" />
                          {item.prob}%
                        </span>
                      </div>
                      <div className="flex items-center gap-2 mt-2 pt-2 border-t border-gray-50">
                        <span className="text-[10px] text-globus-gray bg-gray-100 px-1.5 py-0.5 rounded">
                          {item.source}
                        </span>
                        <span className="text-[10px] text-globus-gray">
                          {item.date}
                        </span>
                      </div>
                    </div>
              )}
                </div>
              </motion.div>
          )}
          </div>
        </motion.div>
      }

      {activeTab === 'devis' &&
      <motion.div
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}>
        
          <div className="flex justify-between items-center mb-6">
            <h2 className="font-montserrat font-bold text-xl text-globus-blue-dark">
              Générateur de Devis (BOQ)
            </h2>
            <button className="bg-globus-orange hover:bg-globus-orange-hover text-white font-montserrat font-bold py-2 px-5 rounded-lg transition-colors shadow-sm flex items-center gap-2 text-sm">
              <PlusIcon className="w-4 h-4" /> Nouveau Devis
            </button>
          </div>
          <div className="space-y-4">
            {quotes.map((q, idx) =>
          <motion.div
            key={q.id}
            initial={{
              opacity: 0,
              y: 10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: idx * 0.05
            }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-1">
                    <span className="font-mono text-xs text-gray-400 bg-gray-100 px-2 py-0.5 rounded">
                      {q.id}
                    </span>
                    <span
                  className={`px-2.5 py-0.5 rounded-full text-xs font-bold font-montserrat ${getStatusStyle(q.status)}`}>
                  
                      {q.status}
                    </span>
                  </div>
                  <h3 className="font-montserrat font-bold text-globus-blue-dark">
                    {q.project}
                  </h3>
                  <p className="text-sm text-globus-gray font-opensans flex items-center gap-2">
                    <UserIcon className="w-3 h-3" />
                    {q.client} <span className="text-gray-300">•</span>{' '}
                    <CalendarIcon className="w-3 h-3" />
                    {q.date}
                  </p>
                </div>
                <div className="flex items-center gap-4">
                  <p className="font-montserrat font-bold text-lg text-globus-blue-dark">
                    {fmt(q.amount)}
                  </p>
                  <div className="flex gap-2">
                    <button
                  className="p-2 text-gray-400 hover:text-globus-blue hover:bg-blue-50 rounded-lg transition-colors"
                  title="Télécharger">
                  
                      <DownloadIcon className="w-4 h-4" />
                    </button>
                    <button
                  className="p-2 text-gray-400 hover:text-globus-blue hover:bg-blue-50 rounded-lg transition-colors"
                  title="Dupliquer">
                  
                      <CopyIcon className="w-4 h-4" />
                    </button>
                    <button
                  className="p-2 text-gray-400 hover:text-globus-blue hover:bg-blue-50 rounded-lg transition-colors"
                  title="Modifier">
                  
                      <PencilIcon className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
          )}
          </div>
        </motion.div>
      }
    </div>);

}