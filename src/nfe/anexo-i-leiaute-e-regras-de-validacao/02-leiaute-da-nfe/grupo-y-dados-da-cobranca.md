# Grupo Y. Dados da Cobrança

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **389** | **cobr (Y01)** | **G** | **A01** |  | **0-1** |  | **Grupo Cobrança** |
| **390** | **fat (Y02)** | **G** | **Y01** |  | **0-1** |  | **Grupo Fatura** |
| 391 | nFat (Y03) | E | Y02 | C | 0-1 | 1 - 60 | Número da Fatura |
| 392 | vOrig (Y04) | E | Y02 | N | 0-1 | 13v2 | Valor Original da Fatura |
| 393 | vDesc (Y05) | E | Y02 | N | 0-1 | 13v2 | Valor do desconto |
| 394 | vLiq (Y06) | E | Y02 | N | 0-1 | 13v2 | Valor Líquido da Fatura |
| **395** | **dup (Y07)** | **G** | **Y01** |  | **0-120** |  | **Grupo Parcelas<br>(NT 2011/004) (Grupo atualizado na NT2016.002)** |
| 396 | nDup (Y08) | E | Y07 | C | 0 - 1 | 1 - 60 | Número da Parcela<br>Obrigatória informação do número de parcelas com 3 algarismos, sequenciais e consecutivos. Ex.: “001”,”002”,”003”,... Observação: este padrão de preenchimento será Obrig.atório somente a partir de 03/09/2018 |
| 397 | dVenc (Y09) | E | Y07 | D | 0 - 1 |  | Data de vencimento<br>Formato: “AAAA-MM-DD”. Obrigatória a informação da data de vencimento na ordem crescente das datas. Ex.: “2018-06-01”,”2018-07-01”, “2018-08-01”,... <!-- p.62 --> |
| 398 | vDup (Y10) | E | Y07 | N | 1-1 | 13v2 | Valor da Parcela<br>(NT 2012/003) |
