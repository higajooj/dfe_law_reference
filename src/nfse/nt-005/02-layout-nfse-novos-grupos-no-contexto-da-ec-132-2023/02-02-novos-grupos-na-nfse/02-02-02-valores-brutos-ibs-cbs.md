# 2.2.2 Grupo de Informações de Valores Brutos Relativos ao IBS e à CBS

<!-- REVISAR p.13: descrições de pIBSMun e pCBS repetem “Alíquota da UF para IBS da localidade de incidência parametrizada no sistema” (texto literal do original; possível erro de cópia para o município e para a CBS) -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/IBSCBS/** | **valores** | **G** | **-** | **1-1** | **-** | **Grupo de valores brutos referentes ao IBS e à CBS** |
| <mark>NFSe/infNFSe/IBSCBS/valores/</mark> | <mark>vBC</mark> | <mark>E</mark> | <mark>N</mark> | <mark>1-1</mark> | <mark>1-15V2</mark> | <mark>Valor da base de cálculo (BC) do IBS/CBS antes das reduções para cálculo do tributo bruto.<br><br>vBC = vServ - descIncond – vCalcReeRepRes - <span style="color:#e00000">vCalcDedRedIBSCBS</span> – vISSQN – vPIS - vCOFINS (até 2026)<br><br>ou<br><br>vBC = vServ - descIncond – vCalcReeRepRes – <span style="color:#e00000">vCalcDedRedIBSCBS</span> - vISSQN (até 2032)</mark> |
| NFSe/infNFSe/IBSCBS/valores/ | vCalcReeRepRes | E | N | 0-1 | 1-15V2 | Valor monetário (R$) total relativo ao fornecimento próprio de bens materiais ou relacionados a operações de terceiros, objeto de reembolso, repasse ou ressarcimento pelo recebedor, já tributados e aqui referenciados e que não integram da base de cálculo (BC) do ISSQN, do IBS e da CBS. |
| <mark>NFSe/infNFSe/IBSCBS/valores/</mark> | <mark>vCalcDedRedIBSCBS</mark> | <mark>E</mark> | <mark>N</mark> | <mark>0-1</mark> | <mark>1-15V2</mark> | <mark>Valor monetário (R$) total relativo aos valores de dedução e redução da Base de Cálculo do IBS e da CBS referentes às operações de locação, cessão onerosa ou arrendamento de bens imóveis, e serviços médicos.</mark> |
| **NFSe/infNFSe/IBSCBS/valores/** | **uf** | **G** |  |  |  | **Grupo de Informações relativas aos valores do IBS Estadual** |
| NFSe/infNFSe/IBSCBS/valores/uf/ | pIBSUF | E | N | 1-1 | 1-2V2 | Alíquota da UF para IBS da localidade de incidência parametrizada no sistema. |
| NFSe/infNFSe/IBSCBS/valores/uf/ | pRedAliqUF | E | N | 1-1 | 1-3V2 | Percentual de redução de alíquota estadual. |
| NFSe/infNFSe/IBSCBS/valores/uf/ | pAliqEfetUF | E | N | 1-1 | 1-2V2 | pAliqEfetUF = pIBSUF x (1 - pRedAliqUF) x (1 - pRedutor)<br><br>Se pRedAliqUF não for informado na DPS, então pAliqEfetUF é a própria pIBSUF. |
| **NFSe/infNFSe/IBSCBS/valores/** | **mun** | **G** |  |  |  | **Grupo de Informações relativas aos valores do IBS Municipal** |
| NFSe/infNFSe/IBSCBS/valores/mun/ | pIBSMun | E | N | 1-1 | 1-2V2 | Alíquota da UF para IBS da localidade de incidência parametrizada no sistema. |
| NFSe/infNFSe/IBSCBS/valores/mun/ | pRedAliqMun | E | N | 1-1 | 1-3V2 | Percentual de redução de alíquota municipal. |
| NFSe/infNFSe/IBSCBS/valores/mun/ | pAliqEfetMun | E | N | 1-1 | 1-2V2 | pAliqEfetMun = pIBSMun x (1 - pRedAliqMun) x (1 - pRedutor)<br><br>Se pRedAliqMun não for informado na DPS, então pAliqEfetMun é a própria pIBSMun. |
| **NFSe/infNFSe/IBSCBS/valores/** | **fed** | **G** |  |  |  | **Grupo de Informações relativas aos valores da CBS** |
| NFSe/infNFSe/IBSCBS/valores/fed/ | pCBS | E | N | 1-1 | 1-2V2 | Alíquota da UF para IBS da localidade de incidência parametrizada no sistema. |
| NFSe/infNFSe/IBSCBS/valores/fed/ | pRedAliqCBS | E | N | 1-1 | 1-3V2 | Percentual da redução de alíquota. |

<!-- p.14 -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/IBSCBS/valores/fed/ | pAliqEfetCBS | E | N | 1-1 | 1-2V2 | pAliqEfetCBS = pCBS x (1 - pRedAliqCBS) x (1 - pRedutor)<br><br>Se pRedAliqCBS não for informado na DPS, então pAliqEfetCBS é a própria pCBS. |
