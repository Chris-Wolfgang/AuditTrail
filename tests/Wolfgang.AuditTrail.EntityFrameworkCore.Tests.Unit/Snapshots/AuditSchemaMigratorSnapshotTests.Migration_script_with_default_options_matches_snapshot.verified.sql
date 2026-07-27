CREATE TABLE "__AuditSchemaVersion" (
    "Id" INTEGER NOT NULL CONSTRAINT "PK___AuditSchemaVersion" PRIMARY KEY,
    "Version" INTEGER NOT NULL
);
;

CREATE TABLE "AuditHeader" (
    "HeaderId" TEXT NOT NULL CONSTRAINT "PK_AuditHeader" PRIMARY KEY,
    "TransactionId" TEXT NOT NULL,
    "AuditedAtUtc" TEXT NOT NULL,
    "UserId" TEXT NOT NULL,
    "OnBehalfOfUserId" TEXT NULL,
    "EntityType" TEXT NOT NULL,
    "EntityTable" TEXT NOT NULL,
    "EntityKey" TEXT NOT NULL,
    "Operation" TEXT NOT NULL
);
;

CREATE TABLE "AuditDetail" (
    "DetailId" INTEGER NOT NULL CONSTRAINT "PK_AuditDetail" PRIMARY KEY AUTOINCREMENT,
    "HeaderId" TEXT NOT NULL,
    "ColumnName" TEXT NOT NULL,
    "ValueText" TEXT NULL,
    "ValueType" TEXT NOT NULL,
    CONSTRAINT "FK_AuditDetail_AuditHeader_HeaderId" FOREIGN KEY ("HeaderId") REFERENCES "AuditHeader" ("HeaderId") ON DELETE CASCADE
);
;

CREATE INDEX "IX_AuditDetail_ColumnName" ON "AuditDetail" ("ColumnName");
;

CREATE INDEX "IX_AuditDetail_HeaderId" ON "AuditDetail" ("HeaderId");
;

CREATE INDEX "IX_AuditHeader_AuditedAtUtc" ON "AuditHeader" ("AuditedAtUtc");
;

CREATE INDEX "IX_AuditHeader_EntityType_EntityKey" ON "AuditHeader" ("EntityType", "EntityKey");
;

CREATE INDEX "IX_AuditHeader_TransactionId" ON "AuditHeader" ("TransactionId");
