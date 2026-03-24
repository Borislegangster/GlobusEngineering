import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  WalletIcon,
  CreditCardIcon,
  SmartphoneIcon,
  DownloadIcon,
  CheckCircle2Icon,
  XIcon,
  LockIcon,
  ReceiptIcon } from
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
const appelsDeFonds = [
{
  id: 1,
  libelle: 'Acompte signature',
  montant: 8500000,
  date: '15/01/2024',
  status: 'payé'
},
{
  id: 2,
  libelle: 'Démarrage chantier',
  montant: 12750000,
  date: '01/03/2024',
  status: 'payé'
},
{
  id: 3,
  libelle: 'Fondations terminées',
  montant: 17000000,
  date: '15/05/2024',
  status: 'payé'
},
{
  id: 4,
  libelle: "Mise hors d'eau",
  montant: 12750000,
  date: '01/08/2024',
  status: 'en-attente'
},
{
  id: 5,
  libelle: "Mise hors d'air",
  montant: 12750000,
  date: '15/10/2024',
  status: 'à-venir'
},
{
  id: 6,
  libelle: 'Finitions',
  montant: 12750000,
  date: '01/01/2025',
  status: 'à-venir'
},
{
  id: 7,
  libelle: 'Solde livraison',
  montant: 8500000,
  date: '15/03/2025',
  status: 'à-venir'
}];

const budgetEvolutionData = [
{
  month: 'Jan',
  prevu: 8500000,
  reel: 8500000
},
{
  month: 'Fév',
  prevu: 8500000,
  reel: 8500000
},
{
  month: 'Mar',
  prevu: 21250000,
  reel: 21250000
},
{
  month: 'Avr',
  prevu: 21250000,
  reel: 21250000
},
{
  month: 'Mai',
  prevu: 38250000,
  reel: 38250000
},
{
  month: 'Jun',
  prevu: 38250000,
  reel: 38250000
},
{
  month: 'Jul',
  prevu: 51000000,
  reel: 38250000
} // Retard de paiement simulé
];
export function ClientFinances() {
  const [isPaymentModalOpen, setIsPaymentModalOpen] = useState(false);
  const [selectedPayment, setSelectedPayment] = useState<any>(null);
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XAF',
      maximumFractionDigits: 0
    }).
    format(value).
    replace('XAF', 'FCFA');
  };
  const handleOpenPayment = (appel: any) => {
    setSelectedPayment(appel);
    setIsPaymentModalOpen(true);
  };
  return (
    <div className="max-w-7xl mx-auto space-y-6">
      {/* Budget Summary Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          
          <p className="text-sm text-globus-gray font-opensans mb-1">
            Budget Initial
          </p>
          <p className="font-montserrat font-bold text-2xl text-globus-blue-dark">
            {formatCurrency(75000000)}
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.1
          }}
          className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100">
          
          <p className="text-sm text-globus-gray font-opensans mb-1">
            Avenants Validés
          </p>
          <p className="font-montserrat font-bold text-2xl text-globus-orange">
            +{formatCurrency(10000000)}
          </p>
        </motion.div>
        <motion.div
          initial={{
            opacity: 0,
            y: 20
          }}
          animate={{
            opacity: 1,
            y: 0
          }}
          transition={{
            delay: 0.2
          }}
          className="bg-globus-blue-dark p-6 rounded-2xl shadow-lg border border-transparent text-white">
          
          <p className="text-sm text-seconda-blue font-opensans mb-1">
            Budget Actualisé Total
          </p>
          <p className="font-montserrat font-bold text-3xl">
            {formatCurrency(85000000)}
          </p>
        </motion.div>
      </div>

      {/* Payment Progress */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 0.3
        }}
        className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
        
        <div className="flex justify-between items-end mb-4">
          <div>
            <h3 className="font-montserrat font-bold text-lg text-globus-blue-dark">
              Montant Réglé
            </h3>
            <p className="font-opensans text-sm text-globus-gray">
              {formatCurrency(38250000)} sur {formatCurrency(85000000)}
            </p>
          </div>
          <span className="font-montserrat font-extrabold text-3xl text-green-500">
            45%
          </span>
        </div>
        <div className="w-full h-4 bg-gray-100 rounded-full overflow-hidden">
          <motion.div
            initial={{
              width: 0
            }}
            animate={{
              width: '45%'
            }}
            transition={{
              duration: 1,
              delay: 0.5
            }}
            className="h-full bg-green-500 rounded-full relative">
            
            <div
              className="absolute inset-0 bg-white/20"
              style={{
                backgroundImage:
                'linear-gradient(45deg,rgba(255,255,255,.15) 25%,transparent 25%,transparent 50%,rgba(255,255,255,.15) 50%,rgba(255,255,255,.15) 75%,transparent 75%,transparent)',
                backgroundSize: '1rem 1rem'
              }}>
            </div>
          </motion.div>
        </div>
      </motion.div>

      {/* Budget Evolution Chart */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 0.35
        }}
        className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100">
        
        <h3 className="font-montserrat font-bold text-lg text-globus-blue-dark mb-6">
          Évolution des Dépenses (2024)
        </h3>
        <div className="h-64 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart
              data={budgetEvolutionData}
              margin={{
                top: 10,
                right: 10,
                left: 0,
                bottom: 0
              }}>
              
              <defs>
                <linearGradient id="colorReel" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#10B981" stopOpacity={0.3} />
                  <stop offset="95%" stopColor="#10B981" stopOpacity={0} />
                </linearGradient>
                <linearGradient id="colorPrevu" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#1D4ED8" stopOpacity={0.1} />
                  <stop offset="95%" stopColor="#1D4ED8" stopOpacity={0} />
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
                  fontSize: 12,
                  fill: '#6b7280'
                }}
                dy={10} />
              
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{
                  fontSize: 12,
                  fill: '#6b7280'
                }}
                tickFormatter={(value) => `${value / 1000000}M`}
                dx={-10} />
              
              <Tooltip
                formatter={(value: number) => [formatCurrency(value), '']}
                contentStyle={{
                  borderRadius: '8px',
                  border: 'none',
                  boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                }} />
              
              <Area
                type="monotone"
                dataKey="prevu"
                name="Prévu"
                stroke="#1D4ED8"
                strokeDasharray="5 5"
                fillOpacity={1}
                fill="url(#colorPrevu)" />
              
              <Area
                type="stepAfter"
                dataKey="reel"
                name="Réel"
                stroke="#10B981"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorReel)" />
              
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="flex items-center justify-center gap-6 mt-4">
          <div className="flex items-center gap-2 text-sm font-opensans text-globus-gray">
            <div className="w-3 h-0.5 border-t-2 border-dashed border-globus-blue"></div>{' '}
            Budget Prévu
          </div>
          <div className="flex items-center gap-2 text-sm font-opensans text-globus-gray">
            <div className="w-3 h-0.5 bg-green-500"></div> Dépenses Réelles
          </div>
        </div>
      </motion.div>

      {/* Appels de fonds Table */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 0.4
        }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
        
        <div className="p-6 border-b border-gray-100 flex items-center gap-3">
          <WalletIcon className="w-6 h-6 text-globus-blue-dark" />
          <h3 className="font-montserrat font-bold text-xl text-globus-blue-dark">
            Échéancier & Appels de fonds
          </h3>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="bg-globus-light border-b border-gray-200">
                <th className="p-4 font-montserrat font-semibold text-sm text-globus-blue-dark">
                  N°
                </th>
                <th className="p-4 font-montserrat font-semibold text-sm text-globus-blue-dark">
                  Libellé
                </th>
                <th className="p-4 font-montserrat font-semibold text-sm text-globus-blue-dark">
                  Échéance
                </th>
                <th className="p-4 font-montserrat font-semibold text-sm text-globus-blue-dark">
                  Montant
                </th>
                <th className="p-4 font-montserrat font-semibold text-sm text-globus-blue-dark">
                  Statut
                </th>
                <th className="p-4 font-montserrat font-semibold text-sm text-globus-blue-dark text-right">
                  Action
                </th>
              </tr>
            </thead>
            <tbody className="font-opensans text-sm">
              {appelsDeFonds.map((appel) =>
              <tr
                key={appel.id}
                className="border-b border-gray-100 hover:bg-gray-50 transition-colors">
                
                  <td className="p-4 text-globus-gray">#{appel.id}</td>
                  <td className="p-4 font-semibold text-globus-blue-dark">
                    {appel.libelle}
                  </td>
                  <td className="p-4 text-globus-gray">{appel.date}</td>
                  <td className="p-4 font-bold text-globus-blue-dark">
                    {formatCurrency(appel.montant)}
                  </td>
                  <td className="p-4">
                    {appel.status === 'payé' &&
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700">
                        <CheckCircle2Icon className="w-3.5 h-3.5" /> Payé
                      </span>
                  }
                    {appel.status === 'en-attente' &&
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-globus-orange/10 text-globus-orange">
                        <span className="w-2 h-2 rounded-full bg-globus-orange animate-pulse"></span>{' '}
                        À régler
                      </span>
                  }
                    {appel.status === 'à-venir' &&
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-gray-100 text-gray-500">
                        À venir
                      </span>
                  }
                  </td>
                  <td className="p-4 text-right">
                    {appel.status === 'payé' &&
                  <button className="inline-flex items-center gap-2 text-globus-blue hover:text-globus-blue-dark font-semibold transition-colors">
                        <DownloadIcon className="w-4 h-4" /> Reçu
                      </button>
                  }
                    {appel.status === 'en-attente' &&
                  <button
                    onClick={() => handleOpenPayment(appel)}
                    className="inline-flex items-center gap-2 bg-globus-orange hover:bg-globus-orange-hover text-white px-4 py-2 rounded-lg font-montserrat font-bold transition-colors shadow-sm">
                    
                        Payer en ligne
                      </button>
                  }
                    {appel.status === 'à-venir' &&
                  <span className="text-gray-400">-</span>
                  }
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </motion.div>

      {/* Historique des Reçus */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        transition={{
          delay: 0.5
        }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
        
        <div className="flex items-center gap-3 mb-6">
          <ReceiptIcon className="w-6 h-6 text-globus-blue-dark" />
          <h3 className="font-montserrat font-bold text-xl text-globus-blue-dark">
            Historique des Reçus
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {[
          {
            id: 1,
            title: 'Reçu #1 - Acompte',
            date: '16/01/2024',
            amount: 8500000,
            txn: 'TXN-2024-001'
          },
          {
            id: 2,
            title: 'Reçu #2 - Démarrage',
            date: '02/03/2024',
            amount: 12750000,
            txn: 'TXN-2024-045'
          },
          {
            id: 3,
            title: 'Reçu #3 - Fondations',
            date: '16/05/2024',
            amount: 17000000,
            txn: 'TXN-2024-112'
          }].
          map((recu) =>
          <div
            key={recu.id}
            className="border border-gray-200 rounded-xl p-4 hover:border-globus-blue/30 hover:shadow-md transition-all group">
            
              <div className="flex justify-between items-start mb-3">
                <div className="w-10 h-10 rounded-lg bg-green-50 flex items-center justify-center text-green-600">
                  <ReceiptIcon className="w-5 h-5" />
                </div>
                <span className="text-xs font-mono text-gray-400 bg-gray-100 px-2 py-1 rounded">
                  {recu.txn}
                </span>
              </div>
              <h4 className="font-montserrat font-bold text-globus-blue-dark mb-1">
                {recu.title}
              </h4>
              <div className="flex justify-between items-end mb-4">
                <p className="font-opensans text-xs text-globus-gray">
                  {recu.date}
                </p>
                <p className="font-montserrat font-bold text-globus-blue">
                  {formatCurrency(recu.amount)}
                </p>
              </div>
              <button className="w-full py-2 bg-gray-50 hover:bg-globus-blue hover:text-white text-globus-blue-dark text-sm font-semibold rounded-lg transition-colors flex items-center justify-center gap-2">
                <DownloadIcon className="w-4 h-4" /> Télécharger PDF
              </button>
            </div>
          )}
        </div>
      </motion.div>

      {/* Payment Modal */}
      <AnimatePresence>
        {isPaymentModalOpen && selectedPayment &&
        <>
            <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            exit={{
              opacity: 0
            }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setIsPaymentModalOpen(false)}>
            
              <motion.div
              initial={{
                scale: 0.95,
                opacity: 0
              }}
              animate={{
                scale: 1,
                opacity: 1
              }}
              exit={{
                scale: 0.95,
                opacity: 0
              }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-3xl shadow-2xl max-w-lg w-full overflow-hidden">
              
                <div className="bg-globus-blue-dark p-6 text-white relative">
                  <button
                  onClick={() => setIsPaymentModalOpen(false)}
                  className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors">
                  
                    <XIcon className="w-6 h-6" />
                  </button>
                  <h3 className="font-montserrat font-bold text-xl mb-1">
                    Règlement en ligne
                  </h3>
                  <p className="text-seconda-blue font-opensans text-sm">
                    Appel de fonds #{selectedPayment.id} :{' '}
                    {selectedPayment.libelle}
                  </p>
                </div>

                <div className="p-6 md:p-8">
                  <div className="text-center mb-8">
                    <p className="text-sm text-globus-gray font-opensans mb-1">
                      Montant à régler
                    </p>
                    <p className="font-montserrat font-extrabold text-4xl text-globus-blue-dark">
                      {formatCurrency(selectedPayment.montant)}
                    </p>
                  </div>

                  <p className="font-montserrat font-bold text-sm text-globus-blue-dark mb-4">
                    Choisissez votre méthode de paiement :
                  </p>

                  <div className="space-y-3 mb-8">
                    <label className="flex items-center p-4 border-2 border-globus-orange bg-globus-orange/5 rounded-xl cursor-pointer transition-colors">
                      <input
                      type="radio"
                      name="payment"
                      className="w-4 h-4 text-globus-orange focus:ring-globus-orange"
                      defaultChecked />
                    
                      <div className="ml-4 flex-1 flex items-center justify-between">
                        <span className="font-montserrat font-bold text-globus-blue-dark">
                          Carte Bancaire
                        </span>
                        <div className="flex gap-1">
                          <CreditCardIcon className="w-6 h-6 text-globus-blue-dark" />
                        </div>
                      </div>
                    </label>

                    <label className="flex items-center p-4 border-2 border-gray-200 hover:border-gray-300 rounded-xl cursor-pointer transition-colors">
                      <input
                      type="radio"
                      name="payment"
                      className="w-4 h-4 text-globus-orange focus:ring-globus-orange" />
                    
                      <div className="ml-4 flex-1 flex items-center justify-between">
                        <span className="font-montserrat font-bold text-globus-blue-dark">
                          Mobile Money
                        </span>
                        <SmartphoneIcon className="w-6 h-6 text-globus-blue-dark" />
                      </div>
                    </label>
                  </div>

                  <button className="w-full bg-globus-orange hover:bg-globus-orange-hover text-white font-montserrat font-bold py-4 rounded-xl transition-colors shadow-lg flex items-center justify-center gap-2">
                    <LockIcon className="w-5 h-5" /> Procéder au paiement
                    sécurisé
                  </button>

                  <p className="text-center text-xs text-globus-gray font-opensans mt-4 flex items-center justify-center gap-1">
                    <LockIcon className="w-3 h-3" /> Paiement sécurisé via
                    Stripe / Flutterwave. Globus ne stocke jamais vos données
                    bancaires.
                  </p>
                </div>
              </motion.div>
            </motion.div>
          </>
        }
      </AnimatePresence>
    </div>);

}