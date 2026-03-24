# PLAN D'ACTION DÉTAILLÉ : PLATEFORME GLOBUS BTP

Conformément à la vision stratégique et aux spécifications techniques de Globus Engineering SARL, ce document détaille les étapes chronologiques de développement du projet. Le projet sera structuré sous la forme d'un monorepo contenant le front-end (Vite + React), le back-end (FastAPI) et l'application mobile (React Native).

## Étape 0 : Initialisation et Configuration Globale (Architecture Monorepo)
*Mise en place des fondations techniques du projet.*

- **0.1. Structuration du Monorepo :** Organisation des dossiers (`/frontend` existant, création de `/backend` et `/mobile`).
- **0.2. Initialisation du Backend :** Configuration de base avec FastAPI (Python) dans `/backend`.
- **0.3. Initialisation de l'Application Mobile :** Configuration avec React Native (ou Expo) dans `/mobile`.
- **0.4. Infrastructure de Données :** Déploiement local (Docker Compose) de PostgreSQL pour la base de données centralisée.
- **0.5. Stockage de Fichiers (GED) :** Configuration initiale d'Amazon S3 (ou équivalent local comme MinIO pour le dev) avec prise en charge des URLs signées.
- **0.6. Design System Frontend :** Application de la charte graphique (Bleu Globus `#1D4ED8`, Orange Globus `#F97316`, Typographie Montserrat/Open Sans) dans la configuration Tailwind de Vite. Mise en place du mode sombre (Dark Mode).

---

## Phase 1 : Site Web Vitrine & Acquisition (Front-Office Public)
*Objectif : Attirer des prospects et générer des leads qualifiés.*

- **1.1. Pages Statiques et Dynamiques (Frontend) :** [DÉJÀ RÉALISÉ EN FRONT] Finalisation des vues Accueil, À Propos, Services, Portfolio, Blog, et Contact. Les intégrations frontend sont déjà en place via Vite + React. Reste à connecter au back-office si nécessaire.
- **1.2. Widgets Interactifs :** Intégration de la Pop-up WhatsApp.
- **1.3. Chatbot IA "Estimateur de Budget" :**
  - *Backend :* Création des endpoints FastAPI et intégration de l'IA.
  - *Frontend :* Interface conversationnelle du Chatbot.
- **1.4. Optimisation SEO & PWA :**
  - Intégration des balises Meta, du Sitemap, et de Schema.org (LocalBusiness).
  - Configuration de l'application en Progressive Web App (PWA).
- **1.5. Webmarketing & Tracking :** Installation et configuration du Pixel Facebook et de Google Analytics 4 (GA4) pour le reciblage.
- **1.6. Tests et Validation Phase 1 :** Tests multi-supports (Mobile-First) et validation des performances.

---

## Phase 2 : Espace Client Premium (Focus Diaspora & Transparence)
*Objectif : Fidéliser, rassurer et gérer la relation financière et administrative avec le client.*
*(Note : Les interfaces Frontend de base (Dashboard, Documents, Finances, Planning, SAV) sont déjà intégrées dans `/frontend/src/pages/client`)*

- **2.1. Authentification et Création de Compte (Workflow Sécurisé) :**
  - Mise en place du système de connexion sécurisé (JWT, 2FA, mots de passe hashés).
  - **Création de compte :** Le client ne s'inscrit pas de lui-même. C'est le Chef de Projet qui crée le profil du client (nom, email) depuis le module ERP/Admin.
  - **Invitation :** Le système envoie automatiquement un email d'invitation sécurisé avec un lien unique à usage unique.
  - **Activation :** Le client clique sur le lien, configure son mot de passe personnalisé, et accède à son espace privé.
- **2.2. Dashboard Global & Suivi de Chantier :**
  - Connexion des interfaces existantes (jauge de progression, dates de livraison) aux données du backend.
  - Timeline interactive avec galeries photos HD commentées.
- **2.3. Vues Immersives (Innovation) :**
  - Intégration de Three.js / WebGL dans Vite pour l'affichage de modèles 3D par photogrammétrie (Vue Drone).
  - Intégration du flux vidéo des caméras IP (Caméra Live) et visites virtuelles 360°.
- **2.4. Gestion Financière & Paiement :**
  - Connexion des vues financières aux données de facturation (Jauge budgétaire, appels de fonds).
  - Intégration des passerelles de paiement : Stripe (Cartes internationales) et API Mobile Money. Conformité PCI-DSS (Tokens).
- **2.5. Dossier Tranquillité (Administratif & Foncier) :**
  - Module de suivi des démarches légales (Certificat, Permis, Acte notarié).
  - Intégration d'un système de signature électronique avec vérification OTP.
- **2.6. Messagerie Sécurisée Client-Chef de Projet :** Raccordement du chat existant en temps réel (WebSockets avec FastAPI) servant de pare-feu entre le client et le chantier.
- **2.7. Tests et Validation Phase 2 :** Tests de sécurité, de charge sur les WebSockets et validation du parcours de paiement.

---

## Phase 3 : Hub Collaboratif & Globus ERP (Opérations)
*Objectif : Maîtriser les coûts, automatiser les processus et coordonner les métiers sur le terrain.*
*(Note : Les interfaces Frontend de base de l'ERP (Dashboard, Chantiers, RH, Achats, QHSE, etc.) sont déjà en place sous `/frontend/src/pages/erp`)*

- **3.1. Le "Hub Inter-Métiers" (Web) :**
  - Connexion de l'espace collaboratif pour Architectes, Ingénieurs et Artisans.
  - Implémentation du lecteur de plans partagés.
  - *Innovation :* Système d'annotations en temps réel (Pins/marqueurs) sur les plans via WebSockets.
  - Détection de Conflits (Clash Detection) basique ou intégrée via API tierce.
- **3.2. Messagerie Inter-Métiers :** Canaux de discussion par corps d'état (façon Slack/Discord).
- **3.3. Application Mobile Terrain (React Native) :**
  - Interface ultra-simplifiée, Mode "Offline-First".
  - *Innovation IA :* Implémentation de l'enregistrement vocal et intégration API Speech-to-Text (Backend FastAPI) pour la génération automatique de rapports de chantier.
  - *Innovation Scan Spatial :* Fonctionnalité de scan de QR codes liés à des zones du chantier pour filtrer automatiquement les plans affichés.
- **3.4. Ressources Humaines & Paie :** Raccordement du module de pointage, génération des fiches de paie et export de virements.
- **3.5. Cost Control (Achats & Finances) :** Gestion du workflow complet (Demandes d'Achat -> Bons de Commande -> Bons de Livraison), suivi de la marge nette.
- **3.6. Génération Documentaire Automatique :** Endpoints Python/FastAPI pour générer dynamiquement des contrats, attestations et notes de frais en PDF.
- **3.7. Module QHSE & Portail Sous-Traitants :** Traçabilité des équipements, registre des incidents avec photos, et extranet web/mobile.
- **3.8. RBAC Avancé et Audit Trail :**
  - Finalisation de la gestion stricte des rôles (Admin, Ingénieur, Architecte, Artisan, App Mobile, Client).
  - Mise en place d'un historique inaltérable (Audit Trail) pour les validations critiques.
- **3.9. Tests, Audit et Déploiement Final :** Phase intensive de tests (End-to-End, performances, audit de sécurité global) et mise en production complète.

---
*Fin du plan d'action. En attente de l'approbation et du feu vert pour débuter l'Étape 0.*