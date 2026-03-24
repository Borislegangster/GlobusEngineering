import React, { Children } from 'react';
import { motion } from 'framer-motion';
import {
  CalendarIcon,
  CheckCircle2Icon,
  ClockIcon,
  MapPinIcon,
  VideoIcon,
  ArrowRightIcon,
  FlagIcon } from
'lucide-react';
import { mockUser } from '../../components/client/ClientLayout';
const projectPhases = [
{
  id: 1,
  name: 'Études & Conception',
  start: 'Jan 2024',
  end: 'Fév 2024',
  status: 'Terminé'
},
{
  id: 2,
  name: 'Terrassement',
  start: 'Mar 2024',
  end: 'Mar 2024',
  status: 'Terminé'
},
{
  id: 3,
  name: 'Fondations',
  start: 'Avr 2024',
  end: 'Mai 2024',
  status: 'Terminé'
},
{
  id: 4,
  name: 'Élévation Murs RDC',
  start: 'Juin 2024',
  end: 'Août 2024',
  status: 'En cours'
},
{
  id: 5,
  name: 'Plancher Haut RDC',
  start: 'Sep 2024',
  end: 'Sep 2024',
  status: 'À venir'
},
{
  id: 6,
  name: 'Élévation R+1',
  start: 'Oct 2024',
  end: 'Nov 2024',
  status: 'À venir'
},
{
  id: 7,
  name: "Mise Hors d'Eau",
  start: 'Déc 2024',
  end: 'Jan 2025',
  status: 'À venir'
},
{
  id: 8,
  name: 'Second Œuvre',
  start: 'Fév 2025',
  end: 'Avr 2025',
  status: 'À venir'
},
{
  id: 9,
  name: 'Finitions',
  start: 'Mai 2025',
  end: 'Juin 2025',
  status: 'À venir'
},
{
  id: 10,
  name: 'Livraison',
  start: 'Juil 2025',
  end: 'Juil 2025',
  status: 'À venir'
}];

const upcomingEvents = [
{
  id: 1,
  title: 'Visite de chantier avec le client',
  date: '28/03/2026',
  time: '10h00',
  location: 'Sur site',
  type: 'site'
},
{
  id: 2,
  title: 'Réunion choix carrelage',
  date: '02/04/2026',
  time: '14h00',
  location: 'Showroom Globus',
  type: 'meeting'
},
{
  id: 3,
  title: "Point d'avancement mensuel",
  date: '15/04/2026',
  time: '10h00',
  location: 'Visioconférence',
  type: 'video'
},
{
  id: 4,
  title: 'Visite architecte pour finitions',
  date: '25/04/2026',
  time: '09h00',
  location: 'Sur site',
  type: 'site'
}];

const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1
    }
  }
};
const fadeUp = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5
    }
  }
};
export function ClientPlanning() {
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      {/* Header */}
      <motion.div
        initial={{
          opacity: 0,
          y: -10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
        
        <div className="flex flex-col md:flex-row justify-between gap-6">
          <div>
            <h1 className="font-montserrat font-extrabold text-2xl sm:text-3xl text-globus-blue-dark mb-2">
              Planning & Calendrier
            </h1>
            <p className="font-opensans text-globus-gray">
              Suivez l'avancement de votre projet{' '}
              <strong className="text-globus-blue-dark">
                {mockUser.projectName}
              </strong>
            </p>
          </div>
          <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-xl border border-gray-100">
            <div className="w-16 h-16 relative flex items-center justify-center">
              <svg className="w-full h-full transform -rotate-90">
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#E5E7EB"
                  strokeWidth="6"
                  fill="none" />
                
                <circle
                  cx="32"
                  cy="32"
                  r="28"
                  stroke="#F97316"
                  strokeWidth="6"
                  fill="none"
                  strokeDasharray="175.9"
                  strokeDashoffset="96.7"
                  className="transition-all duration-1000" />
                
              </svg>
              <span className="absolute font-montserrat font-bold text-sm text-globus-blue-dark">
                45%
              </span>
            </div>
            <div>
              <p className="text-xs text-gray-500 font-bold uppercase mb-1">
                Avancement Global
              </p>
              <p className="text-sm font-semibold text-gray-800">
                Élévation Murs RDC
              </p>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Key Dates */}
      <motion.div
        variants={stagger}
        initial="hidden"
        animate="visible"
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        
        <motion.div
          variants={fadeUp}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 border-l-4 border-l-globus-blue">
          
          <p className="text-xs text-gray-500 font-bold uppercase mb-1">
            Date de début
          </p>
          <p className="font-montserrat font-bold text-lg text-globus-blue-dark">
            15 Jan 2024
          </p>
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 border-l-4 border-l-green-500">
          
          <p className="text-xs text-gray-500 font-bold uppercase mb-1">
            Livraison prévue
          </p>
          <p className="font-montserrat font-bold text-lg text-globus-blue-dark">
            15 Juil 2025
          </p>
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 border-l-4 border-l-globus-orange">
          
          <p className="text-xs text-gray-500 font-bold uppercase mb-1">
            Prochaine étape
          </p>
          <p className="font-montserrat font-bold text-lg text-globus-blue-dark">
            Plancher Haut RDC
          </p>
        </motion.div>
        <motion.div
          variants={fadeUp}
          className="bg-white rounded-xl shadow-sm border border-gray-200 p-5 border-l-4 border-l-purple-500">
          
          <p className="text-xs text-gray-500 font-bold uppercase mb-1">
            Temps restant estimé
          </p>
          <p className="font-montserrat font-bold text-lg text-globus-blue-dark">
            ~480 jours
          </p>
        </motion.div>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Timeline */}
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
          className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-gray-200 p-6 sm:p-8">
          
          <h2 className="font-montserrat font-bold text-xl text-globus-blue-dark mb-8 flex items-center gap-2">
            <FlagIcon className="w-6 h-6 text-globus-orange" />
            Planning Général du Projet
          </h2>

          <div className="relative pl-6 sm:pl-8 border-l-2 border-gray-100 space-y-8">
            {projectPhases.map((phase, idx) => {
              const isDone = phase.status === 'Terminé';
              const isCurrent = phase.status === 'En cours';
              return (
                <div key={phase.id} className="relative">
                  {/* Timeline Node */}
                  <div
                    className={`absolute -left-[33px] sm:-left-[41px] top-0.5 w-6 h-6 sm:w-8 sm:h-8 rounded-full border-4 border-white flex items-center justify-center ${isDone ? 'bg-green-500' : isCurrent ? 'bg-globus-blue' : 'bg-gray-200'}`}>
                    
                    {isDone &&
                    <CheckCircle2Icon className="w-4 h-4 text-white" />
                    }
                    {isCurrent &&
                    <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
                    }
                  </div>

                  {/* Content */}
                  <div
                    className={`bg-gray-50 rounded-xl p-4 sm:p-5 border transition-all ${isCurrent ? 'border-globus-blue shadow-md ring-1 ring-globus-blue/20' : 'border-gray-100'}`}>
                    
                    {isCurrent &&
                    <div className="absolute -top-3 right-4 bg-globus-blue text-white text-[10px] font-bold uppercase px-2 py-1 rounded-full shadow-sm flex items-center gap-1">
                        <ArrowRightIcon className="w-3 h-3" /> Vous êtes ici
                      </div>
                    }

                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-2">
                      <h3
                        className={`font-montserrat font-bold text-base sm:text-lg ${isCurrent ? 'text-globus-blue-dark' : 'text-gray-800'}`}>
                        
                        {phase.name}
                      </h3>
                      <span
                        className={`inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase w-fit ${isDone ? 'bg-green-100 text-green-700' : isCurrent ? 'bg-blue-100 text-blue-700' : 'bg-gray-200 text-gray-600'}`}>
                        
                        {phase.status}
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-sm text-gray-500 font-opensans">
                      <CalendarIcon className="w-4 h-4" />
                      <span>
                        {phase.start} — {phase.end}
                      </span>
                    </div>
                  </div>
                </div>);

            })}
          </div>
        </motion.div>

        {/* Upcoming Events */}
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
          className="space-y-6">
          
          <div className="bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
            <h2 className="font-montserrat font-bold text-lg text-globus-blue-dark mb-6 flex items-center gap-2">
              <CalendarIcon className="w-5 h-5 text-globus-orange" />
              Prochains Rendez-vous
            </h2>

            <div className="space-y-4">
              {upcomingEvents.map((event) =>
              <div
                key={event.id}
                className="border border-gray-100 rounded-xl p-4 hover:border-globus-blue/30 hover:shadow-sm transition-all bg-gray-50/50">
                
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 rounded-lg bg-white border border-gray-200 flex flex-col items-center justify-center shrink-0 overflow-hidden">
                      <div className="bg-red-500 w-full h-3 flex items-center justify-center">
                        <span className="text-[8px] font-bold text-white uppercase">
                          {event.date.split('/')[1]}
                        </span>
                      </div>
                      <span className="font-bold text-sm text-gray-800 leading-none mt-1">
                        {event.date.split('/')[0]}
                      </span>
                    </div>
                    <div>
                      <h4 className="font-montserrat font-bold text-sm text-globus-blue-dark mb-1 leading-tight">
                        {event.title}
                      </h4>
                      <div className="space-y-1 mt-2">
                        <p className="text-xs text-gray-500 flex items-center gap-1.5">
                          <ClockIcon className="w-3.5 h-3.5" /> {event.time}
                        </p>
                        <p className="text-xs text-gray-500 flex items-center gap-1.5">
                          {event.type === 'video' ?
                        <VideoIcon className="w-3.5 h-3.5" /> :

                        <MapPinIcon className="w-3.5 h-3.5" />
                        }
                          {event.location}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <button className="w-full mt-6 py-2.5 border-2 border-globus-blue text-globus-blue hover:bg-globus-blue hover:text-white font-montserrat font-bold text-sm rounded-lg transition-colors">
              Demander un rendez-vous
            </button>
          </div>

          {/* Need Help Card */}
          <div className="bg-gradient-to-br from-globus-blue-dark to-globus-blue rounded-2xl shadow-sm p-6 text-white">
            <h3 className="font-montserrat font-bold text-lg mb-2">
              Une question sur le planning ?
            </h3>
            <p className="font-opensans text-sm text-blue-100 mb-4">
              Votre chef de projet est à votre disposition pour détailler les
              prochaines étapes.
            </p>
            <button className="w-full py-2.5 bg-white text-globus-blue-dark hover:bg-gray-50 font-montserrat font-bold text-sm rounded-lg transition-colors">
              Contacter mon chef de projet
            </button>
          </div>
        </motion.div>
      </div>
    </div>);

}