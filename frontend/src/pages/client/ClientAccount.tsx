import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  UserIcon,
  ShieldCheckIcon,
  UsersIcon,
  SaveIcon,
  Trash2Icon,
  PlusIcon,
  BellIcon,
  MonitorIcon,
  SmartphoneIcon,
  LaptopIcon } from
'lucide-react';
import { mockUser } from '../../components/client/ClientLayout';
export function ClientAccount() {
  const [is2FAEnabled, setIs2FAEnabled] = useState(false);
  const [notifs, setNotifs] = useState({
    chantier: {
      email: true,
      sms: true,
      push: true
    },
    finances: {
      email: true,
      sms: true,
      push: false
    },
    docs: {
      email: true,
      sms: false,
      push: false
    },
    messages: {
      email: false,
      sms: false,
      push: true
    }
  });
  const toggleNotif = (
  category: keyof typeof notifs,
  type: 'email' | 'sms' | 'push') =>
  {
    setNotifs((prev) => ({
      ...prev,
      [category]: {
        ...prev[category],
        [type]: !prev[category][type]
      }
    }));
  };
  return (
    <div className="max-w-5xl mx-auto space-y-8">
      <motion.h1
        initial={{
          opacity: 0,
          y: -10
        }}
        animate={{
          opacity: 1,
          y: 0
        }}
        className="font-montserrat font-extrabold text-3xl text-globus-blue-dark">
        
        Mon Compte
      </motion.h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Col: Profile & Security */}
        <div className="lg:col-span-2 space-y-8">
          {/* Profile Form */}
          <motion.div
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            
            <div className="p-6 border-b border-gray-100 flex items-center gap-3">
              <UserIcon className="w-6 h-6 text-globus-blue-dark" />
              <h2 className="font-montserrat font-bold text-xl text-globus-blue-dark">
                Informations Personnelles
              </h2>
            </div>
            <div className="p-6 md:p-8">
              <div className="flex items-center gap-6 mb-8">
                <div className="w-20 h-20 rounded-full bg-globus-orange text-white flex items-center justify-center font-montserrat font-bold text-3xl shadow-md">
                  {mockUser.initials}
                </div>
                <div>
                  <button className="text-sm font-montserrat font-bold text-globus-blue hover:underline">
                    Modifier la photo
                  </button>
                  <p className="text-xs text-globus-gray font-opensans mt-1">
                    JPG, GIF ou PNG. Max 2MB.
                  </p>
                </div>
              </div>

              <form className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block font-montserrat font-semibold text-globus-blue-dark text-sm mb-2">
                      Nom Complet
                    </label>
                    <input
                      type="text"
                      defaultValue={mockUser.name}
                      className="w-full bg-globus-light border border-gray-200 rounded-lg px-4 py-2.5 font-opensans focus:outline-none focus:border-globus-orange" />
                    
                  </div>
                  <div>
                    <label className="block font-montserrat font-semibold text-globus-blue-dark text-sm mb-2">
                      Téléphone
                    </label>
                    <input
                      type="tel"
                      defaultValue={mockUser.phone}
                      className="w-full bg-globus-light border border-gray-200 rounded-lg px-4 py-2.5 font-opensans focus:outline-none focus:border-globus-orange" />
                    
                  </div>
                </div>
                <div>
                  <label className="block font-montserrat font-semibold text-globus-blue-dark text-sm mb-2">
                    Adresse E-mail
                  </label>
                  <input
                    type="email"
                    defaultValue={mockUser.email}
                    className="w-full bg-gray-100 border border-gray-200 rounded-lg px-4 py-2.5 font-opensans text-gray-500 cursor-not-allowed"
                    disabled />
                  
                  <p className="text-xs text-globus-gray mt-1">
                    L'adresse email ne peut être modifiée que par le support.
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100">
                  <h3 className="font-montserrat font-bold text-md text-globus-blue-dark mb-4">
                    Changer le mot de passe
                  </h3>
                  <div className="space-y-4">
                    <input
                      type="password"
                      placeholder="Mot de passe actuel"
                      className="w-full bg-globus-light border border-gray-200 rounded-lg px-4 py-2.5 font-opensans focus:outline-none focus:border-globus-orange" />
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <input
                        type="password"
                        placeholder="Nouveau mot de passe"
                        className="w-full bg-globus-light border border-gray-200 rounded-lg px-4 py-2.5 font-opensans focus:outline-none focus:border-globus-orange" />
                      
                      <input
                        type="password"
                        placeholder="Confirmer le mot de passe"
                        className="w-full bg-globus-light border border-gray-200 rounded-lg px-4 py-2.5 font-opensans focus:outline-none focus:border-globus-orange" />
                      
                    </div>
                  </div>
                </div>

                <div className="pt-4 flex justify-end">
                  <button
                    type="button"
                    className="bg-globus-orange hover:bg-globus-orange-hover text-white font-montserrat font-bold py-2.5 px-6 rounded-lg transition-colors shadow-md flex items-center gap-2">
                    
                    <SaveIcon className="w-4 h-4" /> Enregistrer les
                    modifications
                  </button>
                </div>
              </form>
            </div>
          </motion.div>

          {/* Security */}
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
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            
            <div className="p-6 border-b border-gray-100 flex items-center gap-3">
              <ShieldCheckIcon className="w-6 h-6 text-globus-blue-dark" />
              <h2 className="font-montserrat font-bold text-xl text-globus-blue-dark">
                Sécurité
              </h2>
            </div>
            <div className="p-6 flex items-center justify-between">
              <div>
                <h3 className="font-montserrat font-bold text-globus-blue-dark mb-1">
                  Authentification à deux facteurs (2FA)
                </h3>
                <p className="font-opensans text-sm text-globus-gray max-w-md">
                  Protégez votre compte avec un code de vérification
                  supplémentaire envoyé par SMS lors de la connexion.
                </p>
                <span
                  className={`inline-block mt-2 text-xs font-bold px-2.5 py-1 rounded-full ${is2FAEnabled ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                  
                  {is2FAEnabled ? 'Activé' : 'Non activé'}
                </span>
              </div>

              {/* Toggle Switch */}
              <button
                onClick={() => setIs2FAEnabled(!is2FAEnabled)}
                className={`relative inline-flex h-7 w-14 items-center rounded-full transition-colors focus:outline-none ${is2FAEnabled ? 'bg-globus-orange' : 'bg-gray-300'}`}>
                
                <span
                  className={`inline-block h-5 w-5 transform rounded-full bg-white transition-transform ${is2FAEnabled ? 'translate-x-8' : 'translate-x-1'}`} />
                
              </button>
            </div>
          </motion.div>

          {/* Notification Preferences */}
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
              delay: 0.15
            }}
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            
            <div className="p-6 border-b border-gray-100 flex items-center gap-3">
              <BellIcon className="w-6 h-6 text-globus-blue-dark" />
              <h2 className="font-montserrat font-bold text-xl text-globus-blue-dark">
                Préférences de Notifications
              </h2>
            </div>
            <div className="p-6">
              <div className="space-y-6">
                {[
                {
                  id: 'chantier',
                  label: 'Mises à jour du chantier'
                },
                {
                  id: 'finances',
                  label: 'Appels de fonds et paiements'
                },
                {
                  id: 'docs',
                  label: 'Nouveaux documents'
                },
                {
                  id: 'messages',
                  label: 'Messages'
                }].
                map((item) =>
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-gray-50 last:border-0 last:pb-0">
                  
                    <span className="font-montserrat font-semibold text-sm text-globus-blue-dark">
                      {item.label}
                    </span>
                    <div className="flex items-center gap-4">
                      {(['email', 'sms', 'push'] as const).map((type) => {
                      const isActive =
                      notifs[item.id as keyof typeof notifs][type];
                      return (
                        <button
                          key={type}
                          onClick={() =>
                          toggleNotif(item.id as keyof typeof notifs, type)
                          }
                          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-colors ${isActive ? 'bg-globus-blue/10 text-globus-blue' : 'bg-gray-100 text-gray-400'}`}>
                          
                            <div
                            className={`w-2 h-2 rounded-full ${isActive ? 'bg-globus-blue' : 'bg-gray-300'}`}>
                          </div>
                            {type.toUpperCase()}
                          </button>);

                    })}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* Session History */}
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
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            
            <div className="p-6 border-b border-gray-100 flex items-center gap-3">
              <MonitorIcon className="w-6 h-6 text-globus-blue-dark" />
              <h2 className="font-montserrat font-bold text-xl text-globus-blue-dark">
                Dernières Connexions
              </h2>
            </div>
            <div className="p-0">
              <div className="divide-y divide-gray-100">
                {[
                {
                  id: 1,
                  device: 'Chrome sur Windows',
                  location: 'Paris, France',
                  time: "Aujourd'hui 14:30",
                  active: true,
                  icon: LaptopIcon
                },
                {
                  id: 2,
                  device: 'Safari sur iPhone',
                  location: 'Douala, Cameroun',
                  time: 'Hier 09:15',
                  active: false,
                  icon: SmartphoneIcon
                },
                {
                  id: 3,
                  device: 'Chrome sur MacBook',
                  location: 'Paris, France',
                  time: '20/07/2024 18:00',
                  active: false,
                  icon: LaptopIcon
                },
                {
                  id: 4,
                  device: 'Firefox sur Windows',
                  location: 'Bruxelles, Belgique',
                  time: '15/07/2024 11:30',
                  active: false,
                  icon: LaptopIcon
                }].
                map((session) => {
                  const Icon = session.icon;
                  return (
                    <div
                      key={session.id}
                      className="p-4 flex items-center justify-between hover:bg-gray-50 transition-colors">
                      
                      <div className="flex items-center gap-4">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 ${session.active ? 'bg-green-100 text-green-600' : 'bg-gray-100 text-gray-500'}`}>
                          
                          <Icon className="w-5 h-5" />
                        </div>
                        <div>
                          <p className="font-montserrat font-bold text-sm text-globus-blue-dark flex items-center gap-2">
                            {session.device}
                            {session.active &&
                            <span className="bg-green-100 text-green-700 px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
                                Active
                              </span>
                            }
                          </p>
                          <p className="font-opensans text-xs text-globus-gray">
                            {session.location} • {session.time}
                          </p>
                        </div>
                      </div>
                    </div>);

                })}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Col: Family Access */}
        <div className="lg:col-span-1">
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
            className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden sticky top-24">
            
            <div className="p-6 border-b border-gray-100 flex items-center gap-3 bg-globus-light">
              <UsersIcon className="w-6 h-6 text-globus-blue-dark" />
              <h2 className="font-montserrat font-bold text-lg text-globus-blue-dark">
                Accès Famille & Invités
              </h2>
            </div>
            <div className="p-6">
              <p className="font-opensans text-sm text-globus-gray mb-6">
                Invitez votre conjoint, associé ou investisseur à consulter
                l'avancement du projet.
              </p>

              <div className="space-y-4 mb-6">
                {/* Guest Item */}
                <div className="bg-gray-50 border border-gray-200 rounded-xl p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-full bg-globus-blue-dark text-white flex items-center justify-center font-montserrat font-bold text-xs shrink-0">
                      MT
                    </div>
                    <div>
                      <p className="font-montserrat font-bold text-sm text-globus-blue-dark">
                        Marie Talla
                      </p>
                      <p className="font-opensans text-xs text-globus-gray">
                        Lecture seule
                      </p>
                    </div>
                  </div>
                  <button className="text-gray-400 hover:text-red-500 transition-colors">
                    <Trash2Icon className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <button className="w-full border-2 border-dashed border-gray-300 hover:border-globus-orange hover:text-globus-orange text-globus-gray font-montserrat font-bold py-3 rounded-xl transition-colors flex items-center justify-center gap-2 text-sm">
                <PlusIcon className="w-4 h-4" /> Inviter un membre
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </div>);

}