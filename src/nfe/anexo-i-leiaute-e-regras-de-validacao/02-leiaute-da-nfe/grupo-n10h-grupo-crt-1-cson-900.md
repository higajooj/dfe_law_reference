# Grupo N10h. Grupo CRT=1 (CSON 900)

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **245.52** | **ICMSSN900 (N10h)** | **CG** | **N01** |  | **1-1** |  | **Grupo CRT=1 – Simples Nacional e CSOSN=900<br>Tributação ICMS pelo Simples Nacional, CSOSN=900 (v2.0)** |
| 245.53 | orig (N11) | E | N10h | N | 1-1 | 1 | Origem da mercadoria<br>0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8; 1 - Estrangeira - Importação direta, exceto a indicada no código 6; 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7; 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%; 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes; 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%; 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural; 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural. 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; <!-- p.48 --> |
| 245.54 | CSOSN (N12a) | E | N10h | N | 1-1 | 3 | Código de Situação da Operação – SIMPLES NACIONAL<br>900=Outros (v2.0) |
| **245.55** | **-x- (N12.1)** | **G** | **N10h** |  | **0-1** |  | **Sequência XML<br>Grupo opcional.** |
| 245.55 | modBC (N13) | E | N12.1 | N | 1-1 | 1 | Modalidade de determinação da BC do ICMS<br>0=Margem Valor Agregado (%); 1=Pauta (Valor);2=Preço Tabelado Máx. (valor); 3=Valor da operação. |
| 245.56 | vBC (N15) | E | N12.1 | N | 1-1 | 13v2 | Valor da BC do ICMS<br>(v2.0) |
| 245.57 | pRedBC (N14) | E | N12.1 | N | 0-1 | 3v2-4 | Percentual da Redução de BC<br>(v2.0) |
| 245.58 | pICMS (N16) | E | N12.1 | N | 1-1 | 3v2-4 | Alíquota do imposto<br>(v2.0) |
| 245.59 | vICMS (N17) | E | N12.1 | N | 1-1 | 13v2 | Valor do ICMS<br>(v2.0) |
| **245.59.0** | **-x- (N17.1)** | **G** | **N10h** |  | **0-1** |  | **Sequência XML<br>Grupo opcional.** |
| 245.60 | modBCST (N18) | E | N17.1 | N | 1-1 | 1 | Modalidade de determinação da BC do ICMS ST<br>0=Preço tabelado ou máximo sugerido 1=Lista Negativa (valor) 2=Lista Positiva (valor) 3=Lista Neutra (valor) 4=Margem Valor Agregado (%) 5=Pauta (valor) |
| 245.61 | pMVAST (N19) | E | N17.1 | N | 0-1 | 3v2-4 | Percentual da margem de valor Adicionado do ICMS ST<br>(v2.0) |
| 245.62 | pRedBCST (N20) | E | N17.1 | N | 0-1 | 3v2-4 | Percentual da Redução de BC do ICMS ST<br>(v2.0) |
| 245.63 | vBCST (N21) | E | N17.1 | N | 1-1 | 13v2 | Valor da BC do ICMS ST<br>(v2.0) |
| 245.64 | pICMSST (N22) | E | N17.1 | N | 1-1 | 3v2-4 | Alíquota do imposto do ICMS ST<br>Alíquota do ICMS ST sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP |
| 245.65 | vICMSST (N23) | E | N17.1 | N | 1-1 | 13v2 | Valor do ICMS ST<br>Valor do ICMS ST retido(v2.0) |
| **245.65.0** | **-x- (N23.1)** | **G** | **N10h** |  | **0-1** |  | **Sequência XML<br>Grupo opcional. (Incluído na NT2016.002)** |
| 245.65w | vBCFCPST (N23a) | E | N23.1 | N | 1-1 | 13v2 | Valor da Base de Cálculo do FCP retido por Substituição Tributária<br>Informar o valor da Base de Cálculo do FCP retido por Substituição Tributária |
| 245.65X | pFCPST (N23b) | E | N23.1 | N | 1-1 | 3v2-4 | Percentual do FCP retido por Substituição Tributária<br>Percentual relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| 245.65Y | vFCPST (N23d) | E | N23.1 N | N | 1-1 | 13v2 | Valor do FCP retido por Substituição Tributária<br>Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. <!-- p.49 --> |
| **245.52** | **-x- (N27.1)** | **G** | **N10h** |  | **0-1** |  | **Sequência XML<br>Grupo opcional.** |
| 245.52.0 | pCredSN (N29) | E | N27.1 | N | 1-1 | 3v2-4 | Alíquota aplicável de cálculo do crédito (Simples Nacional).<br>(v2.0) |
| 245.53 | vCredICMSSN (N30) | E | N27.1 | N | 1-1 | 3v2-4 | Valor crédito do ICMS que pode ser aproveitado nos termos do art. 23 da LC 123/2006 (Simples Nacional)<br>(v2.0) |
