CREATE TABLE "__AuditSchemaVersion" (
    "Id" INTEGER NOT NULL CONSTRAINT "PK___AuditSchemaVersion" PRIMARY KEY,
    "Version" INTEGER NOT NULL
);
;

CREATE TABLE "MyHeader" (
    "HeaderId" TEXT NOT NULL CONSTRAINT "PK_MyHeader" PRIMARY KEY,
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

CREATE TABLE "MyDetail" (
    "DetailId" INTEGER NOT NULL CONSTRAINT "PK_MyDetail" PRIMARY KEY AUTOINCREMENT,
    "HeaderId" TEXT NOT NULL,
    "ColumnName" TEXT NOT NULL,
    "ValueText" TEXT NULL,
    "ValueType" TEXT NOT NULL,
    CONSTRAINT "FK_MyDetail_MyHeader_HeaderId" FOREIGN KEY ("HeaderId") REFERENCES "MyHeader" ("HeaderId") ON DELETE CASCADE
);
;

CREATE INDEX "IX_MyDetail_ColumnName" ON "MyDetail" ("ColumnName");
;

CREATE INDEX "IX_MyDetail_HeaderId" ON "MyDetail" ("HeaderId");
;

CREATE INDEX "IX_MyHeader_AuditedAtUtc" ON "MyHeader" ("AuditedAtUtc");
;

CREATE INDEX "IX_MyHeader_EntityType_EntityKey" ON "MyHeader" ("EntityType", "EntityKey");
;

CREATE INDEX "IX_MyHeader_TransactionId" ON "MyHeader" ("TransactionId");
