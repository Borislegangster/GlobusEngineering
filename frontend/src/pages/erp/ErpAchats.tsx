import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ClipboardListIcon,
  ShoppingCartIcon,
  BoxesIcon,
  PlusIcon,
  AlertTriangleIcon,
  CheckCircle2Icon,
  XCircleIcon,
  ClockIcon,
  TruckIcon,
  PackageCheckIcon } from
'lucide-react';
const tabs = [
{
  id: 'da',
  label: "Demandes d'Achat",
  icon: ClipboardListIcon
},
{
  id: 'bc',
  label: 'Bons de Commande',
  icon: ShoppingCartIcon
},
{
  id: 'stock',
  label: 'Stock & Inventaire',
  icon: BoxesIcon
}];

interface DA {
  id: string;
  items: string;
  requestedBy: string;
  date: string;
  total: number;
  project: string;
  status: 'en-attente' | 'validee' | 'refusee';
}
const demandes: DA[] = [
{
  id: 'DA-127',
  items: 'Ciment CPA 50T, Fer HA 12mm (2T)',
  requestedBy: 'Paul Mbarga',
  date: '23/03/2026',
  total: 4500000,
  project: 'Villa Bonapriso',
  status: 'en-attente'
},
{
  id: 'DA-126',
  items: 'Sable fin 20m³, Gravier 15m³',
  requestedBy: 'Chef Chantier Akwa',
  date: '22/03/2026',
  total: 1800000,
  project: 'Immeuble Akwa',
  status: 'en-attente'
},
{
  id: 'DA-125',
  items: 'Peinture Seigneurie 200L',
  requestedBy: 'Claire Fotso',
  date: '21/03/2026',
  total: 2200000,
  project: 'Bureau Deïdo',
  status: 'validee'
},
{
  id: 'DA-124',
  items: 'Câbles électriques 500m, Disjoncteurs x20',
  requestedBy: 'David Kamga',
  date: '20/03/2026',
  total: 1500000,
  project: 'Résidence Bonanjo',
  status: 'validee'
},
{
  id: 'DA-123',
  items: 'Bois de coffrage 5m³',
  requestedBy: 'Pierre Ndjock',
  date: '19/03/2026',
  total: 750000,
  project: 'Entrepôt Bonabéri',
  status: 'refusee'
}];

const bonsCommande = [
{
  id: 'BC-089',
  fournisseur: 'Cimenterie du Cameroun',
  montant: 4500000,
  date: '23/03/2026',
  status: 'Émis'
},
{
  id: 'BC-088',
  fournisseur: 'Quincaillerie Ndongo & Fils',
  montant: 1500000,
  date: '21/03/2026',
  status: 'Livré'
},
{
  id: 'BC-087',
  fournisseur: 'Sablière de Douala',
  montant: 1800000,
  date: '20/03/2026',
  status: 'Partiellement livré'
},
{
  id: 'BC-086',
  fournisseur: 'Peintures Tropicales SARL',
  montant: 2200000,
  date: '18/03/2026',
  status: 'Livré'
},
{
  id: 'BC-085',
  fournisseur: 'Électricité Pro Cameroun',
  montant: 980000,
  date: '15/03/2026',
  status: 'Émis'
}];

interface StockItem {
  name: string;
  current: number;
  threshold: number;
  unit: string;
  status: 'ok' | 'attention' | 'alerte';
}
const stockItems: StockItem[] = [
{
  name: 'Ciment CPA',
  current: 5,
  threshold: 10,
  unit: 'tonnes',
  status: 'alerte'
},
{
  name: 'Fer à béton',
  current: 8,
  threshold: 5,
  unit: 'tonnes',
  status: 'ok'
},
{
  name: 'Sable fin',
  current: 15,
  threshold: 10,
  unit: 'm³',
  status: 'ok'
},
{
  name: 'Gravier',
  current: 12,
  threshold: 10,
  unit: 'm³',
  status: 'ok'
},
{
  name: 'Briques',
  current: 2000,
  threshold: 1000,
  unit: 'unités',
  status: 'ok'
},
{
  name: 'Peinture',
  current: 50,
  threshold: 100,
  unit: 'litres',
  status: 'attention'
}];

const mouvements = [
{
  date: '23/03',
  type: 'Sortie',
  item: 'Ciment CPA',
  qty: '2 tonnes',
  site: 'Villa Bonapriso',
  by: 'Paul Mbarga'
},
{
  date: '23/03',
  type: 'Entrée',
  item: 'Fer à béton',
  qty: '3 tonnes',
  site: 'Dépôt central',
  by: 'Fournisseur'
},
{
  date: '22/03',
  type: 'Sortie',
  item: 'Sable fin',
  qty: '5 m³',
  site: 'Immeuble Akwa',
  by: 'Chef Chantier'
},
{
  date: '22/03',
  type: 'Sortie',
  item: 'Briques',
  qty: '500 unités',
  site: 'Résidence Bonanjo',
  by: 'Chef Chantier'
},
{
  date: '21/03',
  type: 'Entrée',
  item: 'Peinture',
  qty: '100 litres',
  site: 'Dépôt central',
  by: 'Fournisseur'
}];

const fmt = (v: number) =>
new Intl.NumberFormat('fr-FR', {
  maximumFractionDigits: 0
}).format(v);
const statusBcColor = (s: string) => {
  if (s === 'Livré') return 'bg-green-100 text-green-700';
  if (s === 'Émis') return 'bg-blue-100 text-blue-700';
  return 'bg-yellow-100 text-yellow-700';
};
export function ErpAchats() {
  const [activeTab, setActiveTab] = useState('da');
  const daByStatus = (status: DA['status']) =>
  demandes.filter((d) => d.status === status);
  return (
    <div className="max-w-[1400px] mx-auto space-y-6">
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-1.5 flex flex-wrap gap-1.5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg font-montserrat font-bold text-xs transition-all ${activeTab === tab.id ? 'bg-globus-blue-dark text-white shadow-md' : 'text-globus-gray hover:bg-gray-50'}`}>
              
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>);

        })}
      </div>

      <AnimatePresence mode="wait">
        {/* DEMANDES D'ACHAT */}
        {activeTab === 'da' &&
        <motion.div
          key="da"
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -10
          }}
          className="space-y-4">
          
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <h2 className="font-montserrat font-bold text-xl text-globus-blue-dark">
                Workflow des Demandes d'Achat
              </h2>
              <button className="bg-globus-orange hover:bg-globus-orange-hover text-white font-montserrat font-bold py-2 px-4 rounded-lg text-sm flex items-center gap-2 transition-colors shadow-sm">
                <PlusIcon className="w-4 h-4" /> Nouvelle DA
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {/* EN ATTENTE */}
              <div>
                <div className="flex items-center gap-2 mb-3 px-1">
                  <div className="w-3 h-3 rounded-full bg-yellow-400"></div>
                  <h3 className="font-montserrat font-bold text-sm text-gray-700">
                    EN ATTENTE
                  </h3>
                  <span className="text-xs bg-yellow-100 text-yellow-700 px-1.5 py-0.5 rounded font-bold">
                    {daByStatus('en-attente').length}
                  </span>
                </div>
                <div className="space-y-3">
                  {daByStatus('en-attente').map((da) =>
                <motion.div
                  key={da.id}
                  initial={{
                    opacity: 0,
                    scale: 0.95
                  }}
                  animate={{
                    opacity: 1,
                    scale: 1
                  }}
                  className="bg-white rounded-xl border-2 border-yellow-200 p-4 shadow-sm">
                  
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-mono text-xs font-bold text-yellow-700 bg-yellow-50 px-2 py-0.5 rounded">
                          {da.id}
                        </span>
                        <ClockIcon className="w-4 h-4 text-yellow-500" />
                      </div>
                      <p className="font-opensans text-sm text-gray-800 font-semibold mb-1">
                        {da.items}
                      </p>
                      <p className="text-xs text-globus-gray mb-2">
                        Par {da.requestedBy} • {da.date}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                          {da.project}
                        </span>
                        <span className="font-montserrat font-bold text-sm text-globus-blue-dark">
                          {fmt(da.total)}
                        </span>
                      </div>
                      <div className="flex gap-2 mt-3">
                        <button className="flex-1 bg-green-500 hover:bg-green-600 text-white text-xs font-bold py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1">
                          <CheckCircle2Icon className="w-3.5 h-3.5" /> Valider
                        </button>
                        <button className="flex-1 bg-red-500 hover:bg-red-600 text-white text-xs font-bold py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1">
                          <XCircleIcon className="w-3.5 h-3.5" /> Refuser
                        </button>
                      </div>
                    </motion.div>
                )}
                </div>
              </div>

              {/* VALIDÉE */}
              <div>
                <div className="flex items-center gap-2 mb-3 px-1">
                  <div className="w-3 h-3 rounded-full bg-green-500"></div>
                  <h3 className="font-montserrat font-bold text-sm text-gray-700">
                    VALIDÉE
                  </h3>
                  <span className="text-xs bg-green-100 text-green-700 px-1.5 py-0.5 rounded font-bold">
                    {daByStatus('validee').length}
                  </span>
                </div>
                <div className="space-y-3">
                  {daByStatus('validee').map((da) =>
                <div
                  key={da.id}
                  className="bg-white rounded-xl border-2 border-green-200 p-4 shadow-sm">
                  
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-mono text-xs font-bold text-green-700 bg-green-50 px-2 py-0.5 rounded">
                          {da.id}
                        </span>
                        <CheckCircle2Icon className="w-4 h-4 text-green-500" />
                      </div>
                      <p className="font-opensans text-sm text-gray-800 font-semibold mb-1">
                        {da.items}
                      </p>
                      <p className="text-xs text-globus-gray mb-2">
                        Par {da.requestedBy} • {da.date}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                          {da.project}
                        </span>
                        <span className="font-montserrat font-bold text-sm text-globus-blue-dark">
                          {fmt(da.total)}
                        </span>
                      </div>
                      <button className="w-full mt-3 bg-globus-blue hover:bg-globus-blue/90 text-white text-xs font-bold py-1.5 rounded-lg transition-colors flex items-center justify-center gap-1">
                        <ShoppingCartIcon className="w-3.5 h-3.5" /> Créer BC
                      </button>
                    </div>
                )}
                </div>
              </div>

              {/* REFUSÉE */}
              <div>
                <div className="flex items-center gap-2 mb-3 px-1">
                  <div className="w-3 h-3 rounded-full bg-red-500"></div>
                  <h3 className="font-montserrat font-bold text-sm text-gray-700">
                    REFUSÉE
                  </h3>
                  <span className="text-xs bg-red-100 text-red-700 px-1.5 py-0.5 rounded font-bold">
                    {daByStatus('refusee').length}
                  </span>
                </div>
                <div className="space-y-3">
                  {daByStatus('refusee').map((da) =>
                <div
                  key={da.id}
                  className="bg-white rounded-xl border-2 border-red-200 p-4 shadow-sm opacity-75">
                  
                      <div className="flex justify-between items-start mb-2">
                        <span className="font-mono text-xs font-bold text-red-700 bg-red-50 px-2 py-0.5 rounded">
                          {da.id}
                        </span>
                        <XCircleIcon className="w-4 h-4 text-red-500" />
                      </div>
                      <p className="font-opensans text-sm text-gray-800 font-semibold mb-1 line-through">
                        {da.items}
                      </p>
                      <p className="text-xs text-globus-gray mb-2">
                        Par {da.requestedBy} • {da.date}
                      </p>
                      <div className="flex justify-between items-center">
                        <span className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded">
                          {da.project}
                        </span>
                        <span className="font-montserrat font-bold text-sm text-gray-400">
                          {fmt(da.total)}
                        </span>
                      </div>
                    </div>
                )}
                </div>
              </div>
            </div>
          </motion.div>
        }

        {/* BONS DE COMMANDE */}
        {activeTab === 'bc' &&
        <motion.div
          key="bc"
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -10
          }}
          className="space-y-4">
          
            <h2 className="font-montserrat font-bold text-xl text-globus-blue-dark">
              Bons de Commande
            </h2>
            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark">
                        N° BC
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark">
                        Fournisseur
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark">
                        Montant
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark hidden sm:table-cell">
                        Date
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark">
                        Statut
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark text-right">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-opensans text-sm">
                    {bonsCommande.map((bc, i) =>
                  <tr
                    key={i}
                    className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    
                        <td className="p-3 font-mono text-xs font-bold text-globus-blue">
                          {bc.id}
                        </td>
                        <td className="p-3 font-semibold text-gray-800">
                          {bc.fournisseur}
                        </td>
                        <td className="p-3 font-mono text-xs font-semibold text-gray-800">
                          {fmt(bc.montant)} FCFA
                        </td>
                        <td className="p-3 text-globus-gray hidden sm:table-cell">
                          {bc.date}
                        </td>
                        <td className="p-3">
                          <span
                        className={`px-2 py-1 rounded-full text-[10px] font-bold ${statusBcColor(bc.status)}`}>
                        
                            {bc.status}
                          </span>
                        </td>
                        <td className="p-3 text-right">
                          <button className="text-xs font-semibold text-globus-blue hover:underline">
                            Voir
                          </button>
                        </td>
                      </tr>
                  )}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        }

        {/* STOCK */}
        {activeTab === 'stock' &&
        <motion.div
          key="stock"
          initial={{
            opacity: 0,
            y: 10
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          exit={{
            opacity: 0,
            y: -10
          }}
          className="space-y-6">
          
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
              <h2 className="font-montserrat font-bold text-xl text-globus-blue-dark">
                État des Stocks
              </h2>
              <button className="bg-globus-blue hover:bg-globus-blue/90 text-white font-montserrat font-bold py-2 px-4 rounded-lg text-sm flex items-center gap-2 transition-colors shadow-sm">
                <PlusIcon className="w-4 h-4" /> Déclarer Consommation
              </button>
            </div>

            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
              {stockItems.map((item, i) => {
              const pct = Math.min(
                100,
                Math.round(
                  item.current /
                  Math.max(item.threshold * 2, item.current * 1.2) *
                  100
                )
              );
              const barColor =
              item.status === 'alerte' ?
              'bg-red-500' :
              item.status === 'attention' ?
              'bg-orange-500' :
              'bg-green-500';
              const borderColor =
              item.status === 'alerte' ?
              'border-red-300' :
              item.status === 'attention' ?
              'border-orange-300' :
              'border-gray-200';
              return (
                <motion.div
                  key={i}
                  initial={{
                    opacity: 0,
                    y: 15
                  }}
                  animate={{
                    opacity: 1,
                    y: 0
                  }}
                  transition={{
                    delay: i * 0.05
                  }}
                  className={`bg-white rounded-xl shadow-sm border-2 ${borderColor} p-4`}>
                  
                    <div className="flex items-center justify-between mb-3">
                      <h4 className="font-montserrat font-bold text-sm text-globus-blue-dark">
                        {item.name}
                      </h4>
                      {item.status === 'alerte' &&
                    <span className="flex items-center gap-1 text-[10px] font-bold text-red-600 bg-red-100 px-2 py-0.5 rounded-full">
                          <AlertTriangleIcon className="w-3 h-3" /> Stock Bas!
                        </span>
                    }
                      {item.status === 'attention' &&
                    <span className="text-[10px] font-bold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full">
                          Attention
                        </span>
                    }
                      {item.status === 'ok' &&
                    <span className="text-[10px] font-bold text-green-600 bg-green-100 px-2 py-0.5 rounded-full">
                          OK
                        </span>
                    }
                    </div>
                    <p className="font-montserrat font-extrabold text-2xl text-globus-blue-dark">
                      {item.current}{' '}
                      <span className="text-sm font-normal text-globus-gray">
                        {item.unit}
                      </span>
                    </p>
                    <p className="text-xs text-globus-gray mb-2">
                      Seuil min: {item.threshold} {item.unit}
                    </p>
                    <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                      <div
                      className={`h-full rounded-full ${barColor}`}
                      style={{
                        width: `${pct}%`
                      }}>
                    </div>
                    </div>
                  </motion.div>);

            })}
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-montserrat font-bold text-base text-globus-blue-dark">
                  Mouvements Récents
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark">
                        Date
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark">
                        Type
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark">
                        Article
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark">
                        Quantité
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark hidden sm:table-cell">
                        Destination
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark hidden md:table-cell">
                        Par
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-opensans text-sm">
                    {mouvements.map((m, i) =>
                  <tr
                    key={i}
                    className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    
                        <td className="p-3 font-mono text-xs text-gray-600">
                          {m.date}
                        </td>
                        <td className="p-3">
                          <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${m.type === 'Entrée' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        
                            {m.type}
                          </span>
                        </td>
                        <td className="p-3 font-semibold text-gray-800">
                          {m.item}
                        </td>
                        <td className="p-3 text-gray-600">{m.qty}</td>
                        <td className="p-3 text-globus-gray hidden sm:table-cell">
                          {m.site}
                        </td>
                        <td className="p-3 text-globus-gray hidden md:table-cell">
                          {m.by}
                        </td>
                      </tr>
                  )}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}