import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
export function CookiePolicyPage() {
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
            
            Politique des Cookies
          </motion.h1>
          <div className="h-1 w-24 bg-globus-orange mx-auto rounded-full mb-6"></div>
          <p className="font-opensans text-lg text-globus-gray">
            Informations sur l'utilisation des cookies sur notre site web.
          </p>
        </div>

        <div className="space-y-12 font-opensans text-globus-gray leading-relaxed">
          <section className="bg-globus-light p-8 rounded-2xl border-l-4 border-globus-orange">
            <h2 className="font-montserrat font-bold text-2xl text-globus-blue-dark mb-4">
              1. Qu'est-ce qu'un cookie ?
            </h2>
            <p>
              Un cookie est un petit fichier texte déposé sur votre terminal
              (ordinateur, tablette, smartphone) lors de la visite d'un site
              web. Il permet au site de mémoriser vos actions et préférences
              (telles que la connexion, la langue, la taille de la police et
              d'autres préférences d'affichage) pendant une durée donnée.
            </p>
          </section>

          <section>
            <h2 className="font-montserrat font-bold text-2xl text-globus-blue-dark mb-4">
              2. Les cookies que nous utilisons
            </h2>
            <p className="mb-4">
              Notre site utilise différents types de cookies :
            </p>

            <div className="space-y-6">
              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                <h3 className="font-montserrat font-bold text-lg text-globus-blue-dark mb-2">
                  Cookies Strictement Nécessaires (Fonctionnels)
                </h3>
                <p>
                  Ces cookies sont indispensables au bon fonctionnement du site.
                  Ils vous permettent de naviguer et d'utiliser des
                  fonctionnalités essentielles, comme l'accès à votre espace
                  utilisateur sécurisé ou la mémorisation de votre consentement
                  aux cookies (ex: <code>globus-cookie-consent</code>).
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                <h3 className="font-montserrat font-bold text-lg text-globus-blue-dark mb-2">
                  Cookies Analytiques
                </h3>
                <p>
                  Nous utilisons des outils comme Google Analytics pour
                  collecter des informations anonymes sur la façon dont les
                  visiteurs utilisent notre site (pages les plus visitées, temps
                  passé, etc.). Cela nous aide à améliorer l'ergonomie et le
                  contenu du site.
                </p>
              </div>

              <div className="bg-white border border-gray-200 p-6 rounded-xl shadow-sm">
                <h3 className="font-montserrat font-bold text-lg text-globus-blue-dark mb-2">
                  Cookies Publicitaires
                </h3>
                <p>
                  Actuellement, Globus BTP n'utilise{' '}
                  <strong>aucun cookie publicitaire</strong> ou de ciblage tiers
                  sur ce site.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-montserrat font-bold text-2xl text-globus-blue-dark mb-4">
              3. Gestion et désactivation des cookies
            </h2>
            <p>
              Lors de votre première visite, un bandeau vous informe de la
              présence de cookies et vous invite à indiquer votre choix.
            </p>
            <p className="mt-4">
              Vous pouvez à tout moment configurer votre navigateur pour refuser
              l'installation des cookies :
            </p>
            <ul className="list-disc pl-6 space-y-2 mt-4">
              <li>
                <strong>Chrome :</strong> Paramètres &gt; Confidentialité et
                sécurité &gt; Cookies et autres données de site.
              </li>
              <li>
                <strong>Firefox :</strong> Options &gt; Vie privée et sécurité
                &gt; Cookies et données de sites.
              </li>
              <li>
                <strong>Safari :</strong> Préférences &gt; Confidentialité &gt;
                Bloquer tous les cookies.
              </li>
              <li>
                <strong>Edge :</strong> Paramètres &gt; Cookies et autorisations
                de site.
              </li>
            </ul>
            <p className="mt-4 text-sm italic">
              Attention : la désactivation des cookies fonctionnels peut altérer
              votre expérience de navigation sur notre site.
            </p>
          </section>

          <section>
            <h2 className="font-montserrat font-bold text-2xl text-globus-blue-dark mb-4">
              4. Durée de conservation
            </h2>
            <p>
              Les cookies déposés sur votre terminal sont conservés pour une
              durée maximale de 13 mois à compter de leur premier dépôt. À
              l'expiration de ce délai, votre consentement sera à nouveau
              recueilli.
            </p>
          </section>
        </div>
      </div>
    </div>);

}