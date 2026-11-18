# 2.2.1. Grupo de Informações Comuns Relativas ao IBS e à CBS

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/** | **IBSCBS** | **G** | **-** | **0-1** | **-** | **Grupo de informações geradas pelo sistema referentes ao IBS e à CBS** |
| NFSe/infNFSe/IBSCBS/ | cLocalidadeIncid | E | N | 1-1 | 7 | Código IBGE da localidade de incidência do IBS/CBS (local da operação). |
| NFSe/infNFSe/IBSCBS/ | xLocalidadeIncid | E | C | 1-1 | 600 | Nome da localidade de incidência do IBS/CBS. |
| ~~NFSe/infNFSe/IBSCBS/~~ | ~~xIndOp~~ | ~~E~~ | ~~C~~ | ~~1-1~~ | ~~500~~ | ~~Descrição do código indicador da operação de fornecimento, conforme tabela “código indicador de operação”. *[NT 003]*~~ |
| ~~NFSe/infNFSe/IBSCBS/~~ | ~~xCST~~ | ~~E~~ | ~~C~~ | ~~1-1~~ | ~~600~~ | ~~Descrição do Código de Situação Tributária do IBS/CBS. *[NT 003]*~~ |
| ~~NFSe/infNFSe/IBSCBS/~~ | ~~xCClassTrib~~ | ~~E~~ | ~~C~~ | ~~1-1~~ | ~~600~~ | ~~Descrição do Código de Classificação Tributária do IBS/CBS *[NT 003]*~~ |
| NFSe/infNFSe/IBSCBS/ | pRedutor | E | C | 0-1 | 1-2V2 | Percentual de redução de aliquota em compra governamental. *[NT 002: Ocor.]* |

> **Revogado/Descontinuado:** os campos “xIndOp”, “xCST” e “xCClassTrib” estão riscados no original (linhas em laranja, marcadas como removidas nesta Nota Técnica).
