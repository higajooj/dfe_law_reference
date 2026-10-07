<!-- p.9 -->
# 3.3. Grupo N10a. Grupo de Partilha do ICMS

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **N10a** | **ICMSPart** | **CG** | **N01** | | **1-1** | | **Grupo de Partilha do ICMS entre a UF de origem e UF de destino ou a UF definida na legislação.**<br>**Operação interestadual para consumidor final com partilha do ICMS devido na operação entre a UF de origem e a do destinatário, ou a UF definida na legislação. (Ex. UF da concessionária de entrega do veículo) (v2.0)** |

<!-- p.10 -->

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| N11 | orig | E | N10a | N | 1-1 | 1 | Origem da mercadoria<br>0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| N12 | CST | E | N10a | N | 1-1 | 2 | Tributação do ICMS<br>10=Tributada e com cobrança do ICMS por substituição tributária;<br>20=Com redução de base de cálculo<br>90=Outros. |
| N13 | modBC | E | N10a | N | 1-1 | 1 | Modalidade de determinação da BC do ICMS<br>0=Margem Valor Agregado (%)<br>1=Pauta (Valor)<br>2=Preço Tabelado Máx. (valor)<br>3=Valor da operação. |
| N15 | vBC | E | N10a | N | 1-1 | 13v2 | (v2.0) |
| N14 | pRedBC | E | N10a | N | 0-1 | 3v2-4 | (v2.0) |
| N16 | pICMS | E | N10a | N | 1-1 | 3v2-4 | (v2.0) |
| N17 | vICMS | E | N10a | N | 1-1 | 13v2 | Valor do ICMS |
| N18 | modBCST | E | N10a | N | 1-1 | 1 | Modalidade de determinação da BC do ICMS ST<br>0=Preço tabelado ou máximo sugerido<br>1=Lista Negativa (valor)<br>2=Lista Positiva (valor)<br>3=Lista Neutra (valor)<br>4=Margem Valor Agregado (%)<br>5=Pauta (valor) |
| N19 | pMVAST | E | N10a | N | 0-1 | 3v2-4 | (v2.0) |
| N20 | pRedBCST | E | N10a | N | 0-1 | 3v2-4 | (v2.0) |
| N21 | vBCST | E | N10a | N | 1-1 | 13v2 | (v2.0) |
| N22 | pICMSST | E | N10a | N | 1-1 | 3v2-4 | (v2.0) |
| N23 | vICMSST | E | N10a | N | 1-1 | 13v2 | Valor do ICMS ST(v2.0) |
| **N23.1** | **-x-** | **G** | **N10a** | | **0-1** | | **Sequência XML**<br>**Grupo opcional.** |
| N23a | vBCFCPST | E | N23.1 | N | 1-1 | 13v2 | Valor da Base de Cálculo do FCP ST<br>Informar o valor da Base de Cálculo do FCP retido por Substituição Tributária |
| N23b | pFCPST | E | N23.1 | N | 1-1 | 3v2-4 | Percentual do FCP ST<br>Percentual relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| N23d | vFCPST | E | N23.1 | N | 1-1 | 13v2 | Valor do FCP ST<br>Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| N25 | pBCOp | E | N10a | N | 1-1 | 3v2-4 | Percentual da BC operação própria<br>Percentual para determinação do valor da Base de Cálculo da operação própria. (v2.0) |
| N24 | UFST | E | N10a | C | 1-1 | 2 | UF para qual é devido o ICMS ST<br>Sigla da UF para qual é devido o ICMS ST da operação.<br>Informar "EX" para Exterior. (v2.0) |
| **N27.1** | **-x-** | **G** | **N10a** | | **0-1** | | **Sequência XML**<br>**Grupo opcional.** |
| N28a | vICMSDeson | E | N27.1 | N | 1-1 | 13v2 | Valor do ICMS desonerado<br>Informar apenas nos motivos de desoneração documentados abaixo. |
| N28 | motDesICMS | E | N27.1 | N | 1-1 | 2 | Motivo da desoneração do ICMS<br>Campo será preenchido quando o campo anterior estiver preenchido. Informar o motivo da desoneração:<br>9=Outros;<br>10=Deficiente Condutor (Convênio ICMS 38/12)<br>11=Deficiente Não Condutor (Convênio ICMS 38/12) |
| N28b | indDeduzDeson | E | N27.1 | N | 0-1 | 1 | Indica se o valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd).<br>O campo só pode ser preenchido com:<br>0=Valor do ICMS desonerado (vICMSDeson) não deduz do valor do item (vProd) / total da NF-e.<br>1=Valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd) / total da NF-e. |
