<!-- p.6 -->
# 3.1. Grupo N04. Grupo de Tributação do ICMS=20

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **N04** | **ICMS20** | **CG** | **N01** | | **1-1** | | **Grupo Tributação do ICMS = 20**<br>**Tributação com redução de base de cálculo** |
| N11 | orig | E | N04 | N | 1-1 | 1 | Origem da mercadoria<br>0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| N12 | CST | E | N04 | N | 1-1 | 2 | Tributação do ICMS = 20<br>20=Com redução de base de cálculo |
| N13 | modBC | E | N04 | N | 1-1 | 1 | Modalidade de determinação da BC do ICMS<br>0=Margem Valor Agregado (%)<br>1=Pauta (Valor)<br>2=Preço Tabelado Máx. (valor)<br>3=Valor da operação. |
| N14 | pRedBC | E | N04 | N | 1-1 | 3v2-4 | Percentual da Redução de BC<br>Alíquota *ad rem* do ICMS, estabelecida na legislação para o produto. |
| N15 | vBC | E | N04 | N | 1-1 | 13v2 | Valor da BC do ICMS<br>O valor do ICMS é obtido pela multiplicação da alíquota *ad rem* pela quantidade do produto conforme unidade de medida estabelecida na legislação. |
| N16 | pICMS | E | N04 | N | 1-1 | 3v2-4 | Alíquota do imposto<br>Alíquota do ICMS sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP |
| N17 | vICMS | E | N04 | N | 1-1 | 13v2 | Valor do ICMS |
| **N17.1** | **-x-** | **G** | **N04** | | **0-1** | | **Sequência XML**<br>**Grupo opcional. (Incluído na NT 2016/002)** |
| N17a | vBCFCP | E | N17.1 | N | 1-1 | 13v2 | Valor da Base de Cálculo do FCP<br>Informar o valor da Base de Cálculo do FCP |
| N17b | pFCP | E | N17.1 | N | 1-1 | 3v2-4 | Percentual do ICMS relativo ao Fundo de Combate à Pobreza (FCP)<br>Percentual relativo ao Fundo de Combate à Pobreza (FCP). |
| N17c | vFCP | E | N17.1 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP)<br>Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). |
| **N27.1** | **-x-** | **G** | **N04** | | **0-1** | | **Sequência XML**<br>**Grupo opcional.** |
| N28a | vICMSDeson | E | N27.1 | N | 1-1 | 13v2 | Valor do ICMS desonerado<br>Informar apenas nos motivos de desoneração documentados abaixo. |
| N28 | motDesICMS | E | N27.1 | N | 1-1 | 2 | Motivo da desoneração do ICMS<br>Campo será preenchido quando o campo anterior estiver preenchido. Informar o motivo da desoneração:<br>3=Uso na agropecuária;<br>9=Outros;<br>10=Deficiente Condutor (Convênio ICMS 38/12)<br>11=Deficiente Não Condutor (Convênio ICMS 38/12)<br>12=Órgão de fomento e desenvolvimento agropecuário. |
| N28b | indDeduzDeson | E | N27.1 | N | 0-1 | 1 | Indica se o valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd).<br>O campo só pode ser preenchido com:<br>0=Valor do ICMS desonerado (vICMSDeson) não deduz do valor do item (vProd) / total da NF-e.<br>1=Valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd) / total da NF-e. |
