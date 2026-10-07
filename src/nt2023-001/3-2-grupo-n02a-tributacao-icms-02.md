<!-- p.21 -->
# 3.2. Grupo N02a- Grupo Tributação do ICMS = 02

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **171.04 / N02a** | **ICMS02** | **CG** | **N01** | **-** | **1-1** | **-** | **Grupo Tributação do ICMS monofásico**<br>Tributação monofásica própria sobre combustíveis |
| 171.05 / N11 | orig | E | N02a | N | 1-1 | 1 | Origem da mercadoria<br>0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| 171.06 / N12 | CST | E | N02a | N | 1-1 | 2 | Tributação do ICMS<br>02= Tributação monofásica própria sobre combustíveis; |
| 171.07 / N37a | qBCMono | E | N02a | N | 0-1 | 11v0-4 | Quantidade tributada<br>Informar a BC do ICMS próprio em quantidade conforme unidade de medida estabelecida na legislação para o produto. |
| 171.08 / N38 | adRemICMS | E | N02a | N | 1-1 | 3v2-4 | Alíquota *ad rem* do imposto<br>Alíquota *ad rem* do ICMS, estabelecida na legislação para o produto. |
| 171.09 / N39 | vICMSMono | E | N02a | N | 1-1 | 13v2 | Valor do ICMS próprio<br>O valor do ICMS é obtido pela multiplicação da alíquota *ad rem* pela quantidade do produto conforme unidade de medida estabelecida na legislação. |
