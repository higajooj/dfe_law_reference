<!-- p.08 -->

# 2.1.4 Grupo de Informações Relativas aos Valores do Serviço Prestado para IBS, CBS e IS

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/** | **valores** | **G** | **-** | **1-1** | **-** | **Grupo de informações relativos aos valores do serviço prestado para IBS, CBS e Imposto Seletivo** |
| **NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/** | **trib** | **G** | **-** | **1-1** | **-** | **Grupo de informações relacionadas aos tributos IBS, CBS e Imposto Seletivo** |
| **NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/** | **seletivo** | **G** | **-** | **0-1** | **-** | **Grupo de informações declaradas pelo emitente referentes ao Imposto Seletivo.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/seletivo/ | cstImpSel | E | N | 1-1 | 3 | Código de Situação Tributária do Imposto Seletivo. |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/seletivo/ | cClassTribImpSel | E | N | 1-1 | 6 | Código de Classificação Tributária do Imposto Seletivo. |
| **NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/seletivo/** | **gImpSel** | **G** | **-** | **0-1** | **-** | **Grupo de informações de medida e quantidade relacionadas ao Imposto Seletivo** |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/seletivo/gImpSel/ | uTrib | E | N | 0-1 | 1-3V4 | Unidade de medida apropriada especificada em Lei Ordinária para fins de apuração do Imposto Seletivo. |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/seletivo/gImpSel/ | qTrib | E | N | 0-1 | 1-11V4 | Quantidade com base no campo uTrib informado. |
| **NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/** | **gIBSCBS** | **G** | **-** | **1-1** | **-** | **Grupo de informações relacionadas ao IBS e à CBS** |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/ | cstIBSCBS | E | N | 1-1 | 3 | Código de Situação Tributária do IBS e da CBS |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/ | cClassTribIBSCBS | E | N | 1-1 | 6 | Código de classificação Tributária do IBS e da CBS |
