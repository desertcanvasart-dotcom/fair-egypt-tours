-- CreateTable
CREATE TABLE "Booking" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "kind" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'new',
    "name" TEXT NOT NULL,
    "email" TEXT,
    "phone" TEXT,
    "tourSlug" TEXT,
    "tourTitle" TEXT,
    "places" TEXT,
    "days" TEXT,
    "adults" INTEGER,
    "children" INTEGER,
    "dates" TEXT,
    "notes" TEXT,
    "source" TEXT
);

-- CreateIndex
CREATE INDEX "Booking_createdAt_idx" ON "Booking"("createdAt");
