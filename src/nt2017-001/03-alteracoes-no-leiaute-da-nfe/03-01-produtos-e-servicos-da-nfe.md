# 3.1 I. Produtos e Serviços da NF-e

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 102 | I03 | cEAN | GTIN (Global Trade Item Number) do produto, antigo código EAN ou código de barras | E | I01 | C | 1-1 | 0,8,12,13, 14 | Preencher com o código GTIN-8, GTIN-12, GTIN-13 ou GTIN-14 (antigos códigos EAN, UPC e DUN-14).<br><br>**Para produtos que <span style="color:red">não</span> possuem código de barras com GTIN, deve ser informado o literal “SEM GTIN”;** |
| 111 | I12 | cEANTrib | GTIN (Global Trade Item Number) da unidade tributável, antigo código EAN ou código de barras | E | I01 | C | 1-1 | 0,8,12,13, 14 | Preencher com o código GTIN-8, GTIN-12, GTIN-13 ou GTIN-14 (antigos códigos EAN, UPC e DUN-14) da unidade tributável do produto.<br><br>O GTIN da unidade tributável deve corresponder àquele da **menor unidade comercializável** identificada por código GTIN.<br><br>**Para produtos que <span style="color:red">não</span> possuem código de barras com GTIN, deve ser informado o literal “SEM GTIN”;** |
