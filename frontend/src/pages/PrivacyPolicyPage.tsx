import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
export function PrivacyPolicyPage() {
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
            
            Politique de Confidentialité
          </motion.h1>
          <div className="h-1 w-24 bg-globus-orange mx-auto rounded-full mb-6"></div>
          <p className="font-opensans text-lg text-globus-gray">
            Comment nous collectons, utilisons et protégeons vos données
            personnelles.
          </p>
        </div>

        <div className="space-y-12 font-opensans text-globus-gray leading-relaxed">
          <section className="bg-globus-light p-8 rounded-2xl border-l-4 border-globus-orange">
            <h2 className="font-montserrat font-bold text-2xl text-globus-blue-dark mb-4">
              1. Données collectées
            </h2>
            <p className="mb-4">
              Nous collectons les données personnelles suivantes lorsque vous
              utilisez notre site :
            </p>
            <ul className="list-disc pl-6 space-y-2">
              <li>
                <strong>Via le formulaire de contact :</strong> Nom complet,
                adresse e-mail, numéro de téléphone, objet de la demande et
                contenu du message.
              </li>
              <li>
                <strong>Via le chatbot :</strong> Historique des conversations
                et informations fournies volontairement.
              </li>
              <li>
                <strong>Lors de la création d'un compte :</strong> Identifiants
                de connexion et informations de profil client.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-montserrat font-bold text-2xl text-globus-blue-dark mb-4">
              2. Finalité du traitement
            </h2>
            <p>
              Vos données sont collectées et traitées pour les finalités
              suivantes :
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Répondre à vos demandes de devis et d'information.</li>
              <li>
                Gérer la relation client et le suivi de vos chantiers via
                l'espace utilisateur.
              </li>
              <li>
                Améliorer nos services et l'expérience utilisateur sur notre
                site.
              </li>
              <li>
                Vous envoyer des communications commerciales (uniquement avec
                votre consentement explicite).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-montserrat font-bold text-2xl text-globus-blue-dark mb-4">
              3. Base légale et durée de conservation
            </h2>
            <p>
              Le traitement de vos données est basé sur votre consentement,
              l'exécution d'un contrat ou notre intérêt légitime.
            </p>
            <p className="mt-4">
              Vos données personnelles sont conservées pour la durée strictement
              nécessaire à la réalisation des finalités mentionnées ci-dessus :
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>Données de contact : 3 ans après le dernier contact.</li>
              <li>
                Données clients : durée de la relation contractuelle + 10 ans
                (garantie décennale et obligations légales).
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-montserrat font-bold text-2xl text-globus-blue-dark mb-4">
              4. Droits des utilisateurs
            </h2>
            <p>
              Conformément à la réglementation en vigueur (notamment le RGPD),
              vous disposez des droits suivants concernant vos données :
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Droit d'accès :</strong> obtenir la confirmation que vos
                données sont traitées et en obtenir une copie.
              </li>
              <li>
                <strong>Droit de rectification :</strong> corriger des données
                inexactes ou incomplètes.
              </li>
              <li>
                <strong>Droit à l'effacement :</strong> demander la suppression
                de vos données.
              </li>
              <li>
                <strong>Droit à la portabilité :</strong> recevoir vos données
                dans un format structuré.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="font-montserrat font-bold text-2xl text-globus-blue-dark mb-4">
              5. Sécurité et Contact DPO
            </h2>
            <p>
              Nous mettons en œuvre des mesures techniques et organisationnelles
              appropriées pour protéger vos données contre la perte, l'accès non
              autorisé ou la divulgation.
            </p>
            <p className="mt-4">
              Pour exercer vos droits ou pour toute question relative à la
              protection de vos données, vous pouvez contacter notre Délégué à
              la Protection des Données (DPO) :<br />
              <strong>Email :</strong> dpo@globus-btp.com
              <br />
              <strong>Courrier :</strong> Globus Engineering SARL, À l'attention
              du DPO, 123 Avenue de la Construction, Douala, Cameroun.
            </p>
          </section>
        </div>
      </div>
    </div>);

}