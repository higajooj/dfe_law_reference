<!-- p.22 -->
# 3.3. Grupo N03a- Grupo Tributação do ICMS = 15

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **184.13 / N03a** | **ICMS15** | **CG** | **N01** | **-** | **1-1** | **-** | **Grupo Tributação do ICMS monofásico**<br>Tributação monofásica própria e com responsabilidade pela retenção sobre combustíveis; |
| 184.14 / N11 | orig | E | N03a | N | 1-1 | 1 | Origem da mercadoria<br>0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| 184.15 / N12 | CST | E | N03a | N | 1-1 | 2 | Tributação do ICMS<br>15= Tributação monofásica própria e com responsabilidade pela retenção sobre combustíveis; |
| 184.16 / N37a | qBCMono | E | N03a | N | 0-1 | 11v0-4 | Quantidade tributada<br>Informar a BC do ICMS próprio em quantidade conforme unidade de medida estabelecida na legislação para o produto. |
| 184.17 / N38 | adRemICMS | E | N03a | N | 1-1 | 3v2-4 | Alíquota *ad rem* do imposto<br>Alíquota *ad rem* do ICMS estabelecida na legislação para o produto. |
| 184.18 / N39 | vICMSMono | E | N03a | N | 1-1 | 13v2 | Valor do ICMS próprio<br>O valor do ICMS é obtido pela multiplicação da alíquota *ad rem* pela quantidade do produto conforme unidade de medida estabelecida em legislação. |

<!-- p.23 -->
| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| 184.19 / N39a | qBCMonoReten | E | N03a | N | 0-1 | 11v0-4 | Quantidade tributada sujeita a retenção<br>Informar a BC do ICMS sujeito a retenção em quantidade conforme unidade de medida estabelecida na legislação para o produto. |
| 184.20 / N40 | adRemICMSReten | E | N03a | N | 1-1 | 3v2-4 | Alíquota *ad rem* do imposto com retenção<br>Alíquota *ad rem* do ICMS sobre o biocombustível a ser adicionado para a composição da mistura vendida a consumidor final estabelecida na legislação para o produto. |
| 184.21 / N41 | vICMSMonoReten | E | N03a | N | 1-1 | 13v2 | Valor do ICMS com retenção<br>O valor do ICMS é obtido pela multiplicação da alíquota *ad rem* pela quantidade do produto conforme unidade de medida estabelecida em legislação. |
| **184.22 / N46** | **-x-** | **G** | **N03a** | **-** | **0-1** | **-** | **Sequência XML**<br>Grupo Opcional |
| 184.23 / N47 | pRedAdRem | E | N46 | N | 1-1 | 3v2 | Percentual de redução do valor da alíquota *ad rem* do ICMS<br>Informar o percentual de redução do valor da alíquota *ad rem* do ICMS |
| 184.24 / N48 | motRedAdRem | E | N46 | N | 1-1 | 1 | Motivo da redução do adrem<br>Campo será preenchido quando o campo anterior estiver preenchido. Informar o motivo da redução:<br>1= Transporte coletivo de passageiros;<br>9=Outros; |
