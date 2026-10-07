<!-- p.11 -->
# 3.2. Grupo N10a. Grupo de Partilha do ICMS

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **245.01** | **N10a** | **ICMSPart** | **Grupo de Partilha do ICMS entre a UF de origem e UF de destino ou a UF definida na legislação.** | **CG** | **N01** |  | **1-1** |  | **Operação interestadual para consumidor final com partilha do ICMS devido na operação entre a UF de origem e a do destinatário, ou a UF definida na legislação. (Ex. UF da concessionária de entrega do veículo) (v2.0)** |
| 245.02 | N11 | orig | Origem da mercadoria | E | N10a | N | 1-1 | 1 | 0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| 245.03 | N12 | CST | Tributação do ICMS | E | N10a | N | 1-1 | 2 | 10=Tributada e com cobrança do ICMS por substituição tributária;<br>90=Outros. |
| <!-- p.12 -->245.04 | N13 | modBC | Modalidade de determinação da BC do ICMS | E | N10a | N | 1-1 | 1 | 0=Margem Valor Agregado (%)<br>1=Pauta (Valor)<br>2=Preço Tabelado Máx. (valor)<br>3=Valor da operação |
| 245.05 | N15 | vBC | Valor da BC do ICMS | E | N10a | N | 1-1 | 13v2 | (v2.0) |
| 245.06 | N14 | pRedBC | Percentual da Redução de BC | E | N10a | N | 0-1 | 3v2-4 | (v2.0) |
| 245.07 | N16 | pICMS | Alíquota do imposto | E | N10a | N | 1-1 | 3v2-4 | (v2.0) |
| 245.08 | N17 | vICMS | Valor do ICMS | E | N10a | N | 1-1 | 13v2 |  |
| 245.09 | N18 | modBCST | Modalidade de determinação da BC do ICMS ST | E | N10a | N | 1-1 | 1 | 0=Preço tabelado ou máximo sugerido<br>1=Lista Negativa (valor)<br>2=Lista Positiva (valor);<br>3=Lista Neutra (valor)<br>4=Margem Valor Agregado (%);<br>5=Pauta (valor) |
| 245.10 | N19 | pMVAST | Percentual da margem de valor Adicionado do ICMS ST | E | N10a | N | 0-1 | 3v2-4 | (v2.0) |
| 245.11 | N20 | pRedBCST | Percentual da Redução de BC do ICMS ST | E | N10a | N | 0-1 | 3v2-4 | (v2.0) |
| 245.12 | N21 | vBCST | Valor da BC do ICMS ST | E | N10a | N | 1-1 | 13v2 | (v2.0) |
| 245.13 | N22 | pICMSST | Alíquota do imposto do ICMS ST | E | N10a | N | 1-1 | 3v2-4 | (v2.0) |
| 245.14 | N23 | vICMSST | Valor do ICMS ST | E | N10a | N | 1-1 | 13v2 | Valor do ICMS ST(v2.0) |
| **245.14a** | **N23.1** | **-x-** | **Sequência XML** | **G** | **N10a** |  | **0-1** |  | **Grupo opcional para informações do FCP retido por ST** |
| 245.14b | N23a | vBCFCPST | Valor da Base de Cálculo do FCP ST | E | N23.1 | N | 1-1 | 13v2 | Informar o valor da Base de Cálculo do FCP retido por Substituição Tributária |
| 245.14c | N23b | pFCPST | Percentual do FCP ST | E | N23.1 | N | 1-1 | 3v2-4 | Percentual relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| 245.14d | N23d | vFCPST | Valor do FCP ST | E | N23.1 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| 245.15 | N25 | pBCOp | Percentual da BC operação própria | E | N10a | N | 1-1 | 3v2-4 | Percentual para determinação do valor da Base de Cálculo da operação própria. (v2.0) |
| 245.16 | N24 | UFST | UF para qual é devido o ICMS ST | E | N10a | C | 1-1 | 2 | Sigla da UF para qual é devido o ICMS ST da operação. Informar "EX" para Exterior. (v2.0) |
