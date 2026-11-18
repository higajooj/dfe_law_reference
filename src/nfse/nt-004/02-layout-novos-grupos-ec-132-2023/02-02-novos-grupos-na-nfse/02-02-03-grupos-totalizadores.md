# 2.2.3. Grupos Totalizadores

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/IBSCBS/** | **totCIBS** | **G** | **-** | **1-1** | **-** | **Grupo de Totalizadores** |
| NFSe/infNFSe/IBSCBS/totCIBS/ | vTotNF | E | N | 1-1 | 1-15V2 | Valor Total da NF considerando os impostos por fora: IBS e CBS.<br>O IBS e a CBS são por fora, por isso seus valores devem ser adicionados ao valor total da NF.<br><br>vTotNF = vLiq (em 2026)<br><br>vTotNF = vLiq + vCBS + vIBSTot (a partir de 2027) |
| **NFSe/infNFSe/IBSCBS/totCIBS/** | **gTribRegular** | **G** | **-** | **0-1** | **-** | **Grupo de informações de tributação regular** |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribRegular/ | pAliqEfeRegIBSUF | E | N | 1-1 | 1-2V2 | Alíquota efetiva de tributação regular do IBS estadual |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribRegular/ | vTribRegIBSUF | E | N | 1-1 | 1-15V2 | Valor da tributação regular do IBS estadual.<br><br>vTribRegIBSUF = vBC x pAliqEfeRegIBSUF |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribRegular/ | pAliqEfeRegIBSMun | E | N | 1-1 | 1-2V2 | Alíquota efetiva de tributação regular do IBS municipal |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribRegular/ | vTribRegIBSMun | E | N | 1-1 | 1-15V2 | Valor da tributação regular do IBS municipal.<br><br>vTribRegIBSMun = vBC x pAliqEfeRegIBSMun |

<!-- p.18 -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/IBSCBS/totCIBS/gTribRegular/ | pAliqEfeRegCBS | E | N | 1-1 | 1-2V2 | Alíquota efetiva de tributação regular da CBS |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribRegular/ | vTribRegCBS | E | N | 1-1 | 1-15V2 | Valor da tributação regular da CBS.<br><br>vTribRegCBS = vBC x pAliqEfeRegCBS |
| **NFSe/infNFSe/IBSCBS/totCIBS/** | **gTribCompraGov** | **G** | **-** | **0-1** | **-** | **Grupo de informações da composição do valor do IBS e da CBS em compras governamentais** |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribCompraGov/ | pIBSUF | E | N | 1-1 | 1-2V2 | Alíquota do IBS de competência do Estado |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribCompraGov/ | vIBSUF | E | N | 1-1 | 1-15V2 | Valor do Tributo do IBS da UF calculado |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribCompraGov/ | pIBSMun | E | N | 1-1 | 1-2V2 | Alíquota do IBS de competência do Município |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribCompraGov/ | vIBSMun | E | N | 1-1 | 1-15V2 | Valor do Tributo do IBS do Município calculado |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribCompraGov/ | pCBS | E | N | 1-1 | 1-2V2 | Alíquota da CBS |
| NFSe/infNFSe/IBSCBS/totCIBS/gTribCompraGov/ | vCBS | E | N | 1-1 | 1-15V2 | Valor do Tributo da CBS calculado |
