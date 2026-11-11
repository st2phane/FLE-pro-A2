import { JobOffer } from '../types/fle';

export const JOB_OFFERS_LIST: JobOffer[] = [
  // 1. RESTAURATION
  {
    id: 'off_restauration',
    domain: 'restauration',
    domainTitle: 'Restauration',
    jobTitle: 'Aide de cuisine / Plongeur polyvalent (H/F)',
    companyName: 'Brasserie Le Comptoir du Chef',
    location: 'Lyon (69002)',
    contractType: 'CDI',
    workingHours: '35h / semaine (coupure midi et soir, repos dimanche et lundi)',
    salary: 'SMIC hôtelier + primes de service + mutuelle d’entreprise',
    missions: [
      'Assurer la plonge de la vaisselle, des casseroles et des bacs gastro à la machine et manuellement.',
      'Aider les cuisiniers lors de la préparation des légumes (épluchage, découpe simple).',
      'Veiller au respect scrupuleux de la propreté des plans de travail et de la marche en avant.',
      'Gérer l’évacuation des poubelles et le nettoyage complet des sols en fin de service.'
    ],
    requiredProfile: [
      'Personne motivée, dynamique et capable de travailler à un rythme soutenu pendant le coup de feu.',
      'Sens de l’hygiène alimentaire (connaissance des normes HACCP appréciée).',
      'Débutants acceptés avec grande envie d’apprendre et esprit d’équipe.'
    ],
    synonymQuestions: [
      {
        id: 'syn_res_01',
        termInOffer: 'polyvalent',
        question: 'Dans l’offre d’emploi, que signifie le mot « polyvalent » ?',
        options: [
          'Capable d’accomplir différentes tâches variées (plonge, aide à la découpe, nettoyage)',
          'Qui travaille uniquement la nuit',
          'Qui possède son propre véhicule',
          'Qui parle plusieurs langues étrangères'
        ],
        correctIndex: 0,
        explanation: 'Être polyvalent signifie pouvoir passer facilement d’une tâche à une autre selon les besoins de l’équipe.'
      },
      {
        id: 'syn_res_02',
        termInOffer: 'rythme soutenu',
        question: 'Que signifie l’expression « travailler à un rythme soutenu » ?',
        options: [
          'Travailler de manière rapide, énergique et soutenue sans perdre de temps',
          'Être assis tranquillement pour observer',
          'Écouter de la musique pendant la préparation',
          'Prendre de longues pauses régulières'
        ],
        correctIndex: 0,
        explanation: 'En restauration, le coup de feu demande de la rapidité et une bonne concentration.'
      }
    ],
    comprehensionQuestions: [
      {
        id: 'comp_res_01',
        question: 'Quel est le type de contrat et le volume horaire proposé ?',
        options: [
          'Un contrat à durée indéterminée (CDI) de 35 heures par semaine',
          'Un contrat à durée déterminée (CDD) de 20 heures par semaine',
          'Un stage non rémunéré de 3 mois',
          'Un contrat d’intérim d’un week-end'
        ],
        correctIndex: 0,
        explanation: 'L’offre indique clairement : CDI, 35h / semaine.'
      }
    ],
    letterAdvice: [
      'Précisez que vous êtes ponctuel(le) et résistant(e) au travail physique.',
      'Mentionnez votre rigueur pour l’hygiène et la propreté.',
      'Indiquez votre enthousiasme pour l’ambiance d’équipe en cuisine.'
    ],
    letterTemplate: {
      recipient: 'À l’attention du Chef de cuisine / Responsable du recrutement',
      subject: 'Candidature au poste d’Aide de cuisine / Plongeur polyvalent (Réf : REST-69)',
      intro: 'Madame, Monsieur,\nActuellement à la recherche d’un emploi dans la restauration, j’ai l’honneur de vous proposer ma candidature pour le poste d’aide de cuisine et plongeur au sein de votre brasserie.',
      missionsHook: 'Motivé(e), dynamique et rigoureux(se), je suis habitué(e) au travail en équipe et au respect strict des consignes d’hygiène et de propreté.',
      competencesHook: 'Je suis prêt(e) à m’investir pleinement lors des services de midi et du soir, et à seconder efficacement votre brigade.',
      politeClosing: 'Dans l’attente d’un entretien pour vous exprimer ma motivation, je vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.'
    }
  },

  // 2. SERVICE À LA PERSONNE & ENTRETIEN
  {
    id: 'off_service_personne',
    domain: 'service_personne',
    domainTitle: 'Service à la personne & Entretien',
    jobTitle: 'Auxiliaire de vie à domicile / Aide-ménager(ère) (H/F)',
    companyName: 'Association Domicile & Bienveillance',
    location: 'Marseille et environs (13)',
    contractType: 'CDI',
    workingHours: 'Temps choisi (24h à 30h / semaine, planning stable)',
    salary: '12,50 € / heure + indemnités kilométriques + téléphone professionnel',
    missions: [
      'Accompagner des personnes âgées ou en situation de handicap dans les gestes de la vie courante.',
      'Aider au lever, à la préparation de repas simples et aux courses de proximité.',
      'Réaliser l’entretien courant du logement (dépoussiérage, aspiration, entretien du linge).',
      'Assurer une présence chaleureuse et rompre l’isolement social des bénéficiaires.'
    ],
    requiredProfile: [
      'Qualités humaines indispensables : empathie, patience, écoute et discrétion professionnelle.',
      'Sens de l’organisation et ponctualité exemplaire.',
      'Permis B souhaité mais déplacements possibles en transports en commun.'
    ],
    synonymQuestions: [
      {
        id: 'syn_sap_01',
        termInOffer: 'empathie',
        question: 'Quel est le synonyme du mot « empathie » exigé pour ce métier ?',
        options: [
          'Capacité à comprendre avec bienveillance les émotions et difficultés d’autrui',
          'Force musculaire pour soulever des meubles',
          'Diplôme universitaire de comptabilité',
          'Autorisation de conduire un camion'
        ],
        correctIndex: 0,
        explanation: 'L’empathie est la qualité d’écoute et de compréhension humaine essentielle pour aider une personne dépendante.'
      },
      {
        id: 'syn_sap_02',
        termInOffer: 'ponctualité',
        question: 'Que signifie être « ponctuel » ?',
        options: [
          'Arriver exactement à l’heure prévue chez les bénéficiaires',
          'Parler très fort pour se faire entendre',
          'Porter une blouse blanche',
          'Écrire vite sur son carnet'
        ],
        correctIndex: 0,
        explanation: 'La ponctualité est le respect strict des horaires fixés pour ne pas inquiéter la personne âgée.'
      }
    ],
    comprehensionQuestions: [
      {
        id: 'comp_sap_01',
        question: 'Quels avantages matériels sont mentionnés dans la rémunération de l’offre ?',
        options: [
          'Le remboursement des kilomètres parcourus et un téléphone professionnel',
          'Un appartement de fonction gratuit',
          'Une voiture de sport',
          'Des billets de train gratuits pour toute la famille'
        ],
        correctIndex: 0,
        explanation: 'L’offre précise : « indemnités kilométriques + téléphone professionnel ».'
      }
    ],
    letterAdvice: [
      'Mettez en avant vos qualités d’écoute, de patience et de politesse.',
      'Soulignez votre respect pour la pudeur et l’intimité des personnes au domicile.',
      'Expliquez que vous aimez vous rendre utile auprès des aînés.'
    ],
    letterTemplate: {
      recipient: 'À l’attention de la Responsable de secteur / Ressources Humaines',
      subject: 'Candidature au poste d’Auxiliaire de vie à domicile (Réf : SAP-13)',
      intro: 'Madame, Monsieur,\nAyant un goût prononcé pour le contact humain et l’aide aux personnes vulnérables, je souhaite vous présenter ma candidature au poste d’auxiliaire de vie au sein de votre association.',
      missionsHook: 'Patient(e), discret(ète) et ponctuel(le), j’ai à cœur d’apporter confort, bienveillance et sécurité aux personnes âgées dans leur vie quotidienne.',
      competencesHook: 'Je sais assurer avec soin l’entretien du logement, la préparation des repas et le maintien de leur autonomie avec douceur et respect.',
      politeClosing: 'Je me tiens à votre entière disposition pour un entretien et vous prie d’agréer, Madame, Monsieur, mes salutations respectueuses.'
    }
  },

  // 3. COMMERCE & LIBRE-SERVICE
  {
    id: 'off_libre_service',
    domain: 'libre_service',
    domainTitle: 'Commerce & Libre-service',
    jobTitle: 'Employé(e) commercial(e) libre-service (H/F)',
    companyName: 'Supermarché Grand Marché',
    location: 'Lille (59000)',
    contractType: 'CDI',
    workingHours: '35h / semaine (du lundi au samedi, prise de poste dès 6h00)',
    salary: 'SMIC + 13e mois + primes d’intéressement + réduction en magasin',
    missions: [
      'Réceptionner les palettes de marchandises et vérifier les bons de livraison.',
      'Mettre en rayon les produits alimentaires en respectant les dates limites (DLC).',
      'Assurer le facing soigné des rayons et l’étiquetage des prix.',
      'Accueillir et orienter les clients avec courtoisie dans les allées.'
    ],
    requiredProfile: [
      'Bonne condition physique (port de cartons et manutention avec transpalette).',
      'Rigueur, esprit méthodique et sens du service client.',
      'Débutants bienvenus, formation assurée en magasin.'
    ],
    synonymQuestions: [
      {
        id: 'syn_ls_01',
        termInOffer: 'manutention',
        question: 'Que signifie « faire de la manutention » dans un magasin ?',
        options: [
          'Déplacer, porter et ranger physiquement des cartons et des palettes',
          'Téléphoner à la banque',
          'Nettoyer les vitres du magasin',
          'Rédiger des affiches publicitaires'
        ],
        correctIndex: 0,
        explanation: 'La manutention est le déplacement manuel ou à l’aide d’un appareil (transpalette) des marchandises.'
      }
    ],
    comprehensionQuestions: [
      {
        id: 'comp_ls_01',
        question: 'À quelle heure commence le travail le matin selon l’annonce ?',
        options: [
          'Dès 6h00 le matin pour la mise en rayon avant l’arrivée des clients',
          'À 9h30 après l’ouverture',
          'À midi uniquement',
          'À 18h00 le soir'
        ],
        correctIndex: 0,
        explanation: 'L’annonce stipule : « prise de poste dès 6h00 ».'
      }
    ],
    letterAdvice: [
      'Mentionnez que vous êtes matinal(e) et disponible tôt le matin.',
      'Indiquez votre rigueur pour l’organisation des rayons et votre sens du contact client.'
    ],
    letterTemplate: {
      recipient: 'À l’attention du Directeur de magasin / Chef de secteur',
      subject: 'Candidature au poste d’Employé(e) commercial(e) libre-service (Réf : COMM-59)',
      intro: 'Madame, Monsieur,\nTrès intéressé(e) par le secteur de la grande distribution, je vous adresse ma candidature pour rejoindre votre magasin en qualité d’employé(e) de rayon.',
      missionsHook: 'Matinal(e), énergique et rigoureux(se), j’aime le travail concret d’approvisionnement et le respect des normes d’hygiène et de rotation des dates.',
      competencesHook: 'Polyvalent(e) et souriant(e), je veillerai à présenter des rayons attractifs et à renseigner agréablement votre clientèle.',
      politeClosing: 'Espérant vous rencontrer prochainement, je vous prie de recevoir, Madame, Monsieur, mes sincères salutations.'
    }
  },

  // 4. SANTÉ & SOINS
  {
    id: 'off_sante',
    domain: 'sante',
    domainTitle: 'Santé & Soins',
    jobTitle: 'Aide-soignant(e) diplômé(e) d’État ou faisant fonction (H/F)',
    companyName: 'Résidence Médicalisée Les Magnolias',
    location: 'Toulouse (31000)',
    contractType: 'CDD',
    workingHours: 'Temps plein 35h (roulement en 10h ou 7h, un week-end sur deux)',
    salary: 'Grille conventionnelle FHP + prime Ségur + reprise d’ancienneté',
    missions: [
      'Dispenser les soins d’hygiène et de confort en collaboration avec les infirmiers.',
      'Accompagner les résidents dans leurs gestes quotidiens et surveiller leur état général.',
      'Participer aux transmissions orales et écrites dans le logiciel de soins.',
      'Assurer la désinfection des chambres et le respect strict des protocoles sanitaires.'
    ],
    requiredProfile: [
      'Diplôme d’État d’aide-soignant (DEAS) ou expérience significative en EHPAD.',
      'Sens de l’écoute, douceur et esprit d’équipe pluridisciplinaire.'
    ],
    synonymQuestions: [
      {
        id: 'syn_san_01',
        termInOffer: 'pluridisciplinaire',
        question: 'Que signifie une « équipe pluridisciplinaire » dans un hôpital ou EHPAD ?',
        options: [
          'Une équipe composée de plusieurs métiers différents (médecins, infirmiers, aides-soignants, kinésithérapeutes)',
          'Une équipe où tout le monde fait le même métier',
          'Une équipe de personnes venues de la même ville',
          'Une équipe qui travaille uniquement le samedi'
        ],
        correctIndex: 0,
        explanation: 'Pluridisciplinaire signifie que plusieurs disciplines et professions collaborent pour le bien du patient.'
      }
    ],
    comprehensionQuestions: [
      {
        id: 'comp_san_01',
        question: 'À quel rythme s’effectuent les week-ends travaillés ?',
        options: [
          'Un week-end sur deux',
          'Tous les week-ends sans exception',
          'Jamais le week-end',
          'Uniquement le dimanche matin'
        ],
        correctIndex: 0,
        explanation: 'L’offre précise expressément : « un week-end sur deux ».'
      }
    ],
    letterAdvice: [
      'Mettez en avant votre respect de la déontologie, votre douceur et votre rigueur dans les soins.'
    ],
    letterTemplate: {
      recipient: 'À l’attention de la Cadre de santé / Direction des soins',
      subject: 'Candidature au poste d’Aide-soignant(e) (Réf : SOIN-31)',
      intro: 'Madame, Monsieur,\nParticulièrement sensible à la qualité de prise en charge des personnes âgées, je vous propose ma candidature pour intégrer l’équipe soignante de votre établissement.',
      missionsHook: 'Attentif(ve), bienveillant(e) et respectueux(se) des protocoles d’hygiène, j’assure avec calme et professionnalisme les soins d’aide à la toilette et au confort.',
      competencesHook: 'Mon sens aigu de l’observation et des transmissions me permet de collaborer efficacement avec l’ensemble de l’équipe infirmière.',
      politeClosing: 'Je me tiens à votre entière disposition pour tout entretien et vous prie d’agréer, Madame, Monsieur, mes salutations distinguées.'
    }
  },

  // 5. PÉRISCOLAIRE & ENFANCE
  {
    id: 'off_periscolaire',
    domain: 'periscolaire',
    domainTitle: 'Périscolaire & Animation',
    jobTitle: 'Animateur / Animatrice périscolaire & garderie (H/F)',
    companyName: 'Mairie de Bordeaux - Direction de l’Éducation',
    location: 'Bordeaux (33000)',
    contractType: 'CDD',
    workingHours: 'Temps non complet 20h / semaine (lundis, mardis, jeudis, vendredis 11h30-13h30 et 16h30-18h30)',
    salary: 'Taux horaire de la fonction publique territoriale + prime de précarité',
    missions: [
      'Accueillir et encadrer les enfants d’école maternelle et élémentaire pendant la pause méridienne.',
      'Proposer des activités manuelles, sportives ou d’éveil adaptées à chaque tranche d’âge.',
      'Assurer la surveillance active de la cour de récréation et du réfectoire.',
      'Veiller au bien-être, à la sécurité physique et affective de chaque enfant.'
    ],
    requiredProfile: [
      'BAFA souhaité ou équivalent, ou première expérience auprès d’enfants.',
      'Sens de l’animation, écoute, patience et fermeté bienveillante.'
    ],
    synonymQuestions: [
      {
        id: 'syn_per_01',
        termInOffer: 'pause méridienne',
        question: 'Que désigne l’expression « pause méridienne » dans les écoles ?',
        options: [
          'Le temps du déjeuner et de récréation entre la fin de matinée et la reprise d’après-midi (11h30-13h30)',
          'La sieste de 18 heures',
          'Les vacances d’été',
          'La récréation de 10h du matin'
        ],
        correctIndex: 0,
        explanation: 'La pause méridienne correspond à l’interclasse du midi (repas à la cantine et jeux surveillés).'
      }
    ],
    comprehensionQuestions: [
      {
        id: 'comp_per_01',
        question: 'Quels jours de la semaine sont concernés par cette mission périscolaire ?',
        options: [
          'Lundi, mardi, jeudi et vendredi (les jours de classe)',
          'Le samedi et dimanche uniquement',
          'Le mercredi toute la journée',
          'Pendant les vacances scolaires seulement'
        ],
        correctIndex: 0,
        explanation: 'L’offre indique : lundis, mardis, jeudis, vendredis.'
      }
    ],
    letterAdvice: [
      'Partagez votre enthousiasme pour l’animation d’activités avec les enfants et votre sens des responsabilités.'
    ],
    letterTemplate: {
      recipient: 'À l’attention de la Direction de l’Action Éducative',
      subject: 'Candidature au poste d’Animateur / Animatrice périscolaire (Réf : PERI-33)',
      intro: 'Madame, Monsieur,\nPassionné(e) par le contact avec les enfants et la transmission de valeurs citoyennes, je vous propose mes services en tant qu’animateur(trice) périscolaire au sein de vos écoles municipales.',
      missionsHook: 'Attentif(ve), créatif(ve) et garant(e) de la sécurité des élèves, je sais animer des temps de jeux calmes et veiller au respect des règles de vie collective.',
      competencesHook: 'Ma patience et ma bienveillance me permettent de créer un climat rassurant et joyeux pour les enfants comme pour leurs parents.',
      politeClosing: 'Dans l’attente de votre réponse, je vous prie d’agréer, Madame, Monsieur, l’assurance de ma considération distinguée.'
    }
  },

  // 6. BTP & CHANTIER
  {
    id: 'off_btp',
    domain: 'btp',
    domainTitle: 'BTP & Bâtiment',
    jobTitle: 'Ouvrier polyvalent du bâtiment / Manœuvre (H/F)',
    companyName: 'Entreprise Générale Sud Bâtiment',
    location: 'Montpellier (34000)',
    contractType: 'CDI',
    workingHours: '39h / semaine (du lundi au vendredi midi, panier repas inclus)',
    salary: 'Selon grille conventionnelle BTP + paniers repas + mutuelle ProBTP',
    missions: [
      'Aider à l’approvisionnement et à la préparation du chantier (déchargement, tri des matériaux).',
      'Préparer le mortier et le béton à la bétonnière, aider au coulage.',
      'Effectuer le déblaiement, l’évacuation des gravats et le nettoyage du site.',
      'Respecter scrupuleusement les consignes de sécurité et le port des EPI.'
    ],
    requiredProfile: [
      'Bonne résistance physique, ponctualité et respect strict des règles de sécurité.',
      'Capacité à travailler en équipe sous la direction du chef de chantier.',
      'Carte d’identification professionnelle BTP souhaitée (ou accompagnement à la création).'
    ],
    synonymQuestions: [
      {
        id: 'syn_btp_01',
        termInOffer: 'déblaiement',
        question: 'Que signifie « déblaiement » sur un chantier de construction ?',
        options: [
          'Action d’enlever et évacuer les gravats, débris et terres pour libérer le passage',
          'Construire un mur en briques',
          'Brancher l’électricité',
          'Prendre les mesures au mètre ruban'
        ],
        correctIndex: 0,
        explanation: 'Déblayer consiste à dégager le sol de tous ses débris pour travailler en sécurité.'
      }
    ],
    comprehensionQuestions: [
      {
        id: 'comp_btp_01',
        question: 'Quel avantage pour les repas est mentionné dans l’offre BTP ?',
        options: [
          'Une indemnité de panier repas',
          'Un cuisinier personnel sur le chantier',
          'Un accès gratuit à un restaurant gastronomique',
          'Aucun repas fourni'
        ],
        correctIndex: 0,
        explanation: 'L’offre précise : « panier repas inclus / paniers repas ».'
      }
    ],
    letterAdvice: [
      'Soulignez votre sérieux, votre respect du port du casque et des chaussures de sécurité et votre ponctualité.'
    ],
    letterTemplate: {
      recipient: 'À l’attention du Conducteur de travaux / Responsable de recrutement',
      subject: 'Candidature au poste d’Ouvrier polyvalent du bâtiment (Réf : BTP-34)',
      intro: 'Madame, Monsieur,\nÀ la recherche d’un emploi stable dans le bâtiment, je vous présente ma candidature au poste d’ouvrier polyvalent au sein de votre entreprise.',
      missionsHook: 'Ponctuel, courageux et habitué au travail physique, je respecte scrupuleusement le port des EPI et les consignes transmises par le chef de chantier.',
      competencesHook: 'Je suis opérationnel pour l’approvisionnement des postes de travail, la préparation du mortier et l’entretien rigoureux des chantiers.',
      politeClosing: 'Je reste disponible pour tout entretien ou essai sur chantier et vous prie d’agréer, Madame, Monsieur, mes salutations respectueuses.'
    }
  },

  // 7. SECRÉTARIAT & ACCUEIL
  {
    id: 'off_secretariat',
    domain: 'secretariat',
    domainTitle: 'Secrétariat & Accueil',
    jobTitle: 'Assistant(e) administratif(ve) et d’accueil (H/F)',
    companyName: 'Cabinet Médical & Conseil Santé',
    location: 'Nantes (44000)',
    contractType: 'CDI',
    workingHours: '35h / semaine (horaires de bureau du lundi au vendredi 8h30-17h00)',
    salary: '1 950 € brut / mois + titres-restaurant + mutuelle prise en charge à 60%',
    missions: [
      'Assurer l’accueil physique et l’orientation des patients et visiteurs.',
      'Gérer le standard téléphonique : prise de rendez-vous, transferts et rédaction de messages clairs.',
      'Traiter le courrier entrant et sortant (affranchissement, scans et archivage des dossiers).',
      'Assister les praticiens dans la frappe de comptes-rendus simples et la gestion des plannings.'
    ],
    requiredProfile: [
      'Excellente présentation, expression orale soignée et sens affirmé de la courtoisie.',
      'Maîtrise des outils bureautiques de base (Word, messagerie électronique, agenda partagé).',
      'Rigueur, discrétion et respect absolu du secret professionnel.'
    ],
    synonymQuestions: [
      {
        id: 'syn_sec_01',
        termInOffer: 'secret professionnel',
        question: 'Que signifie l’obligation de respecter le « secret professionnel » ?',
        options: [
          'Interdiction stricte de divulguer à quiconque les informations médicales ou personnelles des patients',
          'Garder ses clés de bureau dans sa poche',
          'Ne jamais dire son prénom au téléphone',
          'Éteindre son ordinateur le soir'
        ],
        correctIndex: 0,
        explanation: 'Le secret professionnel est une obligation juridique et morale de confidentialité.'
      }
    ],
    comprehensionQuestions: [
      {
        id: 'comp_sec_01',
        question: 'Quels horaires de travail sont prévus pour ce poste ?',
        options: [
          'Du lundi au vendredi de 8h30 à 17h00',
          'Uniquement le soir de 20h à minuit',
          'Le samedi et dimanche toute la journée',
          'Des horaires variables chaque jour'
        ],
        correctIndex: 0,
        explanation: 'L’offre indique : « du lundi au vendredi 8h30-17h00 ».'
      }
    ],
    letterAdvice: [
      'Mettez en avant votre sens de l’organisation, votre politesse au téléphone et votre discrétion.'
    ],
    letterTemplate: {
      recipient: 'À l’attention de la Direction du cabinet / Responsable des recrutements',
      subject: 'Candidature au poste d’Assistant(e) administratif(ve) et d’accueil (Réf : ADM-44)',
      intro: 'Madame, Monsieur,\nDoté(e) d’un excellent sens du contact et d’une grande rigueur administrative, je vous soumets ma candidature pour le poste d’assistant(e) d’accueil au sein de votre cabinet.',
      missionsHook: 'Souriant(e), ponctuel(le) et à l’écoute, je sais accueillir chaleureusement les usagers et gérer le standard téléphonique avec courtoisie et efficacité.',
      competencesHook: 'Ma maîtrise des outils bureautiques et mon respect strict du secret professionnel me permettront de m’intégrer rapidement à votre structure.',
      politeClosing: 'Je reste à votre entière disposition pour un entretien et vous prie d’agréer, Madame, Monsieur, l’expression de mes salutations distinguées.'
    }
  }
];
