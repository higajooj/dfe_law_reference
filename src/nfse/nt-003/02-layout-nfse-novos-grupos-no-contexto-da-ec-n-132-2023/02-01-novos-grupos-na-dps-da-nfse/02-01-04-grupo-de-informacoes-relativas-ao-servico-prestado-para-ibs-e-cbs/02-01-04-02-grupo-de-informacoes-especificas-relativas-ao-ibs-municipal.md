# 2.1.4.2 (REMOVIDO) ~~Grupo de Informações Específicas Relativas ao IBS Municipal~~

> **Revogado/Descontinuado:** seção removida do layout nesta versão (“(REMOVIDO)” no original); título e linhas estão riscados.

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/~~ | ~~gIBSMun~~ | ~~G~~ | ~~-~~ | ~~1-1~~ | ~~-~~ | ~~Grupo de informações relacionados ao IBS para o Município~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSMun/~~ | ~~gDif~~ | ~~G~~ | ~~-~~ | ~~0-1~~ | ~~-~~ | ~~Grupo de informações relacionadas ao diferimento para o Município~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSMun/gDif/~~ | ~~pDifMun~~ | ~~E~~ | ~~N~~ | ~~1-1~~ | ~~1-3V2~~ | ~~Percentual de diferimento municipal.~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSMun/~~ | ~~gDevTrib~~ | ~~G~~ | ~~-~~ | ~~0-1~~ | ~~-~~ | ~~Grupo de informações relacionadas à devolução tributária para o Município~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSMun/gDevol/~~ <!-- REVISAR p.12: o caminho do campo traz "gDevol" enquanto o grupo pai se chama "gDevTrib" no original (transcrito como está) --> | ~~vDevTribMun~~ | ~~E~~ | ~~N~~ | ~~1-1~~ | ~~15V2~~ | ~~Devolução personalizada do IBS municipal.~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSMun/~~ | <mark>~~gDeson~~</mark> | ~~G~~ | ~~-~~ | ~~0-1~~ | ~~-~~ | ~~Grupo de informações relacionadas à desoneração para o Município~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSMun/gDeson/~~ | ~~cstMunDeson~~ | ~~E~~ | ~~N~~ | ~~1-1~~ | ~~3~~ | ~~Código de Situação tributária municipal de desoneração do IBS.~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSMun/gDeson/~~ | ~~cClassTribMunDeson~~ | ~~E~~ | ~~N~~ | ~~1-1~~ | ~~6~~ | ~~Código de Classificação municipal de desoneração do IBS.~~ |
| ~~NFSe/infNFSe/DPS/infDPS/IBSCBS/valores/trib/gIBSCBS/gIBSMun/gDeson/~~ | ~~pAliqMunDeson~~ | ~~E~~ | ~~N~~ | ~~1-1~~ | ~~2V2~~ | ~~Valor da alíquota municipal de desoneração do IBS.~~ |
