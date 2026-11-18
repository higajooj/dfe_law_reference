<!-- p.15 -->

# 2.2.3 Grupos Totalizadores

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/IBSCBS/** | **totCIBS** | **G** | **-** | **1-1** | **-** | **Grupo de Totalizadores** |
| NFSe/infNFSe/IBSCBS/totCIBS/ | vTotNF | E | N | 1-1 | 1-15V2 | <mark>Valor Total da NF considerando os impostos por fora: IBS e CBS.<br>O IBS e a CBS são por fora, por isso seus valores devem ser adicionados ao valor total da NF.<br><br>vTotNF = vLiq (em 2026)<br><br>vTotNF = vLiq + vCBS + vIBSTot (a partir de 2027)</mark> |
| **NFSe/infNFSe/IBSCBS/totCIBS/** | **gTribRegular** | **G** | **-** | **0-1** | **-** | **Grupo de informações de tributação regular** |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribRegular/ | <mark>pAliqEfeRegIBSUF</mark> | <mark>E</mark> | N | 1-1 | 1-2V2 | <mark>Alíquota efetiva de tributação regular do IBS estadual</mark> |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribRegular/ | <mark>vTribRegIBSUF</mark> | <mark>E</mark> | N | 1-1 | 1-15V2 | <mark>Valor da tributação regular do IBS estadual.<br><br>vTribRegIBSUF = vBC x pAliqEfeRegIBSUF</mark> |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribRegular/ | <mark>pAliqEfeRegIBSMun</mark> | <mark>E</mark> | N | 1-1 | 1-2V2 | <mark>Alíquota efetiva de tributação regular do IBS municipal</mark> |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribRegular/ | <mark>vTribRegIBSMun</mark> | <mark>E</mark> | N | 1-1 | 1-15V2 | <mark>Valor da tributação regular do IBS municipal.<br><br>vTribRegIBSMun = vBC x pAliqEfeRegIBSMun</mark> |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribRegular/ | <mark>pAliqEfeRegCBS</mark> | <mark>E</mark> | N | 1-1 | 1-2V2 | <mark>Alíquota efetiva de tributação regular da CBS</mark> |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribRegular/ | <mark>vTribRegCBS</mark> | <mark>E</mark> | N | 1-1 | 1-15V2 | <mark>Valor da tributação regular da CBS.<br><br>vTribRegCBS = vBC x pAliqEfeRegCBS</mark> |
| **NFSe/infNFSe/IBSCBS/totCIBS/** | **gTribCompraGov** | **G** | **-** | **0-1** | **-** | **Grupo de informações da composição do valor do IBS e da CBS em compras governamentais** |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribCompraGov/ | <mark>pIBSUF</mark> | <mark>E</mark> | N | 1-1 | 1-2V2 | <mark>Alíquota do IBS de competência do Estado</mark> |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribCompraGov/ | <mark>vIBSUF</mark> | <mark>E</mark> | N | 1-1 | 1-15V2 | <mark>Valor do Tributo do IBS da UF calculado</mark> |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribCompraGov/ | <mark>pIBSMun</mark> | <mark>E</mark> | N | 1-1 | 1-2V2 | <mark>Alíquota do IBS de competência do Município</mark> |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribCompraGov/ | <mark>vIBSMun</mark> | <mark>E</mark> | N | 1-1 | 1-15V2 | <mark>Valor do Tributo do IBS do Município calculado</mark> |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribCompraGov/ | <mark>pCBS</mark> | <mark>E</mark> | N | 1-1 | 1-2V2 | <mark>Alíquota da CBS</mark> |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribCompraGov/ | <mark>vCBS</mark> | <mark>E</mark> | N | 1-1 | 1-15V2 | <mark>Valor do Tributo da CBS calculado</mark> |
