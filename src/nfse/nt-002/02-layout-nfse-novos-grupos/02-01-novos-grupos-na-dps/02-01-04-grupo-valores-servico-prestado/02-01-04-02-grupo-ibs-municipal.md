# 2.1.4.2 Grupo de Informações Específicas Relativas ao IBS Municipal

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/** | **gIBSMun** | **G** | **-** | **1-1** | **-** | **Grupo de informações relacionados ao IBS para o Município** |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSMun/** | **gDif** | **G** | **-** | **0-1** | **-** | **Grupo de informações relacionadas ao diferimento para o Município** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSMun/gDif/ | pDifMun | E | N | 1-1 | 1-3V2 | Percentual de diferimento municipal. |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSMun/** | **gDevTrib** | **G** | **-** | **0-1** | **-** | **Grupo de informações relacionadas à devolução tributária para o Município** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSMun/gDevol/ | vDevTribMun | E | N | 1-1 | 1-15V2 | Devolução personalizada do IBS municipal. |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSMun/** | **gDeson** | **G** | **-** | **0-1** | **-** | **Grupo de informações relacionadas à desoneração para o Município** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSMun/gDeson/ | cstMunDeson | E | N | 1-1 | 3 | Código de Situação tributária municipal de desoneração do IBS. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSMun/gDeson/ | cClassTribMunDeson | E | N | 1-1 | 6 | Código de Classificação municipal de desoneração do IBS. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSMun/gDeson/ | pAliqMunDeson | E | N | 1-1 | 1-2V2 | Valor da alíquota municipal de desoneração do IBS. |
