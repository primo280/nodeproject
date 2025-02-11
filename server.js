const express = require('express');
const { PrismaClient } = require('@prisma/client');
const cors = require('cors');
const { createSong } = require('./createSong'); // Importation du fichier createSong.js
const app = express();
const prisma = new PrismaClient();

// Middleware
app.use(cors());
app.use(express.json());

// API pour récupérer toutes les chansons
app.get('/songs', async (req, res) => {
  try {
    const songs = await prisma.song.findMany();
    if (songs.length === 0) {
      await createSong();  // Créer les chansons si aucune chanson n'est trouvée
      res.json(await prisma.song.findMany());  // Renvoyer les chansons après création
    } else {
      res.json(songs);
    }
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue' });
  }
});

// API pour récupérer une chanson par ID
app.get('/songs/:id', async (req, res) => {
  const { id } = req.params;
  try {
    const song = await prisma.song.findUnique({
      where: { id: parseInt(id) },
    });
    if (song) {
      res.json(song);
    } else {
      res.status(404).json({ error: 'Chanson non trouvée' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Une erreur est survenue' });
  }
});

// Démarrer le serveur
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
