# Grupo N07. Grupo Tributação do ICMS= 51

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **205** | **ICMS51 (N07)** | **CG** | **N01** |  | **1-1** |  | **Grupo Tributação do ICMS = 51<br>Tributação com Diferimento (a exigência do preenchimento das informações do ICMS diferido fica a critério de cada UF).** |
| 206 | orig (N11) | E | N07 | N | 1-1 | 1 | Origem da mercadoria<br>0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8; 1 - Estrangeira - Importação direta, exceto a indicada no código 6; 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7; 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%; 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes; 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%; 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural; 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural. 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| 207 | CST (N12) | E | N07 | N | 1-1 | 2 | Tributação do ICMS = 51<br>51=Diferimento <!-- p.33 --> |
| 208 | modBC (N13) | E | N07 | N | 0-1 | 1 | Modalidade de determinação da BC do ICMS<br>0=Margem Valor Agregado (%); 1=Pauta (Valor); 2=Preço Tabelado Máx. (valor); 3=Valor da operação. |
| 209 | pRedBC (N14) | E | N07 | N | 0-1 | 3v2-4 | Percentual da Redução de BC |
| 210 | vBC (N15) | E | N07 | N | 0-1 | 13v2 | Valor da BC do ICMS |
| 211 | pICMS (N16) | E | N07 | N | 0-1 | 3v2-4 | Alíquota do imposto<br>Alíquota do ICMS sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP (Atualizado NT2016.002) |
| 211.01 | vICMSOp (N16a) | E | N07 | N | 0-1 | 13v2 | Valor do ICMS da Operação<br>Valor como se não tivesse o diferimento |
| 211.02 | pDif (N16b) | E | N07 | N | 0-1 | 3v2-4 | Percentual do diferimento<br>No caso de diferimento total, informar o percentual de diferimento "100". |
| 211.03 | vICMSDif (N16c) | E | N07 | N | 0-1 | 13v2 | Valor do ICMS diferido |
| 212 | vICMS (N17) | E | N07 | N | 0-1 | 13v2 | Valor do ICMS<br>Informar o valor realmente devido. |
| **212.0** | **-x- (N17.1)** | **G** | **N07** |  | **0-1** |  | **Sequência XML<br>Grupo opcional. (Incluído na NT2016.002)** |
| 212.w | vBCFCP (N17a) | E | N17.1 | N | 1-1 | 13v2 | Valor da Base de Cálculo do FCP<br>Informar o valor da Base de Cálculo do FCP |
| 212.x | pFCP (N17b) | E | N17.1 | N | 1-1 | 3v2-4 | Percentual do ICMS relativo ao Fundo de Combate à Pobreza (FCP)<br>Percentual relativo ao Fundo de Combate à Pobreza (FCP). |
| 212.y | vFCP (N17c) | E | N17.1 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP)<br>Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). |
