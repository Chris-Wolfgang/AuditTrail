ALTER DATABASE CHARACTER SET utf8mb4;
;

CREATE TABLE `__AuditSchemaVersion` (
    `Id` int NOT NULL,
    `Version` int NOT NULL,
    CONSTRAINT `PK___AuditSchemaVersion` PRIMARY KEY (`Id`)
) CHARACTER SET=utf8mb4;
;

CREATE TABLE `AuditHeader` (
    `HeaderId` char(36) COLLATE ascii_general_ci NOT NULL,
    `TransactionId` char(36) COLLATE ascii_general_ci NOT NULL,
    `AuditedAtUtc` datetime(6) NOT NULL,
    `UserId` varchar(256) CHARACTER SET utf8mb4 NOT NULL,
    `OnBehalfOfUserId` varchar(256) CHARACTER SET utf8mb4 NULL,
    `EntityType` varchar(256) CHARACTER SET utf8mb4 NOT NULL,
    `EntityTable` varchar(384) CHARACTER SET utf8mb4 NOT NULL,
    `EntityKey` varchar(256) CHARACTER SET utf8mb4 NOT NULL,
    `Operation` varchar(1) CHARACTER SET utf8mb4 NOT NULL,
    CONSTRAINT `PK_AuditHeader` PRIMARY KEY (`HeaderId`)
) CHARACTER SET=utf8mb4;
;

CREATE TABLE `AuditDetail` (
    `DetailId` bigint NOT NULL AUTO_INCREMENT,
    `HeaderId` char(36) COLLATE ascii_general_ci NOT NULL,
    `ColumnName` varchar(256) CHARACTER SET utf8mb4 NOT NULL,
    `ValueText` longtext CHARACTER SET utf8mb4 NULL,
    `ValueType` varchar(256) CHARACTER SET utf8mb4 NOT NULL,
    CONSTRAINT `PK_AuditDetail` PRIMARY KEY (`DetailId`),
    CONSTRAINT `FK_AuditDetail_AuditHeader_HeaderId` FOREIGN KEY (`HeaderId`) REFERENCES `AuditHeader` (`HeaderId`) ON DELETE CASCADE
) CHARACTER SET=utf8mb4;
;

CREATE INDEX `IX_AuditDetail_ColumnName` ON `AuditDetail` (`ColumnName`);
;

CREATE INDEX `IX_AuditDetail_HeaderId` ON `AuditDetail` (`HeaderId`);
;

CREATE INDEX `IX_AuditHeader_AuditedAtUtc` ON `AuditHeader` (`AuditedAtUtc`);
;

CREATE INDEX `IX_AuditHeader_EntityType_EntityKey` ON `AuditHeader` (`EntityType`, `EntityKey`);
;

CREATE INDEX `IX_AuditHeader_TransactionId` ON `AuditHeader` (`TransactionId`);
