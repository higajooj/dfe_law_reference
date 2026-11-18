<!-- p.08 -->

# 2.1.4.2 Grupo de Informações Específicas Relativas ao IBS Municipal

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/** | **gIBSMun** | **G** | **-** | **1-1** | **-** | **Grupo de informações relacionadas ao IBS para o Município** |
| **NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSMun/** | **gCredPres** | **G** | **-** | **0-1** | **-** | **Grupo de informações relacionadas ao crédito presumido para o Município** |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSMun/gCredPres/ | pCredPresMun | E | N | 1-1 | 1-3V2 | Percentual de crédito presumido municipal. |
| **NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSMun/** | **gDif** | **G** | **-** | **0-1** | **-** | **Grupo de informações relacionadas ao diferimento para o Município** |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSMun/gDif/ | pDifMun | E | N | 1-1 | 1-3V2 | Percentual de diferimento municipal. |
| **NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSMun/** | **gDevTrib** | **G** | **-** | **0-1** | **-** | **Grupo de informações relacionadas à devolução tributária para o Município** |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSMun/gDevol/ | vDevTribMun | E | N | 1-1 | 1-15V2 | Devolução personalizada do IBS municipal. |
| **NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSMun/** | **gRed** | **G** | **-** | **0-1** | **-** | **Grupo de informações relacionadas à redução para o Município** |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSMun/gRed/ | pRedAliqMun | E | N | 1-1 | 1-3V2 | Percentual de redução de alíquota municipal. |
| **NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSMun/** | **gDeson** | **G** | **-** | **0-1** | **-** | **Grupo de informações relacionadas à desoneração para o Município** |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSMun/gDeson/ | cstMunDeson | E | N | 1-1 | 3 | Código de Situação tributária municipal de Desoneração do IBS. |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSMun/gDeson/ | cClassTribMunDeson | E | N | 1-1 | 6 | Código de Classificação municipal de Desoneração do IBS. |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSMun/gDeson/ | pAliqMunDeson | E | N | 1-1 | 1-2V2 | Valor da alíquota municipal de Desoneração do IBS. |
