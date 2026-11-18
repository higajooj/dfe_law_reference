<!-- p.11 -->

# 2.2.3.2 Grupo de Informações Relativas às Totalizações do IBS

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/IBSCBSSEL/totCIBSSel/** | **gIBS** | **G** | **-** | **1-1** | **-** | **Grupo de valores referentes ao IBS / CBS** |
| **NFSe/infNFSe/IBSCBSSEL/totCIBSSel/gIBS/** | **gIBSUFTot** | **G** | **-** | **1-1** | **-** | **Grupo de valores referentes ao IBS Estadual** |
| NFSe/infNFSe/IBSCBSSEL/totCIBSSel/gIBS/gIBSUFTot/ | vCredPresUF | E | N | 1-1 | 1-15V2 | Total do Credito Presumido estadual. |
| NFSe/infNFSe/IBSCBSSEL/totCIBSSel/gIBS/gIBSUFTot/ | vDifUF | E | N | 1-1 | 1-15V2 | Total do Diferimento estadual. |
| NFSe/infNFSe/IBSCBSSEL/totCIBSSel/gIBS/gIBSUFTot/ | vDesonUF | E | N | 1-1 | 1-15V2 | Total valor desonerado estadual.<br><br>vDesonUF = vBC x pAliqUFDeson |
| NFSe/infNFSe/IBSCBSSEL/totCIBSSel/gIBS/gIBSUFTot/ | vIBSUF | E | N | 1-1 | 1-15V2 | Valor total do IBS estadual.<br><br>vIBSUF = (vBCCIBS - vCredPresUF - vDifUF - vDevTribUF - vDesonUF) x pAliqEfetUF |
| **NFSe/infNFSe/IBSCBSSEL/totCIBSSel/gIBS/** | **gIBSMunTot** | **G** | **-** | **1-1** | **-** | **Grupo de valores referentes ao IBS Municipal** |
| NFSe/infNFSe/IBSCBSSEL/totCIBSSel/gIBS/gIBSMunTot/ | vCredPresMun | E | N | 1-1 | 1-15V2 | Total do Credito Presumido municipal. |
| NFSe/infNFSe/IBSCBSSEL/totCIBSSel/gIBS/gIBSMunTot/ | vDifMun | E | N | 1-1 | 1-15V2 | Total do Diferimento municipal. |
| NFSe/infNFSe/IBSCBSSEL/totCIBSSel/gIBS/gIBSMunTot/ | vDesonMun | E | N | 1-1 | 1-15V2 | Total valor desonerado municipal.<br><br>vDesonMun = vBC x pAliqMunDeson |
| NFSe/infNFSe/IBSCBSSEL/totCIBSSel/gIBS/gIBSMunTot/ | vIBSMun | E | N | 1-1 | 1-15V2 | Total valor do IBS municipal.<br><br>vIBSMun = (vBCCIBS - vCredPresMun - vDifMun - vDevTribMun - vDesonMun) x pAliqEfetMun |
| NFSe/infNFSe/IBSCBSSEL/totCIBSSel/ | vIBSTot | E | N | 1-1 | 1-15V2 | Total Valor do IBS Total.<br><br>vIBSTot = vIBSUF + vIBSMun |
