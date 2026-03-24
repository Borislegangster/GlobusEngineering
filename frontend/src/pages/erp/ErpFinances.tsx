import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  TrendingUpIcon,
  BuildingIcon,
  CoinsIcon,
  PlusIcon,
  ArrowUpIcon,
  ArrowDownIcon,
  DownloadIcon,
  CameraIcon,
  UploadCloudIcon } from
'lucide-react';
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer } from
'recharts';
const tabs = [
{
  id: 'rentabilite',
  label: 'Rentabilité Projets',
  icon: TrendingUpIcon
},
{
  id: 'tresorerie',
  label: 'Charges & Trésorerie',
  icon: BuildingIcon
},
{
  id: 'caisse',
  label: 'Caisse',
  icon: CoinsIcon
}];

const projects = [
{
  name: 'Villa Moderne Bonapriso',
  status: 'En cours',
  budgetInit: 85000000,
  budgetActuel: 95000000,
  depenses: 74100000,
  margin: 22,
  mat: 35000000,
  mo: 22000000,
  st: 10000000,
  log: 7100000
},
{
  name: 'Immeuble R+4 Akwa',
  status: 'En cours',
  budgetInit: 320000000,
  budgetActuel: 320000000,
  depenses: 272000000,
  margin: 15,
  mat: 130000000,
  mo: 80000000,
  st: 40000000,
  log: 22000000
},
{
  name: 'Résidence Bonanjo',
  status: 'En cours',
  budgetInit: 150000000,
  budgetActuel: 155000000,
  depenses: 142600000,
  margin: 8,
  mat: 68000000,
  mo: 42000000,
  st: 20000000,
  log: 12600000
},
{
  name: 'Entrepôt Bonabéri',
  status: 'En cours',
  budgetInit: 45000000,
  budgetActuel: 45000000,
  depenses: 46350000,
  margin: -3,
  mat: 22000000,
  mo: 14000000,
  st: 6000000,
  log: 4350000
},
{
  name: 'Bureau Deïdo',
  status: 'Terminé',
  budgetInit: 60000000,
  budgetActuel: 62000000,
  depenses: 54560000,
  margin: 12,
  mat: 26000000,
  mo: 16000000,
  st: 8000000,
  log: 4560000
}];

const cashFlowData = [
{
  month: 'Oct',
  entrees: 85,
  sorties: 62
},
{
  month: 'Nov',
  entrees: 72,
  sorties: 58
},
{
  month: 'Déc',
  entrees: 95,
  sorties: 70
},
{
  month: 'Jan',
  entrees: 110,
  sorties: 78
},
{
  month: 'Fév',
  entrees: 88,
  sorties: 65
},
{
  month: 'Mar',
  entrees: 125,
  sorties: 82
}];

const charges = [
{
  label: 'Loyer bureau Douala',
  montant: 2500000,
  freq: 'Mensuel'
},
{
  label: 'Salaires fixes (5 employés)',
  montant: 4200000,
  freq: 'Mensuel'
},
{
  label: 'Assurances (RC Pro + Véhicules)',
  montant: 1800000,
  freq: 'Mensuel'
},
{
  label: 'Carburant & Véhicules',
  montant: 1500000,
  freq: 'Mensuel'
},
{
  label: 'Fournitures bureau',
  montant: 350000,
  freq: 'Mensuel'
},
{
  label: 'Internet & Télécom',
  montant: 450000,
  freq: 'Mensuel'
},
{
  label: 'Maintenance matériel',
  montant: 1200000,
  freq: 'Mensuel'
}];

const pettyTransactions = [
{
  date: '23/03',
  motif: 'Taxi chantier Akwa',
  montant: -15000,
  cat: 'Transport',
  site: 'Immeuble Akwa'
},
{
  date: '23/03',
  motif: 'Petit matériel (clous, vis)',
  montant: -8500,
  cat: 'Matériaux',
  site: 'Villa Bonapriso'
},
{
  date: '22/03',
  motif: 'Recharge caisse',
  montant: 500000,
  cat: 'Approvisionnement',
  site: '—'
},
{
  date: '22/03',
  motif: 'Repas équipe chantier',
  montant: -45000,
  cat: 'Restauration',
  site: 'Résidence Bonanjo'
},
{
  date: '21/03',
  motif: 'Photocopies plans',
  montant: -12000,
  cat: 'Bureau',
  site: 'Bureau Deïdo'
},
{
  date: '21/03',
  motif: 'Eau potable chantier',
  montant: -5000,
  cat: 'Divers',
  site: 'Immeuble Akwa'
},
{
  date: '20/03',
  motif: 'Taxi livraison urgente',
  montant: -25000,
  cat: 'Transport',
  site: 'Villa Bonapriso'
},
{
  date: '20/03',
  motif: 'Ampoules + rallonge',
  montant: -18000,
  cat: 'Matériaux',
  site: 'Entrepôt Bonabéri'
},
{
  date: '19/03',
  motif: 'Recharge caisse',
  montant: 300000,
  cat: 'Approvisionnement',
  site: '—'
},
{
  date: '19/03',
  motif: 'Frais notaire document',
  montant: -35000,
  cat: 'Administratif',
  site: '—'
}];

const fmt = (v: number) =>
new Intl.NumberFormat('fr-FR', {
  maximumFractionDigits: 0
}).format(v);
const [isCaisseFormOpen, setIsCaisseFormOpen] = [false, () => {}]; // placeholder
export function ErpFinances() {
  const [activeTab, setActiveTab] = useState('rentabilite');
  const [showCaisseForm, setShowCaisseForm] = useState(false);
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
        {/* RENTABILITÉ */}
        {activeTab === 'rentabilite' &&
        <motion.div
          key="rent"
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
              Suivi de Rentabilité par Projet
            </h2>
            <div className="space-y-4">
              {projects.map((p, i) => {
              const pct = Math.min(
                100,
                Math.round(p.depenses / p.budgetActuel * 100)
              );
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
                  className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                  
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-4">
                      <div className="flex items-center gap-3">
                        <h3 className="font-montserrat font-bold text-base text-globus-blue-dark">
                          {p.name}
                        </h3>
                        <span
                        className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${p.status === 'En cours' ? 'bg-blue-100 text-blue-700' : 'bg-green-100 text-green-700'}`}>
                        
                          {p.status}
                        </span>
                      </div>
                      <div
                      className={`font-montserrat font-extrabold text-xl ${p.margin >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                      
                        {p.margin >= 0 ? '+' : ''}
                        {p.margin}% marge
                      </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                      <div className="bg-gray-50 rounded-lg p-2">
                        <p className="text-[10px] text-globus-gray font-opensans">
                          Budget Initial
                        </p>
                        <p className="font-montserrat font-bold text-sm text-globus-blue-dark">
                          {fmt(p.budgetInit)}
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2">
                        <p className="text-[10px] text-globus-gray font-opensans">
                          Budget Actuel
                        </p>
                        <p className="font-montserrat font-bold text-sm text-globus-blue-dark">
                          {fmt(p.budgetActuel)}
                        </p>
                      </div>
                      <div className="bg-gray-50 rounded-lg p-2">
                        <p className="text-[10px] text-globus-gray font-opensans">
                          Dépenses Réelles
                        </p>
                        <p
                        className={`font-montserrat font-bold text-sm ${p.depenses > p.budgetActuel ? 'text-red-600' : 'text-globus-blue-dark'}`}>
                        
                          {fmt(p.depenses)}
                        </p>
                      </div>
                    </div>

                    <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden mb-3">
                      <div
                      className={`h-full rounded-full ${pct > 100 ? 'bg-red-500' : pct > 85 ? 'bg-orange-500' : 'bg-green-500'}`}
                      style={{
                        width: `${Math.min(pct, 100)}%`
                      }}>
                    </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs font-opensans">
                      <div className="flex justify-between bg-orange-50 rounded px-2 py-1">
                        <span className="text-gray-600">Matériaux</span>
                        <span className="font-semibold text-gray-800">
                          {fmt(p.mat)}
                        </span>
                      </div>
                      <div className="flex justify-between bg-blue-50 rounded px-2 py-1">
                        <span className="text-gray-600">Main d'œuvre</span>
                        <span className="font-semibold text-gray-800">
                          {fmt(p.mo)}
                        </span>
                      </div>
                      <div className="flex justify-between bg-purple-50 rounded px-2 py-1">
                        <span className="text-gray-600">Sous-trait.</span>
                        <span className="font-semibold text-gray-800">
                          {fmt(p.st)}
                        </span>
                      </div>
                      <div className="flex justify-between bg-green-50 rounded px-2 py-1">
                        <span className="text-gray-600">Logistique</span>
                        <span className="font-semibold text-gray-800">
                          {fmt(p.log)}
                        </span>
                      </div>
                    </div>
                  </motion.div>);

            })}
            </div>
          </motion.div>
        }

        {/* TRÉSORERIE */}
        {activeTab === 'tresorerie' &&
        <motion.div
          key="tres"
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
          
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                <p className="text-xs text-globus-gray font-opensans mb-1">
                  Trésorerie Actuelle
                </p>
                <p className="font-montserrat font-extrabold text-2xl text-globus-blue-dark">
                  {fmt(150000000)}
                </p>
                <p className="text-xs text-green-600 font-semibold mt-1">
                  FCFA
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                <p className="text-xs text-globus-gray font-opensans mb-1">
                  Charges Fixes / Mois
                </p>
                <p className="font-montserrat font-extrabold text-2xl text-red-600">
                  {fmt(12000000)}
                </p>
                <p className="text-xs text-globus-gray font-opensans mt-1">
                  FCFA
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
                <p className="text-xs text-globus-gray font-opensans mb-1">
                  Créances Clients
                </p>
                <p className="font-montserrat font-extrabold text-2xl text-globus-orange">
                  {fmt(45000000)}
                </p>
                <p className="text-xs text-globus-gray font-opensans mt-1">
                  FCFA
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5">
              <h3 className="font-montserrat font-bold text-base text-globus-blue-dark mb-4">
                Flux de Trésorerie (6 derniers mois, en millions FCFA)
              </h3>
              <div className="h-56">
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart
                  data={cashFlowData}
                  margin={{
                    top: 10,
                    right: 10,
                    left: 0,
                    bottom: 0
                  }}>
                  
                    <defs>
                      <linearGradient id="gEntrees" x1="0" y1="0" x2="0" y2="1">
                        <stop
                        offset="5%"
                        stopColor="#10B981"
                        stopOpacity={0.2} />
                      
                        <stop
                        offset="95%"
                        stopColor="#10B981"
                        stopOpacity={0} />
                      
                      </linearGradient>
                      <linearGradient id="gSorties" x1="0" y1="0" x2="0" y2="1">
                        <stop
                        offset="5%"
                        stopColor="#EF4444"
                        stopOpacity={0.2} />
                      
                        <stop
                        offset="95%"
                        stopColor="#EF4444"
                        stopOpacity={0} />
                      
                      </linearGradient>
                    </defs>
                    <CartesianGrid
                    strokeDasharray="3 3"
                    vertical={false}
                    stroke="#f3f4f6" />
                  
                    <XAxis
                    dataKey="month"
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontSize: 11,
                      fill: '#6b7280'
                    }} />
                  
                    <YAxis
                    axisLine={false}
                    tickLine={false}
                    tick={{
                      fontSize: 11,
                      fill: '#6b7280'
                    }}
                    tickFormatter={(v) => `${v}M`} />
                  
                    <Tooltip
                    contentStyle={{
                      borderRadius: '8px',
                      border: 'none',
                      boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)',
                      fontSize: '12px'
                    }}
                    formatter={(v: number) => [`${v}M FCFA`, '']} />
                  
                    <Area
                    type="monotone"
                    dataKey="entrees"
                    name="Entrées"
                    stroke="#10B981"
                    strokeWidth={2}
                    fill="url(#gEntrees)" />
                  
                    <Area
                    type="monotone"
                    dataKey="sorties"
                    name="Sorties"
                    stroke="#EF4444"
                    strokeWidth={2}
                    fill="url(#gSorties)" />
                  
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-montserrat font-bold text-base text-globus-blue-dark">
                  Charges Fixes Récurrentes
                </h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark">
                        Libellé
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark">
                        Montant
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark">
                        Fréquence
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-opensans text-sm">
                    {charges.map((c, i) =>
                  <tr key={i} className="border-b border-gray-100">
                        <td className="p-3 text-gray-800">{c.label}</td>
                        <td className="p-3 font-mono text-xs font-semibold text-gray-800">
                          {fmt(c.montant)} FCFA
                        </td>
                        <td className="p-3 text-globus-gray">{c.freq}</td>
                      </tr>
                  )}
                  </tbody>
                  <tfoot>
                    <tr className="bg-gray-50">
                      <td className="p-3 font-montserrat font-bold text-sm text-globus-blue-dark">
                        TOTAL
                      </td>
                      <td className="p-3 font-montserrat font-bold text-sm text-globus-blue-dark">
                        {fmt(charges.reduce((s, c) => s + c.montant, 0))} FCFA
                      </td>
                      <td></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </motion.div>
        }

        {/* CAISSE */}
        {activeTab === 'caisse' &&
        <motion.div
          key="caisse"
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
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 flex-1 sm:flex-none">
                <p className="text-xs text-globus-gray font-opensans mb-1">
                  Solde Caisse (Petty Cash)
                </p>
                <p className="font-montserrat font-extrabold text-3xl text-globus-blue-dark">
                  {fmt(850000)}{' '}
                  <span className="text-base font-bold text-globus-gray">
                    FCFA
                  </span>
                </p>
              </div>
              <button
              onClick={() => setShowCaisseForm(!showCaisseForm)}
              className="bg-globus-orange hover:bg-globus-orange-hover text-white font-montserrat font-bold py-2 px-4 rounded-lg text-sm flex items-center gap-2 transition-colors shadow-sm">
              
                <PlusIcon className="w-4 h-4" /> Nouvelle Dépense
              </button>
            </div>

            <AnimatePresence>
              {showCaisseForm &&
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
              
                  <div className="bg-white rounded-xl shadow-md border-2 border-globus-orange/20 p-5 mb-2">
                    <h3 className="font-montserrat font-bold text-base text-globus-blue-dark mb-4">
                      Enregistrer une dépense
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                      <div>
                        <label className="block text-xs font-semibold text-globus-blue-dark mb-1 font-montserrat">
                          Motif
                        </label>
                        <input
                      type="text"
                      placeholder="Ex: Taxi chantier"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-globus-orange" />
                    
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-globus-blue-dark mb-1 font-montserrat">
                          Montant (FCFA)
                        </label>
                        <input
                      type="number"
                      placeholder="15000"
                      className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-globus-orange" />
                    
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-globus-blue-dark mb-1 font-montserrat">
                          Catégorie
                        </label>
                        <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-globus-orange">
                          <option>Transport</option>
                          <option>Matériaux</option>
                          <option>Restauration</option>
                          <option>Bureau</option>
                          <option>Divers</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-xs font-semibold text-globus-blue-dark mb-1 font-montserrat">
                          Chantier
                        </label>
                        <select className="w-full bg-gray-50 border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-globus-orange">
                          <option>Villa Bonapriso</option>
                          <option>Immeuble Akwa</option>
                          <option>Résidence Bonanjo</option>
                          <option>Aucun</option>
                        </select>
                      </div>
                    </div>
                    <div className="mb-4">
                      <label className="block text-xs font-semibold text-globus-blue-dark mb-1 font-montserrat">
                        Photo du reçu
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-4 text-center cursor-pointer hover:bg-gray-50 transition-colors">
                        <UploadCloudIcon className="w-6 h-6 text-gray-400 mx-auto mb-1" />
                        <p className="text-xs text-globus-gray">
                          Cliquez ou glissez la photo
                        </p>
                      </div>
                    </div>
                    <div className="flex justify-end gap-3">
                      <button
                    onClick={() => setShowCaisseForm(false)}
                    className="px-4 py-2 text-sm font-semibold text-globus-gray hover:bg-gray-100 rounded-lg transition-colors">
                    
                        Annuler
                      </button>
                      <button className="bg-globus-blue hover:bg-globus-blue/90 text-white font-montserrat font-bold py-2 px-5 rounded-lg text-sm transition-colors shadow-sm">
                        Enregistrer
                      </button>
                    </div>
                  </div>
                </motion.div>
            }
            </AnimatePresence>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="p-4 border-b border-gray-200">
                <h3 className="font-montserrat font-bold text-base text-globus-blue-dark">
                  Transactions Récentes
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
                        Motif
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark">
                        Montant
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark hidden sm:table-cell">
                        Catégorie
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark hidden md:table-cell">
                        Chantier
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-opensans text-sm">
                    {pettyTransactions.map((t, i) =>
                  <tr
                    key={i}
                    className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    
                        <td className="p-3 font-mono text-xs text-gray-600">
                          {t.date}
                        </td>
                        <td className="p-3 text-gray-800">{t.motif}</td>
                        <td
                      className={`p-3 font-mono text-xs font-bold ${t.montant > 0 ? 'text-green-600' : 'text-red-600'}`}>
                      
                          {t.montant > 0 ? '+' : ''}
                          {fmt(t.montant)} FCFA
                        </td>
                        <td className="p-3 text-globus-gray hidden sm:table-cell">
                          {t.cat}
                        </td>
                        <td className="p-3 text-globus-gray hidden md:table-cell">
                          {t.site}
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