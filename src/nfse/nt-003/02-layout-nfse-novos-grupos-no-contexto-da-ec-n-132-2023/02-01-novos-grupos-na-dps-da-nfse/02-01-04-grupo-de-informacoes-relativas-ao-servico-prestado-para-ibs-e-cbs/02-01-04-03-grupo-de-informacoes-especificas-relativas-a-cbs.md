# 2.1.4.3 (REMOVIDO) ~~Grupo de Informações Específicas Relativas à CBS~~

> **Revogado/Descontinuado:** seção removida do layout nesta versão (“(REMOVIDO)” no original); título e linhas estão riscados.

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/~~ | ~~gCBS~~ | ~~G~~ | ~~-~~ | ~~1-1~~ | ~~-~~ | ~~Grupo de informações relacionadas à CBS~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gCBS/~~ | ~~gCBSCredPres~~ | ~~G~~ | ~~-~~ | ~~0-1~~ | ~~-~~ | ~~Grupo de informações relacionadas ao crédito presumido para a CBS~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gCBS/gCBSCredPres/~~ | <mark>~~cCredPresCBS~~</mark> | ~~E~~ | ~~N~~ | ~~1-1~~ | ~~2~~ | ~~Código de Classificação do Crédito Presumido da CBS.~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gCBS/gCBSCredPres/~~ | ~~pCredPresCBS~~ | ~~E~~ | ~~N~~ | ~~1-1~~ | ~~1-2V2~~ | ~~Percentual do Crédito Presumido da CBS.~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gCBS/~~ | ~~gDif~~ | ~~G~~ | ~~-~~ | ~~0-1~~ | ~~-~~ | ~~Grupo de informações relacionadas ao diferimento para a CBS~~ |

<!-- p.13 -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gCBS/gDif/~~ | ~~pDifCBS~~ | ~~E~~ | ~~N~~ | ~~1-1~~ | ~~1-3V2~~ | ~~Percentual de diferimento da CBS.~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gCBS/~~ | ~~gDevTrib~~ | ~~G~~ | ~~-~~ | ~~0-1~~ | ~~-~~ | ~~Grupo de informações relacionadas à devolução tributária para a CBS~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gCBS/gDevol/~~ <!-- REVISAR p.13: o caminho do campo traz "gDevol" enquanto o grupo pai se chama "gDevTrib" no original (transcrito como está) --> | ~~vDevTribCBS~~ | ~~E~~ | ~~N~~ | ~~1-1~~ | ~~15V2~~ | ~~Devolução personalizada da CBS.~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gCBS/~~ | <mark>~~gDeson~~</mark> | ~~G~~ | ~~-~~ | ~~0-1~~ | ~~-~~ | ~~Grupo de informações da desoneração para a CBS~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gCBS/gDeson/~~ | ~~cstCBSDeson~~ | ~~E~~ | ~~N~~ | ~~1-1~~ | ~~3~~ | ~~Código de Situação tributária de Desoneração da CBS.~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gCBS/gDeson/~~ | ~~cClassTribCBSDeson~~ | ~~E~~ | ~~N~~ | ~~1-1~~ | ~~6~~ | ~~Código de Classificação Tributária de Desoneração da CBS.~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gCBS/gDeson/~~ | ~~pAliqCBSDeson~~ | ~~E~~ | ~~N~~ | ~~1-1~~ | ~~2V2~~ | ~~Valor da alíquota Desoneração da CBS.~~ |
