# Grupo I80. Rastreabilidade de produto

Grupo criado para permitir a rastreabilidade de qualquer produto sujeito a regulações sanitárias, casos de recolhimento/recall, além de defensivos

agrícolas, produtos veterinários, odontológicos, medicamentos, bebidas, águas envasadas, embalagens, etc., a partir da indicação de informações de

número de lote, data de fabricação/produção, data de validade, etc. Obrig.atório o preenchimento deste grupo no caso de medicamentos e produtos

farmacêuticos.

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **128.70** | **rastro (I80)** | **G** | **I01** |  | **0-500** |  | **Detalhamento de produto sujeito a rastreabilidade<br>Informar apenas quando se tratar de produto a ser rastreado posteriormente (Grupo criado na NT/2016/002)** |
| 128.71 | nLote (I81) | E | I80 | C | 1-1 | 1- 20 | Número do Lote do produto |
| 128.72 | qLote (I82) | E | I80 | N | 1-1 | 8v3 | Quantidade de produto no Lote |
| 128.73 | dFab (I83) | E | I80 | D | 1-1 |  | Data de fabricação/ Produção<br>Formato: “AAAA-MM-DD” |
| 128.74 | dVal (I84) | E | I80 | D | 1-1 |  | Data de validade<br>Formato: “AAAA-MM-DD” Informar o último dia do mês caso a validade não especifique o dia. |
| 128.75 | cAgreg (I85) | E | I80 | N | 0-1 | 1-20 | Código de Agregação |
