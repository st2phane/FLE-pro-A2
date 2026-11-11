import { GrammarRule } from '../types/fle';

export const GRAMMAR_RULES: GrammarRule[] = [
  // ==========================================
  // 1. LE PRÉSENT DE L'INDICATIF
  // ==========================================
  {
    id: 'gram_present',
    topic: 'present_indicatif',
    title: 'Le Présent de l’indicatif',
    shortDescription: 'Exprimer les actions actuelles, les habitudes quotidiennes et les consignes immédiates de poste.',
    ruleExplanation: [
      'Verbes en -ER (1er groupe) : terminaisons régulières : -e, -es, -e, -ons, -ez, -ent (ex: ranger, travailler, vérifier, préparer).',
      'Verbes en -IR (2e groupe type finir) : -is, -is, -it, -issons, -issez, -issent (ex: choisir, remplir, avertir).',
      'Verbes irréguliers indispensables au travail : ÊTRE (suis, es, est, sommes, êtes, sont), AVOIR (ai, as, a, avons, avez, ont), FAIRE (fais, fait, faisons, faites, font), ALLER (vais, vas, va, allons, allez, vont), PRENDRE (prends, prend, prenons, prenez, prennent), POUVOIR (peux, peut, pouvons, pouvez, peuvent), DEVOIR (dois, doit, devons, devez, doivent).'
    ],
    keyFormulas: [
      {
        label: 'Verbe régulier en -ER (Travailler)',
        formula: 'Radical + -e, -es, -e, -ons, -ez, -ent',
        example: 'Nous travaillons au rayon fruits et légumes.'
      },
      {
        label: 'Verbes de consigne (Devoir / Pouvoir)',
        formula: 'Devoir/Pouvoir au présent + Verbe à l’infinitif',
        example: 'Vous devez porter votre casque sur le chantier.'
      },
      {
        label: 'Faire au pluriel (Attention à « vous »)',
        formula: 'Vous faites (pas de « -ez » !)',
        example: 'Vous faites le facing avant de partir en pause.'
      }
    ],
    comparisons: {
      conceptA: 'Présent d’actualité (En ce moment)',
      conceptB: 'Présent d’habitude (Tous les jours)',
      rows: [
        {
          aspect: 'Moment',
          exampleA: 'Je nettoie le plan de travail de la cuisine.',
          exampleB: 'Je nettoie la cuisine tous les soirs à 21 heures.'
        },
        {
          aspect: 'Poste',
          exampleA: 'L’aide-soignant prend la tension de la patiente.',
          exampleB: 'L’aide-soignant commence son service à 7 heures.'
        }
      ]
    },
    commonMistakes: [
      {
        incorrect: 'Vous faisez la vaisselle.',
        correct: 'Vous faites la vaisselle.',
        tip: 'Le verbe faire est irrégulier avec vous : « vous faites ».'
      },
      {
        incorrect: 'Ils travailles dans un restaurant.',
        correct: 'Ils travaillent dans un restaurant.',
        tip: 'Avec « ils » ou « elles », la terminaison est toujours -ent (muette).'
      }
    ],
    practiceExercises: [
      {
        id: 'gpex_pres_01',
        prompt: 'Verbe régulier en -er au pluriel',
        context: 'Restauration collective',
        sentenceBefore: 'Tous les matins, les cuisiniers',
        blankAnswer: 'préparent',
        sentenceAfter: 'les entrées froides pour le self.',
        options: ['préparent', 'prépare', 'préparons', 'préparez'],
        explanation: 'Le sujet « les cuisiniers » (3e personne du pluriel) prend la terminaison -ent.'
      },
      {
        id: 'gpex_pres_02',
        prompt: 'Verbe irrégulier « faire » avec vous',
        context: 'Consigne en libre-service',
        sentenceBefore: 'À quelle heure',
        blankAnswer: 'faites-vous',
        sentenceAfter: 'la vérification des dates de péremption ?',
        options: ['faites-vous', 'faisez-vous', 'faisons-nous', 'font-ils'],
        explanation: 'La forme correcte du verbe faire avec le pronom « vous » est « faites-vous ».'
      },
      {
        id: 'gpex_pres_03',
        prompt: 'Verbe modal d’obligation « devoir »',
        context: 'Sécurité sur le chantier BTP',
        sentenceBefore: 'Chaque ouvrier',
        blankAnswer: 'doit',
        sentenceAfter: 'mettre ses chaussures de sécurité avant d’entrer.',
        options: ['doit', 'dois', 'doivent', 'devons'],
        explanation: '« Chaque ouvrier » est singulier (il) : le verbe devoir se conjugue « doit ».'
      },
      {
        id: 'gpex_pres_04',
        prompt: 'Verbe « prendre » à la 1re personne',
        context: 'Accueil téléphonique au secrétariat',
        sentenceBefore: 'Un instant, je',
        blankAnswer: 'prends',
        sentenceAfter: 'un stylo pour noter votre numéro de téléphone.',
        options: ['prends', 'prend', 'prenez', 'prenons'],
        explanation: 'Avec « je », le verbe prendre se termine par un « s » : je prends.'
      },
      {
        id: 'gpex_pres_05',
        prompt: 'Verbe du 2e groupe en -ir (remplir)',
        context: 'Service à la personne à domicile',
        sentenceBefore: 'L’auxiliaire de vie',
        blankAnswer: 'remplit',
        sentenceAfter: 'la feuille de passage avant de quitter le domicile.',
        options: ['remplit', 'remplis', 'remplissent', 'remplir'],
        explanation: 'Sujet singulier « l’auxiliaire » (elle) : terminaison -it (elle remplit).'
      },
      {
        id: 'gpex_pres_06',
        prompt: 'Verbe « aller » au présent',
        context: 'Logistique en réserve',
        sentenceBefore: 'Nous',
        blankAnswer: 'allons',
        sentenceAfter: 'chercher le transpalette dans la cour extérieure.',
        options: ['allons', 'vont', 'allez', 'vas'],
        explanation: 'Avec « nous », le verbe aller se conjugue « nous allons ».'
      },
      {
        id: 'gpex_pres_07',
        prompt: 'Verbe « pouvoir » avec la politesse',
        context: 'Renseigner un client au rayon',
        sentenceBefore: '',
        blankAnswer: 'Pouvez-vous',
        sentenceAfter: 'me dire où se trouve le rayon des surgelés ?',
        options: ['Pouvez-vous', 'Peux-tu', 'Peuvent-ils', 'Pouvons-nous'],
        explanation: 'Formule polie au travail avec un client : « Pouvez-vous ».'
      }
    ]
  },

  // ==========================================
  // 2. LES ADJECTIFS POSSESSIFS
  // ==========================================
  {
    id: 'gram_possessifs',
    topic: 'adjectifs_possessifs',
    title: 'Les Adjectifs Possessifs',
    shortDescription: 'Indiquer à qui appartient un équipement, un document ou un outil de travail.',
    ruleExplanation: [
      'Un seul possesseur (Je) : mon (masc.), ma (fém.), mes (pluriel).',
      'Un seul possesseur (Tu) : ton (masc.), ta (fém.), tes (pluriel).',
      'Un seul possesseur (Il/Elle) : son (masc.), sa (fém.), ses (pluriel).',
      'Plusieurs possesseurs : notre / nos, votre / vos, leur / leurs.',
      'RÈGLE D’OR INDISPENSABLE : Devant un mot féminin qui commence par une voyelle (a, e, i, o, u) ou un h muet, on utilise MON, TON, SON pour la liaison sonore (ex: mon entreprise, son équipe, ton adresse).'
    ],
    keyFormulas: [
      {
        label: 'Tableau récapitulatif masculin / féminin / pluriel',
        formula: 'Masc : mon / ton / son | Fém : ma / ta / sa | Pluriel : mes / tes / ses',
        example: 'mon badge, ma blouse, mes gants'
      },
      {
        label: 'Règle euphonique féminin + voyelle',
        formula: 'mon / ton / son + voyelle (même féminin !)',
        example: 'son autorisation (féminin mais commence par A)'
      },
      {
        label: 'Pluriel avec leur / leurs',
        formula: 'leur + nom singulier | leurs + nom pluriel',
        example: 'leur bureau (1 bureau) | leurs outils (plusieurs outils)'
      }
    ],
    commonMistakes: [
      {
        incorrect: 'Elle a oublié sa écharpe dans le vestiaire.',
        correct: 'Elle a oublié son écharpe dans le vestiaire.',
        tip: 'Écharpe commence par une voyelle : on remplace « sa » par « son ».'
      },
      {
        incorrect: 'Les ouvriers rangent leur casques.',
        correct: 'Les ouvriers rangent leurs casques.',
        tip: 'Casques est au pluriel : on ajoute un « s » à « leurs casques ».'
      }
    ],
    practiceExercises: [
      {
        id: 'gpex_pos_01',
        prompt: 'Féminin commençant par une voyelle',
        context: 'Candidature professionnelle',
        sentenceBefore: 'J’ai envoyé mon CV et',
        blankAnswer: 'mon',
        sentenceAfter: 'attestation de formation à la directrice.',
        options: ['mon', 'ma', 'mes', 'sa'],
        explanation: '« Attestation » est féminin mais commence par la voyelle « a » : on utilise obligatoirement « mon ».'
      },
      {
        id: 'gpex_pos_02',
        prompt: 'Formule de politesse formelle avec vous',
        context: 'Accueil de visiteurs en entreprise',
        sentenceBefore: 'Veuillez déposer',
        blankAnswer: 'votre',
        sentenceAfter: 'pièce d’identité à l’accueil s’il vous plaît.',
        options: ['votre', 'vos', 'notre', 'leur'],
        explanation: '« Pièce d’identité » est au singulier : avec la formule de politesse « vous », on emploie « votre ».'
      },
      {
        id: 'gpex_pos_03',
        prompt: 'Pluriel avec « leur / leurs »',
        context: 'Restauration scolaire',
        sentenceBefore: 'Les enfants ont tous terminé',
        blankAnswer: 'leurs',
        sentenceAfter: 'assiettes de légumes.',
        options: ['leurs', 'leur', 'ses', 'nos'],
        explanation: '« Assiettes » est au pluriel : on accorde avec un « s » (« leurs assiettes »).'
      },
      {
        id: 'gpex_pos_04',
        prompt: 'Équipement de sécurité personnel (Je)',
        context: 'Prise de poste sur le chantier BTP',
        sentenceBefore: 'J’ai bien attaché',
        blankAnswer: 'mon',
        sentenceAfter: 'casque avant de commencer.',
        options: ['mon', 'ma', 'mes', 'son'],
        explanation: '« Casque » est un nom masculin singulier : « mon casque ».'
      },
      {
        id: 'gpex_pos_05',
        prompt: 'Pluriel personnel (Je)',
        context: 'Soins en EHPAD',
        sentenceBefore: 'J’enfile',
        blankAnswer: 'mes',
        sentenceAfter: 'gants jetables avant la toilette de la patiente.',
        options: ['mes', 'mon', 'ma', 'ses'],
        explanation: '« Gants » est au pluriel : avec je, on utilise « mes ».'
      },
      {
        id: 'gpex_pos_06',
        prompt: 'Nom féminin commençant par une consonne (Elle)',
        context: 'Aide à domicile',
        sentenceBefore: 'Madame Mercier attend',
        blankAnswer: 'sa',
        sentenceAfter: 'visite médicale avec impatience.',
        options: ['sa', 'son', 'ses', 'leur'],
        explanation: '« Visite » est féminin et commence par une consonne : on utilise « sa visite ».'
      },
      {
        id: 'gpex_pos_07',
        prompt: 'Singulier avec plusieurs possesseurs (Nous)',
        context: 'Organisation de réunion au bureau',
        sentenceBefore: 'Nous avons imprimé',
        blankAnswer: 'notre',
        sentenceAfter: 'planning hebdomadaire.',
        options: ['notre', 'nos', 'votre', 'leur'],
        explanation: '« Planning » est au singulier : avec « nous », on utilise « notre planning ».'
      }
    ]
  },

  // ==========================================
  // 3. LES PRONOM RELATIFS SIMPLES (QUI / QUE / OÙ)
  // ==========================================
  {
    id: 'gram_relatifs',
    topic: 'pronoms_relatifs',
    title: 'Les Pronoms Relatifs Simples (Qui, Que, Où)',
    shortDescription: 'Relier deux phrases sans répéter un mot pour décrire des personnes, des tâches ou des lieux.',
    ruleExplanation: [
      'QUI remplace le SUJET du verbe suivant (suivi directement d’un verbe). Il s’applique aux personnes ou aux objets : « L’employé QUI arrive... »',
      'QUE (QU’ devant voyelle) remplace le COMPLÉMENT D’OBJET (suivi d’un sujet + verbe) : « Le colis QUE j’ai reçu... »',
      'OÙ remplace un LIEU géographique ou un MOMENT temporel : « Le magasin OÙ je travaille... » / « Le jour OÙ elle a commencé... ».'
    ],
    keyFormulas: [
      {
        label: 'QUI + Verbe (Sujet)',
        formula: 'Nom + QUI + Verbe conjugué',
        example: 'Je cherche le collègue QUI conduit le transpalette.'
      },
      {
        label: 'QUE + Sujet + Verbe (COD)',
        formula: 'Nom + QUE (QU’) + Sujet + Verbe',
        example: 'Voici la commande QUE le chef a validée.'
      },
      {
        label: 'OÙ (Lieu ou Temps)',
        formula: 'Lieu / Date + OÙ + Phrase',
        example: 'C’est la réserve OÙ nous stockons les produits frais.'
      }
    ],
    commonMistakes: [
      {
        incorrect: 'Le document que est sur la table.',
        correct: 'Le document qui est sur la table.',
        tip: 'Devant le verbe « est », le pronom est le sujet : utilisez « qui ».'
      },
      {
        incorrect: 'L’hôpital que je travaille.',
        correct: 'L’hôpital où je travaille.',
        tip: 'L’hôpital est un lieu dans lequel on travaille : utilisez « où ».'
      }
    ],
    practiceExercises: [
      {
        id: 'gpex_rel_01',
        prompt: 'Pronom relatif sujet suivi directement d’un verbe',
        context: 'Animation périscolaire',
        sentenceBefore: 'C’est l’animatrice',
        blankAnswer: 'qui',
        sentenceAfter: 'surveille la cour de récréation pendant la récréation.',
        options: ['qui', 'que', 'où', 'dont'],
        explanation: 'Le pronom est suivi directement du verbe « surveille » : le sujet est « qui ».'
      },
      {
        id: 'gpex_rel_02',
        prompt: 'Pronom relatif COD suivi d’un sujet + verbe',
        context: 'Bureau et secrétariat',
        sentenceBefore: 'Voici le dossier',
        blankAnswer: 'que',
        sentenceAfter: 'vous devez signer et renvoyer à la direction.',
        options: ['que', 'qui', 'où', 'quand'],
        explanation: 'Le pronom est suivi du sujet « vous » et du verbe « devez » : c’est le COD « que ».'
      },
      {
        id: 'gpex_rel_03',
        prompt: 'Pronom relatif de lieu',
        context: 'Restauration en cuisine',
        sentenceBefore: 'La chambre froide est la pièce',
        blankAnswer: 'où',
        sentenceAfter: 'nous conservons les viandes à basse température.',
        options: ['où', 'qui', 'que', 'qu’'],
        explanation: '« La pièce » indique le lieu dans lequel on conserve les viandes : on emploie « où ».'
      },
      {
        id: 'gpex_rel_04',
        prompt: 'Pronom relatif devant une voyelle (qu’)',
        context: 'Grande distribution',
        sentenceBefore: 'Les promotions',
        blankAnswer: 'qu’',
        sentenceAfter: 'il a affichées attirent beaucoup de clients.',
        options: ['qu’', 'qui', 'où', 'que'],
        explanation: '« Que » s’élide en « qu’ » devant le pronom sujet « il » commençant par une voyelle.'
      },
      {
        id: 'gpex_rel_05',
        prompt: 'Pronom relatif pour un équipement (qui)',
        context: 'Chantier de construction',
        sentenceBefore: 'La bétonnière',
        blankAnswer: 'qui',
        sentenceAfter: 'tourne près de l’échafaudage fait beaucoup de bruit.',
        options: ['qui', 'que', 'où', 'qu’'],
        explanation: '« Qui » est sujet du verbe « tourne ».'
      },
      {
        id: 'gpex_rel_06',
        prompt: 'Pronom relatif de temps',
        context: 'Contrat de travail',
        sentenceBefore: 'Le jour',
        blankAnswer: 'où',
        sentenceAfter: 'j’ai signé mon contrat, j’ai reçu mes EPI.',
        options: ['où', 'qui', 'que', 'qu’'],
        explanation: '« Le jour » est un complément de temps : on utilise « où » (« le jour où »).'
      },
      {
        id: 'gpex_rel_07',
        prompt: 'Pronom relatif COD avec une personne',
        context: 'Aide à domicile',
        sentenceBefore: 'La dame âgée',
        blankAnswer: 'que',
        sentenceAfter: 'j’accompagne chaque matin s’appelle Madame Bertin.',
        options: ['que', 'qui', 'où', 'qu’'],
        explanation: 'J’accompagne qui ? « la dame âgée » (COD) suivi de « j’accompagne » : on emploie « que ».'
      }
    ]
  },

  // ==========================================
  // 4. LES PRONOMS COMPLÉMENTS COD ET COI
  // ==========================================
  {
    id: 'gram_pronoms',
    topic: 'pronoms_cod_coi',
    title: 'Les pronoms compléments (COD et COI)',
    shortDescription: 'Remplacer un nom de personne ou d’objet pour ne pas répéter (le, la, les, lui, leur).',
    ruleExplanation: [
      'Le COD (Complément d’Objet Direct) remplace un nom direct (sans préposition "à"). Formes : le, la, l’, les.',
      'Le COI (Complément d’Objet Indirect) remplace une personne précédée de la préposition « à ». Formes : lui (singulier), leur (pluriel).',
      'Position : Le pronom se place TOUJOURS AVANT le verbe conjugué (ou entre l’auxiliaire « aller » et l’infinitif).'
    ],
    keyFormulas: [
      {
        label: 'COD (Le / La / Les)',
        formula: 'Verbe + Quelque chose / Quelqu’un → Sujet + [le/la/les] + Verbe',
        example: 'Tu ranges le transpalette ? → Oui, je LE range.'
      },
      {
        label: 'COI (Lui / Leur)',
        formula: 'Verbe + À quelqu’un → Sujet + [lui/leur] + Verbe',
        example: 'Tu as téléphoné au chef d’équipe ? → Oui, je LUI ai téléphoné.'
      }
    ],
    commonMistakes: [
      {
        incorrect: 'Je téléphone à lui pour lui demander.',
        correct: 'Je lui téléphone pour lui demander.',
        tip: 'Le pronom COI « lui » se place avant le verbe en français.'
      },
      {
        incorrect: 'Je vois leur tous les matins.',
        correct: 'Je les vois tous les matins (voir quelqu’un = COD : les).',
        tip: '« Leur » s’utilise seulement si le verbe se construit avec « à » (parler à, téléphoner à).'
      }
    ],
    practiceExercises: [
      {
        id: 'gpex_pro_01',
        prompt: 'Remplacement d’un objet direct au pluriel (COD)',
        context: 'Gestion des stocks en supermarché',
        sentenceBefore: '– As-tu vérifié les étiquettes de prix ? – Oui, je',
        blankAnswer: 'les',
        sentenceAfter: 'ai toutes contrôlées une par une.',
        options: ['les', 'leur', 'lui', 'en'],
        explanation: '« Contrôler les étiquettes » est direct (pas de « à »). Le pronom COD pluriel est « les ».'
      },
      {
        id: 'gpex_pro_02',
        prompt: 'Remplacement d’une personne précédée de « à » (COI)',
        context: 'Communication avec le responsable de chantier',
        sentenceBefore: '– Tu as expliqué le problème au chef d’équipe ? – Oui, je',
        blankAnswer: 'lui',
        sentenceAfter: 'ai expliqué la situation ce matin.',
        options: ['lui', 'le', 'leur', 'y'],
        explanation: 'On dit « expliquer À quelqu’un ». Au singulier pour une personne, le pronom COI est « lui ».'
      },
      {
        id: 'gpex_pro_03',
        prompt: 'Remplacement de plusieurs personnes précédées de « à » (COI pluriel)',
        context: 'Consignes en milieu périscolaire',
        sentenceBefore: '– As-tu donné les autorisations aux parents ? – Oui, je',
        blankAnswer: 'leur',
        sentenceAfter: 'ai remis les documents à la sortie.',
        options: ['leur', 'les', 'lui', 'en'],
        explanation: '« Donner à qui ? » aux parents (pluriel). Le pronom COI pluriel est « leur » (invariable).'
      },
      {
        id: 'gpex_pro_04',
        prompt: 'Remplacement d’un objet masculin singulier (COD : le/l’)',
        context: 'Entretien des locaux',
        sentenceBefore: '– Peux-tu passer le balai trapèze dans le hall ? – Oui, je',
        blankAnswer: 'le',
        sentenceAfter: 'passe tout de suite.',
        options: ['le', 'lui', 'la', 'en'],
        explanation: '« Le balai trapèze » est masculin singulier direct : on le remplace par « le ».'
      },
      {
        id: 'gpex_pro_05',
        prompt: 'Remplacement d’un objet féminin singulier devant consonne (la)',
        context: 'Restauration en cuisine',
        sentenceBefore: '– Tu as nettoyé la trancheuse à jambon ? – Oui, je',
        blankAnswer: 'l’',
        sentenceAfter: 'ai désinfectée après le service.',
        options: ['l’', 'la', 'lui', 'le'],
        explanation: '« La trancheuse » est féminin, mais devant l’auxiliaire « ai » (voyelle), « la » s’élide en « l’ ».'
      },
      {
        id: 'gpex_pro_06',
        prompt: 'Pronom COI avec le verbe téléphoner',
        context: 'Santé et soins',
        sentenceBefore: '– As-tu téléphoné au médecin traitant ? – Oui, je',
        blankAnswer: 'lui',
        sentenceAfter: 'ai laissé un message vocal.',
        options: ['lui', 'le', 'leur', 'y'],
        explanation: 'On dit « téléphoner À » : COI singulier = « lui ».'
      },
      {
        id: 'gpex_pro_07',
        prompt: 'Place du pronom avec le futur proche',
        context: 'Secrétariat et accueil',
        sentenceBefore: 'Madame Bernard n’est pas là, je vais',
        blankAnswer: 'lui',
        sentenceAfter: 'transmettre votre courriel.',
        options: ['lui', 'la', 'leur', 'y'],
        explanation: '« Transmettre à qui ? » à Madame Bernard (COI). Le pronom se place entre aller et l’infinitif : « je vais lui transmettre ».'
      }
    ]
  },

  // ==========================================
  // 5. PASSÉ COMPOSÉ VS IMPARFAIT
  // ==========================================
  {
    id: 'gram_01',
    topic: 'passe_compose_imparfait',
    title: 'Passé composé vs Imparfait',
    shortDescription: 'Distinguer une action précise et terminée d’une situation ou habitude passée.',
    ruleExplanation: [
      'Le Passé Composé exprime une action ponctuelle, délimitée dans le temps, terminée, ou une succession d’événements.',
      'L’Imparfait sert à décrire le décor, la météo, l’ambiance, l’état physique ou émotionnel, ou une habitude répétée dans le passé.',
      'Astuce pratique : Posez-vous la question : Est-ce une action précise (« Tout à coup, le client est entré ») ou le contexte (« Il pleuvait et le magasin était calme ») ?'
    ],
    keyFormulas: [
      {
        label: 'Passé Composé (Avoir)',
        formula: 'Sujet + AVOIR au présent + Participe passé',
        example: 'J’ai vérifié les étiquettes ce matin.'
      },
      {
        label: 'Passé Composé (Être : verbes de mouvement + pronominaux)',
        formula: 'Sujet + ÊTRE au présent + Participe passé (accordé en genre/nombre)',
        example: 'Elle est arrivée à 8 heures sur le chantier.'
      },
      {
        label: 'Imparfait',
        formula: 'Radical de « nous » au présent + -ais, -ais, -ait, -ions, -iez, -aient',
        example: 'Quand je travaillais à l’accueil, je recevais beaucoup d’appels.'
      }
    ],
    comparisons: {
      conceptA: 'Passé Composé (Action ponctuelle)',
      conceptB: 'Imparfait (Décor / Habitude)',
      rows: [
        {
          aspect: 'Événement vs Contexte',
          exampleA: 'Le téléphone a sonné à 14h30.',
          exampleB: 'J’étais en train d’écrire un courriel.'
        },
        {
          aspect: 'Action terminée vs Durée non délimitée',
          exampleA: 'Nous avons fini le chantier vendredi.',
          exampleB: 'Le chantier durait depuis des mois.'
        },
        {
          aspect: 'Rupture vs État d’esprit',
          exampleA: 'L’alarme s’est déclenchée soudainement.',
          exampleB: 'Les ouvriers portaient tous leur casque.'
        }
      ]
    },
    commonMistakes: [
      {
        incorrect: 'Hier, je faisais mes courses à 15h et je rentrais.',
        correct: 'Hier, j’ai fait mes courses à 15h et je suis rentré(e).',
        tip: 'Ce sont des actions précises et achevées : utilisez le passé composé.'
      },
      {
        incorrect: 'Elle a été malade, alors elle n’est pas venue.',
        correct: 'Elle était malade (état), alors elle n’est pas venue (action).',
        tip: 'L’état de santé continu s’exprime naturellement à l’imparfait.'
      }
    ],
    practiceExercises: [
      {
        id: 'gpex_pc_01',
        prompt: 'Action interrompue par un événement soudain',
        context: 'Rapport d’activité en magasin',
        sentenceBefore: 'Pendant que l’employé',
        blankAnswer: 'rangeait',
        sentenceAfter: 'le rayon, un carton est tombé de l’étagère.',
        options: ['rangeait', 'a rangé', 'va ranger', 'rangera'],
        explanation: 'L’action de fond continue (« rangeait ») est à l’imparfait, coupée par l’action ponctuelle au passé composé (« est tombé »).'
      },
      {
        id: 'gpex_pc_02',
        prompt: 'Accord du participe passé avec l’auxiliaire être',
        context: 'Arrivée sur le lieu de travail',
        sentenceBefore: 'La nouvelle directrice',
        blankAnswer: 'est arrivée',
        sentenceAfter: 'à huit heures et quart ce matin.',
        options: ['est arrivée', 'a arrivé', 'arrivait', 'est arrivé'],
        explanation: 'Le verbe « arriver » se conjugue avec l’auxiliaire « être » au passé composé et s’accorde avec le sujet féminin « la directrice » (-ée).'
      },
      {
        id: 'gpex_pc_03',
        prompt: 'Habitude passée vs Événement daté',
        context: 'Expérience professionnelle passée',
        sentenceBefore: 'L’année dernière, je',
        blankAnswer: 'travaillais',
        sentenceAfter: 'dans un supermarché à Lyon tous les samedis.',
        options: ['travaillais', 'ai travaillé', 'travaille', 'vais travailler'],
        explanation: '« Tous les samedis » exprime une habitude répétée dans le passé : on utilise l’imparfait (« je travaillais »).'
      },
      {
        id: 'gpex_pc_04',
        prompt: 'Description météo (contexte)',
        context: 'Chantier BTP en plein air',
        sentenceBefore: 'Hier matin, il',
        blankAnswer: 'faisait',
        sentenceAfter: 'très froid, alors nous avons arrêté le coulage du béton.',
        options: ['faisait', 'a fait', 'va faire', 'ferait'],
        explanation: 'La météo et le climat ambiant se décrivent à l’imparfait (« il faisait froid »).'
      },
      {
        id: 'gpex_pc_05',
        prompt: 'Succession d’actions finies',
        context: 'Service du midi au restaurant',
        sentenceBefore: 'À 14h, le serveur',
        blankAnswer: 'a débarrassé',
        sentenceAfter: 'les tables et a nettoyé la salle.',
        options: ['a débarrassé', 'débarrassait', 'débarrasse', 'avait débarrassé'],
        explanation: 'Action précise et achevée : le passé composé convient parfaitement.'
      },
      {
        id: 'gpex_pc_06',
        prompt: 'État d’esprit et sentiment dans le passé',
        context: 'Entretien d’embauche',
        sentenceBefore: 'Pendant mon entretien d’embauche, j’',
        blankAnswer: 'étais',
        sentenceAfter: 'un peu stressé mais confiant.',
        options: ['étais', 'ai été', 'suis', 'serais'],
        explanation: 'L’état émotionnel ou physique continu est exprimé à l’imparfait (« j’étais »).'
      },
      {
        id: 'gpex_pc_07',
        prompt: 'Verbe pronominal au passé composé',
        context: 'Accident du travail bénin',
        sentenceBefore: 'En coupant le pain, l’aide de cuisine',
        blankAnswer: 's’est coupé',
        sentenceAfter: 'légèrement au doigt.',
        options: ['s’est coupé', 'a coupé', 'se coupait', 'est coupé'],
        explanation: 'Verbe pronominal (se couper) : l’auxiliaire est obligatoirement « être » (« s’est coupé »).'
      }
    ]
  },

  // ==========================================
  // 6. LE FUTUR PROCHE & LE FUTUR SIMPLE
  // ==========================================
  {
    id: 'gram_02',
    topic: 'futur_proche_simple',
    title: 'Futur proche & Futur simple',
    shortDescription: 'Exprimer des projets immédiats au travail ou des prévisions à long terme.',
    ruleExplanation: [
      'Le Futur Proche s’utilise très couramment à l’oral pour une action imminente ou un projet très concret déjà décidé.',
      'Le Futur Simple s’emploie pour des projets lointains, des promesses, des consignes écrites formelles ou la météo.',
      'Formation du Futur Simple : Infinitif complet + terminaisons : -ai, -as, -a, -ons, -ez, -ont.'
    ],
    keyFormulas: [
      {
        label: 'Futur Proche',
        formula: 'ALLER au présent + Verbe à l’infinitif',
        example: 'Je vais contacter le responsable logistique tout de suite.'
      },
      {
        label: 'Futur Simple',
        formula: 'Infinitif (ou radical irrégulier) + -ai, -as, -a, -ons, -ez, -ont',
        example: 'Demain, l’équipe terminera la livraison avant midi.'
      }
    ],
    comparisons: {
      conceptA: 'Futur Proche (Oral / Court terme)',
      conceptB: 'Futur Simple (Écrit / Formel / Long terme)',
      rows: [
        {
          aspect: 'Intention immédiate',
          exampleA: 'Attention, le pot de peinture va tomber !',
          exampleB: 'Dans dix ans, la ville construira une nouvelle ligne.'
        },
        {
          aspect: 'Conversation au bureau',
          exampleA: 'Je vais vous transférer son appel.',
          exampleB: 'Nous vous confirmerons le rendez-vous par écrit.'
        }
      ]
    },
    commonMistakes: [
      {
        incorrect: 'Je vais aller à la pharmacie demain.',
        correct: 'Je vais à la pharmacie demain. / J’irai à la pharmacie.',
        tip: 'Évitez de répéter « aller aller » ; le présent ou futur simple est plus élégant.'
      }
    ],
    practiceExercises: [
      {
        id: 'gpex_fut_01',
        prompt: 'Action orale immédiate au bureau',
        context: 'Accueil téléphonique professionnel',
        sentenceBefore: 'Ne quittez pas, je',
        blankAnswer: 'vais transférer',
        sentenceAfter: 'votre appel au service des commandes tout de suite.',
        options: ['vais transférer', 'transférerais', 'transférais', 'ai transféré'],
        explanation: 'Pour une action orale imminente dans l’instant, on utilise le futur proche : aller au présent + infinitif (« je vais transférer »).'
      },
      {
        id: 'gpex_fut_02',
        prompt: 'Engagement et promesse professionnelle écrite',
        context: 'Courriel de confirmation administrative',
        sentenceBefore: 'Dès réception de vos pièces justificatives, nous vous',
        blankAnswer: 'enverrons',
        sentenceAfter: 'votre attestation officielle.',
        options: ['enverrons', 'allons envoyer', 'envoyons', 'avions envoyé'],
        explanation: 'Dans un écrit formel, le futur simple du verbe envoyer (« nous enverrons ») exprime l’engagement officiel.'
      },
      {
        id: 'gpex_fut_03',
        prompt: 'Avertissement de sécurité immédiat',
        context: 'Alerte sur chantier BTP',
        sentenceBefore: 'Reculez vite ! La grue',
        blankAnswer: 'va soulever',
        sentenceAfter: 'cette poutre en acier.',
        options: ['va soulever', 'soulèvera', 'soulevait', 'a soulevé'],
        explanation: 'L’imminence du danger dans les secondes qui suivent s’exprime par le futur proche (« va soulever »).'
      },
      {
        id: 'gpex_fut_04',
        prompt: 'Prévision officielle d’entreprise',
        context: 'Plan de formation',
        sentenceBefore: 'L’année prochaine, notre établissement',
        blankAnswer: 'ouvrira',
        sentenceAfter: 'une nouvelle section pour la petite enfance.',
        options: ['ouvrira', 'va ouvrir', 'ouvrait', 'a ouvert'],
        explanation: 'Projet à long terme institutionnel : on utilise le futur simple (« ouvrira »).'
      },
      {
        id: 'gpex_fut_05',
        prompt: 'Action planifiée pour la fin de journée',
        context: 'Aide à domicile',
        sentenceBefore: 'À 17h, je',
        blankAnswer: 'vais préparer',
        sentenceAfter: 'le dîner de Monsieur Leroy avant de partir.',
        options: ['vais préparer', 'préparai', 'préparais', 'ai préparé'],
        explanation: 'Projet concret prévu dans la journée : futur proche (« je vais préparer »).'
      },
      {
        id: 'gpex_fut_06',
        prompt: 'Futur simple du verbe « être » (irrégulier : ser-)',
        context: 'Disponibilité professionnelle',
        sentenceBefore: 'Lundi prochain, je',
        blankAnswer: 'serai',
        sentenceAfter: 'présent à la réunion de 9 heures.',
        options: ['serai', 'suis', 'serait', 'vais être'],
        explanation: 'Le radical du verbe être au futur simple est « ser- » + terminaison -ai (« je serai »).'
      },
      {
        id: 'gpex_fut_07',
        prompt: 'Futur simple du verbe « avoir » (irrégulier : aur-)',
        context: 'Période d’essai',
        sentenceBefore: 'Après validation de votre période d’essai, vous',
        blankAnswer: 'aurez',
        sentenceAfter: 'droit aux congés payés.',
        options: ['aurez', 'avez', 'alliez avoir', 'auriez'],
        explanation: 'Le verbe avoir au futur simple avec vous est « vous aurez ».'
      }
    ]
  },

  // ==========================================
  // 7. LA NÉGATION COMPLEXE
  // ==========================================
  {
    id: 'gram_04',
    topic: 'negation',
    title: 'La négation complexe (ne... plus, jamais, rien, personne)',
    shortDescription: 'Nuancer la négation au quotidien et dans le cadre professionnel.',
    ruleExplanation: [
      'Ne... pas : négation simple (« Je ne sais pas »).',
      'Ne... plus : arrêt d’une habitude ou rupture (« Il n’y a plus de stock »).',
      'Ne... jamais : fréquence nulle, contraire de « toujours » (« Je ne suis jamais en retard »).',
      'Ne... rien : absence de chose (« Je n’ai rien compris à la consigne »).',
      'Ne... personne : absence d’humain (« Il n’y a personne à l’accueil »).'
    ],
    keyFormulas: [
      {
        label: 'Structure au présent',
        formula: 'Sujet + NE (N’) + Verbe + [plus / jamais / rien / personne]',
        example: 'Nous ne trouvons rien dans cette réserve.'
      },
      {
        label: 'Au Passé Composé (Attention à PERSONNE)',
        formula: 'Ne + Auxiliaire + [rien/jamais/plus] + Participe passé, MAIS : Ne + Auxiliaire + Participe + PERSONNE',
        example: 'Je n’ai RIEN vu, mais je n’ai vu PERSONNE.'
      }
    ],
    commonMistakes: [
      {
        incorrect: 'Je n’ai personne vu dans le couloir.',
        correct: 'Je n’ai vu personne dans le couloir.',
        tip: '« Personne » se place toujours après le participe passé au passé composé.'
      }
    ],
    practiceExercises: [
      {
        id: 'gpex_neg_01',
        prompt: 'Rupture de stock / Changement d’état',
        context: 'Inventaire des fournitures médicales',
        sentenceBefore: 'Il n’y a',
        blankAnswer: 'plus',
        sentenceAfter: 'de masques chirurgicaux dans le tiroir, il faut ouvrir un nouveau carton.',
        options: ['plus', 'jamais', 'rien', 'personne'],
        explanation: '« Ne... plus » signifie qu’il y en avait avant, mais qu’il n’en reste plus aujourd’hui.'
      },
      {
        id: 'gpex_neg_02',
        prompt: 'Absence totale d’êtres humains',
        context: 'Visite des locaux en fin de journée',
        sentenceBefore: 'Je suis monté au deuxième étage mais je n’ai trouvé',
        blankAnswer: 'personne',
        sentenceAfter: 'dans les bureaux.',
        options: ['personne', 'rien', 'plus', 'aucun'],
        explanation: 'Pour exprimer l’absence d’individus, on utilise « ne... personne » (qui se place après le participe au passé composé).'
      },
      {
        id: 'gpex_neg_03',
        prompt: 'Fréquence nulle (contraire de « toujours »)',
        context: 'Règle de ponctualité professionnelle',
        sentenceBefore: 'Cet employé est exemplaire : il n’arrive',
        blankAnswer: 'jamais',
        sentenceAfter: 'en retard à sa prise de service.',
        options: ['jamais', 'rien', 'personne', 'pas encore'],
        explanation: 'Le contraire de « toujours » ou « souvent » est « ne... jamais ».'
      },
      {
        id: 'gpex_neg_04',
        prompt: 'Absence d’objet au passé composé',
        context: 'Inspection de fin de chantier',
        sentenceBefore: 'Les ouvriers ont tout nettoyé, ils n’ont',
        blankAnswer: 'rien',
        sentenceAfter: 'laissé par terre.',
        options: ['rien', 'personne', 'jamais', 'aucun'],
        explanation: '« Rien » se place entre l’auxiliaire et le participe passé : « ils n’ont rien laissé ».'
      },
      {
        id: 'gpex_neg_05',
        prompt: 'Négation avec le verbe comprendre',
        context: 'Formation aux consignes de sécurité',
        sentenceBefore: 'Le stagiaire n’a',
        blankAnswer: 'rien',
        sentenceAfter: 'dit pendant toute la réunion.',
        options: ['rien', 'personne', 'plus', 'pas du tout'],
        explanation: 'Absence de parole : « n’a rien dit ».'
      },
      {
        id: 'gpex_neg_06',
        prompt: 'Arrêt d’une habitude au travail',
        context: 'Restauration rapide',
        sentenceBefore: 'Le restaurant ne sert',
        blankAnswer: 'plus',
        sentenceAfter: 'de petits déjeuners après 11 heures.',
        options: ['plus', 'rien', 'personne', 'aucun'],
        explanation: 'Après 11 heures, le service s’arrête : « ne sert plus ».'
      },
      {
        id: 'gpex_neg_07',
        prompt: 'Règle d’hygiène stricte (interdiction permanente)',
        context: 'Cuisine collective',
        sentenceBefore: 'Il ne faut',
        blankAnswer: 'jamais',
        sentenceAfter: 'recongeler un aliment décongelé.',
        options: ['jamais', 'rien', 'personne', 'plus'],
        explanation: 'Interdiction absolue en toutes circonstances : « ne jamais ».'
      }
    ]
  },

  // ==========================================
  // 8. L'IMPÉRATIF PROFESSIONNEL
  // ==========================================
  {
    id: 'gram_05',
    topic: 'imperatif',
    title: 'L’impératif pour donner des consignes',
    shortDescription: 'Donner des instructions claires, des règles de sécurité et des conseils de travail.',
    ruleExplanation: [
      'L’impératif s’utilise sans pronom sujet (tu, nous, vous).',
      'Au travail avec un collègue ou un client, on utilise presque toujours la forme de politesse : VOUS (-ez).',
      'Règle spéciale verbes en -ER à la 2e personne (tu) : pas de « s » final (ex: « Regarde ! », pas « Regardes »).'
    ],
    keyFormulas: [
      {
        label: 'Consigne polie professionnelle (Vous)',
        formula: 'Verbe conjugué avec vous (sans sujet)',
        example: 'Attachez votre ceinture de sécurité et portez vos gants.'
      },
      {
        label: 'Interdiction de sécurité',
        formula: 'Ne + Verbe impératif + pas',
        example: 'Ne touchez pas aux câbles électriques dénudés.'
      }
    ],
    commonMistakes: [
      {
        incorrect: 'Vous signez ici s’il vous plaît.',
        correct: 'Signez ici, s’il vous plaît. (ou : Veuillez signer ici).',
        tip: 'À l’impératif, supprimez le pronom sujet « vous ».'
      }
    ],
    practiceExercises: [
      {
        id: 'gpex_imp_01',
        prompt: 'Consigne de sécurité sur échafaudage',
        context: 'Directives sur chantier BTP',
        sentenceBefore: '',
        blankAnswer: 'Attachez',
        sentenceAfter: 'votre harnais de sécurité avant de monter sur l’échafaudage !',
        options: ['Attachez', 'Vous attachez', 'Attacher', 'Attaches'],
        explanation: 'À l’impératif avec « vous », on utilise la terminaison -ez sans pronom sujet (« Attachez »).'
      },
      {
        id: 'gpex_imp_02',
        prompt: 'Protocole d’hygiène en cuisine / cantine',
        context: 'Hygiène périscolaire',
        sentenceBefore: '',
        blankAnswer: 'Lavez-vous',
        sentenceAfter: 'les mains à l’eau et au savon avant de servir le repas.',
        options: ['Lavez-vous', 'Vous lavez', 'Te laves', 'Laver vous'],
        explanation: 'Pour un verbe pronominal à l’impératif affirmatif, le pronom réfléchi se place après le verbe avec un trait d’union (« Lavez-vous »).'
      },
      {
        id: 'gpex_imp_03',
        prompt: 'Interdiction impérative en milieu hospitalier',
        context: 'Sécurité incendie et soins',
        sentenceBefore: 'En cas d’urgence, ne',
        blankAnswer: 'prenez',
        sentenceAfter: 'pas l’ascenseur, utilisez l’escalier de secours.',
        options: ['prenez', 'prendre', 'prenez-vous', 'prends'],
        explanation: 'À la forme négative de l’impératif : Ne + Verbe (vous) + pas (« ne prenez pas »).'
      },
      {
        id: 'gpex_imp_04',
        prompt: 'Vérification de marchandise en supermarché',
        context: 'Rayon frais',
        sentenceBefore: '',
        blankAnswer: 'Contrôlez',
        sentenceAfter: 'soigneusement la température des bacs frigorifiques.',
        options: ['Contrôlez', 'Vous contrôlez', 'Contrôler', 'Contrôles'],
        explanation: 'Impératif de politesse professionnelle sans pronom sujet : « Contrôlez ».'
      },
      {
        id: 'gpex_imp_05',
        prompt: 'Consigne bienveillante à l’égard d’un résident',
        context: 'Maison de retraite EHPAD',
        sentenceBefore: '',
        blankAnswer: 'Prenez',
        sentenceAfter: 'votre temps pour vous lever, je vous aide.',
        options: ['Prenez', 'Prendre', 'Vous prenez', 'Prends'],
        explanation: 'Formule d’accompagnement polie : « Prenez votre temps ».'
      },
      {
        id: 'gpex_imp_06',
        prompt: 'Consigne téléphonique',
        context: 'Standard téléphonique',
        sentenceBefore: '',
        blankAnswer: 'Patientez',
        sentenceAfter: 'un instant, je vérifie la disponibilité de mon collègue.',
        options: ['Patientez', 'Patienter', 'Vous patientez', 'Patient'],
        explanation: 'Formule professionnelle standard : « Patientez un instant ».'
      },
      {
        id: 'gpex_imp_07',
        prompt: 'Règle d’entretien des équipements',
        context: 'Restauration collective',
        sentenceBefore: '',
        blankAnswer: 'Désinfectez',
        sentenceAfter: 'tous les plans de travail inox après le service.',
        options: ['Désinfectez', 'Désinfecter', 'Vous désinfectez', 'Désinfection'],
        explanation: 'Consigne de protocole sanitaire : verbe conjugué à la 2e personne du pluriel sans sujet (« Désinfectez »).'
      }
    ]
  },

  // ==========================================
  // 9. LES PRÉPOSITIONS DE LIEU ET DE TEMPS
  // ==========================================
  {
    id: 'gram_06',
    topic: 'prepositions',
    title: 'Prépositions de lieu et de temps (chez, à, en, depuis, pendant)',
    shortDescription: 'Se repérer dans l’espace et dans le temps pour les démarches et les rendez-vous.',
    ruleExplanation: [
      'CHEZ + personne, profession ou nom de lieu habité (« chez le médecin », « chez le garagiste »).',
      'À / AU / EN + lieu inanimé (« à la pharmacie », « à l’hôpital », « au supermarché »).',
      'DEPUIS : action commencée dans le passé et qui CONTINUE aujourd’hui (« Je travaille ici depuis 2 ans »).',
      'PENDANT : durée complète et délimitée d’une action (« J’ai fait un stage pendant 3 mois »).'
    ],
    keyFormulas: [
      {
        label: 'Lieu : Chez vs À',
        formula: 'Chez + Personne / À/Au + Bâtiment ou Institution',
        example: 'Je vais chez le dentiste puis à la caisse d’allocations familiales.'
      },
      {
        label: 'Temps : Depuis vs Pendant',
        formula: 'Depuis + Présent (continue) / Pendant + Passé (achevé)',
        example: 'J’habite en France depuis 2024. J’ai attendu pendant 20 minutes.'
      }
    ],
    commonMistakes: [
      {
        incorrect: 'Je vais au médecin demain matin.',
        correct: 'Je vais chez le médecin demain matin.',
        tip: 'Le médecin est une personne : on emploie « chez ».'
      },
      {
        incorrect: 'Je travaille ici pendant 3 ans (et je continue).',
        correct: 'Je travaille ici depuis 3 ans.',
        tip: 'Si l’action est toujours en cours au moment où on parle, on utilise « depuis ».'
      }
    ],
    practiceExercises: [
      {
        id: 'gpex_prep_01',
        prompt: 'Préposition de lieu avec un praticien',
        context: 'Visite médicale d’aptitude',
        sentenceBefore: 'Elle a rendez-vous à 15 heures',
        blankAnswer: 'chez',
        sentenceAfter: 'le médecin du travail pour sa visite médicale.',
        options: ['chez', 'au', 'à', 'dans'],
        explanation: 'Le médecin est une personne : on emploie obligatoirement « chez » (« chez le médecin »).'
      },
      {
        id: 'gpex_prep_02',
        prompt: 'Durée continue qui se poursuit dans le présent',
        context: 'Ancienneté dans l’entreprise',
        sentenceBefore: 'Monsieur Diallo travaille dans ce magasin de libre-service',
        blankAnswer: 'depuis',
        sentenceAfter: 'cinq ans.',
        options: ['depuis', 'pendant', 'il y a', 'pour'],
        explanation: 'Le verbe est au présent (« travaille ») et l’action continue aujourd’hui : on utilise « depuis ».'
      },
      {
        id: 'gpex_prep_03',
        prompt: 'Durée délimitée et terminée dans le passé',
        context: 'Formation qualifiante',
        sentenceBefore: 'L’année dernière, elle a suivi une formation en secrétariat',
        blankAnswer: 'pendant',
        sentenceAfter: 'six mois.',
        options: ['pendant', 'depuis', 'dans', 'envers'],
        explanation: 'La formation est terminée dans le passé : la durée complète s’exprime avec « pendant ».'
      },
      {
        id: 'gpex_prep_04',
        prompt: 'Préposition de lieu avec un établissement administratif',
        context: 'Démarches de séjour',
        sentenceBefore: 'Je dois déposer mon dossier renouvelé',
        blankAnswer: 'à la',
        sentenceAfter: 'préfecture avant vendredi.',
        options: ['à la', 'chez la', 'en', 'dans'],
        explanation: 'La préfecture est une institution/bâtiment féminin : on dit « à la préfecture ».'
      },
      {
        id: 'gpex_prep_05',
        prompt: 'Moment passé daté (Il y a)',
        context: 'Livraison de marchandises',
        sentenceBefore: 'Le camion de livraison est arrivé',
        blankAnswer: 'il y a',
        sentenceAfter: 'dix minutes sur le quai.',
        options: ['il y a', 'depuis', 'pendant', 'dans'],
        explanation: 'Pour situer un moment passé par rapport au présent, on utilise « il y a ».'
      },
      {
        id: 'gpex_prep_06',
        prompt: 'Lieu chez le particulier',
        context: 'Service à domicile',
        sentenceBefore: 'L’aide-ménagère intervient deux fois par semaine',
        blankAnswer: 'chez',
        sentenceAfter: 'Madame Dupont.',
        options: ['chez', 'à', 'vers', 'au'],
        explanation: 'Au domicile d’une personne : on emploie toujours « chez ».'
      },
      {
        id: 'gpex_prep_07',
        prompt: 'Préposition de lieu avec un bâtiment masculin (Au)',
        context: 'Courses alimentaires',
        sentenceBefore: 'Le boulanger livre le pain frais chaque matin',
        blankAnswer: 'au',
        sentenceAfter: 'restaurant.',
        options: ['au', 'chez', 'à la', 'en'],
        explanation: '« Restaurant » est masculin singulier : à + le = « au ».'
      }
    ]
  }
];
