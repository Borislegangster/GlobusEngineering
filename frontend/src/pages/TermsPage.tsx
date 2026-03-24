import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
export function TermsPage() {
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
            
            Termes et Conditions
          </motion.h1>
          <div className="h-1 w-24 bg-globus-orange mx-auto rounded-full mb-6"></div>
          <p className="font-opensans text-lg text-globus-gray">
            Conditions Générales d'Utilisation du site et Conditions Générales
            de Service.
          </p>
        </div>

        <div className="space-y-12 font-opensans text-globus-gray leading-relaxed">
          <section className="bg-globus-light p-8 rounded-2xl border-l-4 border-globus-orange">
            <h2 className="font-montserrat font-bold text-2xl text-globus-blue-dark mb-4">
              1. Objet
            </h2>
            <p>
              Les présentes Conditions Générales ont pour objet de définir les
              modalités de mise à disposition des services du site Globus BTP,
              ainsi que les conditions d'utilisation du site par l'Utilisateur
              et les conditions générales applicables aux prestations de
              services de construction et de génie civil proposées par Globus
              Engineering SARL.
            </p>
          </section>

          <section>
            <h2 className="font-montserrat font-bold text-2xl text-globus-blue-dark mb-4">
              2. Acceptation des CGU
            </h2>
            <p>
              L'accès et l'utilisation du site sont soumis à l'acceptation et au
              respect des présentes Conditions Générales. En naviguant sur le
              site, l'Utilisateur est présumé connaître et accepter sans réserve
              les présentes conditions.
            </p>
          </section>

          <section>
            <h2 className="font-montserrat font-bold text-2xl text-globus-blue-dark mb-4">
              3. Services proposés et Conditions de devis
            </h2>
            <p>
              Globus Engineering SARL propose des services de construction
              résidentielle, commerciale, de génie civil et de rénovation.
            </p>
            <p className="mt-4">
              <strong>Devis :</strong> Les demandes de devis effectuées via le
              site sont gratuites et sans engagement. Un devis n'acquiert valeur
              contractuelle qu'après signature par le Client et versement de
              l'acompte stipulé. La validité d'un devis est généralement de 30
              jours, sauf mention contraire.
            </p>
          </section>

          <section>
            <h2 className="font-montserrat font-bold text-2xl text-globus-blue-dark mb-4">
              4. Responsabilités
            </h2>
            <p>
              <strong>Responsabilité de l'éditeur :</strong> Globus Engineering
              SARL s'engage à mettre en œuvre tous les moyens nécessaires pour
              garantir un accès continu au site. Toutefois, sa responsabilité ne
              saurait être engagée en cas de force majeure ou de faits
              indépendants de sa volonté (pannes, maintenance).
            </p>
            <p className="mt-4">
              <strong>Responsabilité dans l'exécution des travaux :</strong> Les
              responsabilités liées à l'exécution des chantiers sont régies par
              les contrats spécifiques signés avec les clients et sont couvertes
              par nos assurances professionnelles (notamment la garantie
              décennale).
            </p>
          </section>

          <section>
            <h2 className="font-montserrat font-bold text-2xl text-globus-blue-dark mb-4">
              5. Droit applicable et litiges
            </h2>
            <p>
              Les présentes Conditions Générales sont soumises au droit
              applicable au siège social de l'entreprise. En cas de litige, et à
              défaut d'accord amiable, les tribunaux compétents du ressort du
              siège social de Globus Engineering SARL seront seuls compétents.
            </p>
          </section>
        </div>
      </div>
    </div>);

}