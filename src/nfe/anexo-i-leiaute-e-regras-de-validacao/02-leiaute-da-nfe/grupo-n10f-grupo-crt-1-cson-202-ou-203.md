<!-- p.45 -->

# Grupo N10f. Grupo CRT=1 (CSON 202 ou 203)

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **245.38** | **ICMSSN202 (N10f)** | **CG** | **N01** |  | **1-1** |  | **Grupo CRT=1 – Simples Nacional e CSOSN=202 ou 203<br>Tributação ICMS pelo Simples Nacional, CSOSN=202 ou 203 (v2.0)** |
| 245.39 | orig (N11) | E | N10f | N | 1-1 | 1 | Origem da mercadoria<br>0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8; 1 - Estrangeira - Importação direta, exceto a indicada no código 6; 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7; 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%; 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes; 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%; 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural; 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural. 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| 245.40 | CSOSN (N12a) | E | N10f | N | 1-1 | 3 | Código de Situação da Operação – Simples Nacional<br>202=Tributada pelo Simples Nacional sem permissão de crédito e com cobrança do ICMS por Substituição Tributária; 203- Isenção do ICMS nos Simples Nacional para faixa de receita bruta e com cobrança do ICMS por Substituição Tributária (v2.0) |
| 245.41 | modBCST (N18) | E | N10f | N | 1-1 | 1 | Modalidade de determinação da BC do ICMS ST<br>0=Preço tabelado ou máximo sugerido 1=Lista Negativa (valor) 2=Lista Positiva (valor) 3=Lista Neutra (valor) 4=Margem Valor Agregado (%) 5=Pauta (valor) |
| 245.42 | pMVAST (N19) | E | N10f | N | 0-1 | 3v2-4 | Percentual da margem de valor Adicionado do ICMS ST<br>(v2.0) |
| 224.43 | pRedBCST (N20) | E | N10f | N | 0-1 | 3v2-4 | Percentual da Redução de BC do ICMS ST<br>(v2.0) |
| 245.44 | vBCST (N21) | E | N10f | N | 1-1 | 13v2 | Valor da BC do ICMS ST<br>(v2.0) |
| 245.45 | pICMSST (N22) | E | N10f | N | 1-1 | 3v2-4 | Alíquota do imposto do ICMS ST<br>Alíquota do ICMS ST sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP (Atualizado NT2016.002) |
| 245.46 | vICMSST (N23) | E | N10f | N | 1-1 | 13v2 | Valor do ICMS ST<br>Valor do ICMS ST retido (v2.0) |
| **245.46.0** | **-x- (N23.1)** | **G** | **N10.f** |  | **0-1** |  | **Sequência xml<br>Grupo opcional. (Incluído na NT2016.002)** |
| 245.46w | vBCFCPST (N23a) | E | N23.1 | N | 1-1 | 13v2 | Valor da Base de Cálculo do FCP<br>Informar o valor da Base de Cálculo do FCP retido por Substituição Tributária |
| 245.46x | pFCPST (N23b) | E | N23.1 | N | 1-1 | 3v2-4 | Percentual do FCP retido por Substituição Tributária<br>Percentual relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. Nota: Percentual máximo de 2%, conforme a legislação. <!-- p.46 --> |
| 245.46y | vFCPST (N23d) | E | N23.1 | N | 1-1 | 13v2 | Valor do FCP retido por Substituição Tributária<br>Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
