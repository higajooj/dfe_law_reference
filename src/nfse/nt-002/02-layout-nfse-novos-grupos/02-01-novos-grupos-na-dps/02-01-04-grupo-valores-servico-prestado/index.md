# 2.1.4 Grupo de Informações Relativas aos Valores do Serviço Prestado para IBS e CBS

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/** | **valores** | **G** | **-** | **1-1** | **-** | **Grupo de informações relativas aos valores do serviço prestado para IBS e CBS** |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/** | **trib** | **G** | **-** | **1-1** | **-** | **Grupo de informações relacionados aos tributos IBS e CBS** |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/** | **gIBSCBS** | **G** | **-** | **1-1** | **-** | **Grupo de informações relacionadas ao IBS e à CBS** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/ | cstIBSCBS | E | N | 1-1 | 3 | Código de Situação Tributária do IBS e da CBS |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/ | cClassTribIBSCBS | E | N | 1-1 | 6 | Código de Classificação Tributária do IBS e da CBS |
| <span style="color:#c00000">**NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/**</span> | <span style="color:#c00000">**gIBSCredPres**</span> | <span style="color:#c00000">**G**</span> | <span style="color:#c00000">**-**</span> | <span style="color:#c00000">**1-1**</span> | <span style="color:#c00000">**-**</span> | <span style="color:#c00000">**Grupo de Informações do Crédito Presumido referente ao IBS**</span> |
| <span style="color:#c00000">NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSCredPres/</span> | <span style="color:#c00000">cCredPresIBS</span> | <span style="color:#c00000">E</span> | <span style="color:#c00000">N</span> | <span style="color:#c00000">1-1</span> | <span style="color:#c00000">2</span> | <span style="color:#c00000">Código de Classificação do Crédito Presumido do IBS.</span> |
| <span style="color:#c00000">NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSCredPres/</span> | <span style="color:#c00000">pCredPresIBS</span> | <span style="color:#c00000">E</span> | <span style="color:#c00000">N</span> | <span style="color:#c00000">1-1</span> | <span style="color:#c00000">1-2V2</span> | <span style="color:#c00000">Percentual do Crédito Presumido do IBS.</span> |
