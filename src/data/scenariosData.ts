import { ScenarioSituation } from '../types/fle';

export const SCENARIOS_LIST: ScenarioSituation[] = [
  // =========================================================================
  // 1. RESTAURATION (TRADITIONNELLE & COLLECTIVE) - 3 DIALOGUES
  // =========================================================================
  {
    id: 'scen_res_01',
    domain: 'restauration',
    domainTitle: 'Restauration (Traditionnelle & Collective)',
    title: 'Dialogue 1 : Gérer une intolérance alimentaire en salle',
    description: 'En salle, un client demande une modification de plat en raison d’une forte allergie au gluten.',
    initialContext: 'À 12h30, au milieu du service, le client de la table 4 vous interpelle au moment de la commande.',
    dialogueNodes: [
      {
        nodeId: 'n1',
        interlocutorName: 'Monsieur Garnier',
        interlocutorRole: 'Client au restaurant',
        interlocutorText: 'Bonjour. Je souhaiterais prendre le poisson du jour, mais je suis intolérant strict au gluten. Pouvez-vous me certifier que la sauce ne contient aucune farine de blé ?',
        userPrompt: 'Comment réagissez-vous avec professionnalisme et respect des règles d’hygiène et d’allergies ?',
        choices: [
          {
            text: '« Bonjour Monsieur. Je vais vérifier immédiatement auprès du chef de cuisine les ingrédients de la sauce pour vous garantir une assiette 100 % sans risque. »',
            isAppropriate: true,
            feedback: 'Excellente réponse ! En restauration, face à une allergie, il ne faut jamais improviser : on consulte systématiquement le chef ou la fiche technique des allergènes.'
          },
          {
            text: '« Je ne pense pas qu’il y ait de farine, mais si vous êtes malade après, ce ne sera pas de ma faute. »',
            isAppropriate: false,
            feedback: 'Inapproprié et dangereux. Une allergie peut entraîner des complications médicales graves (choc anaphylactique).'
          },
          {
            text: '« Prenez juste une salade verte sans assaisonnement, comme ça on ne prend aucun risque. »',
            isAppropriate: false,
            feedback: 'Réponse négligente et peu commerciale. Le client a le droit de choisir son plat dans la mesure du possible.'
          }
        ]
      },
      {
        nodeId: 'n2',
        interlocutorName: 'Monsieur Garnier',
        interlocutorRole: 'Client au restaurant',
        interlocutorText: 'Merci beaucoup pour votre vigilance. Si la sauce contient de la farine, que me proposez-vous en remplacement ?',
        userPrompt: 'Vous revenez de cuisine avec la réponse du chef. Comment formulez-vous votre proposition ?',
        choices: [
          {
            text: '« Le chef confirme que la sauce contient un roux de farine. Il vous propose avec plaisir un filet d’huile d’olive vierge au citron ou une sauce vierge aux herbes fraîches sans aucun gluten. »',
            isAppropriate: true,
            feedback: 'Parfait ! Vous valorisez le travail de la cuisine, apportez une solution claire et soignez le service client.'
          },
          {
            text: '« Il n’y a rien d’autre. Mangez le poisson tout sec. »',
            isAppropriate: false,
            feedback: 'Ton agressif et irrespectueux envers le client.'
          }
        ]
      }
    ]
  },
  {
    id: 'scen_res_02',
    domain: 'restauration',
    domainTitle: 'Restauration (Traditionnelle & Collective)',
    title: 'Dialogue 2 : Coordination en cuisine pendant le coup de feu',
    description: 'En cuisine lors de l’envoi des plats chauds, le chef annonce les bons de commande au passe-plat.',
    initialContext: 'À 13h10, le rythme s’accélère. Trois tables attendent leurs plats principaux en même temps.',
    dialogueNodes: [
      {
        nodeId: 'n1',
        interlocutorName: 'Chef Thierry',
        interlocutorRole: 'Chef de cuisine',
        interlocutorText: 'Pour la table 7 : deux entrecôtes saignantes, un pavé de saumon grillé et une assiette végétarienne ! Où en sont les garnitures chaudes ?',
        userPrompt: 'Comment répondez-vous avec précision et dynamisme au passe-plat ?',
        choices: [
          {
            text: '« Bien chef ! Les purées de patates douces et les poêlées de légumes croquants sont prêtes au maintien au chaud. J’envoie les assiettes dès que les viandes sont tranchées ! »',
            isAppropriate: true,
            feedback: 'Formule professionnelle idéale ! L’emploi de « Bien chef ! » marque l’écoute active et la confirmation claire de l’état d’avancement.'
          },
          {
            text: '« Arrêtez de crier chef, ça me stresse, je fais comme je peux ! »',
            isAppropriate: false,
            feedback: 'Inadapté à la brigade de cuisine. Pendant le coup de feu, la communication doit rester rapide, factuelle et calme.'
          },
          {
            text: '« Je ne sais pas, demandez à l’autre commis. »',
            isAppropriate: false,
            feedback: 'Manque d’esprit d’équipe et d’implication sur son poste.'
          }
        ]
      },
      {
        nodeId: 'n2',
        interlocutorName: 'Chef Thierry',
        interlocutorRole: 'Chef de cuisine',
        interlocutorText: 'Parfait ! Vérifie la propreté du bord des assiettes et la cloche thermique avant que le serveur n’emporte le plateau.',
        userPrompt: 'Que dites-vous pour confirmer l’exécution du contrôle qualité ?',
        choices: [
          {
            text: '« C’est vérifié chef : les assiettes sont essuyées, bien chaudes et le plateau est prêt pour le service. »',
            isAppropriate: true,
            feedback: 'Excellent professionnalisme ! Contrôle visuel et hygiène rigoureuse avant le départ en salle.'
          },
          {
            text: '« Les clients s’en fichent des gouttes sur le bord, ils ont faim. »',
            isAppropriate: false,
            feedback: 'Le dressage et la netteté des assiettes font partie intégrante des exigences du métier de restaurateur.'
          }
        ]
      }
    ]
  },
  {
    id: 'scen_res_03',
    domain: 'restauration',
    domainTitle: 'Restauration (Traditionnelle & Collective)',
    title: 'Dialogue 3 : Signalement d’une anomalie de température en chambre froide',
    description: 'Lors du relevé de températures obligatoire de 14h30, vous constatez une dérive thermique anormale.',
    initialContext: 'Le thermomètre mural de la chambre froide positive affiche +8,5°C au lieu de +3°C réglementaires.',
    dialogueNodes: [
      {
        nodeId: 'n1',
        interlocutorName: 'Laurent',
        interlocutorRole: 'Second de cuisine / Responsable HACCP',
        interlocutorText: 'Tu as fini les relevés de températures de l’après-midi sur la tablette ? Rien à signaler ?',
        userPrompt: 'Comment alertez-vous votre supérieur de cette non-conformité critique ?',
        choices: [
          {
            text: '« Laurent, il y a une anomalie importante : la chambre froide n°2 est à +8,5°C depuis au moins midi. La porte était mal enclenchée. Je viens de la fermer, mais il faut vérifier les produits sensibles. »',
            isAppropriate: true,
            feedback: 'Réaction modèle ! Alerte précise, identification de la cause probable (porte mal fermée) et rappel de la priorité sanitaire.'
          },
          {
            text: '« Tout va bien, j’ai noté +3°C sur le cahier pour ne pas avoir d’ennuis lors du contrôle. »',
            isAppropriate: false,
            feedback: 'Fraude grave aux règles HACCP ! Falsifier un relevé de température met en péril la santé des consommateurs.'
          },
          {
            text: '« Le frigo chauffe un peu, on verra bien demain matin si ça redescend. »',
            isAppropriate: false,
            feedback: 'Attitude passive dangereuse : les bactéries se multiplient très vite entre +4°C et +60°C.'
          }
        ]
      },
      {
        nodeId: 'n2',
        interlocutorName: 'Laurent',
        interlocutorRole: 'Second de cuisine / Responsable HACCP',
        interlocutorText: 'Bien vu d’avoir vérifié tout de suite ! Peux-tu prendre le thermomètre sonde et sonder à cœur la barquette de volaille crue ?',
        userPrompt: 'Comment confirmez-vous votre action ?',
        choices: [
          {
            text: '« J’y vais tout de suite : je désinfecte la sonde à la lingette alcoolisée, je sonde la volaille et je te donne la température exacte à cœur. »',
            isAppropriate: true,
            feedback: 'Parfait ! Utilisation conforme du matériel avec désinfection préalable de la sonde.'
          },
          {
            text: '« Je n’ai pas envie de toucher à la sonde, elle est trop grasse. »',
            isAppropriate: false,
            feedback: 'Refus de tâche de base et négligence professionnelle.'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 2. SERVICE À LA PERSONNE & ENTRETIEN - 3 DIALOGUES
  // =========================================================================
  {
    id: 'scen_sp_01',
    domain: 'service_personne',
    domainTitle: 'Service à la personne & Entretien',
    title: 'Dialogue 1 : Accompagner le repas et stimuler l’autonomie d’un senior',
    description: 'Au domicile de Monsieur Vasseur, 82 ans, vous préparez ensemble le repas de midi.',
    initialContext: 'Monsieur Vasseur a les mains qui tremblent légèrement, mais il tient à participer en cuisine.',
    dialogueNodes: [
      {
        nodeId: 'n1',
        interlocutorName: 'Monsieur Vasseur',
        interlocutorRole: 'Bénéficiaire à domicile',
        interlocutorText: 'Bonjour mon petit... Je suis un peu maladroit aujourd’hui avec mes mains, mais j’aimerais tellement vous aider à éplucher les carottes.',
        userPrompt: 'Comment stimulez-vous son autonomie tout en assurant sa sécurité ?',
        choices: [
          {
            text: '« Avec grand plaisir Monsieur Vasseur ! Installez-vous confortablement sur cette chaise avec l’éplucheur économe sécurité. Nous allons préparer le repas ensemble à votre rythme. »',
            isAppropriate: true,
            feedback: 'Excellente posture professionnelle ! Favorise l’autonomie, valorise la personne et assure sa sécurité en position assise.'
          },
          {
            text: '« Non, laissez tomber, vous allez vous couper ou en mettre partout. Restez dans le salon devant la télévision. »',
            isAppropriate: false,
            feedback: 'Attitude infantilisante et décourageante qui accélère la perte d’autonomie de la personne âgée.'
          },
          {
            text: '« D’accord, prenez ce grand couteau de chef bien aiguisé et dépêchez-vous un peu. »',
            isAppropriate: false,
            feedback: 'Très dangereux pour une personne souffrant de tremblements : risque élevé de coupure.'
          }
        ]
      },
      {
        nodeId: 'n2',
        interlocutorName: 'Monsieur Vasseur',
        interlocutorRole: 'Bénéficiaire à domicile',
        interlocutorText: 'C’est gentil à vous de prendre le temps. Ça sent déjà très bon dans la cuisine ! Que met-on comme épices ?',
        userPrompt: 'Comment maintenez-vous un échange chaleureux et stimulant ?',
        choices: [
          {
            text: '« Un peu de thym et une pincée de persil frais. Voulez-vous sentir les herbes pour me dire ce que vous en pensez ? »',
            isAppropriate: true,
            feedback: 'Magnifique interaction bienveillante qui stimule les sens et favorise le lien de confiance.'
          },
          {
            text: '« Peu importe, mangez ce qu’il y a et ne posez pas trop de questions. »',
            isAppropriate: false,
            feedback: 'Ton sec et dénué d’empathie.'
          }
        ]
      }
    ]
  },
  {
    id: 'scen_sp_02',
    domain: 'service_personne',
    domainTitle: 'Service à la personne & Entretien',
    title: 'Dialogue 2 : Prévenir la déshydratation en période de chaleur',
    description: 'Pendant une vague de chaleur, vous visitez Madame Martinez qui boit trop peu au quotidien.',
    initialContext: 'Il fait 31°C dans l’appartement. La bouteille d’eau posée sur la table est encore presque pleine.',
    dialogueNodes: [
      {
        nodeId: 'n1',
        interlocutorName: 'Madame Martinez',
        interlocutorRole: 'Bénéficiaire à domicile',
        interlocutorText: 'Bonjour... Pourquoi m’apportez-vous encore ce grand verre d’eau ? Je n’ai pas du tout soif, laissez-moi tranquille.',
        userPrompt: 'Comment surmontez-vous le refus avec douceur et pédagogie ?',
        choices: [
          {
            text: '« Bonjour Madame Martinez. Avec cette chaleur, le corps perd beaucoup d’eau sans qu’on ressente la soif. Pour que ce soit plus agréable, voulez-vous que j’y ajoute une goutte de sirop de citron bien frais ou une coupelle de compote ? »',
            isAppropriate: true,
            feedback: 'Remarquable ! Explication simple du phénomène de déshydratation et alternative gustative attrayante.'
          },
          {
            text: '« Si vous ne buvez pas ce verre d’un coup, j’appelle le médecin pour qu’il vous mette à l’hôpital ! »',
            isAppropriate: false,
            feedback: 'Menace inacceptable. La contrainte brutale rompt l’alliance thérapeutique.'
          },
          {
            text: '« Bon, si vous ne voulez pas, tant pis pour vous. »',
            isAppropriate: false,
            feedback: 'Démission professionnelle. En cas de forte chaleur, l’hydratation des aînés est une obligation de surveillance vitale.'
          }
        ]
      },
      {
        nodeId: 'n2',
        interlocutorName: 'Madame Martinez',
        interlocutorRole: 'Bénéficiaire à domicile',
        interlocutorText: 'Oh, avec un soupçon de citron, c’est vrai que c’est bien meilleur. Merci.',
        userPrompt: 'Comment organisez-vous la suite pour garantir ses apports de la journée ?',
        choices: [
          {
            text: '« Je vous en prie ! Je prépare une petite carafe fraîche sur votre table basse avec un verre adapté, et je note sur le cahier de transmission que vous avez bu 250 ml ce matin. »',
            isAppropriate: true,
            feedback: 'Organisation rigoureuse et traçabilité exemplaire sur le cahier de liaison.'
          },
          {
            text: '« Très bien, maintenant je pars faire ma pause cigarette dehors. »',
            isAppropriate: false,
            feedback: 'Comportement négligent et non professionnel au domicile.'
          }
        ]
      }
    ]
  },
  {
    id: 'scen_sp_03',
    domain: 'service_personne',
    domainTitle: 'Service à la personne & Entretien',
    title: 'Dialogue 3 : Noter un risque de chute et informer la famille',
    description: 'En passant l’aspirateur, vous constatez qu’un coin du tapis du salon rebique et glisse sur le parquet ciré.',
    initialContext: 'La fille de la bénéficiaire passe déposer des courses pendant votre prestation d’entretien.',
    dialogueNodes: [
      {
        nodeId: 'n1',
        interlocutorName: 'Madame Legrand',
        interlocutorRole: 'Fille de la personne aidée',
        interlocutorText: 'Bonjour ! Je passe juste cinq minutes déposer les courses pour maman avant de retourner au bureau. Tout se passe bien ?',
        userPrompt: 'Comment lui signalez-vous le risque de chute au salon de manière constructive ?',
        choices: [
          {
            text: '« Bonjour Madame Legrand. Tout va bien avec votre maman, mais je tenais à vous signaler que le tapis du couloir rebique et glisse beaucoup sur le parquet. Pour éviter tout risque de trébuchement, il serait prudent de poser un filet antidérapant dessous ou de le ranger provisoirement. »',
            isAppropriate: true,
            feedback: 'Excellente démarche préventive ! Observation factuelle du danger et suggestion bienveillante pour la sécurité de la bénéficiaire.'
          },
          {
            text: '« Votre appartement est une catastrophe, votre mère va se casser le col du fémur si vous ne changez pas tout ! »',
            isAppropriate: false,
            feedback: 'Ton dramatisant et accusateur qui culpabilise inutilement les proches aidants.'
          },
          {
            text: '« Rien à signaler, tout est parfait, au revoir. »',
            isAppropriate: false,
            feedback: 'Manque de vigilance : le rôle d’aide à domicile inclut le repérage proactif des risques domestiques.'
          }
        ]
      },
      {
        nodeId: 'n2',
        interlocutorName: 'Madame Legrand',
        interlocutorRole: 'Fille de la personne aidée',
        interlocutorText: 'Vous avez mille fois raison, elle a failli glisser la semaine dernière. J’achèterai un sous-tapis ce week-end. Pouvez-vous le noter sur le cahier ?',
        userPrompt: 'Comment confirmez-vous votre transmission écrite ?',
        choices: [
          {
            text: '« Absolument, je consigne la remarque sur le cahier de liaison pour que mes collègues du soir soient également vigilantes lors des déplacements de votre maman. »',
            isAppropriate: true,
            feedback: 'Parfait ! Utilisation rigoureuse de l’outil de transmission inter-professionnel.'
          },
          {
            text: '« Non, je n’ai pas le temps d’écrire, dites-le vous-même à l’autre fille. »',
            isAppropriate: false,
            feedback: 'Le cahier de transmission est un document obligatoire et central pour la continuité de l’accompagnement.'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 3. COMMERCE & LIBRE-SERVICE - 3 DIALOGUES
  // =========================================================================
  {
    id: 'scen_ls_01',
    domain: 'libre_service',
    domainTitle: 'Libre-service & Grande distribution',
    title: 'Dialogue 1 : Renseigner un client et gérer une rupture en rayon',
    description: 'Vous êtes employé(e) commercial(e) au rayon épicerie. Un client cherche un article en promotion.',
    initialContext: 'Vous êtes en train de faire le facing du rayon quand un client s’approche avec un prospectus promotionnel.',
    dialogueNodes: [
      {
        nodeId: 'n1',
        interlocutorName: 'Monsieur Leroy',
        interlocutorRole: 'Client du magasin',
        interlocutorText: 'Bonjour madame / monsieur. Je cherche l’huile d’olive en promotion sur votre catalogue, mais l’étagère est totalement vide !',
        userPrompt: 'Comment réagissez-vous de manière professionnelle et polie ?',
        choices: [
          {
            text: '« Bonjour Monsieur. Laissez-moi vérifier la référence sur mon terminal. Je vais contrôler tout de suite dans la réserve si nous avons reçu une nouvelle palette ce matin. »',
            isAppropriate: true,
            feedback: 'Excellente formule ! Formule de salutation polie, prise en charge immédiate et utilisation du matériel professionnel.'
          },
          {
            text: '« S’il n’y en a plus, c’est qu’il n’y en a plus. Repassez demain matin ou la semaine prochaine. »',
            isAppropriate: false,
            feedback: 'Formulation trop abrupte et négative. En commerce, on vérifie toujours le stock en réserve ou l’on propose une alternative équivalente.'
          },
          {
            text: '« Je ne sais pas, ce n’est pas mon rayon, demandez à quelqu’un d’autre. »',
            isAppropriate: false,
            feedback: 'À proscrire. Même si ce n’est pas votre rayon attitré, on accompagne le client vers un collègue compétent.'
          }
        ]
      },
      {
        nodeId: 'n2',
        interlocutorName: 'Monsieur Leroy',
        interlocutorRole: 'Client du magasin',
        interlocutorText: 'Merci beaucoup ! En attendant, pouvez-vous me dire où se trouvent les caisses automatiques s’il vous plaît ?',
        userPrompt: 'Comment indiquez-vous la direction clairement au client ?',
        choices: [
          {
            text: '« Oui, bien sûr. Continuez tout droit jusqu’au bout de l’allée centrale, puis tournez à droite : elles sont situées juste en face du pôle accueil. »',
            isAppropriate: true,
            feedback: 'Parfait ! Utilisation précise des repères spatiaux (tout droit, au bout de, à droite, en face de).'
          },
          {
            text: '« C’est là-bas derrière. Vous trouverez facilement tout seul. »',
            isAppropriate: false,
            feedback: 'Trop vague : le client risque d’errer dans les allées sans trouver son chemin.'
          }
        ]
      }
    ]
  },
  {
    id: 'scen_ls_02',
    domain: 'libre_service',
    domainTitle: 'Libre-service & Grande distribution',
    title: 'Dialogue 2 : Traiter une contestation de prix en caisse',
    description: 'Une cliente conteste le prix affiché d’un paquet de café moulu au moment du passage en caisse.',
    initialContext: 'L’article passe à 4,20 € sur le scanner, alors que la cliente affirme l’avoir vu à 3,10 € sur le bandeau de gondole.',
    dialogueNodes: [
      {
        nodeId: 'n1',
        interlocutorName: 'Madame Brunet',
        interlocutorRole: 'Cliente en caisse',
        interlocutorText: 'Attendez, il y a une erreur ! Votre paquet de café passe à 4,20 €, or il était étiqueté à 3,10 € en tête de gondole. Je refuse de payer ce prix-là !',
        userPrompt: 'Comment désamorcez-vous la tension avec diplomatie ?',
        choices: [
          {
            text: '« Je comprends tout à fait votre étonnement, Madame. Restons calmes, je contacte mon collègue du rayon épicerie au micro pour vérifier immédiatement l’étiquette en rayon. Si l’erreur d’affichage est confirmée, le prix affiché en rayon s’appliquera. »',
            isAppropriate: true,
            feedback: 'Attitude exemplaire ! Écoute empathique, respect du cadre juridique commercial et recours à une vérification rapide.'
          },
          {
            text: '« C’est l’ordinateur qui a toujours raison. Si vous n’avez pas d’argent, laissez le produit ici. »',
            isAppropriate: false,
            feedback: 'Propos insultants et méprisants, intolérables en relation clientèle.'
          },
          {
            text: '« Vous avez dû mal lire l’étiquette, les clients se trompent tout le temps. »',
            isAppropriate: false,
            feedback: 'Mettre en doute la bonne foi du client ne fait qu’envenimer la réclamation.'
          }
        ]
      },
      {
        nodeId: 'n2',
        interlocutorName: 'Madame Brunet',
        interlocutorRole: 'Cliente en caisse',
        interlocutorText: 'Très bien, merci d’avoir vérifié. En effet, c’était bien affiché 3,10 € en promotion jusqu’à ce soir.',
        userPrompt: 'Comment finalisez-vous l’encaissement avec le sourire ?',
        choices: [
          {
            text: '« L’erreur d’étiquetage est rectifiée : je vous applique immédiatement le tarif de 3,10 €. Nous vous prions de nous excuser pour ce contretemps. Souhaitez-vous votre ticket de caisse ? »',
            isAppropriate: true,
            feedback: 'Parfait ! Excuse professionnelle, solution appliquée sans délai et question de clôture commerciale polie.'
          },
          {
            text: '« Bon, voilà, dépêchez-vous de payer maintenant, il y a du monde qui attend derrière vous. »',
            isAppropriate: false,
            feedback: 'Manque de considération envers la cliente.'
          }
        ]
      }
    ]
  },
  {
    id: 'scen_ls_03',
    domain: 'libre_service',
    domainTitle: 'Libre-service & Grande distribution',
    title: 'Dialogue 3 : Sécurité lors de l’utilisation du transpalette manuel',
    description: 'Un collègue récemment embauché transporte une palette haute en plein milieu d’une allée marchande.',
    initialContext: 'À 10h, alors que les clients circulent dans les rayons, votre collègue tire la charge à vive allure sans visibilité.',
    dialogueNodes: [
      {
        nodeId: 'n1',
        interlocutorName: 'Lucas',
        interlocutorRole: 'Nouvel employé de rayon',
        interlocutorText: 'Salut ! Je file poser cette palette de lessive au bout du rayon 8. Pourquoi tu me fais signe de m’arrêter ?',
        userPrompt: 'Comment lui rappelez-vous la consigne de sécurité avec fermeté et bienveillance ?',
        choices: [
          {
            text: '« Lucas, attention ! Les clients circulent nombreux ce matin. La règle de sécurité impose de déplacer le transpalette à vitesse de marche lente, les fourches baissées à 5 cm du sol, et de pousser plutôt que de tirer quand la charge bloque la vue. »',
            isAppropriate: true,
            feedback: 'Excellent rappel de prévention des accidents du travail et de protection des clients du magasin.'
          },
          {
            text: '« Tu es complètement fou ! Tu vas écraser quelqu’un et finir au tribunal ! »',
            isAppropriate: false,
            feedback: 'Ton hystérique peu propice à un apprentissage serein des règles de travail.'
          },
          {
            text: '« Non rien, continue à courir, on est pressés. »',
            isAppropriate: false,
            feedback: 'La sécurité ne doit jamais être sacrifiée pour la vitesse.'
          }
        ]
      },
      {
        nodeId: 'n2',
        interlocutorName: 'Lucas',
        interlocutorRole: 'Nouvel employé de rayon',
        interlocutorText: 'Ah mince, merci de me le dire, je n’avais pas vu la dame avec sa poussette qui arrivait à l’angle. Peux-tu m’aider à manœuvrer ?',
        userPrompt: 'Comment favorisez-vous la coopération entre collègues ?',
        choices: [
          {
            text: '« Bien sûr, je me place à l’angle pour guider les clients pendant que tu tournes tranquillement dans l’allée. On sécurise la zone ensemble. »',
            isAppropriate: true,
            feedback: 'Esprit d’équipe exemplaire : solidarité et respect de la sécurité collective.'
          },
          {
            text: '« Débrouille-toi tout seul, ce n’est pas mon travail. »',
            isAppropriate: false,
            feedback: 'Comportement individualiste non coopératif.'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 4. SANTÉ & SOINS EN ÉTABLISSEMENT - 3 DIALOGUES
  // =========================================================================
  {
    id: 'scen_sa_01',
    domain: 'sante',
    domainTitle: 'Santé & Soins en établissement',
    title: 'Dialogue 1 : Répondre à la sonnette d’appel et rassurer une résidente',
    description: 'Madame Mercier, 84 ans, a fait sonner sa poire d’appel car elle ressent une vive douleur à la hanche.',
    initialContext: 'Vous êtes aide-soignant(e) de garde. Le voyant rouge au-dessus de la chambre 14 s’allume.',
    dialogueNodes: [
      {
        nodeId: 'n1',
        interlocutorName: 'Madame Mercier',
        interlocutorRole: 'Résidente en EHPAD',
        interlocutorText: 'Bonjour mon petit... J’ai essayé de me lever pour aller au fauteuil, mais ma jambe gauche me fait terriblement mal ce matin.',
        userPrompt: 'Comment réagissez-vous pour sécuriser et rassurer la résidente ?',
        choices: [
          {
            text: '« Bonjour Madame Mercier. Ne bougez pas, restez bien assise sur le lit. Je vais vous réinstaller confortablement avec un coussin sous le dos et je préviens l’infirmière sans tarder pour qu’elle vienne évaluer votre douleur. »',
            isAppropriate: true,
            feedback: 'Idéal ! Posture rassurante, consigne de prudence (« ne bougez pas ») et respect strict du champ de compétences professionnelles.'
          },
          {
            text: '« Vous savez bien qu’il ne faut jamais vous lever seule ! Vous n’écoutez rien, c’est de votre faute si vous avez mal ! »',
            isAppropriate: false,
            feedback: 'Ton culpabilisant et infantilisant absolument inadmissible avec une personne vulnérable.'
          },
          {
            text: '« Prenez deux gélules dans le tiroir de votre table de nuit et attendez que ça passe. »',
            isAppropriate: false,
            feedback: 'Interdit formel ! Seul le médecin ou l’infirmier diplômé d’État est habilité à prescrire ou administrer un antalgique.'
          }
        ]
      },
      {
        nodeId: 'n2',
        interlocutorName: 'Madame Mercier',
        interlocutorRole: 'Résidente en EHPAD',
        interlocutorText: 'Merci d’être venue si vite. Pouvez-vous juste me rapprocher mon verre d’eau et mes lunettes avant d’aller chercher l’infirmière ?',
        userPrompt: 'Comment répondez-vous à ses besoins de confort immédiats ?',
        choices: [
          {
            text: '« Bien sûr, voici vos lunettes sur la table de nuit et votre verre d’eau à portée de main. Je vous laisse la sonnette juste à côté de vos doigts. Je reviens dans deux minutes avec l’infirmière. »',
            isAppropriate: true,
            feedback: 'Parfait ! Rapprochement des objets de confort et maintien du système d’appel à portée immédiate de la personne.'
          },
          {
            text: '« Non, vous n’avez besoin de rien, attendez silencieusement. »',
            isAppropriate: false,
            feedback: 'Attitude froide et dépourvue d’humanité.'
          }
        ]
      }
    ]
  },
  {
    id: 'scen_sa_02',
    domain: 'sante',
    domainTitle: 'Santé & Soins en établissement',
    title: 'Dialogue 2 : Transmission ciblée lors de la relève d’équipe',
    description: 'À 14h, lors des transmissions orales inter-équipes, vous présentez la situation d’un résident affaibli.',
    initialContext: 'La relève réunit l’infirmière coordinatrice et les aides-soignants du matin et de l’après-midi.',
    dialogueNodes: [
      {
        nodeId: 'n1',
        interlocutorName: 'Claire',
        interlocutorRole: 'Infirmière coordinatrice (IDEC)',
        interlocutorText: 'Nous passons à la chambre 22, Monsieur Bernard. Comment s’est passée la matinée pour lui ?',
        userPrompt: 'Comment effectuez-vous une transmission ciblée structurée selon la méthode D-A-R (Donnée, Action, Résultat) ?',
        choices: [
          {
            text: '« Pour Monsieur Bernard : Donnée : il présentait un refus d’alimentation et une grande fatigue ce matin. Action : j’ai fractionné son repas, lui ai proposé un yaourt enrichi et encouragé l’hydratation (environ 300 ml). Résultat : prise alimentaire partielle bien tolérée, mais surveillance accrue à maintenir au goûter et au dîner. »',
            isAppropriate: true,
            feedback: 'Excellente transmission professionnelle ! Structurée, concise, factuelle et conforme à la démarche D-A-R en milieu soignant.'
          },
          {
            text: '« Oh, il n’était pas sympa du tout ce matin, il m’a énervé en boudant son assiette. »',
            isAppropriate: false,
            feedback: 'Jugement de valeur subjectif et non professionnel. Les transmissions doivent rester strictement médicales et comportementales.'
          },
          {
            text: '« Tout va bien, il a mangé un truc. »',
            isAppropriate: false,
            feedback: 'Beaucoup trop flou : l’équipe montante ne dispose d’aucun chiffre ni donnée clinique utile pour assurer le suivi.'
          }
        ]
      },
      {
        nodeId: 'n2',
        interlocutorName: 'Claire',
        interlocutorRole: 'Infirmière coordinatrice (IDEC)',
        interlocutorText: 'Très bien, c’est très clair. As-tu bien reporté ces données sur le logiciel de soins informatisé ?',
        userPrompt: 'Comment confirmez-vous la traçabilité écrite des soins ?',
        choices: [
          {
            text: '« Oui, les constantes, les volumes hydriques et l’observation de refus partiel sont validés sur son dossier informatique. »',
            isAppropriate: true,
            feedback: 'Rigueur absolue ! En milieu de santé, tout ce qui est fait doit être tracé par écrit.'
          },
          {
            text: '« Non, je n’aime pas l’ordinateur, vous vous en souviendrez de tête. »',
            isAppropriate: false,
            feedback: 'La transmission orale ne remplace jamais la trace légale écrite dans le dossier de soins.'
          }
        ]
      }
    ]
  },
  {
    id: 'scen_sa_03',
    domain: 'sante',
    domainTitle: 'Santé & Soins en établissement',
    title: 'Dialogue 3 : Prévenir les risques de chute lors du transfert lit-fauteuil',
    description: 'Vous devez aider Madame Dubreuil à s’asseoir dans son fauteuil roulant pour l’atelier mémoire.',
    initialContext: 'La résidente a les jambes faibles et a tendance à poser les pieds sur le sol en chaussettes glissantes.',
    dialogueNodes: [
      {
        nodeId: 'n1',
        interlocutorName: 'Madame Dubreuil',
        interlocutorRole: 'Résidente en EHPAD',
        interlocutorText: 'Dépêchons-nous, l’animatrice va commencer ! Je peux y aller toute seule, tenez-moi juste par le bras.',
        userPrompt: 'Comment sécurisez-vous le transfert avec les principes d’ergonomie et de prévention des chutes ?',
        choices: [
          {
            text: '« Prenez votre temps Madame Dubreuil. Nous allons d’abord enfiler vos chaussures fermées à semelles antidérapantes. J’ai bloqué les freins de votre fauteuil. Placez vos mains sur mes avant-bras, nous nous levons ensemble au compte de trois. »',
            isAppropriate: true,
            feedback: 'Procédure d’ergonomie parfaite ! Chaussage sécurisé, freins enclenchés, prises sécurisées et synchronisation verbale.'
          },
          {
            text: '« Allez-y, sautez dans le fauteuil, je vous rattraperai si vous tombez ! »',
            isAppropriate: false,
            feedback: 'Dangereux et imprudent : risque de chute grave pour la résidente et de lumbago pour le soignant.'
          },
          {
            text: '« Puisque vous êtes pressée, marchez en chaussettes sur le linoléum, tant pis pour les chaussons. »',
            isAppropriate: false,
            feedback: 'Marcher en chaussettes sur un sol lisse est la première cause de glissade chez les personnes âgées.'
          }
        ]
      },
      {
        nodeId: 'n2',
        interlocutorName: 'Madame Dubreuil',
        interlocutorRole: 'Résidente en EHPAD',
        interlocutorText: 'Ouf, je me sens bien installée et en sécurité. Merci pour votre aide précieuse.',
        userPrompt: 'Quelle dernière vérification effectuez-vous avant de partir ?',
        choices: [
          {
            text: '« Je vérifie que vos cale-pieds sont bien rabattus et que votre gilet est fermé. Nous pouvons rejoindre la salle d’animation sereinement ! »',
            isAppropriate: true,
            feedback: 'Excellente finition de l’acte d’aide aux déplacements.'
          },
          {
            text: '« Bon, filez maintenant toute seule dans le couloir. »',
            isAppropriate: false,
            feedback: 'Manque d’accompagnement sécurisé jusqu’au lieu de l’activité.'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 5. PÉRISCOLAIRE & ENFANCE - 3 DIALOGUES
  // =========================================================================
  {
    id: 'scen_peri_01',
    domain: 'periscolaire',
    domainTitle: 'Périscolaire & Garderie',
    title: 'Dialogue 1 : Contrôler l’autorisation de sortie d’un enfant',
    description: 'À 17h15, un adulte inconnu de l’équipe se présente au portail de l’école pour récupérer le jeune Lucas.',
    initialContext: 'L’animateur est responsable du registre de sortie et du pointage des départs.',
    dialogueNodes: [
      {
        nodeId: 'n1',
        interlocutorName: 'Monsieur Fabre',
        interlocutorRole: 'Visiteur à la grille de l’école',
        interlocutorText: 'Bonjour ! Je suis le voisin des parents de Lucas. Sa maman m’a téléphoné en catastrophe car elle est bloquée sur l’autoroute. Je viens le chercher.',
        userPrompt: 'Comment appliquez-vous le protocole de sécurité et de protection de l’enfance ?',
        choices: [
          {
            text: '« Bonjour Monsieur. Pour la sécurité de Lucas, je dois vérifier si votre nom est inscrit sur la fiche d’autorisation parentale officielle, et je vous demande de me présenter une pièce d’identité. Si votre nom n’y figure pas, j’appellerai personnellement la maman avant tout départ. »',
            isAppropriate: true,
            feedback: 'Règle d’or en périscolaire ! La sécurité des mineurs impose une vérification rigoureuse de la pièce d’identité et de l’accord écrit des responsables légaux.'
          },
          {
            text: '« Ah très bien, Lucas a l’air de vous connaître un peu, vous pouvez partir avec lui tout de suite. »',
            isAppropriate: false,
            feedback: 'Faute professionnelle gravissime ! On ne confie jamais un enfant sans autorisation écrite et vérifiée.'
          },
          {
            text: '« Allez-vous-en immédiatement sinon j’appelle la police ! »',
            isAppropriate: false,
            feedback: 'Réaction inutilement agressive. La fermeté courtoise suffit pour expliquer la procédure réglementaire.'
          }
        ]
      },
      {
        nodeId: 'n2',
        interlocutorName: 'Monsieur Fabre',
        interlocutorRole: 'Visiteur à la grille de l’école',
        interlocutorText: 'Je comprends tout à fait, vous avez raison d’être strict pour les petits. Voici ma carte d’identité.',
        userPrompt: 'Le nom figure bien sur la fiche signée par les parents. Comment terminez-vous la transmission ?',
        choices: [
          {
            text: '« Merci Monsieur Fabre. Tout est parfaitement en règle. Je coche le registre de départ à 17h20 et je note votre nom. Lucas, tu peux prendre ton cartable et dire au revoir. Bonne fin de journée ! »',
            isAppropriate: true,
            feedback: 'Parfait ! Enregistrement formel de l’heure et de l’identité sur le registre de garderie.'
          },
          {
            text: '« Allez, prenez le gosse et ne traînez pas devant la grille. »',
            isAppropriate: false,
            feedback: 'Langage vulgaire et attitude déplacée.'
          }
        ]
      }
    ]
  },
  {
    id: 'scen_peri_02',
    domain: 'periscolaire',
    domainTitle: 'Périscolaire & Garderie',
    title: 'Dialogue 2 : Réguler un conflit entre deux élèves dans la cour',
    description: 'Pendant la récréation de l’après-midi, deux garçons de 8 ans se disputent violemment un ballon de foot.',
    initialContext: 'Les voix montent, les deux élèves commencent à se bousculer près du préau.',
    dialogueNodes: [
      {
        nodeId: 'n1',
        interlocutorName: 'Maxime et Youssef',
        interlocutorRole: 'Élèves de CE2 en conflit',
        interlocutorText: '« C’est mon ballon, je l’ai pris le premier ! » / « Menteur, tu joues tout seul depuis 20 minutes, tu ne passes jamais la balle ! »',
        userPrompt: 'Comment intervenez-vous pour calmer la tension et restaurer le dialogue ?',
        choices: [
          {
            text: '« Stop les garçons, on s’arrête, on baisse les bras et on respire calmement. Asseyez-vous sur ce banc avec moi. Maxime, explique-moi ce qui s’est passé sans crier, puis ce sera au tour de Youssef de parler sans l’interrompre. »',
            isAppropriate: true,
            feedback: 'Excellente posture éducative ! Arrêt immédiat de l’escalade physique, isolement calme et cadre clair d’écoute mutuelle.'
          },
          {
            text: '« Vous êtes insupportables ! Je confisque le ballon pour tout le trimestre et vous êtes privés de récréation jusqu’à ce soir ! »',
            isAppropriate: false,
            feedback: 'Sanction démesurée et punitive qui n’apprend pas aux enfants à résoudre pacifiquement un désaccord.'
          },
          {
            text: '« Battez-vous un bon coup et le gagnant gardera le ballon. »',
            isAppropriate: false,
            feedback: 'Absolument interdit et contraire aux valeurs fondamentales de l’Éducation nationale et de l’animation.'
          }
        ]
      },
      {
        nodeId: 'n2',
        interlocutorName: 'Youssef',
        interlocutorRole: 'Élève de CE2',
        interlocutorText: 'Moi je voulais juste qu’on fasse une vraie équipe pour faire un match tous ensemble.',
        userPrompt: 'Comment les guidez-vous vers une solution coopérative ?',
        choices: [
          {
            text: '« C’est une excellente idée Youssef. Maxime, es-tu d’accord pour que vous soyez capitaines de deux équipes et que vous partagiez le terrain avec les autres camarades ? »',
            isAppropriate: true,
            feedback: 'Pédagogie de médiation active : transformer un conflit en projet de jeu collectif inclusif.'
          },
          {
            text: '« Non, vous ne jouerez plus jamais ensemble. »',
            isAppropriate: false,
            feedback: 'Bloque la réconciliation et fige la rancune entre enfants.'
          }
        ]
      }
    ]
  },
  {
    id: 'scen_peri_03',
    domain: 'periscolaire',
    domainTitle: 'Périscolaire & Garderie',
    title: 'Dialogue 3 : Gestion d’un goûter d’anniversaire et protocole PAI',
    description: 'Une famille a apporté un gâteau d’anniversaire au chocolat pour la classe, mais un enfant a un PAI alimentaire.',
    initialContext: 'La petite Léa a une allergie sévère aux fruits à coque et arachides signalée par un protocole médical PAI.',
    dialogueNodes: [
      {
        nodeId: 'n1',
        interlocutorName: 'Madame Martin',
        interlocutorRole: 'Parent d’élève bénévole',
        interlocutorText: 'J’ai préparé ce magnifique gâteau au chocolat maison pour l’anniversaire de Thomas ! Tout le monde peut en avoir une part ?',
        userPrompt: 'Comment appliquez-vous la règle de vigilance sanitaire concernant le PAI de Léa ?',
        choices: [
          {
            text: '« Merci beaucoup Madame Martin pour cette gentille attention. Thomas va être ravi ! Cependant, nous avons Léa qui a un PAI pour allergie sévère aux fruits à coque. Comme le gâteau a été fait à la maison, Léa prendra exclusivement son goûter individuel sécurisé préparé par sa maman dans la boîte PAI. »',
            isAppropriate: true,
            feedback: 'Respect absolu du protocole d’accueil individualisé (PAI) ! Ne jamais donner de gâteau artisanal sans liste officielle certifiée à un enfant allergique.'
          },
          {
            text: '« Donnez-lui juste une toute petite miette de gâteau pour lui faire plaisir, une petite miette ne fait jamais de mal. »',
            isAppropriate: false,
            feedback: 'Extrêmement dangereux : la moindre trace d’arachide ou de noisette peut déclencher un œdème de Quincke mortel.'
          },
          {
            text: '« Les gâteaux sont interdits, jetez-le directement à la poubelle devant Thomas. »',
            isAppropriate: false,
            feedback: 'Brutalité inutile qui gâche la fête au lieu de gérer la sécurité de manière mesurée.'
          }
        ]
      },
      {
        nodeId: 'n2',
        interlocutorName: 'Madame Martin',
        interlocutorRole: 'Parent d’élève bénévole',
        interlocutorText: 'Bien sûr, vous avez totalement raison ! La santé des enfants passe avant tout. Où est la trousse d’urgence de Léa si besoin ?',
        userPrompt: 'Comment la rassurez-vous sur l’emplacement des protocoles d’urgence ?',
        choices: [
          {
            text: '« La trousse d’urgence PAI avec le stylo auto-injecteur d’adrénaline et l’ordonnance est rangée dans l’armoire rouge identifiée du bureau de direction, accessible immédiatement par l’équipe formée. »',
            isAppropriate: true,
            feedback: 'Maîtrise irréprochable des procédures d’urgence et de localisation du matériel de secours.'
          },
          {
            text: '« Je crois que c’est quelque part sous un tas de dossiers, on cherchera si elle s’étouffe. »',
            isAppropriate: false,
            feedback: 'Négligence criminelle face à une urgence vitale.'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 6. BTP & CHANTIER - 3 DIALOGUES
  // =========================================================================
  {
    id: 'scen_btp_01',
    domain: 'btp',
    domainTitle: 'BTP & Sécurité sur chantier',
    title: 'Dialogue 1 : Rappel des consignes de sécurité obligatoires',
    description: 'Sur le chantier de rénovation, un nouvel ouvrier intérimaire commence sans ses gants ni ses lunettes.',
    initialContext: 'Le chef d’équipe vous demande d’accueillir Samir, nouvel intérimaire, et de vérifier qu’il respecte les consignes de sécurité.',
    dialogueNodes: [
      {
        nodeId: 'n1',
        interlocutorName: 'Samir',
        interlocutorRole: 'Ouvrier intérimaire',
        interlocutorText: 'Salut ! Je viens pour le coulage de la dalle de béton. On commence où ?',
        userPrompt: 'Vous remarquez qu’il n’a pas mis ses gants de protection ni ses lunettes. Que lui dites-vous ?',
        choices: [
          {
            text: '« Bienvenue Samir. Avant de commencer, mets tes gants de manutention et tes lunettes de sécurité. Sur ce chantier, le port des EPI complets est obligatoire pour tout le monde sans exception. »',
            isAppropriate: true,
            feedback: 'Très bien ! Accueil chaleureux combiné à un rappel ferme et clair des consignes de sécurité obligatoires sur le chantier.'
          },
          {
            text: '« Arrête tout ! Tu n’as rien compris, tu vas te faire virer si le patron te voit comme ça ! »',
            isAppropriate: false,
            feedback: 'Trop agressif. Expliquez la règle avec calme, autorité et professionnalisme.'
          },
          {
            text: '« Ce n’est pas grave pour les gants, fais juste attention au ciment frais. »',
            isAppropriate: false,
            feedback: 'Dangereux ! Le ciment est corrosif et peut causer de graves brûlures chimiques sur la peau nue.'
          }
        ]
      },
      {
        nodeId: 'n2',
        interlocutorName: 'Samir',
        interlocutorRole: 'Ouvrier intérimaire',
        interlocutorText: 'D’accord, merci du conseil, je les mets tout de suite. Où sont stockés les sacs de ciment et la bétonnière ?',
        userPrompt: 'Comment lui répondez-vous avec précision pour orienter son travail ?',
        choices: [
          {
            text: '« Les sacs sont empilés sous la bâche bleue près du conteneur d’outillage, et la bétonnière est branchée juste à côté du point d’eau avec le disjoncteur différentiel. »',
            isAppropriate: true,
            feedback: 'Parfait ! Emploi précis des repères de lieu (sous la bâche, près de, à côté de) et mention de la sécurité électrique.'
          },
          {
            text: '« Cherche un peu partout sur le chantier, tu finiras bien par trouver. »',
            isAppropriate: false,
            feedback: 'Peu collaboratif pour l’intégration d’un nouvel arrivant.'
          }
        ]
      }
    ]
  },
  {
    id: 'scen_btp_02',
    domain: 'btp',
    domainTitle: 'BTP & Sécurité sur chantier',
    title: 'Dialogue 2 : Signaler un danger immédiat et sécuriser une trémie',
    description: 'Au deuxième étage d’un bâtiment en construction, une ouverture dans le plancher n’a plus de garde-corps.',
    initialContext: 'Une trémie d’ascenseur est béante avec un risque direct de chute de 6 mètres.',
    dialogueNodes: [
      {
        nodeId: 'n1',
        interlocutorName: 'Christian',
        interlocutorRole: 'Chef de chantier',
        interlocutorText: 'Alors l’équipe, comment avance le ragréage au deuxième étage ? Aucun blocage ?',
        userPrompt: 'Comment signalez-vous immédiatement le danger vital de chute ?',
        choices: [
          {
            text: '« Christian, alerte sécurité immédiate au R+2 ! Le garde-corps provisoire de la trémie d’ascenseur a été démonté par les électriciens. Le trou est béant, c’est un danger mortel de chute. Il faut baliser la zone et reposer la protection tout de suite. »',
            isAppropriate: true,
            feedback: 'Remarquable réactivité ! Détection d’un risque majeur de chute de hauteur, localisation précise et proposition d’action corrective immédiate.'
          },
          {
            text: '« Ça va, c’est un peu dangereux là-haut mais on fait attention où on marche. »',
            isAppropriate: false,
            feedback: 'Inconscience professionnelle totale : les chutes de hauteur sont la première cause d’accidents mortels dans le BTP.'
          },
          {
            text: '« On verra ça ce soir avant de partir si on a cinq minutes. »',
            isAppropriate: false,
            feedback: 'Un danger grave et imminent doit être traité sans aucune seconde d’attente.'
          }
        ]
      },
      {
        nodeId: 'n2',
        interlocutorName: 'Christian',
        interlocutorRole: 'Chef de chantier',
        interlocutorText: 'Bravo pour la vigilance ! Prends le ruban de chantier jaune et noir dans le fourgon et aide-moi à installer la grille de condamnation.',
        userPrompt: 'Comment confirmez-vous votre intervention ?',
        choices: [
          {
            text: '« Bien reçu Christian ! Je récupère le rubalise et les serre-joints dans le fourgon et je monte t’assister pour verrouiller la grille. »',
            isAppropriate: true,
            feedback: 'Efficacité et sens des responsabilités au service de la vie de ses collègues.'
          },
          {
            text: '« Je préfère aller boire un café, débrouille-toi. »',
            isAppropriate: false,
            feedback: 'Inacceptable en situation de mise en sécurité d’un chantier.'
          }
        ]
      }
    ]
  },
  {
    id: 'scen_btp_03',
    domain: 'btp',
    domainTitle: 'BTP & Sécurité sur chantier',
    title: 'Dialogue 3 : Réceptionner et guider un camion malaxeur (toupie)',
    description: 'Le camion toupie transportant 8 m³ de béton prêt à l’emploi arrive à l’entrée étroite du chantier.',
    initialContext: 'La rue est encombrée par des voitures stationnées et des piétons empruntent le trottoir.',
    dialogueNodes: [
      {
        nodeId: 'n1',
        interlocutorName: 'Mickaël',
        interlocutorRole: 'Chauffeur du camion toupie',
        interlocutorText: 'Bonjour ! J’ai la livraison de béton C25/30 pour le radier. L’accès en marche arrière est très serré, tu peux me guider ?',
        userPrompt: 'Comment organisez-vous le guidage sécurisé du camion en tant que signaleur ?',
        choices: [
          {
            text: '« Bonjour ! Oui, j’enfile mon gilet haute visibilité classe 2. Je bloque le passage piéton avec la barrière amovible et je me place dans ton rétroviseur gauche pour te guider au geste. Ne recule que quand je te fais signe ! »',
            isAppropriate: true,
            feedback: 'Procédure exemplaire de guidage ! Gilet fluorescent, sécurisation des tiers et positionnement permanent dans le champ visuel du conducteur.'
          },
          {
            text: '« Recule vite à fond, je te crierai dessus si tu touches une voiture ! »',
            isAppropriate: false,
            feedback: 'Extrêmement dangereux : le chauffeur n’entend rien à cause du bruit du moteur et du tambour malaxeur.'
          },
          {
            text: '« Débrouille-toi avec tes caméras, je n’ai pas envie de me salir les mains. »',
            isAppropriate: false,
            feedback: 'Refus de guidage créant un risque majeur d’accrochage ou d’écrasement.'
          }
        ]
      },
      {
        nodeId: 'n2',
        interlocutorName: 'Mickaël',
        interlocutorRole: 'Chauffeur du camion toupie',
        interlocutorText: 'Impeccable, je suis bien aligné sur la pompe à béton. Tu signes le bon de livraison avant que j’ouvre la goulotte ?',
        userPrompt: 'Comment procédez-vous à la vérification avant signature ?',
        choices: [
          {
            text: '« Je vérifie la formulation du béton, l’heure de départ de la centrale et le volume sur le bon, et je signe avec le tampon du chantier. Tu peux engager la goulotte. »',
            isAppropriate: true,
            feedback: 'Rigueur technique : contrôler l’heure de départ est essentiel pour éviter la prise prématurée du béton.'
          },
          {
            text: '« Je signe n’importe où sans regarder, ce n’est que du papier. »',
            isAppropriate: false,
            feedback: 'Erreur administrative qui peut coûter très cher en cas de non-conformité structurelle.'
          }
        ]
      }
    ]
  },

  // =========================================================================
  // 7. SECRÉTARIAT & ACCUEIL - 3 DIALOGUES
  // =========================================================================
  {
    id: 'scen_sec_01',
    domain: 'secretariat',
    domainTitle: 'Secrétariat & Accueil téléphonique',
    title: 'Dialogue 1 : Prendre un message téléphonique professionnel',
    description: 'Au standard d’une entreprise, vous recevez un appel d’un fournisseur pour le directeur financier.',
    initialContext: 'Le téléphone sonne à 11h. Le directeur financier est absent car il participe à une réunion à la préfecture.',
    dialogueNodes: [
      {
        nodeId: 'n1',
        interlocutorName: 'Monsieur Diallo',
        interlocutorRole: 'Fournisseur externe',
        interlocutorText: 'Bonjour, entreprise LogiFrance, pourrais-je parler à Monsieur Vasseur s’il vous plaît ? C’est urgent au sujet de la livraison de matériel.',
        userPrompt: 'Comment répondez-vous avec professionnalisme, courtoisie et discrétion ?',
        choices: [
          {
            text: '« Bonjour Monsieur. Monsieur Vasseur est actuellement en réunion à l’extérieur pour la matinée. Puis-je prendre vos coordonnées et l’objet de votre message pour qu’il vous rappelle dès son retour ? »',
            isAppropriate: true,
            feedback: 'Formule exemplaire ! Politesse, explication claire de l’indisponibilité sans divulguer de détails confidentiels et proposition proactive.'
          },
          {
            text: '« Non, il n’est pas là du tout. Rappelez plus tard dans la semaine si vous voulez. »',
            isAppropriate: false,
            feedback: 'Beaucoup trop sec et expéditif. Cela donne une image déplorable de la structure.'
          },
          {
            text: '« Il est à la préfecture car il a des gros soucis administratifs, il va être très énervé quand il va rentrer. »',
            isAppropriate: false,
            feedback: 'Violation flagrante du devoir de réserve et du secret professionnel.'
          }
        ]
      },
      {
        nodeId: 'n2',
        interlocutorName: 'Monsieur Diallo',
        interlocutorRole: 'Fournisseur externe',
        interlocutorText: 'Très bien, je vous remercie. Je suis Monsieur Diallo de la société MétalPlus au 06 12 34 56 78.',
        userPrompt: 'Comment confirmez-vous que vous avez bien noté les informations ?',
        choices: [
          {
            text: '« C’est bien noté Monsieur Diallo : société MétalPlus au 06 12 34 56 78 au sujet de la livraison de matériel. Je lui transmets votre note dès 14h. Je vous souhaite une excellente journée. »',
            isAppropriate: true,
            feedback: 'Parfait ! Répéter le numéro permet de vérifier l’exactitude de la note, et la formule de clôture est impeccable.'
          },
          {
            text: '« Ouais, d’accord, au revoir. »',
            isAppropriate: false,
            feedback: 'Langage relâché inacceptable pour l’image d’une organisation.'
          }
        ]
      }
    ]
  },
  {
    id: 'scen_sec_02',
    domain: 'secretariat',
    domainTitle: 'Secrétariat & Accueil téléphonique',
    title: 'Dialogue 2 : Accueillir un visiteur sans rendez-vous avec tact',
    description: 'Un démarcheur commercial se présente physiquement à l’accueil et exige de voir la directrice générale immédiatement.',
    initialContext: 'La directrice générale est en entretien d’embauche avec des candidats dans la salle de conférence.',
    dialogueNodes: [
      {
        nodeId: 'n1',
        interlocutorName: 'Monsieur Chardot',
        interlocutorRole: 'Représentant commercial sans rendez-vous',
        interlocutorText: 'Bonjour ! Je viens présenter notre nouvelle solution de photocopieurs connectés à Madame la Directrice. Dites-lui que je suis là, je n’en ai que pour cinq minutes.',
        userPrompt: 'Comment posez-vous les limites professionnelles tout en restant poli et accueillant ?',
        choices: [
          {
            text: '« Bonjour Monsieur. Madame la Directrice est actuellement en entretien de recrutement et ne reçoit que sur rendez-vous préalablement convenu. Je vous invite à me laisser votre carte de visite ainsi que votre plaquette de présentation, et je lui transmettrai dès cet après-midi. »',
            isAppropriate: true,
            feedback: 'Excellente gestion de l’accueil physique ! Courtoisie, fermeté sur le protocole et canalisation du visiteur imprévu.'
          },
          {
            text: '« Vous n’avez pas de rendez-vous ? Sortez tout de suite du bâtiment, vous n’avez rien à faire ici ! »',
            isAppropriate: false,
            feedback: 'Ton agressif et inhospitalier. On peut refuser un entretien avec politesse sans chasser le visiteur.'
          },
          {
            text: '« Entrez directement dans la salle de réunion là-bas à gauche, poussez la porte et parlez-lui. »',
            isAppropriate: false,
            feedback: 'Faute professionnelle majeure : interrompre un entretien confidentiel met la direction en porte-à-faux.'
          }
        ]
      },
      {
        nodeId: 'n2',
        interlocutorName: 'Monsieur Chardot',
        interlocutorRole: 'Représentant commercial sans rendez-vous',
        interlocutorText: 'Je comprends. Puis-je avoir son adresse email directe pour lui envoyer notre catalogue numérique ?',
        userPrompt: 'Comment protégez-vous les coordonnées internes selon les consignes de l’entreprise ?',
        choices: [
          {
            text: '« Pour tout premier contact commercial, les dossiers sont centralisés sur notre boîte générique contact@entreprise.fr. Vous pouvez y adresser votre documentation en précisant l’objet, nous la transmettons ensuite au service des achats. »',
            isAppropriate: true,
            feedback: 'Respect strict de la politique de sécurité des données et filtrage efficace des courriels indésirables.'
          },
          {
            text: '« Tenez, voilà son portable personnel et son adresse privée, n’hésitez pas à l’appeler ce soir. »',
            isAppropriate: false,
            feedback: 'Divulguer des données personnelles privées est une violation légale du RGPD.'
          }
        ]
      }
    ]
  },
  {
    id: 'scen_sec_03',
    domain: 'secretariat',
    domainTitle: 'Secrétariat & Accueil téléphonique',
    title: 'Dialogue 3 : Réceptionner un colis express confidentiel contre signature',
    description: 'Un coursier express livre un paquet sous pli scellé étiqueté "Confidentiel - Service Juridique".',
    initialContext: 'Le livreur est pressé et vous tend son terminal numérique pour apposer l’émargement.',
    dialogueNodes: [
      {
        nodeId: 'n1',
        interlocutorName: 'Karim',
        interlocutorRole: 'Chauffeur-livreur express',
        interlocutorText: 'Bonjour ! Livraison ChronoExpress pour le Service Juridique, deux colis scellés. Pouvez-vous signer ici rapidement sur l’écran ?',
        userPrompt: 'Quelle démarche de contrôle obligatoire effectuez-vous avant de signer le bordereau ?',
        choices: [
          {
            text: '« Bonjour ! Une seconde s’il vous plaît : je vérifie d’abord le nombre de colis, l’état extérieur des cartons (aucun choc ni ouverture) et la concordance avec le nom du destinataire avant de signer avec mon nom en toutes lettres. »',
            isAppropriate: true,
            feedback: 'Procédure logistique parfaite ! Contrôle quantitatif et qualitatif indispensable pour la validité juridique de la réception.'
          },
          {
            text: '« Je signe les yeux fermés sans regarder les paquets, donnez-moi ça vite. »',
            isAppropriate: false,
            feedback: 'En cas de marchandise cassée ou manquante, signer sans réserve engage la responsabilité de l’entreprise.'
          },
          {
            text: '« Je refuse de signer, posez ça sur le trottoir dehors. »',
            isAppropriate: false,
            feedback: 'Refus injustifié et mise en danger de documents confidentiels.'
          }
        ]
      },
      {
        nodeId: 'n2',
        interlocutorName: 'Karim',
        interlocutorRole: 'Chauffeur-livreur express',
        interlocutorText: 'Tout est intact et le compte est bon. Voilà votre récépissé papier. Bonne journée !',
        userPrompt: 'Comment organisez-vous la remise immédiate du pli confidentiel ?',
        choices: [
          {
            text: '« Merci Karim, bonne route ! Je dépose les colis dans l’armoire fermée à clé de l’accueil et j’envoie un courriel instantané à la responsable juridique pour qu’elle vienne les retirer en main propre. »',
            isAppropriate: true,
            feedback: 'Respect absolu de la confidentialité et traçabilité interne irréprochable.'
          },
          {
            text: '« Je laisse le carton ouvert par terre dans le couloir à la vue de tout le monde. »',
            isAppropriate: false,
            feedback: 'Négligence grave face à du courrier juridique confidentiel.'
          }
        ]
      }
    ]
  }
];
