# Grupo N03. Grupo Tributação do ICMS= 10

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **172** | **ICMS10 (N03)** | **CG** | **N01** |  | **1-1** |  | **Grupo Tributação do ICMS = 10<br>Tributada e com cobrança do ICMS por substituição tributária** |
| 173 | orig (N11) | E | N03 | N | 1-1 | 1 | Origem da mercadoria<br>0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8; 1 - Estrangeira - Importação direta, exceto a indicada no código 6; 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7; 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%; 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes; 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%; 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural; 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural. 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; <!-- p.27 --> |
| 174 | CST (N12) | E | N03 | N | 1-1 | 2 | Tributação do ICMS = 10<br>10=Tributada e com cobrança do ICMS por substituição tributária |
| 175 | modBC (N13) | E | N03 | N | 1-1 | 1 | Modalidade de determinação da BC do ICMS<br>0=Margem Valor Agregado (%); 1=Pauta (Valor); 2=Preço Tabelado Máx. (valor); 3=Valor da operação. |
| 176 | vBC (N15) | E | N03 | N | 1-1 | 13v2 | Valor da BC do ICMS |
| 177 | pICMS (N16) | E | N03 | N | 1-1 | 3v2-4 | Alíquota do imposto<br>Alíquota do ICMS sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP. |
| 178 | vICMS (N17) | E | N03 | N | 1-1 | 13v2 | Valor do ICMS |
| **178.01** | **-x- (N17.0)** | **G** | **N03** |  | **0-1** |  | **Sequência XML** |
| 178.02 | vBCFCP (N17.a) | E | N17.0 | N | 1-1 | 13v2 | Valor da Base de Cálculo do FCP<br>Informar o valor da Base de Cálculo do FCP |
| 178.03 | pFCP (N17.b) | E | N17.0 | N | 1-1 | 3v2-4 | Percentual do Fundo de Combate à Pobreza (FCP)<br>Percentual relativo ao Fundo de Combate à Pobreza (FCP). |
| 178.04 | vFCP (N17.c) | E | N17.0 | N | 1-1 | 13v2 | Valor do Fundo de Combate à Pobreza (FCP)<br>Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). |
| 179 | modBCST (N18) | E | N03 | N | 1-1 | 1 | Modalidade de determinação da BC do ICMS ST<br>0=Preço tabelado ou máximo sugerido 1=Lista Negativa (valor) 2=Lista Positiva (valor); 3=Lista Neutra (valor) 4=Margem Valor Agregado (%) 5=Pauta (valor) 6 = Valor da Operação (NT 2019.001) |
| 180 | pMVAST (N19) | E | N03 | N | 0-1 | 3v2-4 | Percentual da margem de valor Adicionado do ICMS ST |
| 181 | pRedBCST (N20) | E | N03 | N | 0-1 | 3v2-4 | Percentual da Redução de BC do ICMS ST |
| 182 | vBCST (N21) | E | N03 | N | 1-1 | 13v2 | Valor da BC do ICMS ST |
| 183 | pICMSST (N22) | E | N03 | N | 1-1 | 3v2-4 | Alíquota do imposto do ICMS ST<br>Alíquota do ICMS ST sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP <!-- p.28 --> |
| 184 | vICMSST (N23) | E | N03 | N | 1-1 | 13v2 | Valor do ICMS ST<br>Valor do ICMS ST retido |
| **184.0** | **-x- (N23.1)** | **G** | **N03** |  | **0-1** |  | **Sequência XML<br>Grupo opcional. (Incluído na NT2016.002)** |
| 184.1 | vBCFCPST (N23a) | E | N23.1 | N | 1-1 | 13v2 | Valor da Base de Cálculo do FCP retido por Substituição Tributária<br>Informar o valor da Base de Cálculo do FCP retido por Substituição Tributária |
| 184.2 | pFCPST (N23b) | E | N23.1 | N | 1-1 | 3v2-4 | Percentual do FCP retido por Substituição Tributária<br>Percentual relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| 184.4 | vFCPST (N23d) | E | N23.1 | N | 1-1 | 13v2 | Valor do FCP retido por Substituição Tributária<br>Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
