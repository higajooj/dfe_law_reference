# 2.1.4.1 (REMOVIDO) ~~Grupo de Informações Específicas Relativas ao IBS Estadual~~

> **Revogado/Descontinuado:** seção removida do layout nesta versão (“(REMOVIDO)” no original); título e linhas estão riscados.

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/~~ | ~~gIBSUF~~ | ~~G~~ | ~~-~~ | ~~1-1~~ | ~~-~~ | ~~Grupo de informações relacionados ao IBS para o Estado~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSUF/~~ | ~~gDif~~ | ~~G~~ | ~~-~~ | ~~0-1~~ | ~~-~~ | ~~Grupo de informações relacionadas ao diferimento para o Estado~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSUF/gDif/~~ | ~~pDifUF~~ | ~~E~~ | ~~N~~ | ~~1-1~~ | ~~1-3V2~~ | ~~Percentual de diferimento estadual.~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/valores/trib/gIBSCBS/gIBSUF/~~ <!-- REVISAR p.11: caminho grafado "IBSCBSSEL" no original (mantido; possível erro de digitação) --> | ~~gDevTrib~~ | ~~G~~ | ~~-~~ | ~~0-1~~ | ~~-~~ | ~~Grupo de informações relacionados à devolução tributária para o Estado~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSUF/gDevTrib/~~ | ~~vDevTribUF~~ | ~~E~~ | ~~N~~ | ~~1-1~~ | ~~15V2~~ | ~~Devolução personalizada do IBS estadual.~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSUF/~~ | <mark>~~gDeson~~</mark> | ~~G~~ | ~~-~~ | ~~0-1~~ | ~~-~~ | ~~Grupo de informações relacionados à desoneração para o Estado~~ |

<!-- p.12 -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSUF/gDeson/~~ | ~~cstUFDeson~~ | ~~E~~ | ~~N~~ | ~~1-1~~ | ~~3~~ | ~~Código de Situação tributária estadual de Desoneração do IBS.~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSUF/gDeson/~~ | ~~cClassTribUFDeson~~ | ~~E~~ | ~~N~~ | ~~1-1~~ | ~~6~~ | ~~Código de Classificação estadual de Desoneração do IBS.~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSUF/gDeson/~~ | ~~pAliqUFDeson~~ | ~~E~~ | ~~N~~ | ~~1-1~~ | ~~2V2~~ | ~~Valor da alíquota estadual de Desoneração do IBS.~~ |
