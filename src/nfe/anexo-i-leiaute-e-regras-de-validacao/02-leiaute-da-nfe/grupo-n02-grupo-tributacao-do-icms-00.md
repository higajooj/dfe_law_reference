# Grupo N02. Grupo Tributação do ICMS= 00

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **165** | **ICMS00 (N02)** | **CG** | **N01** |  | **1-1** |  | **Grupo Tributação do ICMS= 00<br>Tributada integralmente** |
| 166 | orig (N11) | E | N02 | N | 1-1 | 1 | Origem da mercadoria<br>0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8; 1 - Estrangeira - Importação direta, exceto a indicada no código 6; 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7; 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%; 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes; 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%; 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural; 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural. 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; <!-- p.26 --> |
| 167 | CST (N12) | E | N02 | N | 1-1 | 2 | Tributação do ICMS = 00<br>00=Tributada integralmente. |
| 168 | modBC (N13) | E | N02 | N | 1-1 | 1 | Modalidade de determinação da BC do ICMS<br>0=Margem Valor Agregado (%); 1=Pauta (Valor);2=Preço Tabelado Máx. (valor); 3=Valor da operação. |
| 169 | vBC (N15) | E | N02 | N | 1-1 | 13v2 | Valor da BC do ICMS |
| 170 | pICMS (N16) | E | N02 | N | 1-1 | 3v2-4 | Alíquota do imposto<br>Alíquota do ICMS sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP |
| 171 | vICMS (N17) | E | N02 | N | 1-1 | 13v2 | Valor do ICMS |
| **171.01** | **-x- (N17.1)** | **G** | **N02** |  | **0-1** |  | **Sequência XML<br>(Criada na NT2016.002)** |
| 171.02 | pFCP (N17b) | E | N17.1 | N | 1-1 | 3v2-4 | Percentual do ICMS relativo ao Fundo de Combate à Pobreza (FCP)<br>Percentual relativo ao Fundo de Combate à Pobreza (FCP). |
| 171.03 | vFCP (N17c) | E | N17.1 | N | 1-1 | 13v2 | Valor do Fundo de Combate à Pobreza (FCP)<br>Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). |
