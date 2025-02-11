-- CreateTable
CREATE TABLE "Song" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "artist" TEXT NOT NULL,
    "duration" REAL NOT NULL,
    "releaseDate" DATETIME NOT NULL,
    "isFavorite" BOOLEAN NOT NULL DEFAULT false,
    "songId" TEXT NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "videoUrl" TEXT,
    "imageUrl" TEXT
);

-- CreateIndex
CREATE UNIQUE INDEX "Song_songId_key" ON "Song"("songId");
