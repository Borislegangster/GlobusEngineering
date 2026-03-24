import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  SearchIcon,
  SendIcon,
  PaperclipIcon,
  CalendarIcon,
  VideoIcon,
  ClockIcon } from
'lucide-react';
const conversations = [
{
  id: 1,
  name: 'Ing. Paul Mbarga',
  role: 'Chef de projet',
  initial: 'PM',
  lastMsg: 'Les fondations sont terminées, nous attaquons...',
  time: '10:30',
  unread: 2,
  active: true
},
{
  id: 2,
  name: 'Support Globus',
  role: 'Assistance',
  initial: 'SG',
  lastMsg: 'Votre facture a bien été générée.',
  time: 'Hier',
  unread: 0,
  active: false
},
{
  id: 3,
  name: 'Mme. Claire Fotso',
  role: 'Architecte',
  initial: 'CF',
  lastMsg: 'Voici les options pour le carrelage.',
  time: 'Lun.',
  unread: 0,
  active: false
}];

const messagesData: Record<number, any[]> = {
  1: [
  {
    id: 1,
    sender: 'them',
    text: "Bonjour M. Talla, j'espère que vous allez bien.",
    time: '10:15'
  },
  {
    id: 2,
    sender: 'them',
    text: "Je vous informe que le coulage des fondations s'est terminé hier avec succès.",
    time: '10:16'
  },
  {
    id: 3,
    sender: 'me',
    text: 'Bonjour Paul. Excellente nouvelle ! Avez-vous pu prendre quelques photos ?',
    time: '10:20'
  },
  {
    id: 4,
    sender: 'them',
    text: 'Oui tout à fait, je viens de les uploader dans l\'onglet "Suivi de Chantier".',
    time: '10:25'
  },
  {
    id: 5,
    sender: 'them',
    text: "Les fondations sont terminées, nous attaquons l'élévation des murs la semaine prochaine.",
    time: '10:30'
  }],

  2: [
  {
    id: 1,
    sender: 'them',
    text: "Bonjour, votre facture #3 a été générée et est disponible dans l'onglet Finances.",
    time: 'Hier 14:00'
  },
  {
    id: 2,
    sender: 'me',
    text: 'Merci, je la télécharge de suite.',
    time: 'Hier 14:30'
  },
  {
    id: 3,
    sender: 'them',
    text: "N'hésitez pas si vous avez des questions concernant le règlement.",
    time: 'Hier 14:35'
  }],

  3: [
  {
    id: 1,
    sender: 'them',
    text: "Bonjour M. Talla, voici les 3 options pour le carrelage du salon disponibles dans l'onglet Documents > Validations.",
    time: 'Lun. 09:00'
  },
  {
    id: 2,
    sender: 'me',
    text: 'Merci Claire, je vais étudier ça ce week-end avec mon épouse.',
    time: 'Lun. 10:15'
  },
  {
    id: 3,
    sender: 'them',
    text: 'Parfait, prenez votre temps. La deadline pour la commande est le 30 août.',
    time: 'Lun. 10:30'
  }]

};
export function ClientMessages() {
  const [activeConvId, setActiveConvId] = useState(1);
  const activeConv =
  conversations.find((c) => c.id === activeConvId) || conversations[0];
  const activeMessages = messagesData[activeConvId] || [];
  return (
    <div className="max-w-7xl mx-auto h-[calc(100vh-8rem)] flex flex-col lg:flex-row gap-6">
      {/* Left Panel: Conversations & Appointments */}
      <div className="w-full lg:w-1/3 flex flex-col gap-6 h-full">
        {/* Conversations List */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col flex-1 overflow-hidden">
          <div className="p-4 border-b border-gray-100">
            <h2 className="font-montserrat font-bold text-lg text-globus-blue-dark mb-4">
              Messagerie
            </h2>
            <div className="relative">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Rechercher..."
                className="w-full bg-globus-light border border-gray-200 rounded-lg pl-9 pr-4 py-2 text-sm font-opensans focus:outline-none focus:border-globus-orange" />
              
            </div>
          </div>

          <div className="flex-1 overflow-y-auto">
            {conversations.map((conv) =>
            <div
              key={conv.id}
              onClick={() => setActiveConvId(conv.id)}
              className={`p-4 border-b border-gray-50 cursor-pointer transition-colors flex items-start gap-3 ${activeConvId === conv.id ? 'bg-globus-blue/5 border-l-4 border-l-globus-blue' : 'hover:bg-gray-50 border-l-4 border-l-transparent'}`}>
              
                <div className="w-10 h-10 rounded-full bg-globus-blue-dark text-white flex items-center justify-center font-montserrat font-bold text-sm shrink-0">
                  {conv.initial}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-baseline mb-1">
                    <h4 className="font-montserrat font-bold text-sm text-globus-blue-dark truncate">
                      {conv.name}
                    </h4>
                    <span className="text-xs text-gray-400 shrink-0">
                      {conv.time}
                    </span>
                  </div>
                  <p className="text-xs text-globus-orange font-semibold mb-1">
                    {conv.role}
                  </p>
                  <p
                  className={`text-sm truncate font-opensans ${conv.unread > 0 ? 'text-globus-blue-dark font-semibold' : 'text-globus-gray'}`}>
                  
                    {conv.lastMsg}
                  </p>
                </div>
                {conv.unread > 0 &&
              <div className="w-5 h-5 rounded-full bg-globus-orange text-white flex items-center justify-center text-xs font-bold shrink-0 mt-4">
                    {conv.unread}
                  </div>
              }
              </div>
            )}
          </div>
        </div>

        {/* Appointments Card */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 shrink-0">
          <h3 className="font-montserrat font-bold text-globus-blue-dark mb-4 flex items-center gap-2">
            <CalendarIcon className="w-5 h-5 text-globus-orange" /> Réunions
          </h3>

          <div className="bg-globus-light rounded-xl p-4 border border-gray-200 mb-4">
            <p className="font-montserrat font-bold text-sm text-globus-blue-dark mb-1">
              Prochaine visite de chantier
            </p>
            <div className="flex items-center gap-2 text-sm text-globus-gray font-opensans mb-3">
              <ClockIcon className="w-4 h-4" /> 15 Août 2024 à 10h00
            </div>
            <button className="w-full bg-blue-50 hover:bg-blue-100 text-globus-blue font-semibold py-2 rounded-lg text-sm flex items-center justify-center gap-2 transition-colors">
              <VideoIcon className="w-4 h-4" /> Rejoindre sur Zoom
            </button>
          </div>

          <button className="w-full border border-globus-orange text-globus-orange hover:bg-globus-orange hover:text-white font-montserrat font-bold py-2 rounded-lg text-sm transition-colors">
            Planifier un rendez-vous
          </button>
        </div>
      </div>

      {/* Right Panel: Chat Area */}
      <div className="w-full lg:w-2/3 bg-white rounded-2xl shadow-sm border border-gray-100 flex flex-col h-full overflow-hidden">
        {/* Chat Header */}
        <div className="p-4 border-b border-gray-100 flex items-center gap-4 bg-white z-10">
          <div className="w-12 h-12 rounded-full bg-globus-blue-dark text-white flex items-center justify-center font-montserrat font-bold text-lg shrink-0">
            {activeConv.initial}
          </div>
          <div>
            <h2 className="font-montserrat font-bold text-lg text-globus-blue-dark">
              {activeConv.name}
            </h2>
            <p className="text-sm text-green-500 font-semibold flex items-center gap-1">
              <span className="w-2 h-2 rounded-full bg-green-500"></span> En
              ligne
            </p>
          </div>
        </div>

        {/* Messages Area */}
        <div className="flex-1 overflow-y-auto p-6 bg-gray-50/50 space-y-6 flex flex-col">
          <div className="text-center">
            <span className="bg-gray-200 text-gray-500 text-xs px-3 py-1 rounded-full font-opensans">
              Aujourd'hui
            </span>
          </div>

          {activeMessages.map((msg) =>
          <motion.div
            initial={{
              opacity: 0,
              y: 10
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            key={msg.id}
            className={`flex ${msg.sender === 'me' ? 'justify-end' : 'justify-start'}`}>
            
              <div
              className={`max-w-[75%] rounded-2xl px-5 py-3 shadow-sm ${msg.sender === 'me' ? 'bg-globus-orange text-white rounded-tr-none' : 'bg-white border border-gray-100 text-globus-blue-dark rounded-tl-none'}`}>
              
                <p className="font-opensans text-sm leading-relaxed">
                  {msg.text}
                </p>
                <p
                className={`text-[10px] mt-1 text-right ${msg.sender === 'me' ? 'text-white/70' : 'text-gray-400'}`}>
                
                  {msg.time}
                </p>
              </div>
            </motion.div>
          )}

          {/* Typing Indicator (only for conv 1) */}
          {activeConvId === 1 &&
          <motion.div
            initial={{
              opacity: 0
            }}
            animate={{
              opacity: 1
            }}
            className="flex justify-start mt-auto pt-4">
            
              <div className="bg-white border border-gray-100 rounded-2xl rounded-tl-none px-4 py-3 shadow-sm flex items-center gap-2">
                <span
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{
                  animationDelay: '0ms'
                }}>
              </span>
                <span
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{
                  animationDelay: '150ms'
                }}>
              </span>
                <span
                className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                style={{
                  animationDelay: '300ms'
                }}>
              </span>
                <span className="text-xs text-gray-400 font-opensans ml-2 italic">
                  Paul écrit...
                </span>
              </div>
            </motion.div>
          }
        </div>

        {/* Input Area */}
        <div className="p-4 bg-white border-t border-gray-100">
          <div className="flex items-end gap-2">
            <button className="p-3 text-gray-400 hover:text-globus-blue transition-colors rounded-full hover:bg-gray-100 shrink-0">
              <PaperclipIcon className="w-5 h-5" />
            </button>
            <textarea
              rows={1}
              placeholder="Écrivez votre message..."
              className="flex-1 bg-globus-light border border-gray-200 rounded-2xl px-4 py-3 font-opensans text-sm focus:outline-none focus:border-globus-orange focus:ring-1 focus:ring-globus-orange resize-none max-h-32">
            </textarea>
            <button className="p-3 bg-globus-orange hover:bg-globus-orange-hover text-white rounded-full transition-colors shadow-md shrink-0">
              <SendIcon className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </div>);

}