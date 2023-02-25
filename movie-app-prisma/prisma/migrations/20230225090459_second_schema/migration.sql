/*
  Warnings:

  - Added the required column `imdb` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `meta` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `personal` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `plot` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `rotten` to the `Movie` table without a default value. This is not possible if the table is not empty.
  - Added the required column `tags` to the `Movie` table without a default value. This is not possible if the table is not empty.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "plot" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "imdb" REAL NOT NULL,
    "rotten" REAL NOT NULL,
    "meta" REAL NOT NULL,
    "personal" REAL NOT NULL,
    "comment" TEXT NOT NULL,
    "tags" TEXT NOT NULL
);
INSERT INTO "new_Movie" ("comment", "genre", "id", "title") SELECT "comment", "genre", "id", "title" FROM "Movie";
DROP TABLE "Movie";
ALTER TABLE "new_Movie" RENAME TO "Movie";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
