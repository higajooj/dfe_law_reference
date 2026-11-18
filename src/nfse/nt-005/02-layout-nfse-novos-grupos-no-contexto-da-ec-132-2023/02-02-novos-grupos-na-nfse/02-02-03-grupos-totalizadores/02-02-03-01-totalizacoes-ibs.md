<!-- p.15 -->

# 2.2.3.1 Grupo de Informações Relativas às Totalizações do IBS

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/IBSCBS/totCIBS/** | **gIBS** | **G** | **-** | **1-1** | **-** | **Grupo de totalizadores referentes ao IBS** |
| NFSe/infNFSe/IBSCBS/totCIBS/gIBS/ | vIBSTot | E | N | 1-1 | 1-15V2 | Valor total do IBS.<br><br>vIBSTot = vIBSUF + vIBSMun |
| **NFSe/infNFSe/IBSCBS/totCIBS/gIBS/** | **gIBSCredPres** | **G** | **-** | **0-1** | **-** | **Grupo de valores referentes ao crédito presumido para IBS** |
| NFSe/infNFSe/IBSCBS/totCIBS/gIBS/gIBSCredPres/ | pCredPresIBS | E | N | 1-1 | 1-2V2 | Alíquota do crédito presumido para o IBS |
| NFSe/infNFSe/IBSCBS/totCIBS/gIBS/gIBSCredPres/ | vCredPresIBS | E | N | 1-1 | 1-15V2 | Valor do Crédito Presumido para o IBS<br><br>vCredPresIBS = vBC x pCredPresIBS |
| **NFSe/infNFSe/IBSCBS/totCIBS/gIBS/** | **gIBSUFTot** | **G** | **-** | **1-1** | **-** | **Grupo de valores referentes ao IBS Estadual** |
| NFSe/infNFSe/IBSCBS/totCIBS/gIBS/gIBSUFTot/ | vDifUF | E | N | <span style="background-color:#f4b6ee">0-1</span> | 1-15V2 | Total do Diferimento do IBS estadual.<br><br>vDifUF = vIBSUF x pDifUF |
| NFSe/infNFSe/IBSCBS/totCIBS/gIBS/gIBSUFTot/ | vIBSUF | E | N | 1-1 | 1-15V2 | Total valor do IBS estadual.<br><br>vIBSUF = vBC x (pIBSUF ou pAliqEfetUF) |
| **NFSe/infNFSe/IBSCBS/totCIBS/gIBS/** | **gIBSMunTot** | **G** | **-** | **1-1** | **-** | **Grupo de valores referentes ao IBS Municipal** |
| NFSe/infNFSe/IBSCBS/totCIBS/gIBS/gIBSMunTot/ | vDifMun | E | N | <span style="background-color:#f4b6ee">0-1</span> | 1-15V2 | Total do Diferimento do IBS municipal.<br><br>vDifMun = vIBSMun x pDifMun |
| NFSe/infNFSe/IBSCBS/totCIBS/gIBS/gIBSMunTot/ | vIBSMun | E | N | 1-1 | 1-15V2 | Total valor do IBS municipal.<br><br>vIBSMun = vBC x (pIBSMun ou pAliqEfetMun) |
