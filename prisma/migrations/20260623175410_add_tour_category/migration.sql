-- CreateTable
CREATE TABLE "TourCategory" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "slug" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'published',
    "category" TEXT,
    "featured" BOOLEAN NOT NULL DEFAULT false,
    "sortOrder" INTEGER NOT NULL DEFAULT 0,
    "data" JSONB NOT NULL,
    "deletedAt" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "TourCategory_slug_key" ON "TourCategory"("slug");

-- CreateIndex
CREATE INDEX "TourCategory_status_deletedAt_idx" ON "TourCategory"("status", "deletedAt");
