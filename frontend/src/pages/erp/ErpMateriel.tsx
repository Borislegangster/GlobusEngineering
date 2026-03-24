import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  BoxIcon,
  ArrowRightLeftIcon,
  WrenchIcon,
  PlusIcon,
  QrCodeIcon,
  TruckIcon,
  MapPinIcon,
  CalendarIcon } from
'lucide-react';
const equipment = [
{
  id: 'MAT-001',
  name: 'Bétonnière 350L',
  site: 'Villa Bonapriso',
  state: 'Bon',
  type: 'machine'
},
{
  id: 'MAT-002',
  name: 'Grue à tour 40m',
  site: 'Immeuble Akwa',
  state: 'Bon',
  type: 'machine'
},
{
  id: 'MAT-003',
  name: 'Compacteur vibrant',
  site: 'Dépôt central',
  state: 'En maintenance',
  type: 'machine'
},
{
  id: 'MAT-004',
  name: 'Groupe électrogène 50KVA',
  site: 'Résidence Bonanjo',
  state: 'Bon',
  type: 'machine'
},
{
  id: 'VEH-001',
  name: 'Toyota Hilux',
  site: '45 230 km',
  state: 'Bon',
  type: 'vehicle'
},
{
  id: 'VEH-002',
  name: 'Camion Benne 10T',
  site: '89 100 km',
  state: 'Pneus à changer',
  type: 'vehicle'
}];

const assignments = [
{
  equip: 'Bétonnière 350L',
  site: 'Villa Bonapriso',
  since: '01/02/2024',
  resp: 'Paul Mbarga'
},
{
  equip: 'Grue à tour 40m',
  site: 'Immeuble Akwa',
  since: '15/01/2024',
  resp: 'Chef Tabi'
},
{
  equip: 'Groupe électrogène 50KVA',
  site: 'Résidence Bonanjo',
  since: '01/03/2024',
  resp: 'Alain Messi'
},
{
  equip: 'Toyota Hilux',
  site: 'Logistique générale',
  since: '01/01/2024',
  resp: 'Alain Messi'
},
{
  equip: 'Camion Benne 10T',
  site: 'Villa Bonapriso',
  since: '10/02/2024',
  resp: 'Chauffeur Ndjock'
}];

const maintenanceUpcoming = [
{
  equip: 'MAT-003 Compacteur',
  task: 'Révision moteur',
  date: '25/03/2026',
  status: 'En cours'
},
{
  equip: 'VEH-002 Camion Benne',
  task: 'Changement pneus',
  date: '28/03/2026',
  status: 'Planifié'
},
{
  equip: 'MAT-002 Grue',
  task: 'Contrôle annuel',
  date: '15/04/2026',
  status: 'Planifié'
},
{
  equip: 'VEH-001 Hilux',
  task: 'Vidange 50 000 km',
  date: '01/05/2026',
  status: 'Planifié'
}];

const maintenanceHistory = [
{
  equip: 'MAT-001 Bétonnière',
  task: 'Changement courroie',
  date: '10/02/2026',
  cost: 150000
},
{
  equip: 'VEH-001 Hilux',
  task: 'Vidange + filtres',
  date: '15/01/2026',
  cost: 85000
},
{
  equip: 'MAT-002 Grue',
  task: 'Graissage câbles',
  date: '20/12/2025',
  cost: 200000
},
{
  equip: 'VEH-002 Camion',
  task: 'Freins avant',
  date: '05/12/2025',
  cost: 320000
},
{
  equip: 'MAT-004 Groupe',
  task: 'Révision générale',
  date: '01/11/2025',
  cost: 450000
}];

export function ErpMateriel() {
  const [activeTab, setActiveTab] = useState('inventaire');
  const tabs = [
  {
    id: 'inventaire',
    label: 'Inventaire',
    icon: BoxIcon
  },
  {
    id: 'affectations',
    label: 'Affectations',
    icon: ArrowRightLeftIcon
  },
  {
    id: 'maintenance',
    label: 'Maintenance',
    icon: WrenchIcon
  }];

  const fmt = (v: number) => new Intl.NumberFormat('fr-FR').format(v) + ' FCFA';
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

      {activeTab === 'inventaire' &&
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
              Parc Matériel
            </h2>
            <button className="bg-globus-orange hover:bg-globus-orange-hover text-white font-montserrat font-bold py-2 px-5 rounded-lg transition-colors shadow-sm flex items-center gap-2 text-sm">
              <PlusIcon className="w-4 h-4" /> Ajouter Équipement
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {equipment.map((eq, idx) =>
          <motion.div
            key={eq.id}
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
                  <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center ${eq.type === 'vehicle' ? 'bg-blue-100 text-blue-600' : 'bg-globus-orange/10 text-globus-orange'}`}>
                
                    {eq.type === 'vehicle' ?
                <TruckIcon className="w-6 h-6" /> :

                <BoxIcon className="w-6 h-6" />
                }
                  </div>
                  <span className="font-mono text-xs text-gray-400 bg-gray-100 px-2 py-1 rounded">
                    {eq.id}
                  </span>
                </div>
                <h3 className="font-montserrat font-bold text-globus-blue-dark mb-2">
                  {eq.name}
                </h3>
                <p className="text-xs text-globus-gray font-opensans flex items-center gap-1 mb-3">
                  <MapPinIcon className="w-3 h-3" /> {eq.site}
                </p>
                <div className="flex items-center justify-between">
                  <span
                className={`px-2.5 py-1 rounded-full text-xs font-bold font-montserrat ${eq.state === 'Bon' ? 'bg-green-100 text-green-700' : 'bg-orange-100 text-orange-700'}`}>
                
                    {eq.state}
                  </span>
                  <button className="text-xs text-globus-blue hover:underline font-semibold flex items-center gap-1">
                    <QrCodeIcon className="w-3 h-3" /> QR Code
                  </button>
                </div>
              </motion.div>
          )}
          </div>
        </motion.div>
      }

      {activeTab === 'affectations' &&
      <motion.div
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}>
        
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h2 className="font-montserrat font-bold text-xl text-globus-blue-dark">
                Affectations en Cours
              </h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-globus-light border-b border-gray-200">
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Équipement
                    </th>
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Affecté à
                    </th>
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Depuis
                    </th>
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Responsable
                    </th>
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark text-right">
                      Action
                    </th>
                  </tr>
                </thead>
                <tbody className="font-opensans text-sm">
                  {assignments.map((a, i) =>
                <tr
                  key={i}
                  className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  
                      <td className="p-4 font-semibold text-globus-blue-dark">
                        {a.equip}
                      </td>
                      <td className="p-4 text-globus-gray">{a.site}</td>
                      <td className="p-4 text-globus-gray">{a.since}</td>
                      <td className="p-4 text-globus-gray">{a.resp}</td>
                      <td className="p-4 text-right">
                        <button className="text-xs bg-globus-blue/10 text-globus-blue hover:bg-globus-blue hover:text-white px-3 py-1.5 rounded-lg font-bold transition-colors">
                          Transférer
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

      {activeTab === 'maintenance' &&
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
        
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <h2 className="font-montserrat font-bold text-xl text-globus-blue-dark mb-6">
              Maintenance Préventive — À Venir
            </h2>
            <div className="space-y-4">
              {maintenanceUpcoming.map((m, i) =>
            <div
              key={i}
              className={`flex items-center justify-between p-4 rounded-xl border ${m.status === 'En cours' ? 'border-orange-200 bg-orange-50' : 'border-gray-100 bg-white'}`}>
              
                  <div className="flex items-center gap-4">
                    <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${m.status === 'En cours' ? 'bg-orange-100 text-orange-600' : 'bg-blue-100 text-blue-600'}`}>
                  
                      <WrenchIcon className="w-5 h-5" />
                    </div>
                    <div>
                      <p className="font-montserrat font-bold text-sm text-globus-blue-dark">
                        {m.equip}
                      </p>
                      <p className="text-xs text-globus-gray font-opensans">
                        {m.task}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-xs text-globus-gray font-opensans flex items-center gap-1">
                      <CalendarIcon className="w-3 h-3" />
                      {m.date}
                    </span>
                    <span
                  className={`px-2.5 py-1 rounded-full text-xs font-bold font-montserrat ${m.status === 'En cours' ? 'bg-orange-100 text-orange-700' : 'bg-blue-100 text-blue-700'}`}>
                  
                      {m.status}
                    </span>
                  </div>
                </div>
            )}
            </div>
          </div>

          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="p-6 border-b border-gray-100">
              <h3 className="font-montserrat font-bold text-lg text-globus-blue-dark">
                Historique des Interventions
              </h3>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="bg-globus-light border-b border-gray-200">
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Équipement
                    </th>
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Intervention
                    </th>
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Date
                    </th>
                    <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                      Coût
                    </th>
                  </tr>
                </thead>
                <tbody className="font-opensans text-sm">
                  {maintenanceHistory.map((m, i) =>
                <tr
                  key={i}
                  className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                  
                      <td className="p-4 font-semibold text-globus-blue-dark">
                        {m.equip}
                      </td>
                      <td className="p-4 text-globus-gray">{m.task}</td>
                      <td className="p-4 text-globus-gray">{m.date}</td>
                      <td className="p-4 font-bold text-globus-blue-dark">
                        {fmt(m.cost)}
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