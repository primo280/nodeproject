# 🎵 API de Gestion de Musique avec Node.js, Prisma et SQLite

Cette API permet de gérer des chansons, leurs artistes, et de stocker des images et vidéos.

## 🚀 Fonctionnalités

- 📂 Stockage des fichiers (images et vidéos) dans la base de données SQLite.
- 🎵 Ajout, récupération, mise à jour et suppression de chansons.
- 🔍 Rechercher des chansons par titre ou artiste.
- 🌍 Déploiement gratuit avec **Railway**.

---

## 🛠️ Installation et Configuration

### 1️⃣ **Cloner le projet**

```bash
git clone https://github.com/ton-utilisateur/ton-repo.git
cd ton-repo
```

### 2️⃣ **Installer les dépendances**

```bash
npm install
```

### 3️⃣ **Configurer la base de données**

```bash
npx prisma migrate dev --name init
```

### 4️⃣ **Lancer le serveur**

```bash
npm start
```

Par défaut, l’API tourne sur `http://localhost:3000`.

---

## 🔗 Endpoints de l'API

### 📌 **Ajouter une chanson**

**POST** `/songs`  
- **Body :**
```json
{
  "title": "Blinding Lights",
  "artist": "The Weeknd",
  "duration": 3.22,
  "releaseDate": "2020-11-29",
  "videoUrl": "https://www.youtube.com/watch?v=4NRXx6U8ABQ",
  "imageFile": "fichier.jpg"
}
```
- **Réponse :** `201 Created`

---

### 📌 **Récupérer toutes les chansons**

**GET** `/songs`

- **Réponse :**
```json
[
  {
    "songId": "1",
    "title": "Blinding Lights",
    "artist": "The Weeknd",
    "imageUrl": "https://ton-api.railway.app/uploads/fichier.jpg"
  }
]
```

---

### 📌 **Récupérer une chanson par ID**

**GET** `/songs/{id}`

- **Réponse :**
```json
{
  "songId": "1",
  "title": "Blinding Lights",
  "artist": "The Weeknd",
  "imageUrl": "https://ton-api.railway.app/uploads/fichier.jpg"
}
```

---

### 📌 **Supprimer une chanson**

**DELETE** `/songs/{id}`

- **Réponse :** `200 OK`

---

## ☁️ Déploiement sur Railway

1️⃣ **Créer un projet Railway**  
2️⃣ **Connecter le repo GitHub**  
3️⃣ **Ajouter les variables d’environnement :**
   - `DATABASE_URL="file:./dev.db"`
4️⃣ **Déployer 🚀**

---

## 📂 Gestion des fichiers

Les images sont stockées dans `/uploads/` et accessibles via l’URL :  
`https://ton-api.railway.app/uploads/{nom_du_fichier}`

---

## 📜 Licence

Projet open-source sous licence MIT. Créé avec ❤️ par WAKE UP DEV.

# nodeproject