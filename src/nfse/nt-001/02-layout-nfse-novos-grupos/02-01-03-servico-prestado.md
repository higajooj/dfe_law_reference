<!-- p.07 -->

# 2.1.3 Grupo de Informações Relativas ao Serviço Prestado para IBS, CBS e IS

<!-- REVISAR p.07: na linha do grupo "serv", o campo TIPO aparece como "G" no original (os demais grupos trazem "-"); transcrito literalmente, confirmar -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/** | **serv** | **G** | **G** | **1-1** | **-** | **Grupo de informações relativas ao serviço prestado para IBS/CBS e Imposto Seletivo** |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/serv/ | modoPrestServ | E | C | 1-1 | 1 | Modo de prestação do serviço:<br><br>1 - Presencial;<br>2 - Não presencial; |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/serv/ | localPrestServ | CE | N | 1-1 | 7 | Código da localidade da prestação do serviço. |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/serv/ | cPaisPrestServ | CE | C | 1-1 | 2 | Código do país onde ocorreu a prestação do serviço.<br>(Tabela de Países ISO) |
| NFSe/infNFSe/DPS/infDPS/IBSCBSSEL/serv/ | cCIB | E | C | 0-1 | 8 | Cadastro de imóveis. Obrigatório para construção civil. |
