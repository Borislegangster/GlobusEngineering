import React from 'react';
import { motion } from 'framer-motion';
import {
  BanknoteIcon,
  FileTextIcon,
  ReceiptIcon,
  BadgeCheckIcon,
  PackageOpenIcon,
  MapPinIcon,
  DownloadIcon,
  EyeIcon,
  FileOutputIcon } from
'lucide-react';
const templates = [
{
  icon: BanknoteIcon,
  name: 'Fiche de Paie',
  desc: 'Bulletin de salaire mensuel',
  count: 156,
  color: 'bg-green-100 text-green-600'
},
{
  icon: FileTextIcon,
  name: 'Contrat de Travail',
  desc: 'CDI, CDD, Temporaire',
  count: 89,
  color: 'bg-blue-100 text-blue-600'
},
{
  icon: ReceiptIcon,
  name: 'Note de Frais',
  desc: 'Remboursement de dépenses',
  count: 234,
  color: 'bg-orange-100 text-orange-600'
},
{
  icon: BadgeCheckIcon,
  name: 'Attestation de Travail',
  desc: "Certificat d'emploi",
  count: 45,
  color: 'bg-purple-100 text-purple-600'
},
{
  icon: PackageOpenIcon,
  name: 'Bon de Sortie Matériel',
  desc: 'Autorisation de sortie',
  count: 178,
  color: 'bg-yellow-100 text-yellow-700'
},
{
  icon: MapPinIcon,
  name: 'Ordre de Mission',
  desc: 'Déplacement professionnel',
  count: 67,
  color: 'bg-cyan-100 text-cyan-600'
}];

const recentDocs = [
{
  name: 'Fiche de paie — Paul Mbarga',
  type: 'Fiche de Paie',
  target: 'Paul Mbarga',
  date: '23/03/2026'
},
{
  name: 'Contrat CDD — Ouvrier #89',
  type: 'Contrat',
  target: 'Moussa Amadou',
  date: '22/03/2026'
},
{
  name: 'Note de frais — Carburant Mars',
  type: 'Note de Frais',
  target: 'Alain Messi',
  date: '21/03/2026'
},
{
  name: 'Bon de sortie — Bétonnière',
  type: 'Bon de Sortie',
  target: 'Villa Bonapriso',
  date: '20/03/2026'
},
{
  name: 'Attestation — Sophie Ekambi',
  type: 'Attestation',
  target: 'Sophie Ekambi',
  date: '19/03/2026'
},
{
  name: 'Ordre de mission — Douala-Yaoundé',
  type: 'Ordre de Mission',
  target: 'Jacques Nkoulou',
  date: '18/03/2026'
}];

export function ErpDocuments() {
  return (
    <div className="max-w-7xl mx-auto space-y-8">
      <motion.div
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}>
        
        <div className="flex items-center gap-3 mb-6">
          <FileOutputIcon className="w-7 h-7 text-globus-blue-dark" />
          <h2 className="font-montserrat font-bold text-2xl text-globus-blue-dark">
            Génération de Documents — Zéro Papier
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {templates.map((t, idx) => {
            const Icon = t.icon;
            return (
              <motion.div
                key={t.name}
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
                
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center ${t.color}`}>
                    
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-xs text-globus-gray font-opensans bg-gray-100 px-2 py-1 rounded">
                    {t.count} générés
                  </span>
                </div>
                <h3 className="font-montserrat font-bold text-globus-blue-dark mb-1">
                  {t.name}
                </h3>
                <p className="text-xs text-globus-gray font-opensans mb-4">
                  {t.desc}
                </p>
                <button className="w-full bg-globus-blue/10 hover:bg-globus-blue hover:text-white text-globus-blue font-montserrat font-bold py-2 rounded-lg transition-colors text-sm">
                  Générer
                </button>
              </motion.div>);

          })}
        </div>
      </motion.div>

      <motion.div
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 0.3
        }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        
        <div className="p-6 border-b border-gray-100">
          <h3 className="font-montserrat font-bold text-xl text-globus-blue-dark">
            Documents Récemment Générés
          </h3>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-globus-light border-b border-gray-200">
                <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                  Document
                </th>
                <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                  Type
                </th>
                <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                  Employé/Projet
                </th>
                <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark">
                  Date
                </th>
                <th className="p-4 font-montserrat font-semibold text-xs text-globus-blue-dark text-right">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="font-opensans text-sm">
              {recentDocs.map((d, i) =>
              <tr
                key={i}
                className="border-b border-gray-50 hover:bg-gray-50 transition-colors">
                
                  <td className="p-4 font-semibold text-globus-blue-dark">
                    {d.name}
                  </td>
                  <td className="p-4">
                    <span className="bg-gray-100 text-globus-gray text-xs font-bold px-2 py-1 rounded">
                      {d.type}
                    </span>
                  </td>
                  <td className="p-4 text-globus-gray">{d.target}</td>
                  <td className="p-4 text-globus-gray">{d.date}</td>
                  <td className="p-4 text-right flex justify-end gap-2">
                    <button className="p-1.5 text-gray-400 hover:text-globus-blue hover:bg-blue-50 rounded transition-colors">
                      <EyeIcon className="w-4 h-4" />
                    </button>
                    <button className="p-1.5 text-gray-400 hover:text-globus-blue hover:bg-blue-50 rounded transition-colors">
                      <DownloadIcon className="w-4 h-4" />
                    </button>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>
    </div>);

}