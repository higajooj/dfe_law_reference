# 2.1.3 Grupo de Informações de Operações Relacionadas a Bens Imóveis, Exceto Obras

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/** | **imovel** | **G** | **-** | **0-1** | **-** | **Grupo de informações de operações relacionadas a bens imóveis, exceto obras.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/ | <mark>inscImobFisc</mark> | E | C | 0-1 | 1-30 | <mark>Inscrição imobiliária fiscal (código fornecido pela prefeitura para a identificação da obra ou para fins de recolhimento do IPTU)</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/ | <mark>cCIB</mark> | <mark>CE</mark> | C | 1-1 | 8 | <mark>Código do Cadastro Imobiliário Brasileiro - CIB</mark> |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/** | **end** | **CG** | **-** | **1-1** | **-** | **Grupo de informações do endereço do imóvel.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/end/ | <mark>CEP</mark> | <mark>CE</mark> | C | 1-1 | 8 | <mark>Código de Endereçamento Postal numérico do endereço nacional do imóvel.</mark> |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/end/** | **endExt** | **CG** | **-** | **1-1** | **-** | **Grupo de informações descritivas do endereço no exterior do imóvel.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/end/endExt/ | <mark>cEndPost</mark> | <mark>E</mark> | C | 1-1 | 1-11 | <mark>Código de Endereçamento Postal alfanumérico do endereço no exterior do imóvel.</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/end/endExt/ | <mark>xCidade</mark> | <mark>E</mark> | C | 1-1 | 1-60 | <mark>Nome da cidade no exterior, local do imóvel.</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/end/endExt/ | <mark>xEstProvReg</mark> | <mark>E</mark> | C | 1-1 | 1-60 | <mark>Estado, província ou região da cidade no exterior, local do imóvel.</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/end/ | <mark>xLgr</mark> | <mark>E</mark> | C | 1-1 | 1-255 | <mark>Tipo e nome do logradouro do endereço do imóvel.</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/end/ | <mark>nro</mark> | <mark>E</mark> | C | 1-1 | 1-60 | <mark>Número no logradouro do endereço do imóvel.</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/end/ | <mark>xCpl</mark> | <mark>E</mark> | C | 0-1 | 1-156 | <mark>Complemento do endereço do imóvel.</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/end/ | <mark>xBairro</mark> | <mark>E</mark> | C | 1-1 | 1-60 | <mark>Bairro do endereço do imóvel.</mark> |

Observação importante acerca dos campos acima:

1. O grupo “obra” em “NFSe/infNFSe/DPS/infDPS/serv” deverá ser utilizado quando se tratar de um serviço de obra.
