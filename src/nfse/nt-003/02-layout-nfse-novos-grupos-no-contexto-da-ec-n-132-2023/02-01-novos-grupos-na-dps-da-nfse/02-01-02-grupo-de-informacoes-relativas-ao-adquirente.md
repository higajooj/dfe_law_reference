# 2.1.2 Grupo de Informações Relativas ao Adquirente

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/** | **adq** | **G** | **-** | **0-1** | **-** | **Grupo de informações relativas ao Adquirente** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/ | CNPJ | CE | N | 1-1 | 14 | Número da inscrição no Cadastro Nacional de Pessoa Jurídica (CNPJ) do adquirente de serviço |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/ | CPF | CE | N | 1-1 | 11 | Número da inscrição no Cadastro de Pessoa Física (CPF) do adquirente do serviço |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/ | NIF | CE | C | 1-1 | 40 | Número de identificação fiscal fornecido por órgão de administração tributária no exterior |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/ | cNaoNIF | CE | N | 1-1 | 1 | Motivo para não informação do NIF:<br><br>0 - Não informado na nota de origem;<br>1 - Dispensado do NIF;<br>2 - Não exigência do NIF; |
| <mark>~~NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/~~</mark> | <mark>~~CAEPF~~</mark> | <mark>~~E~~</mark> | <mark>~~N~~</mark> | <mark>~~0-1~~</mark> | <mark>~~14~~</mark> | <mark>~~Número do Cadastro de Atividade Econômica da Pessoa Física (CAEPF) do adquirente do serviço.~~</mark> |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/ | xNome | E | C | 1-1 | 150 | Nome / Nome Empresarial do adquirente |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/** | **end** | **G** | **-** | **0-1** | **-** | **Grupo de informações do endereço do adquirente do serviço.** |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/** | **endNac** | **CG** | **-** | **1-1** | **-** | **Grupo de informações do endereço nacional.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/endNac/ | cMun | E | N | 1-1 | 7 | Código do município do endereço do adquirente do serviço.<br>(Tabela do IBGE) |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/endNac/ | CEP | E | C | 1-1 | 8 | Código numérico do Endereçamento Postal nacional (CEP) do endereço do adquirente do serviço. |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/** | **endExt** | **CG** | **-** | **1-1** | **-** | **Grupo de informações do endereço no exterior.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/endExt/ | cPais | E | C | 1-1 | 2 | Código do país do endereço do adquirente do serviço.<br>(Tabela de Países ISO) |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/endExt/ | cEndPost | E | C | 1-1 | 1-11 | Código alfanumérico do Endereçamento Postal no exterior do adquirente do serviço. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/endExt/ | xCidade | E | C | 1-1 | 1-60 | Nome da cidade no exterior do adquirente do serviço. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/endExt/ | xEstProvReg | E | C | 1-1 | 1-60 | Estado, província ou região da cidade no exterior do adquirente do serviço. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/ | xLgr | E | C | 1-1 | 1-255 | Tipo e nome do logradouro do endereço do adquirente do serviço. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/ | nro | E | C | 1-1 | 1-60 | Número no logradouro do endereço do adquirente do serviço. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/ | xCpl | E | C | 0-1 | 1-156 | Complemento do endereço do adquirente do serviço. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/end/ | xBairro | E | C | 1-1 | 1-60 | Bairro do endereço do adquirente do serviço. |

<!-- p.09 -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/ | fone | E | N | 0-1 | 6-20 | Número do telefone do adquirente do serviço.<br>(Preencher com o Código DDD + número do telefone. Nas operações com exterior é permitido informar o código do país + código da localidade + número do telefone) |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/adq/ | email | E | C | 0-1 | 1-80 | E-mail do adquirente. |

> **Revogado/Descontinuado:** no original, o campo `CAEPF` do adquirente está riscado (linha inteira).
