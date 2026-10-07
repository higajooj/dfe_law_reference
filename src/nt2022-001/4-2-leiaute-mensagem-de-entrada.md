<!-- p.8 -->
# 04.2 Leiaute Mensagem de Entrada

Schema XML: consGTIN_v9.99.xsd

<!-- REVISAR p.8: na linha P10 (GTIN) a coluna Ele traz "N" no original, provavelmente deveria ser "E"; mantido conforme impresso -->

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **P01** | **consGTIN** | **Raiz** | **-** | **-** | **-** | **-** | **Tag Raiz** |
| P02 | versao | A | P01 | N | 1-1 | 2v2 | Versão do leiaute |
| P10 | GTIN | N | P01 | N | 1-1 | 8, 12, 13, 14 | Informar o código GTIN a ser consultado. |
