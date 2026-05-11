// ═══════════════════════════════════════════════════════════════
// FICHIER DE DONNÉES : M. Bernard, Surveillant du Lycée Jean Dumont
// Modifie ce fichier pour changer la personnalité, les répliques,
// les connaissances et la mémoire du surveillant.
// ═══════════════════════════════════════════════════════════════

const SURVEILLANT = {

  // ── IDENTITÉ ──────────────────────────────────────────────────
  nom: "M. Bernard",
  age: 52,
  description: "Surveillant général depuis 18 ans. Strict mais juste. Connaît tous les élèves par leur prénom.",

  // ── RÉPLIQUES AUTOMATIQUES (dites au hasard quand le personnage est en idle) ──
  // Il les dit TOUT SEUL, visible en bulle au-dessus de sa tête même si tu es loin
  repliquesAuto: [
    "Pas de bruit dans les couloirs !",
    "Le portail ferme à 17h30, pas une minute de plus.",
    "J'ai vu des jeunes sur la pelouse... encore.",
    "M. Dupont est en retard ce matin.",
    "La bibliothèque ouvre à 8h.",
    "Quelqu'un a oublié son cartable dans la cour.",
    "Il va faire beau aujourd'hui.",
    "Ces élèves de 5ème B sont vraiment bruyants.",
    "Il faudrait que je vérifie le portail...",
    "Tiens, je n'ai pas vu Léa depuis ce matin.",
    "Le self est ouvert de 12h à 13h30.",
    "Pas de téléphone dans les couloirs, combien de fois faut-il le répéter !",
    "*sifflement discret*",
    "...",
    "Encore cette odeur de cigarette... je vais trouver qui c'est.",
  ],

  // ── CE QU'IL DIT QUAND LE JOUEUR S'APPROCHE (bulle "approche") ──
  repliqueApproche: "[E] Parler à M. Bernard",

  // ── DIALOGUES : arbre de conversation ─────────────────────────
  // Format : { id, texte, options: [{label, suite}] }
  // suite = id du prochain nœud, ou null pour fermer
  dialogues: {
    accueil: {
      texte: "Ah, bonjour. Que puis-je faire pour vous ?",
      options: [
        { label: "Ouvrir le portail", suite: "portail_ouvrir" },
        { label: "Fermer le portail", suite: "portail_fermer" },
        { label: "Où est la bibliothèque ?", suite: "biblio" },
        { label: "Infos sur les cours", suite: "cours" },
        { label: "Rien, au revoir.", suite: null },
      ]
    },

    portail_ouvrir: {
      texte: "Hmm… D'accord, j'ouvre le portail. Mais ne traînez pas dehors.",
      action: "OUVRIR_PORTAIL",
      options: [
        { label: "Merci !", suite: null },
        { label: "Autre chose ?", suite: "accueil" },
      ]
    },

    portail_fermer: {
      texte: "Bien. Je ferme le portail. Personne ne sort sans autorisation.",
      action: "FERMER_PORTAIL",
      options: [
        { label: "Merci.", suite: null },
        { label: "Autre chose ?", suite: "accueil" },
      ]
    },

    biblio: {
      texte: "La bibliothèque est au premier étage, dans le bâtiment principal. Ouverte de 8h à 17h. Évitez le bruit là-haut.",
      options: [
        { label: "Merci.", suite: null },
        { label: "Autre question", suite: "accueil" },
      ]
    },

    cours: {
      texte: "Les cours commencent à 8h pétantes. La récré est à 10h. Le déjeuner de 12h à 13h30. Les cours reprennent jusqu'à 17h.",
      options: [
        { label: "Et les 5ème ?", suite: "cours_5eme" },
        { label: "Merci.", suite: null },
      ]
    },

    cours_5eme: {
      texte: "Les 5ème A et 5ème B sont au 1er étage, salles 101 et 102. M. Leclerc pour les maths, Mme Rousseau pour le français.",
      options: [
        { label: "Merci M. Bernard.", suite: null },
        { label: "Autre chose ?", suite: "accueil" },
      ]
    },
  },

  // ── MÉMOIRE : faits que le personnage "se souvient" ───────────
  // Ces infos peuvent influencer ses répliques automatiques
  memoire: {
    portailOuvert: false,          // mis à jour dynamiquement
    derniereInteraction: null,     // date de la dernière fois que le joueur a parlé
    nomJoueur: null,               // si le joueur s'est présenté
    incidentsConnus: [
      "Quelqu'un a cassé une vitre en salle 104 lundi dernier.",
      "Un élève de 3ème a été renvoyé pour 2 jours.",
    ],
  },

  // ── CONNAISSANCE DES LIEUX ─────────────────────────────────────
  lieux: {
    "cour":        "La cour centrale pavée. Interdit de courir.",
    "bibliothèque":"1er étage, bâtiment principal. Silencieux obligatoire.",
    "portail":     "S'ouvre à 7h30, ferme à 17h30. Code d'urgence : 1704.",
    "pelouse":     "Interdite aux élèves pendant les heures de cours.",
    "toilettes":   "Rez-de-chaussée, couloir gauche. Fermées pendant les cours.",
    "self":        "Ouvert de 12h à 13h30. File d'attente obligatoire.",
    "salle101":    "5ème A – M. Leclerc (maths).",
    "salle102":    "5ème B – Mme Rousseau (français).",
  },
};
