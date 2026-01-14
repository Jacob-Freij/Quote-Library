# Quote Library


![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![CSS](https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![ZenQuotes API](https://img.shields.io/badge/ZenQuotes_API-lightgreen?style=for-the-badge)

An app to that pushed quotes from Zenquotes API and lets you store ones that you find important in local storage.

## Features
- Fetches random quotes using ZenQuotes API
- Save, undo, and reroll quotes
- Saved quotes are kept in localStorage

## Tech Stack

- **TypeScript (52.5%)**: Provides static typing and improved developer experience compared to it's Javascript counterpart.
- **CSS (31.3%)**: Styled using modern Tailwind CSS framework.
- **JavaScript/React (9.4%)**: Dynamically supports certain application features.
- **HTML (6.8%)**: Structure and basic markup of the application.
  
## Project Structure
- `src/` — Main source code (React components, styles). This should be the only parts of the code that are being changed
- `public/` — Static assets (Dont touch unless you know what your doing)
- `index.html` — Main HTML entrypoint
- `tailwind.config.js` — Tailwind CSS config file

## File Tree
```
Jacob-Freij/Quote-Library/
├── .gitignore
├── README.md
├── eslint.config.js
├── index.html
├── package-lock.json
├── package.json
├── postcss.config.cjs
├── postcss.config.js
├── tailwind.config.js
├── tsconfig.app.json
├── tsconfig.json
├── tsconfig.node.json
├── vite.config.ts
├── public/
│   └── vite.svg
└── src/
    ├── App.css
    ├── App.tsx
    ├── assets/
    ├── index.css
    ├── main.tsx
    └── vite-env.d.ts                      
```

## Customization
- Edit `src/App.tsx` for main UI logic
- Edit `src/App.css` for custom styles (e.g., glitch effect)
- Edit `src/index.css` for global styles

## API Integration

The application uses the [ZenQuotes API](https://zenquotes.io/) to fetch quotes. No need for an api key for the free tier access.
There is no current way to just add an api key if you have premium access, that will have to be implemented on your own.

Made for the Laurier Computing Society (https://lauriercs.ca)

