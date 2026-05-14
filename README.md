<a id="readme-top"></a>

<!-- PROJECT SHIELDS -->

![Stars](https://img.shields.io/github/stars/AntonioDS1/vue-sunnee-bottle?style=for-the-badge)
![Forks](https://img.shields.io/github/forks/AntonioDS1/vue-sunnee-bottle?style=for-the-badge)
![Issues](https://img.shields.io/github/issues/AntonioDS1/vue-sunnee-bottle?style=for-the-badge)

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/AntonioDS1/vue-sunnee-bottle">
    <img src="public/favicon.ico" alt="Sunnee Bottle Logo" width="160">
  </a>

  <h3 align="center">Sunnee Bottle Configurator</h3>

  <p align="center">
    Configuratore interattivo di bottiglie con anteprima live, personalizzazione colori e UI moderna.
    Costruito con Vue 3, Vue Router e Composition API.
    <br />
    <a href="https://github.com/AntonioDS1/vue-sunnee-bottle"><strong>Visita la repository »</strong></a>
    <br />
    <a href="https://vue-sunnee-bottle.vercel.app/"><strong>Visita la demo »</strong></a>
    <br /><br />
    <a href="https://github.com/AntonioDS1/vue-sunnee-bottle/issues">Segnala un Bug</a>
    ·
    <a href="https://github.com/AntonioDS1/vue-sunnee-bottle/issues">Richiedi una Feature</a>
  </p>
</div>

---

## 🌊 Overview

![Screenshot](public/og-image.png)

**Sunnee Bottle Configurator** è un'applicazione web moderna che permette agli utenti di personalizzare una bottiglia scegliendo colori differenti per tappo, corpo e fondo, con aggiornamento live dell’anteprima.

Il progetto è stato sviluppato con un focus su:
- architettura Vue 3 modulare
- gestione dello stato globale con `provide` / `inject`
- rendering dinamico dei componenti
- esperienza utente immersiva
- design moderno e responsive

Pensato come **progetto frontend portfolio**, con particolare attenzione a UX/UI e component architecture.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## ✨ Funzionalità principali

### 🔹 1. Configurazione Interattiva
L’utente può personalizzare:
- tappo
- corpo
- fondo

della bottiglia in maniera semplice e intuitiva.

---

### 🔹 2. Anteprima Live Dinamica
Ogni modifica aggiorna immediatamente la preview della bottiglia grazie alla reattività di Vue 3.

---

### 🔹 3. Sistema Colori Avanzato
Utilizzo di:
- HEX colors
- CSS filters
- `hue-rotate()`
- `grayscale()`
- `brightness()`

per simulare molteplici varianti senza duplicare immagini.

---

### 🔹 4. Navigazione Multi-Step
Configurazione guidata step-by-step:
1. Tappo
2. Corpo
3. Fondo
4. Schermata finale

---

### 🔹 5. Architettura Vue 3 Modulare
Componenti separati e riutilizzabili:
- `PreviewTappo`
- `PreviewCorpo`
- `PreviewFondo`
- `CurrentPreview`
- `BottleSelector`

---

### 🔹 6. Gestione Stato Globale
Lo stato della bottiglia viene condiviso tramite:
```js
provide()
inject()
```

senza necessità di librerie esterne.

---

### 🔹 7. Routing Client-Side
Navigazione fluida tramite Vue Router:
- Welcome page
- Configurator
- Thank you page

senza refresh della pagina.

---

### 🔹 8. UI Moderna e Responsive
Interfaccia moderna con:
- glow effects
- cards animate
- gradients
- layout responsive
- UX immersiva

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 🛠️ Built With

- **Vue 3**
- **Composition API**
- **Vue Router**
- **Vite**
- **JavaScript (ES6+)**
- **HTML5 / CSS3**
- **Reactive State**
- **Provide / Inject**

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 🚀 Getting Started

### 1️⃣ Clona la repository

```bash
git clone https://github.com/AntonioDS1/vue-sunnee-bottle.git
```

---

### 2️⃣ Installa le dipendenze

```bash
npm install
```

---

### 3️⃣ Avvia il progetto in locale

```bash
npm run dev
```

---

### 4️⃣ Build per la produzione

```bash
npm run build
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 📁 Struttura del progetto

```bash
src/
├── assets/
│   ├── images/              # Asset immagini bottiglia
│   └── vite.svg
│
├── components/
│   ├── CurrentPreview/      # Rendering preview dinamica
│   ├── Header/              # Navbar / Header
│   ├── HeroCard/            # Card showcase
│   ├── HeroCards/           # Container cards
│   ├── PreviewCorpo/        # Preview corpo bottiglia
│   ├── PreviewFondo/        # Preview fondo bottiglia
│   └── PreviewTappo/        # Preview tappo bottiglia
│
├── router/
│   └── index.js             # Configurazione Vue Router
│
├── views/
│   ├── BottleSelector/      # Logica configuratore
│   ├── Hero/                # Hero section
│   ├── HomeView/            # Pagina configuratore
│   ├── ThankView/           # Schermata finale
│   └── WelcomeView/         # Landing iniziale
│
├── App.vue
├── main.js
└── style.css
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 🧠 Architettura dell'applicazione

### 🔹 Stato Globale

La bottiglia viene gestita tramite un oggetto reattivo:

```js
const bottle = reactive({
  Tappo: 'rosso',
  Corpo: 'rosso',
  Fondo: 'rosso',
})
```

---

### 🔹 Provide / Inject

Condivisione globale dello stato:

```js
provide('bottle', bottle)
```

e recupero nei componenti figli:

```js
const bottle = inject("bottle")
```

---

### 🔹 Dynamic Components

Rendering dinamico delle preview:

```js
<component :is="currentComponent" />
```

---

### 🔹 Computed Properties

Aggiornamento automatico della UI:

```js
const currentColor = computed(() =>
  colors.value.find(c => c.id === selectedColor.value)
)
```

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 🎨 UX/UI Features

- Configuratore step-by-step
- Glow backgrounds
- Live bottle rendering
- Responsive layout
- Microinterazioni
- Preview real-time
- Floating badges
- Hero section moderna
- Dark UI

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 🌐 Repository

### 🔹 GitHub

👉 https://github.com/AntonioDS1/vue-sunnee-bottle

---

### 🔹 Live Demo (Vercel)

👉 https://vue-sunnee-bottle-two.vercel.app/

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## 📬 Contatti

### Antonio De Siena

GitHub: 👉 https://github.com/AntonioDS1

<p align="right">(<a href="#readme-top">back to top</a>)</p>

---

## ⭐ Supporta il progetto

Se il progetto ti è piaciuto:
- lascia una ⭐ alla repository
- condividilo
- prova la demo online

---

## 📄 Licenza

Distribuito sotto licenza MIT.
