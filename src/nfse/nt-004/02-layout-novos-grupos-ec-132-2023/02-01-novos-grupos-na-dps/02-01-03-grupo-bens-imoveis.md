# 2.1.2. Grupo de Informações de Operações Relacionadas a Bens Imóveis, Exceto Obras

<!-- REVISAR p.13: numeração repetida na fonte – o grupo de imóveis aparece como “2.1.2.” (o sumário também o lista como 2.1.2, após o 2.1.2 removido); o grupo de serviço prestado é “2.1.3”. Mantida a numeração impressa. -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/** | **imovel** | **G** | **-** | **0-1** | **-** | **Grupo de informações de operações relacionadas a bens imóveis, exceto obras.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/ | inscImobFisc | E | C | 0-1 | 1-30 | Inscrição imobiliária fiscal<br>(código fornecido pela prefeitura para a identificação da obra ou para fins de recolhimento do IPTU) |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/ | cCIB | CE | C | 1-1 | 8 | Código do Cadastro Imobiliário Brasileiro - CIB |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/** | **end** | **CG** | **-** | **1-1** | **-** | **Grupo de informações do endereço do imóvel.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/end/ | CEP | CE | C | 1-1 | 8 | Código de Endereçamento Postal numérico do endereço nacional do imóvel. |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/end/** | **endExt** | **CG** | **-** | **1-1** | **-** | **Grupo de informações descritivas do endereço do imóvel no exterior.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/end/endExt/ | cEndPost | E | C | 1-1 | 1-11 | Código de Endereçamento Postal alfanumérico do endereço do imóvel no exterior. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/end/endExt/ | xCidade | E | C | 1-1 | 1-60 | Nome da cidade no exterior, local do imóvel. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/end/endExt/ | xEstProvReg | E | C | 1-1 | 1-60 | Estado, província ou região da cidade no exterior, local do imóvel. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/end/ | xLgr | E | C | 1-1 | 1-255 | Tipo e nome do logradouro do endereço do imóvel. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/end/ | nro | E | C | 1-1 | 1-60 | Número no logradouro do endereço do imóvel. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/end/ | xCpl | E | C | 0-1 | 1-156 | Complemento do endereço do imóvel. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/imovel/end/ | xBairro | E | C | 1-1 | 1-60 | Bairro do endereço do imóvel. |

Observação importante acerca dos campos acima:

1. O grupo “obra” em “NFSe/infNFSe/DPS/infDPS/serv” deverá ser utilizado quando se tratar de um serviço de obra.
