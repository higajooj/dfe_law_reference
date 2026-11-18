<!-- p.08 -->

# 2.1.4.1 Grupo de Informações Específicas Relativas ao IBS Estadual

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/** | **gIBSUF** | **G** | **-** | **1-1** | **-** | **Grupo de informações relacionadas ao IBS para o Estado** |
| **NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSUF/** | **gCredPres** | **G** | **-** | **0-1** | **-** | **Grupo de informações relacionadas ao crédito presumido para o Estado** |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSUF/gCredPres/ | pCredPresUF | E | N | 1-1 | 1-3V2 | Percentual de crédito presumido estadual. |
| **NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSUF/** | **gDif** | **G** | **-** | **0-1** | **-** | **Grupo de informações relacionadas ao diferimento para o Estado** |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSUF/gDif/ | pDifUF | E | N | 1-1 | 1-3V2 | Percentual de diferimento estadual. |
| **NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSUF/** | **gDevTrib** | **G** | **-** | **0-1** | **-** | **Grupo de informações relacionadas à devolução tributária para o Estado** |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSUF/gDevol/ | vDevTribUF | E | N | 1-1 | 1-15V2 | Devolução personalizada do IBS estadual. |
| **NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSUF/** | **gRed** | **G** | **-** | **0-1** | **-** | **Grupo de informações relacionadas à redução para o Estado** |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSUF/gRed/ | pRedAliqUF | E | N | 1-1 | 1-3V2 | Percentual de redução de alíquota estadual. |
| **NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSUF/** | **gDeson** | **G** | **-** | **0-1** | **-** | **Grupo de informações relacionadas à desoneração para o Estado** |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSUF/gDeson/ | cstUFDeson | E | N | 1-1 | 3 | Código de Situação tributária estadual de Desoneração do IBS. |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSUF/gDeson/ | cClassTribUFDeson | E | N | 1-1 | 6 | Código de Classificação estadual de Desoneração do IBS. |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSUF/gDeson/ | pAliqUFDeson | E | N | 1-1 | 1-2V2 | Valor da alíquota estadual de Desoneração do IBS. |
