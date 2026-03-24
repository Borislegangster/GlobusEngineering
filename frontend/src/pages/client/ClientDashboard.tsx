import React from 'react';
import { motion } from 'framer-motion';
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from 'recharts';
import {
  DownloadIcon,
  TrendingUpIcon,
  WalletIcon,
  CalendarIcon,
  FileTextIcon,
  CameraIcon,
  MessageSquareIcon,
  CheckCircle2Icon,
  PhoneIcon,
  MailIcon,
  CalendarClockIcon,
  CloudSunIcon } from
'lucide-react';
import { Link } from 'react-router-dom';
import { mockUser } from '../../components/client/ClientLayout';
const budgetData = [
{
  name: 'Payé',
  value: 38250000,
  color: '#10B981'
},
{
  name: 'Reste à payer',
  value: 46750000,
  color: '#E5E7EB'
} // Gray
];
const recentActivity = [
{
  id: 1,
  type: 'photo',
  icon: CameraIcon,
  title: 'Nouvelle photo ajoutée - Coulage dalle RDC',
  time: 'Il y a 2 heures',
  color: 'text-blue-500',
  bg: 'bg-blue-100'
},
{
  id: 2,
  type: 'finance',
  icon: WalletIcon,
  title: 'Appel de fonds #3 émis - 12 750 000 FCFA',
  time: 'Hier',
  color: 'text-globus-orange',
  bg: 'bg-globus-orange/10'
},
{
  id: 3,
  type: 'document',
  icon: FileTextIcon,
  title: 'Document ajouté: Plan électrique v2.pdf',
  time: 'Il y a 3 jours',
  color: 'text-gray-500',
  bg: 'bg-gray-100'
},
{
  id: 4,
  type: 'milestone',
  icon: CheckCircle2Icon,
  title: 'Étape validée: Fondations terminées',
  time: 'Il y a 1 semaine',
  color: 'text-green-500',
  bg: 'bg-green-100'
},
{
  id: 5,
  type: 'message',
  icon: MessageSquareIcon,
  title: 'Message du chef de chantier',
  time: 'Il y a 1 semaine',
  color: 'text-purple-500',
  bg: 'bg-purple-100'
}];

export function ClientDashboard() {
  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('fr-FR', {
      style: 'currency',
      currency: 'XAF',
      maximumFractionDigits: 0
    }).
    format(value).
    replace('XAF', 'FCFA');
  };
  return (
    <div className="space-y-6 max-w-7xl mx-auto">
      {/* Welcome Banner */}
      <motion.div
        initial={{
          opacity: 0,
          y: 20
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
        
        <div>
          <h2 className="font-montserrat font-extrabold text-2xl text-globus-blue-dark mb-1">
            Bonjour, {mockUser.name.split(' ')[0]} 👋
          </h2>
          <p className="font-opensans text-globus-gray">
            Voici l'état d'avancement de votre projet{' '}
            <strong className="text-globus-blue-dark">
              {mockUser.projectName}
            </strong>
          </p>
        </div>
        <button className="shrink-0 bg-globus-blue hover:bg-globus-blue/90 text-white font-montserrat font-bold py-2.5 px-5 rounded-lg transition-colors shadow-md flex items-center gap-2 text-sm">
          <DownloadIcon className="w-4 h-4" /> Rapport PDF
        </button>
      </motion.div>

      {/* Countdown & Quick Actions Row */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
            delay: 0.05
          }}
          className="bg-gradient-to-br from-globus-blue-dark to-globus-blue rounded-2xl shadow-md p-6 text-white relative overflow-hidden flex items-center gap-5">
          
          <div className="absolute right-0 top-0 w-32 h-32 bg-white opacity-5 rounded-full -translate-y-1/2 translate-x-1/3"></div>
          <div className="w-14 h-14 rounded-full bg-white/10 flex items-center justify-center shrink-0 backdrop-blur-sm border border-white/20">
            <CalendarClockIcon className="w-7 h-7 text-globus-orange" />
          </div>
          <div className="relative z-10">
            <p className="font-montserrat font-extrabold text-3xl mb-1">
              247 jours
            </p>
            <p className="font-opensans text-sm text-seconda-blue">
              avant livraison estimée (Mars 2025)
            </p>
          </div>
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
            delay: 0.08
          }}
          className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
          
          <Link
            to="/espace-client/finances"
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center gap-4 hover:shadow-md hover:border-globus-orange/30 transition-all group">
            
            <div className="w-12 h-12 rounded-xl bg-globus-orange/10 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <WalletIcon className="w-6 h-6 text-globus-orange" />
            </div>
            <span className="font-montserrat font-bold text-sm text-globus-blue-dark">
              Payer une facture
            </span>
          </Link>
          <Link
            to="/espace-client/chantier"
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center gap-4 hover:shadow-md hover:border-blue-300 transition-all group">
            
            <div className="w-12 h-12 rounded-xl bg-blue-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <CameraIcon className="w-6 h-6 text-blue-600" />
            </div>
            <span className="font-montserrat font-bold text-sm text-globus-blue-dark">
              Voir les photos
            </span>
          </Link>
          <Link
            to="/espace-client/messagerie"
            className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center gap-4 hover:shadow-md hover:border-purple-300 transition-all group">
            
            <div className="w-12 h-12 rounded-xl bg-purple-100 flex items-center justify-center shrink-0 group-hover:scale-105 transition-transform">
              <MessageSquareIcon className="w-6 h-6 text-purple-600" />
            </div>
            <span className="font-montserrat font-bold text-sm text-globus-blue-dark">
              Envoyer un message
            </span>
          </Link>
        </motion.div>
      </div>

      {/* Project Overview Card */}
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
        className="bg-white rounded-2xl shadow-lg border border-gray-100 overflow-hidden">
        
        <div className="h-48 sm:h-64 relative">
          <img
            src="https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=1200&q=80"
            alt="Projet"
            className="w-full h-full object-cover" />
          
          <div className="absolute inset-0 bg-gradient-to-t from-globus-blue-dark/90 to-transparent flex flex-col justify-end p-6">
            <div className="flex flex-wrap items-center gap-3 mb-2">
              <span className="bg-globus-orange/20 backdrop-blur-md text-white border border-globus-orange/50 px-3 py-1 rounded-full font-montserrat font-bold text-xs flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-globus-orange animate-pulse"></span>
                En cours - Gros Œuvre
              </span>
              <span className="bg-black/30 backdrop-blur-md text-white px-3 py-1 rounded-full font-montserrat text-xs">
                Livraison estimée : Mars 2025
              </span>
            </div>
            <h3 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-white mb-1">
              {mockUser.projectName}
            </h3>
            <p className="font-opensans text-white/80 text-sm flex items-center gap-1">
              Douala, Quartier Bonapriso
            </p>
          </div>
        </div>
        <div className="p-6 bg-white">
          <div className="flex justify-between items-end mb-2">
            <span className="font-montserrat font-bold text-globus-blue-dark">
              Avancement global
            </span>
            <span className="font-montserrat font-extrabold text-2xl text-globus-orange">
              45%
            </span>
          </div>
          <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
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
              className="h-full bg-globus-orange rounded-full" />
            
          </div>
        </div>
      </motion.div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
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
          className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          
          <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center shrink-0">
            <TrendingUpIcon className="w-6 h-6 text-green-600" />
          </div>
          <div>
            <p className="text-sm text-globus-gray font-opensans">Avancement</p>
            <p className="font-montserrat font-bold text-xl text-globus-blue-dark">
              45%
            </p>
          </div>
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
            delay: 0.3
          }}
          className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          
          <div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
            <WalletIcon className="w-6 h-6 text-blue-600" />
          </div>
          <div>
            <p className="text-sm text-globus-gray font-opensans">
              Budget Total
            </p>
            <p className="font-montserrat font-bold text-lg text-globus-blue-dark">
              85M FCFA
            </p>
          </div>
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
            delay: 0.4
          }}
          className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          
          <div className="w-12 h-12 rounded-full bg-globus-orange/10 flex items-center justify-center shrink-0">
            <CalendarIcon className="w-6 h-6 text-globus-orange" />
          </div>
          <div>
            <p className="text-sm text-globus-gray font-opensans">
              Prochaine Étape
            </p>
            <p className="font-montserrat font-bold text-sm text-globus-blue-dark line-clamp-1">
              Mise hors d'eau
            </p>
          </div>
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
            delay: 0.5
          }}
          className="bg-white p-5 rounded-2xl shadow-sm border border-gray-100 flex items-center gap-4">
          
          <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0">
            <FileTextIcon className="w-6 h-6 text-gray-600" />
          </div>
          <div>
            <p className="text-sm text-globus-gray font-opensans">Documents</p>
            <p className="font-montserrat font-bold text-xl text-globus-blue-dark">
              12 fichiers
            </p>
          </div>
        </motion.div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Budget Gauge */}
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
            delay: 0.6
          }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:col-span-1 flex flex-col">
          
          <h3 className="font-montserrat font-bold text-lg text-globus-blue-dark mb-4">
            État Financier
          </h3>
          <div className="flex-1 relative min-h-[200px] flex items-center justify-center">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={budgetData}
                  cx="50%"
                  cy="50%"
                  innerRadius={60}
                  outerRadius={80}
                  startAngle={90}
                  endAngle={-270}
                  dataKey="value"
                  stroke="none">
                  
                  {budgetData.map((entry, index) =>
                  <Cell key={`cell-${index}`} fill={entry.color} />
                  )}
                </Pie>
                <Tooltip
                  formatter={(value: number) => formatCurrency(value)}
                  contentStyle={{
                    borderRadius: '8px',
                    border: 'none',
                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                  }} />
                
              </PieChart>
            </ResponsiveContainer>
            <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
              <span className="font-montserrat font-extrabold text-2xl text-globus-blue-dark">
                45%
              </span>
              <span className="text-xs text-globus-gray font-opensans">
                Payé
              </span>
            </div>
          </div>
          <div className="mt-4 space-y-2">
            <div className="flex justify-between text-sm">
              <span className="flex items-center gap-2 text-globus-gray">
                <span className="w-3 h-3 rounded-full bg-[#10B981]"></span> Payé
              </span>
              <span className="font-bold text-globus-blue-dark">
                {formatCurrency(38250000)}
              </span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="flex items-center gap-2 text-globus-gray">
                <span className="w-3 h-3 rounded-full bg-gray-200"></span> Reste
                à payer
              </span>
              <span className="font-bold text-globus-blue-dark">
                {formatCurrency(46750000)}
              </span>
            </div>
          </div>
        </motion.div>

        {/* Activity Feed */}
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
            delay: 0.7
          }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:col-span-2">
          
          <h3 className="font-montserrat font-bold text-lg text-globus-blue-dark mb-6">
            Activité Récente
          </h3>
          <div className="space-y-6 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gray-200 before:to-transparent">
            {recentActivity.map((activity, index) => {
              const Icon = activity.icon;
              return (
                <div
                  key={activity.id}
                  className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  
                  <div
                    className={`flex items-center justify-center w-10 h-10 rounded-full border-4 border-white ${activity.bg} ${activity.color} shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow-sm z-10`}>
                    
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-gray-50 p-4 rounded-xl border border-gray-100">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                      <h4 className="font-montserrat font-bold text-sm text-globus-blue-dark">
                        {activity.title}
                      </h4>
                    </div>
                    <time className="font-opensans text-xs text-globus-gray">
                      {activity.time}
                    </time>
                  </div>
                </div>);

            })}
          </div>
        </motion.div>
      </div>

      {/* Contacts & Weather */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
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
            delay: 0.8
          }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 lg:col-span-2">
          
          <h3 className="font-montserrat font-bold text-lg text-globus-blue-dark mb-4">
            Vos Contacts Dédiés
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="flex items-center gap-4 p-4 bg-globus-light rounded-xl border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-globus-blue-dark text-white flex items-center justify-center font-montserrat font-bold text-lg shrink-0">
                PM
              </div>
              <div>
                <p className="font-montserrat font-bold text-globus-blue-dark">
                  Ing. Paul Mbarga
                </p>
                <p className="text-xs text-globus-orange font-bold mb-1">
                  Chef de Projet
                </p>
                <div className="flex items-center gap-3 text-sm text-globus-gray">
                  <a
                    href="tel:+237600000000"
                    className="hover:text-globus-blue transition-colors flex items-center gap-1">
                    
                    <PhoneIcon className="w-3 h-3" /> Appel
                  </a>
                  <a
                    href="mailto:paul@globus-btp.com"
                    className="hover:text-globus-blue transition-colors flex items-center gap-1">
                    
                    <MailIcon className="w-3 h-3" /> Email
                  </a>
                </div>
              </div>
            </div>
            <div className="flex items-center gap-4 p-4 bg-globus-light rounded-xl border border-gray-100">
              <div className="w-12 h-12 rounded-full bg-globus-blue-dark text-white flex items-center justify-center font-montserrat font-bold text-lg shrink-0">
                CF
              </div>
              <div>
                <p className="font-montserrat font-bold text-globus-blue-dark">
                  Mme. Claire Fotso
                </p>
                <p className="text-xs text-globus-orange font-bold mb-1">
                  Architecte
                </p>
                <div className="flex items-center gap-3 text-sm text-globus-gray">
                  <a
                    href="tel:+237600000001"
                    className="hover:text-globus-blue transition-colors flex items-center gap-1">
                    
                    <PhoneIcon className="w-3 h-3" /> Appel
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Weather Widget */}
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
            delay: 0.9
          }}
          className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col justify-center relative overflow-hidden">
          
          <div className="absolute -right-4 -top-4 opacity-5">
            <CloudSunIcon className="w-40 h-40" />
          </div>
          <div className="flex items-center gap-3 mb-4 relative z-10">
            <CloudSunIcon className="w-8 h-8 text-globus-orange" />
            <div>
              <h3 className="font-montserrat font-bold text-globus-blue-dark">
                Météo Chantier
              </h3>
              <p className="font-opensans text-xs text-globus-gray">
                Douala, Cameroun
              </p>
            </div>
          </div>
          <div className="relative z-10">
            <div className="flex items-end gap-2 mb-2">
              <span className="font-montserrat font-extrabold text-4xl text-globus-blue-dark">
                28°C
              </span>
              <span className="font-opensans text-sm text-globus-gray font-semibold mb-1">
                Partiellement nuageux
              </span>
            </div>
            <div className="bg-green-50 border border-green-100 rounded-lg p-3 mt-4">
              <p className="font-opensans text-xs text-green-700 font-semibold flex items-center gap-1.5">
                <CheckCircle2Icon className="w-3.5 h-3.5" /> Conditions
                favorables pour le chantier
              </p>
            </div>
            <p className="font-opensans text-xs text-globus-gray mt-3 italic">
              Prévisions: Pluie possible demain après-midi
            </p>
          </div>
        </motion.div>
      </div>
    </div>);

}