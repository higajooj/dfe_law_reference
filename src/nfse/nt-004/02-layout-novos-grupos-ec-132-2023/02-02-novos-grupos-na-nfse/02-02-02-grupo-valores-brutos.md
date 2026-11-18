# 2.2.2. Grupo de Informações de Valores Brutos Relativos ao IBS e à CBS

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/IBSCBS/** | **valores** | **G** | **-** | **1-1** | **-** | **Grupo de valores brutos referentes ao IBS e à CBS** |
| NFSe/infNFSe/IBSCBS/valores/ | vBC | E | N | 1-1 | 1-15V2 | Valor da base de cálculo (BC) do IBS/CBS antes das reduções para cálculo do tributo bruto.<br><br>vBC = vServ - descIncond – vCalcReeRepRes – vISSQN – vPIS - vCOFINS (até 2026)<br>ou<br><br>vBC = vServ - descIncond – vCalcReeRepRes – vISSQN (até 2032) |
| NFSe/infNFSe/IBSCBS/valores/ | vCalcReeRepRes | E | N | 0-1 | 1-15V2 | Valor monetário (R$) total relativo ao fornecimento próprio de bens materiais ou relacionados a operações de terceiros, objeto de reembolso, repasse ou ressarcimento pelo recebedor, já tributados e aqui referenciados e que não integram da base de cálculo (BC) do ISSQN, do IBS e da CBS. |

<!-- p.17 -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/IBSCBS/valores/** | **uf** |  |  |  |  | **Grupo de Informações relativas aos valores do IBS Estadual** |
| NFSe/infNFSe/IBSCBS/valores/uf/ | pIBSUF | E | N | 1-1 | 1-2V2 | Alíquota da UF para IBS da localidade de incidência parametrizada no sistema. |
| NFSe/infNFSe/IBSCBS/valores/uf/ | pRedAliqUF | E | N | 1-1 | 1-3V2 | Percentual de redução de alíquota estadual. |
| NFSe/infNFSe/IBSCBS/valores/uf/ | pAliqEfetUF | E | N | 1-1 | 1-2V2 | pAliqEfetUF = pIBSUF x (1 - pRedAliqUF) x (1 - pRedutor)<br><br>Se pRedAliqUF não for informado na DPS, então pAliqEfetUF é a própria pIBSUF. |
| **NFSe/infNFSe/IBSCBS/valores/** | **mun** |  |  |  |  | **Grupo de Informações relativas aos valores do IBS Municipal** |
| NFSe/infNFSe/IBSCBS/valores/mun/ | pIBSMun | E | N | 1-1 | 1-2V2 | Alíquota da UF para IBS da localidade de incidência parametrizada no sistema. |
| NFSe/infNFSe/IBSCBS/valores/mun/ | pRedAliqMun | E | N | 1-1 | 1-3V2 | Percentual de redução de alíquota municipal. |
| NFSe/infNFSe/IBSCBS/valores/mun/ | pAliqEfetMun | E | N | 1-1 | 1-2V2 | pAliqEfetMun = pIBSMun x (1 - pRedAliqMun) x (1 - pRedutor)<br><br>Se pRedAliqMun não for informado na DPS, então pAliqEfetMun é a própria pIBSMun. |
| **NFSe/infNFSe/IBSCBS/valores/** | **fed** |  |  |  |  | **Grupo de Informações relativas aos valores da CBS** |
| NFSe/infNFSe/IBSCBS/valores/fed/ | pCBS | E | N | 1-1 | 1-2V2 | Alíquota da UF para IBS da localidade de incidência parametrizada no sistema. |
| NFSe/infNFSe/IBSCBS/valores/fed/ | pRedAliqCBS | E | N | 1-1 | 1-3V2 | Percentual da redução de alíquota. |
| NFSe/infNFSe/IBSCBS/valores/fed/ | pAliqEfetCBS | E | N | 1-1 | 1-2V2 | pAliqEfetCBS = pCBS x (1 - pRedAliqCBS) x (1 - pRedutor)<br><br>Se pRedAliqCBS não for informado na DPS, então pAliqEfetCBS é a própria pCBS. |

<!-- REVISAR p.17: a descrição de “pCBS” (grupo fed, valores da CBS) repete a de “Alíquota da UF para IBS…” (também em pIBSMun); transcrito literalmente, possível erro de texto na fonte. -->
