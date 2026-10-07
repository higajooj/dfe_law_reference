<!-- p.9 -->
# 3. Leiaute da Nota Fiscal Eletrônica

Para facilitar a referência dentro desta NT foram copiadas neste capítulo as definições existentes no MOC v7.0 para o Grupo I. Produtos e Serviços da NF-e, apesar de não terem sofrido alteração.

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **I01 (100)** | **prod** | **G** | **H01** |  | **1-1** |  | **Detalhamento de Produtos e Serviços** |
| I03 (102) | cEAN | E | I01 | C | 1-1 | 0,8,12,13,14 | GTIN (Global Trade Item Number) do produto, antigo código EAN ou código de barras<br>Preencher com o código GTIN-8, GTIN-12, GTIN-13 ou GTIN-14 (antigos códigos EAN, UPC e DUN-14)<br>Para produtos que não possuem código de barras com GTIN, deve ser informado o literal “SEM GTIN”;<br>(atualizado NT 2017/001) |
| I12 (111) | cEANTrib | E | I01 | C | 1-1 | 0,8,12,13,14 | GTIN (Global Trade Item Number) da unidade tributável, antigo código EAN ou código de barras<br>Preencher com o código GTIN-8, GTIN-12, GTIN-13 ou GTIN-14 (antigos códigos EAN, UPC e DUN-14) da unidade tributável do produto.<br>O GTIN da unidade tributável deve corresponder àquele da menor unidade comercializável identificada por código GTIN.<br>Para produtos que não possuem código de barras com GTIN, deve ser informado o literal "SEM GTIN";<br>(Atualizado NT 2017/001) |
