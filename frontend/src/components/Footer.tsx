import React from 'react';
import { Link } from 'react-router-dom';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  InstagramIcon } from
'lucide-react';
export function Footer() {
  return (
    <footer id="contact" className="bg-globus-blue-dark text-white pt-20 pb-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Col 1: About */}
          <div>
            <img
              src="/globusLogo.jpg"
              alt="Globus Engineering SARL"
              className="h-20 object-contain mb-6 bg-white p-3 rounded-lg" />
            
            <p className="font-opensans text-seconda-blue mb-6 leading-relaxed">
              Globus Engineering SARL est votre partenaire de confiance pour
              tous vos projets de construction "clé en main". Solidité,
              esthétique et respect des délais.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-globus-orange transition-colors">
                
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-globus-orange transition-colors">
                
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-globus-orange transition-colors">
                
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-globus-orange transition-colors">
                
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Col 2: Liens Rapides */}
          <div>
            <h4 className="font-montserrat font-bold text-xl mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-globus-orange rounded-full"></div>
              Liens Rapides
            </h4>
            <ul className="space-y-3 font-opensans text-seconda-blue">
              <li>
                <Link
                  to="/"
                  className="hover:text-globus-orange transition-colors">
                  
                  Accueil
                </Link>
              </li>
              <li>
                <Link
                  to="/a-propos"
                  className="hover:text-globus-orange transition-colors">
                  
                  À Propos de nous
                </Link>
              </li>
              <li>
                <Link
                  to="/projets"
                  className="hover:text-globus-orange transition-colors">
                  
                  Notre Portfolio
                </Link>
              </li>
              <li>
                <Link
                  to="/blog"
                  className="hover:text-globus-orange transition-colors">
                  
                  Blog & Actualités
                </Link>
              </li>
              <li>
                <Link
                  to="/aide"
                  className="hover:text-globus-orange transition-colors">
                  
                  Centre d'Aide & FAQ
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="hover:text-globus-orange transition-colors">
                  
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Services */}
          <div>
            <h4 className="font-montserrat font-bold text-xl mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-globus-orange rounded-full"></div>
              Nos Services
            </h4>
            <ul className="space-y-3 font-opensans text-seconda-blue">
              <li>
                <Link
                  to="/services/construction-batiments"
                  className="hover:text-globus-orange transition-colors">
                  
                  Construction Résidentielle
                </Link>
              </li>
              <li>
                <Link
                  to="/services/construction-batiments"
                  className="hover:text-globus-orange transition-colors">
                  
                  Bâtiments Commerciaux
                </Link>
              </li>
              <li>
                <Link
                  to="/services/conception-architecturale"
                  className="hover:text-globus-orange transition-colors">
                  
                  Conception Architecturale
                </Link>
              </li>
              <li>
                <Link
                  to="/services/genie-civil"
                  className="hover:text-globus-orange transition-colors">
                  
                  Génie Civil
                </Link>
              </li>
              <li>
                <Link
                  to="/services/renovation-amenagement"
                  className="hover:text-globus-orange transition-colors">
                  
                  Rénovation & Réhabilitation
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Newsletter */}
          <div>
            <h4 className="font-montserrat font-bold text-xl mb-6 flex items-center gap-2">
              <div className="w-2 h-2 bg-globus-orange rounded-full"></div>
              Contact
            </h4>
            <ul className="space-y-4 font-opensans text-seconda-blue mb-8">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-globus-orange flex-shrink-0 mt-1" />
                <span>
                  123 Avenue de la Construction, Quartier des Affaires, Ville
                </span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-globus-orange flex-shrink-0" />
                <span>+33 1 23 45 67 89</span>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="w-5 h-5 text-globus-orange flex-shrink-0" />
                <span>contact@globus-btp.com</span>
              </li>
            </ul>

            <h5 className="font-montserrat font-bold mb-3">Newsletter</h5>
            <form className="flex" onSubmit={(e) => e.preventDefault()}>
              <input
                type="email"
                placeholder="Votre email"
                className="bg-white/10 border border-white/20 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-globus-orange font-opensans text-sm" />
              
              <button
                type="submit"
                className="bg-globus-orange hover:bg-globus-orange-hover px-4 py-2 rounded-r-lg font-montserrat font-bold transition-colors">
                
                OK
              </button>
            </form>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm font-opensans text-seconda-blue/60">
          <p>
            &copy; {new Date().getFullYear()} Globus Engineering SARL. Tous
            droits réservés.
          </p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <Link
              to="/mentions-legales"
              className="hover:text-white transition-colors">
              
              Mentions Légales
            </Link>
            <Link
              to="/politique-de-confidentialite"
              className="hover:text-white transition-colors">
              
              Politique de Confidentialité
            </Link>
            <Link
              to="/connexion"
              className="hover:text-white transition-colors">
              
              Espace Client
            </Link>
          </div>
        </div>
      </div>
    </footer>);

}