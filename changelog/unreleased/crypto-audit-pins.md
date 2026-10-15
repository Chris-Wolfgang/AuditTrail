type: fix

Pinned `System.Security.Cryptography.Pkcs` and `System.Security.Cryptography.Xml` to patched releases so restore no longer trips the `NU1902`/`NU1903` audit gate on five .NET denial-of-service advisories (CVE-2026-70162, CVE-2026-84008, CVE-2026-96958, CVE-2026-96959, CVE-2026-96960). Both packages arrived transitively; no audit behaviour changes.
