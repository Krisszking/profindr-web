# Fejlesztői Útmutató (Contributing Guide)

## 🌿 Gitflow Stratégia

A projekt a következő branchelési stratégiát követi:

### Ág Struktúra (Branch Structure)

- **`main` (Production)**
  - A stabil, éles verzió.
  - Közvetlenül ide SOHA nem commitolunk.
  - Csak a `staging` ágból történik merge release esetén, vagy `hotfix` ágból sürgős javítás esetén.

- **`staging` (Pre-production Testing)**
  - A tesztelési környezet.
  - Itt ellenőrizzük a fejlesztéseket élesítés előtt.
  - A `develop` ágból érkeznek ide a változtatások.

- **`develop` (Development)**
  - A fő fejlesztői ág.
  - Minden új funkció (`feature/*`) ide kerül beolvasztásra (merge).

### Branch Elnevezési Konvenciók

Kérlek, használd az alábbi prefixeket és formátumot:

- **Új funkció (`feature/*`)**
  - `feature/professional-profile`
  - `feature/payment-integration`
  - `feature/push-notifications`

- **Bug javítás (`bugfix/*`)**
  - `bugfix/login-error`
  - `bugfix/image-upload-crash`

- **Hotfix (production) (`hotfix/*`)**
  - `hotfix/payment-critical-fix`

- **Release (`release/*`)**
  - `release/v1.0.0`

### 📝 Commit Message Formátum

Kérlek, kövesd a **Conventional Commits** szabványt:

```
<type>(<scope>): <subject>

<body>

<footer>
```

**Példák:**
- `feat(auth): add Google OAuth login`
- `fix(chat): resolve message ordering issue`
- `docs(api): update endpoint documentation`
- `style(ui): improve button styling`
- `refactor(database): optimize query performance`
- `test(payment): add payment flow tests`
- `chore(deps): update dependencies`

**Típusok (`<type>`):**
- `feat`: Új funkció
- `fix`: Hibajavítás
- `docs`: Dokumentáció
- `style`: Formázás (nem kód változás)
- `refactor`: Kód refaktorálás
- `test`: Tesztek hozzáadása/javítása
- `chore`: Egyéb karbantartás (build, deps)

---

## 🚀 Fejlesztési Folyamat

### 1. Frissítsd a develop branch-et
```bash
git checkout develop
git pull origin develop
```

### 2. Hozz létre feature branch-et
```bash
git checkout -b feature/professional-ratings
```

### 3. Dolgozz a feature-ön
... kódolás ...

### 4. Commit-ok
```bash
git add .
git commit -m "feat(ratings): add professional rating system"
```

### 5. Push
```bash
git push origin feature/professional-ratings
```

### 6. Pull Request létrehozása
GitHub-on: `develop` ← `feature/professional-ratings`

---

## 🐛 Bugfix Folyamat

### 1. Develop-ból indulj
```bash
git checkout develop
git pull origin develop
```

### 2. Bug branch
```bash
git checkout -b bugfix/login-crash
```

### 3. Javítás
```bash
git add .
git commit -m "fix(auth): resolve login crash on iOS"
```

### 4. Push és PR
```bash
git push origin bugfix/login-crash
```

---

## 🔥 Hotfix Folyamat (Kritikus Éles Hiba)

### 1. Main-ből indulj (production)
```bash
git checkout main
git pull origin main
```

### 2. Hotfix branch
```bash
git checkout -b hotfix/payment-error
```

### 3. Kritikus javítás
```bash
git add .
git commit -m "hotfix(payment): fix subscription renewal"
```

### 4. Merge vissza main-be ÉS develop-ba
```bash
git checkout main
git merge hotfix/payment-error
git push origin main

git checkout develop
git merge hotfix/payment-error
git push origin develop
```
