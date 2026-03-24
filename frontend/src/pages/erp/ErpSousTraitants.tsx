import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  UsersRoundIcon,
  ClipboardListIcon,
  ReceiptIcon,
  PlusIcon,
  StarIcon,
  CheckCircle2Icon,
  XCircleIcon,
  ClockIcon,
  PhoneIcon } from
'lucide-react';
const subcontractors = [
{
  name: "Menuiserie Bois d'Ébène",
  specialty: 'Menuiserie',
  contact: 'M. Ondoua',
  phone: '+237 6XX XXX XXX',
  projects: 3,
  rating: 4.5
},
{
  name: 'Électricité Pro Douala',
  specialty: 'Électricité',
  contact: 'M. Tabi',
  phone: '+237 6XX XXX XXX',
  projects: 2,
  rating: 4
},
{
  name: 'Plomberie Express',
  specialty: 'Plomberie',
  contact: 'Mme Eyinga',
  phone: '+237 6XX XXX XXX',
  projects: 1,
  rating: 3.5
},
{
  name: 'Peinture & Déco',
  specialty: 'Peinture',
  contact: 'M. Fouda',
  phone: '+237 6XX XXX XXX',
  projects: 2,
  rating: 4.8
},
{
  name: 'Transport Lourd Cameroun',
  specialty: 'Logistique',
  contact: 'M. Atangana',
  phone: '+237 6XX XXX XXX',
  projects: 4,
  rating: 4.2
}];

const situations = [
{
  sub: "Menuiserie Bois d'Ébène",
  project: 'Villa Bonapriso',
  desc: 'Pose fenêtres RDC',
  pct: 50,
  amount: 3500000,
  status: 'pending'
},
{
  sub: 'Électricité Pro Douala',
  project: 'Immeuble Akwa',
  desc: 'Câblage étage 1',
  pct: 100,
  amount: 8000000,
  status: 'validated'
},
{
  sub: 'Plomberie Express',
  project: 'Résidence Bonanjo',
  desc: 'Installation sanitaires',
  pct: 30,
  amount: 2100000,
  status: 'pending'
},
{
  sub: 'Peinture & Déco',
  project: 'Villa Bonapriso',
  desc: 'Peinture extérieure',
  pct: 0,
  amount: 0,
  status: 'planned'
}];

const invoices = [
{
  id: 'FACT-ST-001',
  supplier: "Menuiserie Bois d'Ébène",
  amount: 3500000,
  date: '20/03/2026',
  status: 'Soumise'
},
{
  id: 'FACT-ST-002',
  supplier: 'Électricité Pro Douala',
  amount: 8000000,
  date: '18/03/2026',
  status: 'Validée'
},
{
  id: 'FACT-ST-003',
  supplier: 'Cimenterie du Cameroun',
  amount: 12500000,
  date: '15/03/2026',
  status: 'Payée'
},
{
  id: 'FACT-ST-004',
  supplier: 'Quincaillerie Générale',
  amount: 2800000,
  date: '12/03/2026',
  status: 'Payée'
},
{
  id: 'FACT-ST-005',
  supplier: 'Plomberie Express',
  amount: 2100000,
  date: '10/03/2026',
  status: 'En litige'
},
{
  id: 'FACT-ST-006',
  supplier: 'Transport Lourd',
  amount: 4500000,
  date: '08/03/2026',
  status: 'Validée'
}];

export function ErpSousTraitants() {
  const [activeTab, setActiveTab] = useState('subs');
  const fmt = (v: number) =>
  new Intl.NumberFormat('fr-FR', {
    maximumFractionDigits: 0
  }).format(v) + ' FCFA';
  const tabs = [
  {
    id: 'subs',
    label: 'Sous-Traitants',
    icon: UsersRoundIcon
  },
  {
    id: 'situations',
    label: 'Situations de Travaux',
    icon: ClipboardListIcon
  },
  {
    id: 'invoices',
    label: 'Factures Fournisseurs',
    icon: ReceiptIcon
  }];

  const getInvoiceStatus = (s: string) => {
    switch (s) {
      case 'Soumise':
        return 'bg-blue-100 text-blue-700';
      case 'Validée':
        return 'bg-green-100 text-green-700';
      case 'Payée':
        return 'bg-gray-100 text-gray-600';
      case 'En litige':
        return 'bg-red-100 text-red-700';
      default:
        return 'bg-gray-100 text-gray-600';
    }
  };
  const renderStars = (rating: number) => {
    return (
      <div className="flex gap-0.5">
        {[1, 2, 3, 4, 5].map((s) =>
        <StarIcon
          key={s}
          className={`w-3.5 h-3.5 ${s <= Math.floor(rating) ? 'text-globus-orange fill-globus-orange' : s - 0.5 <= rating ? 'text-globus-orange fill-globus-orange/50' : 'text-gray-300'}`} />

        )}
        <span className="text-xs text-globus-gray ml-1 font-semibold">
          {rating}
        </span>
      </div>);

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

      {activeTab === 'subs' &&
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
              Gestion des Sous-Traitants
            </h2>
            <button className="bg-globus-orange hover:bg-globus-orange-hover text-white font-montserrat font-bold py-2 px-5 rounded-lg transition-colors shadow-sm flex items-center gap-2 text-sm">
              <PlusIcon className="w-4 h-4" /> Ajouter Partenaire
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {subcontractors.map((sub, idx) =>
          <motion.div
            key={sub.name}
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
            className="bg-white rounded-xl shadow-sm border border-gray-100 p-5 hover:shadow-md transition-shadow">
            
                <div className="flex items-start justify-between mb-3">
                  <div className="w-12 h-12 rounded-xl bg-globus-blue-dark text-white flex items-center justify-center font-montserrat font-bold text-lg shrink-0">
                    {sub.name.charAt(0)}
                  </div>
                  <span className="bg-globus-light text-globus-gray text-xs font-bold px-2 py-1 rounded border border-gray-200">
                    {sub.specialty}
                  </span>
                </div>
                <h3 className="font-montserrat font-bold text-globus-blue-dark mb-1">
                  {sub.name}
                </h3>
                <p className="text-xs text-globus-gray font-opensans flex items-center gap-1 mb-1">
                  <PhoneIcon className="w-3 h-3" />
                  {sub.contact} — {sub.phone}
                </p>
                <p className="text-xs text-globus-gray font-opensans mb-3">
                  {sub.projects} projet(s) actif(s)
                </p>
                {renderStars(sub.rating)}
              </motion.div>
          )}
          </div>
        </motion.div>
      }

      {activeTab === 'situations' &&
      <motion.div
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}>
        
          <h2 className="font-montserrat font-bold text-xl text-globus-blue-dark mb-6">
            Déclarations d'Avancement
          </h2>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-globus-light border-b border-gray-200">
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Sous-Traitant
                    </th>
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Projet
                    </th>
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Déclaration
                    </th>
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Avancement
                    </th>
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Montant
                    </th>
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Statut
                    </th>
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="font-opensans text-sm">
                  {situations.map((s, i) =>
                <tr
                  key={i}
                  className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  
                      <td className="p-4 font-semibold text-globus-blue-dark">
                        {s.sub}
                      </td>
                      <td className="p-4 text-globus-gray">{s.project}</td>
                      <td className="p-4 text-globus-gray">{s.desc}</td>
                      <td className="p-4">
                        <div className="flex items-center gap-2">
                          <div className="w-16 h-2 bg-gray-100 rounded-full overflow-hidden">
                            <div
                          className={`h-full rounded-full ${s.pct === 100 ? 'bg-emerald-500' : s.pct > 0 ? 'bg-globus-orange' : 'bg-gray-300'}`}
                          style={{
                            width: `${s.pct}%`
                          }}>
                        </div>
                          </div>
                          <span className="text-xs font-bold text-globus-blue-dark">
                            {s.pct}%
                          </span>
                        </div>
                      </td>
                      <td className="p-4 font-bold text-globus-blue-dark">
                        {s.amount > 0 ? fmt(s.amount) : '-'}
                      </td>
                      <td className="p-4">
                        <span
                      className={`px-2.5 py-1 rounded-full text-xs font-bold font-montserrat ${s.status === 'validated' ? 'bg-green-100 text-green-700' : s.status === 'pending' ? 'bg-orange-100 text-orange-700' : 'bg-gray-100 text-gray-500'}`}>
                      
                          {s.status === 'validated' ?
                      'Validé' :
                      s.status === 'pending' ?
                      'En attente' :
                      'Planifié'}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        {s.status === 'pending' &&
                    <div className="flex justify-end gap-2">
                            <button className="text-xs bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-lg font-bold transition-colors flex items-center gap-1">
                              <CheckCircle2Icon className="w-3 h-3" /> Valider
                            </button>
                            <button className="text-xs bg-red-100 hover:bg-red-500 hover:text-white text-red-600 px-3 py-1.5 rounded-lg font-bold transition-colors flex items-center gap-1">
                              <XCircleIcon className="w-3 h-3" /> Refuser
                            </button>
                          </div>
                    }
                        {s.status === 'validated' &&
                    <span className="text-xs text-green-600 font-bold">
                            ✓ Validé
                          </span>
                    }
                        {s.status === 'planned' &&
                    <span className="text-xs text-gray-400">—</span>
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

      {activeTab === 'invoices' &&
      <motion.div
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}>
        
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
            <h2 className="font-montserrat font-bold text-xl text-globus-blue-dark">
              Factures Reçues
            </h2>
            <div className="flex gap-3 text-xs font-montserrat font-bold">
              <span className="bg-blue-100 text-blue-700 px-3 py-1.5 rounded-lg">
                3 en attente
              </span>
              <span className="bg-green-100 text-green-700 px-3 py-1.5 rounded-lg">
                12 validées
              </span>
              <span className="bg-gray-100 text-gray-600 px-3 py-1.5 rounded-lg">
                8 payées
              </span>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-globus-light border-b border-gray-200">
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      N° Facture
                    </th>
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Fournisseur
                    </th>
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Montant
                    </th>
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Date
                    </th>
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Statut
                    </th>
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="font-opensans text-sm">
                  {invoices.map((inv, i) =>
                <tr
                  key={inv.id}
                  className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  
                      <td className="p-4 font-mono text-xs text-gray-500">
                        {inv.id}
                      </td>
                      <td className="p-4 font-semibold text-globus-blue-dark">
                        {inv.supplier}
                      </td>
                      <td className="p-4 font-bold text-globus-blue-dark">
                        {fmt(inv.amount)}
                      </td>
                      <td className="p-4 text-globus-gray">{inv.date}</td>
                      <td className="p-4">
                        <span
                      className={`px-2.5 py-1 rounded-full text-xs font-bold font-montserrat ${getInvoiceStatus(inv.status)}`}>
                      
                          {inv.status}
                        </span>
                      </td>
                      <td className="p-4 text-right">
                        {inv.status === 'Soumise' &&
                    <button className="text-xs bg-emerald-500 hover:bg-emerald-600 text-white px-3 py-1.5 rounded-lg font-bold transition-colors">
                            Valider
                          </button>
                    }
                        {inv.status === 'Validée' &&
                    <button className="text-xs bg-globus-blue hover:bg-globus-blue/90 text-white px-3 py-1.5 rounded-lg font-bold transition-colors">
                            Payer
                          </button>
                    }
                        {inv.status === 'En litige' &&
                    <button className="text-xs bg-orange-500 hover:bg-orange-600 text-white px-3 py-1.5 rounded-lg font-bold transition-colors">
                            Résoudre
                          </button>
                    }
                        {inv.status === 'Payée' &&
                    <span className="text-xs text-gray-400">—</span>
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
    </div>);

}