import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ShieldAlertIcon,
  HardHatIcon,
  ClipboardCheckIcon,
  AlertTriangleIcon,
  PlusIcon,
  ChevronDownIcon,
  CheckCircle2Icon,
  ClockIcon,
  SearchIcon,
  UploadCloudIcon,
  UsersIcon } from
'lucide-react';
const incidents = [
{
  id: 'INC-001',
  title: "Chute d'échafaudage",
  gravity: 'Grave',
  site: 'Chantier Akwa',
  date: '15/03/2026',
  worker: 'Moussa Amadou',
  status: 'investigation',
  desc: "L'ouvrier a chuté de 3m suite à un défaut de fixation de l'échafaudage. Fracture du bras droit. Évacuation immédiate."
},
{
  id: 'INC-002',
  title: 'Coupure main',
  gravity: 'Modéré',
  site: 'Villa Bonapriso',
  date: '10/03/2026',
  worker: 'Jean Kamga',
  status: 'closed',
  desc: "Coupure lors de la manipulation de tôles. Soins sur place, 2 jours d'arrêt."
},
{
  id: 'INC-003',
  title: 'Presque-accident: Charge suspendue',
  gravity: 'Mineur',
  site: 'Résidence Bonanjo',
  date: '05/03/2026',
  worker: '-',
  status: 'measures',
  desc: "Une charge de parpaings s'est décrochée de la grue à 1m du sol. Aucun blessé. Câble remplacé."
},
{
  id: 'INC-004',
  title: 'Glissade sur dalle humide',
  gravity: 'Mineur',
  site: 'Entrepôt Bonabéri',
  date: '01/03/2026',
  worker: 'Pierre Ndjock',
  status: 'closed',
  desc: 'Glissade sans blessure. Signalétique sol mouillé ajoutée.'
},
{
  id: 'INC-005',
  title: 'Exposition poussière sans masque',
  gravity: 'Modéré',
  site: 'Chantier Akwa',
  date: '25/02/2026',
  worker: 'Équipe coffrage',
  status: 'progress',
  desc: '3 ouvriers travaillaient sans masque lors du ponçage. Rappel des consignes effectué.'
}];

const epiData = [
{
  date: '23/03/2026',
  worker: 'Moussa Amadou',
  type: 'Casque + Gilet',
  qty: 1,
  site: 'Chantier Akwa',
  signed: true
},
{
  date: '23/03/2026',
  worker: 'Jean Kamga',
  type: 'Gants renforcés',
  qty: 2,
  site: 'Villa Bonapriso',
  signed: true
},
{
  date: '22/03/2026',
  worker: 'Pierre Ndjock',
  type: 'Bottes sécurité',
  qty: 1,
  site: 'Entrepôt Bonabéri',
  signed: true
},
{
  date: '22/03/2026',
  worker: 'Équipe RDC (8)',
  type: 'Casques',
  qty: 8,
  site: 'Villa Bonapriso',
  signed: true
},
{
  date: '21/03/2026',
  worker: 'Paul Essomba',
  type: 'Harnais anti-chute',
  qty: 1,
  site: 'Immeuble Akwa',
  signed: false
},
{
  date: '20/03/2026',
  worker: 'Alain Ngo',
  type: 'Masques FFP2',
  qty: 10,
  site: 'Chantier Akwa',
  signed: true
},
{
  date: '19/03/2026',
  worker: 'David Mbella',
  type: 'Lunettes protection',
  qty: 3,
  site: 'Résidence Bonanjo',
  signed: true
},
{
  date: '18/03/2026',
  worker: 'Équipe peinture (5)',
  type: 'Combinaisons',
  qty: 5,
  site: 'Villa Bonapriso',
  signed: true
}];

const briefings = [
{
  id: 47,
  title: 'Travail en hauteur',
  date: '23/03/2026',
  site: 'Villa Bonapriso',
  animator: 'Paul Mbarga',
  signed: 12,
  total: 15,
  current: true
},
{
  id: 46,
  title: 'Manipulation charges lourdes',
  date: '16/03/2026',
  site: 'Immeuble Akwa',
  animator: 'Chef Tabi',
  signed: 18,
  total: 18,
  current: false
},
{
  id: 45,
  title: 'Risques électriques',
  date: '09/03/2026',
  site: 'Résidence Bonanjo',
  animator: 'Paul Mbarga',
  signed: 10,
  total: 12,
  current: false
},
{
  id: 44,
  title: 'Premiers secours',
  date: '02/03/2026',
  site: 'Tous chantiers',
  animator: 'Dr. Essono',
  signed: 45,
  total: 48,
  current: false
}];

export function ErpQHSE() {
  const [activeTab, setActiveTab] = useState('incidents');
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const [showForm, setShowForm] = useState(false);
  const tabs = [
  {
    id: 'incidents',
    label: 'Incidents',
    icon: ShieldAlertIcon
  },
  {
    id: 'epi',
    label: 'EPI',
    icon: HardHatIcon
  },
  {
    id: 'briefings',
    label: "Quart d'Heure Sécurité",
    icon: ClipboardCheckIcon
  }];

  const getGravityStyle = (g: string) => {
    switch (g) {
      case 'Grave':
        return 'bg-red-100 text-red-700';
      case 'Modéré':
        return 'bg-orange-100 text-orange-700';
      default:
        return 'bg-yellow-100 text-yellow-700';
    }
  };
  const getStatusStyle = (s: string) => {
    switch (s) {
      case 'investigation':
        return {
          bg: 'bg-red-100 text-red-700',
          label: 'En investigation'
        };
      case 'closed':
        return {
          bg: 'bg-green-100 text-green-700',
          label: 'Clôturé'
        };
      case 'measures':
        return {
          bg: 'bg-blue-100 text-blue-700',
          label: 'Mesures prises'
        };
      default:
        return {
          bg: 'bg-orange-100 text-orange-700',
          label: 'En cours'
        };
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
              className={`flex-1 min-w-[140px] flex items-center justify-center gap-2 py-3 px-4 rounded-xl font-montserrat font-bold text-sm transition-all ${activeTab === tab.id ? 'bg-globus-orange text-white shadow-md' : 'text-globus-gray hover:bg-globus-light'}`}>
              
              <Icon className="w-4 h-4" />
              {tab.label}
            </button>);

        })}
      </div>

      {activeTab === 'incidents' &&
      <motion.div
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="space-y-6">
        
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center">
                <ShieldAlertIcon className="w-5 h-5 text-globus-blue-dark" />
              </div>
              <div>
                <p className="text-xs text-globus-gray">Total</p>
                <p className="font-montserrat font-bold text-xl text-globus-blue-dark">
                  12
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-orange-100 flex items-center justify-center">
                <ClockIcon className="w-5 h-5 text-orange-600" />
              </div>
              <div>
                <p className="text-xs text-globus-gray">Ce mois</p>
                <p className="font-montserrat font-bold text-xl text-globus-blue-dark">
                  2
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-red-100 flex items-center justify-center">
                <AlertTriangleIcon className="w-5 h-5 text-red-600" />
              </div>
              <div>
                <p className="text-xs text-globus-gray">Graves</p>
                <p className="font-montserrat font-bold text-xl text-red-600">
                  1
                </p>
              </div>
            </div>
            <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-yellow-100 flex items-center justify-center">
                <ShieldAlertIcon className="w-5 h-5 text-yellow-600" />
              </div>
              <div>
                <p className="text-xs text-globus-gray">Presque-acc.</p>
                <p className="font-montserrat font-bold text-xl text-globus-blue-dark">
                  8
                </p>
              </div>
            </div>
          </div>

          <div className="flex justify-between items-center">
            <h2 className="font-montserrat font-bold text-xl text-globus-blue-dark">
              Registre des Incidents
            </h2>
            <button
            onClick={() => setShowForm(!showForm)}
            className="bg-red-500 hover:bg-red-600 text-white font-montserrat font-bold py-2 px-5 rounded-lg transition-colors shadow-sm flex items-center gap-2 text-sm">
            
              <PlusIcon className="w-4 h-4" /> Déclarer un Incident
            </button>
          </div>

          <AnimatePresence>
            {showForm &&
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
            className="overflow-hidden">
            
                <div className="bg-white rounded-2xl shadow-md border-2 border-red-100 p-6 mb-4">
                  <h3 className="font-montserrat font-bold text-lg text-globus-blue-dark mb-4">
                    Nouveau Rapport d'Incident
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                    <div>
                      <label className="block font-montserrat font-semibold text-sm text-globus-blue-dark mb-1">
                        Chantier
                      </label>
                      <select className="w-full bg-globus-light border border-gray-200 rounded-lg px-4 py-2.5 font-opensans text-sm focus:outline-none focus:border-globus-orange">
                        <option>Villa Bonapriso</option>
                        <option>Immeuble Akwa</option>
                        <option>Résidence Bonanjo</option>
                      </select>
                    </div>
                    <div>
                      <label className="block font-montserrat font-semibold text-sm text-globus-blue-dark mb-1">
                        Ouvrier impliqué
                      </label>
                      <input
                    type="text"
                    placeholder="Nom de l'ouvrier"
                    className="w-full bg-globus-light border border-gray-200 rounded-lg px-4 py-2.5 font-opensans text-sm focus:outline-none focus:border-globus-orange" />
                  
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block font-montserrat font-semibold text-sm text-globus-blue-dark mb-2">
                      Gravité
                    </label>
                    <div className="flex gap-3">
                      {['Mineur', 'Modéré', 'Grave'].map((g) =>
                  <label
                    key={g}
                    className="flex-1 cursor-pointer border-2 border-gray-200 rounded-xl p-3 text-center hover:border-gray-300 transition-colors">
                    
                          <input
                      type="radio"
                      name="gravity"
                      className="sr-only" />
                    
                          <span
                      className={`text-sm font-bold font-montserrat ${g === 'Grave' ? 'text-red-600' : g === 'Modéré' ? 'text-orange-600' : 'text-yellow-600'}`}>
                      
                            {g}
                          </span>
                        </label>
                  )}
                    </div>
                  </div>
                  <div className="mb-4">
                    <label className="block font-montserrat font-semibold text-sm text-globus-blue-dark mb-1">
                      Description
                    </label>
                    <textarea
                  rows={3}
                  className="w-full bg-globus-light border border-gray-200 rounded-lg px-4 py-3 font-opensans text-sm focus:outline-none focus:border-globus-orange resize-none"
                  placeholder="Décrivez l'incident...">
                </textarea>
                  </div>
                  <div className="mb-4">
                    <label className="block font-montserrat font-semibold text-sm text-globus-blue-dark mb-1">
                      Photos
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                      <UploadCloudIcon className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                      <p className="text-xs text-globus-gray">
                        Glissez vos photos ici
                      </p>
                    </div>
                  </div>
                  <div className="flex justify-end gap-3">
                    <button
                  onClick={() => setShowForm(false)}
                  className="px-5 py-2 rounded-lg font-montserrat font-bold text-globus-gray hover:bg-gray-100 transition-colors text-sm">
                  
                      Annuler
                    </button>
                    <button className="bg-red-500 hover:bg-red-600 text-white font-montserrat font-bold py-2 px-6 rounded-lg transition-colors shadow-sm text-sm">
                      Soumettre
                    </button>
                  </div>
                </div>
              </motion.div>
          }
          </AnimatePresence>

          <div className="space-y-3">
            {incidents.map((inc, idx) => {
            const st = getStatusStyle(inc.status);
            return (
              <motion.div
                key={inc.id}
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
                className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                
                  <div
                  onClick={() =>
                  setExpandedId(expandedId === inc.id ? null : inc.id)
                  }
                  className="p-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3 cursor-pointer hover:bg-gray-50 transition-colors">
                  
                    <div className="flex items-center gap-3">
                      <div
                      className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${inc.gravity === 'Grave' ? 'bg-red-100 text-red-600' : inc.gravity === 'Modéré' ? 'bg-orange-100 text-orange-600' : 'bg-yellow-100 text-yellow-600'}`}>
                      
                        <AlertTriangleIcon className="w-5 h-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2 mb-0.5">
                          <span className="font-mono text-xs text-gray-400">
                            #{inc.id}
                          </span>
                          <h3 className="font-montserrat font-bold text-sm text-globus-blue-dark">
                            {inc.title}
                          </h3>
                        </div>
                        <p className="text-xs text-globus-gray font-opensans">
                          {inc.site} • {inc.date}{' '}
                          {inc.worker !== '-' && `• ${inc.worker}`}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span
                      className={`px-2.5 py-1 rounded-full text-xs font-bold font-montserrat ${getGravityStyle(inc.gravity)}`}>
                      
                        {inc.gravity}
                      </span>
                      <span
                      className={`px-2.5 py-1 rounded-full text-xs font-bold font-montserrat ${st.bg}`}>
                      
                        {st.label}
                      </span>
                      <ChevronDownIcon
                      className={`w-4 h-4 text-gray-400 transition-transform ${expandedId === inc.id ? 'rotate-180' : ''}`} />
                    
                    </div>
                  </div>
                  <AnimatePresence>
                    {expandedId === inc.id &&
                  <motion.div
                    initial={{
                      height: 0
                    }}
                    animate={{
                      height: 'auto'
                    }}
                    exit={{
                      height: 0
                    }}
                    className="overflow-hidden">
                    
                        <div className="p-4 bg-gray-50 border-t border-gray-100 font-opensans text-sm text-globus-gray">
                          {inc.desc}
                        </div>
                      </motion.div>
                  }
                  </AnimatePresence>
                </motion.div>);

          })}
          </div>
        </motion.div>
      }

      {activeTab === 'epi' &&
      <motion.div
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="space-y-6">
        
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
          {
            label: 'Casques',
            count: 156,
            icon: HardHatIcon,
            color: 'bg-blue-100 text-blue-600'
          },
          {
            label: 'Gants',
            count: 312,
            icon: HardHatIcon,
            color: 'bg-green-100 text-green-600'
          },
          {
            label: 'Bottes',
            count: 145,
            icon: HardHatIcon,
            color: 'bg-orange-100 text-orange-600'
          },
          {
            label: 'Gilets',
            count: 98,
            icon: HardHatIcon,
            color: 'bg-purple-100 text-purple-600'
          }].
          map((item, i) =>
          <motion.div
            key={item.label}
            initial={{
              opacity: 0,
              y: 10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            transition={{
              delay: i * 0.05
            }}
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center gap-3">
            
                <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${item.color}`}>
              
                  <item.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs text-globus-gray">{item.label}</p>
                  <p className="font-montserrat font-bold text-xl text-globus-blue-dark">
                    {item.count}
                  </p>
                </div>
              </motion.div>
          )}
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100 flex items-center justify-between">
              <h2 className="font-montserrat font-bold text-xl text-globus-blue-dark">
                Distribution des EPI
              </h2>
              <button className="bg-globus-orange hover:bg-globus-orange-hover text-white font-montserrat font-bold py-2 px-5 rounded-lg transition-colors shadow-sm flex items-center gap-2 text-sm">
                <PlusIcon className="w-4 h-4" /> Nouvelle Distribution
              </button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-globus-light border-b border-gray-200">
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Date
                    </th>
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Ouvrier
                    </th>
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Type EPI
                    </th>
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Qté
                    </th>
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Chantier
                    </th>
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Signature
                    </th>
                  </tr>
                </thead>
                <tbody className="font-opensans text-sm">
                  {epiData.map((row, i) =>
                <tr
                  key={i}
                  className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  
                      <td className="p-4 text-globus-gray">{row.date}</td>
                      <td className="p-4 font-semibold text-globus-blue-dark">
                        {row.worker}
                      </td>
                      <td className="p-4 text-globus-gray">{row.type}</td>
                      <td className="p-4 text-globus-gray">{row.qty}</td>
                      <td className="p-4 text-globus-gray">{row.site}</td>
                      <td className="p-4">
                        {row.signed ?
                    <span className="text-green-600 font-bold text-xs">
                            Signé ✓
                          </span> :

                    <span className="text-orange-500 font-bold text-xs">
                            En attente
                          </span>
                    }
                      </td>
                    </tr>
                )}
                </tbody>
              </table>
            </div>
          </div>
        </motion.div>
      }

      {activeTab === 'briefings' &&
      <motion.div
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="space-y-6">
        
          <div className="flex justify-between items-center">
            <h2 className="font-montserrat font-bold text-xl text-globus-blue-dark">
              Quarts d'Heure Sécurité (Toolbox Talks)
            </h2>
            <button className="bg-globus-orange hover:bg-globus-orange-hover text-white font-montserrat font-bold py-2 px-5 rounded-lg transition-colors shadow-sm flex items-center gap-2 text-sm">
              <PlusIcon className="w-4 h-4" /> Nouveau Briefing
            </button>
          </div>

          {briefings.
        filter((b) => b.current).
        map((b) =>
        <div
          key={b.id}
          className="bg-white rounded-2xl shadow-md border-2 border-globus-orange/20 p-6 relative overflow-hidden">
          
                <div className="absolute top-0 right-0 w-24 h-24 bg-globus-orange/5 rounded-full -translate-y-1/2 translate-x-1/2"></div>
                <div className="flex items-center gap-2 mb-1">
                  <span className="bg-globus-orange text-white text-[10px] font-bold px-2 py-0.5 rounded uppercase">
                    Cette semaine
                  </span>
                </div>
                <h3 className="font-montserrat font-bold text-xl text-globus-blue-dark mb-1">
                  Briefing #{b.id} — {b.title}
                </h3>
                <p className="font-opensans text-sm text-globus-gray mb-4">
                  {b.date} • {b.site} • Animé par {b.animator}
                </p>
                <div className="flex items-center justify-between mb-2">
                  <span className="font-opensans text-sm text-globus-gray flex items-center gap-1">
                    <UsersIcon className="w-4 h-4" /> {b.signed}/{b.total}{' '}
                    signatures
                  </span>
                  <span className="font-montserrat font-bold text-globus-blue-dark">
                    {Math.round(b.signed / b.total * 100)}%
                  </span>
                </div>
                <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden mb-4">
                  <div
              className="h-full bg-globus-orange rounded-full"
              style={{
                width: `${b.signed / b.total * 100}%`
              }}>
            </div>
                </div>
                <button className="bg-globus-blue hover:bg-globus-blue/90 text-white font-montserrat font-bold py-2 px-5 rounded-lg transition-colors shadow-sm text-sm">
                  Voir les signatures
                </button>
              </div>
        )}

          <h3 className="font-montserrat font-bold text-lg text-globus-blue-dark">
            Historique
          </h3>
          <div className="space-y-3">
            {briefings.
          filter((b) => !b.current).
          map((b, idx) =>
          <motion.div
            key={b.id}
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
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-4 flex items-center justify-between">
            
                  <div>
                    <h4 className="font-montserrat font-bold text-sm text-globus-blue-dark">
                      #{b.id} — {b.title}
                    </h4>
                    <p className="text-xs text-globus-gray font-opensans">
                      {b.date} • {b.site} • {b.animator}
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="text-right">
                      <p className="font-montserrat font-bold text-sm text-globus-blue-dark">
                        {b.signed}/{b.total}
                      </p>
                      <p className="text-[10px] text-globus-gray">signatures</p>
                    </div>
                    <div
                className={`w-10 h-10 rounded-full flex items-center justify-center text-xs font-bold font-montserrat ${b.signed === b.total ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                
                      {Math.round(b.signed / b.total * 100)}%
                    </div>
                  </div>
                </motion.div>
          )}
          </div>
        </motion.div>
      }
    </div>);

}