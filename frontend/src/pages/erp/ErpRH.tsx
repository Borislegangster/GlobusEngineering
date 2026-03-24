import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  UsersIcon,
  HardHatIcon,
  ClockIcon,
  BanknoteIcon,
  SearchIcon,
  PlusIcon,
  QrCodeIcon,
  StarIcon,
  DownloadIcon,
  PhoneIcon,
  FilterIcon } from
'lucide-react';
const tabs = [
{
  id: 'employes',
  label: 'Employés',
  icon: UsersIcon
},
{
  id: 'ouvriers',
  label: 'Ouvriers Temporaires',
  icon: HardHatIcon
},
{
  id: 'pointage',
  label: 'Pointage',
  icon: ClockIcon
},
{
  id: 'paie',
  label: 'Paie',
  icon: BanknoteIcon
}];

const employees = [
{
  initials: 'PM',
  name: 'Paul Mbarga',
  poste: 'Ingénieur Chef de Projet',
  dept: 'Technique',
  phone: '+237 699 112 233',
  status: 'Actif'
},
{
  initials: 'CF',
  name: 'Claire Fotso',
  poste: 'Architecte Senior',
  dept: "Bureau d'Études",
  phone: '+237 677 445 566',
  status: 'Actif'
},
{
  initials: 'JN',
  name: 'Jacques Nkoulou',
  poste: 'Comptable',
  dept: 'Finance',
  phone: '+237 655 778 899',
  status: 'Actif'
},
{
  initials: 'AM',
  name: 'Alain Messi',
  poste: 'Logisticien',
  dept: 'Logistique',
  phone: '+237 690 334 455',
  status: 'En congé'
},
{
  initials: 'SE',
  name: 'Sophie Ekambi',
  poste: 'Assistante RH',
  dept: 'Administration',
  phone: '+237 677 223 344',
  status: 'Actif'
}];

const workers = [
{
  initials: 'EN',
  name: 'Emmanuel Nganou',
  specialty: 'Maçon',
  phone: '+237 670 111 222',
  rating: 5,
  status: 'En mission'
},
{
  initials: 'JT',
  name: 'Joseph Tchinda',
  specialty: 'Ferrailleur',
  phone: '+237 655 333 444',
  rating: 4,
  status: 'Disponible'
},
{
  initials: 'PN',
  name: 'Pierre Ndjock',
  specialty: 'Coffreur',
  phone: '+237 690 555 666',
  rating: 4,
  status: 'En mission'
},
{
  initials: 'SM',
  name: 'Samuel Mbede',
  specialty: 'Peintre',
  phone: '+237 677 777 888',
  rating: 3,
  status: 'Disponible'
},
{
  initials: 'DK',
  name: 'David Kamga',
  specialty: 'Électricien',
  phone: '+237 699 999 000',
  rating: 5,
  status: 'En mission'
},
{
  initials: 'RO',
  name: 'Robert Onana',
  specialty: 'Plombier',
  phone: '+237 655 222 111',
  rating: 4,
  status: 'Disponible'
}];

const timesheetData = [
{
  name: 'Emmanuel Nganou',
  arrival: '06:30',
  departure: '17:00',
  hours: '10h30',
  site: 'Villa Bonapriso',
  status: 'Présent'
},
{
  name: 'Joseph Tchinda',
  arrival: '06:45',
  departure: '17:00',
  hours: '10h15',
  site: 'Villa Bonapriso',
  status: 'Présent'
},
{
  name: 'Pierre Ndjock',
  arrival: '07:15',
  departure: '16:30',
  hours: '9h15',
  site: 'Immeuble Akwa',
  status: 'Retard'
},
{
  name: 'David Kamga',
  arrival: '06:30',
  departure: '17:30',
  hours: '11h00',
  site: 'Immeuble Akwa',
  status: 'Présent'
},
{
  name: 'Samuel Mbede',
  arrival: '—',
  departure: '—',
  hours: '—',
  site: 'Villa Bonapriso',
  status: 'Absent'
},
{
  name: 'Robert Onana',
  arrival: '07:00',
  departure: '16:00',
  hours: '9h00',
  site: 'Résidence Bonanjo',
  status: 'Présent'
},
{
  name: 'Alain Toko',
  arrival: '06:30',
  departure: '17:00',
  hours: '10h30',
  site: 'Résidence Bonanjo',
  status: 'Présent'
},
{
  name: 'Martin Essomba',
  arrival: '07:30',
  departure: '16:30',
  hours: '9h00',
  site: 'Bureau Deïdo',
  status: 'Retard'
}];

const payrollData = [
{
  name: 'Paul Mbarga',
  type: 'Fixe',
  days: 22,
  base: 850000,
  primes: 150000,
  avances: 0,
  net: 1000000
},
{
  name: 'Claire Fotso',
  type: 'Fixe',
  days: 22,
  base: 750000,
  primes: 100000,
  avances: 50000,
  net: 800000
},
{
  name: 'Emmanuel Nganou',
  type: 'Temporaire',
  days: 26,
  base: 5000,
  primes: 0,
  avances: 20000,
  net: 110000
},
{
  name: 'Joseph Tchinda',
  type: 'Temporaire',
  days: 24,
  base: 5000,
  primes: 0,
  avances: 0,
  net: 120000
},
{
  name: 'Jacques Nkoulou',
  type: 'Fixe',
  days: 22,
  base: 500000,
  primes: 50000,
  avances: 100000,
  net: 450000
}];

const formatCurrency = (v: number) =>
new Intl.NumberFormat('fr-FR', {
  maximumFractionDigits: 0
}).format(v);
const specColors: Record<string, string> = {
  Maçon: 'bg-orange-100 text-orange-700',
  Ferrailleur: 'bg-blue-100 text-blue-700',
  Coffreur: 'bg-purple-100 text-purple-700',
  Peintre: 'bg-pink-100 text-pink-700',
  Électricien: 'bg-yellow-100 text-yellow-700',
  Plombier: 'bg-cyan-100 text-cyan-700'
};
const statusColor = (s: string) => {
  if (s === 'Actif' || s === 'Présent') return 'bg-green-100 text-green-700';
  if (s === 'En congé' || s === 'Retard') return 'bg-yellow-100 text-yellow-700';
  if (s === 'Absent') return 'bg-red-100 text-red-700';
  if (s === 'En mission') return 'bg-blue-100 text-blue-700';
  if (s === 'Disponible') return 'bg-green-100 text-green-700';
  return 'bg-gray-100 text-gray-700';
};
export function ErpRH() {
  const [activeTab, setActiveTab] = useState('employes');
  return (
    <div className="max-w-[1400px] mx-auto space-y-6">
      {/* Tabs */}
      <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-1.5 flex flex-wrap gap-1.5">
        {tabs.map((tab) => {
          const Icon = tab.icon;
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 min-w-[130px] flex items-center justify-center gap-2 py-2.5 px-3 rounded-lg font-montserrat font-bold text-xs transition-all ${isActive ? 'bg-globus-blue-dark text-white shadow-md' : 'text-globus-gray hover:bg-gray-50'}`}>
              
              <Icon className="w-4 h-4" />
              <span className="hidden sm:inline">{tab.label}</span>
            </button>);

        })}
      </div>

      <AnimatePresence mode="wait">
        {/* EMPLOYÉS */}
        {activeTab === 'employes' &&
        <motion.div
          key="emp"
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
                Gestion des Employés Fixes
              </h2>
              <button className="bg-globus-orange hover:bg-globus-orange-hover text-white font-montserrat font-bold py-2 px-4 rounded-lg text-sm flex items-center gap-2 transition-colors shadow-sm">
                <PlusIcon className="w-4 h-4" /> Nouvel Employé
              </button>
            </div>

            <div className="flex flex-col sm:flex-row gap-3">
              <div className="relative flex-1">
                <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
                <input
                type="text"
                placeholder="Rechercher un employé..."
                className="w-full bg-white border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm focus:outline-none focus:border-globus-blue" />
              
              </div>
              <select className="bg-white border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-globus-blue">
                <option>Tous les départements</option>
                <option>Technique</option>
                <option>Bureau d'Études</option>
                <option>Finance</option>
                <option>Logistique</option>
                <option>Administration</option>
              </select>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark">
                        Employé
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark hidden md:table-cell">
                        Poste
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark hidden lg:table-cell">
                        Département
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark hidden sm:table-cell">
                        Téléphone
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark">
                        Statut
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark text-right">
                        Actions
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-opensans text-sm">
                    {employees.map((emp, i) =>
                  <tr
                    key={i}
                    className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    
                        <td className="p-3">
                          <div className="flex items-center gap-3">
                            <div className="w-8 h-8 rounded-lg bg-globus-blue-dark text-white flex items-center justify-center font-montserrat font-bold text-xs shrink-0">
                              {emp.initials}
                            </div>
                            <div>
                              <p className="font-semibold text-gray-800">
                                {emp.name}
                              </p>
                              <p className="text-xs text-globus-gray md:hidden">
                                {emp.poste}
                              </p>
                            </div>
                          </div>
                        </td>
                        <td className="p-3 text-gray-600 hidden md:table-cell">
                          {emp.poste}
                        </td>
                        <td className="p-3 text-gray-600 hidden lg:table-cell">
                          {emp.dept}
                        </td>
                        <td className="p-3 text-gray-600 hidden sm:table-cell font-mono text-xs">
                          {emp.phone}
                        </td>
                        <td className="p-3">
                          <span
                        className={`px-2 py-1 rounded-full text-[10px] font-bold ${statusColor(emp.status)}`}>
                        
                            {emp.status}
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

        {/* OUVRIERS */}
        {activeTab === 'ouvriers' &&
        <motion.div
          key="ouv"
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
                Base de Données Ouvriers
              </h2>
              <button className="bg-globus-orange hover:bg-globus-orange-hover text-white font-montserrat font-bold py-2 px-4 rounded-lg text-sm flex items-center gap-2 transition-colors shadow-sm">
                <PlusIcon className="w-4 h-4" /> Enregistrer Ouvrier
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {workers.map((w, i) =>
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
              className="bg-white rounded-xl shadow-sm border border-gray-200 p-4">
              
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-globus-blue-dark text-white flex items-center justify-center font-montserrat font-bold text-sm">
                        {w.initials}
                      </div>
                      <div>
                        <p className="font-montserrat font-bold text-sm text-globus-blue-dark">
                          {w.name}
                        </p>
                        <span
                      className={`inline-block mt-0.5 px-2 py-0.5 rounded text-[10px] font-bold ${specColors[w.specialty] || 'bg-gray-100 text-gray-700'}`}>
                      
                          {w.specialty}
                        </span>
                      </div>
                    </div>
                    <span
                  className={`px-2 py-0.5 rounded-full text-[10px] font-bold ${statusColor(w.status)}`}>
                  
                      {w.status}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((s) =>
                <StarIcon
                  key={s}
                  className={`w-3.5 h-3.5 ${s <= w.rating ? 'text-globus-orange fill-globus-orange' : 'text-gray-300'}`} />

                )}
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="flex items-center gap-1 text-xs text-globus-gray">
                      <PhoneIcon className="w-3 h-3" /> {w.phone}
                    </span>
                    <button className="flex items-center gap-1 text-xs font-semibold text-globus-blue hover:underline">
                      <QrCodeIcon className="w-3.5 h-3.5" /> QR Code
                    </button>
                  </div>
                </motion.div>
            )}
            </div>
          </motion.div>
        }

        {/* POINTAGE */}
        {activeTab === 'pointage' &&
        <motion.div
          key="point"
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
              <div>
                <h2 className="font-montserrat font-bold text-xl text-globus-blue-dark">
                  Pointage Numérique
                </h2>
                <p className="font-opensans text-sm text-globus-gray">
                  Lundi 23 Mars 2026
                </p>
              </div>
              <button className="bg-globus-blue hover:bg-globus-blue/90 text-white font-montserrat font-bold py-2.5 px-5 rounded-lg text-sm flex items-center gap-2 transition-colors shadow-md">
                <QrCodeIcon className="w-5 h-5" /> Scanner QR Code
              </button>
            </div>

            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center">
                <p className="font-montserrat font-extrabold text-2xl text-green-600">
                  45
                </p>
                <p className="text-xs text-globus-gray font-opensans">
                  Présents
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center">
                <p className="font-montserrat font-extrabold text-2xl text-yellow-600">
                  3
                </p>
                <p className="text-xs text-globus-gray font-opensans">
                  Retards
                </p>
              </div>
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 p-4 text-center">
                <p className="font-montserrat font-extrabold text-2xl text-red-600">
                  8
                </p>
                <p className="text-xs text-globus-gray font-opensans">
                  Absents
                </p>
              </div>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark">
                        Ouvrier
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark">
                        Arrivée
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark">
                        Départ
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark hidden sm:table-cell">
                        Heures
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark hidden md:table-cell">
                        Chantier
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark">
                        Statut
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-opensans text-sm">
                    {timesheetData.map((row, i) =>
                  <tr
                    key={i}
                    className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    
                        <td className="p-3 font-semibold text-gray-800">
                          {row.name}
                        </td>
                        <td className="p-3 font-mono text-xs text-gray-600">
                          {row.arrival}
                        </td>
                        <td className="p-3 font-mono text-xs text-gray-600">
                          {row.departure}
                        </td>
                        <td className="p-3 font-mono text-xs text-gray-600 hidden sm:table-cell">
                          {row.hours}
                        </td>
                        <td className="p-3 text-gray-600 hidden md:table-cell">
                          {row.site}
                        </td>
                        <td className="p-3">
                          <span
                        className={`px-2 py-1 rounded-full text-[10px] font-bold ${statusColor(row.status)}`}>
                        
                            {row.status}
                          </span>
                        </td>
                      </tr>
                  )}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>
        }

        {/* PAIE */}
        {activeTab === 'paie' &&
        <motion.div
          key="paie"
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
                Génération de la Paie — Mars 2026
              </h2>
              <button className="bg-globus-orange hover:bg-globus-orange-hover text-white font-montserrat font-bold py-2 px-4 rounded-lg text-sm flex items-center gap-2 transition-colors shadow-sm">
                <DownloadIcon className="w-4 h-4" /> Générer toutes les fiches
              </button>
            </div>

            <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left">
                  <thead>
                    <tr className="bg-gray-50 border-b border-gray-200">
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark">
                        Employé
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark">
                        Type
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark hidden sm:table-cell">
                        Jours
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark hidden md:table-cell">
                        Base
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark hidden md:table-cell">
                        Primes
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark hidden lg:table-cell">
                        Avances
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark">
                        Net à Payer
                      </th>
                      <th className="p-3 font-montserrat font-semibold text-xs text-globus-blue-dark text-right">
                        Action
                      </th>
                    </tr>
                  </thead>
                  <tbody className="font-opensans text-sm">
                    {payrollData.map((row, i) =>
                  <tr
                    key={i}
                    className="border-b border-gray-100 hover:bg-gray-50/50 transition-colors">
                    
                        <td className="p-3 font-semibold text-gray-800">
                          {row.name}
                        </td>
                        <td className="p-3">
                          <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold ${row.type === 'Fixe' ? 'bg-blue-100 text-blue-700' : 'bg-orange-100 text-orange-700'}`}>
                        
                            {row.type}
                          </span>
                        </td>
                        <td className="p-3 text-gray-600 hidden sm:table-cell">
                          {row.days}
                        </td>
                        <td className="p-3 text-gray-600 hidden md:table-cell font-mono text-xs">
                          {formatCurrency(row.base)}
                        </td>
                        <td className="p-3 text-gray-600 hidden md:table-cell font-mono text-xs">
                          {formatCurrency(row.primes)}
                        </td>
                        <td className="p-3 text-red-600 hidden lg:table-cell font-mono text-xs">
                          {row.avances > 0 ?
                      `-${formatCurrency(row.avances)}` :
                      '—'}
                        </td>
                        <td className="p-3 font-montserrat font-bold text-globus-blue-dark">
                          {formatCurrency(row.net)}
                        </td>
                        <td className="p-3 text-right">
                          <button className="text-xs font-semibold text-globus-blue hover:underline flex items-center gap-1 ml-auto">
                            <DownloadIcon className="w-3.5 h-3.5" /> PDF
                          </button>
                        </td>
                      </tr>
                  )}
                  </tbody>
                  <tfoot>
                    <tr className="bg-globus-blue-dark text-white">
                      <td
                      colSpan={6}
                      className="p-3 font-montserrat font-bold text-sm hidden lg:table-cell">
                      
                        TOTAL
                      </td>
                      <td
                      colSpan={6}
                      className="p-3 font-montserrat font-bold text-sm lg:hidden">
                      
                        TOTAL
                      </td>
                      <td className="p-3 font-montserrat font-bold text-sm hidden lg:table-cell">
                        {formatCurrency(
                        payrollData.reduce((s, r) => s + r.net, 0)
                      )}{' '}
                        FCFA
                      </td>
                      <td className="p-3 lg:hidden font-montserrat font-bold text-sm">
                        {formatCurrency(
                        payrollData.reduce((s, r) => s + r.net, 0)
                      )}{' '}
                        FCFA
                      </td>
                      <td className="p-3"></td>
                    </tr>
                  </tfoot>
                </table>
              </div>
            </div>
          </motion.div>
        }
      </AnimatePresence>
    </div>);

}