import { ProfessionalInstruction } from '../types/fle';

export const JOB_INSTRUCTIONS_LIST: ProfessionalInstruction[] = [
  // =========================================================================
  // 1. RESTAURATION (TRADITIONNELLE & COLLECTIVE)
  // =========================================================================
  {
    id: 'inst_restauration',
    domain: 'restauration',
    domainTitle: 'Restauration (Traditionnelle & Collective)',
    jobTitle: 'Aide de cuisine / Agent de restauration',
    documentTitle: 'Protocole d’Hygiène & Sécurité Alimentaire (HACCP)',
    procedureType: 'hygiene',
    consignes: [
      {
        stepNumber: 1,
        title: 'Tenue professionnelle propre et complète',
        detail: 'Revêtez une veste propre, un tablier, un pantalon en coton, des chaussures de sécurité antidérapantes et une coiffe ou charlotte recouvrant la totalité des cheveux.',
        caution: 'Les bijoux, montres, bagues et vernis à ongles sont formellement proscrits en zone de préparation.'
      },
      {
        stepNumber: 2,
        title: 'Lavage et désinfection des mains',
        detail: 'Lavez-vous les mains au savon bactéricide tiède pendant au moins 30 secondes avant toute prise de poste, après chaque manipulation de déchets et après chaque passage aux toilettes.',
        caution: 'Séchez-vous exclusivement avec du papier à usage unique jetable (serviettes en tissu interdites).'
      },
      {
        stepNumber: 3,
        title: 'Contrôle et respect strict de la chaîne du froid',
        detail: 'Relevez matin et soir les températures des chambres froides positives (entre 0°C et +4°C) et négatives (au moins -18°C) sur la fiche de suivi affichée.',
        caution: 'Tout produit frais resté plus de 30 minutes à température ambiante doit faire l’objet d’un contrôle immédiat.'
      },
      {
        stepNumber: 4,
        title: 'Règle de la marche en avant dans l’espace et le temps',
        detail: 'Séparez impérativement les zones sales (déboîtage, épluchage des légumes terreux, plonge) des zones propres (préparation froide, dressage des assiettes).',
        caution: 'Les poubelles et déchets ne doivent jamais croiser le circuit des plats prêts à servir.'
      },
      {
        stepNumber: 5,
        title: 'Traçabilité et étiquetage obligatoire des entamés',
        detail: 'Conservez l’étiquette d’origine de chaque denrée et apposez une étiquette DLC secondaire sur tout récipient contenant un produit ouvert (date et heure d’ouverture, nom de l’opérateur).',
        caution: 'La durée de conservation maximale après ouverture est de 48 heures au froid.'
      },
      {
        stepNumber: 6,
        title: 'Nettoyage et désinfection en deux temps (fin de service)',
        detail: 'Appliquez d’abord le produit détergent pour dégraisser les plans de travail inox, rincez à l’eau claire, puis pulvérisez le désinfectant alimentaire en respectant le temps de pose avant le raclage final.'
      }
    ],
    comprehensionQuestions: [
      {
        id: 'ci_res_01',
        question: 'Pourquoi est-il interdit de porter une montre ou des bagues en cuisine ?',
        options: [
          'Pour éviter que des bactéries ne s’accumulent et ne contaminent les aliments',
          'Parce que le chef de cuisine doit être le seul à donner l’heure',
          'Pour ne pas rayer les assiettes pendant le dressage',
          'Parce que les bijoux attirent la chaleur du fourneau'
        ],
        correctIndex: 0,
        explanation: 'Les bijoux abritent des germes difficiles à éliminer au lavage et constituent une source majeure de contamination biologique.'
      },
      {
        id: 'ci_res_02',
        question: 'Comment devez-vous vous sécher les mains selon le protocole ?',
        options: [
          'Uniquement avec du papier essuie-mains jetable à usage unique',
          'Avec son tablier de cuisine propre',
          'Avec un torchon en coton partagé par l’équipe',
          'En les secouant à l’air libre pendant 1 minute'
        ],
        correctIndex: 0,
        explanation: 'La consigne 2 précise : « Séchez-vous exclusivement avec du papier à usage unique jetable ».'
      },
      {
        id: 'ci_res_03',
        question: 'Quelle est la température requise pour une chambre froide positive contenant les viandes et produits laitiers ?',
        options: [
          'Entre 0°C et +4°C',
          'Entre +8°C et +12°C',
          'Au moins -18°C',
          'Exactement +15°C'
        ],
        correctIndex: 0,
        explanation: 'La température réglementaire pour les aliments très périssables se situe entre 0°C et +4°C.'
      },
      {
        id: 'ci_res_04',
        question: 'Que signifie le principe de la « marche en avant » ?',
        options: [
          'Les produits propres et les déchets ne doivent jamais se croiser dans les locaux',
          'Marcher toujours très vite pendant le service',
          'Faire face aux clients lorsqu’on apporte les plats en salle',
          'Ranger les casseroles de la plus petite à la plus grande'
        ],
        correctIndex: 0,
        explanation: 'La marche en avant est une règle d’agencement qui garantit que le propre ne croise jamais le sale.'
      },
      {
        id: 'ci_res_05',
        question: 'Combien de temps maximum peut-on conserver un produit frais entamé au réfrigérateur ?',
        options: [
          '48 heures maximum avec étiquette de date d’ouverture',
          'Une semaine entière sans restriction',
          'Jusqu’à ce que l’odeur change',
          'Seulement 2 heures après ouverture'
        ],
        correctIndex: 0,
        explanation: 'La consigne 5 indique une limite de 48 heures pour les produits déconditionnés conservés au froid.'
      },
      {
        id: 'ci_res_06',
        question: 'Quel est le bon ordre pour nettoyer les plans de travail inox en fin de service ?',
        options: [
          'Dégraisser au détergent, rincer à l’eau, puis désinfecter et racler',
          'Mettre de l’eau chaude uniquement sans produit',
          'Mettre le désinfectant directement sur la graisse sans rincer',
          'Passer un coup d’éponge sèche'
        ],
        correctIndex: 0,
        explanation: 'Le nettoyage professionnel se fait en deux étapes : détergent (nettoyer/dégraisser), puis désinfectant (détruire les microbes).'
      }
    ]
  },

  // =========================================================================
  // 2. SERVICE À LA PERSONNE & ENTRETIEN
  // =========================================================================
  {
    id: 'inst_service_personne',
    domain: 'service_personne',
    domainTitle: 'Service à la personne & Entretien',
    jobTitle: 'Auxiliaire de vie / Agent d’entretien à domicile',
    documentTitle: 'Guide de Poste : Accompagnement Quotidien & Entretien du Logement',
    procedureType: 'organisation',
    consignes: [
      {
        stepNumber: 1,
        title: 'Prise de contact et observation bienveillante',
        detail: 'Saluez la personne avec respect et annoncez votre prénom. Prenez le temps d’observer son état physique et moral (mobilité, respiration, fatigue, humeur).',
        caution: 'En cas de chute suspectée, de confusion anormale ou de malaise, alertez le 15 (SAMU) ou votre responsable sans délai.'
      },
      {
        stepNumber: 2,
        title: 'Aide au lever et transferts sécurisés',
        detail: 'Vérifiez que la personne porte des chaussons fermés antidérapants. Utilisez la technique de redressement sans tirer sur les bras ni courber le dos.',
        caution: 'Ne portez jamais une personne seule si un lève-personne est préconisé dans le plan d’aide.'
      },
      {
        stepNumber: 3,
        title: 'Préparation du repas et stimulation de l’autonomie',
        detail: 'Respectez les régimes particuliers (sans sel, sans sucre, texture mixée). Laissez la personne réaliser elle-même les gestes qu’elle peut faire pour préserver son autonomie.'
      },
      {
        stepNumber: 4,
        title: 'Aération et dépoussiérage des pièces de vie',
        detail: 'Ouvrez les fenêtres 10 à 15 minutes pour renouveler l’air. Utilisez une microfibre humide ou le balai trapèze pour capturer les poussières sans les mettre en suspension.'
      },
      {
        stepNumber: 5,
        title: 'Entretien des sanitaires et sécurité des produits',
        detail: 'Nettoyez la robinetterie et la cuvette avec les produits détartrants adaptés. Portez des gants de ménage.',
        caution: 'Interdiction absolue de mélanger de l’eau de Javel avec un détartrant ou anticalcaire (dégagement de chlore gazeux toxique).'
      },
      {
        stepNumber: 6,
        title: 'Émargement de la feuille de passage et transmission',
        detail: 'Consignez les activités réalisées, l’appétit et les éventuelles observations sur le cahier de liaison. Faites signer la feuille d’heures avant votre départ.'
      }
    ],
    comprehensionQuestions: [
      {
        id: 'ci_sap_01',
        question: 'Que devez-vous observer en priorité lors de votre arrivée chez la personne ?',
        options: [
          'Son état général de santé, son moral et son niveau de mobilité',
          'Si la télévision est allumée',
          'La marque des meubles du salon',
          'Le nombre de lettres dans la boîte aux lettres'
        ],
        correctIndex: 0,
        explanation: 'L’évaluation visuelle de l’état de la personne permet de détecter immédiatement tout signe de dégradation ou de détresse.'
      },
      {
        id: 'ci_sap_02',
        question: 'Pourquoi la personne doit-elle porter des chaussons fermés et antidérapants pour se lever ?',
        options: [
          'Pour éviter tout risque de glissade ou de chute sur le sol',
          'Pour ne pas salir les draps du lit',
          'Pour faire moins de bruit en marchant',
          'Pour garder les pieds au chaud l’été'
        ],
        correctIndex: 0,
        explanation: 'La prévention des chutes est la priorité numéro un lors du lever d’une personne âgée.'
      },
      {
        id: 'ci_sap_03',
        question: 'Pourquoi est-il important de stimuler l’autonomie de la personne pendant le repas ?',
        options: [
          'Pour l’aider à préserver ses capacités physiques et son estime d’elle-même',
          'Pour que l’auxiliaire puisse partir plus tôt',
          'Pour ne pas faire la vaisselle',
          'Parce que la loi interdit de nourrir une personne âgée'
        ],
        correctIndex: 0,
        explanation: 'Faire « avec » la personne plutôt qu’à sa place maintient sa mobilité et son moral.'
      },
      {
        id: 'ci_sap_04',
        question: 'Combien de temps est-il recommandé d’aérer la chambre ?',
        options: [
          'Entre 10 et 15 minutes',
          'Toute la journée les fenêtres grandes ouvertes',
          'Moins de 30 secondes',
          'Il est interdit d’ouvrir les fenêtres'
        ],
        correctIndex: 0,
        explanation: 'Une aération de 10 à 15 minutes suffit à renouveler l’air sans refroidir excessivement le logement.'
      },
      {
        id: 'ci_sap_05',
        question: 'Quel danger grave présente le mélange d’eau de Javel avec un produit anticalcaire ?',
        options: [
          'La libération de vapeurs de chlore hautement toxiques pour les poumons',
          'Le sol risque de devenir trop brillant',
          'Cela abîme l’éponge de ménage',
          'L’eau devient trop froide'
        ],
        correctIndex: 0,
        explanation: 'L’acide mélangé à l’eau de Javel libère instantanément du chlore gazeux asphyxiant.'
      },
      {
        id: 'ci_sap_06',
        question: 'À quoi sert le cahier de liaison posé sur la table du salon ?',
        options: [
          'À transmettre des informations utiles aux collègues, aux infirmiers et à la famille',
          'À noter les recettes de cuisine préférées de l’employé',
          'À laisser des dessins pour les petits-enfants',
          'À vérifier le montant des impôts de la personne'
        ],
        correctIndex: 0,
        explanation: 'Le cahier de liaison assure la continuité des soins et le lien avec la famille et les professionnels.'
      }
    ]
  },

  // =========================================================================
  // 3. COMMERCE & LIBRE-SERVICE
  // =========================================================================
  {
    id: 'inst_libre_service',
    domain: 'libre_service',
    domainTitle: 'Commerce & Libre-service',
    jobTitle: 'Employé(e) de rayon / Approvisionneur',
    documentTitle: 'Procédure Opérationnelle : Remplissage, DLC & Facing',
    procedureType: 'organisation',
    consignes: [
      {
        stepNumber: 1,
        title: 'Manutention sécurisée des colis',
        detail: 'Portez vos chaussures de sécurité et gants de manutention. Pliez toujours les genoux et gardez le dos droit pour soulever une charge lourde.',
        caution: 'Ne dépassez jamais la charge maximale autorisée pour le transpalette manuel (généralement 1 tonne).'
      },
      {
        stepNumber: 2,
        title: 'Application stricte du principe FIFO / PEPS',
        detail: 'Appliquez le principe « Premier Entré, Premier Sorti » : dégagez les articles déjà présents en rayon, placez les produits neufs au fond, puis remettez les anciens devant.'
      },
      {
        stepNumber: 3,
        title: 'Contrôle quotidien des Dates Limites de Consommation',
        detail: 'Examinez la DLC de chaque article frais. Retirez immédiatement tout produit dont la DLC expire le jour même pour le passer en démarque ou don antigaspillage.',
        caution: 'La vente d’un produit dont la DLC est dépassée constitue une faute professionnelle grave et une infraction légale.'
      },
      {
        stepNumber: 4,
        title: 'Vérification et concordance des prix étiquetés',
        detail: 'Contrôlez que le libellé et le code-barres du produit correspondent exactement à l’étiquette de rayon. Vérifiez la bonne mise à jour des étiquettes électroniques (EEG).'
      },
      {
        stepNumber: 5,
        title: 'Réalisation du facing (alignement visuel)',
        detail: 'Avancez chaque produit au bord de l’étagère en le tournant face visible vers le client pour que la rangée soit pleine, droite et attrayante.'
      },
      {
        stepNumber: 6,
        title: 'Dégagement immédiat des allées pour les clients',
        detail: 'Ne laissez jamais de cartons vides ou de rolls abandonnés dans les allées marchandes. Dès la fin de la mise en rayon, repliez les cartons et rangez le transpalette en réserve.'
      }
    ],
    comprehensionQuestions: [
      {
        id: 'ci_ls_01',
        question: 'Comment devez-vous positionner votre corps pour soulever un carton lourd ?',
        options: [
          'Plier les genoux, garder le dos bien droit et porter la charge près du corps',
          'Garder les jambes tendues et courber le dos en avant',
          'Porter le carton d’une seule main en tournant le buste',
          'Tirer le carton par le ruban adhésif'
        ],
        correctIndex: 0,
        explanation: 'Plier les genoux en gardant le dos droit préserve la colonne vertébrale des hernies et douleurs dorsales.'
      },
      {
        id: 'ci_ls_02',
        question: 'Pourquoi applique-t-on la méthode « Premier Entré, Premier Sorti » (PEPS) ?',
        options: [
          'Pour vendre en priorité les produits arrivés les premiers et éviter le gaspillage',
          'Pour vider les palettes le plus vite possible',
          'Pour cacher les produits abîmés aux clients',
          'Parce que les produits du fond sont toujours plus chers'
        ],
        correctIndex: 0,
        explanation: 'La rotation des stocks évite que les produits anciens ne restent au fond du rayon jusqu’à leur péremption.'
      },
      {
        id: 'ci_ls_03',
        question: 'Que devez-vous faire si un yaourt affiche une DLC expirant le jour même ?',
        options: [
          'Le retirer immédiatement du rayon et le scanner pour la démarque',
          'Le cacher derrière un autre produit',
          'Changer l’étiquette de date au marqueur',
          'Le consommer discrètement en réserve'
        ],
        correctIndex: 0,
        explanation: 'Les produits arrivés à date sont retirés du circuit client pour être démarqués, donnés à des associations ou détruits.'
      },
      {
        id: 'ci_ls_04',
        question: 'Qu’est-ce qu’une étiquette électronique de gondole (EEG) ?',
        options: [
          'Un petit écran sur le rayon affichant le prix exact actualisé à distance',
          'Une caméra de surveillance antivol',
          'Une alarme sonore pour les employés',
          'Un boîtier de pesée pour les clients'
        ],
        correctIndex: 0,
        explanation: 'Les EEG permettent de synchroniser automatiquement les prix du rayon avec les caisses informatisées.'
      },
      {
        id: 'ci_ls_05',
        question: 'En quoi consiste l’action de faire le « facing » ?',
        options: [
          'Aligner et avancer les articles au bord du rayon avec l’étiquette tournée vers le client',
          'Regarder les clients dans les yeux en souriant',
          'Nettoyer le carrelage avec une autolaveuse',
          'Changer la musique d’ambiance du magasin'
        ],
        correctIndex: 0,
        explanation: 'Le facing donne une impression de rayonnage plein et soigné.'
      },
      {
        id: 'ci_ls_06',
        question: 'Pourquoi ne doit-on laisser aucun carton ou palette dans l’allée après la mise en rayon ?',
        options: [
          'Pour garantir la sécurité des clients et leur laisser un passage fluide avec leur caddie',
          'Parce que les cartons prennent froid',
          'Pour cacher le nom des fournisseurs',
          'Parce que le sol doit rester dans le noir'
        ],
        correctIndex: 0,
        explanation: 'Les allées encombrées présentent un risque de chute pour les clients et gênent la circulation.'
      }
    ]
  },

  // =========================================================================
  // 4. SANTÉ & SOINS
  // =========================================================================
  {
    id: 'inst_sante',
    domain: 'sante',
    domainTitle: 'Santé & Soins en établissement',
    jobTitle: 'Aide-soignant(e)',
    documentTitle: 'Protocole de Soins : Hygiène, Sécurité & Transmissions Ciblées',
    procedureType: 'hygiene',
    consignes: [
      {
        stepNumber: 1,
        title: 'Friction hydroalcoolique obligatoire',
        detail: 'Effectuez une friction des mains avec une solution hydroalcoolique (SHA) selon les 7 temps recommandés avant tout contact avec le patient et avant chaque geste propre.',
        caution: 'La friction sur mains visiblement sales ou humides est inefficace : faites d’abord un lavage au savon.'
      },
      {
        stepNumber: 2,
        title: 'Aide à la toilette dans le respect de la pudeur',
        detail: 'Chauffez la chambre à température agréable. Ne découvrez que la partie du corps lavée, changez de gant et d’eau entre le haut du corps et la toilette intime.',
        caution: 'Vérifiez systématiquement l’absence de rougeur au niveau des points d’appui (talons, sacrum) pour prévenir les escarres.'
      },
      {
        stepNumber: 3,
        title: 'Installation ergonomique et prévention des chutes',
        detail: 'Remettez le lit à hauteur basse après le soin. Verrouillez les freins des roues et rangez la table adaptable près du fauteuil.',
        caution: 'Ne relevez les barrières de lit que si elles sont expressément prescrites par le médecin traitant.'
      },
      {
        stepNumber: 4,
        title: 'Positionnement de la sonnette d’appel',
        detail: 'Placez la poire d’appel à portée immédiate de la main valide de la personne et testez son bon fonctionnement avant de quitter la pièce.'
      },
      {
        stepNumber: 5,
        title: 'Gestion du linge sale et des déchets de soins',
        detail: 'Déposez immédiatement les draps souillés dans le sac à linge du chariot (sans les secouer ni les poser par terre). Évacuez les déchets contaminés dans la filière DASRI jaune.'
      },
      {
        stepNumber: 6,
        title: 'Rédaction des transmissions ciblées (D-A-R)',
        detail: 'Consignez les données observées (D), les actions réalisées (A) et les résultats obtenus (R) sur le dossier de soins informatisé avant le départ de votre équipe.'
      }
    ],
    comprehensionQuestions: [
      {
        id: 'ci_san_01',
        question: 'Quand la friction hydroalcoolique (SHA) est-elle inefficace ?',
        options: [
          'Lorsque les mains sont visiblement souillées, sales ou encore humides d’eau',
          'Quand il fait froid dans le couloir',
          'Si le flacon est posé sur une table en bois',
          'Quand on porte des chaussures blanches'
        ],
        correctIndex: 0,
        explanation: 'La SHA désinfecte mais ne nettoie pas : en présence de saleté visible, un lavage eau + savon est d’abord obligatoire.'
      },
      {
        id: 'ci_san_02',
        question: 'Pourquoi doit-on changer d’eau et de gant pendant la toilette du résident ?',
        options: [
          'Pour éviter de transférer des bactéries du haut du corps vers les muqueuses ou inversement',
          'Pour utiliser plus de savon',
          'Pour faire durer la toilette plus longtemps',
          'Parce que l’eau devient trop chaude'
        ],
        correctIndex: 0,
        explanation: 'La séparation de la toilette générale et de la toilette intime empêche les infections croisées.'
      },
      {
        id: 'ci_san_03',
        question: 'Quelle surveillance cutanée essentielle permet de dépister les escarres ?',
        options: [
          'Surveiller les rougeurs persistantes sur les talons et le bas du dos (sacrum)',
          'Vérifier la couleur des yeux du patient',
          'Observer si les cheveux sont bien peignés',
          'Regarder la montre du résident'
        ],
        correctIndex: 0,
        explanation: 'L’escarre est une plaie provoquée par la compression prolongée de la peau entre l’os et le matelas.'
      },
      {
        id: 'ci_san_04',
        question: 'Peut-on mettre les barrières de lit à tous les patients sans ordonnance ?',
        options: [
          'Non, les barrières sont considérées comme une contention et nécessitent une prescription médicale',
          'Oui, c’est obligatoire pour tous les patients de plus de 60 ans',
          'Oui, dès que la famille le demande par téléphone',
          'Non, uniquement le dimanche'
        ],
        correctIndex: 0,
        explanation: 'La pose de barrières limite la liberté d’aller et venir et relève d’une décision médicale encadrée.'
      },
      {
        id: 'ci_san_05',
        question: 'Pourquoi est-il strictement interdit de secouer les draps sales dans la chambre ?',
        options: [
          'Pour ne pas disperser des poussières et bactéries pathogènes dans l’air ambiant',
          'Pour ne pas réveiller les voisins de chambre',
          'Pour que les draps ne se froissent pas',
          'Pour économiser ses forces'
        ],
        correctIndex: 0,
        explanation: 'Secouer le linge sale diffuse un nuage d’aérosols microbiens dans toute la chambre.'
      },
      {
        id: 'ci_san_06',
        question: 'Que signifie le sigle « D-A-R » dans les transmissions de soins ?',
        options: [
          'Données constatées, Actions entreprises, Résultats observés',
          'Départ, Arrivée, Retour au domicile',
          'Dossier Administratif et Rémunération',
          'Douche, Alimentation, Repos'
        ],
        correctIndex: 0,
        explanation: 'La méthode des transmissions ciblées structure la communication entre soignants : Données, Actions, Résultats.'
      }
    ]
  },

  // =========================================================================
  // 5. PÉRISCOLAIRE & ENFANCE
  // =========================================================================
  {
    id: 'inst_periscolaire',
    domain: 'periscolaire',
    domainTitle: 'Périscolaire & Animation',
    jobTitle: 'Animateur / Animatrice enfance',
    documentTitle: 'Charte de Surveillance, Sécurité & Gestion du Goûter',
    procedureType: 'securite',
    consignes: [
      {
        stepNumber: 1,
        title: 'Pointage nominatif des présences dès 16h30',
        detail: 'Faites l’appel nominatif classe par classe en cochant la liste d’émargement. Comptez les enfants à voix haute et comparez le nombre réel avec la fiche de présence.',
        caution: 'Ne confiez jamais la liste d’appel à un élève.'
      },
      {
        stepNumber: 2,
        title: 'Vérification absolue du Projet d’Accueil Individualisé (PAI)',
        detail: 'Consultez la pochette médicale d’urgence. Repérez les enfants porteurs d’allergies alimentaires graves (fruits à coque, arachide, gluten, produits laitiers).',
        caution: 'Les enfants allergiques ne doivent jamais consommer d’aliment non fourni par leurs parents dans leur panier repas sécurisé.'
      },
      {
        stepNumber: 3,
        title: 'Hygiène des mains avant le goûter',
        detail: 'Accompagnez les enfants au lavabo. Vérifiez le lavage au savon et à l’eau tiède pendant 20 secondes avant de distribuer les collations.'
      },
      {
        stepNumber: 4,
        title: 'Surveillance active et mobile dans la cour',
        detail: 'Les animateurs doivent occuper les 4 angles de la cour et l’entrée des toilettes en restant debout et mobiles. Ne formez jamais de groupe d’animateurs en discussion statique.',
        caution: 'L’utilisation du téléphone portable personnel est formellement bannie pendant la surveillance.'
      },
      {
        stepNumber: 5,
        title: 'Gestion des petits bobos et trousse de secours',
        detail: 'Nettoyez une éraflure à l’eau et au savon ou avec une compresse stérile imprégnée d’antiseptique sans alcool. Notez le soin dans le registre d’infirmerie.',
        caution: 'Les animateurs ne sont jamais autorisés à administrer de médicament oral sans ordonnance médicale écrite.'
      },
      {
        stepNumber: 6,
        title: 'Protocole rigoureux de départ des familles (18h00)',
        detail: 'Vérifiez que le nom de l’adulte venant chercher l’enfant est bien inscrit sur la fiche d’autorisation parentale. Demandez une pièce d’identité en cas de doute et cochez l’heure de sortie.'
      }
    ],
    comprehensionQuestions: [
      {
        id: 'ci_per_01',
        question: 'Comment l’animateur doit-il effectuer le pointage des présences à 16h30 ?',
        options: [
          'En faisant l’appel nominatif et en recomptant physiquement tous les enfants présents',
          'En demandant aux enfants de lever le doigt tous ensemble',
          'En regardant rapidement par la fenêtre de la classe',
          'En demandant au délégué de classe de s’en occuper'
        ],
        correctIndex: 0,
        explanation: 'Le double contrôle nominatif et quantitatif évite qu’un enfant ne s’égare lors de la transition école/périscolaire.'
      },
      {
        id: 'ci_per_02',
        question: 'Quelle précaution s’impose pour un enfant ayant un PAI d’allergie alimentaire ?',
        options: [
          'Il doit consommer uniquement les aliments prévus et validés dans son panier sécurisé',
          'Il peut partager les biscuits de ses camarades s’ils sont gentils',
          'Il n’a pas le droit de goûter avec les autres',
          'Il doit manger dans la cour sous la pluie'
        ],
        correctIndex: 0,
        explanation: 'Le respect du panier repas individuel évite toute contamination croisée d’allergènes potentiellement mortels.'
      },
      {
        id: 'ci_per_03',
        question: 'Quelle posture les animateurs doivent-ils adopter pendant la récréation ?',
        options: [
          'Être debout, mobiles et répartis aux quatre coins de la cour de récréation',
          'S’asseoir ensemble sur un banc pour discuter du week-end',
          'Regarder des vidéos sur leur téléphone portable',
          'Rester dans le bureau de direction au chaud'
        ],
        correctIndex: 0,
        explanation: 'La surveillance active et répartie permet d’intervenir immédiatement en cas de bousculade ou de danger.'
      },
      {
        id: 'ci_per_04',
        question: 'Pourquoi le téléphone portable personnel est-il interdit pendant la surveillance ?',
        options: [
          'Parce qu’il détourne l’attention visuelle indispensable pour la sécurité des enfants',
          'Pour économiser la batterie du téléphone',
          'Parce que les ondes attirent la pluie',
          'Pour ne pas faire de bruit'
        ],
        correctIndex: 0,
        explanation: 'Une seconde d’inattention sur un écran peut suffire à manquer une chute grave.'
      },
      {
        id: 'ci_per_05',
        question: 'Un animateur peut-il donner du paracétamol à un enfant qui a mal à la tête sans ordonnance ?',
        options: [
          'Non, il est strictement interdit de donner un médicament sans ordonnance écrite du médecin',
          'Oui, s’il a un comprimé dans son sac à main',
          'Oui, si l’enfant pleure fort',
          'Oui, si l’autre animateur est d’accord'
        ],
        correctIndex: 0,
        explanation: 'Seul un protocole médical officiel autorise l’administration de médicaments en collectivité.'
      },
      {
        id: 'ci_per_06',
        question: 'Que doit exiger l’animateur si un adulte inconnu se présente pour chercher un élève ?',
        options: [
          'Vérifier son nom sur l’autorisation parentale écrite et lui demander une pièce d’identité officielle',
          'Lui faire confiance s’il connaît le prénom de l’enfant',
          'Lui demander de payer une amende',
          'Demander à l’enfant de signer un autographe'
        ],
        correctIndex: 0,
        explanation: 'La protection des mineurs impose une vérification rigoureuse de l’identité des personnes autorisées.'
      }
    ]
  },

  // =========================================================================
  // 6. BTP & CHANTIER
  // =========================================================================
  {
    id: 'inst_btp',
    domain: 'btp',
    domainTitle: 'BTP & Bâtiment',
    jobTitle: 'Ouvrier polyvalent / Aide-maçon',
    documentTitle: 'Consignes Générales de Sécurité, EPI & Travaux en Hauteur',
    procedureType: 'securite',
    consignes: [
      {
        stepNumber: 1,
        title: 'Port obligatoire des Équipements de Protection Individuelle',
        detail: 'Le port du casque de chantier ajusté avec jugulaire, des chaussures de sécurité coquées S3, du gilet haute visibilité classe 2 et des gants anti-coupure est obligatoire dès le franchissement de la grille.',
        caution: 'Tout travailleur sans EPI complets sera immédiatement exclu du chantier par le chef de chantier.'
      },
      {
        stepNumber: 2,
        title: 'Vérification avant utilisation d’un échafaudage',
        detail: 'Vérifiez la présence de l’étiquette verte de conformité, du garde-corps complet (lisse, sous-lisse et plinthe de butée) et de l’amarrage solide sur la façade.',
        caution: 'Ne modifiez jamais un échafaudage vous-même (interdiction de retirer une plinthe ou un tube).'
      },
      {
        stepNumber: 3,
        title: 'Utilisation sécurisée des échelles et escabeaux',
        detail: 'L’échelle est un moyen d’accès temporaire et non un poste de travail. Maintenez toujours 3 points de contact (deux mains et un pied, ou deux pieds et une main) lors de la montée.',
        caution: 'Ne transportez jamais d’outils lourds à la main sur une échelle : utilisez un sac à dos ou une corde de levage.'
      },
      {
        stepNumber: 4,
        title: 'Balisage et protection des ouvertures au sol',
        detail: 'Toute trémie, fosse ou tranchée ouverte doit être immédiatement protégée par une barrière rigide ou fermée par un panneau fixé résistant au passage d’un homme.',
        caution: 'Un simple ruban rubalise n’est pas une protection antichute suffisante.'
      },
      {
        stepNumber: 5,
        title: 'Sécurité électrique et utilisation des outils rotatifs',
        detail: 'Branchez tous les outils électroportatifs (perceuse, meuleuse) exclusivement sur le coffret de chantier étanche équipé d’un disjoncteur différentiel 30 mA.',
        caution: 'Ne retirez jamais le carter de protection d’une meuleuse d’angle.'
      },
      {
        stepNumber: 6,
        title: 'Gestion des gravats et évacuation des déchets',
        detail: 'Dégagez les zones de passage au fur et à mesure. Évacuez les gravats par la goulotte fermée vers la benne sans rien jeter par-dessus bord.'
      }
    ],
    comprehensionQuestions: [
      {
        id: 'ci_btp_01',
        question: 'À partir de quel endroit le port du casque et des chaussures de sécurité est-il obligatoire ?',
        options: [
          'Dès le portail d’entrée du chantier',
          'Uniquement quand le patron arrive',
          'Seulement à l’intérieur des pièces fermées',
          'Uniquement au-dessus de 10 mètres de hauteur'
        ],
        correctIndex: 0,
        explanation: 'Le port des EPI complets s’impose sur l’ensemble de l’emprise du chantier sans exception.'
      },
      {
        id: 'ci_btp_02',
        question: 'Quelle étiquette indique qu’un échafaudage est vérifié et bon pour le service ?',
        options: [
          'L’étiquette verte de conformité',
          'Une étiquette rouge d’interdiction',
          'Un autocollant publicitaire',
          'Il n’y a jamais d’étiquette sur un échafaudage'
        ],
        correctIndex: 0,
        explanation: 'L’étiquette verte atteste du contrôle de stabilité par une personne habilitée ; l’étiquette rouge signifie interdiction de monter.'
      },
      {
        id: 'ci_btp_03',
        question: 'Que signifie la règle des « 3 points de contact » sur une échelle ?',
        options: [
          'Avoir en permanence deux mains et un pied, ou deux pieds et une main fermement posés',
          'Avoir trois personnes sur l’échelle',
          'Vérifier que l’échelle a au moins 3 échelons',
          'Poser l’échelle contre 3 murs'
        ],
        correctIndex: 0,
        explanation: 'Cette posture triangulaire garantit la stabilité et empêche le basculement en arrière.'
      },
      {
        id: 'ci_btp_04',
        question: 'Pourquoi une simple bande de rubalise plastique ne suffit-elle pas pour boucher un trou au sol ?',
        options: [
          'Parce qu’elle ne retient pas le poids d’une personne qui glisse ou trébuche',
          'Parce qu’elle coûte trop cher',
          'Parce que le vent la fait voler',
          'Parce qu’elle est trop colorée'
        ],
        correctIndex: 0,
        explanation: 'Une protection collective antichute doit être rigide (panneau cloué ou garde-corps rigide).'
      },
      {
        id: 'ci_btp_05',
        question: 'Sur quel type de coffret électrique doit-on brancher les outils sur un chantier ?',
        options: [
          'Sur une armoire de chantier étanche protégée par un disjoncteur différentiel 30 mA',
          'Sur une multiprise de salon posée dans la boue',
          'Directement sur les fils dénudés du compteur',
          'Sur la batterie d’une voiture personnelle'
        ],
        correctIndex: 0,
        explanation: 'Le différentiel 30 mA coupe le courant en cas de contact avec l’eau ou de défaut d’isolement et sauve des vies.'
      },
      {
        id: 'ci_btp_06',
        question: 'Comment doit-on évacuer les gravats depuis un étage élevé ?',
        options: [
          'Par une goulotte à gravats fermée guidée vers la benne',
          'En les jetant par la fenêtre quand personne ne regarde',
          'En les laissant dans les couloirs',
          'En les cachant sous le plancher'
        ],
        correctIndex: 0,
        explanation: 'La goulotte canalise la chute des décombres et élimine le risque d’écrasement au sol.'
      }
    ]
  },

  // =========================================================================
  // 7. SECRÉTARIAT & ACCUEIL
  // =========================================================================
  {
    id: 'inst_secretariat',
    domain: 'secretariat',
    domainTitle: 'Secrétariat & Accueil',
    jobTitle: 'Secrétaire administratif(ve) / Hôte(sse) d’accueil',
    documentTitle: 'Protocole Professionnel : Standard Téléphonique & Gestion du Courrier',
    procedureType: 'organisation',
    consignes: [
      {
        stepNumber: 1,
        title: 'Formule de décroché polie et rapide',
        detail: 'Décrochez le combiné avant la 3e sonnerie avec une voix souriante et distincte : « [Nom de la structure], bonjour, [votre prénom] à votre écoute, en quoi puis-je vous aider ? »',
        caution: 'Évitez absolument les réponses familières du type « Allô oui ? » ou « C’est pour quoi ? ».'
      },
      {
        stepNumber: 2,
        title: 'Mise en attente courtoise et transfert d’appel',
        detail: 'Avant de mettre en attente, demandez l’accord de l’interlocuteur : « Je vous mets en attente un court instant pour joindre mon collègue, vous permettez ? ». Présentez l’appelant avant de basculer la ligne.',
        caution: 'Ne laissez jamais un usager en attente plus de 45 secondes sans reprendre la parole.'
      },
      {
        stepNumber: 3,
        title: 'Prise de message complète et vérifiée',
        detail: 'Notez méthodiquement : date, heure précise, nom et prénom de l’appelant (faire épeler si nécessaire), organisme, numéro direct de rappel et objet synthétique du message.',
        caution: 'Relisez systématiquement le numéro de téléphone chiffre par chiffre pour valider son exactitude.'
      },
      {
        stepNumber: 4,
        title: 'Accueil physique et identification des visiteurs',
        detail: 'Levez les yeux dès l’entrée du visiteur, saluez-le avec le sourire. Demandez-lui son identité, vérifiez son rendez-vous sur le planning partagé et faites-le patienter dans le salon d’attente.'
      },
      {
        stepNumber: 5,
        title: 'Traitement rigoureux du courrier et des recommandés',
        detail: 'Ouvrez et tamponnez le courrier du jour avec la date de réception. Enregistrez les lettres recommandées dans le classeur de suivi avec accusé de réception avant distribution dans les casiers.'
      },
      {
        stepNumber: 6,
        title: 'Discrétion professionnelle et confidentialité des données (RGPD)',
        detail: 'Verrouillez votre session informatique (touches Windows + L) dès que vous quittez votre poste. Ne laissez aucun dossier nominatif contenant des données personnelles visible sur le comptoir.'
      }
    ],
    comprehensionQuestions: [
      {
        id: 'ci_sec_01',
        question: 'Avant quelle sonnerie est-il recommandé de décrocher le standard téléphonique ?',
        options: [
          'Avant la 3e sonnerie pour donner une image professionnelle et réactive',
          'Après 10 sonneries pour faire patienter l’appelant',
          'Seulement quand on a fini sa pause café',
          'Le standard ne doit jamais être décroché'
        ],
        correctIndex: 0,
        explanation: 'Décrocher avant 3 sonneries témoigne de la disponibilité et du professionnalisme de l’entreprise.'
      },
      {
        id: 'ci_sec_02',
        question: 'Que devez-vous dire avant de mettre un interlocuteur en attente ?',
        options: [
          'Lui demander poliment l’autorisation de le faire patienter un court instant',
          'Couper le son sans prévenir',
          'Lui dire de rappeler le lendemain matin',
          'Raccrocher directement'
        ],
        correctIndex: 0,
        explanation: 'Prévenir l’appelant et obtenir son accord est la règle de politesse élémentaire au téléphone.'
      },
      {
        id: 'ci_sec_03',
        question: 'Pourquoi est-il crucial de relire le numéro de téléphone à l’appelant lors d’une prise de message ?',
        options: [
          'Pour s’assurer qu’aucun chiffre n’a été inversé et que le collaborateur pourra le rappeler sans erreur',
          'Pour vérifier qu’il parle bien français',
          'Pour apprendre le numéro par cœur',
          'Parce que le téléphone ne sauvegarde pas les chiffres'
        ],
        correctIndex: 0,
        explanation: 'Une simple inversion de deux chiffres rend le rappel impossible et nuit à la relation professionnelle.'
      },
      {
        id: 'ci_sec_04',
        question: 'Quelle est la première chose à faire quand un visiteur franchit la porte de l’accueil ?',
        options: [
          'Lever les yeux de son écran, le regarder et le saluer avec le sourire',
          'Continuer à taper son courriel sans faire attention à lui',
          'Lui demander de ressortir immédiatement',
          'Fermer la porte à clé'
        ],
        correctIndex: 0,
        explanation: 'Le contact visuel et le sourire constituent le premier accueil chaleureux indispensable.'
      },
      {
        id: 'ci_sec_05',
        question: 'Que doit-on apposer sur le courrier postal dès son arrivée au secrétariat ?',
        options: [
          'Le tampon dateur indiquant la date de réception du courrier',
          'Un timbre postal supplémentaire',
          'La signature du facteur',
          'Une note autocollante de couleur'
        ],
        correctIndex: 0,
        explanation: 'La date d’arrivée sur le courrier fait foi juridiquement pour les délais de réponse administrative.'
      },
      {
        id: 'ci_sec_06',
        question: 'Quelle précaution informatique devez-vous prendre chaque fois que vous quittez votre bureau ?',
        options: [
          'Verrouiller la session de l’ordinateur pour protéger la confidentialité des données',
          'Débrancher la prise de courant électrique',
          'Changer d’écran d’ordinateur',
          'Laisser tous les dossiers ouverts sur la table'
        ],
        correctIndex: 0,
        explanation: 'Le verrouillage de session (règlement RGPD) empêche des personnes extérieures d’accéder à des fichiers confidentiels.'
      }
    ]
  }
];
