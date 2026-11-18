<!-- p.10 -->

# 2.2.2 Grupo de Informações de Valores Brutos Relativos ao IBS e à CBS

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/IBSCBSSEL/IBSCBS/** | **valores** | **G** | **-** | **1-1** | **-** | **Grupo de valores brutos referentes ao IBS / CBS** |
| NFSe/infNFSe/IBSCBSSEL/IBSCBS/valores/ | vBC | E | N | 1-1 | 1-15V2 | Valor da base de cálculo (BC) do IBS/CBS antes das reduções para cálculo do tributo bruto. |
| NFSe/infNFSe/IBSCBSSEL/IBSCBS/valores/ | pIBSUF | E | N | 1-1 | 1-2V2 | Alíquota da UF para IBS da localidade de incidência parametrizada no sistema. |
| NFSe/infNFSe/IBSCBSSEL/IBSCBS/valores/ | pAliqEfetUF | E | N | 1-1 | 1-2V2 | pAliqEfetUF = pIBSUF x pRedAliqUF<br><br>Se pRedAliqUF não for informado na DPS, então pAliqEfetUF é a própria pIBSUF. |
| NFSe/infNFSe/IBSCBSSEL/IBSCBS/valores/ | vTribOpUF | E | N | 1-1 | 1-15V2 | Valor do tributo bruto da Operação para IBS Estadual.<br><br>vTribOpUF = vBC x pIBSUF. |
| NFSe/infNFSe/IBSCBSSEL/IBSCBS/valores/ | pIBSMun | E | N | 1-1 | 1-2V2 | Alíquota da UF para IBS da localidade de incidência parametrizada no sistema. |
| NFSe/infNFSe/IBSCBSSEL/IBSCBS/valores/ | pAliqEfetMun | E | N | 1-1 | 1-2V2 | pAliqEfetMun = pIBSMun x pRedAliqMun<br><br>Se pRedAliqMun não for informado na DPS, então pAliqEfetMun é a própria pIBSMun. |
| NFSe/infNFSe/IBSCBSSEL/IBSCBS/valores/ | vTribOpMun | E | N | 1-1 | 1-15V2 | Valor do tributo bruto da Operação para o IBS Municipal.<br><br>vTribOpMun = vBC x pIBSMun. |
| NFSe/infNFSe/IBSCBSSEL/IBSCBS/valores/ | pCBS | E | N | 1-1 | 1-2V2 | Alíquota da União para a CBS pararametrizada no sistema. |
| NFSe/infNFSe/IBSCBSSEL/IBSCBS/valores/ | pAliqEfetCBS | E | N | 1-1 | 1-2V2 | pAliqEfetCBS = pCBS x pRedAliqCBS<br><br>Se pRedAliqCBS não for informado na DPS, então pAliqEfetCBS é a própria pCBS. |
| NFSe/infNFSe/IBSCBSSEL/IBSCBS/valores/ | vTribOpCBS | E | N | 1-1 | 1-15V2 | Valor do tributo bruto da Operação para a CBS.<br><br>vTribOpCBS = vBC x pCBS. |
