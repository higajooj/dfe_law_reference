# Grupo N10e. Grupo CRT=1 (CSON 201)

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **245.27** | **ICMSSN201 (N10e)** | **CG** | **N01** |  | **1-1** |  | **Grupo CRT=1 – Simples Nacional e CSOSN=201<br>Tributação ICMS pelo Simples Nacional, CSOSN=201 (v2.0)** |
| 245.28 | orig (N11) | E | N10e | N | 1-1 | 1 | Origem da mercadoria<br>0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8; 1 - Estrangeira - Importação direta, exceto a indicada no código 6; 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7; 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%; 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes; 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%; 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural; 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural. 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; <!-- p.44 --> |
| 245.29 | CSOSN (N12a) | E | N10e | N | 1-1 | 3 | Código de Situação da Operação – Simples Nacional<br>201=Tributada pelo Simples Nacional com permissão de crédito e com cobrança do ICMS por Substituição Tributária (v2.0) |
| 245.30 | modBCST (N18) | E | N10e | N | 1-1 | 1 | Modalidade de determinação da BC do ICMS ST<br>0=Preço tabelado ou máximo sugerido 1=Lista Negativa (valor) 2=Lista Positiva (valor); 3=Lista Neutra (valor) 4=Margem Valor Agregado (%) 5=Pauta (valor) |
| 245.31 | pMVAST (N19) | E | N10e | N | 0-1 | 3v2-4 | Percentual da margem de valor Adicionado do ICMS ST<br>(v2.0) |
| 245.32 | pRedBCST (N20) | E | N10e | N | 0-1 | 3v2-4 | Percentual da Redução de BC do ICMS ST<br>(v2.0) |
| 245.33 | vBCST (N21) | E | N10e | N | 1-1 | 13v2 | Valor da BC do ICMS ST<br>(v2.0) |
| 245.34 | pICMSST (N22) | E | N10e | N | 1-1 | 3v2-4 | Alíquota do imposto do ICMS ST<br>Alíquota do ICMS ST sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP (Atualizado NT2016.002) |
| 245.35 | vICMSST (N23) | E | N10e | N | 1-1 | 13v2 | Valor do ICMS ST<br>Valor do ICMS ST retido (v2.0) |
| **245.35.0** | **-x- (N23.1)** | **G** | **N10e** |  | **0-1** |  | **Sequência xml<br>Grupo opcional. (Incluído na NT2016.002)** |
| 245.35w | vBCFCPST (N23a) | E | N23.1 | N | 1-1 | 13v2 | Valor da Base de Cálculo do FCP<br>Informar o valor da Base de Cálculo do FCP |
| 245.35x | pFCPST (N23b) | E | N23.1 | N | 1-1 | 3v2-4 | Percentual do FCP retido por Substituição Tributária<br>Percentual relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| 245.35y | vFCPST (N23d) | E | N23.1 | N | 1-1 | 13v2 | Valor do FCP retido por Substituição Tributária<br>Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| 245.36 | pCredSN (N29) | E | N10e | N | 1-1 | 3v2-4 | Alíquota aplicável de cálculo do crédito (SIMPLES NACIONAL).<br>(v2.0) (Atualizado NT2016.002) |
| 245.37 | vCredICMSSN (N30) | E | N10e | N | 1-1 | 13v2 | Valor crédito do ICMS que pode ser aproveitado nos termos do art. 23 da LC 123 (SIMPLES NACIONAL)<br>(v2.0) (Atualizado NT2016.002) |
