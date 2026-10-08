<!-- p.12 -->
# 3.3. Grupo I80. Rastreabilidade de produto

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **128.70** | **I80** | **rastro** | **Detalhamento de produto sujeito a rastreabilidade** | **G** | **I01** | | **0-500** | | **Informar apenas quando se tratar de produto a ser rastreado posteriormente**<br>(Grupo criado na NT/2016/002) |
| 128.71 | I81 | nLote | Número do Lote do produto | E | I80 | C | 1-1 | 1- 20 | |
| 128.72 | I82 | qLote | Quantidade de produto no Lote | E | I80 | N | 1-1 | 8v3 | |
| 128.73 | I83 | dFab | Data de fabricação/ Produção | E | I80 | D | 1-1 | | Formato: “AAAA-MM-DD” |
| 128.74 | I84 | dVal | Data de validade | E | I80 | D | 1-1 | | Formato: “AAAA-MM-DD” Informar o último dia do mês caso a validade não especifique o dia. |
| 128.75 | I85 | cAgreg | Código de Agregação | E | I80 | C | 0-1 | 1-20 | |
