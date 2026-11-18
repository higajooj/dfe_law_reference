<!-- p.11 -->

# 2.2.1 Grupo de Informações Comuns Relativas ao IBS e à CBS

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/** | **IBSCBS** | **G** | **-** | **1-1** | **-** | **Grupo de informações geradas pelo sistema referentes ao IBS e à CBS** |
| NFSe/infNFSe/IBSCBS/ | xLocalidadeIncid | E | C | 1-1 | 600 | Nome da localidade de incidência do IBS/CBS. |
| NFSe/infNFSe/IBSCBS/ | xCSTIBSCBS | E | C | 1-1 | 600 | Descrição do Código de Situação Tributária do IBS/CBS. |
| NFSe/infNFSe/IBSCBS/ | xClassTribIBSCBS | E | C | 1-1 | 600 | Descrição do Código de Classificação Tributária do IBS/CBS |
| <span style="color:#c00000">**NFSe/infNFSe/IBSCBS/**</span> | <span style="color:#c00000">**compGov**</span> | <span style="color:#c00000">**G**</span> | <span style="color:#c00000">**-**</span> | <span style="color:#c00000">**0-1**</span> | <span style="color:#c00000">**-**</span> | <span style="color:#c00000">**Grupo referente a compras governamentais.**</span> |
| <span style="color:#c00000">NFSe/infNFSe/IBSCBS/compGov/</span> | <span style="color:#c00000">tpCompraGov</span> | <span style="color:#c00000">E</span> | <span style="color:#c00000">C</span> | <span style="color:#c00000">1-1</span> | <span style="color:#c00000">1</span> | <span style="color:#c00000">Tipo do ente da compra governamental:<br><br>1 - União;<br>2 - Estados;<br>3 - Distrito Federal;<br>4 - Municípios;</span> |
| <span style="color:#c00000">NFSe/infNFSe/IBSCBS/compGov/</span> | <span style="color:#c00000">pRedutor</span> | <span style="color:#c00000">E</span> | <span style="color:#c00000">C</span> | <span style="color:#c00000">1-1</span> | <span style="color:#c00000">1-2V2</span> | <span style="color:#c00000">Percentual de redução de alíquota em compra governamental.</span> |

<!-- REVISAR p.11: caminhos XML sem o prefixo 'N' de 'NFSe' no original (cortado na margem); transcrito como 'NFSe/infNFSe/IBSCBS/...' -->
