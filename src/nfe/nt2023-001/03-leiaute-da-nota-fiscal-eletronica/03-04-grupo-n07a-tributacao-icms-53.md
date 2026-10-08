<!-- p.23 -->
# 3.4. Grupo N07a- Grupo Tributação do ICMS = 53

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **212.09 / N07a** | **ICMS53** | **CG** | **N01** | **-** | **1-1** | **-** | **Grupo Tributação do ICMS monofásico**<br>Tributação monofásica sobre combustíveis com recolhimento diferido; |
| 212.10 / N11 | orig | E | N07a | N | 1-1 | 1 | Origem da mercadoria<br>0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| 212.11 / N12 | CST | E | N07a | N | 1-1 | 2 | Tributação do ICMS<br>53= Tributação monofásica sobre combustíveis com recolhimento diferido; |

<!-- p.24 -->
| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 212.12 / N37a | qBCMono | E | N07a | N | 0-1 | 11v0-4 | Quantidade Tributada<br>Informar a BC do ICMS em quantidade conforme unidade de medida estabelecida na legislação para o produto. |
| 212.13 / N38 | adRemICMS | E | N07a | N | 0-1 | 3v2-4 | Alíquota adRem do imposto<br>Alíquota *ad rem* do ICMS estabelecida na legislação para o produto. |
| 212.14 / N41a | vICMSMonoOp | E | N07a | N | 0-1 | 13v2 | Valor do ICMS da operação<br>O valor do ICMS é obtido pela multiplicação da alíquota *ad rem* pela quantidade do produto conforme unidade de medida estabelecida em legislação, como se não houvesse o diferimento |
| 212.15 / N42 | pDif | E | N07a | N | 0-1 | 3v2-4 | Percentual do diferimento<br>No caso de diferimento total, informar o percentual de diferimento "100". |
| 245.74 / N43 | vICMSMonoDif | E | N07a | N | 0-1 | 13v2 | Valor do ICMS diferido<br>O valor do ICMS é obtido pela multiplicação da alíquota *ad rem* pela quantidade do produto conforme unidade de medida estabelecida, multiplicado pelo percentual de diferimento. |
| 212.18 / N39 | vICMSMono | E | N07a | N | 0-1 | 13v2 | Valor do ICMS próprio devido<br>O valor do ICMS próprio devido é o resultado do valor do ICMS da operação menos valor do ICMS diferido. |
| ~~212.15 / N41a~~ | ~~qBCMonoDif~~ | ~~E~~ | ~~N07a~~ | ~~N~~ | ~~0-1~~ | ~~11v0-4~~ | ~~Quantidade tributada diferida<br>Informar a BC do ICMS diferido em quantidade conforme unidade de medida estabelecida na legislação para o produto.~~ |
| ~~212.16 / N42~~ | ~~adRemICMSDif~~ | ~~E~~ | ~~N07a~~ | ~~N~~ | ~~0-1~~ | ~~3v2-4~~ | ~~Alíquota ad rem do imposto diferido<br>Alíquota ad rem do ICMS estabelecida na legislação para o produto.~~ |

> **Revogado/Descontinuado:** as linhas 212.15 / N41a (qBCMonoDif) e 212.16 / N42 (adRemICMSDif) estão riscadas no original (ver item 2.6.2).
