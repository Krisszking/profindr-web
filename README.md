# 🚀 ProFindr

> Szakember kereső platform építőipari vállalkozóknak és megrendelőknek

[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE)
[![React Native](https://img.shields.io/badge/React%20Native-0.73-blue)](https://reactnative.dev/)
[![Supabase](https://img.shields.io/badge/Supabase-2.0-green)](https://supabase.com/)

## 📱 Mire való?

ProFindr egy mobilalkalmazás amely összeköti az építőipari szakembereket (kőművesek, villanyszerelők, stb.) a megrendelőkkel. GPS alapú keresés, in-app chat, értékelési rendszer és előfizetési modell.

## ✨ Főbb funkciók

- 🔍 GPS alapú szakember keresés
- 💬 In-app chat
- ⭐ Értékelési rendszer (1-5 csillag)
- 📅 Naptár integráció
- 💳 Előfizetések (havi/éves)
- 🔔 Push + Email értesítések
- 👨💼 Admin dashboard
- 🌍 Többnyelvű (magyar, angol)

## 🛠️ Tech Stack

### Mobile App
- React Native
- TypeScript
- React Navigation
- Redux Toolkit
- React Native Maps

### Backend
- Supabase (PostgreSQL + Auth + Storage + Realtime)
- Edge Functions (Deno)

### Admin Dashboard
- React
- TypeScript
- Tailwind CSS
- Recharts

## 🚀 Gyors Start

### Előfeltételek
```bash
node >= 18.x
npm >= 9.x
React Native CLI
Supabase CLI (optional)
```

### 1. Klónozás
```bash
git clone https://github.com/your-username/ProFindr.git
cd ProFindr
```

### 2. Környezeti változók
```bash
cp .env.example .env
# Töltsd ki a Supabase kulcsokat
```

### 3. Függőségek telepítése
```bash
# Root
npm install

# Mobile
cd mobile && npm install

# Admin
cd web-admin && npm install
```

### 4. Adatbázis setup
```bash
# Supabase projektben futtasd a schema fájlokat
database/schema/00_initial_setup.sql
database/schema/01_rls_policies.sql
```

### 5. Indítás
```bash
# Mobile (iOS)
cd mobile && npm run ios

# Mobile (Android)
cd mobile && npm run android

# Admin Dashboard
cd web-admin && npm run dev
```

## 📂 Projekt Struktúra

```
ProFindr/
├── mobile/          # React Native app
├── web-admin/       # Admin felület
├── web-client/      # Publikus weboldal (Next.js)
├── database/        # SQL sémák és migrációk
└── ...
```
