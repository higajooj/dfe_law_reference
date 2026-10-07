<!-- p.14 -->
# 3.7. Grupo N. Grupo Tributação do ICMS=90

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **239.01** | **N17.0** | **-x-** | **Sequência XML** | **G** | **N12.1** | | **0-1** | | **Grupo opcional. (Incluído na NT 2016/002)** |
| 239.02 | N17a | vBCFCP | Valor da Base de Cálculo do FCP | E | N17.0 | N | 1-1 | 13v2 | Informar o valor da Base de Cálculo do FCP |
| 239.03 | N17b | pFCP | Percentual do ICMS relativo ao Fundo de Combate à Pobreza (FCP) | E | N17.0 | N | 1-1 | 3v2-4 | Percentual relativo ao Fundo de Combate à Pobreza (FCP). Nota: Percentual máximo de 2%, conforme a legislação |
| 239.04 | N17c | vFCP | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) | E | N17.0 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) |
| **239.10** | **N17.1** | **-x-** | **Sequência XML** | **G** | **N10** | | **0-1** | | **Grupo opcional.** |
| 240 | N18 | modBCST | Modalidade de determinação da BC do ICMS ST | E | N17.1 | N | 1-1 | 1 | 0=Preço tabelado ou máximo sugerido<br>1=Lista Negativa (valor)<br>2=Lista Positiva (valor)<br>3=Lista Neutra (valor)<br>4=Margem Valor Agregado (%)<br>5=Pauta (valor)<br>6=Valor da Operação |
| 241 | N19 | pMVAST | Percentual da margem de valor Adicionado do ICMS ST | E | N17.1 | N | 0-1 | 3v2-4 | |
| 242 | N20 | pRedBCST | Percentual da Redução de BC do ICMS ST | E | N17.1 | N | 0-1 | 3v2-4 | |
| 243 | N21 | vBCST | Valor da BC do ICMS ST | E | N17.1 | N | 1-1 | 13v2 | |
| 244 | N22 | pICMSST | Alíquota do imposto do ICMS ST | E | N17.1 | N | 1-1 | 3v2-4 | Alíquota do ICMS ST sem o FCP. Quando for o caso, informar a alíquota do FCP no campo pFCP (Atualizado NT 2016/002) |
| 245 | N23 | vICMSST | Valor do ICMS ST | E | N17.1 | N | 1-1 | 13v2 | Valor do ICMS ST retido |
| **245.20** | **N23.1** | **-x-** | **Sequência XML** | **G** | **N17.1** | | **0-1** | | **Grupo opcional. (Incluído na NT 2016/002)** |
| 245.21 | N23.a | vBCFCPST | Valor da Base de Cálculo do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 13v2 | Informar o valor da Base de Cálculo do FCP retido por Substituição Tributária |
| 245.22 | N23.b | pFCPST | Percentual do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 3v2-4 | Percentual relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária |
| 245.23 | N23.d | vFCPST | Valor do FCP retido por Substituição Tributária | E | N23.1 | N | 1-1 | 13v2 | Valor do ICMS relativo ao Fundo de Combate à Pobreza (FCP) retido por substituição tributária |

<!-- p.15 -->
| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **245.24** | **N27.1** | **-x-** | **Sequência XML** | **G** | **N10** | | **0-1** | | **Grupo opcional. (Incluído na NT 2016/002)** |
| 245.25 | N28a | vICMSDeson | Valor do ICMS desonerado | E | N27.1 | N | 1-1 | 13v2 | Informar apenas nos motivos de desoneração documentados abaixo |
| 245.26 | N28 | motDesICMS | Motivo da desoneração do ICMS | E | N27.1 | N | 1-1 | 2 | Campo será preenchido quando o campo anterior estiver preenchido. Informar o motivo da desoneração:<br>3=Uso na agropecuária<br>9=Outros<br>12=Órgão de fomento e desenvolvimento agropecuário |
| **245.30** | **N33.1** | **-x-** | **Sequência XML** | **G** | **N17.1** | | **0-1** | | **Grupo opcional** |
| 245.31 | N33a | vICMSSTDeson | Valor do ICMS- ST desonerado | E | N33.1 | N | 1-1 | 13v2 | Informar apenas nos motivos de desoneração documentados abaixo |
| 245.32 | N33b | motDesICMSST | Motivo da desoneração do ICMS- ST | E | N33.1 | N | 1-1 | 2 | Campo será preenchido quando o campo anterior estiver preenchido. Informar o motivo da desoneração:<br>3=Uso na agropecuária<br>9=Outros<br>12=Órgão de fomento e desenvolvimento agropecuário |
