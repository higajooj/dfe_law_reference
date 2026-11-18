<!-- p.03 -->

# 2.a Inserção do campo “indZFMALC”

Observou-se a necessidade de inclusão de um campo, na Declaração de Prestação de Serviços (DPS), ou seja, declaratório pelo emitente, para constar a indicação de enquadramento nas situações previstas nos artigos 451 e 466 da Lei Complementar (LC) nº 214, de 16 de janeiro de 2025. Nessas situações, o contribuinte terá a alíquota da Contribuição Social sobre Bens e Serviços (CBS) reduzida à zero.

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/** | **IBSCBS** | **G** | **-** | **0-1** | **-** | **Grupo de informações declaradas pelo emitente referentes ao IBS e à CBS** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/ | indZFMALC | E | N | 0-1 | 1 | Indicador da operação de fornecimento favorecido com alíquota zero de CBS (conforme art. 451 e art. 466 da Lei Complementar nº 214/2025)<br><br>0 - Não;<br>1 - Sim. |

> *No original, a linha do campo `indZFMALC` está destacada em amarelo.*
