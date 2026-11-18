# 2.1.1 Grupo de Informações Relativas ao Destinatário

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/** | **dest** | **G** | **-** | **0-1** | **-** | **Grupo de informações relativas ao Destinatário** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/dest/ | CNPJ | CE | N | 1-1 | 14 | Número da inscrição no Cadastro Nacional de Pessoa Jurídica (CNPJ) do destinatário de serviço |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/dest/ | CPF | CE | N | 1-1 | 11 | Número da inscrição no Cadastro Nacional de Pessoa Física (CPF) do destinatário do serviço |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/dest/ | NIF | CE | C | 1-1 | 40 | Número de identificação fiscal fornecido por órgão de administração tributária no exterior |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/dest/ | cNaoNIF | CE | N | 1-1 | 1 | Motivo para não informação do NIF:<br><br>0 - Não informado na nota de origem;<br>1 - Dispensado do NIF;<br>2 - Não exigência do NIF; |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/dest/ | xNome | E | C | 1-1 | 150 | Nome / Nome Empresarial do destinatário |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/dest/** | **end** | **G** | **-** | **0-1** | **-** | **Grupo de informações do endereço do destinatário do serviço.** |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/dest/end/** | **endNac** | **CG** | **-** | **1-1** | **-** | **Grupo de informações do endereço nacional.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/dest/end/endNac/ | cMun | E | N | 1-1 | 7 | Código do município do endereço do destinatário do serviço.<br>(Tabela do IBGE) |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/dest/end/endNac/ | CEP | E | C | 1-1 | 8 | Código numérico do Endereçamento Postal nacional (CEP) do endereço do destinatário do serviço. |
| **NFSe/infNFSe/DPS/infDPS/IBSCBS/dest/end/** | **endExt** | **CG** | **-** | **1-1** | **-** | **Grupo de informações do endereço no exterior.** |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/dest/end/endExt/ | cPais | E | C | 1-1 | 2 | Código do país do endereço do destinatário do serviço.<br>(Tabela de Países ISO) |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/dest/end/endExt/ | cEndPost | E | C | 1-1 | 1-11 | Código alfanumérico do Endereçamento Postal no exterior do destinatário do serviço. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/dest/end/endExt/ | xCidade | E | C | 1-1 | 1-60 | Nome da cidade no exterior do destinatário do serviço. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/dest/end/endExt/ | xEstProvReg | E | C | 1-1 | 1-60 | Estado, província ou região da cidade no exterior do destinatário do serviço. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/dest/end/ | xLgr | E | C | 1-1 | 1-255 | Tipo e nome do logradouro do endereço do destinatário do serviço. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/dest/end/ | nro | E | C | 1-1 | 1-60 | Número no logradouro do endereço do destinatário do serviço. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/dest/end/ | xCpl | E | C | 0-1 | 1-156 | Complemento do endereço do destinatário do serviço. |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/dest/end/ | xBairro | E | C | 1-1 | 1-60 | Bairro do endereço do destinatário do serviço. |

<!-- p.12 -->

| Caminho no XML | Campo | Ele | Tipo | Ocor. | Tam. | Descrição/Observação |
|---|---|---|---|---|---|---|
| NFSe/infNFSe/DPS/infDPS/IBSCBS/dest/ | fone | E | N | 0-1 | 6-20 | Número do telefone do destinatário.<br>(Preencher com o Código DDD + número do telefone. Nas operações com exterior é permitido informar o código do país + código da localidade + número do telefone) |
| NFSe/infNFSe/DPS/infDPS/IBSCBS/dest/ | email | E | C | 0-1 | 1-80 | E-mail do destinatário. |
