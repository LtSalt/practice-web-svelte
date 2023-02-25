-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Movie" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "plot" TEXT NOT NULL,
    "genre" TEXT NOT NULL,
    "director" TEXT NOT NULL,
    "imdb" TEXT NOT NULL,
    "rotten" TEXT NOT NULL,
    "meta" TEXT NOT NULL,
    "personal" REAL NOT NULL,
    "comment" TEXT NOT NULL,
    "tags" TEXT NOT NULL
);
INSERT INTO "new_Movie" ("comment", "director", "genre", "id", "imdb", "meta", "personal", "plot", "rotten", "tags", "title") SELECT "comment", "director", "genre", "id", "imdb", "meta", "personal", "plot", "rotten", "tags", "title" FROM "Movie";
DROP TABLE "Movie";
ALTER TABLE "new_Movie" RENAME TO "Movie";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
