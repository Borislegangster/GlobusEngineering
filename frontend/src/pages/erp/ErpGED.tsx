import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FolderGit2Icon,
  UploadCloudIcon,
  DownloadIcon,
  HistoryIcon,
  ChevronDownIcon,
  CheckCircle2Icon,
  XCircleIcon,
  FileIcon,
  AlertTriangleIcon } from
'lucide-react';
const projects = ['Villa Bonapriso', 'Immeuble Akwa', 'Résidence Bonanjo'];
const planCategories = [
{
  label: 'Plans Architecturaux',
  plans: [
  {
    name: 'Plan RDC — Architecture',
    version: 'V3',
    status: 'active',
    author: 'Claire Fotso',
    date: '20/03/2026',
    history: [
    {
      v: 'V3',
      date: '20/03/2026',
      author: 'Claire Fotso',
      note: 'Modification escalier',
      status: 'active'
    },
    {
      v: 'V2',
      date: '15/02/2026',
      author: 'Claire Fotso',
      note: 'Ajout terrasse',
      status: 'obsolete'
    },
    {
      v: 'V1',
      date: '10/01/2026',
      author: 'Claire Fotso',
      note: 'Version initiale',
      status: 'obsolete'
    }]

  },
  {
    name: 'Plan R+1 — Architecture',
    version: 'V2',
    status: 'active',
    author: 'Claire Fotso',
    date: '18/03/2026',
    history: [
    {
      v: 'V2',
      date: '18/03/2026',
      author: 'Claire Fotso',
      note: 'Ajout balcon chambre 3',
      status: 'active'
    },
    {
      v: 'V1',
      date: '10/01/2026',
      author: 'Claire Fotso',
      note: 'Version initiale',
      status: 'obsolete'
    }]

  },
  {
    name: 'Plan Toiture',
    version: 'V1',
    status: 'active',
    author: 'Claire Fotso',
    date: '12/01/2026',
    history: [
    {
      v: 'V1',
      date: '12/01/2026',
      author: 'Claire Fotso',
      note: 'Version initiale',
      status: 'active'
    }]

  },
  {
    name: 'Plan Façades',
    version: 'V2',
    status: 'active',
    author: 'Claire Fotso',
    date: '01/03/2026',
    history: [
    {
      v: 'V2',
      date: '01/03/2026',
      author: 'Claire Fotso',
      note: 'Modification revêtement',
      status: 'active'
    },
    {
      v: 'V1',
      date: '15/01/2026',
      author: 'Claire Fotso',
      note: 'Version initiale',
      status: 'obsolete'
    }]

  }]

},
{
  label: 'Plans Structure',
  plans: [
  {
    name: 'Plan Fondations',
    version: 'V2',
    status: 'active',
    author: 'Ing. Mbarga',
    date: '05/02/2026',
    history: [
    {
      v: 'V2',
      date: '05/02/2026',
      author: 'Ing. Mbarga',
      note: 'Renforcement semelles',
      status: 'active'
    },
    {
      v: 'V1',
      date: '15/01/2026',
      author: 'Ing. Mbarga',
      note: 'Version initiale',
      status: 'obsolete'
    }]

  },
  {
    name: 'Plan Dalles & Poteaux',
    version: 'V1',
    status: 'active',
    author: 'Ing. Mbarga',
    date: '20/01/2026',
    history: [
    {
      v: 'V1',
      date: '20/01/2026',
      author: 'Ing. Mbarga',
      note: 'Version initiale',
      status: 'active'
    }]

  },
  {
    name: 'Plan Escalier',
    version: 'V3',
    status: 'active',
    author: 'Ing. Mbarga',
    date: '22/03/2026',
    history: [
    {
      v: 'V3',
      date: '22/03/2026',
      author: 'Ing. Mbarga',
      note: 'Modification hélicoïdal',
      status: 'active'
    },
    {
      v: 'V2',
      date: '10/02/2026',
      author: 'Ing. Mbarga',
      note: 'Ajout palier',
      status: 'obsolete'
    },
    {
      v: 'V1',
      date: '20/01/2026',
      author: 'Ing. Mbarga',
      note: 'Version initiale',
      status: 'obsolete'
    }]

  }]

},
{
  label: 'Plans Électricité',
  plans: [
  {
    name: 'Plan Électrique RDC',
    version: 'V2',
    status: 'active',
    author: 'Bureau Études',
    date: '15/03/2026',
    history: [
    {
      v: 'V2',
      date: '15/03/2026',
      author: 'Bureau Études',
      note: 'Ajout prises cuisine',
      status: 'active'
    },
    {
      v: 'V1',
      date: '01/02/2026',
      author: 'Bureau Études',
      note: 'Version initiale',
      status: 'obsolete'
    }]

  },
  {
    name: 'Plan Électrique R+1',
    version: 'V1',
    status: 'active',
    author: 'Bureau Études',
    date: '01/02/2026',
    history: [
    {
      v: 'V1',
      date: '01/02/2026',
      author: 'Bureau Études',
      note: 'Version initiale',
      status: 'active'
    }]

  }]

},
{
  label: 'Plans Plomberie',
  plans: [
  {
    name: 'Plan Plomberie RDC',
    version: 'V1',
    status: 'active',
    author: 'Bureau Études',
    date: '05/02/2026',
    history: [
    {
      v: 'V1',
      date: '05/02/2026',
      author: 'Bureau Études',
      note: 'Version initiale',
      status: 'active'
    }]

  },
  {
    name: 'Plan Plomberie R+1',
    version: 'V1',
    status: 'active',
    author: 'Bureau Études',
    date: '05/02/2026',
    history: [
    {
      v: 'V1',
      date: '05/02/2026',
      author: 'Bureau Études',
      note: 'Version initiale',
      status: 'active'
    }]

  }]

}];

export function ErpGED() {
  const [activeProject, setActiveProject] = useState(0);
  const [expandedPlan, setExpandedPlan] = useState<string | null>(null);
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <motion.div
        initial={{
          opacity: 0,
          y: 10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        
        <div className="flex items-center gap-3">
          <FolderGit2Icon className="w-7 h-7 text-globus-blue-dark" />
          <h2 className="font-montserrat font-bold text-2xl text-globus-blue-dark">
            GED Technique — Gestion des Plans
          </h2>
        </div>
        <button className="bg-globus-orange hover:bg-globus-orange-hover text-white font-montserrat font-bold py-2 px-5 rounded-lg transition-colors shadow-sm flex items-center gap-2 text-sm shrink-0">
          <UploadCloudIcon className="w-4 h-4" /> Uploader un Plan
        </button>
      </motion.div>

      <div className="flex gap-2 flex-wrap">
        {projects.map((p, i) =>
        <button
          key={p}
          onClick={() => setActiveProject(i)}
          className={`px-4 py-2 rounded-lg font-montserrat font-bold text-sm transition-all ${activeProject === i ? 'bg-globus-blue-dark text-white shadow-md' : 'bg-white text-globus-gray border border-gray-200 hover:border-globus-blue-dark'}`}>
          
            {p}
          </button>
        )}
      </div>

      <div className="space-y-8">
        {planCategories.map((cat, ci) =>
        <motion.div
          key={cat.label}
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
          }}>
          
            <h3 className="font-montserrat font-bold text-lg text-globus-blue-dark mb-4">
              {cat.label}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {cat.plans.map((plan) => {
              const isExpanded = expandedPlan === plan.name;
              return (
                <div
                  key={plan.name}
                  className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow">
                  
                    <div className="h-24 bg-gradient-to-br from-slate-700 to-slate-900 relative flex items-center justify-center">
                      <div
                      className="absolute inset-0 opacity-10"
                      style={{
                        backgroundImage:
                        'linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)',
                        backgroundSize: '20px 20px'
                      }}>
                    </div>
                      <FileIcon className="w-10 h-10 text-white/30" />
                      <div className="absolute top-2 right-2">
                        <span
                        className={`px-2 py-0.5 rounded text-[10px] font-bold font-montserrat ${plan.status === 'active' ? 'bg-emerald-500 text-white' : 'bg-red-500 text-white'}`}>
                        
                          {plan.version}{' '}
                          {plan.status === 'active' ? '✓' : 'PÉRIMÉ'}
                        </span>
                      </div>
                    </div>
                    <div className="p-4">
                      <h4 className="font-montserrat font-bold text-sm text-globus-blue-dark mb-1 truncate">
                        {plan.name}
                      </h4>
                      <p className="text-xs text-globus-gray font-opensans mb-3">
                        {plan.author} • {plan.date}
                      </p>
                      <div className="flex gap-2">
                        <button className="flex-1 text-xs bg-globus-blue/10 text-globus-blue hover:bg-globus-blue hover:text-white py-1.5 rounded-lg font-bold transition-colors flex items-center justify-center gap-1">
                          <DownloadIcon className="w-3 h-3" /> Télécharger
                        </button>
                        <button
                        onClick={() =>
                        setExpandedPlan(isExpanded ? null : plan.name)
                        }
                        className="flex-1 text-xs bg-gray-100 text-globus-gray hover:bg-gray-200 py-1.5 rounded-lg font-bold transition-colors flex items-center justify-center gap-1">
                        
                          <HistoryIcon className="w-3 h-3" /> Historique
                          <ChevronDownIcon
                          className={`w-3 h-3 transition-transform ${isExpanded ? 'rotate-180' : ''}`} />
                        
                        </button>
                      </div>
                    </div>

                    <AnimatePresence>
                      {isExpanded &&
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
                      
                          <div className="p-4 bg-gray-50 border-t border-gray-100 space-y-2">
                            {plan.history.map((h) =>
                        <div
                          key={h.v}
                          className={`flex items-start gap-2 p-2 rounded-lg text-xs ${h.status === 'obsolete' ? 'opacity-60' : ''}`}>
                          
                                {h.status === 'active' ?
                          <CheckCircle2Icon className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" /> :

                          <XCircleIcon className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                          }
                                <div>
                                  <p className="font-montserrat font-bold text-globus-blue-dark flex items-center gap-2">
                                    {h.v}
                                    {h.status === 'active' &&
                              <span className="bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded text-[9px]">
                                        Active
                                      </span>
                              }
                                    {h.status === 'obsolete' &&
                              <span className="bg-red-100 text-red-600 px-1.5 py-0.5 rounded text-[9px] line-through">
                                        Périmé
                                      </span>
                              }
                                  </p>
                                  <p className="text-globus-gray">
                                    {h.date} — {h.author} — {h.note}
                                  </p>
                                </div>
                              </div>
                        )}
                          </div>
                        </motion.div>
                    }
                    </AnimatePresence>
                  </div>);

            })}
            </div>
          </motion.div>
        )}
      </div>
    </div>);

}