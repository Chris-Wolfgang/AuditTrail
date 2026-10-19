CREATE TABLE [__AuditSchemaVersion] (
    [Id] int NOT NULL,
    [Version] int NOT NULL,
    CONSTRAINT [PK___AuditSchemaVersion] PRIMARY KEY ([Id])
);
;

CREATE TABLE [AuditHeader] (
    [HeaderId] uniqueidentifier NOT NULL,
    [TransactionId] uniqueidentifier NOT NULL,
    [AuditedAtUtc] datetime2(6) NOT NULL,
    [UserId] nvarchar(256) NOT NULL,
    [OnBehalfOfUserId] nvarchar(256) NULL,
    [EntityType] nvarchar(256) NOT NULL,
    [EntityTable] nvarchar(384) NOT NULL,
    [EntityKey] nvarchar(256) NOT NULL,
    [Operation] nvarchar(1) NOT NULL,
    CONSTRAINT [PK_AuditHeader] PRIMARY KEY ([HeaderId])
);
;

CREATE TABLE [AuditDetail] (
    [DetailId] bigint NOT NULL IDENTITY,
    [HeaderId] uniqueidentifier NOT NULL,
    [ColumnName] nvarchar(256) NOT NULL,
    [ValueText] nvarchar(max) NULL,
    [ValueType] nvarchar(256) NOT NULL,
    CONSTRAINT [PK_AuditDetail] PRIMARY KEY ([DetailId]),
    CONSTRAINT [FK_AuditDetail_AuditHeader_HeaderId] FOREIGN KEY ([HeaderId]) REFERENCES [AuditHeader] ([HeaderId]) ON DELETE CASCADE
);
;

CREATE INDEX [IX_AuditDetail_ColumnName] ON [AuditDetail] ([ColumnName]);
;

CREATE INDEX [IX_AuditDetail_HeaderId] ON [AuditDetail] ([HeaderId]);
;

CREATE INDEX [IX_AuditHeader_AuditedAtUtc] ON [AuditHeader] ([AuditedAtUtc]);
;

CREATE INDEX [IX_AuditHeader_EntityType_EntityKey] ON [AuditHeader] ([EntityType], [EntityKey]);
;

CREATE INDEX [IX_AuditHeader_TransactionId] ON [AuditHeader] ([TransactionId]);
