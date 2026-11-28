type: fix

When the interceptor's audit pass fails and rolling back its owned transaction also fails (or the save's token is already cancelled), the original exception now surfaces and the `ChangeTracker` is still cleared, instead of the rollback exception replacing it.
