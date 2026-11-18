<!-- p.10 -->

# 2.2.3.1 Grupo de Informações Relativas às Totalizações do Imposto Seletivo

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/IBSCBSSEL/totCIBSSel/** | **gSel** | **G** | **-** | **0-1** | **-** | **Grupo de informações geradas pelo sistema referentes ao Imposto Seletivo** |
| NFSe/infNFSe/IBSCBSSEL/totCIBSSel/gSel/ | vBCImpSel | E | N | 1-1 | 1-15V2 | Base de Cálculo do Imposto Seletivo. |
| NFSe/infNFSe/IBSCBSSEL/totCIBSSel/gSel/ | pImpSel | E | N | 1-1 | 1-2V2 | Alíquota do Imposto Seletivo (percentual). |
| NFSe/infNFSe/IBSCBSSEL/totCIBSSel/gSel/ | pImpSelEspec | E | N | 1-1 | 1-2V2 | Alíquota específica por unidade de medida apropriada. |
| NFSe/infNFSe/IBSCBSSEL/totCIBSSel/gSel/ | vImpSel | E | N | 1-1 | 1-15V2 | Valor do Imposto Seletivo Calculado.<br><br>vImpSel = vBCImpSel x pImpSel<br><br>Observação:<br>Se informa alíquota específica pImpSelEspec, então vImpSel = qTrib * pImpSelEspec; |
