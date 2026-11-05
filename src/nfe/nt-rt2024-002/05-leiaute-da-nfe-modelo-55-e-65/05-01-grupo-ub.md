<!-- p.14 -->
# 5.1. Grupo UB. Informações dos tributos IBS / CBS e Imposto Seletivo

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **324.01** | **UB01** | **IBSCBSSel** | **Informações do Imposto de Bens e Serviços - IBS, Contribuição de Bens e Serviços - CBS e Imposto Seletivo** |  | **H01** |  | **0-1** |  |  |
| **324.02** | **UB02** | **seletivo** | **Informações do Imposto Seletivo** | **G** | **UB04** |  | **0-1** |  |  |
| 324.03 | UB03 | CST | Código de Situação Tributária do Imposto Seletivo | E | UB02 | N | 1-1 |  |  |
| 324.04 | UB04 | cClassTrib | Código de Classificação Tributária do Imposto Seletivo | E | UB05 | C | 1-1 |  |  |
| **324.05** | **UB05** | **gImpSel** | **Grupo de Informações do Imposto Seletivo** | **G** | **UB02** |  | **0-1** |  |  |
| 324.06 | UB06 | vBCImpSel | Valor da Base de Cálculo do Imposto Seletivo | E | UB05 | N | 1-1 | 13v2 |  |

<!-- p.15 -->

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 324.07 | UB07 | pImpSel | Alíquota do Imposto Seletivo | E | UB05 | N | 1-1 | 3v2-4 |  |
| 324.08 | UB08 | pImpSelEspec | Alíquota específica por unidade de medida apropriada | E | UB05 | N | 0-1 | 3v2-4 |  |
| 324.09 | UB09 | uTrib | Unidade de Medida Tributável | E | UB05 | C | 0-1 | 1-6 |  |
| 324.10 | UB10 | qTrib | Quantidade Tributável | E | UB05 | N | 0-1 | 11v0-4 |  |
| 324.11 | UB11 | vImpSel | Valor do Imposto Seletivo | E | UB05 | N | 1-1 | 13v2 |  |
| 324.12 | UB12 | CST | Código de Situação Tributária do IBS e CBS | E | UB01 | N | 0-1 |  |  |
| 324.13 | UB13 | cClassTrib | Código de Classificação Tributária do IBS e CBS | E | UB01 | C | 0-1 |  |  |
| **324.14** | **UB14** | **gIBSCBS** | **Grupo de Informações do IBS, CBS e Imposto Seletivo** | **CG** | **UB01** |  | **1-1** |  |  |
| 324.15 | UB15 | vBC | Base de cálculo do IBS e CBS | E | UB04 | N | 1-1 | 3v2-4 |  |
| **324.16** | **UB16** | **gIBSUF** | **Grupo de Informações do IBS para a UF** | **G** | **UB14** |  | **1-1** |  |  |
| 324.17 | UB17 | pIBSUF | Alíquota do IBS de competência das UF | E | UB15 | N | 1-1 | 3v2-4 | Alíquota vigente do IBS da UF |
| **324.18** | **UB18** | **-x-** | **Sequencia XML** | **G** | **UB15** |  | **0-1** |  |  |
| 324.19 | UB19 | vTribOP | Valor bruto do tributo na operação | E | UB17 | N | 1-1 | 13v2 | Valor do tributo considerando BC x Alq do IBS, sem considerar qualquer desoneração. Grupo de Informações do Crédito Presumido, quando aproveitado pelo emitente do documento. Exemplos: 1 - Aquisição de PR não contribuinte. 2 - Tomador de serviço de transporte de TAC PF não contrib. 3 - Aquisição de pessoa física com destino a reciclagem. 4 - Aquisição de bens móveis de PF não contrib. para revenda (veículos / brecho). 5 - Regime opcional para cooperativa. |
| **324.20** | **UB20** | **gCredPres** | **Grupo de Informações do Crédito Presumido** | **G** | **UB17** |  | **0-1** |  |  |
| 324.21 | UB21 | pCredPres | Percentual do Crédito Presumido | E | UB19 | N | 1-1 | 3v2-4 |  |
| 324.22 | UB22 | vCredPres | Valor do Crédito Presumido | E | UB19 | N | 1-1 | 13v2 |  |
| **324.23** | **UB23** | **gDif** | **Grupo de Informações do Diferimento** | **G** | **UB17** |  | **0-1** |  |  |
| 324.24 | UB24 | pDif | Percentual do diferimento | E | UB22 | N | 1-1 | 3v2-4 |  |
| 324.25 | UB25 | vDif | Valor do Diferimento | E | UB22 | N | 1-1 | 13v2 |  |

<!-- p.16 -->

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **324.26** | **UB26** | **gDevTrib** | **Grupo de Informações da devolução de tributos** | **G** | **UB17** |  | **0-1** |  |  |
| 324.27 | UB27 | vDevTrib | Valor do tributo devolvido | E | UB25 | N | 1-1 | 13v2 | Valor do tributo devolvido. No fornecimento de energia elétrica, água, esgoto e gás natural e em outras hipóteses definidas no regulamento |
| **324.28** | **UB28** | **gRed** | **Grupo de informações da redução da alíquota** | **G** | **UB15** |  | **0-1** |  |  |
| 324.29 | UB29 | pRedAliq | Percentual da redução de alíquota | E | UB27 | N | 1-1 | 3v2-4 |  |
| 324.30 | UB30 | pAliqEfet | Aliquota Efetiva do IBS de competência das UF que será aplicada a Base de Cálculo | E | UB27 | N | 1-1 | 3v2-4 | Alíquota efetiva, após aplicação da redução de alíquota. |
| **324.31** | **UB31** | **gDeson** | **Grupo de informações da Desoneração** | **G** | **UB15** |  | **0-1** |  | **Grupo de informações da Desoneração. Exemplo 1: Art. 442, §4. Operações com ZFM e ALC. Exemplo 2: Operações com suspensão do tributo.** |
| 324.32 | UB32 | CST | Código de Situação Tributária do IBS e CBS | E | UB30 | N | 0-1 |  | Informado como se a operação fosse tributada integralmente |
| 324.33 | UB33 | cClassTrib | Código de Classificação Tributária do IBS e CBS | E | UB30 | C | 0-1 |  | Informado como se a operação fosse tributada integralmente |
| 324.34 | UB34 | vBC | Valor da BC | E | UB30 | N | 0-1 | 13v2 | Info: Avaliando retirar e deixar a BC do grupo anterior |
| 324.35 | UB35 | pAliq | Valor da alíquota | E | UB30 | N | 1-1 | 3v2-4 | Informado como se a operação fosse tributada integralmente |
| 324.36 | UB36 | vDeson | Valor desonerado | E | UB30 | N | 1-1 | 13v2 |  |
| 324.37 | UB37 | vIBSUF | Valor do IBS de competência da UF | E | UB15 | N | 1-1 | 13v2 |  |
| **324.38** | **UB38** | **gIBSMun** | **Grupo de Informações do IBS para o município** | **G** | **UB14** |  | **1-1** |  |  |
| 324.39 | UB39 | pIBSMun | Alíquota do IBS de competência dos Municípios | E | UB37 | N | 1-1 | 3v2-4 |  |
| **324.40** | **UB40** | **-x-** | **Sequencia XML** | **G** | **UB37** |  | **0-1** |  |  |
| 324.41 | UB41 | vTribOP | Valor bruto do tributo na operação | E | UB39 | N | 1-1 | 13v2 | Valor do tributo considerando BC x Alq do IBS, sem considerar qualquer desoneração. |

<!-- p.17 -->

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **324.42** | **UB42** | **gCredPres** | **Grupo de Informações do Crédito Presumido** | **G** | **UB39** |  | **0-1** |  |  |
| 324.43 | UB43 | pCredPres | Percentual do Crédito Presumido | E | UB41 | N | 1-1 | 3v2-4 |  |
| 324.44 | UB44 | vCredPres | Valor do Crédito Presumido | E | UB41 | N | 1-1 | 13v2 |  |
| **324.45** | **UB45** | **gDif** | **Grupo de Informações do Diferimento** | **G** | **UB39** |  | **0-1** |  |  |
| 324.46 | UB46 | pDif | Percentual do diferimento | E | UB43 | N | 1-1 | 3v2-4 |  |
| 324.47 | UB47 | vDif | Valor do Diferimento | E | UB43 | N | 1-1 | 13v2 |  |
| **324.48** | **UB48** | **gDevTrib** | **Grupo de Informações da devolução de tributos** | **G** | **UB39** |  | **0-1** |  |  |
| 324.49 | UB49 | vDevTrib | Valor do tributo devolvido | E | UB46 | N | 1-1 | 13v2 | Valor do tributo devolvido. No fornecimento de energia elétrica, água, esgoto e gás natural e em outras hipóteses definidas no regulamento |
| **324.50** | **UB50** | **gRed** | **Grupo de informações da redução da alíquota** | **G** | **UB37** |  | **0-1** |  |  |
| 324.51 | UB51 | pRedAliq | Percentual da redução de alíquota | E | UB48 | N | 1-1 | 3v2-4 |  |
| 324.52 | UB52 | pAliqEfet | Aliquota Efetiva do IBS de competência dos Municípios que será aplicada a Base de Cálculo | E | UB48 | N | 1-1 | 3v2-4 | Alíquota efetiva, após aplicação da redução de alíquota. |
| **324.53** | **UB53** | **gDeson** | **Grupo de informações da Desoneração** | **G** | **UB37** |  | **0-1** |  | **Grupo de informações da Desoneração. Exemplo 1: Art. 442, §4. Operações com ZFM e ALC. Exemplo 2: Operações com suspensão do tributo.** |
| 324.54 | UB54 | CST | Código de Situação Tributária do IBS e CBS | E | UB51 | N | 0-1 |  | Informado como se a operação fosse tributada integralmente |
| 324.55 | UB55 | cClassTrib | Código de Classificação Tributária do IBS e CBS | E | UB51 | C | 0-1 |  | Informado como se a operação fosse tributada integralmente |
| 324.56 | UB56 | vBC | Valor da BC | E | UB51 | N | 1-1 | 13v2 | Info: Avaliando retirar e deixar a BC do grupo anterior |
| 324.57 | UB57 | pAliq | Valor da alíquota | E | UB51 | N | 1-1 | 3v2-4 | Informado como se a operação fosse tributada integralmente |
| 324.58 | UB58 | vDeson | Valor desonerado | E | UB51 | N | 1-1 | 13v2 |  |

<!-- p.18 -->

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 324.59 | UB59 | vIBSMun | Valor do IBS de competência dos Municípios | E | UB37 | N | 1-1 | 13v2 |  |
| **324.60** | **UB60** | **gCBS** | **Grupo de Informações da CBS** | **G** | **UB14** |  | **1-1** |  |  |
| 324.61 | UB61 | pCBS | Alíquota da CBS | E | UB58 | N | 1-1 | 3v2-4 |  |
| **324.62** | **UB62** | **-x-** | **Sequencia XML** | **G** | **UB58** |  | **0-1** |  |  |
| 324.63 | UB63 | vTribOp | Valor bruto do tributo na operação | E | UB60 | N | 1-1 |  | Valor do tributo considerando BC x Alq da CBS, sem considerar qualquer desoneração. Grupo de Informações do Crédito Presumido, quando aproveitado pelo emitente do documento. Exemplos: 1 - Aquisição de PR não contribuinte. 2 - Tomador de serviço de transporte de TAC PF não contrib. 3 - Aquisição de pessoa física com destino a reciclagem. 4 - Aquisição de bens móveis de PF não contrib. para revenda (veículos / brecho). 5 - Regime opcional para cooperativa. |
| **324.64** | **UB64** | **gCredPres** | **Grupo de Informações do Crédito Presumido** | **G** | **UB60** |  | **0-1** |  |  |
| 324.65 | UB65 | pCredPres | Percentual do Crédito Presumido | E | UB62 | N | 1-1 | 3v2-4 |  |
| 324.66 | UB66 | vCredPres | Valor do Crédito Presumido | E | UB62 | N | 1-1 | 13v2 |  |
| **324.67** | **UB67** | **gDif** | **Grupo de Informações do Diferimento** | **G** | **UB60** |  | **0-1** |  |  |
| 324.68 | UB68 | pDif | Percentual do diferimento | E | UB65 | N | 1-1 | 3v2-4 |  |
| 324.69 | UB69 | vDif | Valor do Diferimento | E | UB65 | N | 1-1 | 13v2 |  |
| **324.70** | **UB70** | **gDevTrib** | **Grupo de Informações da devolução de tributos** | **G** | **UB60** |  | **0-1** |  |  |
| 324.71 | UB71 | vDevTrib | Valor do tributo devolvido | E | UB68 | N | 1-1 | 13v2 | Valor do tributo devolvido. No fornecimento de energia elétrica, água, esgoto e gás natural e em outras hipóteses definidas no regulamento |
| **324.72** | **UB72** | **gRed** | **Grupo de informações da redução da alíquota** | **G** | **UB58** |  | **0-1** |  |  |
| 324.73 | UB73 | pRedAliq | Percentual da redução de alíquota | E | UB70 | N | 1-1 | 3v2-4 |  |
| 324.74 | UB74 | pAliqEfet | Alíquota Efetiva da CBS que será aplicada a Base de Cálculo | E | UB70 | N | 1-1 | 3v2-4 | Alíquota efetiva, após aplicação da redução de alíquota. |
| **324.75** | **UB75** | **gDeson** | **Grupo de informações da Desoneração** | **G** | **UB58** |  | **0-1** |  | **Grupo de informações da Desoneração. Exemplo 1: Art. 442, §4. Operações com ZFM e ALC. Exemplo 2: Operações com suspensão do tributo.** |

<!-- p.19 -->

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| 324.76 | UB76 | CST | Código de Situação Tributária do IBS e CBS | E | UB73 | N | 0-1 |  | Informado como se a operação fosse tributada integralmente |
| 324.77 | UB77 | cClassTrib | Código de Classificação Tributária do IBS e CBS | E | UB73 | C | 0-1 |  | Informado como se a operação fosse tributada integralmente |
| 324.78 | UB78 | vBC | Valor da BC | E | UB73 | N | 1-1 | 13v2 | Info: Avaliando retirar e deixar a BC do grupo anterior |
| 324.79 | UB79 | pAliq | Valor da alíquota | E | UB73 | N | 1-1 | 3v2-4 | Informado como se a operação fosse tributada integralmente |
| 324.80 | UB80 | vDeson | Valor desonerado | E | UB73 | N | 1-1 | 13v2 |  |
| 324.81 | UB81 | vCBS | Valor da CBS | E | UB58 | N | 1-1 | 13v2 |  |
| **324.82** | **UB82** | **gIBSCBSMono** | **Grupo de Informações do IBS e CBS em operações com imposto monofásico** | **CG** | **UB01** |  | **1-1** |  | **Monofasia dos Combustíveis** |
| 324.83 | UB83 | qBCMono | Quantidade tributada na monofasia | E | UB80 | N | 0-1 | 11v0-4 | Informar a BC quantidade conforme unidade de medida estabelecida na legislação para o produto. |
| 324.84 | UB84 | adRemIBS | Alíquota ad rem do IBS | E | UB80 | N | 1-1 | 3v2-4 |  |
| 324.85 | UB85 | adRemCBS | Alíqutoa ad rem da CBS | E | UB80 | N | 1-1 | 3v2-4 |  |
| 324.86 | UB86 | vIBSMono | Valor do IBS monofásico | E | UB80 | N | 1-1 | 13v2 | O valor do imposto é obtido pela multiplicação da alíquota ad rem pela quantidade do produto conforme unidade de medida estabelecida na legislação. |
| 324.87 | UB87 | vCBSMono | Valor da CBS monofásica | E | UB80 | N | 1-1 | 13v2 | O valor do imposto é obtido pela multiplicação da alíquota ad rem pela quantidade do produto conforme unidade de medida estabelecida na legislação. |
| **324.88** | **UB88** | **-x-** | **Sequencia XML** | **G** | **UB80** |  | **0-1** |  | **Uso em operações com combustíveis derivados de petróleo (Gasolina A) [ou *Óleo Diesel A*] para retenção do imposto sobre o biocombustível a ser misturado. Art 173 PLP 68/24. Informar a BC do ICMS sujeita a retenção em quantidade conforme unidade de medida estabelecida na legislação para o produto.** |
| 324.89 | UB89 | qBCMonoReten | Quantidade tributada sujeita à retenção na monofasia | E | UB84 | N | 0-1 | 11v0-4 |  |
| 324.90 | UB90 | adRemIBSREten | Alíquota ad rem do imposto sujeito a retenção | E | UB84 | N | 1-1 | 3v2-4 |  |
| 324.91 | UB91 | vIBSMonoReten | Valor do IBS monofásico sujeito a retenção | E | UB84 | N | 1-1 | 13v2 | Valor do IBS com retenção, a ser somado ao valor de IBS a ser recolhido. |

<!-- p.20 -->

| # | ID | Campo | Descrição | Ele | Pai | Tipo | Ocor. | Tam. | Observação |
|---|---|---|---|---|---|---|---|---|---|
| **324.92** | **UB92** | **-x-** | **Sequencia XML** | **G** | **UB80** |  | **0-1** |  | **Uso em operações com crédito presumido. Exemplo: compra de combustível por transportador de passageiros, venda para órgão público, venda equiparada a exportação, entre outros.** |
| 324.93 | UB93 | pCredPresIBS | Percentual de crédito presumido do IBS monofásico. | E | UB88 | N | 1-1 | 3v2-4 |  |
| 324.94 | UB94 | vCRedPresIBS | Valor do crédito presumido do IBS monofásico. | E | UB88 | N | 1-1 | 13v2 |  |
| 324.95 | UB95 | pCredPresCBS | Percentual de crédito presumido da CBS monofásica. | E | UB88 | N | 1-1 | 3v2-4 |  |
| 324.96 | UB96 | vCredPresCBS | Valor do crédito presumido da CBS monofásica. | E | UB88 | N | 1-1 | 13v2 |  |
| **324.97** | **UB97** | **-x-** | **Sequencia XML** | **G** | **UB80** |  | **0-1** |  | **Operações com diferimento, aplicado aos biocombustíveis. Exemplo: operação do produtor de biocombustível (usina).** |
| 324.98 | UB98 | pDifIBS | Percentual do diferimento do imposto monofásico. | E | UB94 | N | 1-1 | 3v2-4 | A ser aplicado em vIBSMono. |
| 324.99 | UB99 | vIBSMonoDif | Valor do IBS mono diferido. | E | UB94 | N | 1-1 | 13v2 | A ser deduzido do valor do IBS. |
| 324.100 | UB100 | pDifCBS | Percentual do diferimento do imposto monofásico | E | UB94 | N | 1-1 | 3v2-4 | A ser aplicado em vCBSMono |
| 324.101 | UB101 | vCBSMonoDif | Valor do CBS Mono diferido. | E | UB94 | N | 1-1 | 13v2 | A ser deduzido do valor da CBS. |
| 324.102 | UB102 | vTotIBSMono | Total de IBS Monofásico. | E | UB80 | N | 1-1 | 13v2 | Considerando a adição do valor de retenção e deduzindo a parcela diferida conforme o caso. |
| 324.103 | UB103 | vTotCBSMono | Total da CBS Monofásica. | E | UB80 | N | 1-1 | 13v2 | Grupo de Informações do Crédito Presumido, quando aproveitado pelo emitente do documento. Exemplos: 1 - Aquisição de PR não contribuinte. 2 - Tomador de serviço de transporte de TAC PF não contrib. 3 - Aquisição de pessoa física com destino a reciclagem. 4 - Aquisição de bens móveis de PF não contrib. para revenda (veículos / brecho). 5 - Regime opcional para cooperativa. Considerando a adição do valor de retenção e deduzindo a parcela diferida conforme o caso. |
