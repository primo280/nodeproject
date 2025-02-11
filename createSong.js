
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const fs = require('fs');
const path = require('path');

// 📌 Dossier où seront stockées les images
const uploadDir = path.join(__dirname, 'uploads');


// 📌 Vérifier si le dossier "uploads" existe, sinon le créer
if (!fs.existsSync(uploadDir)) {
  fs.mkdirSync(uploadDir);
}

const songsData = [
  { 
    songId: "1",
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    duration: 3.22,
    releaseDate: new Date('2020-11-29'),   
    videoUrl: 'https://www.youtube.com/watch?v=4NRXx6U8ABQ',
    imageFile: '1.jpg',
  },
  {
    songId: "2",
    title: 'Levitating',
    artist: 'Dua Lipa',
    duration: 3.24,
    releaseDate: new Date('2020-10-01'),
    videoUrl: 'https://www.youtube.com/watch?v=TUVcZfQe-Kw',
    imageFile: '2.png',
  },
  {
    songId: "3",
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    duration: 3.53,
    releaseDate: new Date('2017-01-06'),
    videoUrl: 'https://www.youtube.com/watch?v=JGwWNGJdvx8',
    imageFile: '3.jpg',
  },
  {
    songId: "4",
    title: 'Peaches',
    artist: 'Justin Bieber feat. Daniel Caesar & Giveon',
    duration: 3.18,
    releaseDate: new Date('2021-03-19'),
    videoUrl: 'https://www.youtube.com/watch?v=tQ0yjYUFKAE',
    imageFile: '4.jpg',
  },
  {
    songId: "5",
    title: 'Save Your Tears',
    artist: 'The Weeknd',
    duration: 3.35,
    releaseDate: new Date('2020-08-07'),
    videoUrl: 'https://www.youtube.com/watch?v=XXYlFuWEuKI',
    imageFile: '5.jpg',
  },
  {
    songId: "6",
    title: 'Kiss Me More',
    artist: 'Doja Cat feat. SZA',
    duration: 3.29,
    releaseDate: new Date('2021-04-09'),
    videoUrl: 'https://www.youtube.com/watch?v=0EVVKs6DQLo',
    imageFile: '6.jpg',
  },
  {
    songId: "7",
    title: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    duration: 2.58,
    releaseDate: new Date('2021-05-14'),
    videoUrl: 'https://www.youtube.com/watch?v=gNi_6U5Pm_o',
    imageFile: '7.jpg',
  },
  
];



// 📌 Fonction pour copier les images locales dans le dossier uploads
async function copyImages() {
  for (const song of songsData) {
    const sourcePath = path.join(__dirname, 'images', song.imageFile); // 📌 Dossier contenant les images
    const destPath = path.join(uploadDir, song.imageFile);

    if (fs.existsSync(sourcePath)) {
      fs.copyFileSync(sourcePath, destPath);
      console.log(`✅ Image copiée: ${song.imageFile} `);
    } else {
      console.log(`❌ Image non trouvée: ${song.imageFile}`);
    }
  }
}


// 📌 Fonction pour ajouter les chansons à la BDD avec les images locales
async function createSongs() {
  await copyImages(); // 📌 Copier les images avant d'ajouter les chansons

  for (const songData of songsData) {
    const imageUrl = `https://nodeproject-production-15c0.up.railway.app/uploads/${songData.imageFile}`;

    const newSong = await prisma.song.create({
      data: {
        songId: songData.songId,
        title: songData.title,
        artist: songData.artist,
        duration: songData.duration,
        releaseDate: songData.releaseDate,
        videoUrl: songData.videoUrl,
        imageUrl: imageUrl // 📌 Stocker l'URL locale de l'image
      }
    });

    console.log(`🎵 Chanson ajoutée: ${newSong.title} - ${newSong.imageUrl}`);
  }
}

// 📌 Exécuter la fonction
createSongs()
  .catch((error) => console.error("🚨 Erreur:", error))
  .finally(async () => {
    await prisma.$disconnect();
  });

module.exports = { createSongs };