# 3 Campos do grupo IBS/CBS

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| **#** | **IBSCBS** | **G** | **imp** | **-** | **0 - 1** | **-** | **Grupo de informações da Tributação IBS/CBS** |
| 1 | CST | E | IBSCBS | N | 1 - 1 | 3 | Código da Situação Tributária do IBS/CBS |
| 2 | cClassTrib | E | IBSCBS | N | 1 - 1 | 6 | Código da Classificação Tributária do IBS/CBS |
| 3 | indDoacao | E | IBSCBS | N | 0 - 1 | 1 | Informar quando doação |
| 4 | **gIBSCBS** | **G** | **IBSCBS** | **-** | **0 - 1** | **-** | **Grupo de informações específicas do IBS/CBS** |
| 5 | vBC | E | gIBSCBS | N | 1 - 1 | 13,2 | Valor da Base de cálculo comum a IBS/CBS |
| 6 | **gIBSUF** | **G** | **gIBSCBS** | **-** | **1 - 1** | **-** | **Grupo de informações do IBS/CBS de competência das Unidades Federadas** |
| 7 | pIBSUF | E | gIBSUF | N | 1 - 1 | 3,2/3,4 | Alíquota do IBS Estadual |
| 8 | **gDif** | **G** | **gIBSUF** | **-** | **0 - 1** | **-** | **Grupo de campos do diferimento** |
| 9 | pDif | E | gDif | N | 1 - 1 | 3,2/3,4 | Percentual de diferimento |
| 10 | vDif | E | gDif | N | 1 - 1 | 13,2 | Valor do diferimento |
| 11 | **gDevTrib** | **G** | **gIBSUF** | **-** | **0 - 1** | **-** | **Grupo de informações da devolução de tributos** |
| 12 | pDevTrib | E | gDevTrib | N | 0 - 1 | 3,2/3,4 | <!-- p.04 -->Percentual de devolução do tributo, conforme LC 214/25 art. 118. |
| 13 | vDevTrib | E | gDevTrib | N | 1 - 1 | 13,2 | Valor do tributo devolvido.<br><br>No fornecimento de energia elétrica, água, esgoto e gás natural e em outras hipóteses definidas no regulamento |
| 14 | **gRed** | **G** | **gIBSUF** | **-** | **0 - 1** | **-** | **Grupo de informações da redução de Alíquota** |
| 15 | pRedAliq | E | gRed | N | 1 - 1 | 3,2/3,4 | Percentual da redução de Alíquota do cClassTrib |
| 16 | pAliqEfet | E | gRed | N | 1 - 1 | 3,2/3,4 | Alíquota efetiva do IBS de competência das UF que será aplicada a base de cálculo, incluindo o gCompraGov/pRedutor, se houver. |
| 17 | vIBSUF | E | gIBSUF | N | 1 - 1 | 13,2 | Valor do IBS de competência da UF |
| 18 | **gIBSMun** | **G** | **gIBSCBS** | **-** | **1 - 1** | **-** | **Grupo de informações do IBS/CBS de competência do municipio** |
| 19 | pIBSMun | E | gIBSMun | N | 1 - 1 | 3,2/3,4 | Alíquota do IBS Municipal |
| 20 | **gDif** | **G** | **gIBSMun** | **-** | **0 - 1** | **-** | **Grupo de campos do diferimento** |
| 21 | pDif | E | gDif | N | 1 - 1 | 3,2/3,4 | Percentual de diferimento |
| 22 | vDif | E | gDif | N | 1 - 1 | 13,2 | Valor do diferimento |
| 23 | **gDevTrib** | **G** | **gIBSMun** | **-** | **0 - 1** | **-** | **Grupo de informações da devolução do tributo** |
| 24 | pDevTrib | E | gDevTrib | N | 0 - 1 | 3,2/3,4 | Percentual de devolução do tributo, conforme LC 214/25 art. 118. |
| 25 | vDevTrib | E | gDevTrib | N | 1 - 1 | 13,2 | Valor do tributo devolvido.<br><br>No fornecimento de energia elétrica, água, esgoto e gás natural e em outras hipóteses definidas no regulamento |
| 26 | **gRed** | **G** | **gIBSMun** | **-** | **0 - 1** | **-** | **Grupo de informações da redução de Alíquota** |
| 27 | pRedAliq | E | gRed | N | 1 - 1 | 3,2/3,4 | Percentual da redução de Alíquota do cClassTrib |
| 28 | pAliqEfet | E | gRed | N | 1 - 1 | 3,2/3,4 | Alíquota efetiva do IBS de competência dos Municipios que será aplicada a base de cálculo, incluindo o gCompraGov/pRedutor, se houver. |
| 29 | vIBSMun | E | gIBSMun | N | 1 - 1 | 13,2 | Valor do IBS de competência do município |
| 30 | vIBS | E | gIBSCBS | N | 1 - 1 | 13,2 | Valor do IBS (soma de vIBSUF e vIBSMun) |
| 31 | **gCBS** | **G** | **gIBSCBS** | **-** | **1 - 1** | **-** | **Grupo de informações da CBS** |
| 32 | pCBS | E | gCBS | N | 1 - 1 | 3,2/3,4 | Alíquota da CBS |
| 33 | **gDif** | **G** | **gCBS** | **-** | **0 - 1** | **-** | **Grupo de campos do diferimento** |
| 34 | pDif | E | gDif | N | 1 - 1 | 3,2/3,4 | Percentual de diferimento |
| 35 | vDif | E | gDif | N | 1 - 1 | 13,2 | Valor do diferimento |
| 36 | **gDevTrib** | **G** | **gCBS** | **-** | **0 - 1** | **-** | **Grupo de informações da devolução do tributo** |
| 37 | pDevTrib | E | gDevTrib | N | 0 - 1 | 3,2/3,4 | Percentual de devolução do tributo, conforme LC 214/25 art. 118. |
| 38 | vDevTrib | E | gDevTrib | N | 1 - 1 | 13,2 | Valor da CBS devolvida.<br><br>No fornecimento de energia elétrica, água, esgoto e gás natural e em outras hipóteses definidas no regulamento |
| 39 | **gRed** | **G** | **gCBS** | **-** | **0 - 1** | **-** | **Grupo de informações da redução de Alíquota** |
| 40 | pRedAliq | E | gRed | N | 1 - 1 | 3,2/3,4 | Percentual da redução de Alíquota do cClassTrib |
| 41 | pAliqEfet | E | gRed | N | 1 - 1 | 3,2/3,4 | Alíquota efetiva da CBS que será aplicada a base de cálculo, incluindo o gCompraGov/pRedutor, se houver. |
| 42 | **gALCZFMCBS** | **G** | **gCBS** | **-** | **0 - 1** | **-** | **Grupo de operações em áreas incentivadas (ALC/ZFM) - CBS (alíquota zero)** |
| 43 | pAliqEfetRegCBS | E | gALCZFMCBS | N | 1 - 1 | 3,2/3,4 | <!-- p.05 -->Percentual efetivo sem a redução<br>Alíquota efetiva de referência da CBS aplicável à operação fora de áreas ou regimes incentivados. |
| 44 | vTribRegCBS | E | gALCZFMCBS | N | 1 - 1 | 13,2 | Valor efetivo sem a redução.<br>Valor da CBS calculado para a operação fora de áreas ou regimes incentivado |
| 45 | vCBS | E | gCBS | N | 1 - 1 | 13,2 | Valor da CBS |
| 46 | **gTribRegular** | **G** | **gIBSCBS** | **-** | **0 - 1** | **-** | **Grupo de informações da Tributação Regular.**<br>**Informar como seria a tributação caso não cumprida a condição resolutória/suspensiva. Exemplo 1: Art. 442, §4. Operações com ZFM e ALC. Exemplo 2: Operações com suspensão do tributo.** |
| 47 | CSTReg | E | gTribRegular | N | 1 - 1 | 3 | Código da Situação Tributária<br>Informado como seria o CST caso não cumprida a condição resolutória/suspensiva |
| 48 | cClassTribReg | E | gTribRegular | N | 1 - 1 | 6 | Código de Classificação Tributária<br>Informado como seria o cClassTrib caso não cumprida a condição resolutória/suspensiva |
| 49 | pAliqEfetRegIBSUF | E | gTribRegular | N | 1 - 1 | 3,2/3,4 | Alíquota efetiva da UF<br>Informado a Alíquota caso não cumprida a condição resolutória/suspensiva |
| 50 | vTribRegIBSUF | E | gTribRegular | N | 1 - 1 | 13,2 | Informado como seria o valor do Tributo da UF caso não cumprida a condição resolutória/suspensiva |
| 51 | pAliqEfetRegIBSMun | E | gTribRegular | N | 1 - 1 | 3,2/3,4 | Alíquota efetiva do Município<br>Informado a Alíquota caso não cumprida a condição resolutória/suspensiva |
| 52 | vTribRegIBSMun | E | gTribRegular | N | 1 - 1 | 13,2 | Informado como seria o valor do Tributo do Município caso não cumprida a condição resolutória/suspensiva |
| 53 | pAliqEfetRegCBS | E | gTribRegular | N | 1 - 1 | 3,2/3,4 | Alíquota efetiva da CBS<br>Informado a Alíquota caso não cumprida a condição resolutória/suspensiva |
| 54 | vTribRegCBS | E | gTribRegular | N | 1 - 1 | 13,2 | Informado como seria o valor do Tributo CBS caso não cumprida a condição resolutória/suspensiva |
| 55 | **gTribCompraGov** | **G** | **gIBSCBS** | **-** | **0 - 1** | **-** | **Grupo de informações da composição do valor do IBS e da CBS em compras governamental** |
| 56 | pAliqIBSUF | E | gTribCompraGov | N | 1 - 1 | 3,2/3,4 | Alíquota IBS da UF utilizada |
| 57 | vTribIBSUF | E | gTribCompraGov | N | 1 - 1 | 13,2 | Valor do Tributo do IBS da UF<br>Valor que seria devido a UF, sem aplicação do Art. 473. da LC 214/20025 |
| 58 | pAliqIBSMun | E | gTribCompraGov | N | 1 - 1 | 3,2/3,4 | Alíquota IBS do Município utilizada |
| 59 | vTribIBSMun | E | gTribCompraGov | N | 1 - 1 | 13,2 | Valor do Tributo do Município da UF<br>Valor que seria devido ao Município, sem aplicação do Art. 473. da LC 214/20025 |
| 60 | pAliqCBS | E | gTribCompraGov | N | 1 - 1 | 3,2/3,4 | Alíquota CBS utilizada |
| 61 | vTribCBS | E | gTribCompraGov | N | 1 - 1 | 13,2 | Valor do Tributo da CBS<br>Valor que seria devido a CBS, sem aplicação do Art. 473. da LC 214/20025 |
| 62 | **gEstornoCred** | **G** | **IBSCBS** | **-** | **0 - 1** | **-** | **Grupo de informações de estorno de crédito.**<br>**Informado conforme indicador no cClassTrib** |
| 63 | vIBSEstCred | E | gEstornoCred | N | 1 - 1 | 13,2 | Valor do IBS a ser estornado |
| 64 | vCBSEstCred | E | gEstornoCred | N | 1 - 1 | 13,2 | Valor do CBS a ser estornado |
