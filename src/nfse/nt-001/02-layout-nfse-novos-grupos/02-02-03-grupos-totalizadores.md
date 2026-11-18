<!-- p.10 -->

# 2.2.3 Grupos Totalizadores

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/IBSCBSSEL/** | **totCIBSSel** | **G** | **-** | **1-1** | **-** | **Grupo de Totalizadores** |
| NFSe/infNFSe/IBSCBSSEL/totCIBSSel/ | vBCCIBS | E | N | 1-1 | 1-15V2 | Valor total da BC do IBS e da CBS. |
| NFSe/infNFSe/IBSCBSSEL/totCIBSSel/ | vTotNF | E | N | 1-1 | 1-15V2 | Valor Total da NF considerando os impostos por fora IBS, CBS e IS.<br>O IBS, a CBS e o IS são por fora, por isso seus valores devem ser adicionados ao valor total da NF.<br><br>vTotNF = vCBS + vIBSTot + vImpSel; |
