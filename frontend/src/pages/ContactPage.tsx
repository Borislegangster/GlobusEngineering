import React, { useEffect, useState, lazy } from 'react';
import { motion } from 'framer-motion';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  SendIcon,
  CheckCircleIcon } from
'lucide-react';
import { SEOMeta } from '../components/SEOMeta';

export function ContactPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  const [formStatus, setFormStatus] = useState<
    'idle' | 'submitting' | 'success' | 'error'>(
    'idle');
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');
    // Simulate API call
    setTimeout(() => {
      setFormStatus('success');
    }, 1500);
  };
  return (
    <div className="pt-28 pb-0 bg-globus-light min-h-screen flex flex-col">
      <SEOMeta title="Contactez-nous - Globus Engineering" description="Demandez un devis, discutez de votre projet de construction ou posez-nous vos questions." />
      <div className="container mx-auto px-4 mb-16 flex-grow">
        <div className="text-center mb-16">
          <motion.h1
            initial={{
              opacity: 0,
              y: 20
            }}
            animate={{
              opacity: 1,
              y: 0
            }}
            className="text-4xl md:text-5xl font-montserrat font-extrabold text-globus-blue-dark mb-4">
            
            Contactez-nous
          </motion.h1>
          <motion.div
            initial={{
              opacity: 0,
              scale: 0.8
            }}
            animate={{
              opacity: 1,
              scale: 1
            }}
            transition={{
              delay: 0.2
            }}
            className="h-1 w-24 bg-globus-orange mx-auto rounded-full mb-6">
          </motion.div>
          <p className="font-opensans text-lg text-globus-gray max-w-2xl mx-auto">
            Une question ? Un projet de construction ? Notre équipe est à votre
            disposition pour vous accompagner.
          </p>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-6xl mx-auto">
          {/* Contact Info (Left) */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              delay: 0.3
            }}
            className="w-full lg:w-1/3 space-y-8">
            
            <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="font-montserrat font-bold text-2xl text-globus-blue-dark mb-8">
                Nos Coordonnées
              </h3>

              <ul className="space-y-6">
                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-globus-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MapPinIcon className="w-6 h-6 text-globus-orange" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-globus-blue-dark mb-1">
                      Siège Social
                    </h4>
                    <p className="font-opensans text-globus-gray text-sm">
                      123 Avenue de la Construction
                      <br />
                      Quartier des Affaires, Ville
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-globus-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <PhoneIcon className="w-6 h-6 text-globus-orange" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-globus-blue-dark mb-1">
                      Téléphone
                    </h4>
                    <p className="font-opensans text-globus-gray text-sm">
                      Standard : +33 1 23 45 67 89
                      <br />
                      WhatsApp : +33 6 12 34 56 78
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-globus-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <MailIcon className="w-6 h-6 text-globus-orange" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-globus-blue-dark mb-1">
                      Email
                    </h4>
                    <p className="font-opensans text-globus-gray text-sm">
                      contact@globus-btp.com
                      <br />
                      devis@globus-btp.com
                    </p>
                  </div>
                </li>

                <li className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-globus-orange/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <ClockIcon className="w-6 h-6 text-globus-orange" />
                  </div>
                  <div>
                    <h4 className="font-montserrat font-bold text-globus-blue-dark mb-1">
                      Horaires
                    </h4>
                    <p className="font-opensans text-globus-gray text-sm">
                      Lundi - Vendredi : 08:00 - 18:00
                      <br />
                      Samedi : 09:00 - 13:00
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* Contact Form (Right) */}
          <motion.div
            initial={{
              opacity: 0,
              x: 30
            }}
            animate={{
              opacity: 1,
              x: 0
            }}
            transition={{
              delay: 0.4
            }}
            className="w-full lg:w-2/3">
            
            <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border border-gray-100">
              <h3 className="font-montserrat font-bold text-2xl text-globus-blue-dark mb-8">
                Envoyez-nous un message
              </h3>

              {formStatus === 'success' ?
              <motion.div
                initial={{
                  opacity: 0,
                  scale: 0.9
                }}
                animate={{
                  opacity: 1,
                  scale: 1
                }}
                className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                
                  <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
                  <h4 className="font-montserrat font-bold text-xl text-green-800 mb-2">
                    Message envoyé avec succès !
                  </h4>
                  <p className="font-opensans text-green-700">
                    Merci de nous avoir contactés. Notre équipe commerciale vous
                    répondra sous 24h ouvrées.
                  </p>
                  <button
                  onClick={() => setFormStatus('idle')}
                  className="mt-6 bg-green-600 hover:bg-green-700 text-white font-montserrat font-bold py-2 px-6 rounded-lg transition-colors">
                  
                    Envoyer un autre message
                  </button>
                </motion.div> :

              <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                      htmlFor="name"
                      className="block font-montserrat font-semibold text-globus-blue-dark text-sm mb-2">
                      
                        Nom complet *
                      </label>
                      <input
                      type="text"
                      id="name"
                      required
                      className="w-full bg-globus-light border border-gray-200 rounded-lg px-4 py-3 font-opensans focus:outline-none focus:border-globus-orange focus:ring-1 focus:ring-globus-orange transition-colors"
                      placeholder="Jean Dupont" />
                    
                    </div>
                    <div>
                      <label
                      htmlFor="phone"
                      className="block font-montserrat font-semibold text-globus-blue-dark text-sm mb-2">
                      
                        Téléphone *
                      </label>
                      <input
                      type="tel"
                      id="phone"
                      required
                      className="w-full bg-globus-light border border-gray-200 rounded-lg px-4 py-3 font-opensans focus:outline-none focus:border-globus-orange focus:ring-1 focus:ring-globus-orange transition-colors"
                      placeholder="+33 6 00 00 00 00" />
                    
                    </div>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label
                      htmlFor="email"
                      className="block font-montserrat font-semibold text-globus-blue-dark text-sm mb-2">
                      
                        Adresse E-mail *
                      </label>
                      <input
                      type="email"
                      id="email"
                      required
                      className="w-full bg-globus-light border border-gray-200 rounded-lg px-4 py-3 font-opensans focus:outline-none focus:border-globus-orange focus:ring-1 focus:ring-globus-orange transition-colors"
                      placeholder="jean.dupont@email.com" />
                    
                    </div>
                    <div>
                      <label
                      htmlFor="subject"
                      className="block font-montserrat font-semibold text-globus-blue-dark text-sm mb-2">
                      
                        Objet de la demande *
                      </label>
                      <select
                      id="subject"
                      required
                      className="w-full bg-globus-light border border-gray-200 rounded-lg px-4 py-3 font-opensans focus:outline-none focus:border-globus-orange focus:ring-1 focus:ring-globus-orange transition-colors appearance-none">
                      
                        <option value="">Sélectionnez un motif</option>
                        <option value="devis">Demande de devis</option>
                        <option value="renseignement">
                          Renseignement général
                        </option>
                        <option value="candidature">
                          Candidature / Emploi
                        </option>
                        <option value="autre">Autre demande</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label
                    htmlFor="message"
                    className="block font-montserrat font-semibold text-globus-blue-dark text-sm mb-2">
                    
                      Votre message *
                    </label>
                    <textarea
                    id="message"
                    required
                    rows={5}
                    className="w-full bg-globus-light border border-gray-200 rounded-lg px-4 py-3 font-opensans focus:outline-none focus:border-globus-orange focus:ring-1 focus:ring-globus-orange transition-colors resize-none"
                    placeholder="Décrivez votre projet ou votre demande en détail...">
                  </textarea>
                  </div>

                  <button
                  type="submit"
                  disabled={formStatus === 'submitting'}
                  className="w-full bg-globus-orange hover:bg-globus-orange-hover text-white font-montserrat font-bold py-4 px-8 rounded-lg transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2 disabled:opacity-70 disabled:cursor-not-allowed">
                  
                    {formStatus === 'submitting' ?
                  <span className="animate-pulse">Envoi en cours...</span> :

                  <>
                        Envoyer le message <SendIcon className="w-5 h-5" />
                      </>
                  }
                  </button>
                </form>
              }
            </div>
          </motion.div>
        </div>
      </div>

      {/* Full Width Map */}
      <div className="w-full h-96 bg-gray-200 relative mt-auto">
        {/* Placeholder for iframe map */}
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1m3!1d2624.9916256937595!2d2.292292615509614!3d48.85837007928746!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e66e2964e34e2d%3A0x8ddca9ee380ef7e0!2sTour%20Eiffel!5e0!3m2!1sfr!2sfr!4v1647874587301!5m2!1sfr!2sfr"
          width="100%"
          height="100%"
          style={{
            border: 0
          }}
          allowFullScreen={false}
          loading="lazy"
          title="Localisation Globus BTP"
          className="absolute inset-0 grayscale contrast-125 opacity-80 hover:grayscale-0 hover:opacity-100 transition-all duration-700">
        </iframe>
      </div>
    </div>);

}