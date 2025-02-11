
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const songsData = [
  { 
    songId: "1",
    title: 'Blinding Lights',
    artist: 'The Weeknd',
    duration: 3.22,
    releaseDate: new Date('2020-11-29'),   
    videoUrl: 'https://www.youtube.com/watch?v=4NRXx6U8ABQ',
    imageUrl: 'https://images.hdqwalls.com/download/the-weeknd-blinding-lights-sy-2880x1800.jpg',
  },
  {
    songId: "2",
    title: 'Levitating',
    artist: 'Dua Lipa',
    duration: 3.24,
    releaseDate: new Date('2020-10-01'),
    videoUrl: 'https://www.youtube.com/watch?v=TUVcZfQe-Kw',
    imageUrl: 'https://www.pngall.com/wp-content/uploads/5/Dua-Lipa-PNG.png',
  },
  {
    songId: "3",
    title: 'Shape of You',
    artist: 'Ed Sheeran',
    duration: 3.53,
    releaseDate: new Date('2017-01-06'),
    videoUrl: 'https://www.youtube.com/watch?v=JGwWNGJdvx8',
    imageUrl: 'https://www.radioandmusic.com/sites/www.radioandmusic.com/files/images/entertainment/2017/05/05/shape-you.jpg',
  },
  {
    songId: "4",
    title: 'Peaches',
    artist: 'Justin Bieber feat. Daniel Caesar & Giveon',
    duration: 3.18,
    releaseDate: new Date('2021-03-19'),
    videoUrl: 'https://www.youtube.com/watch?v=tQ0yjYUFKAE',
    imageUrl: 'https://headlineplanet.com/home/wp-content/uploads/2021/04/Justin-Bieber-Peaches.jpg',
  },
  {
    songId: "5",
    title: 'Save Your Tears',
    artist: 'The Weeknd',
    duration: 3.35,
    releaseDate: new Date('2020-08-07'),
    videoUrl: 'https://www.youtube.com/watch?v=XXYlFuWEuKI',
    imageUrl: 'https://themediaalert.com/wp-content/uploads/2021/01/The-Weeknd-Save-Your-Tears-1170x878.jpg',
  },
  {
    songId: "6",
    title: 'Kiss Me More',
    artist: 'Doja Cat feat. SZA',
    duration: 3.29,
    releaseDate: new Date('2021-04-09'),
    videoUrl: 'https://www.youtube.com/watch?v=0EVVKs6DQLo',
    imageUrl: 'https://latexin.ru/images/news/latex-kitty-doja-cat.jpg',
  },
  {
    songId: "7",
    title: 'Good 4 U',
    artist: 'Olivia Rodrigo',
    duration: 2.58,
    releaseDate: new Date('2021-05-14'),
    videoUrl: 'https://www.youtube.com/watch?v=gNi_6U5Pm_o',
    imageUrl: 'https://i.pinimg.com/originals/a4/d0/71/a4d071c5741035b646259d9fecce253e.jpg',
  },
  {
    songId: "8",
    title: 'Montero (Call Me By Your Name)',
    artist: 'Lil Nas X',
    duration: 2.17,
    releaseDate: new Date('2021-03-26'),
    videoUrl: 'https://www.youtube.com/watch?v=6swmTBVI83k',
    imageUrl: 'https://www.nme.com/wp-content/uploads/2024/01/Lil-Nas-X-J-Christ-single-cover.-Credit-PRESS.jpg',
  },
  {
    songId: "9",
    title: 'Stay',
    artist: 'Kid LAROI & Justin Bieber',
    duration: 2.21,
    releaseDate: new Date('2021-07-09'),
    videoUrl: 'https://www.youtube.com/watch?v=kTJczUoc26U',
    imageUrl: 'https://i.pinimg.com/736x/cc/bf/f7/ccbff7bba941f460a85cb5239fcfdb11.jpg',
  },
  {
    songId: "10",
    title: 'Industry Baby',
    artist: 'Lil Nas X & Jack Harlow',
    duration: 3.32,
    releaseDate: new Date('2021-07-23'),
    videoUrl: 'https://www.youtube.com/watch?v=UTHLKHL_whs',
    imageUrl: 'https://pics.filmaffinity.com/Lil_Nas_X_Jack_Harlow_Industry_Baby_Vaideo_musical-925296335-large.jpg',
  },
];

// Créer plusieurs chansons dans la base de données
async function createSong() {
  for (const songData of songsData) {
    const newSong = await prisma.song.create({
      data: songData,
    });
    console.log(`Chanson créée: ${newSong.title} par ${newSong.artist}`);
  }
}

// Appel de la fonction pour créer les chansons
createSong();

module.exports = { createSong };
