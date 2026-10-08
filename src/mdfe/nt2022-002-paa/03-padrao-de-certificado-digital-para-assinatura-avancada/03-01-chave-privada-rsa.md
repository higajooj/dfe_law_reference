<!-- p.05 -->

# 3.1 Chave Privada RSA (PrivateKey)

| # | Campo | Ele | Pai | Tipo | Ocor. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **Priv01** | **RSAKeyValue** | **G** | **Raiz** | **-** | **1-1** | **Chave Privada RSA** |
| Priv02 | Modulus | E | Priv01 | Base64 | 1-1 | |
| Priv03 | Exponent | E | Priv01 | C | 1-1 | Informar “AQAB” |
| Priv04 | P | E | Priv01 | Base64 | 1-1 | |
| Priv05 | Q | E | Priv01 | Base64 | 1-1 | |
| Priv06 | DP | E | Priv01 | Base64 | 1-1 | |
| Priv07 | DQ | E | Priv01 | Base64 | 1-1 | |
| Priv08 | InverseQ | E | Priv01 | Base64 | 1-1 | |
| Priv09 | D | E | Priv01 | Base64 | 1-1 | |
