# 2.2.1 Grupo de Informações Comuns Relativas ao IBS e à CBS

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/** | **IBSCBS** | **G** | **-** | **1-1** | **-** | **Grupo de informações geradas pelo sistema referentes IBS e à CBS** |
| NFSe/infNFSe/IBSCBS/ | <mark>cLocalidadeIncid</mark> | <mark>E</mark> | N | 1-1 | 7 | <mark>Código IBGE da localidade de incidência do IBS/CBS (local da operação).</mark> |
| NFSe/infNFSe/IBSCBS/ | xLocalidadeIncid | E | C | 1-1 | 600 | Nome da localidade de incidência do IBS/CBS. |
| NFSe/infNFSe/IBSCBS/ | <mark>xIndOp</mark> | <mark>E</mark> | C | 1-1 | 500 | <mark>Descrição do código indicador da operação de fornecimento, conforme tabela “código indicador de operação”</mark> |

<!-- p.14 -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/IBSCBS/ | xCST | E | C | 1-1 | 600 | Descrição do Código de Situação Tributária do IBS/CBS. |
| NFSe/infNFSe/IBSCBS/ | xCClassTrib | E | C | 1-1 | 600 | Descrição do Código de Classificação Tributária do IBS/CBS |
| NFSe/infNFSe/IBSCBS/ | <mark>pRedutor</mark> | <mark>E</mark> | C <!-- REVISAR p.14: tipo "C" transcrito como consta no original para campo percentual --> | 1-1 | 1-2V2 | <mark>Percentual de redução de aliquota em compra governamental <!-- REVISAR p.14: descrição cortada na borda da página no original ("compra governament"); completar a partir da versão oficial --></mark> |
