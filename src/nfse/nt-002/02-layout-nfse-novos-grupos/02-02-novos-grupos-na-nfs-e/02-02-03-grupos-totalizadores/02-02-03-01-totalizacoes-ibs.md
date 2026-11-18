# 2.2.3.1 Grupo de Informações Relativas às Totalizações do IBS

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/IBSCBS/totCIBS/** | **gIBS** | **G** | **-** | **1-1** | **-** | **Grupo de totalizadores referentes ao IBS** |
| <span style="color:#c00000">NFSe/infNFSe/IBSCBS/totCIBS/gIBS/</span> | <span style="color:#c00000">vCredPresIBS</span> | <span style="color:#c00000">E</span> | <span style="color:#c00000">N</span> | <span style="color:#c00000">1-1</span> | <span style="color:#c00000">1-15V2</span> | <span style="color:#c00000">Valor do Crédito Presumido.<br><br>vCredPresIBS = vBC x pCredPresIBS</span> |
| **NFSe/infNFSe/IBSCBS/totCIBS/gIBS/** | **gIBSUFTot** | **G** | **-** | **1-1** | **-** | **Grupo de valores referentes ao IBS Estadual** |
| NFSe/infNFSe/IBSCBS/totCIBS/gIBS/gIBSUFTot/ | vDifUF | E | N | 1-1 | 1-15V2 | Total do Diferimento estadual.<br><br>vDifUF = (vBC x pDifUF) |
| NFSe/infNFSe/IBSCBS/totCIBS/gIBS/gIBSUFTot/ | vDesonUF | E | N | 1-1 | 1-15V2 | Total valor desonerado estadual.<br><br>vDesonUF = (vBC x pAliqUF) - (vBC x pAliqEfetUF) |
| NFSe/infNFSe/IBSCBS/totCIBS/gIBS/gIBSUFTot/ | vIBSUF | E | N | 1-1 | 1-15V2 | Total valor do IBS estadual.<br><br>vIBSUF = vBC x (pIBSUF ou pAliqEfetUF) - (vCredPresIBS + vDifUF + vDevTribUF) |
| **NFSe/infNFSe/IBSCBS/totCIBS/gIBS/** | **gIBSMunTot** | **G** | **-** | **1-1** | **-** | **Grupo de valores referentes ao IBS Municipal** |
| NFSe/infNFSe/IBSCBS/totCIBS/gIBS/gIBSMunTot/ | vDifMun | E | N | 1-1 | 1-15V2 | Total do Diferimento municipal.<br><br>vDifMun = (vBC x pDifMun) |
| NFSe/infNFSe/IBSCBS/totCIBS/gIBS/gIBSMunTot/ | vDesonMun | E | N | 1-1 | 1-15V2 | Total valor desonerado municipal.<br><br>vDesonMun = (vBC x pAliqMun) - (vBC x pAliqEfetMun) |
| NFSe/infNFSe/IBSCBS/totCIBS/gIBS/gIBSMunTot/ | vIBSMun | E | N | 1-1 | 1-15V2 | Total valor do IBS municipal.<br><br>vIBSMun = vBC x (pIBSMun ou pAliqEfetMun) - (vCredPresIBS + vDifMun + vDevTribMun) |
| NFSe/infNFSe/IBSCBS/totCIBSSel/gIBS/ | vIBSTot | E | N | 1-1 | 1-15V2 | Total Valor do IBS Total.<br><br>vIBSTot = vIBSUF + vIBSMun |

<!-- REVISAR p.12: o caminho da linha vIBSTot usa 'totCIBSSel' enquanto as demais linhas de totalização usam 'totCIBS' (inconsistência do original); transcrito como no original -->
