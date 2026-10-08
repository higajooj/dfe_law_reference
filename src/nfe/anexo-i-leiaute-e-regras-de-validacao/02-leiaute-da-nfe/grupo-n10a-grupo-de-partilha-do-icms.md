# Grupo N10a. Grupo de Partilha do ICMS

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **245.01** | **ICMSPart (N10a)** | **CG** | **N01** |  | **1-1** |  | **Grupo de Partilha do ICMS entre a UF de origem e UF de destino ou a UF definida na legislação.<br>Operação interestadual para consumidor final com partilha do ICMS devido na operação entre a UF de origem e a do destinatário, ou a UF definida na legislação. (Ex. UF da concessionária de entrega do veículo) (v2.0)** |
| 245.02 | orig (N11) | E | N10a | N | 1-1 | 1 | Origem da mercadoria<br>0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8; 1 - Estrangeira - Importação direta, exceto a indicada no código 6; 2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7; 3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%; 4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes; 5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%; 6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural; 7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural. 8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; <!-- p.39 --> |
| 245.03 | CST (N12) | E | N10a | N | 1-1 | 2 | Tributação do ICMS<br>10=Tributada e com cobrança do ICMS por substituição tributária; 90=Outros. |
| 245.04 | modBC (N13) | E | N10a | N | 1-1 | 1 | Modalidade de determinação da BC do ICMS<br>0=Margem Valor Agregado (%) 1=Pauta (Valor) 2=Preço Tabelado Máx. (valor) 3=Valor da operação |
| 245.05 | vBC (N15) | E | N10a | N | 1-1 | 13v2 | Valor da BC do ICMS<br>(v2.0) |
| 245.06 | pRedBC (N14) | E | N10a | N | 0-1 | 3v2-4 | Percentual da Redução de BC<br>(v2.0) |
| 245.07 | pICMS (N16) | E | N10a | N | 1-1 | 3v2-4 | Alíquota do imposto<br>(v2.0) |
| 245.08 | vICMS (N17) | E | N10a | N | 1-1 | 13v2 | Valor do ICMS |
| 245.09 | modBCST (N18) | E | N10a | N | 1-1 | 1 | Modalidade de determinação da BC do ICMS ST<br>0=Preço tabelado ou máximo sugerido 1=Lista Negativa (valor) 2=Lista Positiva (valor); 3=Lista Neutra (valor) 4=Margem Valor Agregado (%); 5=Pauta (valor) |
| 245.10 | pMVAST (N19) | E | N10a | N | 0-1 | 3v2-4 | Percentual da margem de valor Adicionado do ICMS ST<br>(v2.0) |
| 245.11 | pRedBCST (N20) | E | N10a | N | 0-1 | 3v2-4 | Percentual da Redução de BC do ICMS ST<br>(v2.0) |
| 245.12 | vBCST (N21) | E | N10a | N | 1-1 | 13v2 | Valor da BC do ICMS ST<br>(v2.0) |
| 245.13 | pICMSST (N22) | E | N10a | N | 1-1 | 3v2-4 | Alíquota do imposto do ICMS ST<br>(v2.0) |
| 245.14 | vICMSST (N23) | E | N10a | N | 1-1 | 13v2 | Valor do ICMS ST<br>Valor do ICMS ST(v2.0) |
| 245.15 | pBCOp (N25) | E | N10a | N | 1-1 | 3v2-4 | Percentual da BC operação própria<br>Percentual para determinação do valor da Base de Cálculo da operação própria. (v2.0) |
| 245.16 | UFST (N24) | E | N10a | C | 1-1 | 2 | UF para qual é devido o ICMS ST<br>Sigla da UF para qual é devido o ICMS ST da operação. Informar "EX" para Exterior. (v2.0) |
