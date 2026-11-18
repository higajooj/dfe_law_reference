# 2.2.2 Grupo de Informações de Valores Brutos Relativos ao IBS e à CBS

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/IBSCBS/** | **valores** | **G** | **-** | **1-1** | **-** | **Grupo de valores brutos referentes ao IBS e à CBS** |
| NFSe/infNFSe/IBSCBS/valores/ | vBC | E | N | 1-1 | 1-15V2 | Valor da base de cálculo (BC) do IBS/CBS antes das reduções para cálculo do tributo bruto. |
| <span style="color:#c00000">**NFSe/infNFSe/IBSCBS/valores/**</span> | <span style="color:#c00000">**uf**</span> |  |  |  |  | <span style="color:#c00000">**Grupo de Informações relativas aos valores do IBS Estadual**</span> |
| NFSe/infNFSe/IBSCBS/valores/uf/ | pIBSUF | E | N | 1-1 | 1-2V2 | Alíquota da UF para IBS da localidade de incidência parametrizada no sistema. |
| <span style="color:#c00000">NFSe/infNFSe/IBSCBS/valores/uf/</span> | <span style="color:#c00000">pRedAliqUF</span> | <span style="color:#c00000">E</span> | <span style="color:#c00000">N</span> | <span style="color:#c00000">1-1</span> | <span style="color:#c00000">1-3V2</span> | <span style="color:#c00000">Percentual de redução de alíquota estadual.</span> |
| NFSe/infNFSe/IBSCBS/valores/uf/ | pAliqEfetUF | E | N | 1-1 | 1-2V2 | pAliqEfetUF = pIBSUF x pRedAliqUF<br><br>Se pRedAliqUF não for informado na DPS, então pAliqEfetUF é a própria pIBSUF. |
| NFSe/infNFSe/IBSCBS/valores/uf/ | vTribOpUF | E | N | 1-1 | 1-15V2 | Valor do tributo bruto da Operação para IBS Estadual.<br><br>vTribOpUF = vBC x pIBSUF. |
| <span style="color:#c00000">**NFSe/infNFSe/IBSCBS/valores/**</span> | <span style="color:#c00000">**mun**</span> |  |  |  |  | <span style="color:#c00000">**Grupo de Informações relativas aos valores do IBS Municipal**</span> |
| NFSe/infNFSe/IBSCBS/valores/mun/ | pIBSMun | E | N | 1-1 | 1-2V2 | Alíquota da UF para IBS da localidade de incidência parametrizada no sistema. |
| <span style="color:#c00000">NFSe/infNFSe/IBSCBS/valores/mun/</span> | <span style="color:#c00000">pRedAliqMun</span> | <span style="color:#c00000">E</span> | <span style="color:#c00000">N</span> | <span style="color:#c00000">1-1</span> | <span style="color:#c00000">1-3V2</span> | <span style="color:#c00000">Percentual de redução de alíquota estadual.</span> |
| NFSe/infNFSe/IBSCBS/valores/mun/ | pAliqEfetMun | E | N | 1-1 | 1-2V2 | pAliqEfetMun = pIBSMun x pRedAliqMun<br><br>Se pRedAliqMun não for informado na DPS, então pAliqEfetMun é a própria pIBSMun. |
| NFSe/infNFSe/IBSCBS/valores/mun/ | vTribOpMun | E | N | 1-1 | 1-15V2 | Valor do tributo bruto da Operação para o IBS Municipal.<br><br>vTribOpMun = vBC x pIBSMun. |
| <span style="color:#c00000">**NFSe/infNFSe/IBSCBS/valores/**</span> | <span style="color:#c00000">**fed**</span> |  |  |  |  | <span style="color:#c00000">**Grupo de Informações relativas aos valores da CBS**</span> |
| NFSe/infNFSe/IBSCBS/valores/fed/ | pCBS | E | N | 1-1 | 1-2V2 | Alíquota da UF para IBS da localidade de incidência parametrizada no sistema. |
| <span style="color:#c00000">NFSe/infNFSe/IBSCBS/valores/fed/</span> | <span style="color:#c00000">pRedAliqCBS</span> | <span style="color:#c00000">E</span> | <span style="color:#c00000">N</span> | <span style="color:#c00000">1-1</span> | <span style="color:#c00000">1-3V2</span> | <span style="color:#c00000">Percentual da redução de alíquota.</span> |
| NFSe/infNFSe/IBSCBS/valores/fed/ | pAliqEfetCBS | E | N | 1-1 | 1-2V2 | pAliqEfetCBS = pCBS x pRedAliqCBS<br><br>Se pRedAliqCBS não for informado na DPS, então pAliqEfetCBS é a própria pCBS. |
| NFSe/infNFSe/IBSCBS/valores/fed/ | vTribOpCBS | E | N | 1-1 | 1-15V2 | Valor do tributo bruto da Operação para a CBS.<br><br>vTribOpCBS = vBC x pCBS. |

<!-- REVISAR p.11: descrição de pRedAliqMun diz 'estadual' (provável erro no original para 'municipal'); transcrito como no original -->

<!-- REVISAR p.11: as descrições de pIBSMun (grupo municipal) e pCBS (grupo da CBS) repetem 'Alíquota da UF para IBS' (provável cópia do grupo estadual); transcrito como no original -->
