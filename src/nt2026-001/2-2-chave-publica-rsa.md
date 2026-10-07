<!-- p.5 -->
# 2.2. Chave Pública RSA (PublicKey) \*

| # | Campo | Ele | Pai | Tipo | Ocor. | Descrição / Observação |
|---|---|---|---|---|---|---|
| **Pub01** | **RSAKeyValue** | **G** | **Raiz** | **-** | **1-1** | **Grupo Chave Pública RSA** |
| Pub02 | Modulus | E | Pub01 | Base64 | 1-1 | Chave Pública do Emitente no PAA |
| Pub03 | Exponent | E | Pub01 | C | 1-1 | Informar “AQAB” |

\* Padrão XML
