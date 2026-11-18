<!-- p.08 -->

# 2.1.3 Grupo de Informações Relativas ao Serviço Prestado para IBS e CBS

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/** | **serv** | **G** | **G** | **1-1** | **-** | **Grupo de informações relativas ao serviço prestado para IBS/CBS.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/serv/ | modoPrestServ | E | C | 1-1 | 1 | Modo de prestação do serviço:<br><br>1 - Presencial;<br>2 - Não presencial; |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/serv/ | clocalPrestServ | CE | N | 1-1 | 7 | Código da localidade da prestação do serviço. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/serv/ | cPaisPrestServ | CE | C | 1-1 | 2 | Código do país onde ocorreu a prestação do serviço.<br>(Tabela de Países ISO) |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/serv/ | cCIB | E | C | 0-1 | 8 | Cadastro de imóveis. Obrigatório para construção civil. |
| <span style="color:#c00000">**NFSe/infNFSe/DPS/infDPS/IBSCBS/serv/**</span> | <span style="color:#c00000">**gCompraGov**</span> | <span style="color:#c00000">**G**</span> | <span style="color:#c00000">**-**</span> | <span style="color:#c00000">**0-1**</span> | <span style="color:#c00000">**-**</span> | <span style="color:#c00000">**Grupo de informações de compras governamentais relacionadas aos tributos IBS / CBS**</span> |
| <span style="color:#c00000">NFSe/infNFSe/DPS/infDPS/IBSCBS/serv/gCompraGov/</span> | <span style="color:#c00000">indCompGov</span> | <span style="color:#c00000">E</span> | <span style="color:#c00000">N</span> | <span style="color:#c00000">0-1</span> | <span style="color:#c00000">1</span> | <span style="color:#c00000">Indicador de compra governamental<br>0 - Não;<br>1 - Sim;</span> |

<!-- REVISAR p.08: na linha 'serv' o campo TIPO aparece como 'G' no original (provável erro; a linha é grupo, esperado '-'); transcrito como no original -->
