# Studio K — Site complet

Site officiel de Studio K — Architecture de business pour femmes indépendantes.

## Structure

```
studiokdigital/
├── index.html              → Landing (studiokdigital.fr)
├── quiz/
│   └── index.html          → Quiz archétypes (studiokdigital.fr/quiz)
├── offre/
│   └── index.html          → Page offre (studiokdigital.fr/offre)
├── images/                 → Images des 5 archétypes
│   ├── invisible.png
│   ├── empire.png
│   ├── multipassionnee.png
│   ├── specialiste.png
│   └── catalyseur.png
└── vercel.json             → Config Vercel (URLs propres)
```

## URLs

- **Landing:** `studiokdigital.fr`
- **Quiz:** `studiokdigital.fr/quiz`
- **Page offre:** `studiokdigital.fr/offre?archetype=invisible`

## Configuration MailerLite

URL de redirection après inscription:
```
https://studiokdigital.fr/quiz?email={$fields.email}
```

## Google Analytics

ID GA: `G-K2RC0XT3N6` — intégré dans les 3 pages.

## Déploiement

Push sur la branche `main` → Vercel déploie automatiquement.
