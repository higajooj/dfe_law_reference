<!-- p.7 -->
# 3.2. Grupo N10. Grupo Tributação do ICMS= 90

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **N10** | **ICMS90** | **CG** | **N01** | | **1-1** | | **Grupo Tributação do ICMS = 90**<br>**Tributação ICMS: Outros** |
| N11 | orig | E | N10 | N | 1-1 | 1 | Origem da mercadoria<br>0 - Nacional, exceto as indicadas nos códigos 3, 4, 5 e 8;<br>1 - Estrangeira - Importação direta, exceto a indicada no código 6;<br>2 - Estrangeira - Adquirida no mercado interno, exceto a indicada no código 7;<br>3 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 40% e inferior ou igual a 70%;<br>4 - Nacional, cuja produção tenha sido feita em conformidade com os processos produtivos básicos de que tratam as legislações citadas nos Ajustes;<br>5 - Nacional, mercadoria ou bem com Conteúdo de Importação inferior ou igual a 40%;<br>6 - Estrangeira - Importação direta, sem similar nacional, constante em lista da CAMEX e gás natural;<br>7 - Estrangeira - Adquirida no mercado interno, sem similar nacional, constante lista CAMEX e gás natural.<br>8 - Nacional, mercadoria ou bem com Conteúdo de Importação superior a 70%; |
| N12 | CST | E | N10 | N | 1-1 | 2 | Tributação do ICMS = 90<br>90=Outros |
| **N12.1** | **-x-** | **G** | **N10** | | **0-1** | | **Sequência XML**<br>**Grupo opcional.** |
| N13 | modBC | E | N12.1 | N | 1-1 | 1 | Modalidade de determinação da BC do ICMS<br>0=Margem Valor Agregado (%);<br>1=Pauta (Valor);<br>2=Preço Tabelado Máx. (valor);<br>3=Valor da operação. |
| N15 | vBC | E | N12.1 | N | 1-1 | 13v2 | Valor da BC do ICMS |
| N14 | pRedBC | E | N12.1 | N | 0-1 | 3v2-4 | Percentual da Redução de BC |
| N14a | cBenefRBC | E | N12.1 | C | 0-1 | 8,10 | Código de Benefício Fiscal na UF aplicado ao item quando houver RBC.<br>Código de Benefício Fiscal utilizado pela UF, aplicado ao item quando houver RBC.<br>Obs.: Deve ser utilizado o mesmo código adotado na EFD e outras declarações, nas UF que o exigem. |
| N16 | pICMS | E | N12.1 | N | 1-1 | 3v2-4 | Alíquota do imposto<br>Alíquota do ICMS sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP (Atualizado NT2016.002) |
| **N16a** | **-x-** | **G** | **N12.1** | | **0-1** | | **Sequência XML**<br>**Grupo opcional.** |
| N16b | vICMSOp | E | N16a | N | 1-1 | 13v2 | Valor do ICMS da Operação<br>Valor como se não tivesse o diferimento |
| N16c | pDif | E | N16a | N | 1-1 | 3v2-4 | Percentual do diferimento<br>No caso de diferimento total, informar o percentual de diferimento "100". |
| N16d | vICMSDif | E | N16a | N | 1-1 | 13v2 | Valor do ICMS diferido |
| N17 | vICMS | E | N12.1 | N | 1-1 | 13v2 | Valor do ICMS |
| **N17.0** | **-x-** | **G** | **N12.1** | | **0-1** | | **Sequência XML**<br>**Grupo opcional. (Incluído na NT2016.002)** |
| N17a | vBCFCP | E | N17.0 | N | 1-1 | 13v2 | Valor da Base de Cálculo do FCP<br>Informar o valor da Base de Cálculo do FCP |
| N17b | pFCP | E | N17.0 | N | 1-1 | 3v2-4 | Percentual do ICMS relativo ao Fundo de Combate à Pobreza (FCP)<br>Percentual relativo ao Fundo de Combate à Pobreza (FCP).<br>Nota: Percentual máximo de 2%, conforme a legislação. |
| N17c | vFCP | E | N17.0 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP)<br>Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP). |
| **N17.2** | **-x-** | **G** | **N12.1** | | **0-1** | | **Sequência XML**<br>**Grupo opcional.** |
| **N17d** | pFCPDif | E | **N17.2** | N | 1-1 | 3v2-4 | Percentual do diferimento do ICMS relativo ao Fundo de Combate à Pobreza (FCP<br>Percentual do diferimento do ICMS relativo ao Fundo de Combate à Pobreza (FCP). No caso de diferimento total, informar o percentual de diferimento "100" |
| **N17e** | vFCPDif | E | **N17.2** | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) diferido |
| **N17f** | vFCPEfet | E | **N17.2** | N | 0-1 | 13v2 | Valor efetivo do ICMS relativo ao Fundo de Combate à Pobreza (FCP)<br>Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) realmente devido. |
| **N17.1** | **-x-** | **G** | **N10** | | **0-1** | | **Sequência XML**<br>**Grupo opcional.** |
| N18 | modBCST | E | N17.1 | N | 1-1 | 1 | Modalidade de determinação da BC do ICMS ST<br>0=Preço tabelado ou máximo sugerido<br>1=Lista Negativa (valor)<br>2=Lista Positiva (valor)<br>3=Lista Neutra (valor)<br>4=Margem Valor Agregado (%)<br>5=Pauta (valor) |
| N19 | pMVAST | E | N17.1 | N | 0-1 | 3v2-4 | Percentual da margem de valor Adicionado do ICMS ST |
| N20 | pRedBCST | E | N17.1 | N | 0-1 | 3v2-4 | Percentual da Redução de BC do ICMS ST |
| N21 | vBCST | E | N17.1 | N | 1-1 | 13v2 | Valor da BC do ICMS ST |
| N22 | pICMSST | E | N17.1 | N | 1-1 | 3v2-4 | Alíquota do imposto do ICMS ST<br>Alíquota do ICMS ST sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP (Atualizado NT2016.002) |
| N23 | vICMSST | E | N17.1 | N | 1-1 | 13v2 | Valor do ICMS ST<br>Valor do ICMS ST retido |
| **N23.1** | **-x-** | **G** | **N17.1** | | **0-1** | | **Sequência XML**<br>**Grupo opcional. (Incluído na NT2016.002)** |
| N23a | vBCFCPST | E | N23.1 | N | 1-1 | 13v2 | Valor da Base de Cálculo do FCP retido por Substituição Tributária<br>Informar o valor da Base de Cálculo do FCP retido por Substituição Tributária |
| N23b | pFCPST | E | N23.1 | N | 1-1 | 3v2-4 | Percentual do FCP retido por Substituição Tributária<br>Percentual relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| N23d | vFCPST | E | N23.1 | N | 1-1 | 13v2 | Valor do FCP retido por Substituição Tributária<br>Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária. |
| **N27.1** | **-x-** | **G** | **N10** | | **0-1** | | **Sequência XML**<br>**Grupo opcional.** |
| N28a | vICMSDeson | E | N27.1 | N | 1-1 | 13v2 | Valor do ICMS desonerado<br>Informar apenas nos motivos de desoneração documentados abaixo. |
| N28 | motDesICMS | E | N27.1 | N | 1-1 | 2 | Motivo da desoneração do ICMS<br>Campo será preenchido quando o campo anterior estiver preenchido. Informar o motivo da desoneração:<br>3=Uso na agropecuária;<br>9=Outros;<br>12=Órgão de fomento e desenvolvimento agropecuário. |
| N28b | indDeduzDeson | E | N27.1 | N | 0-1 | 1 | Indica se o valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd).<br>O campo só pode ser preenchido com:<br>0=Valor do ICMS desonerado (vICMSDeson) não deduz do valor do item (vProd) / total da NF-e.<br>1=Valor do ICMS desonerado (vICMSDeson) deduz do valor do item (vProd) / total da NF-e. |
| **N27.1** | **-x-** | **G** | **N10** | | **0-1** | | **Sequência XML**<br>**Grupo opcional.** |
| N33a | vICMSSTDeson | E | N33.1 | N | 1-1 | 13v2 | Valor do ICMS-ST desonerado<br>Informar apenas nos motivos de desoneração documentados abaixo. |
| N33b | motDesICMSST | E | N33.1 | N | 1-1 | 2 | Motivo da desoneração do ICMS- ST<br>Campo será preenchido quando o campo anterior estiver preenchido. Informar o motivo da desoneração:<br>3=Uso na agropecuária;<br>9=Outros;<br>12=Órgão de fomento e desenvolvimento agropecuário. |
