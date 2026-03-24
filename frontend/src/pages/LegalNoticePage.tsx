import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
export function LegalNoticePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <div className="pt-28 pb-20 bg-white min-h-screen">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="text-center mb-12">
          <span className="inline-block bg-globus-light text-globus-gray px-4 py-1.5 rounded-full text-sm font-opensans mb-6 border border-gray-200">
            Dernière mise à jour : 15 mars 2026
          </span>
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
            
            Mentions Légales
          </motion.h1>
          <div className="h-1 w-24 bg-globus-orange mx-auto rounded-full mb-6"></div>
          <p className="font-opensans text-lg text-globus-gray">
            Informations légales concernant l'éditeur et l'hébergeur du site
            Globus BTP.
          </p>
        </div>

        <div className="space-y-12 font-opensans text-globus-gray leading-relaxed">
          <section className="bg-globus-light p-8 rounded-2xl border-l-4 border-globus-orange">
            <h2 className="font-montserrat font-bold text-2xl text-globus-blue-dark mb-4">
              1. Éditeur du site
            </h2>
            <p className="mb-2">Le présent site est édité par :</p>
            <ul className="list-none space-y-2 font-semibold text-globus-blue-dark">
              <li>Dénomination sociale : Globus Engineering SARL</li>
              <li>Forme juridique : SARL au capital de 500 000 FCFA</li>
              <li>RCCM : RC/DLA/2020/B/1234</li>
              <li>
                Siège social : 123 Avenue de la Construction, Quartier des
                Affaires, Douala, Cameroun
              </li>
              <li>Directeur de la publication : M. Jean-Pierre Nkoulou</li>
              <li>Contact : contact@globus-btp.com | +33 1 23 45 67 89</li>
            </ul>
          </section>

          <section>
            <h2 className="font-montserrat font-bold text-2xl text-globus-blue-dark mb-4">
              2. Hébergement
            </h2>
            <p>
              Le site est hébergé par :<br />
              <strong>OVH SAS</strong>
              <br />
              2 rue Kellermann
              <br />
              59100 Roubaix - France
              <br />
              Site web : www.ovh.com
            </p>
          </section>

          <section>
            <h2 className="font-montserrat font-bold text-2xl text-globus-blue-dark mb-4">
              3. Propriété intellectuelle
            </h2>
            <p>
              L'ensemble de ce site relève de la législation internationale sur
              le droit d'auteur et la propriété intellectuelle. Tous les droits
              de reproduction sont réservés, y compris pour les documents
              téléchargeables et les représentations iconographiques et
              photographiques.
            </p>
            <p className="mt-4">
              La reproduction de tout ou partie de ce site sur un support
              électronique ou papier quel qu'il soit est formellement interdite
              sauf autorisation expresse du directeur de la publication.
            </p>
          </section>

          <section>
            <h2 className="font-montserrat font-bold text-2xl text-globus-blue-dark mb-4">
              4. Limitation de responsabilité
            </h2>
            <p>
              Globus Engineering SARL s'efforce d'assurer au mieux de ses
              possibilités, l'exactitude et la mise à jour des informations
              diffusées sur ce site, dont elle se réserve le droit de corriger,
              à tout moment et sans préavis, le contenu.
            </p>
            <p className="mt-4">
              Toutefois, Globus Engineering SARL ne peut garantir l'exactitude,
              la précision ou l'exhaustivité des informations mises à la
              disposition sur ce site. En conséquence, Globus Engineering SARL
              décline toute responsabilité pour toute imprécision, inexactitude
              ou omission portant sur des informations disponibles sur le site.
            </p>
          </section>
        </div>
      </div>
    </div>);

}