using System.Data.Common;
using System.Diagnostics.CodeAnalysis;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Diagnostics;
using Microsoft.EntityFrameworkCore.Storage;

namespace Wolfgang.AuditTrail.Tests.Integration.TestSupport;

/// <summary>
/// Db2's SAVEPOINT syntax needs an explicit ON ROLLBACK RETAIN CURSORS clause that
/// IBM.EntityFrameworkCore's SQL generator does not emit (SQL0104N "unexpected
/// token END-OF-STATEMENT... following SAVEPOINT EFSAVEPOINT"), so EF's automatic
/// savepoint-on-nested-SaveChanges behavior fails against this provider. Replacing
/// <see cref="IRelationalTransactionFactory"/> with one that reports
/// <see cref="RelationalTransaction.SupportsSavepoints"/> as false disables that
/// behavior entirely for Db2 -- the same documented workaround EF Core itself uses
/// for providers/configurations that do not support savepoints (e.g. SQL Server
/// memory-optimized tables).
/// </summary>
[ExcludeFromCodeCoverage]
internal sealed class Db2NoSavepointsTransactionFactory : IRelationalTransactionFactory
{
    private readonly ISqlGenerationHelper _sqlGenerationHelper;



    public Db2NoSavepointsTransactionFactory(ISqlGenerationHelper sqlGenerationHelper)
    {
        _sqlGenerationHelper = sqlGenerationHelper;
    }



    public RelationalTransaction Create
    (
        IRelationalConnection connection,
        DbTransaction transaction,
        Guid transactionId,
        IDiagnosticsLogger<DbLoggerCategory.Database.Transaction> logger,
        bool transactionOwned
    )
    {
        return new NoSavepointsRelationalTransaction
        (
            connection,
            transaction,
            transactionId,
            logger,
            transactionOwned,
            _sqlGenerationHelper
        );
    }



    private sealed class NoSavepointsRelationalTransaction : RelationalTransaction
    {
        public NoSavepointsRelationalTransaction
        (
            IRelationalConnection connection,
            DbTransaction transaction,
            Guid transactionId,
            IDiagnosticsLogger<DbLoggerCategory.Database.Transaction> logger,
            bool transactionOwned,
            ISqlGenerationHelper sqlGenerationHelper
        )
            : base(connection, transaction, transactionId, logger, transactionOwned, sqlGenerationHelper)
        {
        }



        public override bool SupportsSavepoints => false;
    }
}
