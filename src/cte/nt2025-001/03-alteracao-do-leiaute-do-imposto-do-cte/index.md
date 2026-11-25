<!-- p.06 -->

# 3 Alteração do leiaute do imposto do CTe

Este grupo de informações facultativas deve ser adicionado ao final do grupo imposto do CTe, CTe Simplificado e CTe OS.

| # | Campo | Ele | Pai | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|---|
| | **IBSCBS** | **G** | **imp** | **-** | **0-1** | **-** | **Grupo de informações da Tributação IBS/CBS** |
| 1 | CST | E | IBSCBS | N | 1-1 | 3 | Código da Situação Tributária do IBS/CBS |
| 2 | cClassTrib | E | IBSCBS | N | 1-1 | 6 | Código da Classificação Tributária do IBS/CBS |
| 3 | indDoacao | E | IBSCBS | N | 0-1 | 1 | Informar quando doação |
| 4 | **gIBSCBS** | **G** | **IBSCBS** | **-** | **0-1** | **-** | **Grupo de informações específicas do IBS/CBS** |
| 5 | vBC | E | gIBSCBS | N | 1-1 | 13,2 | Valor da Base de cálculo comum a IBS/CBS |
| 6 | **gIBSUF** | **G** | **gIBSCBS** | **-** | **1-1** | **-** | **Grupo de informações do IBS/CBS de competência das Unidades Federadas** |
| 7 | pIBSUF | E | gIBSUF | N | 1-1 | 3,2/3,4 | Alíquota do IBS Estadual |
| 8 | **gDif** | **G** | **gIBSUF** | **-** | **0-1** | **-** | **Grupo de campos do diferimento** |
| 9 | pDif | E | gDif | N | 1-1 | 3,2/3,4 | Percentual de diferimento |
| 10 | vDif | E | gDif | N | 1-1 | 13,2 | Valor do diferimento |
| 11 | **gDevTrib** | **G** | **gIBSUF** | **-** | **0-1** | **-** | **Grupo de informações da devolução de tributos** |
| 12 | vDevTrib | E | gDevTrib | N | 1-1 | 13,2 | Valor do tributo devolvido.<br>No fornecimento de energia elétrica, água, esgoto e gás natural e em outras hipóteses definidas no regulamento |
| 13 | **gRed** | **G** | **gIBSUF** | **-** | **0-1** | **-** | **Grupo de informações da redução de Alíquota** |
| 14 | pRedAliq | E | gRed | N | 1-1 | 3,2/3,4 | Percentual da redução de Alíquota do cClassTrib |
| 15 | pAliqEfet | E | gRed | N | 1-1 | 3,2/3,4 | Alíquota efetiva do IBS de competência das UF que será aplicada a base de cálculo, incluindo o gCompraGov/pRedutor, se houver. |
| 16 | vIBSUF | E | gIBSUF | N | 1-1 | 13,2 | Valor do IBS de competência da UF |
| 17 | **gIBSMun** | **G** | **gIBSCBS** | **-** | **1-1** | **-** | **Grupo de informações do IBS/CBS de competência do municipio** |
| 18 | pIBSMun | E | gIBSMun | N | 1-1 | 3,2/3,4 | Alíquota do IBS Municipal |
| 19 | **gDif** | **G** | **gIBSMun** | **-** | **0-1** | **-** | **Grupo de campos do diferimento** |
| 20 | pDif | E | gDif | N | 1-1 | 3,2/3,4 | Percentual de diferimento |
| 21 | vDif | E | gDif | N | 1-1 | 13,2 | Valor do diferimento |
| 22 | **gDevTrib** | **G** | **gIBSMun** | **-** | **0-1** | **-** | **Grupo de informações da devolução do tributo** |
| 23 | vDevTrib | E | gDevTrib | N | 1-1 | 13,2 | Valor do tributo devolvido.<br>No fornecimento de energia elétrica, água, esgoto e gás natural e em outras hipóteses definidas no regulamento |
| 24 | **gRed** | **G** | **gIBSMun** | **-** | **0-1** | **-** | **Grupo de informações da redução de Alíquota** |
| 25 | pRedAliq | E | gRed | N | 1-1 | 3,2/3,4 | Percentual da redução de Alíquota do cClassTrib |
| 26 | pAliqEfet | E | gRed | N | 1-1 | 3,2/3,4 | Alíquota efetiva do IBS de competência dos Municipios que será aplicada a base de cálculo, incluindo o gCompraGov/pRedutor, se houver. |
| 26a | vIBSMun | E | gIBSMun | N | 1-1 | 13,2 | Valor do IBS de competência do município |
| 27 | vIBS | E | gIBSCBS | N | 1-1 | 13,2 | Valor do IBS (soma de vIBSUF e vIBSMun) |
| 28 | **gCBS** | **G** | **gIBSCBS** | **-** | **1-1** | **-** | **Grupo de informações da CBS** |
| 29 | pCBS | E | gCBS | N | 1-1 | 3,2/3,4 | Alíquota da CBS |
| 30 | **gDif** | **G** | **gCBS** | **-** | **0-1** | **-** | <!-- p.07 -->**Grupo de campos do diferimento** |
| 31 | pDif | E | gDif | N | 1-1 | 3,2/3,4 | Percentual de diferimento |
| 32 | vDif | E | gDif | N | 1-1 | 13,2 | Valor do diferimento |
| 33 | **gDevTrib** | **G** | **gCBS** | **-** | **0-1** | **-** | **Grupo de informações da devolução do tributo** |
| 34 | vDevTrib | E | gDevTrib | N | 1-1 | 13,2 | Valor da CBS devolvida.<br>No fornecimento de energia elétrica, água, esgoto e gás natural e em outras hipóteses definidas no regulamento |
| 35 | **gRed** | **G** | **gCBS** | **-** | **0-1** | **-** | **Grupo de informações da redução de Alíquota** |
| 36 | pRedAliq | E | gRed | N | 1-1 | 3,2/3,4 | Percentual da redução de Alíquota do cClassTrib |
| 37 | pAliqEfet | E | gRed | N | 1-1 | 3,2/3,4 | Alíquota efetiva da CBS que será aplicada a base de cálculo, incluindo o gCompraGov/pRedutor, se houver. |
| 38 | vCBS | E | gCBS | N | 1-1 | 13,2 | Valor da CBS |
| 39 | **gTribRegular** | **G** | **gIBSCBS** | **-** | **0-1** | **-** | **Grupo de informações da Tributação Regular.<br>Informar como seria a tributação caso não cumprida a condição resolutória/suspensiva. Exemplo 1: Art. 442, §4. Operações com ZFM e ALC. Exemplo 2: Operações com suspensão do tributo..** |
| 40 | CSTReg | E | gTribRegular | N | 1-1 | 3 | Código da Situação Tributária<br>Informado como seria o CST caso não cumprida a condição resolutória/suspensiva |
| 41 | cClassTribReg | E | gTribRegular | N | 1-1 | 6 | Código de Classificação Tributária<br>Informado como seria o cClassTrib caso não cumprida a condição resolutória/suspensiva |
| 42 | pAliqEfetRegIBSUF | E | gTribRegular | N | 1-1 | 3,2/3,4 | Alíquota efetiva da UF<br>Informado a Alíquota caso não cumprida a condição resolutória/suspensiva |
| 43 | vTribRegIBSUF | E | gTribRegular | N | 1-1 | 13,2 | Informado como seria o valor do Tributo da UF caso não cumprida a condição resolutória/suspensiva |
| 44 | pAliqEfetRegIBSMun | E | gTribRegular | N | 1-1 | 3,2/3,4 | Alíquota efetiva do Município<br>Informado a Alíquota caso não cumprida a condição resolutória/suspensiva |
| 45 | vTribRegIBSMun | E | gTribRegular | N | 1-1 | 13,2 | Informado como seria o valor do Tributo do Município caso não cumprida a condição resolutória/suspensiva |
| 46 | pAliqEfetRegCBS | E | gTribRegular | N | 1-1 | 3,2/3,4 | Alíquota efetiva da CBS<br>Informado a Alíquota caso não cumprida a condição resolutória/suspensiva |
| <!-- REVISAR p.07: linha sem número na fonte; a numeração pula de 46 para 57 --> | vTribRegCBS | E | gTribRegular | N | 1-1 | 13,2 | Informado como seria o valor do Tributo CBS caso não cumprida a condição resolutória/suspensiva |
| 57 | **gTribCompraGov** | **G** | **gIBSCBS** | **-** | **0-1** | **-** | **Grupo de informações da composição do valor do IBS e da CBS em compras governamental** |
| 58 | pAliqIBSUF | E | gTribCompraGov | N | 1-1 | 3,2/3,4 | Alíquota IBS da UF utilizada |
| 59 | vTribIBSUF | E | gTribCompraGov | N | 1-1 | 13,2 | Valor do Tributo do IBS da UF<br>Valor que seria devido a UF, sem aplicação do Art. 473. da LC 214/20025 |
| 60 | pAliqIBSMun | E | gTribCompraGov | N | 1-1 | 3,2/3,4 | Alíquota IBS do Município utilizada |
| 61 | vTribIBSMun | E | gTribCompraGov | N | 1-1 | 13,2 | Valor do Tributo do Município da UF<br>Valor que seria devido ao Município, sem aplicação do Art. 473. da LC 214/20025 |
| 62 | pAliqCBS | E | gTribCompraGov | N | 1-1 | 3,2/3,4 | Alíquota IBS do CBS utilizada |
| 63 | vTribCBS | E | gTribCompraGov | N | 1-1 | 13,2 | Valor do Tributo da CBS<br>Valor que seria devido a CBS, sem aplicação do Art. 473. da LC 214/20025 |
| 64 | **gEstornoCred** | **G** | **IBSCBS** | **-** | **0-1** | **-** | **Grupo de informações de estorno de crédito.<br>Informado conforme indicador no cClassTrib** |
| 65 | vIBSEstCred | E | gEstornoCred | N | 1-1 | 13,2 | <!-- p.08 -->Valor do IBS a ser estornado |
| 66 | vCBSEstCred | E | gEstornoCred | N | 1-1 | 13,2 | Valor do CBS a ser estornado |
